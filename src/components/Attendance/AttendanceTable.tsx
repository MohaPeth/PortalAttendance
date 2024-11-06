import React from 'react';
import { Clock, UserCheck, UserX } from 'lucide-react';

interface AttendanceTableProps {
  month: Date;
  department: string;
}

export function AttendanceTable({ month, department }: AttendanceTableProps) {
  const attendanceData = [
    {
      id: 1,
      employee: 'Sophie Martin',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      department: 'Technologie',
      present: 22,
      absent: 1,
      late: 2,
      avgArrival: '08:55',
      avgDeparture: '17:45'
    },
    {
      id: 2,
      employee: 'Lucas Bernard',
      imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      department: 'Management',
      present: 20,
      absent: 2,
      late: 3,
      avgArrival: '09:05',
      avgDeparture: '18:00'
    },
    {
      id: 3,
      employee: 'Emma Dubois',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      department: 'Design',
      present: 23,
      absent: 0,
      late: 2,
      avgArrival: '08:45',
      avgDeparture: '17:30'
    }
  ];

  const filteredData = department === 'Tous' 
    ? attendanceData 
    : attendanceData.filter(item => item.department === department);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Détails d'Assiduité</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employé
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Présences
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Absences
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Retards
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Horaires Moyens
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="h-10 w-10 rounded-full" src={item.imageUrl} alt="" />
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.employee}</div>
                      <div className="text-sm text-gray-500">{item.department}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <UserCheck className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm text-gray-900">{item.present} jours</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <UserX className="w-4 h-4 text-red-500 mr-2" />
                    <span className="text-sm text-gray-900">{item.absent} jours</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-900">{item.late} fois</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {item.avgArrival} - {item.avgDeparture}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}