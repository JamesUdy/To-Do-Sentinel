'use client';

import React from 'react';
import useAuth from '../hooks/useAuth';
import Image from 'next/image';
import { BackButton, ProfileName } from '@/assets';
import ThemeToggleButton from '../themeToggleButton/ThemeToggleButton';
import Link from 'next/link';

const UserDetails = () => {
  const { user } = useAuth();

  console.log(user);

  const userDp = user?.photoURL;
  const userName = user?.displayName;
  const userEmail = user?.email;

  const formatName = (userName: string | null | undefined) => {
    if(userName !== undefined || userName !== null) {
      const words = userName?.split(' ');

      const formattedName = words?.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });

      return formattedName?.join(' ');
    } else {
      return '';
    };
  };

  const formatUserName = formatName(userName);

  return (
    <section className='container flex items-center justify-center font-mono relative'>
      <div className='flex flex-col items-center space-y-6 bg-slate-400/80 dark:bg-slate-900 py-12 px-8 rounded-xl shadow-xl shadow-black/40'>
        <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full w-24 h-24 shadow-xl shadow-slate-950/80' priority={true} />}
        </div>
        <div>
          <section className='flex tracking-tighter flex-col items-center'>
            <span className='text-2xl font-bold first-letter:font-bold text-slate-950 dark:text-slate-300'>{formatUserName}</span>
            <span className='text-md first-letter:font-medium text-slate-800 dark:text-slate-500'>{userEmail}</span>
          </section>
          {/* <section className='flex items-center'>
            <div>
              <ProfileName/>
            </div>
            <div className='flex flex-col'>
              <span className='text-slate-700 dark:text-slate-500 text-sm font-medium'>name</span>
              <span className='text-xl'>{userName}</span>
            </div>
          </section>
          <section className='flex items-center'>
            <div>
              <ProfileName/>
            </div>
            <div className='flex flex-col'>
              <span className='text-slate-700 dark:text-slate-500 text-sm font-medium'>email</span>
              <span className='text-xl'>{userEmail}</span>
            </div>
          </section> */}
        </div>
      </div>
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
