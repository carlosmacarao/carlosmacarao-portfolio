import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;

  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Carlos Macarão. {t.rights}
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{t.privacy}</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{t.terms}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;