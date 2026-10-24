import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-400 shrink-0" />
  };

  const borderColors = {
    success: 'border-emerald-500/40 bg-emerald-950/80',
    error: 'border-rose-500/40 bg-rose-950/80',
    info: 'border-indigo-500/40 bg-slate-900/90'
  };

  return (
    <div 
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl transition-all duration-300 max-w-md ${borderColors[type] || borderColors.info}`}
    >
      {icons[type] || icons.info}
      <p className="text-sm text-slate-200 font-medium">{message}</p>
      <button 
        onClick={onClose}
        aria-label="Close notification"
        className="text-slate-400 hover:text-white transition-colors ml-auto p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
