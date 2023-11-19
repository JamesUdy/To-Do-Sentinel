import React from 'react';
import FetchToDoData, { ListProps } from '../fetchToDoData/FetchToDoData';

const TaskList = () => {
  const toDoListData: ListProps[] = FetchToDoData();

  console.log(toDoListData)

  return (
    <>
      <div>TaskList</div>
      {toDoListData && (
        toDoListData.map((task) => (
          <section key={task.id}>
            <span>{task.taskTitle}</span>
          </section>
        ))
      )}
    </>
  );
};

export default TaskList;
