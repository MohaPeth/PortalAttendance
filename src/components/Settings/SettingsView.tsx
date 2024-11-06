import React from 'react';
import { AdminManagement } from './AdminManagement';
import { SecuritySettings } from './SecuritySettings';
import { GeneralSettings } from './GeneralSettings';
import { NotificationSettings } from './NotificationSettings';

export function SettingsView() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Paramètres</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AdminManagement />
          <SecuritySettings />
        </div>
        <div className="space-y-6">
          <GeneralSettings />
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
}