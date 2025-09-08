'use client';

import RevealWrapper from './RevealWrapper';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </RevealWrapper>

        <div className="max-w-4xl mx-auto">
          <RevealWrapper delay={0.2}>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate 3rd year Computer Science student at the University of the Witwatersrand.
                I have a passion for software development and web development. I have worked on a number of projects,
                some of which are listed in the projects section.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My academic focus is based around <strong className="text-blue-600 dark:text-blue-400">Computer Graphics and Visualisation</strong> and 
                <strong className="text-blue-600 dark:text-blue-400"> Machine Learning</strong>, with hands-on experience in 
                Python and Java. I&apos;m particularly interested in building 
                interactive and visually appealing applications.
              </p>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond computer graphics and machine learning, I&apos;m deeply interested in <strong className="text-blue-600 dark:text-blue-400">full-stack web development</strong>, 
                where I combine modern frontend technologies with robust backend systems. I enjoy building 
                end-to-end solutions that are both performant and user-friendly, always striving to learn 
                new technologies and best practices in the rapidly evolving tech landscape. With experience in React, Next.js, Node.js, Python, Java, and more, I&apos;m well-equipped to build robust and scalable applications. I make use of external APIs to build applications that are both functional and user-friendly.
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3rd</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Year Student</h3>
                <p className="text-gray-600 dark:text-gray-400">Computer Science at Wits University</p>
              </div>

              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Sanlam Intern</h3>
                <p className="text-gray-600 dark:text-gray-400">Software Development & FinTech</p>
              </div>

              
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
