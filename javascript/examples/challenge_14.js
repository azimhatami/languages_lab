// Challenge : search on products

const products = [
  {
    id: 1,
    title: 'React.js Course',
  },
  {
    id: 2,
    title: 'Node.js Course',
  },
  {
    id: 3,
    title: 'Next.js Course',
  },
  {
    id: 4,
    title: 'Vue.js Course',
  },
];


const filters = {
  title: '',
};

const searchInput = document.querySelector('#search-value');

const courses = document.querySelector('.courses');

searchInput.addEventListener('input', (event) => {
  // console.log(event.target.value));
  filters.title = event.target.value.trim();
  renderProducts(products, filters);
});


function renderProducts(_products, _filters) {
  const filteredProducts = _products.filter((product) => {
    return product.title.toLowerCase().includes(_filters.title.toLowerCase()); 
  });

  courses.innerHTML = '';

  // console.log(filteredProducts);

  filteredProducts.forEach((item) => {
    const p = document.createElement('p');
    p.classList.add('course-title');
    p.textContent = item.title;
    courses.append(p); 
  });
}


renderProducts(products, filters);







