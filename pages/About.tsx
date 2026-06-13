
import React from 'react';
import HeroVideoBg from '../components/HeroVideoBg';

const About: React.FC = () => {
  return (
    <div className="-mt-16">
      <HeroVideoBg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">Sobre Mí</h1>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                Tecnólogo en Análisis y Desarrollo de Software con habilidades en desarrollo web y móvil, gestión de bases de datos, metodologías ágiles y automatización de procesos mediante plataformas low-code.
              </p>
              <p>
                Con experiencia en soporte Helpdesk, administración de directorios activos y mantenimiento de redes, poseo una visión integral de la infraestructura tecnológica que soporta el software moderno.
              </p>
              <p>
                Tengo un amplio dominio en desarrollo de aplicaciones con integración backend y frontend, optimizando procesos empresariales. Mi enfoque se centra en crear soluciones eficientes, escalables y automatizadas que resuelvan problemas reales.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Frontend', skills: 'React, Tailwind, HTML5, CSS3' },
                { label: 'Backend', skills: 'Node.js, Express, DB Management' },
                { label: 'Otros', skills: 'Low-Code, Agile, Helpdesk' },
                { label: 'Mobile', skills: 'React Native, UI Design' }
              ].map((item) => (
                <div key={item.label} className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <p className="text-cyan-400 text-sm font-bold mb-1 uppercase tracking-wider">{item.label}</p>
                  <p className="text-slate-300 text-xs font-medium leading-tight">{item.skills}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md bg-slate-900/40 p-3 rounded-2xl border border-slate-800/60 backdrop-blur-sm shadow-2xl shadow-cyan-500/5">
              <div className="flex gap-1.5 mb-3 px-1">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                <span className="text-[11px] text-slate-500 ml-2 font-mono">projects Demo</span>
              </div>
              <div className="relative aspect-[9/16] sm:aspect-video lg:aspect-[9/16] w-full rounded-lg overflow-hidden bg-black border border-slate-800">
                <video
                  controls
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/logo.png"
                >
                  <source src="/assets/projects.mp4" type="video/mp4" />
                  Tu navegador no soporta la reproducción de video.
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>

    </HeroVideoBg>
    </div>
  );
};

export default About;
