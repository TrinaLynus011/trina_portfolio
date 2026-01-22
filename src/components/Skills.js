import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiJavascript, 
  SiPytorch, 
  SiMongodb, 
  SiGit, 
  SiDocker,
  SiFlask,
  SiLinux
} from 'react-icons/si';
import { HiLightBulb, HiMicrophone, HiCog, HiDatabase, HiCode, HiServer, HiChip } from 'react-icons/hi';
import skillsData from '../data/skills.json';

const Skills = () => {
  const iconMap = {
    'React.js & Next.js': SiPytorch, // Using available icons
    'JavaScript': SiJavascript,
    'Python': SiPython,
    'Node.js & Express.js': SiJavascript,
    'MongoDB & MySQL': SiMongodb,
    'Git & GitHub': SiGit,
    'Docker': SiDocker,
    'Flask': SiFlask,
    'Linux': SiLinux,
  };

  const categoryIcons = {
    'Frontend Development': HiCode,
    'Backend Development': HiServer,
    'Database & Cloud': HiDatabase,
    'Natural Language Processing': HiLightBulb,
    'AI & Machine Learning': HiChip,
    'Speech & Audio Intelligence': HiMicrophone,
    'Development Tools & Practices': HiCog,
  };

  const categoryColors = {
    'Frontend Development': 'from-blue-500 to-cyan-500',
    'Backend Development': 'from-green-500 to-emerald-500',
    'Database & Cloud': 'from-purple-500 to-violet-500',
    'Natural Language Processing': 'from-orange-500 to-red-500',
    'AI & Machine Learning': 'from-pink-500 to-rose-500',
    'Speech & Audio Intelligence': 'from-indigo-500 to-blue-500',
    'Development Tools & Practices': 'from-teal-500 to-cyan-500',
  };

  return (
    <section id="skills" className="py-20 bg-primary-50 dark:bg-primary-800 relative overflow-hidden">
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
              Technical Expertise
            </motion.h2>
            <motion.div 
              className="w-20 h-1 bg-accent-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              Full-stack engineering expertise spanning modern web development and cutting-edge AI/ML systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], categoryIndex) => {
              const CategoryIcon = categoryIcons[category] || HiCog;
              const gradientClass = categoryColors[category] || 'from-gray-500 to-gray-600';

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white dark:bg-primary-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 dark:border-primary-700 group relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${gradientClass}`}
                    initial={false}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r ${gradientClass} text-white mr-3`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <CategoryIcon size={24} />
                      </motion.div>
                      <motion.h3 
                        className="text-lg font-semibold text-primary-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category}
                      </motion.h3>
                    </div>

                    <div className="space-y-3">
                      {skills.map((skill, skillIndex) => {
                        const SkillIcon = iconMap[skill];
                        
                        return (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                            whileHover={{ 
                              x: 5,
                              transition: { duration: 0.2 }
                            }}
                            className="flex items-center text-primary-700 dark:text-primary-200 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200 cursor-pointer"
                          >
                            {SkillIcon && (
                              <motion.div
                                whileHover={{ rotate: 10, scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                <SkillIcon className="mr-3 text-accent-500" size={18} />
                              </motion.div>
                            )}
                            <span className="text-sm font-medium">{skill}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;