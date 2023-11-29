import { auth } from "@/firebaseAuth/FirebaseAuth";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

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

    return { user, setUser, isLoggedIn, setIsLoggedIn, loading };
};

export default useAuth;
