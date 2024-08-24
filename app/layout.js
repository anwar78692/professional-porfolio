'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';
import Loader from './components/Loader';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingProvider, useLoading } from './LoadingContext';

function ContentLayout({ children }) {
  const router = useRouter();
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();

    const handleComplete = () => {
      stopLoading();
    };

    // When router.pathname changes, stop loading
    handleComplete();

    return () => {
      // Cleanup if needed (not strictly necessary here)
    };
  }, [router.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <LoadingProvider>
          <ContentLayout>{children}</ContentLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
