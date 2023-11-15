'use client';

import useAuth from '@/app/hooks/useAuth';
import Image from 'next/image';
import React from 'react';
import { AccountCreated, AccountVerified, LastSignedIn, Phone } from '@/assets';
import formatName from '../formattingDetails/FormattingName';
import formatTimeStamp from '../formattingDetails/FromattingTimeStamp';
import Loader from '@/app/loader/Loader';

const Details = () => {
  const { user } = useAuth();
  
  const userDp = user?.photoURL;
  const userName = user?.displayName;
  const userEmail = user?.email;
  const accountCreatedAt = user?.metadata.creationTime as string;
  const accountLastSignedIn = user?.metadata.lastSignInTime as string; 

  const formatAccountCreatedAt = formatTimeStamp(accountCreatedAt);
  const formatAccountLastSignedIn = formatTimeStamp(accountLastSignedIn);  
  const formatUserName = formatName(userName);

  const userDetailsData = [
    {
      id: 1,
      label: 'Email Verified',
      value: user?.emailVerified ? 'Yes' : 'No',
      component: AccountVerified,
    },
    {
      id: 2,
      label: 'Phone Number',
      value: user?.phoneNumber || 'Null',
      component: Phone,
    },
    {
      id: 3,
      label: 'Created Date',
      value: formatAccountCreatedAt,
      component: AccountCreated,
    },
    {
      id: 4,
      label: 'Last SignedIn Date',
      value: formatAccountLastSignedIn,
      component: LastSignedIn,
    },
  ];

  return (
    <>
      {user ? (
        <section className='flex flex-col mx-4 sm:mx-0 space-y-4 w360:space-y-6 bg-white/90 dark:bg-slate-900 py-4 w360:py-8 sm:py-12 rounded-xl shadow-xl shadow-slate-500 dark:shadow-black/40'>
          <div className='px-8 flex place-content-center'>
            {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full w-24 h-24 shadow-xl shadow-slate-600 dark:shadow-slate-950/80' priority={true} />}
          </div>
          <div className='px-8'>
            <section className='flex pt-4 tracking-tighter flex-col items-center'>
              <span className='text-2xl font-bold first-letter:font-bold text-slate-800 dark:text-slate-300'>{formatUserName}</span>
              <span className='text-md first-letter:font-medium text-slate-600 dark:text-slate-500'>{userEmail}</span>
            </section>
          </div>
          <div className='mx-6 border-2 border-slate-300 dark:border-white shadow-lg shadow-slate-400 dark:shadow-black'></div>
          <div className='grid px-6 grid-cols-2 gap-6'>
            {userDetailsData.map((detail) => (
              <section className='flex items-center' key={detail.id}>
                <div className='p-2 bg-slate-300 dark:bg-slate-950 rounded-full shadow-md shadow-slate-500 dark:shadow-black'>
                  <detail.component/>
                </div>
                <div className='flex flex-col items-start'>
                  <span className='text-sm font-bold first-letter:font-medium text-slate-600 dark:text-slate-500'>{detail.label}</span>
                  <span>{detail.value}</span>
                </div>
              </section>
            ))}
          </div>
        </section>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default Details;
