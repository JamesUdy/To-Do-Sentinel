import React from 'react';

const SiteConstants = () => {

  const prodBaseURL = process.env.NEXT_PUBLIC_METADATA_PROD_BASE_URL;
  const devBaseURL = process.env.NEXT_PUBLIC_METADATA_DEV_BASE_URL  ;

  const siteName = "ToDo Sentinel";
  const siteCatchPhrase = "Your perfect 'to-do list' partner!";
  const siteDescription = "Discover productivity like never before with ToDo Sentinel - your go-to to-do list platform! Navigate your tasks with ease, set priorities, and stay on top of your goals effortlessly. ToDo Sentinel offers a sleek and intuitive interface to elevate your task management experience. Maximize your efficiency, track progress, and conquer your to-do list with confidence. Join ToDo Sentinel now and take control of your productivity journey!";

  const siteUserDetailsPageTitle = "User Details";
  const siteUserDetailsPageDescription = "Your ToDo Sentinel User Details page - your command center for a personalized experience. Track your journey with joined date and last login details, while ensuring security with verified email status. Easily manage your profile information, including your name, email, and profile image. Stay connected, stay informed - it's all about you at ToDo Sentinel.";

  return {
    devBaseURL,
    prodBaseURL,
    siteCatchPhrase,
    siteDescription,
    siteName,
    
    siteUserDetailsPageTitle,
    siteUserDetailsPageDescription,
  };
};

export default SiteConstants;
