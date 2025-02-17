import { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);
// const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userProfileUpdate = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    const signUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
             setUser(currentUser);
             setLoading(false);
        });

        return () => unSubscribe();
    },[])

    const authInfo = {user, setUser, loading, signUser, userProfileUpdate, logOut, createUser};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;