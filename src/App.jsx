import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function PortfolioContent() {
  const { content } = useLanguage();
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    showToast(`${content.toasts.copiedEmail} ${email}`);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = (phone) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    showToast(`${content.toasts.copiedPhone} ${phone}`);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased">
      {/* Sticky Top Navbar with Language Switcher */}
      <Navbar 
        onCopyEmail={handleCopyEmail}
        copiedEmail={copiedEmail}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero 
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
          onCopyPhone={handleCopyPhone}
          copiedPhone={copiedPhone}
        />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact 
          onCopyEmail={handleCopyEmail}
          copiedEmail={copiedEmail}
          onCopyPhone={handleCopyPhone}
          copiedPhone={copiedPhone}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Toast Feedback */}
      <Toast 
        message={toastMessage}
        visible={toastVisible}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
