import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { AppRouter } from './components/AppRouter';
import { NotificationProvider } from './components/Notifications/NotificationContext';

export function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <AppRouter />
      </NotificationProvider>
    </AuthProvider>
  );
}