import { darkThemeLogo, lightThemeLogo } from '@/assets';
import Image from "next/image";
import React from 'react';

interface NavbarProps {
  handleShowProfile: () => void;
  userDp: string | null;
};

const Navbar: React.FC<NavbarProps> = ({handleShowProfile, userDp}) => {

  return (
    <section className='flex w-full justify-between items-center px-4'>
      <section className='flex items-center'>
        <div>
          <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 inline-block dark:hidden"/>
          <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 hidden dark:inline-block"/>
        </div>
        <span className="text-xl w360:text-2xl sm:text-2xl xl:text-3xl font-bold website-name">To Do Sentinel</span>
      </section>
      <div onClick={() => handleShowProfile()}>
        {userDp && <Image src={userDp} alt='User Dp' width={40} height={40} className='rounded-full cursor-pointer' priority={true} />}
      </div>
    </section>
  );
};

export default Navbar;
