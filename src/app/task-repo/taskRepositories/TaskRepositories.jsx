'use client';

import React, { useEffect, useRef, useState } from 'react';
import useAuth from "@/app/hooks/useAuth";
import { auth } from '@/firebaseAuth/FirebaseAuth';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import FetchToDoData, { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import TaskCard from '@/app/taskCard/TaskCard';
import { Loader, Navbar, Profile } from '@/assets/todoAssets';
import SearchTask from './SearchTask';
import { useTheme } from 'next-themes';
import { categories } from '@/app/todo-list/toDoForm/Categories';
import { progressStatus } from '@/app/todo-list/toDoForm/ProgressStatus';
import TaskDropdown from './TaskDropdown';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import './TaskRepositories.css';

const TaskRepositories = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const toDoListData = FetchToDoData();
  const { theme } = useTheme();
  const [keyword, setKeyword] = useState('');
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  const handleKeywordChanges = (event) => {
    setKeyword(event.target.value);
  };

  const clearKeyword = () => {
    setKeyword('');
  };
  
  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';

  console.log(selectedKeys);

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1 max-h-screen overflow-y-hidden todo-list'>
      {user ? (
        <>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <span className='text-md w360:text-lg sm:text-xl font-semibold w-full text-center'>🗂️ Task Repository</span>
          <SearchTask keyword={keyword} handleKeywordChanges={handleKeywordChanges} clearKeyword={clearKeyword} />
          <section className='flex sm:w-2/3 xl:w-1/2 flex-col items-center'>
            <div className='flex flex-wrap space-x-2'>{selectedKeys && Array.from(selectedKeys).map((item, index) => (
              <span key={index} className='px-4 py-1 bg-slate-700'>{item}</span>
            ))}</div>
          </section>
          <section className='flex justify-center w-1/4 mx-auto space-x-2'>
            <TaskDropdown keys={selectedKeys} onChange={setSelectedKeys} selectField={categories} />
            <TaskDropdown keys={selectedKeys} onChange={setSelectedKeys} selectField={progressStatus} />
          </section>
          <section className={`overflow-y-scroll ${scrollBar}`}>
            <div className='w-full px-2 container flex flex-col items-center my-4'>
              {toDoListData && (
                <div className='sm:columns-2 xl:columns-3 sm:w-2/3 xl:w-1/2 gap-x-4 space-y-6'>
                    {toDoListData.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
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

export default TaskRepositories;
