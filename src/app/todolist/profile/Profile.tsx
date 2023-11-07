import React from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Close } from '@/assets';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
  const router = useRouter();

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
          <section className='flex flex-col items-center'>
            <div>
              {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' priority={true} />}
            </div>
            <div className='flex flex-col'>
              <span>{userName}</span>
              <span>{userEmail}</span>
              <span>{userEmailVerified ? 'true' : 'false'}</span>
            </div>
            <Link href='/user-details'>
              <button>About</button>
            </Link>
          </section>
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
        <button className='absolute top-4 right-4' onClick={() => handleShowProfile()}>
          <Close/>
        </button>
      </section>
      </Transition>
  );
};

export default Profile;
