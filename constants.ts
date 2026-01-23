
import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'App de Amigo Secreto',
    description: 'Una aplicación interactiva para organizar sorteos de amigo secreto con una interfaz fluida.',
    image: 'public/WhatsApp Image 2025-10-27 at 10.53.41 PM.jpeg',
    link: 'https://samdev-sys.github.io/-challenge-amigo-secreto/',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: '2',
    title: 'Calculadora de Número Secreto',
    description: 'Juego de lógica y adivinanza desarrollado con lógica de programación pura en JS.',
    image: 'https://picsum.photos/id/2/800/450',
    link: 'https://samdev-sys.github.io/projects.js/',
    tags: ['JavaScript', 'Logic', 'Web']
  },
  {
    id: '3',
    title: 'TaskFlow (To-Do List)',
    description: 'Gestor de tareas eficiente diseñado para optimizar la productividad personal.',
    image: 'public/ChatGPT Image 22 may 2025, 08_29_43 p.m..png',
    link: 'https://celadon-panda-29619c.netlify.app',
    tags: ['React', 'Management', 'UI/UX']
  },
  {
    id: '4',
    title: 'Generador de Contraseñas',
    description: 'Herramienta de seguridad para generar passwords robustos y aleatorios.',
    image: 'public/icons8-contraseña-94.png',
    link: 'https://passgen-pz90.onrender.com',
    tags: ['Security', 'Tool', 'Backend']
  },
  {
    id: '5',
    title: 'apps moviles',
    description: 'app movil de clima desarrollada con flutter',
    image: 'public/screen.png',
    link: 'https://github.com/samdev-sys/weather_app.git',
    tags: ['JavaScript', 'Logic', 'Web']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: 'instagram'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samuel-david-vasquez-solarte-09407437a',
    icon: 'linkedin'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/samdev-sys',
    icon: 'github'
  }
];
