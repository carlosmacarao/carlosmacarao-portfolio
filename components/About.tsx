import React from 'react';
import { Terminal, BarChart2, Cpu, Globe, Download } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import fotoCarlos from './assets/img/Carlos.png';

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = translations[language].about;

  const skills = [
    { name: t.skills.frontend.name, icon: <Globe size={24} />, desc: t.skills.frontend.desc },
    { name: t.skills.backend.name, icon: <Terminal size={24} />, desc: t.skills.backend.desc },
    { name: t.skills.dataScience.name, icon: <BarChart2 size={24} />, desc: t.skills.dataScience.desc },
    { name: t.skills.ml.name, icon: <Cpu size={24} />, desc: t.skills.ml.desc },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            {/* Profile Photo */}
            <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-2xl">
                    <img
                      src={fotoCarlos}
                      alt="Carlos Macarão"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                     {/* Decorative ring */}
                     <div className="absolute inset-0 rounded-full border border-black/5 dark:border-white/10"></div>
                </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-2/3 text-center lg:text-left">
                <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">{t.header}</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                   {t.title}
                </p>
                <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto lg:mx-0">
                    {t.description}
                </p>
                
                <div className="mt-8 flex justify-center lg:justify-start">
                    <a 
                    href="#" 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-primary-600 hover:bg-primary-700 transition-all hover:shadow-primary-500/30 transform hover:-translate-y-1"
                    >
                    <Download className="mr-2 h-5 w-5" />
                    {t.downloadCv}
                    </a>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="relative group bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl hover:bg-primary-50 dark:hover:bg-slate-800/80 transition-colors duration-300 border border-slate-100 dark:border-slate-700 hover:border-primary-100 dark:hover:border-primary-900">
              <div className="absolute top-0 right-0 -mr-2 -mt-2 w-24 h-24 rounded-full bg-white dark:bg-slate-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-0 group-hover:scale-150"></div>
              
              <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-700 rounded-xl shadow-sm text-primary-600 dark:text-primary-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{skill.name}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;