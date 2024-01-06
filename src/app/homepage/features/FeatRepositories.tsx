import React from 'react';
import { DoubleLeftQuote, DoubleRightQuote, NavigateArrow, TaskRepo } from '@/assets';
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
        <section className='flex flex-col space-y-8 sm:space-y-0 w-full font-medium pb-24'>
            <div className='flex flex-col w-full lg:w-4/5 space-y-4'>
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
            <div className='flex flex-col-reverse pb-56 sm:pb-0 sm:flex-row justify-center items-center'>
                <div className='flex flex-col items-center justify-center w-full sm:w-1/2 mx-auto relative'>
                    {DemoTasks.map((task, index) => (
                        <div key={index} className={`flex w-full justify-center absolute ${task.id === 0 ? 'top-12 sm:top-4 sm:left-24' : task.id === 1 ? 'top-24 sm:top-4' : 'top-36 sm:top-4 sm:-left-24'}`}>
                            <FeatRepoCard task={task} />
                        </div>
                    ))}
                </div>
                <div className='flex flex-col items-center justify-center w-1/2'>
                    <div className='flex items-center justify-center relative bg-orange-500 dark:bg-orange-800 h-56 w-56 sm:h-64 sm:w-64 rounded-full'>
                        <div className='absolute -top-6 -left-6'>
                        <DoubleLeftQuote/>
                        </div>
                        <span className='w-full text-center p-4 text-sm sm:text-md quote'>Where tasks find their home, efficiency dances in the artful embrace of control.</span>
                        <div className='absolute -bottom-6 -right-6'>
                            <DoubleRightQuote/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatRepositories;
