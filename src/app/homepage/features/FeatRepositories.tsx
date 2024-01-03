import React from 'react';
import { NavigateArrow, TaskRepo } from '@/assets';
import Constants from '@/constants/Constants';
import Link from 'next/link';
import { categories } from '@/app/todo-form/toDoForm/Categories';
import { progressStatus } from '@/app/todo-form/toDoForm/ProgressStatus';
import FeatRepoCard from './FeatRepoCard';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';

export interface FeatRepoTaskProps extends ToDoValueProps {
    id: number;
    createdAt: string,
}

const DemoTasks: FeatRepoTaskProps[] = [
    {
      id: 0,
      taskTitle: 'Plan Weekend Getaway',
      taskDescription: 'Organize and plan a weekend trip with family or friends.',
      taskPriority: categories[1].label,
      taskProgress: progressStatus[1].status,
      taskFileDetails: [],
      taskFileUpload: {
          length: 0,
          item: (index: number) => null,
      } as FileList,
      taskDueDate: '02.01.2024',
      createdAt: '03.10.2023',
    },
    {
      id: 1,
      taskTitle: 'Launch Marketing Campaign',
      taskDescription: 'Execute a marketing campaign for the upcoming product launch.',
      taskPriority: categories[3].label,
      taskProgress: progressStatus[2].status,
      taskFileDetails: [],
      taskFileUpload: {
          length: 0,
          item: (index: number) => null,
      } as FileList,
      taskDueDate: '03.01.2024',
      createdAt: '12.12.2023',
    },
    {
        id: 2,
        taskTitle: 'Launch Marketing Campaign',
        taskDescription: 'Execute a marketing campaign for the upcoming product launch.',
        taskPriority: categories[3].label,
        taskProgress: progressStatus[2].status,
        taskFileDetails: [],
        taskFileUpload: {
            length: 0,
            item: (index: number) => null,
        } as FileList,
        taskDueDate: '03.01.2024',
        createdAt: '12.12.2023',
      },
];

const FeatRepositories = () => {
    const { handleAuth, isLoggedIn } = Constants();

  
    return (
        <section className='flex flex-col space-y-8 sm:space-y-0 w-full font-medium'>
            <div className='flex flex-col w-full lg:w-4/5 xl::w-2/3 space-y-4'>
                <div className='bg-blue-300 dark:bg-blue-600 border-3 dark:border-2 border-blue-400 w-fit p-2 rounded-full'>
                    <TaskRepo/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <span className="text-sm sm:text-md xl:text-lg text-blue-600">Streamline your tasks</span>
                    <span className="text-2xl sm:text-3xl font-black">Explore and Manage Your Task Repository.</span>
                </div>
                <p className='text-slate-600 dark:text-slate-500 text-sm sm:text-md xl:text-lg'>
                    Elevate your task management experience! Explore your task repository to effortlessly browse, search, and refine tasks. Embark on your organizational journey now - conquer your to-do list with confidence. This provides a glimpse into the repository&apos;s functionality. {isLoggedIn ? "Click the button below to explore the entire task repository." : "Sign in to get started and seize control of your tasks."}
                </p>
                <div className='w-full flex justify-start'>
                    {isLoggedIn ? (
                        <Link href='/task-repo'>
                            <button className='w-fit py-1 px-2 sm:py-2 sm:px-3 my-4 text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-slate-200 hover:bg-slate-950 dark:hover:bg-white text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-black ease-in duration-200 flex space-x-2 items-center'>
                                <span>Explore</span>
                                <NavigateArrow/>
                            </button>
                        </Link>
                    ) : (
                        <button onClick={() => handleAuth()} className='w-fit py-1 px-2 sm:py-2 sm:px-3 my-4 text-sm font-semibold bg-slate-900 dark:bg-slate-200 hover:bg-slate-950 dark:hover:bg-white text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-black ease-in duration-200 flex space-x-2 items-center'>
                            <span>Sign In Now</span>
                            <NavigateArrow/>
                        </button> 
                    )}
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col items-center justify-center w-1/2 mx-auto relative'>
                    {DemoTasks.map((task, index) => (
                        <div key={index} className={`flex w-full justify-center absolute ${task.id === 0 ? 'top-16 left-24' : task.id === 1 ? 'top-16' : 'top-16 -left-24'}`}>
                            <FeatRepoCard task={task} />
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center justify-center w-1/2'>
                    <span>Repo</span>
                </div>
            </div>
        </section>
    );
};

export default FeatRepositories;
