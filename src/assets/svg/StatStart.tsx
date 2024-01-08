import React from 'react';

const StatStart = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className='h-12 w-12'>
        <defs>
            <mask id="ipTStopwatchStart0">
                <g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4">
                    <path fill="#555" d="M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z">
                    </path>
                    <path stroke-linecap="round" d="M18 4h12m-6 15v8m8 0h-8m0-23v4">
                    </path>
                </g>
            </mask>
        </defs>
        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStopwatchStart0)">
        </path>
    </svg>
  );
};

export default StatStart;
