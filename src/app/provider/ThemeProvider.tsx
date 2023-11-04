'use client';

import * as React from 'react';
import { ThemeProvider as DarkModeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

const DarkThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
      <DarkModeProvider { ...props }>
        {children}
      </DarkModeProvider>  
    );
};

export default DarkThemeProvider;
