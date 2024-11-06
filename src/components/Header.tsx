import React from 'react';
import { Search } from 'lucide-react';
import { NotificationDropdown } from './Notifications/NotificationDropdown';
import { ProfileDropdown } from './Header/ProfileDropdown';
import { useAuth } from '../contexts/AuthContext';

export function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4 flex-1">
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <NotificationDropdown />
        <ProfileDropdown user={user} />
      </div>
    </header>
  );
}