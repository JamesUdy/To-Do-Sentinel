import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Transition, Switch } from '@headlessui/react';
import { Close, Info, Verified, darkThemeLogo, lightThemeLogo } from '@/assets';
import Link from 'next/link';
import './Profile.css';
import { useTheme } from 'next-themes';

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
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  const isDarkTheme = theme === "dark" ? true : false;
  
  useEffect(() => setHasMounted(true));

  if (!hasMounted) return null;

  const handleDarkThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
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
              {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-md' priority={true} />}
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
            <section className='flex items-center space-x-2'>
              <span>Dark Theme:</span>
              <Switch
                checked={isDarkTheme}
                onChange={() => handleDarkThemeChange()}
                className={`${isDarkTheme ? "bg-slate-50" : "bg-slate-950"} relative justify-between items-center inline-flex h-7 w-16 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
              >
              <span className='scale-125'>🌜</span>
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                  className={`${isDarkTheme ? 'translate-x-9 bg-slate-950' : 'translate-x-0 bg-white'} absolute z-10
                    pointer-events-none inline-block h-6 w-6 transform rounded-full shadow-lg ring-0 transition duration-500 ease-in-out`}
              />
              <span className='scale-125'>🌞</span>
              </Switch>
            </section>
          </section>
          <div>
            <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-fit opacity-10 inline-block dark:hidden"/>
            <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-fit opacity-10 hidden dark:inline-block"/>
          </div>
          <button className='w-5/6 bg-slate-950 shadow-lg text-slate-50 shadow-slate-900 py-1 rounded-md logout hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 ease-in duration-200' onClick={() => handleLogout()}>Logout</button>
        </div>
        <button className='absolute top-4 right-4' onClick={() => handleShowProfile()}>
          <Close/>
        </button>
      </section>
      </Transition>
  );
};

export default Profile;
