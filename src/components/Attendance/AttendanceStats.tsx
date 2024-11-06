import React from 'react';
import { PieChart, BarChart2, TrendingUp, Clock } from 'lucide-react';

interface AttendanceStatsProps {
  month: Date;
  department: string;
}

export function AttendanceStats({ month, department }: AttendanceStatsProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-indigo-500" />
          Statistiques du Mois
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Taux de présence</span>
            <span className="text-lg font-medium text-green-600">94%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '94%' }}></div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">45</div>
              <div className="text-sm text-gray-500">Présents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">3</div>
              <div className="text-sm text-gray-500">Absents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">7</div>
              <div className="text-sm text-gray-500">Retards</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          Heures Moyennes
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Arrivée</span>
            <span className="text-lg font-medium">08:45</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Départ</span>
            <span className="text-lg font-medium">17:30</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Heures Travaillées</span>
            <span className="text-lg font-medium text-indigo-600">8h45</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          Tendances
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-500">Présence</span>
            </div>
            <span className="text-sm font-medium text-green-600">+2.5%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-gray-500">Retards</span>
            </div>
            <span className="text-sm font-medium text-yellow-600">-1.2%</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-500">Absences</span>
            </div>
            <span className="text-sm font-medium text-red-600">-0.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}