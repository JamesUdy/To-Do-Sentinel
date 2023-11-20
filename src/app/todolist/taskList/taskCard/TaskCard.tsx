import React from 'react';
import { ListProps } from '../../fetchToDoData/FetchToDoData';
import { Delete, Edit } from '@/assets';
import { categories } from '../../toDoForm/toDoCategory/Categories';
import { useTheme } from 'next-themes';

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
};

const TaskCard: React.FC<{task: ListProps}> = ({task}) => {
    const formattedDate = formatDate(task.createdAt);
    const category = categories.find(category => category.label === task.taskPriority);
    const { theme } = useTheme();

    const backgroundColor = theme === 'dark' ? category?.colors.dark : category?.colors.light;

  return (
    <section className='w-full bg-white dark:bg-slate-900 p-2 flex flex-col justify-between sm:h-40 xlm:h-48 space-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black' key={task.id}>
        <div className='flex flex-col space-y-2'>
            <div className='flex justify-between items-center py-2'>
                <span className={`${backgroundColor} ml-1 px-2 rounded-md text-sm text-white`}>{task.taskPriority}</span>
                <div className='flex space-x-2'>
                    <Edit/>
                    <Delete/>
                </div>
            </div>
            <div className='px-2 flex flex-col space-y-1'>
                <span className='text-lg font-semibold'>{task.taskTitle}</span>
                <span className='text-sm text-start font-normal'>{task.taskDescription}</span>
                {/* <span>{task.taskDueDate}</span> */}
            </div>
        </div>
        <span className='text-end w-full text-2xs text-slate-500'>{formattedDate}</span>
    </section>
  );
};

export default TaskCard;
