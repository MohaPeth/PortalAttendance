import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { LoginPage } from './Auth/LoginPage';
import { RegisterPage } from './Auth/RegisterPage';
import { AdminDashboard } from './AdminDashboard';
import { UserDashboard } from './UserDashboard/UserDashboard';

export function AppRouter() {
  const { user } = useAuth();

  if (!user) {
    return <LoginPage />;
  }

  return user.role === 'admin' ? <AdminDashboard /> : <UserDashboard />;
}