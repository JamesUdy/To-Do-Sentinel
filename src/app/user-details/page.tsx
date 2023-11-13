'use client';

import React from 'react';
import useAuth from '../hooks/useAuth';
import Image from 'next/image';
import { ProfileName } from '@/assets';

const UserDetails = () => {
  const { user } = useAuth();

  console.log(user);

  const userDp = user?.photoURL;
  const userName = user?.displayName;

  return (
    <section className='container flex items-center justify-center'>
      <div className='flex items-center bg-slate-900 py-12 px-8 rounded-xl'>
        <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-md' priority={true} />}
        </div>
        <div>
          <section className='flex items-center'>
            <div>
              <ProfileName/>
            </div>
            <div className='flex flex-col'>
              <span>Name</span>
              <span>{userName}</span>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
