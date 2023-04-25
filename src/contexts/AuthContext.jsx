import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { signup, login, logout, auth } from "../firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    import.meta.env.VITE_ADMIN_UID.split(",").forEach((uid) => {
      if (uid === currentUser?.uid) setIsAdmin(true);
    });

    return unsubscribe;
  }, [currentUser]);

  const value = {
    currentUser,
    isAdmin,
    setCurrentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
