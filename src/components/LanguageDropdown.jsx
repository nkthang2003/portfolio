import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { VietnamFlag, UkFlag } from './Flags';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageDropdown({ className = "" }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    {
      code: 'en',
      label: 'English',
      short: 'EN',
      flag: <UkFlag className="w-5 h-3.5" />
    },
    {
      code: 'vi',
      label: 'Tiếng Việt',
      short: 'VI',
      flag: <VietnamFlag className="w-5 h-3.5" />
    }
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-2xs hover:border-slate-300 transition-all focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-1.5">
          {currentLang.flag}
          <span className="font-bold tracking-wide">{currentLang.short}</span>
        </span>
        <ChevronDown 
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-44 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
            {lang === 'vi' ? 'Chọn ngôn ngữ' : 'Select language'}
          </div>

          {languages.map((item) => {
            const isSelected = item.code === lang;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors ${
                  isSelected 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.flag}
                  <span>{item.label}</span>
                </div>
                {isSelected && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

