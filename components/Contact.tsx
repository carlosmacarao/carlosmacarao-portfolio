import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = translations[language].contact;

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">{t.title}</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              {t.subtitle}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Mail size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">{t.emailLabel}</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">hello@carlosmacarao.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <MapPin size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">{t.locationLabel}</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">San Francisco, CA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Phone size={24} />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white">{t.phoneLabel}</h4>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm transition-colors duration-300">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t.formName}</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t.formEmail}</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">{t.formMessage}</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm border transition-colors"
                  placeholder={t.formMessage}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                {t.formButton} <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;