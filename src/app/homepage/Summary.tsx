import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { darkThemeLogo, lightThemeLogo } from '@/assets';
import { contact, gettingStarted, pages } from './SummaryData';
import SummaryContainer from './SummaryContainer';
import Constants from '@/constants/Constants';

const Summary = () => {

    const { isLoggedIn } = Constants();

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
        <div className='w-2/3 flex justify-center space-x-24'>
            <SummaryContainer title="Getting Started" listData={gettingStarted} />
            {isLoggedIn && <SummaryContainer title="Pages" listData={pages} />}
            <SummaryContainer title="Contact Us" listData={contact} />
        </div>
    </section>
  );
};

export default Summary;
