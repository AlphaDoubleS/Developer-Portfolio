import React from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import './i18n';
import type { AppProps } from 'next/app';
import { Layout } from 'components/layout';

const PortfolioApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Portfolio Laura Janssens</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default PortfolioApp;
