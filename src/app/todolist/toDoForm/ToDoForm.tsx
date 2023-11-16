import React from 'react';
import ToDoCategory from './toDoCategory/ToDoCategory';

const ToDoForm = () => {
  return (
    <section className='container w-full flex justify-center font-medium'>
      <div className='w-1/4 flex flex-col items-center space-y-4'>
        <input className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' placeholder='Title' type='text' />
        <textarea placeholder='Describe your task' className='w-full h-32 max-h-44 min-h-24 py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2'></textarea>
        <ToDoCategory/>
      </div>
    </section>
  );
};

export default ToDoForm;
