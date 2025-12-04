import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EducationItem, Language } from '../types';
import { translations } from '../translations';

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: {
        en: 'Computer Engineering',
        pt: 'Engenharia Informática'
    },
    institution: 'Universidade Zambeze',
    year: '2021 - 2025',
    description: {
        en: 'Specialized in Artificial Intelligence and Human-Computer Interaction.',
        pt: 'Especialização em Inteligência Artificial e Interação Humano-Computador.'
    }
  },
  {
    id: 2,
    degree: {
        en: 'Data Science',
        pt: 'Ciência de Dados'
    },
    institution: 'ALX Africa',
    year: '2025 - 2025',
    description: {
        en: 'Minor in Statistics. Graduated Magna Cum Laude.',
        pt: 'Menor em Estatística. Graduado com distinção Magna Cum Laude.'
    }
  }
];

interface EducationProps {
  language: Language;
}

const Education: React.FC<EducationProps> = ({ language }) => {
  const t = translations[language].education;

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/3">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">{t.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t.subtitle}
            </p>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <h4 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">{t.lifelongTitle}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {t.lifelongDesc}
              </p>
            </div>
          </div>

          <div className="md:w-2/3 space-y-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="relative flex pl-8 md:pl-0 group">
                {/* Timeline Line (Mobile) */}
                <div className="md:hidden absolute left-2 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                
                <div className="flex flex-col md:flex-row gap-6 w-full bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 transition-all hover:shadow-md hover:dark:border-slate-700">
                   <div className="hidden md:flex flex-col items-center justify-center min-w-[80px] text-center">
                      <div className="bg-blue-50 dark:bg-blue-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-full mb-2">
                        <GraduationCap size={24} />
                      </div>
                   </div>
                   
                   <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                        <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-full w-fit mt-2 sm:mt-0">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.degree[language]}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{edu.description[language]}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;