'use client';

import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { darkThemeLogo, lightThemeLogo } from "@/assets";
import useAuth from "@/hooks/useAuth";
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
    
    const logoImage = theme === 'dark' ? darkThemeLogo : lightThemeLogo;

  if(user) {
    router.push('/todolist');
    return null;
  };

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <span>To Do Sentinel</span>
      <section className="overflow-hidden w-full mx-auto flex justify-center">
        <Image src={logoImage} alt="ToDO Sentinel Logo" className="rotate-logo w-1/4" />
      </section>
      <button className="px-4 py-1 rounded-md font-bold ease-in duration-200 text-slate-200 dark:text-slate-950 bg-slate-800 hover:bg-slate-950 dark:bg-slate-100 hover:dark:bg-slate-200" onClick={() => handleAuth()}>Sign In</button>
    </section>
  )
};

export default SignIn;
