import React, { useEffect, useRef } from 'react';

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
    <section className='w-full flex justify-center my-6'>
      <div className="relative mt-2 flex items-center shadow-lg shadow-neutral-900">
        <input
          type="text"
          name="search"
          id="search"
          placeholder={'Search recent projects'}
          className="block w-full text-sm rounded-sm border-0 py-1.5 pr-12 text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-700 placeholder:text-neutral-600 focus:ring-1 focus:ring-inset focus:ring-neutral-700 bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-blue-600"
          value={keyword}
          onChange={handleKeywordChanges}
          ref={searchInputRef}
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5" onClick={clearKeyword}>
          {keyword.length > 0 && <ClearKeywordButton/>}
        </div>
      </div>
    </section>
  );
};

function ClearKeywordButton() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
      className="w-5 h-5 stroke-neutral-500 cursor-pointer"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
    </svg>
  );
}

export default SearchTask;
