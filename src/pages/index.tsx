import Head from "next/head";
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
        <Head>
            <title>Super Store</title>
            <meta content="width=device-width,
            initial-scale=1" name="viewport" />
            <link rel="icon" href="/super.ico" />
        </Head>
        <Header/>
    </div>
  )
}