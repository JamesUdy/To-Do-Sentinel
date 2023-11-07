import { darkThemeLogo, lightThemeLogo } from '@/assets';
import Image from "next/image";
import React from 'react';

interface NavbarProps {
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  showProfile: boolean;
  userDp: string | null;
};

const Navbar: React.FC<NavbarProps> = ({setShowProfile, showProfile, userDp}) => {
  const handleShowProfile = (): any => {
    setShowProfile(!showProfile);
  };

  return (
    <section className='flex w-full justify-between items-center'>
      <section className='flex items-center'>
        <div>
          <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-20 inline-block dark:hidden"/>
          <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-20 hidden dark:inline-block"/>
        </div>
        <span className="text-3xl w360:text-5xl sm:text-2xl font-bold website-name">To Do Sentinel</span>
      </section>
      <div onClick={() => handleShowProfile()}>
        {userDp && <Image src={userDp} alt='User Dp' width={40} height={40} className='rounded-full' priority={true} />}
      </div>
    </section>
  );
};

export default Navbar;
