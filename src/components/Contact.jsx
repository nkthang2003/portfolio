import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  FileText,
  Clock,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { useLanguage } from '../context/LanguageContext';

export default function Contact({ onCopyEmail, copiedEmail, onCopyPhone, copiedPhone }) {
  const { content, personalInfo } = useLanguage();
  const { contact } = content;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [sentStatus, setSentStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      formData.subject || `Opportunity Inquiry from ${formData.name || 'Recruiter'}`
    );
    const body = encodeURIComponent(
      `Hi Thang,\n\nMy name is ${formData.name} from ${formData.company || 'our team'}.\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSentStatus(true);
    setTimeout(() => setSentStatus(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3.5">
            <Mail className="w-4 h-4" />
            <span>{contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            {contact.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Email Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-400 block uppercase">
                      {contact.emailCardHeader}
                    </span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-mono text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onCopyEmail(personalInfo.email)}
                  className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4.5 h-4.5 text-emerald-600" /> : <Copy className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-400 block uppercase">
                      {contact.phoneCardHeader}
                    </span>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="font-mono text-base sm:text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors block mt-0.5"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onCopyPhone(personalInfo.phone)}
                  className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-white rounded-lg transition-all"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4.5 h-4.5 text-emerald-600" /> : <Copy className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400 block uppercase">
                    {contact.locationCardHeader}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900 block mt-0.5">
                    {personalInfo.location}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 block mt-1">
                    {contact.mobilityNote}
                  </span>
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-3.5 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 sm:p-4.5 rounded-xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 hover:border-blue-200 group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-5 h-5 text-blue-700" />
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-blue-700">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 sm:p-4.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-5 h-5 text-slate-900" />
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-slate-900">
                    GitHub
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-9 enterprise-card-border">
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {contact.formTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {contact.formSubtitle}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-blue-100/60 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {contact.emailFieldLabel}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={contact.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {contact.companyLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={contact.companyPlaceholder}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {contact.subjectLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={contact.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm sm:text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {contact.messageLabel}
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder={contact.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm sm:text-base bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                    <Clock className="w-4 h-4" />
                    <span>{contact.responseTime}</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs transition-all active:scale-98"
                  >
                    <span>{contact.sendBtn}</span>
                    <Send className="w-4.5 h-4.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
