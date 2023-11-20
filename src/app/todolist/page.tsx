'use client';

import React, { useState } from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { Navbar, TaskList, ToDoForm, SearchTask, Profile, Loader } from './todoAssets';
import './index.css';
import { useTheme } from 'next-themes';

const ToDoList = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const { theme } = useTheme();

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1 max-h-screen overflow-y-hidden'>
      {user ? (
        <>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <section className={`overflow-y-scroll ${scrollBar}`}>
            <ToDoForm/>
            <SearchTask/>
            <TaskList/>
          </section>
          <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </>
      ) : (
        <Loader/>
      )}
    </section>
  )
};

export default ToDoList;
