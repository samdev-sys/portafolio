
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mono">
          Sam.dev
        </Link>
        <div className="flex gap-6 sm:gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Projects', path: '/projects' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                isActive(link.path) ? 'text-cyan-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 border-t border-slate-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="text-slate-400 text-sm">
        &copy; {new Date().getFullYear()} Designed by <span className="text-cyan-400 font-semibold">Sam.dev</span>
      </div>
      <div className="flex gap-4">
         <a href="https://github.com/samdev-sys" target="_blank" className="text-slate-400 hover:text-white transition-colors">Github</a>
         <a href="https://www.linkedin.com/in/samuel-david-vasquez-solarte-09407437a" target="_blank" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};
