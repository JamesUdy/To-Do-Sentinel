import React, { useEffect, useRef } from 'react';
import { ClearKeywordTask, Search } from '@/assets';

interface SearchTaskProps {
  keyword: string;
  handleKeywordChanges: (event: React.ChangeEvent<HTMLInputElement>) => void;
  clearKeyword: () => void;
};

const SearchTask: React.FC<SearchTaskProps> = ({keyword, handleKeywordChanges, clearKeyword}) => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f') {
        e.preventDefault();

        if(searchInputRef.current) {
          searchInputRef.current.focus();
          searchInputRef.current.select();
        };
      };
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <section className='w-full px-4 sm:px-0 sm:w-2/3 lg:w-1/2 flex mx-auto my-6'>
      <div className="relative w-full mt-2 rounded-md flex items-center shadow-lg shadow-slate-600 dark:shadow-black">
        <div className='absolute left-4'>
          <Search/>
        </div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder={'Find a specific task title...'}
          className="block pl-10 sm:pl-12 w-full text-sm rounded-md border-0 py-1.5 pr-12 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-slate-400 dark:ring-slate-900 placeholder:text-neutral-600 focus:ring-1 focus:ring-inset bg-white dark:bg-slate-900 focus-visible:outline-2 focus-visible:outline focus-visible:outline-blue-600"
          value={keyword}
          onChange={handleKeywordChanges}
          ref={searchInputRef}
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5 cursor-pointer" onClick={clearKeyword}>
          {keyword.length > 0 && <ClearKeywordTask/>}
        </div>
      </div>
    </section>
  );
};

function ClearKeywordButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={1.5}
      className="w-5 h-5 cursor-pointer"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  );
}

export default SearchTask;
