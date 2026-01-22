import React from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon, HiMenu, HiX, HiSparkles } from 'react-icons/hi';
import { FaRocket } from 'react-icons/fa';
import { useState } from 'react';

const Header = ({ isDark, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'AYLA', href: '#ayla' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-primary-900/90 backdrop-blur-xl border-b border-primary-200/50 dark:border-primary-700/50 shadow-lg"
    >
      <nav className="section-padding py-4">
        <div className="container-width flex items-center justify-between">
          {/* Enhanced Logo/Name Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-3"
          >
            <div className="flex items-center space-x-2">
              <motion.div
                className="relative"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="p-2 bg-white dark:bg-primary-800 rounded-lg shadow-lg border border-primary-200 dark:border-primary-600">
                  <img 
                    src="/TL_logo.png" 
                    alt="Trina Lynus Logo" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <HiSparkles className="text-accent-400" size={12} />
                </motion.div>
              </motion.div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-900 dark:text-white">
                  Trina Lynus
                </span>
                <div className="flex items-center space-x-2 text-xs">
                  <span className="text-accent-600 dark:text-accent-400 font-medium">Full-Stack Engineer</span>
                  <div className="w-1 h-1 bg-primary-400 rounded-full"></div>
                  <div className="flex items-center space-x-1">
                    <FaRocket className="text-purple-500" size={10} />
                    <span className="text-purple-600 dark:text-purple-400 font-medium">AI Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative overflow-hidden group ${
                  item.name === 'AYLA' 
                    ? 'text-purple-600 dark:text-purple-400 hover:text-white' 
                    : 'text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name === 'AYLA' && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20"
                      animate={{ 
                        background: [
                          "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
                          "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
                          "linear-gradient(45deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </>
                )}
                <span className="relative z-10 flex items-center">
                  {item.name}
                  {item.name === 'AYLA' && (
                    <motion.div
                      className="ml-1"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaRocket size={12} />
                    </motion.div>
                  )}
                </span>
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700 transition-all duration-200 shadow-md"
              aria-label="Toggle dark mode"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden mt-4 py-4 border-t border-primary-200 dark:border-primary-700 bg-white/95 dark:bg-primary-800/95 backdrop-blur-sm rounded-lg"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center ${
                    item.name === 'AYLA' 
                      ? 'text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30' 
                      : 'text-primary-600 dark:text-primary-300 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-primary-100 dark:hover:bg-primary-700'
                  }`}
                >
                  {item.name}
                  {item.name === 'AYLA' && (
                    <FaRocket className="ml-2" size={12} />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;