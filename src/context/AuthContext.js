import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

<<<<<<< HEAD
const AuthContext =  React.createContext(); 
=======
const AuthContext = React.createContext();
>>>>>>> e36ae9fef3deea388c7931de741ccc3b1b95252d

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  console.log(currentUser);

  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user);
    });
  }, []);

  auth.onAuthStateChanged((user) => {
    setCurrentUser(user);
  });

  const value = {
    currentUser,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
