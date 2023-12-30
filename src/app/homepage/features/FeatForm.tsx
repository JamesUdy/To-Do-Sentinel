import React, { useEffect, useRef, useState } from 'react';
import { NavigateArrow, TaskForm } from '@/assets';
import toast, { Toaster } from 'react-hot-toast';
import Constants from '@/constants/Constants';
import Link from 'next/link';

const FeatForm = () => {
    const [taskTitle, SetTaskTitle] = useState('Test preparation');
    const [taskDescription, setTaskDescription] = useState('Complete the book and take notes');

    const { user } = Constants();

    const taskTitleRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        taskTitleRef.current?.focus();
    }, []);

    const ResetFields = () => {
        toast.success('Your trial task is created successfully');
        SetTaskTitle('Test preparation');
        setTaskDescription('Complete the book and take notes');
    };
  
    return (
        <section className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-8 sm:space-y-0 w-full font-medium'>
            <Toaster toastOptions={{
                className: '', style: {
                marginTop: '32px',
                }
            }} position="bottom-right" />
            <div className='w-full sm:w-1/2 space-y-4 sm:pr-10 max-w-xl'>
                <div className='bg-pink-300 dark:bg-pink-600 border-3 dark:border-2 border-pink-400 w-fit p-2 mb-6 rounded-full'>
                    <TaskForm/>
                </div>
                <div className='flex flex-col space-y-2'>
                    <span className="text-md text-pink-600">Unlock possibilities</span>
                    <span className="text-3xl font-bolder">Tailor your to-do list with precision and specific task details.</span>
                </div>
                <p className='text-slate-600 dark:text-slate-500 text-md'>
                    Ready to enhance task efficiency? Begin adding and organizing tasks effortlessly! Your productivity journey commences now - conquer with confidence! This serves as a preview of the form&apos;s functionality. {user ? "For a thorough task entry, click the button below to explore the complete submission process." : "Want to use or explore it? Sign in to get started."}
                </p>
                {user && (
                    <div className='w-full flex justify-center sm:justify-end'>
                        <Link href='/todo-form'>
                            <button className='w-fit py-1 px-2 sm:py-2 sm:px-3 my-4 text-sm font-semibold bg-slate-900 dark:bg-slate-200 hover:bg-slate-950 dark:hover:bg-white text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-black ease-in duration-200 flex space-x-2 items-center'>
                                <span>Get Started</span>
                                <NavigateArrow/>
                            </button>
                        </Link>
                    </div>
                    
                )}
                <div className=' hidden sm:block'>
                    <h3 className='text-md font-semibold mb-2'>Example Task:</h3>
                    <p className='text-sm'>
                        <strong>Title:</strong> {taskTitle}
                        <br />
                        <strong>Description:</strong> {taskDescription}.
                    </p>
                </div>
            </div>
            <div className='w-1/2 bg-slate-50 dark:bg-slate-800/40 border-2 border-slate-400/40 dark:border-slate-700/40 px-6 rounded-lg shadow-xl hidden sm:block relative pt-3 pb-4'>
                <div>
                    <section className='flex space-x-1.5 absolute left-3 top-3'>
                        <span className='bg-red-400 dark:bg-red-600/80 w-5 h-5 rounded-full text-transparent'></span>
                        <span className='bg-orange-400 dark:bg-orange-600/80 w-5 h-5 rounded-full text-transparent'></span>
                        <span className='bg-green-400 dark:bg-green-600/80 w-5 h-5 rounded-full text-transparent'></span>
                    </section> 
                    <span className='flex items-center justify-center text-md'>Demo Form</span>
                    <section className='w-full flex flex-col items-start space-y-1 py-6'>
                        <label className='text-md' htmlFor="taskTitle">Task Title<span className="text-red-500">*</span></label>
                        <div className='relative w-full'>
                            <input 
                            ref={taskTitleRef}
                            id='taskTitle'
                            name='taskTitle'
                            onChange={(e) => SetTaskTitle(e.target.value)}
                            value={taskTitle}
                            className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-950 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-950 focus:outline focus:outline-2' 
                            placeholder='E.g., Test preparation' 
                            type='text' 
                            />
                        </div>
                    </section>
                    <section className='w-full flex flex-col items-start space-y-1 pb-4'>
                        <label className='text-md' htmlFor="taskDescription">Describe your task<span className="text-red-500">*</span></label>
                        <div className='relative w-full'>
                            <textarea 
                            id='taskDescription'
                            name='taskDescription'
                            onChange={(e) => setTaskDescription(e.target.value)}
                            value={taskDescription}
                            placeholder='E.g., Complete the book and take notes' 
                            className='w-full h-24 sm:h-28 max-h-32 min-h-24 py-2 px-3 text-sm bg-slate-300 dark:bg-slate-950 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-950 focus:outline focus:outline-2'>                
                            </textarea>
                        </div>
                    </section>
                    <button onClick={() => ResetFields()} className='w-full flex items-center justify-end'>
                        <span className='w-fit py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-950 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-950 hover:ring-slate-950 dark:hover:ring-slate-100 ease-in duration-200'>Click Me!</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeatForm;
