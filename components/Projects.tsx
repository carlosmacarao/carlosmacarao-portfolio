import React, { useState } from 'react';
import { ExternalLink, Github, Database, Code } from 'lucide-react';
import { Project, Language } from '../types';
import { translations } from '../translations';

const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Sales Forecaster',
    description: {
        en: 'A comprehensive time-series forecasting tool built with Python and Pandas. Uses ARIMA models to predict future sales trends based on historical data.',
        pt: 'Uma ferramenta abrangente de previsão de séries temporais construída com Python e Pandas. Usa modelos ARIMA para prever tendências de vendas futuras com base em dados históricos.'
    },
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'Streamlit'],
    category: 'Data Science',
    imageUrl: 'https://picsum.photos/800/600',
    github: '#'
  },
  {
    id: 2,
    title: 'Modern E-commerce App',
    description: {
        en: 'A full-featured shopping platform with cart functionality, user authentication, and Stripe payment integration.',
        pt: 'Uma plataforma de compras completa com funcionalidade de carrinho, autenticação de usuário e integração de pagamento Stripe.'
    },
    tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
    category: 'Software',
    imageUrl: 'https://picsum.photos/800/601',
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Customer Segmentation Engine',
    description: {
        en: 'Clustering algorithm implementation to segment customer bases for targeted marketing campaigns.',
        pt: 'Implementação de algoritmo de clustering para segmentar bases de clientes para campanhas de marketing direcionadas.'
    },
    tags: ['Python', 'K-Means', 'Matplotlib', 'SQL'],
    category: 'Data Science',
    imageUrl: 'https://picsum.photos/800/602',
    github: '#'
  },
  {
    id: 4,
    title: 'Task Management Dashboard',
    description: {
        en: 'Real-time collaborative task board featuring drag-and-drop interfaces and team chat.',
        pt: 'Quadro de tarefas colaborativo em tempo real com interfaces de arrastar e soltar e bate-papo da equipe.'
    },
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    category: 'Software',
    imageUrl: 'https://picsum.photos/800/603',
    link: '#',
    github: '#'
  }
];

interface ProjectsProps {
  language: Language;
}

const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const [filter, setFilter] = useState<'All' | 'Software' | 'Data Science'>('All');
  const t = translations[language].projects;

  const filteredProjects = projectsData.filter(project => 
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">{t.title}</h2>
           <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
             {t.subtitle}
           </p>
           
           {/* Filters */}
           <div className="flex justify-center space-x-2">
              <button
                onClick={() => setFilter('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === 'All' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setFilter('Software')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === 'Software' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {t.filterSoftware}
              </button>
              <button
                onClick={() => setFilter('Data Science')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === 'Data Science' 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {t.filterData}
              </button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-white flex items-center shadow-sm">
                   {project.category === 'Data Science' ? <Database size={12} className="mr-1 text-primary-600 dark:text-primary-400" /> : <Code size={12} className="mr-1 text-primary-600 dark:text-primary-400" />}
                   {project.category === 'Data Science' ? t.filterData : t.filterSoftware}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1 line-clamp-3">
                  {project.description[language]}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-medium rounded border border-slate-100 dark:border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50 dark:border-slate-800">
                  {project.github && (
                    <a href={project.github} className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors">
                      <Github size={18} className="mr-2" /> {t.code}
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} className="flex items-center text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium transition-colors">
                      <ExternalLink size={18} className="mr-2" /> {t.demo}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;