import React from 'react';
import { ListProps } from '../../fetchToDoData/FetchToDoData';

const TaskCard: React.FC<{task: ListProps}> = ({task}) => {
  return (
    <section key={task.id}>
        <span>{task.taskTitle}</span>
    </section>
  );
};

export default TaskCard;
