import React from 'react';
import { FeatRepoTaskProps } from './FeatRepositories';

const FeatRepoCard: React.FC<{task: FeatRepoTaskProps}> = ({ task }) => {

  return (
    <section className={`${task.id === 0 ? 'scale-90' : task.id === 1 ? 'scale-110' : 'scale-125'} w-2/3 sm:w-1/2 lg:w-1/3 break-inside-avoid-column bg-white dark:bg-slate-900 p-2 flex flex-col justify-between space-y-2 sm:-skew-x-2 sm:-skew-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black border-1.5 dark:border-slate-950`}>
        <div className='animate-pulse'>
            <div className='flex flex-col space-y-2'>
                <div className='flex justify-between items-center py-2'>
                    <span className={`ml-1 px-2 rounded-md ${task.id === 0 ? 'bg-[#2ecc71] dark:bg-[#006400]' : task.id === 1 ? 'bg-[#e74c3c] dark:bg-[#d90429]' : 'bg-[#f48c06] dark:bg-[#dc2f02]'} h-3 w-16 shadow-md shadow-slate-700 dark:shadow-slate-950`}></span>
                    <div className='flex space-x-2'>
                        <span className='cursor-pointer bg-blue-400 dark:bg-blue-700 w-4 rounded-sm h-3'>
                        </span>
                        <span className='cursor-pointer bg-red-400 dark:bg-red-700 w-4 rounded-sm h-3'>
                        </span>
                    </div>
                </div>
                <div className='px-2 flex flex-col space-y-1'>
                    <div className='flex space-x-2 items-center'>
                        <span className='h-3 bg-slate-200 dark:bg-slate-800/70 rounded-md w-1/2 shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
                        <span className='bg-slate-200 dark:bg-slate-800/70 w-4 h-4 px-2 rounded-full shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
                    </div>
                    <span className='h-3 w-full bg-slate-200 dark:bg-slate-800/70 rounded-md shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
                    <span className='h-3 w-5/6 bg-slate-200 dark:bg-slate-800/70 rounded-md shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
                </div>
            </div>
            <div className='flex w-full items-center justify-between pt-4 pb-2 px-2 sm:px-0 sm:pl-2'>
                <span className='h-3 w-8 bg-slate-200 dark:bg-slate-800/70 rounded-md shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
                <span className='h-3 w-16 bg-slate-200 dark:bg-slate-800/70 rounded-md shadow-md shadow-slate-700 dark:shadow-slate-950'></span>
            </div>
        </div>
    </section>
  );
};

export default FeatRepoCard;
