import React from 'react';
import { Check } from 'lucide-react';

export default function Toast({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-900 text-white text-sm sm:text-base font-semibold rounded-2xl shadow-xl border border-slate-700">
        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <Check className="w-4 h-4" />
        </div>
        <span>{message}</span>
      </div>
    </div>
  );
}
