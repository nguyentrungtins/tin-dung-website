import Head from "next/head";
import client from "../apolloClient";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Pages/Home/Home";
import { GraphQLRequest, gql } from "@apollo/client";
import { Product, productInterface } from "../types";
import ProductList from "../components/Products/ProductList";

export default function Home({ data }: Product) {
  // console.log("data from Index: \n", typeof data);
  const products = JSON.parse(data);
  // console.log(products.products);
  return (
    <div>
      <Head>
        <title>Thảo Trang</title>
        <meta name="description" content="Phụ Tùng Xe Máy Thaỏ Trang" />
        <link rel="icon" href="/images/Logo.png" />
      </Head>

      <main>
        <NavBar></NavBar>
        <HomePage products={products.products} />
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  let { data }: productInterface = await client.query({
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

  return {
    props: { data },
  };
}
