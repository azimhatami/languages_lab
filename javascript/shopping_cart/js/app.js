const showBtn = document.querySelector('.fa-cart-shopping');
const cartModal = document.querySelector('.modal-container');
const backDrop = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.cart-item-confirm');


function showModal() {
  backDrop.style.display = 'block';
  cartModal.style.display = 'block';
}

function hideModal() {
  backDrop.style.display = 'none';
  cartModal.style.display = 'none';
}

showBtn.addEventListener('click', showModal);
hideBtn.addEventListener('click', hideModal);
backDrop.addEventListener('click', hideModal);
