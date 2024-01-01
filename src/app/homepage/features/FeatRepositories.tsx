import React from 'react';
import { NavigateArrow, TaskRepo } from '@/assets';
import Constants from '@/constants/Constants';
import Link from 'next/link';

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
        </section>
    );
};

export default FeatRepositories;
