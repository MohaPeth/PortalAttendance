import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface TimelineEvent {
  id: number;
  type: 'arrival' | 'departure' | 'break_start' | 'break_end';
  time: string;
  date: string;
}

const timelineEvents: TimelineEvent[] = [
  { id: 1, type: 'arrival', time: '08:45', date: '2024-02-20' },
  { id: 2, type: 'break_start', time: '12:00', date: '2024-02-20' },
  { id: 3, type: 'break_end', time: '13:00', date: '2024-02-20' },
  { id: 4, type: 'departure', time: '17:30', date: '2024-02-20' },
];

export function UserTimelineCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
        <Clock className="w-5 h-5 text-indigo-500" />
        Activité du Jour
      </h3>

      <div className="relative">
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
        <div className="space-y-6">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="relative flex items-center">
              <div className={`absolute left-0 w-4 h-4 rounded-full border-2 ${
                event.type === 'arrival' ? 'bg-green-100 border-green-500' :
                event.type === 'departure' ? 'bg-indigo-100 border-indigo-500' :
                'bg-gray-100 border-gray-500'
              }`}></div>
              <div className="ml-8">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">{event.time}</span>
                  <span className="text-sm text-gray-500">
                    {event.type === 'arrival' && 'Arrivée'}
                    {event.type === 'departure' && 'Départ'}
                    {event.type === 'break_start' && 'Début Pause'}
                    {event.type === 'break_end' && 'Fin Pause'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}