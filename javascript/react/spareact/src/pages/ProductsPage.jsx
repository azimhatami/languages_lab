import Navbar from '../components/Navbar';
import { Link, useSearchParams } from 'react-router-dom';

const products = [
  {id: 1, name: 'products 1'},
  {id: 2, name: 'products 2'},
  {id: 3, name: 'products 3'},
];

function ProductsPage() {

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortby')
  const order = searchParams.get('order')

  console.log(searchParams.toString());
  console.log(sortBy);
  console.log(order);

  const sortHandler = () => {
    setSearchParams({sortby: 'sale', order: 'desc'});
  };

  return(
    <>
      <Navbar />
      <h2>Products Page</h2>
      <button onClick={sortHandler}>sort</button>
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
