import React from 'react';
import { TrendingUp, Clock, Calendar, AlertCircle } from 'lucide-react';

export function UserStats() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          Mes Statistiques
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Taux de Présence</span>
            <span className="text-lg font-semibold text-green-600">92%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-500" />
          Horaires Moyens
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Arrivée</span>
            <span className="font-medium">08:45</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Départ</span>
            <span className="font-medium">17:30</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Temps Moyen</span>
            <span className="font-medium text-indigo-600">8h45</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-indigo-500" />
          Alertes
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-yellow-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">2 retards ce mois-ci</span>
          </div>
          <div className="flex items-center gap-2 text-red-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">3 absences à justifier</span>
          </div>
        </div>
      </div>
    </div>
  );
}