import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const products = [
  {id: 1, name: 'products 1'},
  {id: 2, name: 'products 2'},
  {id: 3, name: 'products 3'},
];

function ProductsPage() {
  return(
    <>
      <Navbar />
      <h2>Products Page</h2>
      <ul>
        {products.map((product) => {
          return(
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}


export default ProductsPage
