import Link from 'next/link'

import getCollection from "../firebase/queries/getCollection";

export const config = { amp: true };

const Products = ({ products }) => {
  return (
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <h1>Products</h1>
      <div>
        {products.map(p => (
          <Link href={{ pathname: `/product/${p.id}` }}>
            <a>
              {p.name}
              <br />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

Products.getInitialProps = async () => {
  const products = await getCollection("products");
  return { products };
};

export default Products;
