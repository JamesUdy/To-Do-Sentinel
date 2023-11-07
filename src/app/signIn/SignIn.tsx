'use client';

import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { DarkCurvedArrow, darkThemeLogo, LightCurvedArrow, lightThemeLogo } from "@/assets";
import useAuth from "@/app/hooks/useAuth";
import { useTheme } from "next-themes";
import Image from "next/image";
import "./SignIn.css";

const SignIn = () => {
    const router = useRouter(); 
    const { theme } = useTheme();
    const { user } = useAuth();
    
    const handleAuth = async () => {
      const googleSignIn = new GoogleAuthProvider();
      googleSignIn.setCustomParameters({
        prompt: 'select_account',
      })
      signInWithPopup(auth, googleSignIn)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;

        router.push('/todolist');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorEmail = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
      });
    };

  if(user) {
    router.push('/todolist');
    return null;
  };

  return (
    <section className="flex flex-col items-center my-auto w-full space-y-4 font-mono">
      <span className="text-6xl font-bold website-name">To Do Sentinel</span>
      <p className="text-lg text-center font-medium text-slate-800 dark:text-slate-500 my-4 w-1/2">
        Welcome to To Do Sentinel - Your Ultimate Task Management App! 🚀✨<br />
        Stay organized, boost productivity, and never forget a task 📈✅.
        <br /><br />
        Ready to take control of your tasks? 📋🏆
        <br /><br />
        Sign in now to start exploring your to-do list and supercharge your productivity! 🚀💪
      </p>
      <section className="overflow-hidden w-full mx-auto flex justify-center" aria-disabled='true'>
        <Image loading="lazy" src={lightThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/4 inline-block dark:hidden"/>
        <Image loading="lazy" src={darkThemeLogo} alt="ToDo Sentinel Logo" className="rotate-logo w-1/4 hidden dark:inline-block"/>
      </section>
      <section className="relative w-1/2 flex justify-center">
        <button className="px-4 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-800 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200" onClick={() => handleAuth()}>Sign In</button>
      <section className="absolute left-1/4 bottom-1/3">
        <Image loading="lazy" src={DarkCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-24 mx-4 inline-block dark:hidden" />
        <Image loading="lazy" src={LightCurvedArrow} alt="Sign In Button Indicating Arrow" className="w-24 mx-4 hidden dark:inline-block" />
      </section>
      </section>
       {/* <a href="https://www.flaticon.com/free-icons/curved-arrow" title="curved arrow icons">Curved arrow icons created by Freepik - Flaticon</a>*/}
    </section>
  )
};

export default SignIn;
