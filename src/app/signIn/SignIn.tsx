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
      <button onClick={() => handleAuth()}>Google</button>
    </section>
  )
};

export default SignIn;
