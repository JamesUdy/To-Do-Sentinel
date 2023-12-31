
import { DarkCurvedArrow, LightCurvedArrow } from "@/assets";
import Image from "next/image";
import "./SignIn.css";
import Link from "next/link";
import Constants from "@/constants/Constants";
import { darkThemeLogo, lightThemeLogo } from "@/assets";

const SignIn = () => {
    const { handleAuth, isLoggedIn, loading } = Constants();

  return (
    <section className="flex flex-col items-center my-auto w-full space-y-4 font-mono">
    <section className="overflow-hidden w-full mx-auto flex justify-center" aria-disabled='true'>
      <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 inline-block dark:hidden"/>
      <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/2 sm:w-1/4 hidden dark:inline-block"/>
    </section>
    <section className="relative w-1/2 flex justify-center">
      { !loading ? (
          !isLoggedIn ? (
            <button className="px-4 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-950 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200" onClick={() => handleAuth()}>Sign In</button>
          ) : (
            <>
              <Link href='/todo-form' className="text-2xs w414:text-xs sm:text-md lg:text-lg px-3 sm:px-3.5 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-950 dark:bg-slate-200 hover:dark:bg-slate-50">Get started</Link>
            </>
          )
        ) : (
          <div className="w-20 w360:w-24 py-1 sm:px-3 text-2xs w414:text-xs sm:text-md font-bold text-slate-200 dark:text-slate-950 bg-slate-950 dark:bg-slate-200 rounded-md shadow-lg shadow-slate-900 ease-in duration-200">
            <div className='flex mx-auto loader'></div>
          </div>
        )
      }
        <section className="absolute -left-14 w360:-left-12 w425:-left-8 sm:left-12 w800:left-10 lg:left-16 xl:left-32 w1440:left-1/4 bottom-1/3 flex justify-start">
          <Image loading="lazy" src={DarkCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-16 lg:w-20 xl:w-24 mx-4 inline-block dark:hidden" />
          <Image loading="lazy" src={LightCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-16 lg:w-20 xl:w-24 mx-4 hidden dark:inline-block" />
        </section>
      </section>
       {/* <a href="https://www.flaticon.com/free-icons/curved-arrow" title="curved arrow icons">Curved arrow icons created by Freepik - Flaticon</a>*/}
       
    </section>
  )
};

export default SignIn;
