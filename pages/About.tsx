
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl">
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
    </div>
  );
};

export default About;
