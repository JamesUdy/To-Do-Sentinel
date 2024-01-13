import React from 'react';
import { Metadata } from 'next';
import SiteConstants from '@/constants/SiteConstants';

export const generateMetadata = async (): Promise<Metadata> => {
    const { devBaseURL, prodBaseURL, siteName, siteCreditsPageTitle, siteCreditsPageDescription } = SiteConstants();
  
    let pageTitle = `${siteName} / ${siteCreditsPageTitle}`;
    let pageDescription = `${siteCreditsPageDescription}`;
  
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

const CreditsPage = () => {
  return (
    <div>CreditsPage</div>
  );
};

export default CreditsPage;
