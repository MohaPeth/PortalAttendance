import React from 'react';
import { KeyRound, Shield, UserX } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
          <KeyRound className="w-5 h-5 text-indigo-500" />
          Sécurité et Accès
        </h2>
      </div>

      <div className="p-6 space-y-6">
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Réinitialisation des Mots de Passe</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <input
                  type="email"
                  className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Email de l'utilisateur"
                />
              </div>
              <button className="btn btn-primary">
                Réinitialiser
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Un email de réinitialisation sera envoyé à l'utilisateur
            </p>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Révocation d'Accès</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <select className="block w-full border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="">Sélectionner un utilisateur</option>
                  <option value="1">Sophie Martin</option>
                  <option value="2">Lucas Bernard</option>
                  <option value="3">Emma Dubois</option>
                </select>
              </div>
              <button className="btn btn-secondary flex items-center gap-2">
                <UserX className="w-4 h-4" />
                Révoquer
              </button>
            </div>
            <p className="text-sm text-gray-500">
              L'utilisateur perdra immédiatement l'accès à l'application
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-4">Politique de Sécurité</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-900">Double Authentification</div>
                <div className="text-sm text-gray-500">Exiger la 2FA pour tous les administrateurs</div>
              </div>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}