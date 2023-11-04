'use client';

import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Home = () => {
  const router = useRouter();  
  const { theme, setTheme } = useTheme();

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

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <span>To Do Sentinel</span>
      <button
        className={`w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? "Dark" : "Light"}
      </button>
      <button onClick={() => handleAuth()}>Google</button>
    </div>
  );
};

export default Home;
