import { productsData } from "./products.js";

const showBtn = document.querySelector(".fa-cart-shopping");
const cartModal = document.querySelector(".modal-container");
const backDrop = document.querySelector(".backdrop");
const hideBtn = document.querySelector(".cart-item-confirm");
const productsDOM = document.querySelector(".products");
const cartTotal = document.querySelector(".cart-total-price");
const cartItems = document.querySelector(".cart-number");
const cartContent = document.querySelector('.cart-content');
const clearCartBtn = document.querySelector('.clear-cart'); 

let cart = [];
let buttonsDOM = [];

class Products {
  getProduct() {
    return productsData;
  }
}

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((item) => {
      result += `<div class='product'>
          <div class='img-container'>
            <img src=${item.imageUrl} alt='product-1'>
          </div>
          <div class='description'>
            <p class='description-title'>${item.title}</p>
            <p class='description-price'>$ ${item.price}</p>
          </div>
          <button class='btn' data-id=${item.id}>Add to cart</button>
        </div>`;

      productsDOM.innerHTML = result;
    });
  }

  getAddToCartBtns() {
    const addToCartBtns = [...document.querySelectorAll(".btn")];
    buttonsDOM = addToCartBtns;
    // console.log(buttons);
    addToCartBtns.forEach((btn) => {
      const id = btn.dataset.id;
      const isInCart = cart.find((p) => p.id === parseInt(id));

      if (isInCart) {
        btn.innerText = "In Cart";
        btn.disabled = true;
      }
      btn.addEventListener("click", (event) => {
        event.target.innerText = "In Cart";
        event.target.disabled = true;
        const addedProduct = {...Storage.getProduct(id), quantity: 1};

        cart = [...cart, addedProduct];

        Storage.saveCart(cart);
        // Update cart value
        this.setCartValue(cart);
        // Add to cart item
        this.addCartItem(addedProduct);
      });
    });

    // console.log([...addToCartBtns]);
  }

  setCartValue(cart) {
    let tempCartItems = 0;
    const totalPrice = cart.reduce((accumulator, currentValue) => {
      tempCartItems += currentValue.quantity;
      return accumulator + currentValue.quantity * currentValue.price;
    }, 0);

    cartTotal.innerText = `$ ${totalPrice.toFixed(2)}`;
    cartItems.innerText = tempCartItems;
  }

  addCartItem(cartItem) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
    <img class="cart-item-img" src=${cartItem.imageUrl} />
    <div class="cart-item-desc">
      <h4>${cartItem.title}</h4>
      <h5>$ ${cartItem.price}</h5>
    </div>
    <div class="cart-item-conteoller">
      <i class="fas fa-chevron-up" data-id=${cartItem.id}></i>
      <p>${cartItem.quantity}</p>
      <i class="fas fa-chevron-down" data-id=${cartItem.id}></i>
    </div>
    <i class="fa-solid fa-trash" data-id=${cartItem.id}></i>
    `;
    cartContent.appendChild(div);
  }

  setupApp() {
    // get cart from storage
    cart = Storage.getCart() || [];
    // add cart item
    cart.forEach(cartItem => this.addCartItem(cartItem));
    // set value : price + items
    this.setCartValue(cart);
  }

  cartLogic() {
    clearCartBtn.addEventListener('click', () => this.clearCarts());

    // cart functionality
    cartContent.addEventListener('click', (event) => {

      if (event.target.classList.contains('fa-chevron-up')) {
        console.log(event.target.dataset.id);
        const addQuantity = event.target;
        // get item from cart
        const addedItem = cart.find(cItem => parseInt(cItem.id) === parseInt(addQuantity.dataset.id));
        addedItem.quantity++;
        // Update cart value
        this.setCartValue(cart);
        // save cart Storage
        Storage.saveCart(cart);
        // Update cart item UI
        addQuantity.nextElementSibling.innerText = addedItem.quantity;
      }else if (event.target.classList.contains('fa-trash')) {
        const rmItem = event.target;
        const _removedItm = cart.find(c => parseInt(c.id) === parseInt(rmItem.dataset.id));
        this.removeItem(_removedItm.id);
        Storage.saveCart(cart);
        cartContent.removeChild(rmItem.parentElement);
      }else if(event.target.classList.contains('fa-chevron-down')){
        const subQuantity = event.target;
        const substractedItem = cart.find((c) => parseInt(c.id) === parseInt(subQuantity.dataset.id));

        if (substractedItem.quantity === 1) {
          this.removeItem(substractedItem.id);
          cartContent.removeChild(subQuantity.parentElement.parentElement)
          return;
        }

        substractedItem.quantity--;
        // Update cart value
        this.setCartValue(cart);
        // save cart Storage
        Storage.saveCart(cart);
        // Update cart item UI
        subQuantity.previousElementSibling.innerText = substractedItem.quantity;
      }
    });
  }

  clearCarts() {
    cart.forEach(cItm => this.removeItem(cItm.id));
    while (cartContent.children.length) {
      cartContent.removeChild(cartContent.children[0]);
    }
    hideModal();
  }

  removeItem(id) {
    // update cart
    cart = cart.filter((cItem) => cItem.id !== id);
    // update total price cart items
    this.setCartValue(cart);
    // update localstorage
    Storage.saveCart(cart);

    this.getSingleBtn(id);
  }

  getSingleBtn(id){
    const button = buttonsDOM.find(btn => parseInt(btn.dataset.id) === parseInt(id));
    button.innerText = 'Add to cart';
    button.disabled = false;
  }

}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    const _products = JSON.parse(localStorage.getItem("products"));
    return _products.find((p) => p.id === parseInt(id));
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getCart() {
    return JSON.parse(localStorage.getItem('cart'));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // console.log('Loaded');
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
  ui.setupApp();
  ui.displayProducts(productsData);
  ui.getAddToCartBtns();
  ui.cartLogic();
  Storage.saveProducts(productsData);
});

function showModal() {
  backDrop.style.display = "block";
  cartModal.style.display = "block";
}

function hideModal() {
  backDrop.style.display = "none";
  cartModal.style.display = "none";
}

showBtn.addEventListener("click", showModal);
hideBtn.addEventListener("click", hideModal);
backDrop.addEventListener("click", hideModal);
