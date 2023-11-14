'use client';

import useAuth from '@/app/hooks/useAuth';
import Image from 'next/image';
import React from 'react';
import { ProfileName } from '@/assets';
import formatName from '../formattingDetails/FormattingName';
import formatTimeStamp from '../formattingDetails/FromattingTimeStamp';

const Details = () => {
    const { user } = useAuth();

    console.log(user);
  
    const userDp = user?.photoURL;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const accountCreatedAt = user?.metadata.creationTime as string;
    const accountLastSignedIn = user?.metadata.lastSignInTime as string; 

    const formatAccountCreatedAt = formatTimeStamp(accountCreatedAt);
    const formatAccountLastSignedIn = formatTimeStamp(accountLastSignedIn);
  
    const formatUserName = formatName(userName);

  return (
    <section className='flex flex-col space-y-6 bg-white/90 dark:bg-slate-900 py-12 rounded-xl shadow-xl shadow-slate-500 dark:shadow-black/40'>
        <div className='px-8 flex place-content-center'>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full w-24 h-24 shadow-xl shadow-slate-600 dark:shadow-slate-950/80' priority={true} />}
        </div>
        <div className='px-8'>
          <section className='flex py-4 tracking-tighter flex-col items-center'>
            <span className='text-2xl font-bold first-letter:font-bold text-slate-800 dark:text-slate-300'>{formatUserName}</span>
            <span className='text-md first-letter:font-medium text-slate-600 dark:text-slate-500'>{userEmail}</span>
          </section>
        </div>
        <div className='grid px-4 grid-cols-2 gap-6'>
            <section className='flex flex-col items-start'>
                <span className='text-sm font-bold first-letter:font-medium text-slate-600 dark:text-slate-500'>Email Verified</span>
                <span>{user?.emailVerified ? 'Yes' : 'No'}</span>
            </section>
            <section className='flex flex-col items-start'>
                <span className='text-sm font-bold first-letter:font-medium text-slate-600 dark:text-slate-500'>Created At</span>
                <span>{formatAccountCreatedAt}</span>
            </section>
            <section className='flex flex-col items-start'>
                <span className='text-sm font-bold first-letter:font-medium text-slate-600 dark:text-slate-500'>Last Signed In</span>
                <span>{formatAccountLastSignedIn}</span>
            </section>
            <section className='flex flex-col items-start'>
                <span className='text-sm font-bold first-letter:font-medium text-slate-600 dark:text-slate-500'>Email Verified</span>
                <span>{user?.emailVerified ? 'Yes' : 'No'}</span>
            </section>
        </div>
      </section>
  );
};

export default Details;
