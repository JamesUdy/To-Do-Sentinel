'use client';

import React, { useState } from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';

const ToDoList = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  return (
    <section className='relative flex flex-col w-full py-2 px-4'>
      {user ? (
        <div>
          <Navbar handleShowProfile={handleShowProfile} showProfile={showProfile} userDp={user.photoURL}/>
          <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </div>
      ) : (
        <div>Sign in to access the page</div>
      )}
    </section>
  )
};

export default ToDoList;
