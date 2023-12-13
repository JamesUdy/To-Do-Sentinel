import React from 'react';

interface DueDateProps{
    dueDate: string;
};

const DueDate: React.FC<DueDateProps> = ({dueDate}) => {
  const currentDate = new Date();  
  const DueDate = new Date(dueDate);
  
  const diffMillisecond = DueDate.getTime() - currentDate.getTime();
  
  const diffDate = diffMillisecond / (1000 * 60 * 60 * 24);

  return (
    <>
        <span className={`${Number(diffDate.toFixed(0)) > 6 ? "hidden" : Number(diffDate.toFixed(0)) > 3 ? "block bg-red-400  animate-pulse" : Number(diffDate.toFixed(0)) < 0 ? "block bg-red-950 animate-bounce" : "bg-red-700 animate-pulse"} text-white px-2 text-sm rounded-md`}>Due</span>
    </>
  );
};

export default DueDate;
