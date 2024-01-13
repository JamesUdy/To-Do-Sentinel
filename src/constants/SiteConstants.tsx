
const SiteConstants = () => {

  const prodBaseURL = process.env.NEXT_PUBLIC_METADATA_PROD_BASE_URL;
  const devBaseURL = process.env.NEXT_PUBLIC_METADATA_DEV_BASE_URL  ;

  const siteName = "ToDo Sentinel";
  const siteCatchPhrase = "Your perfect 'to-do list' partner!";
  const siteDescription = "Discover productivity like never before with ToDo Sentinel - your go-to to-do list platform! Navigate your tasks with ease, set priorities, and stay on top of your goals effortlessly. ToDo Sentinel offers a sleek and intuitive interface to elevate your task management experience. Maximize your efficiency, track progress, and conquer your to-do list with confidence. Join ToDo Sentinel now and take control of your productivity journey!";

  const siteToDoFormPageTitle = "Form";
  const siteToDoFormPageDescription = "Elevate your productivity with ToDo Sentinel! Kickstart your journey on our ToDo Form page by seamlessly adding and organizing tasks. Your path to success begins here—make each task count and conquer with confidence. Start shaping your day with purpose now!";

  const siteTaskRepositoryPageTitle = "Task Repository";
  const siteTaskRepositoryPageDescription = "Unlock the power of organization with ToDo Sentinel's Repositories! Immerse yourself in seamlessly managed tasks, categorize with logic, and conquer your goals step by step. Monitor progress, stay motivated, and transform your productivity journey into a triumph. Dive into the art of efficient task management now!";

  const siteUserDetailsPageTitle = "User Details";
  const siteUserDetailsPageDescription = "Your ToDo Sentinel User Details page - your command center for a personalized experience. Track your journey with joined date and last login details, while ensuring security with verified email status. Easily manage your profile information, including your name, email, and profile image. Stay connected, stay informed - it's all about you at ToDo Sentinel.";

  const siteCreditsPageTitle = "Credits";
  const siteCreditsPageDescription = "The Credits page acknowledges and appreciates the various resources utilized in the creation of this website. We believe in giving credit where it's due and expressing gratitude to the creators and contributors whose work has enriched our web presence. Below, you'll find a comprehensive list of images, icons, links, and other resources used, along with the respective attributions.";

  return {
    devBaseURL,
    prodBaseURL,

    // Metadata for homepage 
    siteCatchPhrase,
    siteDescription,
    siteName,

    // Metadata for form page 
    siteToDoFormPageTitle,
    siteToDoFormPageDescription,

    // Metadata for repository page 
    siteTaskRepositoryPageTitle,
    siteTaskRepositoryPageDescription,
    
    // Metadata for user details page 
    siteUserDetailsPageTitle,
    siteUserDetailsPageDescription,

    // Metadata for credits page 
    siteCreditsPageTitle,
    siteCreditsPageDescription,
  };
};

export default SiteConstants;
