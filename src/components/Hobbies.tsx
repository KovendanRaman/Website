'use client';

import { motion } from 'framer-motion';
import RevealWrapper from './RevealWrapper';
import { Code, Gamepad2, Music, BookOpen, Dumbbell, Plane, ArrowLeft, Tv, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function Hobbies() {
  const hobbies = [
    {
      icon: Code,
      title: 'Programming & Development',
      description: 'Exploring new technologies, building side projects, and contributing to open source. Always learning new frameworks and languages.',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Strategic games, First-Person Shooters and competitive gaming. Enjoy both single-player adventures and multiplayer experiences.',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Listening to pop and RnB, some of my favourite artists are Usher and Olivia Rodrigo, Music helps me relax.',
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'I enjoy reading books about Self Improvement and mastering the mind.',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-100 dark:bg-orange-900',
    },
    
    {
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Regular workouts in the gym, outdoor activities like hiking, and team sports. Staying active helps maintain both physical and mental well-being.',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      icon: Plane,
      title: 'Travel',
      description: 'Exploring new places, experiencing different cultures, and creating memories. Love discovering hidden gems and local experiences.',
      color: 'text-cyan-600 dark:text-cyan-400',
      bgColor: 'bg-cyan-100 dark:bg-cyan-900',
    },
    {
      icon: Trophy,
      title: 'Sports',
      description: 'I play indoor football and padel regularly. Love the competitive spirit and teamwork involved in these sports.',
      color: 'text-amber-600 dark:text-amber-400',
      bgColor: 'bg-amber-100 dark:bg-amber-900',
    },
    {
      icon: Tv,
      title: 'TV & Entertainment',
      description: 'Big fan of Formula 1 racing and Chelsea Football Club. Love following the seasons and supporting my teams.',
      color: 'text-indigo-600 dark:text-indigo-400',
      bgColor: 'bg-indigo-100 dark:bg-indigo-900',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
              Hobbies & Interests
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Beyond coding and academics, here are the activities and interests that keep me inspired and balanced.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${hobby.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <hobby.icon className={`w-8 h-8 ${hobby.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {hobby.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.4}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                I believe that diverse interests and hobbies contribute to personal growth and creativity. 
                Whether it's exploring new technologies, capturing moments through photography, or discovering 
                new places through travel, each experience adds a unique perspective to my work and life. 
                These activities help me stay curious, motivated, and well-rounded as both a developer and an individual.
              </p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
