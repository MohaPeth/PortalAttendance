import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { EmployeeList } from './Employees/EmployeeList';
import { Dashboard } from './Dashboard';
import { AttendanceView } from './Attendance/AttendanceView';
import { SettingsView } from './Settings/SettingsView';

export function AdminDashboard() {
  const [activeTab, setActiveTab] = React.useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="ml-64">
        <Header />
        <main>
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'employees' && <EmployeeList />}
          {activeTab === 'attendance' && <AttendanceView />}
          {activeTab === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}