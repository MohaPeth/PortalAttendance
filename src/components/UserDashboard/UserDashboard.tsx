import React from 'react';
import { Clock, Calendar, CheckCircle2, AlertCircle, LogOut } from 'lucide-react';
import { UserStats } from './UserStats';
import { UserAttendanceCalendar } from './UserAttendanceCalendar';
import { UserTimelineCard } from './UserTimelineCard';
import { useAuth } from '../../contexts/AuthContext';

export function UserDashboard() {
  const { logout, user } = useAuth();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Mon Tableau de Bord</h1>
          <span className="text-gray-500">Bienvenue, {user?.name}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-500" />
            <span className="text-lg font-medium text-gray-600">
              {new Date().toLocaleTimeString('fr-FR', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Se déconnecter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <h3 className="text-lg font-medium">Statut Aujourd'hui</h3>
                </div>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                  Présent
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Arrivée</span>
                  <span className="font-medium">08:45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Temps de Travail</span>
                  <span className="font-medium">7h15</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-100">Pause Déjeuner</span>
                  <span className="font-medium">1h00</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  <h3 className="text-lg font-medium text-gray-900">Ce Mois</h3>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Jours Travaillés</span>
                  <span className="text-2xl font-bold text-gray-900">15/20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Présences</div>
                    <div className="text-lg font-semibold text-green-600">15</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Retards</div>
                    <div className="text-lg font-semibold text-yellow-600">2</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Absences</div>
                    <div className="text-lg font-semibold text-red-600">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <UserAttendanceCalendar />
          <UserTimelineCard />
        </div>

        <div>
          <UserStats />
        </div>
      </div>
    </div>
  );
}