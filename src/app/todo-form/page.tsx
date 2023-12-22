
import React from 'react';
import ToDoFormPage from './ToDoFormPage';
import { Metadata } from 'next';
import SiteConstants from '@/constants/SiteConstants';

export const generateMetadata = async (): Promise<Metadata> => {
  const { devBaseURL, prodBaseURL, siteName, siteToDoFormPageTitle, siteToDoFormPageDescription } = SiteConstants();

  let pageTitle = `${siteName} / ${siteToDoFormPageTitle}`;
  let pageDescription = `${siteToDoFormPageDescription}`;

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

const ToDoList = () => {
  return (
    <section className='flex flex-col place-content-start w-full max-h-screen'>
      <ToDoFormPage/>
    </section>
  );
};

export default ToDoList;
