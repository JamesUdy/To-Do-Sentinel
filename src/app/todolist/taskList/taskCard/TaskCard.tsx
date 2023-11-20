import React from 'react';
import { ListProps } from '../../fetchToDoData/FetchToDoData';

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
};

const TaskCard: React.FC<{task: ListProps}> = ({task}) => {
    const formattedDate = formatDate(task.createdAt);

  return (
    <section className='w-full bg-white dark:bg-slate-900 p-2 flex flex-col justify-between h-40 space-y-2 rounded-lg shadow-lg shadow-slate-600 dark:shadow-black' key={task.id}>
        <div>
            <span>{task.taskTitle}</span>
            <span>{task.taskDescription}</span>
            <span>{task.taskDueDate}</span>
        </div>
        <span className='text-end w-full text-2xs text-slate-500'>{formattedDate}</span>
    </section>
  );
};

export default TaskCard;
