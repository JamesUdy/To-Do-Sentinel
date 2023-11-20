import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';
import TaskCard from './taskCard/TaskCard';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData);

  return (
    <div className='w-full container flex flex-col items-center'>
      <span>TaskList</span>
        {toDoListData && (
          <section className='grid grid-cols-3 w-1/2 gap-4'>
          {toDoListData.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </section>
        )}
    </div>
  );
};

export default TaskList;
