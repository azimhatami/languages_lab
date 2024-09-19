class NotesView {
  constructor(root, handlers) {
    this.root = root;
    const { onNoteAdd, onNoteEdit, onNoteSelector, onNoteDelete} = handlers;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteSelector = onNoteSelector;
    this.onNoteDelete = onNoteDelete;
    this.root.innerHTML = `
      <header class='titlebar'><h1>Note App</h1></header>
      <nav class='navbar'>
        <input class='nav_input' type='text' placeholder='Please add note...'>
      </nav>
      <aside class='sidebar'>
        <div class='sidebar_content'>
          <h3>Notes</h3>
          <div class='sidebar_itms'>
          </div>
          <button class='addBtn'>Add Note</button>
        </div>
      </aside>
      <main class='container'>
        <textarea 
          class='text_container' 
          placeholder='Please write a description'></textarea>
      </main>
    `;

    const addNoteBtn = this.root.querySelector('.addBtn');
    const inputTitle = this.root.querySelector('.nav_input');
    const inputBody = this.root.querySelector('.text_container');


    addNoteBtn.addEventListener('click', () => {
      // run add note method !!!
      this.onNoteAdd();
    });

    [inputTitle, inputBody].forEach(inputField => {
      inputField.addEventListener('blur', () => {
        const newBody = inputBody.value.trim();
        const newTitle = inputTitle.value.trim();
        this.onNoteEdit(newTitle, newBody);
      })
    }
    );

    // hide notes preview in first loading
    this.updateNotePreviewVisibility(false);
  }

  _createNoteItem(id, title, body, updated) {
    const MAX_BODY_LENGTH = 50;
    return `
      <div class='sidebar_itm' data-note-id='${id}'>
        <div class='itm_header'>
          <h4 class='title_itm'>${title}</h4>
          <span class='trash' data-note-id='${id}'>
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </div>
        <p class='body_itm'>
          ${body.substring(0, MAX_BODY_LENGTH)}
          ${body.length > MAX_BODY_LENGTH ? '...' : ''}
        </p>
        <p class='date_style'>
          ${new Date(updated).toLocaleString('en', {dateStyle: 'full',timeStyle: 'short',})}
        </p>
      </div>
    `;
  }

  updateNotesList(notes) {
    const notesContainer = this.root.querySelector('.sidebar_itms');

    notesContainer.innerHTML = '';
    
    let notesList = '';
    for (const note of notes) {
      const {id, title, body, updated} = note;
      const html = this._createNoteItem(id, title, body, updated)
      notesList += html;
    }
    notesContainer.innerHTML = notesList;
    notesContainer.querySelectorAll('.sidebar_itm').forEach((noteItm) => {
      noteItm.addEventListener('click', () => {
        this.onNoteSelector(noteItm.dataset.noteId)
      })
    });

    notesContainer.querySelectorAll('.trash').forEach(noteItem => {
      noteItem.addEventListener('click', (event) => {
        event.stopPropagation()
        this.onNoteDelete(noteItem.dataset.noteId)
      })
    })
  }

  updateActiveNote(note) {
    this.root.querySelector('.nav_input').value = note.title;
    this.root.querySelector('.text_container').value = note.body;

    this.root.querySelectorAll('.sidebar_itm').forEach(item => {
      item.classList.remove('sidebar_itm_selected')
    })

    this.root.querySelector(`.sidebar_itm[data-note-id='${note.id}']`).classList.add('sidebar_itm_selected')
  }

  updateNotePreviewVisibility(visible) {
    this.root.querySelector('.nav_input').style.visibility = visible ? 'visible' : 'hidden';
    this.root.querySelector('.text_container').style.visibility = visible ? 'visible' : 'hidden';
  }
}


export default NotesView;
