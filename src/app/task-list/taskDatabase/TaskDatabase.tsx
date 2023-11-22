'use client';

import React, { useState } from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import FetchToDoData, { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import TaskCard from '@/app/taskCard/TaskCard';
import { Loader, Navbar, Profile } from '@/assets/todoAssets';
import SearchTask from './SearchTask';
import { useTheme } from 'next-themes';

const TaskDatabase = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const toDoListData: ListProps[] = FetchToDoData();
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
          <span className='text-md w360:text-lg sm:text-xl font-semibold todo-list w-full text-center'>🗂️ Task Repository</span>
          <SearchTask/>
          <section className={`overflow-y-scroll ${scrollBar}`}>
            <div className='w-full px-2 container flex flex-col items-center my-4 todo-list'>
                {toDoListData && (
                    <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:w-2/3 xl:w-1/2 gap-6'>
                        {toDoListData.map((task) => (
                            <TaskCard key={task.id} task={task} />
                        ))}
                    </section>
                )}
            </div>
          </section>
          <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </>
      ) : (
        <Loader/>
      )}
    </section>
  );
};

export default TaskDatabase;;