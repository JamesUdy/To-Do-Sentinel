'use client';

import { ReactNode, createContext, useContext, useState } from "react";

const initialDarkModeContext = {
    darkMode: false,
    toggleDarkMode: () => {},
  };

const DarkModeContext = createContext(initialDarkModeContext);

export function DarkModeProvider({ children }: { children: ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const darkModeValue = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <DarkModeContext.Provider value={ darkModeValue }>
            {children}
        </DarkModeContext.Provider>
    );
};

const useDarkMode = () => {
    return useContext(DarkModeContext);
};

export default useDarkMode;
