import Head from 'next/head';
import React from 'react';
import Navbar from './navbar';

export default function Layout(props: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{props.title ?? 'Turring'}</title>
        <meta name="description" content="Turring." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        {props.children}
      </main>
    </>
  );
}
