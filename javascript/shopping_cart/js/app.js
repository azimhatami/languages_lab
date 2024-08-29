import {productsData} from './products.js';

const showBtn = document.querySelector('.fa-cart-shopping');
const cartModal = document.querySelector('.modal-container');
const backDrop = document.querySelector('.backdrop');
const hideBtn = document.querySelector('.cart-item-confirm');
const productsDOM = document.querySelector('.products');
const cartTotal = document.querySelector('.cart-total-price');
const cartItems = document.querySelector('.cart-number');

let cart = [];


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

  getAddToCartBtns() {
    const addToCartBtns = document.querySelectorAll('.btn');
    const buttons = [...addToCartBtns];
    // console.log(buttons);
    buttons.forEach((btn) => {
      const id = btn.dataset.id;
      const isInCart = cart.find(p => p.id === id); 
      
      if (isInCart) {
        btn.innerText = 'In Cart';
        btn.disabled = true;
      }
      btn.addEventListener('click', (event) => {
        event.target.innerText = 'In Cart';
        event.target.disabled = true;
        const addedProduct = Storage.getProduct(id);
        
        cart = [...cart, {...addedProduct, quantity: 1}]

        Storage.saveCart(cart);

        this.setCartValue(cart);
      });
    });
    
    // console.log([...addToCartBtns]);
  }

  setCartValue(cart) {
    let tempCartItems = 0;
    const totalPrice = cart.reduce((accumulator, currentValue) => {
      tempCartItems += currentValue.quantity;
      return accumulator + currentValue.quantity * currentValue.price
    }, 0);

    cartTotal.innerText = `${totalPrice.toFixed(2)}`;
    console.log(cartTotal)
    cartItems.innerText = tempCartItems;
  }
}


class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  static getProduct(id) {
    const _products = JSON.parse(localStorage.getItem('products'));
    return _products.find((p) => p.id === parseInt(id));
  }

  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}


document.addEventListener('DOMContentLoaded', () => {
  // console.log('Loaded');
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
  ui.displayProducts(productsData);
  ui.getAddToCartBtns();
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
