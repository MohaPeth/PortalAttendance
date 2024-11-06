import React from 'react';
import { Settings, Globe2 } from 'lucide-react';

export function GeneralSettings() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <Settings className="w-5 h-5 text-indigo-500" />
          Paramètres Généraux
        </h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fuseau Horaire
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option>Europe/Paris</option>
              <option>Europe/London</option>
              <option>America/New_York</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Format de Date
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Langue
            </label>
            <div className="mt-1 flex items-center">
              <Globe2 className="w-5 h-5 text-gray-400 mr-2" />
              <select className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option>Français</option>
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}