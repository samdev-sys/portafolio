
import { faDev, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Project, SocialLink } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'App de Amigo Secreto',
    description: 'Una aplicación interactiva para organizar sorteos de amigo secreto con una interfaz fluida.',
    image: '/human.jpeg',
    link: 'https://samdev-sys.github.io/-challenge-amigo-secreto/',
    tags: ['JavaScript', 'HTML', 'CSS']
  },
  {
    id: '2',
    title: 'Calculadora de Número Secreto',
    description: 'Juego de lógica y adivinanza desarrollado con lógica de programación pura en JS.',
    image: '/number.png',
    link: 'https://samdev-sys.github.io/projects.js/',
    tags: ['JavaScript', 'Logic', 'Web']
  },
  {
    id: '3',
    title: 'TaskFlow (To-Do List)',
    description: 'Gestor de tareas eficiente diseñado para optimizar la productividad personal.',
    image: '/foto_to_Do_List.png',
    link: 'https://celadon-panda-29619c.netlify.app',
    tags: ['React', 'Management', 'UI/UX']
  },
  {
    id: '4',
    title: 'Generador de Contraseñas',
    description: 'Herramienta de seguridad para generar passwords robustos y aleatorios.',
    image: '/candado.png',
    link: 'https://passgen-pz90.onrender.com',
    tags: ['Security', 'Tool', 'Backend']
  },
  {
    id: '5',
    title: 'apps moviles',
    description: 'app movil de clima desarrollada con flutter',
    image: '/screen.png',
    link: 'https://github.com/samdev-sys/weather_app.git',
    tags: ['JavaScript', 'Logic', 'Web']
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/',
    icon: faInstagram
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/samuel-david-vasquez-solarte-09407437a',
    icon: faLinkedin
  },
  {
    name: 'GitHub',
    url: 'https://github.com/samdev-sys',
    icon: faGithub
  },
  {
    name: 'Dev.to',
    url: 'https://dev.to/samdev-sys',
    icon: faDev
  }
];
