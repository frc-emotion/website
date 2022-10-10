import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
