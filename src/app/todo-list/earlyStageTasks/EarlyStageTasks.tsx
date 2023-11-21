import React from 'react';
import FetchToDoData, { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import TaskCard from '@/app/taskCard/TaskCard';
import TaskLoader from '@/app/loader/taskLoader/TaskLoader';
import Link from 'next/link';

const EarlyStageTasks = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  const earlyStageTasks = toDoListData.filter(
    task => task.taskProgress !== "Completed ✅"
  );

  const firstThreeTasks = earlyStageTasks.slice(0, 3);

  return (
    <section className='w-full px-2 container flex flex-col space-y-8 items-center my-16 todo-list text-slate-700 dark:text-slate-400'>
        <span className='text-md w360:text-lg sm:text-xl font-semibold'>🌱 In the Pipeline: Early Stage Tasks</span>
        {firstThreeTasks ? (
          <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:w-2/3 xl:w-1/2 gap-6 text-slate-900 dark:text-slate-400'>
          {firstThreeTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </section>
        )  : (
            <TaskLoader/>
            ) 
        }
        <Link href='/task-list'>
            <button className='py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 dark:hover:ring-slate-100 ease-in duration-200'>🗂️ Task Repository</button>
        </Link>
    </section>
  );
};

export default EarlyStageTasks;
