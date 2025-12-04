import React from 'react';
import { Briefcase } from 'lucide-react';
import { ExperienceItem, Language } from '../types';
import { translations } from '../translations';

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: {
        en: 'Senior Software Engineer',
        pt: 'Engenheiro de Software Sênior'
    },
    company: 'TechCorp Solutions',
    period: {
        en: '2021 - Present',
        pt: '2021 - Presente'
    },
    description: {
        en: 'Leading a team of 5 developers in re-architecting the legacy platform to a microservices architecture. Improved system throughput by 40% and reduced latency by 25%.',
        pt: 'Liderando uma equipe de 5 desenvolvedores na reestruturação da plataforma legada para uma arquitetura de microsserviços. Melhorou o rendimento do sistema em 40% e reduziu a latência em 25%.'
    },
    skills: ['React', 'Node.js', 'AWS', 'Docker']
  },
  {
    id: 2,
    role: {
        en: 'Data Scientist',
        pt: 'Cientista de Dados'
    },
    company: 'DataFlow Analytics',
    period: {
        en: '2018 - 2021',
        pt: '2018 - 2021'
    },
    description: {
        en: 'Developed predictive models for customer churn utilizing Random Forest and Gradient Boosting. Integrated models into the production React dashboard for real-time insights.',
        pt: 'Desenvolveu modelos preditivos para rotatividade de clientes utilizando Random Forest e Gradient Boosting. Integrou modelos no painel React de produção para insights em tempo real.'
    },
    skills: ['Python', 'Scikit-Learn', 'SQL', 'Tableau']
  }
];

interface ExperienceProps {
  language: Language;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">{t.header}</h2>
           <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{t.title}</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block"></div>

          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <div key={job.id} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full md:w-1/2">
                   <div className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 relative ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      {/* Arrow for desktop */}
                      <div className={`hidden md:block absolute top-1/2 -mt-2 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 transform rotate-45 ${index % 2 === 0 ? '-right-2 border-l-0 border-b' : '-left-2 border-t-0 border-r'} shadow-sm`}></div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white">{job.role[language]}</h4>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">{job.period[language]}</span>
                      </div>
                      <h5 className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-3">{job.company}</h5>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                        {job.description[language]}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md border border-slate-200 dark:border-slate-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Icon Marker */}
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 border-4 border-white dark:border-slate-800 shadow-md flex items-center justify-center">
                   <Briefcase size={16} className="text-white" />
                </div>

                {/* Spacer Side */}
                <div className="w-full md:w-1/2 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;