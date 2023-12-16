import React from 'react';
import { ListProps } from '@/app/fetchToDoData/FetchToDoData';
import TaskCard from '@/app/taskCard/TaskCard';
import TaskLoader from '@/app/loader/taskLoader/TaskLoader';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
 
interface EarlyStageTasksProps {
  taskData: ListProps[];
};

const EarlyStageTasks: React.FC<EarlyStageTasksProps> = ({taskData}) => {

  const isLargerScreen = useMediaQuery({
    minWidth: 1440,
  });

  const earlyStageTasks = taskData.filter(
    task => task.taskProgress !== "Completed ✅"
  );

  const displayTasks = isLargerScreen ? earlyStageTasks.slice(0, 3) : earlyStageTasks.slice(0, 4);

  return (
    <section className='w-full px-2 container flex flex-col space-y-8 items-center my-16 todo-list text-slate-700 dark:text-slate-400'>
        <span className='text-md w360:text-lg sm:text-xl font-semibold'>🌱 In the Pipeline: Early Stage Tasks</span>
        {displayTasks ? (
          <section className='sm:columns-2 xl:columns-3 w-full sm:w-2/3 xl:w-1/2 gap-x-4 space-y-6 text-slate-900 dark:text-slate-400'>
          {displayTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
          </section>
        )  : (
            <TaskLoader/>
            ) 
        }
        <Link href='/task-repo'>
            <button className='py-1 px-2 sm:py-2 sm:px-3 text-md font-bold bg-slate-950 dark:bg-slate-200 text-slate-100 dark:text-slate-950 rounded-md shadow-lg shadow-slate-900 hover:ring-1 hover:ring-offset-2 hover:ring-offset-slate-900 hover:ring-slate-900 dark:hover:ring-slate-100 ease-in duration-200'>🗂️ Task Repository</button>
        </Link>
    </section>
  );
};

export default EarlyStageTasks;
