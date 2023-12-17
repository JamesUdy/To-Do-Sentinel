
import React from 'react';
import DetailsPage from './DetailsPage';
import { Metadata } from 'next';
import SiteConstants from '@/constants/SiteConstants';

export const generateMetadata = async (): Promise<Metadata> => {
  const { devBaseURL, prodBaseURL, siteUserDetailsPageTitle, siteUserDetailsPageDescription } = SiteConstants();

  let pageTitle = `${siteUserDetailsPageTitle}`;
  let pageDescription = `${siteUserDetailsPageDescription}`;

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

const UserDetails = () => {
  
  return (
    <>
      <DetailsPage/>
    </>
  );
};

export default UserDetails;
