import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Wrench, 
  Sparkles, 
  Search, 
  Terminal 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { content, lang } = useLanguage();
  const { skills } = content;
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-600" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-600" />;
      default:
        return <Terminal className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredCategories = skills.categories.map(cat => {
    if (!searchQuery.trim()) return cat;
    const matchedSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.desc && s.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return { ...cat, skills: matchedSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-14 md:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3">
              <Code2 className="w-4 h-4" />
              <span>{skills.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {skills.title}
            </h2>
            <p className="mt-2 text-base text-slate-600 font-normal">
              {skills.subtitle}
            </p>
          </div>

          {/* Quick Search for Recruiters */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={skills.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-14 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-800"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
              >
                {skills.clearSearch}
              </button>
            )}
          </div>
        </div>

        {/* Compact & Scannable Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 rounded-2xl p-5 sm:p-6 enterprise-card-border enterprise-card-hover flex flex-col justify-start"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-2xs shrink-0">
                  {getCategoryIcon(cat.icon)}
                </div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-tight">
                  {cat.name}
                </h3>
              </div>

              {/* Compact Skill Badges/Pills placed directly under header */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const isAdvanced = skill.level === 'Advanced' || skill.level === 'Nâng cao';
                  return (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        isAdvanced
                          ? 'bg-white text-slate-900 border border-blue-200/90 shadow-2xs hover:border-blue-500'
                          : 'bg-white/80 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                      }`}
                      title={skill.desc || skill.name}
                    >
                      <span>{skill.name}</span>
                      {isAdvanced && (
                        <span 
                          className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" 
                          title={isAdvanced ? (lang === 'vi' ? 'Nâng cao' : 'Advanced') : ''}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Compact Legend */}
        <div className="mt-6 flex items-center justify-end gap-2 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-blue-600"></span>
          <span>{lang === 'vi' ? 'Dấu chấm xanh biểu thị năng lực chuyên sâu (Advanced / Primary)' : 'Blue dot indicates Advanced / Primary competency'}</span>
        </div>

      </div>
    </section>
  );
}
