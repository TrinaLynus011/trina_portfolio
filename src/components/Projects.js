import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiSparkles, HiFilter } from 'react-icons/hi';
import { FaGithub, FaBrain, FaGlobe } from 'react-icons/fa';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  
  const categories = ['all', 'AI/NLP', 'Web Development'];
  
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'AI/NLP') {
      return ['Speech & Audio AI', 'Agentic AI', 'NLP & Education AI', 'Applied AI', 'Computer Vision', 'Applied ML', 'ML Systems'].includes(project.category);
    }
    if (filter === 'Web Development') {
      return project.category === 'Web Development';
    }
    return false;
  });
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.filter(p => p.featured);

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
    },
    exit: {
      opacity: 0,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  };

  const ProjectCard = ({ project, index }) => {
    const isAI = ['Speech & Audio AI', 'Agentic AI', 'NLP & Education AI', 'Applied AI', 'Computer Vision', 'Applied ML', 'ML Systems'].includes(project.category);
    const isWeb = project.category === 'Web Development';
    
    return (
      <motion.div
        layout
        variants={itemVariants}
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
        className="bg-white dark:bg-primary-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 dark:border-primary-700 group relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
            isAI 
              ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
              : isWeb 
                ? 'bg-gradient-to-br from-blue-500 to-cyan-500'
                : 'bg-gradient-to-br from-gray-500 to-gray-600'
          }`}
          initial={false}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <motion.div 
              className={`p-3 rounded-lg ${
                isAI 
                  ? 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30' 
                  : 'bg-accent-100 dark:bg-accent-900/30'
              }`}
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {isAI ? (
                <FaBrain className="text-purple-600 dark:text-purple-400" size={24} />
              ) : (
                <FaGlobe className="text-accent-600 dark:text-accent-400" size={24} />
              )}
            </motion.div>
            
            <div className="flex items-center space-x-2">
              {isAI && (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-purple-500 dark:text-purple-400"
                >
                  <HiSparkles size={16} />
                </motion.div>
              )}
              
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-primary-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={20} />
                </motion.a>
              )}
            </div>
          </div>

          <motion.h3 
            className="text-xl font-semibold text-primary-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-primary-600 dark:text-primary-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 + 0.4 }}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  isAI 
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                    : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {project.github && (
            <div className="flex items-center justify-between pt-4 border-t border-primary-200 dark:border-primary-700">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 font-medium transition-colors duration-200"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Code
                <HiExternalLink className="ml-1" size={16} />
              </motion.a>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-primary-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          className="absolute top-40 left-20 w-64 h-64 bg-accent-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"
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
              Featured Projects
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-accent-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              A showcase of AI-powered systems, NLP applications, and full-stack solutions 
              that demonstrate end-to-end product engineering.
            </p>
          </motion.div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <HiFilter className="text-primary-400 mt-2" size={20} />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  filter === category
                    ? 'bg-accent-600 text-white shadow-lg'
                    : 'bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-accent-100 dark:hover:bg-primary-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              {displayedProjects.map((project, index) => (
                <ProjectCard key={`${filter}-${project.id}`} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {!showAll && filteredProjects.length > displayedProjects.length && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.button
                onClick={() => setShowAll(true)}
                className="btn-secondary relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-accent-100 dark:bg-accent-900/30"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">
                  View All Projects ({filteredProjects.length - displayedProjects.length} more)
                </span>
              </motion.button>
            </motion.div>
          )}

          {showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.button
                onClick={() => setShowAll(false)}
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Show Featured Only
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;