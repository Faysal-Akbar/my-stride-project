import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

//Create Context
export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // Create User as new
    const createUser = (email, password)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);    
    }

    // Sign-In User
    const signIn = (email, password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = ()=> {
        return signInWithPopup(auth, googleProvider)
    };

    // Logout
    const logOut = ()=> {
        return signOut(auth).then(()=> setUser(null))
    }
    
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser);
                setLoading(false);
                console.log(currentUser);
            }
            else{
                setLoading(false);
            }
        });
        return ()=> {
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        googleLogin,
        createUser,
        signIn,
        logOut,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;