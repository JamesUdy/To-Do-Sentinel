import React from 'react';
import { Tooltip } from 'react-tooltip';
import { useTheme } from 'next-themes';

interface DueDateProps{
    dueDate: string;
};

const DueDate: React.FC<DueDateProps> = ({dueDate}) => {
  const { theme } = useTheme();
  
  const currentDate = new Date();  
  const DueDate = new Date(dueDate);  
  const diffMillisecond = DueDate.getTime() - currentDate.getTime();  
  const diffDate = diffMillisecond / (1000 * 60 * 60 * 24);

  const tooltipStyles: Record<string, { backgroundColor: string; color: string; }> = {
    light: {
      backgroundColor: '#94a3b8',
      color: '#f8fafc',
    },
    dark: {
      backgroundColor: '#334155',
      color: '#fff',
    },
    default: {
      backgroundColor: '#334155',
      color: '#fff',
    },
  };

  return (
    <>
        <span className='relative ease-in duration-200 w-full'>
            <span className={`${Number(diffDate.toFixed(0)) > 6 ? "hidden" : Number(diffDate.toFixed(0)) > 3 ? "block bg-red-400  animate-pulse" : Number(diffDate.toFixed(0)) < 0 ? "block bg-red-950 animate-bounce" : "bg-red-700 animate-pulse"} text-white px-2 text-sm rounded-md w-fit`} data-tip={true}data-tooltip-id='dueDateTooltip' data-tooltip-html={Number(diffDate.toFixed(0)) > 6
                ? `Due in more than 6 days (${dueDate})`
                : Number(diffDate.toFixed(0)) > 3
                ? `Due within (${diffDate.toFixed(0)}) days (${dueDate})`
                : Number(diffDate.toFixed(0)) < 0
                ? `Overdue by (${Math.abs(Number(diffDate.toFixed(0)))}) days (${dueDate})`
                : `Due within (${diffDate.toFixed(0)}) days (${dueDate})`}>Due</span>
            <Tooltip id='dueDateTooltip' place='top' style={tooltipStyles[theme || 'default']}>                
            </Tooltip>
        </span>
    </>
  );
};

export default DueDate;
