import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  Code, 
  GraduationCap, 
  FolderGit2, 
  Mail, 
  Copy, 
  Check, 
  Menu, 
  X,
  ArrowUpRight,
  Download
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import LanguageDropdown from './LanguageDropdown';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onCopyEmail, copiedEmail }) {
  const { content, personalInfo } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.overview, href: '#overview' },
    { label: content.nav.experience, href: '#experience' },
    { label: content.nav.projects, href: '#projects' },
    { label: content.nav.skills, href: '#skills' },
    { label: content.nav.education, href: '#education' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3' 
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand & Name Only */}
          <a 
            href="#overview" 
            className="flex items-center gap-3 group text-left shrink-0"
          >
            <div className="relative shrink-0">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white shadow-sm ring-1 ring-slate-200/80 group-hover:ring-blue-500 transition-all"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = personalInfo.avatarJpg;
                }}
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg lg:text-xl group-hover:text-blue-600 transition-colors whitespace-nowrap">
              {personalInfo.name}
            </span>
          </a>

          {/* Desktop Navigation Links (with whitespace-nowrap to fix wrapping bug) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 xl:px-3 py-1.5 text-sm xl:text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100/70 rounded-lg transition-all whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions & Language Dropdown */}
          <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
            {/* Language Dropdown with UK/VN flags */}
            <LanguageDropdown />

            {/* Copy Email Button */}
            <button
              onClick={() => onCopyEmail(personalInfo.email)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 rounded-xl border border-slate-200 transition-all active:scale-95 whitespace-nowrap"
              title="Copy email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="text-emerald-700">{content.nav.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>{content.nav.copyEmail}</span>
                </>
              )}
            </button>

            {/* Social Icons */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl border border-slate-200 transition-all shrink-0"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl border border-slate-200 transition-all shrink-0"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Get In Touch CTA */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0"
            >
              <span>{content.nav.getInTouch}</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Right Bar: Language Dropdown + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageDropdown />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-xl border border-slate-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-lg whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <a
              href={personalInfo.cvPdf}
              download="CV_Nguyen_Khac_Thang.pdf"
              className="flex-1 text-center py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4 text-blue-600" />
              <span>{content.hero.downloadCvBtn}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2 text-sm font-semibold text-white bg-blue-600 rounded-xl"
            >
              {content.nav.getInTouch}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
