'use client';

import React, { useState } from 'react';
import SignIn from './signIn/SignIn';
import Navbar from './navbar/Navbar';
import useAuth from './hooks/useAuth';
import Profile from './profile/Profile';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const [showProfile, setShowProfile] = useState(false);
  const {user, setUser} = useAuth();
  const router = useRouter();
  
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
            <SignIn/>
            <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
          </>
        ) : (
          <>
          <SignIn/>
        </>
        )
      }
    </section>
  );
};

export default HomePage;
