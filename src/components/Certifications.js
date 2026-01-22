import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck, HiSparkles, HiFilter } from 'react-icons/hi';
import { FaBrain, FaCloud, FaCode, FaPalette } from 'react-icons/fa';
import certificationsData from '../data/certifications.json';

const Certifications = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'AI & NLP', 'Machine Learning', 'Cloud & Platforms', 'Web & Systems', 'Design & UX'];
  
  const categoryIcons = {
    'AI & NLP': FaBrain,
    'Machine Learning': HiSparkles,
    'Cloud & Platforms': FaCloud,
    'Web & Systems': FaCode,
    'Design & UX': FaPalette,
  };

  const categoryColors = {
    'AI & NLP': 'from-purple-500 to-pink-500',
    'Machine Learning': 'from-blue-500 to-cyan-500',
    'Cloud & Platforms': 'from-green-500 to-emerald-500',
    'Web & Systems': 'from-orange-500 to-red-500',
    'Design & UX': 'from-indigo-500 to-purple-500',
  };

  const filteredCertifications = certificationsData.filter(cert => 
    filter === 'all' || cert.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-primary-50 dark:bg-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
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
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Verified Certifications & Achievements
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-accent-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              14+ authenticated courses and certifications across AI, ML, cloud platforms, and engineering foundations.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <HiFilter className="text-primary-400 mt-2" size={20} />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-white dark:bg-primary-700 text-primary-700 dark:text-primary-300 hover:bg-accent-100 dark:hover:bg-primary-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Certifications' : category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
              {filteredCertifications.map((certification, index) => {
                const CategoryIcon = categoryIcons[certification.category] || HiAcademicCap;
                const gradientClass = categoryColors[certification.category] || 'from-gray-500 to-gray-600';

                return (
                  <motion.div
                    key={`${filter}-${index}`}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white dark:bg-primary-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 dark:border-primary-700 group relative overflow-hidden"
                  >
                    {/* Animated background gradient */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${gradientClass}`}
                      initial={false}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <motion.div 
                          className={`p-3 rounded-lg bg-gradient-to-br ${gradientClass} text-white mr-4 flex-shrink-0`}
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CategoryIcon size={24} />
                        </motion.div>
                        
                        <motion.div
                          className="text-accent-500"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <HiBadgeCheck size={20} />
                        </motion.div>
                      </div>

                      <motion.h3 
                        className="text-lg font-semibold text-primary-900 dark:text-white mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {certification.title}
                      </motion.h3>

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
                          {certification.platform}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${gradientClass} text-white`}>
                          {certification.category}
                        </span>
                      </div>

                      <p className="text-sm text-primary-600 dark:text-primary-300 leading-relaxed">
                        {certification.focus}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Achievement summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { label: "Total Certifications", value: "14+", icon: HiAcademicCap },
                { label: "NPTEL ELITE", value: "2", icon: HiBadgeCheck },
                { label: "Platform Coverage", value: "7", icon: HiSparkles }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-white/90 dark:bg-primary-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-200 dark:border-primary-600 text-center min-w-[140px]"
                >
                  <stat.icon className="text-accent-500 mx-auto mb-3" size={28} />
                  <div className="text-2xl font-bold text-primary-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-primary-600 dark:text-primary-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;