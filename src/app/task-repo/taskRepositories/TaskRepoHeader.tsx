import React, { useState } from 'react';
import { Info, LeftArrow } from '@/assets';

const TaskRepoHeader = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className='text-md w360:text-lg sm:text-xl font-semibold text-center flex items-center justify-center space-x-4'>
        <span>🗂️ Task Repository</span>
        <span className='relative ease-in duration-200' onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
            <Info/>
            <span className={`absolute hidden ${isPopoverOpen ? 'sm:block' : 'sm:hidden'} left-10 top-0 bg-slate-950 dark:bg-slate-200 text-slate-300 dark:text-slate-950 px-2 py-1 text-xs ease-in duration-200 rounded-md`}>User&nbsp;Guide</span>
            <span className={`absolute hidden ${isPopoverOpen ? 'sm:block' : 'sm:hidden'} left-6 top-0`}><LeftArrow/></span>
        </span>
    </div>
  );
};

export default TaskRepoHeader;
