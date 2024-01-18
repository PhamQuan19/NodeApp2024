import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { ReactNode } from "react";
interface AuthProviderProps {
    children: ReactNode;
  }

export default function ProtectedRoute({ children }: AuthProviderProps) {
  console.log({ accessToken: localStorage.getItem('accessToken') });
  if (!localStorage.getItem('accessToken')) {
    return <Navigate to='/login' />;
  }

  return <Outlet />;
}