import React from 'react';
import FeatForm from './features/FeatForm';
import FeatRepositories from './features/FeatRepositories';
import FeatCustom from './features/FeatCustom';

const Features = () => {
  return (
    <div className='flex flex-col items-center w-full max-w-7xl p-4 space-y-20'>
        <FeatForm/>
        <FeatRepositories/>
        <FeatCustom/>
    </div>
  );
};

export default Features;
