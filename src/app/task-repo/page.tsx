import TaskRepositories from './taskRepositories/TaskRepositories';
import { Metadata } from 'next';
import SiteConstants from '@/constants/SiteConstants';

export const generateMetadata = async (): Promise<Metadata> => {
  const { devBaseURL, prodBaseURL, siteName, siteTaskRepositoryPageTitle, siteTaskRepositoryPageDescription } = SiteConstants();

  let pageTitle = `${siteName} / ${siteTaskRepositoryPageTitle}`;
  let pageDescription = `${siteTaskRepositoryPageDescription}`;

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

const TaskList = () => {

  return (
    <>
      <TaskRepositories/>
    </>
  );
};

export default TaskList;
