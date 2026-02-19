
import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-4">
              <h2 className="text-cyan-400 font-medium tracking-wide uppercase text-sm mono">Hola! Soy Samuel Vasquez</h2>
              <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white">
                Eleve su negocio digital <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  con un Front-end de calidad!
                </span>
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed">
                Desarrollador web con especialización en React, HTML y CSS.
                Ayudo a pequeños negocios y diseñadores a llevar a cabo buenas ideas. ¿Hablamos?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center justify-center">
                Trabajemos Juntos
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center justify-center">
                Ver Proyectos
              </Link>
            </div>

            <div className="space-y-4">
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mono">Mis Redes</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all text-slate-400 group"
                  >
                    <span className="capitalize text-sm font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src="/foto_perfil.png"
                alt="Samuel Vasquez"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
