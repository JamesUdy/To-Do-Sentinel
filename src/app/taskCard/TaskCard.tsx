import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import { Delete, Edit } from '@/assets';
import { useTheme } from 'next-themes';
import { deleteToDo, updateToDo } from '@/api/toDo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { categories } from '@/app/todo-list/toDoForm/Categories';
import { progressStatus } from '../todo-list/toDoForm/ProgressStatus';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';
import ToDoCategory from '../todo-list/toDoForm/ToDoCategory';
import ToDoStatus from '../todo-list/toDoForm/ToDoStatus';

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
};

const TaskCard: React.FC<{task: ListProps}> = ({task}) => {
  const formattedDate = formatDate(task.createdAt);
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const category = categories.find(category => category.label === task.taskPriority);
  const backgroundColor = theme === 'dark' ? category?.colors.dark : category?.colors.light;

  const handleDeleteTask = (taskId: string) => {
    const isConfirmed = window.confirm("❗️ Are you sure you want to permanently delete this task? This action cannot be undone.");
    if(isConfirmed) {
        deleteToDo({ docId: taskId });
        toast.success('Task successfully deleted!');
    } else {
        toast.error('Task deletion cancelled.');
    };
  };

  const formikForm = useFormik<ToDoValueProps>({
    initialValues: {
      taskTitle: task.taskTitle,
      taskDescription: task.taskDescription,
      taskPriority: task.taskPriority,
      taskProgress: task.taskProgress,
      taskDueDate: task.taskDueDate,
    },

    onSubmit:async (values, { setSubmitting }) => {
      console.log(values);

      const taskId = task.id;
      
      if(user !== null && user !== undefined) {
        try {
          setSubmitting(true);

          await new Promise(resolve => setTimeout(resolve, 2000));

          await updateToDo({
            docId: taskId,
            taskTitle: values.taskTitle.trim(),
            taskDescription: values.taskDescription.trim(),
            taskPriority: values.taskPriority,
            taskProgress: values.taskProgress,
            taskDueDate: values.taskDueDate,
          });
          setIsOpen(false);

          toast.success('Task created successfully');
        } catch (error) {
          console.error(error);
          toast.error('An error occurred while adding the task');
        } finally {
          setSubmitting(false);
        }
      } 
    },
  });

  const spinnerColor = theme === 'dark' ? 'dark-submission-button-loader' : 'light-submission-button-loader';

  return (
    <section className='w-full break-inside-avoid-column bg-white dark:bg-slate-900 p-2 flex flex-col justify-between h-full space-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black' key={task.id}>
        <div className='flex flex-col space-y-2'>
            <div className='flex justify-between items-center py-2'>
                <span className={`${backgroundColor} ml-1 px-2 rounded-md text-sm text-white shadow-md shadow-slate-700 dark:shadow-slate-950`}>{task.taskPriority}</span>
                <div className='flex space-x-2'>
                    <span className='cursor-pointer' onClick={() => setIsOpen(true)}>
                        <Edit/>
                    </span>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog className='relative h-fit w-full z-10 todo-list top-[50%]' as="div" open={isOpen} onClose={() => setIsOpen(false)}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/25" />
                            </Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex my-auto min-h-full items-center justify-center text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-950 pt-4 px-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6"
                                    >
                                        Edit Task 📝
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        Your payment has been successfully submitted. We’ve sent
                                        you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <section className='container text-slate-700 dark:text-slate-400 w-full flex flex-col items-center my-4 lg:my-0 lg:mb-8 space-y-2 font-medium todo-form'>
                                        <form onSubmit={formikForm.handleSubmit} className='flex w-full flex-col items-center space-y-2'>
                                            <section className='w-full flex flex-col items-start space-y-1 pb-2'>
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
                                            <section className='w-full flex flex-col items-start space-y-1 pb-2'>
                                            <label className='text-md' htmlFor="taskDescription">Describe your task<span className="text-red-500">*</span></label>
                                            <div className='relative w-full'>
                                                <textarea 
                                                id='taskDescription'
                                                name='taskDescription'
                                                onChange={formikForm.handleChange}
                                                onBlur={formikForm.handleBlur}
                                                value={formikForm.values.taskDescription}
                                                placeholder='E.g., Complete the book and take notes' 
                                                className='w-full h-24 sm:h-24 max-h-44 min-h-24 py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2'>                
                                                </textarea>
                                                {formikForm.touched.taskDescription && formikForm.errors.taskDescription && (
                                                <p className='w-full absolute pt-1 tracking-tighter text-red-500 font-semibold text-xs ml-1'>
                                                    {formikForm.errors.taskDescription}
                                                </p>
                                                )}
                                            </div>
                                            </section>
                                            <ToDoCategory formikForm={formikForm} />
                                            <ToDoStatus formikForm={formikForm} />
                                            <div className='w-full flex flex-col pt-4 space-y-2'>
                                            <label htmlFor="taskDueDate" className='text-md'>⏰ Due Date</label>
                                            <input 
                                                id='taskDueDate' 
                                                name='taskDueDate' 
                                                onChangeCapture={formikForm.handleChange}
                                                onBlur={formikForm.handleBlur}
                                                value={formikForm.values.taskDueDate}
                                                className='w-full py-2 px-3 text-sm bg-slate-300 dark:bg-slate-900 caret-slate-700 dark:caret-slate-400 placeholder:text-slate-600 dark:placeholder:text-slate-600 placeholder:text-sm rounded-md outline outline-1 outline-offset-2 outline-slate-400 dark:outline-slate-900 focus:outline focus:outline-2' 
                                                type='date' />
                                            </div>
                                            <div className='block'></div>
                                            <div className='flex space-x-4 justify-end w-full'>
                                                <button
                                                type="button"
                                                className="py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 dark:hover:ring-slate-100 ease-in duration-200"
                                                onClick={() => setIsOpen(false)}
                                                >
                                                Cancel
                                                </button>
                                                <button type='submit' className='py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-blue-500 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:scale-105 ease-in duration-200'>{formikForm.isSubmitting ? (
                                                <div className={`flex mx-auto ${spinnerColor}`}></div>
                                                ) : (
                                                <span>Save</span>
                                                )}</button>
                                            </div>
                                        </form>
                                        </section>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                    <span className='cursor-pointer' onClick={() => handleDeleteTask(task.id)}>
                        <Delete/>
                    </span>
                </div>
            </div>
            <div className='px-2 flex flex-col space-y-1'>
                <div className='flex space-x-2 items-center'>
                    <span className={`text-md sm:text-lg font-semibold ${task.taskProgress === 'Completed ✅' ? 'line-through' : ''}`}>{task.taskTitle}</span>
                    <span className={`${task.taskProgress === 'In Progress 🚧' ? 'bg-orange-600 animate-pulse' : task.taskProgress === 'Completed ✅' ? 'bg-green-600 animate-pulse' : 'bg-gray-600 dark:bg-gray-300 animate-bounce'} w-4 h-4 px-2 rounded-full`}></span>
                </div>
                <span className='text-xs sm:text-sm text-start font-normal'>{task.taskDescription}</span>
                {/* <span>{task.taskDueDate}</span> */}
            </div>
        </div>
        <span className='text-end w-full text-2xs font-medium text-slate-500'>{formattedDate}</span>
    </section>
  );
};

export default TaskCard;
