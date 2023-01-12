import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/Pages/Home/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thao Trang</title>
        <meta name="description" content="Phu tung xe may" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <NavBar/>
        <HomePage />
      </main>
    </>
  );
};

export default Home;
