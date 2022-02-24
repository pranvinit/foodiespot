import React, { useState, useEffect, createContext } from "react";

import { loginRequest, registerRequest, logoutRequest } from "./auth.service";

// firebase imports
import { authentication } from "../../utils/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, isError] = useState(false);

  // checking for existing user in the session

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(authentication, (sessionUser) => {
      if (sessionUser) {
        setUser(sessionUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
    });
  }, []);

  const onLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const userCredential = await loginRequest({ email, password });
      setUser(userCredential.user);
      setLoading(false);
    } catch (error) {
      isError(error.message.toString());
      setLoading(false);
    }
  };
  const onRegister = async ({ email, password }) => {
    setLoading(true);
    try {
      const userCredential = await registerRequest({ email, password });
      setUser(userCredential.user);
      setLoading(false);
    } catch (error) {
      isError(error.message.toString());
      setLoading(false);
    }
  };

  const onLogout = () => {
    setLoading(true);
    try {
      logoutRequest();
      setUser(null);
      setLoading(false);
    } catch (error) {
      isError(error.message);
      setLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: Boolean(user),
        user,
        loading,
        error,
        onRegister,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
