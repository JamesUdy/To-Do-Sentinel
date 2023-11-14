'use client';

import React from 'react';
import { BackButton } from '@/assets';
import ThemeToggleButton from '../themeToggleButton/ThemeToggleButton';
import Link from 'next/link';
import Details from './Details/Details';

const UserDetails = () => {
  
  return (
    <section className='container flex items-center justify-center font-mono relative'>
      <Details />
      <Link href='/todolist' className='absolute top-4 left-10 flex space-x-2 items-center cursor-pointer'>
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
