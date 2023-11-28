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
import './TaskRepositories.css';
import { ClearKeywordTask } from '@/assets';
import { Toaster } from 'react-hot-toast';


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

  const clearSelectedKey = (item) => {
    if(selectedKeys.has(item)) {
      const updatedSelectedKeys = new Set([...selectedKeys].filter(key => key !== item));
      setSelectedKeys(updatedSelectedKeys);
    };
  };

  // Filter tasks based on the search keyword and selected keys
  const filteredTasks = toDoListData.filter(task => {
    // Filter by search keyword
    const matchesKeyword = task.taskTitle.toLowerCase().includes(keyword.toLowerCase());

    // Filter by selected keys
    const prioritySelected = selectedKeys.has(task.taskPriority);
  const progressSelected = selectedKeys.has(task.taskProgress);

  const matchesSelectedKeys =
    selectedKeys.size === 0 ||
    (prioritySelected && progressSelected) ||
    (!prioritySelected && progressSelected) ||
    (prioritySelected && !progressSelected);

    return matchesKeyword && matchesSelectedKeys;
  });

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1 max-h-screen overflow-y-hidden todo-list'>
      <Toaster toastOptions={{
        className: '', 
        style: {
          marginTop: '32px',
        }
      }} position="bottom-right" />
      {user ? (
        <>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <span className='text-md w360:text-lg sm:text-xl font-semibold w-full text-center'>🗂️ Task Repository</span>
          <SearchTask keyword={keyword} handleKeywordChanges={handleKeywordChanges} clearKeyword={clearKeyword} />
          {selectedKeys !== null && (
            <section className='flex w-full flex-col items-center mt-2 mb-10'>
              <div className='flex sm:w-2/3 xl:w-1/2 mx-auto flex-wrap gap-4'>
                {selectedKeys && Array.from(selectedKeys).map((item, index) => (
                  <span key={index} className='px-2 py-1 bg-white dark:bg-slate-900 shadow-lg shadow-slate-600 dark:shadow-black rounded-md justify-around flex items-center space-x-2 w-fit'>
                    <span>{item}</span>
                    <div className='cursor-pointer' onClick={() => clearSelectedKey(item)}>
                      <ClearKeywordTask/>
                    </div>
                  </span>
                ))}
              </div>
            </section>
          )}
          <section className='flex justify-center w-1/2 mx-auto mb-4 space-x-2'>
            <TaskDropdown keys={selectedKeys} onChange={setSelectedKeys} selectField={categories} />
            <TaskDropdown keys={selectedKeys} onChange={setSelectedKeys} selectField={progressStatus} />
          </section>
          <section className={`overflow-y-scroll ${scrollBar}`}>
            <div className='w-full px-2 container flex flex-col items-center my-4'>
              {/* {toDoListData && (
                <div className='sm:columns-2 xl:columns-3 sm:w-2/3 xl:w-1/2 gap-x-4 space-y-6'>
                    {toDoListData.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                </div>
              )} */}
              {filteredTasks.length > 0 ? (
                <div className='sm:columns-2 xl:columns-3 sm:w-2/3 xl:w-1/2 gap-x-4 space-y-6'>
                  {filteredTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              ) : (
                <p>No tasks found</p>
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