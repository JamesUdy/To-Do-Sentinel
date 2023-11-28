import React, { Fragment } from 'react';
import { useTheme } from 'next-themes';
import { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import { ToDoValueProps } from '@/toDoValueProps/ToDoValueProps';
import ToDoCategory from '../todo-list/toDoForm/ToDoCategory';
import ToDoStatus from '../todo-list/toDoForm/ToDoStatus';
import { updateToDo } from '@/api/toDo';
import { useFormik } from 'formik';
import useAuth from '../hooks/useAuth';
import { Dialog, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';

interface UpdateDocProps {
    task: ListProps;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const UpdateDoc: React.FC<UpdateDocProps> = ({task, isOpen, setIsOpen}) => {
  const { user } = useAuth();
  const { theme } = useTheme();
    
  const formikForm = useFormik<ToDoValueProps>({
    initialValues: {
      taskTitle: task.taskTitle,
      taskDescription: task.taskDescription,
      taskPriority: task.taskPriority,
      taskProgress: task.taskProgress,
      taskDueDate: task.taskDueDate,
    },

    onSubmit:async (values, { setSubmitting }) => {
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

          toast.success('Task updated successfully ✅');
        } catch (error) {
            toast.error('An error occurred while updating the task');
        } finally {
          setSubmitting(false);
        }
      } 
    },
  });

  const isFormDirty = formikForm.dirty;

  const spinnerColor = theme === 'dark' ? 'dark-submission-button-loader' : 'light-submission-button-loader';

  return (
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
                    <Dialog.Panel className="w-full border-2 border-slate-500/50 dark:border-slate-600/10 max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-slate-950 pt-4 px-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6"
                    >
                        Edit Task 📝
                    </Dialog.Title>
                    <div className="my-4">
                        <p className="text-sm text-gray-500">
                        🔄 Tailor your tasks with our seamless editing feature. Make updates, stay organized, and achieve more, effortlessly!
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
                                <button type='submit'disabled={!isFormDirty || formikForm.isSubmitting} className={`${!isFormDirty ? 'cursor-not-allowed' : 'cursor-pointer'} py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-blue-500 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:scale-105 ease-in duration-200`}>{formikForm.isSubmitting ? (
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
  );
};

export default UpdateDoc;
