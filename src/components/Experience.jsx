import React from 'react';
import { Briefcase, Calendar, MapPin, Building, CheckCircle2, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { content } = useLanguage();
  const { experience } = content;

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3.5">
            <Briefcase className="w-4 h-4" />
            <span>{experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {experience.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experience.items.map((item, index) => (
            <div key={index} className="relative group">
              
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-2 w-4.5 h-4.5 rounded-full bg-white border-4 border-blue-600 shadow-sm group-hover:scale-125 transition-transform"></div>

              {/* Card Container */}
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-9 enterprise-card-border enterprise-card-hover">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200/80">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-blue-100/70 text-blue-800 border border-blue-200">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-base text-slate-600 mt-1.5 flex-wrap">
                      <span className="font-semibold text-slate-800 flex items-center gap-1.5">
                        <Building className="w-4.5 h-4.5 text-slate-500" />
                        {item.company}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs self-start sm:self-auto">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                    {experience.deliverablesHeader}
                  </h4>
                  <ul className="space-y-2.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills utilized */}
                <div className="mt-7 pt-5 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 mr-1 flex items-center gap-1">
                    <Layers className="w-4 h-4 text-slate-400" /> {experience.stackLabel}
                  </span>
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200/90 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
