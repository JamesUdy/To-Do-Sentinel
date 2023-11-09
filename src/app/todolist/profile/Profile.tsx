import React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Close, Info, Verified, darkThemeLogo, lightThemeLogo } from '@/assets';
import Link from 'next/link';
import './Profile.css';

interface ProfileProps {
  handleShowProfile: () => void;
  showProfile: boolean;
  userEmail: string | null;
  userEmailVerified: boolean | null;
  userName: string | null;
  userDp: string | null;
  handleLogout: () => void;
};

const Profile: React.FC<ProfileProps> = ({handleShowProfile, showProfile, userEmail, userEmailVerified, userName, userDp, handleLogout}) => {
  return (
    <Transition 
      show={showProfile}
      enter="transition ease-in-out duration-300 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className='absolute top-0 left-0 bg-white dark:bg-slate-800 max-h-full w-1/5'
    >
      <section className='h-screen relative w-full'>
        <div className='flex flex-col justify-between h-full py-10 items-center w-full'>
          <section className='flex flex-col items-center space-y-6'>
            <div>
              {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' priority={true} />}
            </div>
            <div className='flex flex-col items-center profile-details'>
              <span className='uppercase'>{userName}</span>
              <div className='flex items-center space-x-2'>
                <span>{userEmail}</span>
                <span>{userEmailVerified ? <Verified/> : ''}</span>
              </div>
            </div>
            <Link href='/user-details'>
              <button className='flex items-center space-x-2 hover:underline hover:underline-offset-4 ease-in duration-200'>
                <span>About</span>
                <Info/>
              </button>
            </Link>
          </section>
          <div>
            <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-fit opacity-10 inline-block dark:hidden"/>
            <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-fit opacity-10 hidden dark:inline-block"/>
          </div>
          <button className='w-5/6 bg-slate-950 shadow-lg shadow-slate-900 py-1 rounded-md logout hover:ring-1 hover:ring-blue-900 ease-in duration-200' onClick={() => handleLogout()}>Logout</button>
        </div>
        <button className='absolute top-4 right-4' onClick={() => handleShowProfile()}>
          <Close/>
        </button>
      </section>
      </Transition>
  );
};

export default Profile;
