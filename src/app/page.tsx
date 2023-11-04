'use client';

import { auth } from "@/firebaseAuth/FirebaseAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();  

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
      <div>
        <span>Light</span>
      </div>
      <button onClick={() => handleAuth()}>Google</button>
    </div>
  );
};

export default Home;
