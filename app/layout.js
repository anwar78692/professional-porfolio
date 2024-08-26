'use client';
import './globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/lib/register';
import { LoadingProvider, useLoading } from './LoadingContext';

function ContentLayout({ children }) {
  const pathname = usePathname();
  const { loading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    startLoading();

    const handleComplete = () => {
      stopLoading();
    };

    handleComplete(); // This should be called after the route change completes
    return () => {
      // Cleanup if necessary
    };
  }, [pathname]); // Use pathname to detect route changes

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="title" content="Anwar Ahmad's Portfolio" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap" rel="stylesheet" />
        <title>Anwar Ahmad's Portfolio</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <LoadingProvider>
            <ContentLayout>{children}</ContentLayout>
          </LoadingProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
