import React from 'react';
import { UserCheck, UserX, Clock, Users } from 'lucide-react';
import { StatCard } from './Dashboard/StatCard';
import { ActivityTable } from './Dashboard/ActivityTable';

const stats = [
  { id: 1, icon: UserCheck, label: 'Présents', value: '45', color: 'bg-green-100 text-green-600' },
  { id: 2, icon: UserX, label: 'Absents', value: '3', color: 'bg-red-100 text-red-600' },
  { id: 3, icon: Clock, label: 'Retards', value: '7', color: 'bg-yellow-100 text-yellow-600' },
  { id: 4, icon: Users, label: 'Total', value: '48', color: 'bg-blue-100 text-blue-600' },
];

const recentActivity = [
  { employee: 'Sophie Martin', action: 'Arrivée', time: '08:55', status: 'on-time' },
  { employee: 'Lucas Bernard', action: 'Arrivée', time: '09:10', status: 'late' },
  { employee: 'Emma Dubois', action: 'Absent', time: '--:--', status: 'absent' },
  { employee: 'Thomas Petit', action: 'Arrivée', time: '08:45', status: 'on-time' },
];

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      <ActivityTable activities={recentActivity} />
    </div>
  );
}