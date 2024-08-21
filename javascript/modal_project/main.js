const showModalBtn = document.querySelector('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

showModalBtn.addEventListener('click', () => {
    backdrop.classList.remove('hidden');
    modal.classList.remove('hidden');
});

function closeModal () {
    backdrop.classList.add('hidden');
    modal.classList.add('hidden');
}

closeModalBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);
