import React from 'react';
import { Building, BarChart3, Users, Calendar, Settings } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: BarChart3, label: 'Tableau de bord' },
  { id: 'employees', icon: Users, label: 'Employés' },
  { id: 'attendance', icon: Calendar, label: 'Assiduité' },
  { id: 'settings', icon: Settings, label: 'Paramètres' },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-indigo-900 text-white h-screen fixed left-0 top-0">
      <div className="p-4 flex items-center space-x-2">
        <Building className="w-8 h-8" />
        <span className="text-xl font-bold">AdminPortal</span>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center space-x-3 px-6 py-3 hover:bg-indigo-800 transition-colors ${
              activeTab === item.id ? 'bg-indigo-800' : ''
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}