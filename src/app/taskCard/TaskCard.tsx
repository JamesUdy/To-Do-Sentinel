import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import { Delete, Edit } from '@/assets';
import { categories } from '@/app/todo-list/toDoForm/Categories';
import { useTheme } from 'next-themes';
import { deleteToDo, updateToDo } from '@/api/toDo';
import toast from 'react-hot-toast';

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
  let [isOpen, setIsOpen] = useState(false);

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
                        <Dialog className='relative z-10' as="div" open={isOpen} onClose={() => setIsOpen(false)}>
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
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Payment successful
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        Your payment has been successfully submitted. We’ve sent
                                        you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClick={() => setIsOpen(false)}
                                        >
                                        Got it, thanks!
                                        </button>
                                    </div>
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
