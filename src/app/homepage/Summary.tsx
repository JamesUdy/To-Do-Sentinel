import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { darkThemeLogo, lightThemeLogo } from '@/assets';
import { gettingStarted } from './SummaryData';

const Summary = () => {

  return (
    <section className='px-16 flex space-x-16'>
        <div className='w-1/3'>
            <Link href='/' className='flex items-center p-0 m-0'>
                <div>
                <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 inline-block dark:hidden"/>
                <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="w-16 w360:w-20 hidden dark:inline-block"/>
                </div>
                <span className="hidden sm:block sm:text-lg xl:text-2xl font-bold website-name pt-2 tracking-tight">To Do Sentinel</span>
            </Link>
            <p className='font-normal text-justify text-slate-600'>Experience unparalleled productivity with ToDo Sentinel! Seamlessly manage tasks, set priorities, and achieve your goals effortlessly. With its sleek interface, tracking progress and staying organized has never been easier. Join ToDo Sentinel today and conquer your to-do list with confidence!</p>
        </div>
        <div className='w-2/3'>
            <div>
                <span className='font-bold text-md'>Getting Started</span>
                <ul className='space-y-2 pt-4 font-medium'>
                    {gettingStarted.map((item) => (
                        <li key={item.id} className='text-slate-600 hover:text-slate-950 dark:text-slate-500 dark:hover:text-slate-200'>
                            <a href={`#${item.name}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul></ul>
            </div>
            <div>
                <ul></ul>
            </div>
        </div>
    </section>
  );
};

export default Summary;
