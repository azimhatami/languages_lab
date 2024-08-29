import {productsData} from './products.js';

const showBtn = document.querySelector('.fa-cart-shopping');
const cartModal = document.querySelector('.modal-container');
const backDrop = document.querySelector('.backdrop');
const hideBtn = document.querySelector('.cart-item-confirm');
const productsDOM = document.querySelector('.products');


class Products {
  getProduct() {
    return productsData;
  }
}


class UI {
  displayProducts(products) {
    let result = '';
    products.forEach((item) => {
      result += `<div class='product'>
          <div class='img-container'>
            <img src=${item.imageUrl} alt='product-1'>
          </div>
          <div class='description'>
            <p class='description-title'>${item.title}</p>
            <p class='description-price'>${item.price} $</p>
          </div>
          <button class='btn' data-id=${item.id}>Add to cart</button>
        </div>`;

      productsDOM.innerHTML = result;
    });
  }
}


class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // console.log('Loaded');
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
  ui.displayProducts(productsData);
  Storage.saveProducts(productsData);
});




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
