'use client';

import React, { useState } from 'react';
import Hero from './homepage/Hero';
import SignIn from './signIn/SignIn';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseAuth/FirebaseAuth';
import Constants from '@/constants/Constants';
import Features from './homepage/Features';
import { ThemeToggleButton } from '@/assets/todoAssets';

const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const {router, scrollBar, setUser, user} = Constants();
  
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1 max-h-screen overflow-y-hidden'>
      <Navbar handleShowProfile={handleShowProfile} userDp={user?.photoURL}/>
      <div className={`flex flex-col space-y-10 sm:px-10 lg:px-16 xl:px-0 items-center overflow-y-scroll ${scrollBar}`}>
        <Hero/>
        <SignIn/>
        <div></div>
        <Features/>
      </div>
      {user && (
          <Profile
            handleShowProfile={handleShowProfile}
            showProfile={showProfile}
            userEmail={user.email}
            userEmailVerified={user.emailVerified}
            userName={user.displayName}
            userDp={user.photoURL}
            handleLogout={handleLogout}
          />
        )}
      {!user && <ThemeToggleButton />}
    </section>
  );
};

export default HomePage;
