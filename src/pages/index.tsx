import { About, Footer, Header, Software } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Laura Janssens</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />

        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="author" content="Laura Janssens" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta
          name="description"
          content="I am a talented Front-end developer with a UI/UX design background."
        />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Portfolio Laura Janssens" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Portfolio Laura Janssens</title>
        <meta data-rh="true" property="og:type" content="website" />
        <meta data-rh="true" property="og:title" content="Portfolio Laura Janssens" />
        <meta data-rh="true" property="og:image" content="/images/laura.png" />
      </Head>

      <Header />

      <main>
        <About />
        <Software />
      </main>

      <Footer />
    </>
  );
};

export default Home;
