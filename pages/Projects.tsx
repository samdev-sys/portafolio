
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Mis Proyectos Realizados</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Una selección de mis trabajos más recientes en desarrollo web y aplicaciones.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
          <a 
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all transform hover:-translate-y-2 shadow-xl"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider">{tag}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 line-clamp-2">{project.description}</p>
              <div className="pt-4 flex items-center text-cyan-400 font-bold text-sm">
                Ver Proyecto 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
