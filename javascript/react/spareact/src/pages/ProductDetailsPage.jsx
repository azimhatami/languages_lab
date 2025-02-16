import { useParams } from 'react-router-dom';


function ProductsDetailsPage() {

  const params = useParams();
  console.log(params)

  return(
    <>
      ProductsDetailsPage
      <p>products {params.id}</p>
    </>
  );
}


export default ProductsDetailsPage
