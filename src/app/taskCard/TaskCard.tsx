import React, { useState } from 'react';
import { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import { Delete, Edit } from '@/assets';
import { useTheme } from 'next-themes';
import ToDoMethodComponent from '@/api/toDo';
import toast from 'react-hot-toast';
import { categories } from '@/app/todo-form/toDoForm/Categories';
import UpdateDoc from './UpdateDoc';
import DueDate from './DueDate';

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

  const { deleteToDo } = ToDoMethodComponent();

  const category = categories.find(category => category.label === task.taskPriority);
  const backgroundColor = theme === 'dark' ? category?.colors.dark : category?.colors.light;

  const handleDeleteTask = (taskId: string, taskProgress: string) => {
    let confirmationMessage = "❗️ Are you sure you want to permanently delete this task? This action cannot be undone.";

    switch (taskProgress) {
        case 'Yet to start ⏳':
            confirmationMessage = "⚠️ This task has not started yet. Are you sure you want to delete it?";
            break;
        case 'In Progress 🚧':
            confirmationMessage = "⚠️ This task is currently in progress. Are you sure you want to delete it?";
            break;
        case 'Completed ✅':
            confirmationMessage = "✅ This task has been completed. You can safely delete it now. Are you sure?";
            break;
        default:
            break;
    }

    const isConfirmed = window.confirm(confirmationMessage);

    if (isConfirmed) {
        deleteToDo({ docId: taskId });
        toast.success('Task successfully deleted!');
    } else {
        toast.error('Task deletion cancelled.');
    }
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
                    <UpdateDoc task={task} isOpen={isOpen} setIsOpen={setIsOpen} />
                    <span className='cursor-pointer' onClick={() => handleDeleteTask(task.id, task.taskProgress)}>
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
            </div>
        </div>
        {
            task.taskFileDetails && task.taskFileDetails.length > 0 && Array.from(task.taskFileDetails).map((taskFile, index) => (
                <a href={taskFile.fileUrl} target='_blank' key={taskFile.id}>{taskFile.fileName}</a>
            ))
        }
        <div className='flex w-full items-center justify-between pt-4 pb-2 px-2 sm:px-0 sm:pl-2'>
            {task.taskDueDate && <DueDate dueDate={task.taskDueDate} />}
            <span className='text-end w-full text-2xs font-medium text-slate-500'>{formattedDate}</span>
        </div>
    </section>
  );
};

export default TaskCard;
