import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/crycapital.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CryCapital Website</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
