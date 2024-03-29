import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { categories } from './Categories';
import { progressStatus } from './ProgressStatus';
import ToDoCategory from './ToDoCategory';
import ToDoStatus from './ToDoStatus';
import ToDoMethodComponent from '@/api/toDo';
import './ToDoForm.css';
import toast, { Toaster } from 'react-hot-toast';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';
import Constants from '@/constants/Constants';

const validationSchema = Yup.object({
  taskTitle: Yup.string()
    .transform((_, originalValue) => originalValue.trim())
    .required('Please enter your task title')
    .min(2, 'Title should have at least 2 letters')
    .max(100, 'Title cannot have more than 100 letters'),
    taskDescription: Yup.string()
    .transform((_, originalValue) => originalValue.trim())
    .required('Please enter your task description')
    .min(2, 'Description should have at least 2 characters')
    .max(125, 'Description cannot have more than 125 characters'),
});

const ToDoForm = () => {
  const { spinnerColor, user } = Constants();
  const { addToDo } = ToDoMethodComponent();

  const formikForm = useFormik<ToDoValueProps>({
    initialValues: {
      taskTitle: '',
      taskDescription: '',
      taskPriority: categories[0].label,
      taskProgress: progressStatus[0].status,
      taskFileDetails: [],
      taskFileUpload: {
        length: 0,
        item: (index: number) => null,
      } as FileList,
      taskDueDate: '',
    },

    validationSchema: validationSchema,

    onSubmit:async (values, { setSubmitting }) => {      
      if(user !== null && user !== undefined) {
        try {
          setSubmitting(true);

          await new Promise(resolve => setTimeout(resolve, 2000));

          await addToDo({
            userId: user.uid,
            taskTitle: values.taskTitle.trim(),
            taskDescription: values.taskDescription.trim(),
            taskPriority: values.taskPriority,
            taskProgress: values.taskProgress,
            taskFileDetails: values.taskFileDetails,
            taskFileUpload: values.taskFileUpload,
            taskDueDate: values.taskDueDate,
          });

          toast.success('Task created successfully');
  
          formikForm.resetForm();
        } catch (error) {
          console.error(error);
          toast.error('An error occurred while adding the task');
        } finally {
          setSubmitting(false);
        }
      } 
    },
  });

  return (
    <section className='container text-slate-700 dark:text-slate-400 w-full flex flex-col items-center my-4 lg:my-0 lg:mb-8 space-y-4 font-medium todo-form'>
      <Toaster toastOptions={{
        className: '', style: {
          marginTop: '32px',
        }
      }} position="bottom-right" />
      <span className='text-md w360:text-lg sm:text-xl font-semibold'>🎯 Add a Quest</span>
      <form onSubmit={formikForm.handleSubmit} className='w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center space-y-4'>
        <section className='w-full flex flex-col items-start space-y-1 pb-4'>
          <label className='text-md' htmlFor="taskTitle">Task Title<span className="text-red-500">*</span></label>
          <div className='relative w-full'>
            <input 
              id='taskTitle'
              name='taskTitle'
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              value={formikForm.values.taskTitle}
              className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
              placeholder='E.g., Test preparation' 
              type='text' 
            />
            {formikForm.touched.taskTitle && formikForm.errors.taskTitle && (
              <p className='w-full absolute pt-2 tracking-tighter text-red-500 font-semibold text-xs ml-1'>
                {formikForm.errors.taskTitle}
              </p>
            )}
          </div>
        </section>
        <section className='w-full flex flex-col items-start space-y-1 pb-4'>
          <label className='text-md' htmlFor="taskDescription">Describe your task<span className="text-red-500">*</span></label>
          <div className='relative w-full'>
            <textarea 
              id='taskDescription'
              name='taskDescription'
              onChange={formikForm.handleChange}
              onBlur={formikForm.handleBlur}
              value={formikForm.values.taskDescription}
              placeholder='E.g., Complete the book and take notes' 
              className='w-full h-24 sm:h-32 max-h-44 min-h-24 py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2'>                
            </textarea>
            {formikForm.touched.taskDescription && formikForm.errors.taskDescription && (
              <p className='w-full absolute pt-1 tracking-tighter text-red-500 font-semibold text-xs ml-1'>
                {formikForm.errors.taskDescription}
              </p>
            )}
          </div>
        </section>
        <ToDoCategory formikForm={formikForm} />
        <ToDoStatus formikForm={formikForm} showComplete={false} />
        <section className='w-full flex flex-col items-start space-y-1 pt-2 pb-4'>
          <label className='text-md' htmlFor="taskFileUpload">Upload Task Files</label>
          <div className='relative w-full'>
            <input 
              id='taskFileUpload'
              onChange={(event) => formikForm.setFieldValue('taskFileUpload', event.currentTarget.files)}
              onBlur={formikForm.handleBlur}
              className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
              placeholder='Select files...' 
              multiple
              type='file' 
            />
          </div>
          {formikForm.values.taskFileUpload && formikForm.values.taskFileUpload.length > 0 && (
            <div className='mt-2'>
              <p className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                Selected Files:
              </p>
              <ul className='list-disc break-all list-inside text-sm text-gray-600 dark:text-gray-400'>
                {Array.from(formikForm.values.taskFileUpload).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
        <div className='w-full flex flex-col pt-4 space-y-2'>
          <label htmlFor="taskDueDate" className='text-md'>⏰ Due Date</label>
          <input 
            id='taskDueDate' 
            name='taskDueDate'
            onChange={formikForm.handleChange} 
            onChangeCapture={formikForm.handleChange}
            onBlur={formikForm.handleBlur}
            value={formikForm.values.taskDueDate}
            className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
            type='date' />
        </div>
        <div className='block'></div>
        <button type='submit' className='w-full py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 dark:hover:ring-slate-100 ease-in duration-200'>{formikForm.isSubmitting ? (
          <div className={`flex mx-auto ${spinnerColor}`}></div>
        ) : (
          <span>Add</span>
        )}</button>
      </form>
    </section>
  );
};

export default ToDoForm;
