"use client"
import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../firebaseConfig';


export const AuthContext = createContext();
const auth = getAuth(app);



export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe()
    }
  },[])
  
  const authInfo = {
    user,
    loading,
    registerUser: createUser,

    
}
  return (
      <AuthContext.Provider value={authInfo} >
          {children}
    </AuthContext.Provider>
  )
}
