'use client';

import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { darkThemeLogo, lightThemeLogo } from "@/assets";
import { useTheme } from "next-themes";
import Image from "next/image";

const SignIn = () => {
    const router = useRouter(); 
    const { theme } = useTheme();
    
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

  return (
    <section className="flex flex-col items-center justify-center w-full">
      <span>To Do Sentinel</span>
      <Image src={logoImage} alt="ToDO Sentinel Logo" />
      <button onClick={() => handleAuth()}>Google</button>
    </section>
  )
};

export default SignIn;
