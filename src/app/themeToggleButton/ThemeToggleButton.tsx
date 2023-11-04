'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => setHasMounted(true));

  if (!hasMounted) return null;


  return (
    <button
    className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
    {theme === "light" ? "Dark" : "Light"}
  </button>
  );
};

export default ThemeToggleButton;
