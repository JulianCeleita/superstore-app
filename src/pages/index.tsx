import Banner from "@/components/Banner";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }: ProductProps) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Super Store</title>
        <meta
          content="width=device-width,
            initial-scale=1"
          name="viewport"
        />
        <link rel="icon" href="/super.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
      session,
    },
  };
}
