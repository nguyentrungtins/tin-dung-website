import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { GraphQLRequest, gql } from "@apollo/client";
import client from "../apolloClient";
import type { NextPage } from "next";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Pages/Home/Home";

interface Products {
  data: Object;
}
export default function Home({ data }: Products) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Thảo Trang</title>
        <meta
          name="description"
          content="Phụ Tùng Xe Máy Thaỏ Trang"
        />
        <link
          rel="icon"
          href="/images/Logo.png"
        />
      </Head>

      <main>
        <NavBar></NavBar>

        <HomePage />
      </main>

      <footer></footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Products {
        products {
          actualPrice
          createdAt
          description
          detail
          id
          images
          name
          originalPrice
          productId
          publishedAt
          sale
          slug
          updatedAt
        }
      }
    `,
  });
  console.log(data);
  return {
    props: { data },
  };
}
