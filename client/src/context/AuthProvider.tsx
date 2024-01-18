import React, { createContext, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { ReactNode } from "react";
export const AuthContext = createContext({});

interface AuthProviderProps {
  children: ReactNode;
}
export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log('[From AuthProvider]', { user });
      if (user?.uid) {
        setUser(user);
        // localStorage.setItem('accessToken', user.accessToken);
        user.getIdToken().then((accessToken) => {
          localStorage.setItem('accessToken', accessToken);
        });
        // if (user.accessToken !== localStorage.getItem('accessToken')) {
        //   localStorage.setItem('accessToken', user.accessToken);
        //   window.location.reload();
        // }
       // setIsLoading(false);
        return;
      }

    //   // reset user info
    //   console.log('reset');
      setIsLoading(false);
      setUser({});
      localStorage.clear();
      navigate('/login');
    });

    return () => {
      unsubcribed();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* {isLoading ? <CircularProgress /> : children} */}
      {children}
    </AuthContext.Provider>
  );
}