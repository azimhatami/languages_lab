import NotesAPI from './NotesAPI.js';
import NotesView from './NotesView.js';

class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new NotesView(root, this._handlers());
    this._refreshNotes();
  }

  _refreshNotes() {
    const notes = NotesAPI.getAllNotes();

    // Set Notes
    this.notes = notes;
    this.view.updateNotesList(notes);
    this.view.updateNotePreviewVisibility(notes.length > 0);

    // Set active note
    this.activeNote = notes[0];
    this.view.updateActiveNote(notes[0]);
  }

  _handlers () {
    return {
      onNoteAdd : () => {
        const newNote = {
          title: 'New Note',
          body: 'This is a new note for test!'
        };

        NotesAPI.saveNote(newNote);
        this._refreshNotes();
      },
      onNoteEdit : (newTitle, newBody) => {
        console.log(newTitle, newBody);
      },
      onNoteSelector : (noteId) => {
        const selectedNote = this.notes.find((n) => n.id == noteId);
        this.activeNote = selectedNote;
        this.view.updateActiveNote(selectedNote);
      },
      onNoteDelete : (noteId) => {
        console.log(noteId);
      }
    }
  }
};



export default App;
