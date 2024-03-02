import React from 'react';
import { listDataProps } from './SummaryData';
import Link from 'next/link';

interface SummaryContainerProps {
    title: string;
    listData: listDataProps[];
};

const SummaryContainer: React.FC<SummaryContainerProps> = ({title, listData}) => {
  return (
    <div>
        <span className='font-bold text-md'>{title}</span>
        <ul className='space-y-2 pt-4 pl-2 font-medium'>
        {listData.map((item) => (
            <li key={item.id} className='text-slate-600 hover:text-slate-950 dark:text-slate-500 dark:hover:text-slate-200'>
                {title === "Contact Us" ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>
                ) : (
                    title === "pages" ? (
                        <Link href={`/${item.link}`}>{item.name}</Link>
                    ) : (
                        <a href={item.link.startsWith('/') ? item.link : `#${item.link}`}>{item.name}</a>
                    )
                ) }
            </li>
        ))}
        </ul>
    </div>
  );
};

export default SummaryContainer;
