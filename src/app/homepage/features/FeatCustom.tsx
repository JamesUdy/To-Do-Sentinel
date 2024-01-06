import { Delete, Edit, NavigateArrow, TaskForm } from '@/assets';
import Constants from '@/constants/Constants';
import Link from 'next/link';
import React from 'react';

const FeatCustom = () => {
    const taskTitle = 'Test preparation';
    const taskDescription = 'Complete the book and take notes';

    const currentDate = new Date();

    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${day}.${month}.${year}`;

    const { handleAuth, isLoggedIn } = Constants();

  return (
    <section className='flex flex-col space-y-8 sm:space-y-0 w-full font-medium'>
            <div className='flex flex-col w-full lg:w-4/5 space-y-4'>
                <div className='bg-pink-300 dark:bg-pink-600 border-3 dark:border-2 border-pink-400 w-fit p-2 rounded-full'>
                    <TaskForm/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <span className="text-sm sm:text-md xl:text-lg text-pink-600">Unlock possibilities</span>
                    <span className="text-2xl sm:text-3xl font-black">Tailor your to-do list with precision and specific task details.</span>
                </div>
                <p className='text-slate-600 dark:text-slate-500 text-sm sm:text-md xl:text-lg'>
                    Ready to enhance task efficiency? Begin adding and organizing tasks effortlessly! Your productivity journey commences now - conquer with confidence! This serves as a preview of the form&apos;s functionality. {isLoggedIn ? "For a thorough task entry, click the button below to explore the complete submission process." : "Want to use or explore it? Sign in to get started."}
                </p>
                <div className='w-full flex justify-start'>
                    {isLoggedIn ? (
                        <Link href='/todo-form'>
                            <button className='w-fit py-1 px-2 sm:py-2 sm:px-3 my-4 text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-slate-200 hover:bg-slate-950 dark:hover:bg-white text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-black ease-in duration-200 flex space-x-2 items-center'>
                                <span>Get Started</span>
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
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-center space-y-8 sm:space-y-0 space-x-10 w-full font-medium text-xs sm:text-sm xl:text-md'>
                <div className='w-full sm:w-1/3 break-inside-avoid-column bg-white dark:bg-slate-900 p-2 flex flex-col justify-between h-fit space-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black'>
                    <div className='flex flex-col space-y-2'>
                        <div className='flex justify-between items-center py-2'>
                            <span className={`bg-green-400 ml-1 px-2 rounded-md text-sm text-white shadow-md shadow-slate-700 dark:shadow-slate-950`}>Home</span>
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
                                    <span className={`text-md sm:text-lg font-semibold line-through`}>{taskTitle}</span>
                                    <span className={`'bg-orange-600 animate-pulse w-4 h-4 px-2 rounded-full`}></span>
                                </div>
                                <span className='text-xs sm:text-sm text-start font-normal'>{taskDescription}</span>
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-between pt-4 pb-2 px-2 sm:px-0 sm:pl-2'>
                            <span className='text-end w-full text-2xs font-medium text-slate-500'>{formattedDate}</span>
                        </div>
                    </div>        
                <div className='w-full sm:w-1/2 bg-slate-950 dark:bg-slate-50 rounded-lg shadow-xl block relative pt-3 pb-4'>
                    <div className='w-full'>
                        <section className='flex space-x-1.5 absolute left-3 top-3 text-xs sm:text-sm xl:text-md'>
                            <span className='bg-red-400 dark:bg-red-600/80 w-3 h-3 sm:w-5 sm:h-5 rounded-full'></span>
                            <span className='bg-orange-400 dark:bg-orange-600/80 w-3 h-3 sm:w-5 sm:h-5 rounded-full'></span>
                            <span className='bg-green-400 dark:bg-green-600/80 w-3 h-3 sm:w-5 sm:h-5 rounded-full'></span>
                        </section> 
                        <div className='block py-4 sm:py-6 sm:mt-4 rounded-xl space-y-4 w-full'>
                            <div className='hidden text-md font-semibold mb-2 text-slate-50 bg-blue-500 dark:bg-blue-700 w-fit px-2 py-1 rounded-md items-center space-x-2'>
                                <span>Form Preview</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3">
                                    </path>
                                </svg>
                            </div>
                            <div className='text-xmd text-slate-50 dark:text-slate-950 flex flex-col space-y-4'>
                                <span className='border-b-2 border-slate-800 dark:border-slate-400 w-full py-2 px-6 flex'>
                                    <strong className='w-28'>Title</strong>
                                    <span className='pl-10'>{taskTitle}</span>
                                </span>
                                <span className='border-b-2 border-slate-800 dark:border-slate-400 py-2 px-6 w-full flex'>
                                    <strong className='w-28'>Description</strong>
                                    <span className='pl-10'>{taskDescription}</span>
                                </span>
                                <span className='border-b-2 border-slate-800 dark:border-slate-400 py-2 px-6 w-full flex'>
                                    <strong className='w-28'>Category</strong>
                                    <span className='pl-10'>{taskDescription}</span>
                                </span>
                                <span className='border-b-2 border-slate-800 dark:border-slate-400 py-2 px-6 w-full flex'>
                                    <strong className='w-28'>Progress</strong>
                                    <span className='pl-10'>{taskDescription}</span>
                                </span>
                                <span className='border-b-2 border-slate-800 dark:border-slate-400 py-2 px-6 w-full flex'>
                                    <strong className='w-28'>Created At</strong>
                                    <span className='pl-10'>{taskDescription}</span>
                                </span>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
  );
};

export default FeatCustom;
