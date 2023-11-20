import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';
import TaskCard from './taskCard/TaskCard';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData);

  return (
    <>
      <div>TaskList</div>
      {toDoListData && (
        toDoListData.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      )}
    </>
  );
};

export default TaskList;
