import React from 'react';
import { Clock } from 'lucide-react';

interface AttendanceCalendarProps {
  month: Date;
}

export function AttendanceCalendar({ month }: AttendanceCalendarProps) {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(month);
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  const getAttendanceStatus = (day: number) => {
    // Simuler des données d'assiduité
    const random = Math.random();
    if (random > 0.9) return 'absent';
    if (random > 0.8) return 'late';
    return 'present';
  };

  return (
    <div className="grid grid-cols-7 gap-1">
      {days.map(day => (
        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
          {day}
        </div>
      ))}
      {Array.from({ length: firstDay }).map((_, index) => (
        <div key={`empty-${index}`} className="aspect-square" />
      ))}
      {Array.from({ length: daysInMonth }).map((_, index) => {
        const day = index + 1;
        const status = getAttendanceStatus(day);
        return (
          <div
            key={day}
            className={`aspect-square p-1 border rounded-lg ${
              status === 'present' ? 'bg-green-50 border-green-200' :
              status === 'late' ? 'bg-yellow-50 border-yellow-200' :
              status === 'absent' ? 'bg-red-50 border-red-200' :
              'border-gray-200'
            }`}
          >
            <div className="h-full flex flex-col items-center justify-center">
              <span className="text-sm font-medium">{day}</span>
              {status === 'late' && <Clock className="w-3 h-3 text-yellow-500 mt-1" />}
            </div>
          </div>
        );
      })}
    </div>
  );
}