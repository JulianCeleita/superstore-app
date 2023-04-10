import Head from "next/head";
import Header from '../components/Header';
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="bg-gray-100">
        <Head>
            <title>Super Store</title>
            <meta content="width=device-width,
            initial-scale=1" name="viewport" />
            <link rel="icon" href="/super.ico" />
        </Head>
        <Header/>
        <main className="max-w-screen-xl mx-auto">
          <Banner/>
          {/* Products */}
        </main>
    </div>
  )
}