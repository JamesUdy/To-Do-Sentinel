import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData);

  return (
    <>
      <div>TaskList</div>
      {toDoListData.map((task) => (
        <span></span>
      ))}
    </>
  );
};

export default TaskList;
