import React from 'react';
import { Delete, Edit } from '@/assets';
import { categories } from '@/app/todo-form/toDoForm/Categories';
import Constants from '@/constants/Constants';
import { FeatRepoTaskProps } from './FeatRepositories';

const FeatRepoCard: React.FC<{task: FeatRepoTaskProps}> = ({ task }) => {
    const { theme } = Constants();

    const category = categories.find(category => category.label === task.taskPriority);
    const backgroundColor = theme === 'dark' ? category?.colors.dark : category?.colors.light;

  return (
    <section className={`${task.id === 0 ? 'rotate-3' : '-rotate-6'} w-1/3 break-inside-avoid-column bg-white dark:bg-slate-900 p-2 flex flex-col justify-between h-full space-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black border-1.5 border-slate-950`}>
        <div className='flex flex-col space-y-2'>
            <div className='flex justify-between items-center py-2'>
                <span className={`${backgroundColor} ml-1 px-2 rounded-md text-sm text-white shadow-md shadow-slate-700 dark:shadow-slate-950`}>{task.taskPriority}</span>
                <div className='flex space-x-2'>
                    <span className='cursor-pointer'>
                        <Edit/>
                    </span>
                    <span className='cursor-pointer'>
                        <Delete/>
                    </span>
                </div>
            </div>
            <div className='px-2 flex flex-col space-y-1'>
                <div className='flex space-x-2 items-center'>
                    <span className={`text-md sm:text-lg font-semibold ${task.taskProgress === 'Completed ✅' ? 'line-through' : ''}`}>{task.taskTitle}</span>
                    <span className={`${task.taskProgress === 'In Progress 🚧' ? 'bg-orange-600 animate-pulse' : task.taskProgress === 'Completed ✅' ? 'bg-green-600 animate-pulse' : 'bg-gray-600 dark:bg-gray-300 animate-bounce'} w-4 h-4 px-2 rounded-full`}></span>
                </div>
                <span className='text-xs sm:text-sm text-start font-normal'>{task.taskDescription}</span>
            </div>
        </div>
        <div className='flex w-full items-center justify-between pt-4 pb-2 px-2 sm:px-0 sm:pl-2'>
            {task.taskDueDate && (
                <span className={`${task.id === 0 ? 'bg-red-700' : 'bg-red-400'} animate-pulse text-white px-2 py-0.5 text-sm rounded-md w-fit`}>Due</span>
            )}
            <span className='text-end w-full text-2xs font-medium text-slate-500'>{task.createdAt}</span>
        </div>
    </section>
  );
};

export default FeatRepoCard;
