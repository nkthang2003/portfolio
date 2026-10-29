import React from 'react';
import { ArrowUp, Mail, Heart, Building2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { content, personalInfo } = useLanguage();
  const { footer, nav } = content;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-3.5">
            <div className="flex items-center gap-3.5">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-10 h-10 rounded-full object-cover border border-slate-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = personalInfo.avatarJpg;
                }}
              />
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-base text-slate-400 max-w-md leading-relaxed">
              {footer.bio}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 pt-1">
              <Building2 className="w-4 h-4" />
              <span>{footer.affiliations}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3.5">
              {footer.navHeader}
            </h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><a href="#overview" className="hover:text-white transition-colors">{nav.overview}</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">{nav.experience}</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">{nav.projects}</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">{nav.skills}</a></li>
              <li><a href="#education" className="hover:text-white transition-colors">{nav.education}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{nav.contact}</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              {footer.connectHeader}
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-slate-500">
              {footer.statusNote}
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. {footer.copyright}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700/60 font-medium text-sm"
          >
            <span>{footer.backToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
