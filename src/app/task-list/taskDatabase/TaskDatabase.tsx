'use client';

import React from 'react';
import FetchToDoData, { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import TaskCard from '@/app/taskCard/TaskCard';

const TaskDatabase = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  return (
    <div className='w-full px-2 container flex flex-col items-center my-4 todo-list'>
        <span>TaskList</span>
        {toDoListData && (
            <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:w-2/3 xl:w-1/2 gap-6'>
                {toDoListData.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </section>
        )}
    </div>
  );
};

export default TaskDatabase;;