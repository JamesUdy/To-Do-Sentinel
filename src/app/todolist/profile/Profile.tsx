import React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Close } from '@/assets';

interface ProfileProps {
  showProfile: boolean;
  userName: string | null;
  userDp: string | null;
  handleLogout: () => void;
};

const Profile: React.FC<ProfileProps> = ({showProfile, userName, userDp, handleLogout}) => {
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
        <div>
          <div>
            {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' priority={true} />}
          </div>
          {userName && <div>{userName}</div>}
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
        <button className='absolute top-4 right-4'>
          <Close/>
        </button>
      </section>
      </Transition>
  );
};

export default Profile;
