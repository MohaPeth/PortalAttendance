import React from 'react';

interface Activity {
  employee: string;
  action: string;
  time: string;
  status: 'on-time' | 'late' | 'absent';
}

interface ActivityTableProps {
  activities: Activity[];
}

export function ActivityTable({ activities }: ActivityTableProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">Activité Récente</h2>
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-3">Employé</th>
                <th className="pb-3">Action</th>
                <th className="pb-3">Heure</th>
                <th className="pb-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-3">
                    <div className="flex items-center">
                      <img
                        src={`https://images.unsplash.com/photo-${1500 + index}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                        alt={activity.employee}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      {activity.employee}
                    </div>
                  </td>
                  <td className="py-3">{activity.action}</td>
                  <td className="py-3">{activity.time}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        activity.status === 'on-time'
                          ? 'bg-green-100 text-green-700'
                          : activity.status === 'late'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {activity.status === 'on-time'
                        ? 'À l\'heure'
                        : activity.status === 'late'
                        ? 'En retard'
                        : 'Absent'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}