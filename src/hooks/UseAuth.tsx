import { auth } from "@/firebaseAuth/FirebaseAuth";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setIsLoggedIn(user && user.uid ? true : false);
            setUser(user);
        });
    });

    return { user, setUser, isLoggedIn };
};

export default useAuth;
