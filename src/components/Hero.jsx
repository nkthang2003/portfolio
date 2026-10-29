import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Download, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Building2, 
  FileText 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onCopyEmail, copiedEmail, onCopyPhone, copiedPhone }) {
  const { content, personalInfo } = useLanguage();
  const [showPortraitModal, setShowPortraitModal] = useState(false);

  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 enterprise-grid-pattern opacity-60 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-indigo-50/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-xs mb-7">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide uppercase">
            {content.hero.statusBadge}
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            {content.hero.location}
          </span>
        </div>

        {/* Main Header Container with Avatar & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left / Center: Headline and Description */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              {content.hero.headlineStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                {content.hero.headlineAccent}
              </span>{' '}
              {content.hero.headlineEnd}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl font-normal">
              {content.hero.summary}
            </p>

            <p className="max-w-3xl border-l-4 border-blue-500 pl-4 text-base font-semibold leading-relaxed text-blue-800">
              {content.hero.slogan}
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm hover:shadow transition-all active:scale-98"
              >
                <span>{content.hero.viewProjectsBtn}</span>
                <ArrowRight className="w-4.5 h-4.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200/90 shadow-2xs transition-all active:scale-98"
              >
                <Mail className="w-4.5 h-4.5 text-slate-500" />
                <span>{content.hero.contactBtn}</span>
              </a>

              <a
                href={personalInfo.cvPdf}
                download="CV_Nguyen_Khac_Thang.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all active:scale-98"
                title="Download CV (PDF)"
              >
                <Download className="w-4.5 h-4.5 text-blue-600" />
                <span>{content.hero.downloadCvBtn}</span>
              </a>
            </div>

            {/* Quick Recruiter Data Strip */}
            <div className="pt-5 flex flex-wrap items-center gap-y-2.5 gap-x-7 text-xs sm:text-sm text-slate-500 border-t border-slate-200/70">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">{content.hero.emailLabel}</span>
                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="hover:text-blue-600 font-mono text-slate-800 flex items-center gap-1.5 group font-medium"
                >
                  {personalInfo.email}
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">{content.hero.phoneLabel}</span>
                <button
                  onClick={() => onCopyPhone(personalInfo.phone)}
                  className="hover:text-blue-600 font-mono text-slate-800 flex items-center gap-1.5 group font-medium"
                >
                  {personalInfo.phoneFormatted}
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">{content.hero.linkedinLabel}</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 text-slate-800 font-medium flex items-center gap-1"
                >
                  nguyen-khac-thang
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-700">{content.hero.githubLabel}</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 text-slate-800 font-medium flex items-center gap-1"
                >
                  nkthang2003
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Small, Refined Corporate Avatar & Credentials Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-2xl p-6 sm:p-7 enterprise-card-border shadow-xs relative">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Small tasteful avatar */}
                <div 
                  className="relative group cursor-pointer shrink-0"
                  onClick={() => setShowPortraitModal(true)}
                  title="Click to view full photo"
                >
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-blue-500/20 shadow-sm group-hover:ring-blue-500 transition-all"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = personalInfo.avatarJpg;
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-xs text-white font-medium bg-black/60 px-2 py-0.5 rounded">
                      {content.hero.expandPhoto}
                    </span>
                  </div>
                </div>

                {/* Profile Brief */}
                <div className="space-y-1">
                  <h2 className="font-bold text-slate-900 text-lg sm:text-xl leading-tight">
                    {personalInfo.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-blue-600">
                    {content.hero.profileTitle}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 pt-0.5">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>{content.hero.companySub}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{content.hero.schoolSub}</span>
                  </div>
                </div>
              </div>

              {/* Verified Competencies */}
              <div className="mt-6 pt-5 border-t border-slate-100 space-y-2.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {content.hero.coreFocusHeader}
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.hero.focusTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 rounded-md text-xs sm:text-sm font-medium ${
                        idx === 1 
                          ? 'bg-blue-50 text-blue-700 border border-blue-100'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big-Corp Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {content.metrics.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 enterprise-card-border enterprise-card-hover text-left relative overflow-hidden group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {item.value}
              </div>
              <div className="font-bold text-slate-800 text-base sm:text-lg mt-1.5">
                {item.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed font-normal">
                {item.description}
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -z-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Portrait Modal */}
      {showPortraitModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4"
          onClick={() => setShowPortraitModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-5 max-w-sm w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm sm:text-base font-semibold text-slate-800">
                {personalInfo.name} — {content.hero.modalTitle}
              </h3>
              <button 
                onClick={() => setShowPortraitModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm px-2.5 py-1 rounded bg-slate-100"
              >
                ✕
              </button>
            </div>
            <div className="mt-3 overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
              <img
                src={personalInfo.avatarPortrait}
                alt={personalInfo.name}
                className="w-full max-h-[70vh] object-cover object-center rounded-xl"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = personalInfo.avatarJpg;
                }}
              />
            </div>
            <div className="mt-3 text-center text-sm text-slate-500">
              {content.hero.profileTitle} • {content.hero.companySub}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
