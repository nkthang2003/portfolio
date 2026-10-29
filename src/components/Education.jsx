import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { content, personalInfo } = useLanguage();
  const { education } = content;

  return (
    <section id="education" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3.5">
            <GraduationCap className="w-4 h-4" />
            <span>{education.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {education.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {education.subtitle}
          </p>
        </div>

        {/* Education Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-11 enterprise-card-border enterprise-card-hover group">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 border-b border-slate-100">
            <div className="flex items-start gap-5">
              
              {/* University Logo Card */}
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center p-3 shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all">
                <img 
                  src={personalInfo.uitLogo} 
                  alt={education.institution} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/Logo_UIT_Web_Transparent_84610444f3.png';
                  }}
                />
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {education.institution}
                  </h3>
                  <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {education.activeProgram}
                  </span>
                </div>
                <p className="text-lg sm:text-xl font-bold text-blue-600 mt-1">
                  {education.degree}
                </p>
                <div className="flex items-center gap-4 text-sm sm:text-base text-slate-500 mt-1.5 flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    {education.location}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:text-right shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700">
                <Award className="w-4.5 h-4.5 text-amber-500" />
                <span>{education.majorBadge}</span>
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-7">
              <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
                {education.profileHeader}
              </h4>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                {education.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>{education.courseworkHeader}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {education.coursework.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
