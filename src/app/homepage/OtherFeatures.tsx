import React from 'react';
import { otherData } from './features/OtherFeaturesData';

const OtherFeatures = () => {
  return (
    <div className='w-full p-10 space-y-16' id='extraFeaturesContent'>
        <div className='flex justify-center mx-auto text-3xl quote w-1/2 relative'>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='absolute -top-4 -left-4'>
                <path fill="currentColor" d="M11 18v-8H9.12l2-4H5.38L3 10.76V18m6-2H5v-4.76L6.62 8h1.26l-2 4H9m12 6v-8h-1.88l2-4h-5.74L13 10.76V18m6-2h-4v-4.76L16.62 8h1.26l-2 4H19Z">
                </path>
            </svg>
            <span className='text-center'>Not only that, we also offer these enhancements to elevate your experience.</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className='absolute -bottom-4 right-0'>
                <path fill="currentColor" d="M13 6v8h1.88l-2 4h5.74L21 13.24V6m-6 2h4v4.76L17.38 16h-1.26l2-4H15M3 6v8h1.88l-2 4h5.74L11 13.24V6M5 8h4v4.76L7.38 16H6.12l2-4H5Z">
                </path>
            </svg>
        </div>
        <section className='grid items-center justify-center space-y-2 xl:space-y-0 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 w-full'>
            {otherData.map((data) => (
                <div key={data.id} className='bg-white dark:bg-slate-900 group rounded-lg h-72 mx-2 p-4'>
                    <div className='relative p-2 flex flex-col  rounded-lg border-slate-200 dark:border-slate-950 group-hover:border-slate-400 dark:group-hover:border-slate-600 ease-in duration-200 justify-center space-y-6 items-center border-2 h-full'>
                        <div className='mt-2 text-slate-600 dark:text-slate-950 dark:group-hover:text-slate-600'>
                            <data.icon />
                        </div>
                        <div className='flex flex-col font-semibold items-center space-y-1'>
                            <span className='text-sm text-slate-700 dark:text-slate-600'>{data.title}</span>
                            <p className='text-center text-slate-500 text-xs'>{data.description}</p>
                        </div>
                        <span className='absolute tracking-normal -top-[26px] -left-[1.5px] py-1 px-4 rounded-tl-lg border-r-8  border-b-8 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-950 font-medium text-slate-600 dark:text-slate-800 group-hover:text-slate-800 dark:group-hover:text-slate-600 ease-in duration-200'>0{data.id + 1}</span>
                    </div>                    
                </div>
            ))}
        </section>
    </div>
  );
};

export default OtherFeatures;
