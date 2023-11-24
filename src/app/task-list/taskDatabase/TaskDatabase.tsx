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
import CheckBox from './CheckBox';
import { useTheme } from 'next-themes';
import { categories } from '@/app/todo-list/toDoForm/Categories';

const TaskDatabase = () => {
  const router = useRouter();
  const {user, setUser} = useAuth();
  const [showProfile, setShowProfile] = useState(false);
  const toDoListData: ListProps[] = FetchToDoData();
  const { theme } = useTheme();
  const [keyword, setKeyword] = useState<string>('');
  const [itemChecked, setItemChecked] = useState(false);
  
  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    router.push('/');
  };

  const handleKeywordChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const clearKeyword = () => {
    setKeyword('');
  };
  
  const scrollBar = theme === 'dark' ? 'to-do-list-dark' : 'to-do-list-light';

  return (
    <section className='relative flex flex-col w-full py-2 px-4 sm:px-1 max-h-screen overflow-y-hidden todo-list'>
      {user ? (
        <>
          <Navbar handleShowProfile={handleShowProfile} userDp={user.photoURL}/>
          <span className='text-md w360:text-lg sm:text-xl font-semibold w-full text-center'>🗂️ Task Repository</span>
          <SearchTask keyword={keyword} handleKeywordChanges={handleKeywordChanges} clearKeyword={clearKeyword} />
          <section>
            {categories && (
              categories.map((category) => (
                <CheckBox key={category.id} name={category.label} isChecked={itemChecked} onChange={setItemChecked} />
              ))
            )}
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

export default TaskDatabase;
