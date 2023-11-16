'use client';

import React, { useState } from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';
import Loader from '../loader/Loader';
import ToDoForm from './toDoForm/ToDoForm';
import SearchTask from './searchTask/SearchTask';

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
    <section className='relative flex flex-col w-full py-2 px-4 max-h-full'>
      {user ? (
        <div>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <ToDoForm/>
          <SearchTask/>
          <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </div>
      ) : (
        <Loader/>
      )}
    </section>
  )
};

export default ToDoList;
