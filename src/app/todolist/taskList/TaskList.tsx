import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';
import TaskCard from './taskCard/TaskCard';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData);

  return (
    <div className='w-full container flex flex-col items-center my-4 todo-list'>
      <span>TaskList</span>
        {toDoListData && (
          <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:w-2/3 xl:w-1/2 gap-6'>
          {toDoListData.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </section>
        )}
    </div>
  );
};

export default TaskList;
