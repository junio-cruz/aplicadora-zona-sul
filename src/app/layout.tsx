'use client';

import React from 'react';
import Head from 'next/head';

import { Providers } from './providers';
import StyledComponentRegistry from '../registry';
import '../styles/global.css';

import Header from '../components/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Aplicadora Zona Sul</title>
        <meta name="Mais de 40 anos trabalhando com revestimentos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <body>
        <StyledComponentRegistry>
          <Header />
          <Providers>{children}</Providers>
        </StyledComponentRegistry>
      </body>
    </html>
  );
}
