import React, { useEffect, useRef, useState } from 'react';
import { NavigateArrow } from '@/assets';
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
        <section className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-8 sm:space-y-0 w-full'>
            <Toaster toastOptions={{
                className: '', style: {
                marginTop: '32px',
                }
            }} position="bottom-right" />
            <div className='w-full sm:w-1/2 space-y-4 sm:pr-10 max-w-xl'>
                <p className=''>
                    Ready to make each task count? Start adding and organizing tasks now! Your productivity journey starts now - conquer with confidence! This is a trial for how the form works. If you want to explore the entire task submission, click the button below.
                </p>
                {user && (
                    <div className='w-full flex justify-center sm:justify-end'>
                        <Link href='/todo-form'>
                            <button className='w-fit py-1 px-2 sm:py-2 sm:px-3 my-4 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-950 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-950 hover:ring-slate-950 dark:hover:ring-slate-100 ease-in duration-200 flex space-x-2 items-center'>
                                <span>Form</span>
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
            <div className='w-1/2 bg-slate-50 dark:bg-slate-800 py-4 px-6 rounded-lg shadow-xl hidden sm:block'>
                <div>
                    <section className='w-full flex flex-col items-start space-y-1 pb-4'>
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