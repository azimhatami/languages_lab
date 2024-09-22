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
    this._setNotes(notes)

    // Set active note
    if (notes.length > 0) {
      this._setActiveNote(notes[0])
    }
  }

  _setNotes(notes) {
    this.notes = notes;
    this.view.updateNotesList(notes);
    this.view.updateNotePreviewVisibility(notes.length > 0);
  }

  _setActiveNote(note) {
    this.activeNote = note = note;
    this.view.updateActiveNote(note);
  }

  _handlers() {
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
        NotesAPI.saveNote({
          id: this.activeNote.id,
          title: newTitle,
          body: newBody
        })
        this._refreshNotes();
      },
      onNoteSelector : (noteId) => {
        const selectedNote = this.notes.find((n) => n.id == noteId);
        this._setActiveNote(selectedNote);
      },
      onNoteDelete : (noteId) => {
        NotesAPI.deleteNote(noteId);
        this._refreshNotes();
      }
    }
  }
};



export default App;
