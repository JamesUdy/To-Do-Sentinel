import { darkThemeLogo, lightThemeLogo } from '@/assets';
import Image from "next/image";
import React from 'react';

const Navbar = () => {
  return (
    <section className='flex w-full justify-start items-center'>
        <section>
            <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-20 inline-block dark:hidden"/>
            <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-20 hidden dark:inline-block"/>
      </section>
      <span className="text-3xl w360:text-5xl sm:text-2xl font-bold website-name">To Do Sentinel</span>
    </section>
  );
};

export default Navbar;
