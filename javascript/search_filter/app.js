// http://localhost:8000/items

const searchInput = document.querySelector('#search');
const productsDom = document.querySelector('.products');
const btns = document.querySelectorAll('.btn');

let productsData = []; 

const filters = {
  searchItems: '',
};

document.addEventListener('DOMContentLoaded', getAllProducts);

async function getAllProducts() {
  try {
    const { data } = await axios.get('http://localhost:8000/items');
    productsData = data;
    renderProducts(data, filters)
  } catch (error) {
    console.log(error);
  }
}

function renderProducts(products_, filters_) {
  const filteredProducts = products_.filter((product) => {
    return product.title.toLowerCase().includes(filters_.searchItems.toLowerCase());
  });

  productsDom.innerHTML = ``;


  console.log(filteredProducts);

  filteredProducts.forEach((item, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <div class='image-container'>
          <img src=${item.image} alt='p-${index}'/>
        </div>
        <div class='product-desc'>
          <p class='product-title'>${item.title}</p>
          <p class='product-price'>${item.price} $</p>
        </div>`;

    productsDom.appendChild(productDiv);
  });
}


searchInput.addEventListener('input', (event) => {
  // console.log(event.target.value)
  filters.searchItems = event.target.value;
  renderProducts(productsData, filters)
});

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filters.searchItems = e.target.dataset.filter;
    renderProducts(productsData, filters)
  });
})
