import React from 'react';

const DarkMode = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
        <mask id="ipSMoon0">
            <path fill='currentColor' stroke='currentColor' strokeLinejoin="round" strokeWidth="4" d="M28.053 4.41c-5.47 1.427-9.508 6.4-9.508 12.317c0 7.03 5.699 12.727 12.728 12.727c5.916 0 10.89-4.037 12.316-9.507A20.05 20.05 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z">
            </path>
        </mask>
        <path fill='currentColor' d="M0 0h48v48H0z" mask="url(#ipSMoon0)">
        </path>
    </svg>
  );
};

export default DarkMode;
