const notes = [
  {
    id: 1,
    title: 'First note',
    body: 'This is a first note',
    updated: '2022-09-16T07:58:01.732Z',
  },
  {
    id: 2,
    title: 'Second note',
    body: 'Some dummy text second',
    updated: '2024-09-16T07:58:01.732Z',
  },
  {
    id: 3,
    title: 'Third note',
    body: 'This is a third note',
    updated: '2023-09-16T07:58:01.732Z',
  }
];

class NotesAPI {
  static getAllNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes-app')) || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  static saveNote(note) {
    const notes = NotesAPI.getAllNotes();
    const existedNote = notes.find((n) => n.id === note.id);
    
    if (existedNote) {
      existedNote.title = note.title;
      existedNote.body = note.body;
      existedNote.updated = new Date().toISOString();
    } else {
      note.id = new Date().getTime();
      note.updated = new Date().toISOString();
      notes.push(note);
    }

    localStorage.setItem('notes-app', JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    const filteredNotes = notes.filter(n => n.id !== id)
    localStorage.setItem('notes-app', JSON.stringify(filteredNotes));
  }
}

console.log(NotesAPI.deleteNote(3))
