
import React from 'react';
import HomePage from './HomePage';
import { Metadata } from 'next';
import SiteConstants from '@/constants/SiteConstants';

export const generateMetadata = async (): Promise<Metadata> => {
  const { devBaseURL, prodBaseURL, siteCatchPhrase, siteDescription, siteName } = SiteConstants();

  let pageTitle = `${siteName} - ${siteCatchPhrase}`;
  let pageDescription = `${siteDescription}`;

  let metadataBaseUrl: string = prodBaseURL ?? devBaseURL ?? '';

  return {
    metadataBase: new URL(metadataBaseUrl),
    title: pageTitle,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
    }
  };
};

const Home = () => {
  
  return (
    <section className='flex flex-col place-content-start w-full max-h-screen'>
      <HomePage/>
    </section>
  );
};

export default Home;
