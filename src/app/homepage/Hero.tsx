import React from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-auto w-full xl:max-w-7xl space-y-4 hero-section-font" id='heroContent'>
      <div className='mx-auto w-full pt-10 text-center lg:pt-24'>
        <h1 className='mx-auto max-w-5xl text-5xl sm:text-7xl font-medium tracking-tight leading-10'>
          <span>Seamlessly Organize, Prioritize and </span> 
          <span className='relative whitespace-nowrap text-blue-600'>
            <svg aria-hidden='true'
                viewBox='0 0 418 42'
                className='absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70'
                preserveAspectRatio='none'>
              <path
                d='M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z'>
              </path>
            </svg>
            <span className='relative'>Tailor Tasks</span>
          </span>
          <span>
            <span> with</span>
            <br/>
            <strong>To Do Sentinel
          </strong>
          </span>
        </h1>
        <div className='text-xl sm:text-2xl my-6 font-normal dark:font-light'>
          <Typewriter options={{
            strings: ['Let To Do Sentinel be your guide to a more organized and productive life, all in one place.'],
            delay: 64,
            autoStart: true,
            loop: true,
          }}
          />
        </div>
      </div>      
    </div>
  );
};

export default Hero;
