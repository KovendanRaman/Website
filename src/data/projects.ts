export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'raceiq-f1-tracker',
    title: 'RaceIQ F1 Tracker',
    description: 'A comprehensive Formula 1 race tracking application that provides real-time race data, driver statistics, and race predictions using machine learning algorithms.',
    tags: ['React', 'Node.js', 'JavaScript', 'API Integration'],
    githubUrl: 'https://github.com/Race1Q/RaceIQ',
    demoUrl: 'https://race-iq.vercel.app/',
  },
  {
    id: 'indiecart-marketplace',
    title: 'IndieCart Marketplace',
    description: 'A full-stack e-commerce platform for independent creators and small businesses, featuring secure payments, inventory management, and seller analytics.',
    tags: ['Next.js', 'Javascript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Indie-Cart/IndieCart-Marketplace',
    demoUrl: 'https://indiecartmarket-byhqamdkhngqhpbd.southafricanorth-01.azurewebsites.net/',
  },
  {
    id: 'career-canvas-aps-calculator',
    title: 'Career Canvas - APS Calculator & Personality Matcher',
    description: 'An intelligent APS calculator and personality test matcher that helps students find their most appropriate degree programs. Built for the AdaptIT Hackathon with advanced matching algorithms.',
    tags: ['React', 'TypeScript', 'Vite', 'shadcn-ui', 'Tailwind CSS', 'Hackathon'],
    githubUrl: 'https://github.com/Career-Canvas/Career-Canvas',
    demoUrl: 'https://red-pebble-09b4a7103.1.azurestaticapps.net/',
  },
];
