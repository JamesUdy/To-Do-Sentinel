'use client';

import React from 'react';
import useAuth from '../hooks/useAuth';
import Image from 'next/image';
import { ProfileName } from '@/assets';
import ThemeToggleButton from '../themeToggleButton/ThemeToggleButton';

const UserDetails = () => {
  const { user } = useAuth();

  console.log(user);

  const userDp = user?.photoURL;
  const userName = user?.displayName;
  const userEmail = user?.email;

  return (
    <section className='container flex items-center justify-center'>
      <div className='flex items-center space-x-6 bg-slate-400/80 dark:bg-slate-900 py-12 px-8 rounded-xl'>
        <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-md' priority={true} />}
        </div>
        <div>
          <section className='flex flex-col'>
            <span className='text-xl tracking-tight font-bold text-slate-950 dark:text-slate-300'>{userName}</span>
            <span className='text-md tracking-tighter font-medium text-slate-800 dark:text-slate-500'>{userEmail}</span>
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
      <ThemeToggleButton/>
    </section>
  );
};

export default UserDetails;
