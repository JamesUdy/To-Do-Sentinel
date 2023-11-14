
import React from 'react';
import { BackButton } from '@/assets';
import ThemeToggleButton from '../themeToggleButton/ThemeToggleButton';
import Link from 'next/link';
import Details from './Details/Details';

const UserDetails = () => {
  
  return (
    <section className='container flex items-center justify-center font-mono relative'>
      <Details />
      <Link href='/todolist' className='absolute top-4 left-10 flex items-center font-semibold cursor-pointer hover:scale-110'>
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
