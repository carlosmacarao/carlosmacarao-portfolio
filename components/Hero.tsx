import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroProps {
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          <div className="mb-12 lg:mb-0">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-semibold text-sm tracking-wide uppercase">
              {t.availability}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              {t.titleStart} <span className="text-primary-600 dark:text-primary-400">{t.titleHighlight1}</span> & <br/>
              {t.titleMiddle} <span className="text-primary-600 dark:text-primary-400">{t.titleHighlight2}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30">
                {t.viewProjects} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                {t.contactMe}
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-slate-400 dark:text-slate-500">
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Github size={24} /></a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            {/* Abstract visual representation of code/data */}
            <div className="relative rounded-2xl bg-white dark:bg-slate-900 shadow-2xl p-6 border border-slate-100 dark:border-slate-800 transition-colors duration-300">
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-3 font-mono text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex"><span className="text-primary-600 dark:text-primary-400">{t.codeCard.class}</span> <span className="text-yellow-600 dark:text-yellow-400">DataEngineer</span>:</div>
                  <div className="pl-4"><span className="text-primary-600 dark:text-primary-400">{t.codeCard.def}</span> <span className="text-blue-600 dark:text-blue-400">__init__</span>(self):</div>
                  <div className="pl-8">self.name = <span className="text-green-600 dark:text-green-400">'Carlos Macarão'</span></div>
                  <div className="pl-8">self.skills = [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Python'</span>, <span className="text-green-600 dark:text-green-400">'AI'</span>]</div>
                  <br/>
                  <div className="pl-4"><span className="text-primary-600 dark:text-primary-400">{t.codeCard.def}</span> <span className="text-blue-600 dark:text-blue-400">solve_problem</span>(self, data):</div>
                  <div className="pl-8"><span className="text-purple-600 dark:text-purple-400">{t.codeCard.return}</span> Model.predict(data)</div>
               </div>
               
               {/* Decorative elements */}
               <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 dark:bg-primary-900/40 rounded-full opacity-50 blur-xl animate-pulse"></div>
               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-100 dark:bg-blue-900/40 rounded-full opacity-50 blur-xl animate-pulse delay-700"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;