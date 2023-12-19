'use client';

import React, { useState } from 'react';
import Hero from './homepage/Hero';
import SignIn from './signIn/SignIn';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseAuth/FirebaseAuth';
import Constants from '@/constants/Constants';

const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const {router, setUser, user} = Constants();
  
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1'>
      {
        user ? (
          <>
            <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
            <Hero/>
            <SignIn/>
            <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
          </>
        ) : (
          <>
          <Hero/>
          <SignIn/>
        </>
        )
      }
    </section>
  );
};

export default HomePage;
