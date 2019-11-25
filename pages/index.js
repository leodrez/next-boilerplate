import Head from "next/head";
import Link from "next/link";

import getCollection from '../firebase/queries/getCollection'

export const config = { amp: true };

function Index({ projects, products }) {
  return (
    <div>
      <div>
        <Head>
          <title>UNIQORNS</title>
        </Head>
      </div>
      <h1>Products</h1>
      <Link href="/products"><a>Products</a></Link>
      <br/>
      <Link href="/projects"><a>Projects</a></Link>
      <p>//</p>
      <h3>Projects</h3>
      <div>
        {projects.map(p => (
          <Link href={{ pathname: `/project/${p.id}` }}>
            <a>
              {p.name}
              <br />
            </a>
          </Link>
        ))}
      </div>
      <p>//</p>
      <h3>Products</h3>
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
      <style jsx>{`
        p {
          color: blue;
        }
      `}</style>
    </div>
  );
}

Index.getInitialProps = async function() {
  const projects = await getCollection('projects')
  const products = await getCollection('products')
  return { projects, products };
};

export default Index;
