
import { auth } from "@/firebaseAuth/FirebaseAuth";
import { useEffect, useState } from "react";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const toggleAuthStatus = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(user && user.uid ? true : false);
            setUser(user);
            setLoading(false);
        });

        return () => toggleAuthStatus();
    }, []);

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
  
          setIsLoggedIn(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const errorEmail = error.customData.email;
  
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
      };

    return { user, setUser, isLoggedIn, setIsLoggedIn, loading, handleAuth };
};

export default useAuth;
