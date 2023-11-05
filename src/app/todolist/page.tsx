'use client';

import React from 'react';
import useAuth from '../../hooks/useAuth';
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

const ToDoList = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  return (
    <section className='flex flex-col items-center justify-center w-full'>
      {user ? (
        <div>
          <div>ToDoList</div>
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
