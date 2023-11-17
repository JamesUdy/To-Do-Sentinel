import React from 'react';
import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';
import { categories } from './toDoCategory/Categories';
import { progressStatus } from './toDoStatus/ProgressStatus';
import ToDoCategory from './toDoCategory/ToDoCategory';
import ToDoStatus from './toDoStatus/ToDoStatus';

const ToDoForm = () => {
  const formikForm = useFormik<FormikValues>({
    initialValues: {
      taskTitle: '',
      taskDescription: '',
      taskPriority: categories[0].label,
      taskProgress: progressStatus[0].status,
      taskDueDate: '',
    },
    onSubmit: (values => {
      console.log(values);
    }),
  });

  return (
    <section className='container w-full flex flex-col items-center mt-6 space-y-4 font-medium todo-form'>
      <span className='text-xl font-semibold text-slate-700 dark:text-slate-400'>🎯 Add a Quest</span>
      <form onSubmit={formikForm.handleSubmit} className='w-1/4 flex flex-col items-center space-y-4'>
        <input 
          id='taskTitle'
          name='taskTitle'
          onChange={formikForm.handleChange}
          onBlur={formikForm.handleBlur}
          value={formikForm.values.taskTitle}
          className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
          placeholder='Title' 
          type='text' />
        <textarea 
          id='taskDescription'
          name='taskDescription'
          onChange={formikForm.handleChange}
          onBlur={formikForm.handleBlur}
          value={formikForm.values.taskDescription}
          placeholder='Describe your task' 
          className='w-full h-32 max-h-44 min-h-24 py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2'></textarea>
        <ToDoCategory formikForm={formikForm} />
        <ToDoStatus formikForm={formikForm} />
        <div className='w-full flex flex-col text-slate-700 dark:text-slate-400 pt-4 space-y-2'>
          <label htmlFor="dueDate" className='text-md'>⏰ Due Date</label>
          <input 
            id='taskDueDate' 
            name='taskDueDate' 
            onChangeCapture={formikForm.handleChange}
            onBlur={formikForm.handleBlur}
            value={formikForm.values.taskDueDate}
            className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 text-slate-700 dark:text-slate-400 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
            type='date' />
        </div>
        <div className='hidden lg:block'></div>
        <button type='submit' className='w-full py-2 px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 dark:hover:ring-slate-100 ease-in duration-200'>Add</button>
      </form>
    </section>
  );
};

export default ToDoForm;
