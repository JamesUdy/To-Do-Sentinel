
import React from 'react';
import { BackButton } from '@/assets';
import ThemeToggleButton from '../themeToggleButton/ThemeToggleButton';
import Link from 'next/link';
import Details from './Details/Details';

const UserDetails = () => {
  
  return (
    <section className='container flex mb-8 w360:mb-0 w375:mb-8 w414:mb-0 items-end w360:items-center w375:items-end w414:items-center justify-center font-mono relative mx-auto'>
      <Details />
      <Link href='/todolist' className='absolute top-4 left-4 sm:left-10 flex items-center font-semibold cursor-pointer'>
        <div className='flex items-center relative'>
          <BackButton/>
        </div>
        <span>Back</span>
      </Link>
      <ThemeToggleButton/>
    </section>
  );
};

export default UserDetails;
