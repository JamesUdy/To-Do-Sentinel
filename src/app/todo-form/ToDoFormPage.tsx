'use client';

import React, { useState } from 'react';
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { EarlyStageTasks, Loader, Navbar, Profile, ToDoForm } from '@/assets/todoAssets';
import './index.css';
import FetchToDoData, { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import Constants from '@/constants/Constants';

const ToDoFormPage = () => {
  const { router, scrollBar, setUser, user } = Constants();
  const [showProfile, setShowProfile] = useState(false);
  const toDoListData: ListProps[] = FetchToDoData();

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
      {user ? (
        <>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <section className={`overflow-y-scroll ${scrollBar}`}>
            <ToDoForm/>
            {toDoListData.length > 0 && (
              <EarlyStageTasks taskData={toDoListData} />
            )}
          </section>
          <Profile handleShowProfile={handleShowProfile} showProfile={showProfile} userEmail={user.email} userEmailVerified={user.emailVerified} userName={user.displayName} userDp={user.photoURL} handleLogout={handleLogout}/>
        </>
      ) : (
        <Loader/>
      )}
    </section>
  )
};

export default ToDoFormPage;
