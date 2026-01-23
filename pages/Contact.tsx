
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    asunto: '',
    descripcion: '',
    contacto: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portafolio: ${formData.asunto}`);
    const body = encodeURIComponent(`Hola Samuel,\n\n${formData.descripcion}\n\nDatos de contacto del cliente: ${formData.contacto}`);

    window.location.href = `mailto:dsolarte432@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ asunto: '', descripcion: '', contacto: '' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Hablemos</h1>
            <p className="text-slate-400 text-lg">
              ¿Tienes un proyecto en mente o simplemente quieres decir hola? No dudes en escribirme.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">Email</h4>
                <p className="text-slate-400">dsolarte432@gmail.com</p>
              </div>
            </div>

            <a href="https://wa.link/gyayiy" target="_blank" className="flex items-start gap-4 group">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-500 group-hover:bg-green-500/20 transition-all">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.435 5.663 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white">WhatsApp</h4>
                <p className="text-slate-400">Contáctame directamente</p>
              </div>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Asunto</label>
            <input
              required
              type="text"
              value={formData.asunto}
              onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
              placeholder="¿En qué puedo ayudarte?"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Descripción</label>
            <textarea
              required
              rows={4}
              value={formData.descripcion}
              onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
              placeholder="Cuéntame más sobre tu idea..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email o Número de Contacto</label>
            <input
              required
              type="text"
              value={formData.contacto}
              onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
              placeholder="Ej: nombre@email.com o +57..."
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
