import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    // create user
    const createUser = (email, pass) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pass);
    }
    // sign in user
    const signInUser = (email, pass) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pass);
    }
    // get currently sign in user
    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])
    // sign out user
    const signOutUser = () =>{
        return signOut(auth);
    }
    const authValue = {
        user,
        createUser, 
        signInUser,
        signOutUser,
        loading,
    }
    return (
        <AuthContext.Provider value={authValue}>
                {children}
        </AuthContext.Provider>
    );
};
export {AuthContext}
export default AuthProvider;