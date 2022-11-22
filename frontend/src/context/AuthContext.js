import { useContext, createContext, useState, useEffect } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { auth } from '../firebase'


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({})


    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        // signInWithPopup(auth, provider)
        signInWithRedirect(auth, provider)
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser);
            console.log(currentuser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}