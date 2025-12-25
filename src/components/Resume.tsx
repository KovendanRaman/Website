'use client';

import { motion } from 'framer-motion';
import RevealWrapper from './RevealWrapper';
import { Download, ExternalLink, Linkedin } from 'lucide-react';

export default function Resume() {
  const handleDownloadResume = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kovendan_Jason_Raman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Resume
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📄</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Kovendan Jason Raman
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Computer Science Student • Software Developer
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Education
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• BSc Computer Science</li>
                    <li>• University of the Witwatersrand</li>
                    <li>• Focus: Web Development & Machine Learning</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Experience
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Software Development Intern</li>
                    <li>• Sanlam</li>
                    <li>• FinTech & Web Development</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
                >
                  <Download size={20} />
                  Download Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleViewResume}
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-200 font-semibold"
                >
                  <ExternalLink size={20} />
                  View Resume
                </motion.button>
              </div>

              <div className="text-center mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Connect with me on LinkedIn for professional networking
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/kovendan-raman-2976a422a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-semibold"
                >
                  <Linkedin size={20} />
                  LinkedIn Profile
                </motion.a>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
