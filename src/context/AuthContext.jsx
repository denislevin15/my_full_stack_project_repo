import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  isLoggedIn: "",
  setIsLoggedIn: () => { },
  userRole: "",
  setUserRole: () => { }
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("")
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const isLoggedInStr = localStorage.getItem('isLoggedIn');
    const userRoleStr = localStorage.getItem('userRole');
    if (isLoggedInStr) {
      setIsLoggedIn(isLoggedInStr)
    }
    if (userRoleStr) setUserRole(userRoleStr);
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userRole, setUserRole }}>
      {children}
    </AuthContext.Provider>
  );
};
