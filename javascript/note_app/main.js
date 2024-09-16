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
    const savedNotes = notes || [];
    return savedNotes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
    });
  }
  saveNote() {
  }
  deleteNote() {
  }
}

console.log(NotesAPI.getAllNotes());
