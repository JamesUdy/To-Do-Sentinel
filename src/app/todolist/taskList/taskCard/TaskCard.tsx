import React from 'react';
import { ListProps } from '../../fetchToDoData/FetchToDoData';

const TaskCard: React.FC<{task: ListProps}> = ({task}) => {

  return (
    <section className='w-full bg-slate-900 px-4 py-2 flex flex-col space-y-2 rounded-lg shadow-lg shadow-black' key={task.id}>
        <span>{task.taskTitle}</span>
        <span>{task.taskDescription}</span>
        <span>{task.taskDueDate}</span>
        <span>{task.createdAt}</span>
    </section>
  );
};

export default TaskCard;
