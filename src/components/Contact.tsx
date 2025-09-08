'use client';

import { motion } from 'framer-motion';
import RevealWrapper from './RevealWrapper';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kovendan.raman@yahoo.co.za',
      href: 'mailto:kovendan.raman@yahoo.co.za',
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-100 dark:bg-red-900',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/KovendanRaman',
      href: 'https://github.com/KovendanRaman',
      color: 'text-gray-800 dark:text-gray-200',
      bgColor: 'bg-gray-100 dark:bg-gray-800',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kovendan-raman',
      href: 'https://www.linkedin.com/in/kovendan-raman-2976a422a/',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Johannesburg, South Africa',
      href: null,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and collaborations. 
              Feel free to reach out if you&apos;d like to connect!
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-700"
                      >
                        <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200`}>
                          <contact.icon className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className={`w-12 h-12 ${contact.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                          <contact.icon className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400">
                            {contact.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <RevealWrapper delay={0.4}>
                <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    Let&apos;s Work Together
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I&apos;d love to hear from you. I&apos;m particularly interested in opportunities involving 
                    parallel computing, AI, and full-stack development.
                  </p>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:kovendan.raman@yahoo.co.za"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg"
                  >
                    <Mail size={20} />
                    Send me an email
                  </motion.a>
                </div>
              </RevealWrapper>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
