import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData[0])

  return (
    <>
      <div>TaskList</div>
    </>
  );
};

export default TaskList;
