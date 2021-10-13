import React, {useContext, useState,useEffect} from 'react'
import {auth} from '../firebase'


const AuthContext =  React.createContext(); 

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {

    const[currentUser,setCurrentUser] = useState()

    function signup(email, password) {
         return auth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() =>{
        
       const unsubscribe = auth.onAuthStateChange(user =>{
        setCurrentUser(user)
        })
    }, [])


    auth.onAuthStateChange(user =>{
        setCurrentUser(user)
    })

    const value = {
        currentUser,signup
    }


    return (
        <AuthContext.Provider  value={value}>
            {children}
        </AuthContext.Provider>
    )
}