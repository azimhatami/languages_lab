class NotesView {
  constructor(root, handlers) {
    this.root = root;
    const { onNoteAdd, onNoteEdit } = handlers;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.root.innerHTML = `
      <header class='titlebar'><h1>Note App</h1></header>
      <nav class='navbar'>
        <input class='nav-input' type='text' placeholder='Please add note...'>
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
    const inputTitle = this.root.querySelector('.nav-input');
    const description = this.root.querySelector('.text_container');


    addNoteBtn.addEventListener('click', () => {
      // run add note method !!!
      this.onNoteAdd();
    });

    [inputTitle, description].forEach(inputField => {
      inputField.addEventListener('blur', () => {
        const newDescription = description.value.trim();
        const newTitle = inputTitle.value.trim();
        this.onNoteEdit(newTitle, newDescription);
      })
    }
    );
  }
}


export default NotesView;
