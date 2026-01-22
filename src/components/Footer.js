import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart, FaRocket } from 'react-icons/fa';
import { HiMail, HiSparkles } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/TrinaLynus011',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/trina-lynus',
      icon: FaLinkedin
    },
    {
      name: 'Email',
      href: 'mailto:trinajoanlynus@gmail.com',
      icon: HiMail
    }
  ];

  return (
    <footer className="bg-primary-900 dark:bg-primary-950 text-white py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Enhanced Name and tagline */}
            <div className="flex items-center justify-center mb-4">
              <motion.div
                className="p-2 bg-gradient-to-r from-accent-500 to-purple-500 rounded-lg mr-3"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <HiSparkles className="text-white" size={20} />
              </motion.div>
              <h3 className="text-2xl font-bold">Trina Lynus</h3>
              <motion.div
                className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg ml-3"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              >
                <FaRocket className="text-white" size={16} />
              </motion.div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className="text-accent-300 font-medium">AI & NLP Engineer</span>
              <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
              <span className="text-purple-300 font-medium">AYLA Founder</span>
            </div>

            <p className="text-primary-300 mb-8 max-w-2xl mx-auto">
              Building intelligent systems that solve real problems and creating the future 
              where AI meets artistry through innovative ventures.
            </p>

            {/* Social links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-primary-800 hover:bg-accent-600 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-primary-700 to-transparent mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Copyright and credits */}
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-primary-400 mb-8">
              <p>
                © {currentYear} Trina Lynus. All rights reserved.
              </p>
              <p className="flex items-center mt-2 sm:mt-0">
                Built with <FaHeart className="mx-1 text-red-500" size={12} /> using React & Tailwind CSS
              </p>
            </div>

            {/* Dual Call to action */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* AI/ML Opportunities */}
              <div className="bg-primary-800/50 backdrop-blur-sm rounded-2xl p-6 border border-primary-700">
                <h4 className="text-lg font-semibold text-accent-300 mb-2">
                  AI/ML Opportunities
                </h4>
                <p className="text-primary-200 text-sm mb-4">
                  Ready to build intelligent systems together?
                </p>
                <motion.a
                  href="mailto:trinajoanlynus@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-accent-600 hover:bg-accent-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiMail className="mr-2" size={16} />
                  Connect for AI/ML Roles
                </motion.a>
              </div>

              {/* AYLA Collaboration */}
              <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-700/50">
                <h4 className="text-lg font-semibold text-purple-300 mb-2">
                  AYLA Collaboration
                </h4>
                <p className="text-purple-100 text-sm mb-4">
                  Join us in building the future of fashion tech
                </p>
                <motion.a
                  href="mailto:fashions.ayla@gmail.com"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-medium rounded-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaRocket className="mr-2" size={14} />
                  Build with AYLA
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;