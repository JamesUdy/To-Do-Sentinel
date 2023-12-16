'use client';

import React, { useEffect, useState } from 'react';
import { DarkMode, LightMode } from '@/assets';
import Constants from '@/constants/Constants';

const ThemeToggleButton = () => {
  const { handleDarkThemeChange, theme } = Constants();
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => setHasMounted(true));

  if (!hasMounted) return null;


  return (
    <button
    className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-800 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200`}
    onClick={() => handleDarkThemeChange()}
  >
    {theme === "light" ? 
      (
        <DarkMode/>
      ) : (
        <LightMode/>
      )
    }
  </button>
  );
};

export default ThemeToggleButton;
