import Link from "next/link";

import getDocument from '../../firebase/queries/getDocument';

export const config = { amp: true };

const Product = ({data}) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>Product</p>
      <h1>{data.name}</h1>
    </div>
  );
};

Product.getInitialProps = async ({ query }) => {
  const productId = query.id;
  const data = await getDocument('products', productId);
  return { data };
};

export default Product;
