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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>To Do Sentinel</div>
      <button onClick={() => handleAuth()}>Google</button>
    </main>
  );
};

export default Home;
