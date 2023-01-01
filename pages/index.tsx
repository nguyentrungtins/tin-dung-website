import Head from "next/head";
import client from "../apolloClient";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Pages/Home/Home";
import { gql } from "@apollo/client";
import { Product, productInterface } from "../types";
import { NextPage } from "next";

const Home: NextPage<{ products: Product[] }> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Thảo Trang</title>
        <meta name="description" content="Phụ Tùng Xe Máy Thaỏ Trang" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <main>
        <NavBar></NavBar>
        <HomePage products={products} />
      </main>

      <footer></footer>
    </div>
  );
};
export default Home;

export async function getStaticProps() {
  let { data } = await client.query({
    query: gql`
      query Products {
        products {
          actualPrice
          createdAt
          description
          detail
          id
          image
          name
          originalPrice
          publishedAt
          sale
          slug
          updatedAt
        }
      }
    `,
  });
  data = JSON.stringify(data);

  const productData = JSON.parse(data);
  const { products } = productData;
  return {
    props: { products: products },
  };
}
