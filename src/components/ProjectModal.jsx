import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Factory, 
  GraduationCap, 
  Users, 
  Cpu, 
  QrCode, 
  Calendar,
  Building,
  ShieldCheck,
  Workflow
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { content } = useLanguage();
  const { modal } = content;

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200/90 relative text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-200/80 flex items-center justify-between z-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-0.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {project.category}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">{project.period}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1.5">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200/70 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block font-medium">{modal.roleLabel}</span>
              <span className="font-semibold text-slate-800 text-sm sm:text-base mt-0.5 block">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">{modal.clientLabel}</span>
              <span className="font-semibold text-slate-800 text-sm sm:text-base mt-0.5 block">{project.client}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block font-medium">{modal.companyLabel}</span>
              <span className="font-semibold text-slate-800 text-sm sm:text-base mt-0.5 block">{project.company}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              {modal.overviewHeader}
            </h4>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {project.overview}
            </p>
          </div>

          {/* Core System Architecture Highlights */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Workflow className="w-4.5 h-4.5 text-blue-600" />
              <span>{modal.highlightsHeader}</span>
            </h4>
            <div className="grid grid-cols-1 gap-3.5">
              {project.highlights.map((h, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h5 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2.5">
                    <span className="w-5.5 h-5.5 rounded-md bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    {h.title}
                  </h5>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed pl-8">
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tangible Business & Engineering Impact */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600" />
              <span>{modal.impactHeader}</span>
            </h4>
            <ul className="space-y-2.5">
              {project.impact.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-5 border-t border-slate-200">
            <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-400" />
              <span>{modal.techStackHeader}</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 px-6 sm:px-8 py-4.5 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs sm:text-sm text-slate-500 font-medium">
            {modal.verifiedDelivery}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl"
          >
            {modal.closeBtn}
          </button>
        </div>

      </div>
    </div>
  );
}
