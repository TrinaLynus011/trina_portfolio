import React from 'react';
import { motion } from 'framer-motion';
import { HiCalendar } from 'react-icons/hi';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary-50 dark:bg-primary-800">
      <div className="section-padding">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-accent-200 dark:bg-accent-800"></div>

              {experienceData.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start mb-12 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-primary-800"></div>

                  {/* Content */}
                  <div className="ml-20 bg-white dark:bg-primary-900 rounded-2xl p-6 shadow-lg w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900 dark:text-white mb-1">
                          {experience.role}
                        </h3>
                        <p className="text-accent-600 dark:text-accent-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <div className="flex items-center text-primary-500 dark:text-primary-400 mt-2 sm:mt-0">
                        <HiCalendar className="mr-2" size={16} />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-primary-600 dark:text-primary-300 flex items-start"
                        >
                          <span className="w-2 h-2 bg-accent-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;