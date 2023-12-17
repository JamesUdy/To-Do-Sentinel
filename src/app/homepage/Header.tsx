import React from 'react';
import Image from "next/image";
import { darkThemeLogo, lightThemeLogo } from "@/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center my-auto w-full space-y-4 font-mono">
        <span className="text-3xl w360:text-5xl sm:text-6xl font-bold website-name">To Do Sentinel</span>
        <p className="text-xs w360:text-md sm:text-lg text-center font-medium text-slate-800 dark:text-slate-500 my-4 px-4 sm:px-0 lg:w-1/2">
            Welcome to To Do Sentinel - Your Ultimate Task Management App! 🚀✨<br />
            Stay organized, boost productivity, and never forget a task 📈✅.
            <br /><br />
            Ready to take control of your tasks? 📋🏆
            <br /><br />
            Sign in now to start exploring your to-do list and supercharge your productivity! 🚀💪
        </p>
        <section className="overflow-hidden w-full mx-auto flex justify-center" aria-disabled='true'>
            <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 inline-block dark:hidden"/>
            <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 hidden dark:inline-block"/>
        </section>
    </div>
  );
};

export default Header;
