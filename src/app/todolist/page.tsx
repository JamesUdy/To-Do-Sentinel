'use client';

import React from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Profile from './profile/Profile';

const ToDoList = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  return (
    <section className='flex flex-col w-full'>
      {user ? (
        <div>
          <Navbar/>
          <Profile userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </div>
      ) : (
        <div>Sign in to access the page</div>
      )}
    </section>
  )
};

export default ToDoList;
