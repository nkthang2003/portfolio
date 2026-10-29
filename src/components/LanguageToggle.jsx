import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/80 text-sm font-semibold ${className}`}>
      <div className="flex items-center gap-1 pl-1.5 pr-1.5 text-slate-400">
        <Globe className="w-4 h-4" />
      </div>

      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 rounded-lg transition-all text-xs sm:text-sm font-bold ${
          lang === 'en'
            ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="Switch to English"
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang('vi')}
        className={`px-2.5 py-1 rounded-lg transition-all text-xs sm:text-sm font-bold ${
          lang === 'vi'
            ? 'bg-white text-blue-600 shadow-xs border border-slate-200/60'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="Chuyển sang Tiếng Việt"
      >
        VI
      </button>
    </div>
  );
}
