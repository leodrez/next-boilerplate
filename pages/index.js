import React, { useState } from "react";

import Head from "next/head";
import Link from "next/link";

import loadDB from "../lib/load-firebase";

export const config = { amp: true };

function Index({ data }) {
  return (
    <div>
      <div>
        <Head>
          <title>UNIQORNS</title>
        </Head>
      </div>
      <h1>Products</h1>
      <div>
        {data.map(p => (
          <Link href={{ pathname: `/project/${p.id}` }}>
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
  const db = await loadDB();
  let products = [];
  let id = [];

  let data = [];

  // ref = querySnapshot
  const ref = await db.collection("products").get();

  ref.forEach(doc => {
    if (!doc.exists) {
      console.log("No such document!");
    }
    id.push(doc.id);
    products.push(doc.data());
  });

  function consolidateData() {
    let i = 0;
    products.map(z => {
      data.push({ id: id[i], ...z });
      i++;
    });
  }

  await consolidateData();

  return { data };
};

export default Index;
