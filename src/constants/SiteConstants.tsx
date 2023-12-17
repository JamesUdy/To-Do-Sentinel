import React from 'react';

const SiteConstants = () => {

  const prodBaseURL = process.env.NEXT_PUBLIC_METADATA_PROD_BASE_URL;
  const devBaseURL = process.env.NEXT_PUBLIC_METADATA_DEV_BASE_URL  ;
  const siteName = "ToDo Sentinel";
  const siteCatchPhrase = "Your perfect 'to-do list' partner!";
  const siteDescription = "Discover productivity like never before with ToDo Sentinel – your go-to to-do list platform! Navigate your tasks with ease, set priorities, and stay on top of your goals effortlessly. ToDo Sentinel offers a sleek and intuitive interface to elevate your task management experience. Maximize your efficiency, track progress, and conquer your to-do list with confidence. Join ToDo Sentinel now and take control of your productivity journey!";

  return {
    devBaseURL,
    prodBaseURL,
    siteCatchPhrase,
    siteDescription,
    siteName,
  };
};

export default SiteConstants;
