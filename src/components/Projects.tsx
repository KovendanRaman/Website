'use client';

import RevealWrapper from './RevealWrapper';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <RevealWrapper>
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.1}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Projects
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in parallel computing, 
              AI, and full-stack development.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <div className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want to see more of my work?
            </p>
            <a
              href="https://github.com/KovendanRaman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-semibold"
            >
              View All Projects on GitHub
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
