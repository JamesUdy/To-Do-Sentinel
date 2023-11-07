'use client';

import React from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from './navbar/Navbar';
import Image from 'next/image';

const ToDoList = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  const userDp = user?.photoURL;

  return (
    <section className='flex flex-col w-full'>
      {user ? (
        <div>
          <Navbar/>
          <div>
          {userDp && <Image src={userDp} alt='User Dp' width={100} height={100} className='rounded-full' />}
          </div>
          {user.displayName && <div>{user.displayName}</div>}
          <button onClick={() => handleLogout()}>Logout</button>
        </div>
      ) : (
        <div>Sign in to access the page</div>
      )}
    </section>
  )
};

export default ToDoList;
