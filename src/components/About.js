import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-primary-900">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-primary-50 dark:bg-primary-800 rounded-2xl p-8 md:p-12">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed mb-6">
                  I work across web development, data engineering, and applied AI/ML systems, 
                  with a focus on building end-to-end software that connects data processing, 
                  intelligent features, and user experience. My background allows me to move 
                  comfortably between data preprocessing pipelines, backend API development, 
                  and modern frontend applications.
                </p>
                
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed mb-6">
                  I have hands-on experience applying machine learning and NLP concepts, working with 
                  structured and semi-structured data through MongoDB and MySQL, and integrating these 
                  capabilities into production-oriented web systems using the MERN stack. I focus on 
                  reliable data workflows and consistent data flow between frontend, backend, and ML components.
                </p>
                
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed">
                  Rather than focusing on a single domain, I approach engineering as a connected system—where 
                  data preprocessing, APIs, models, and interfaces work together. I value clear architecture, 
                  practical implementation, and continuous learning, and I am motivated by building systems 
                  that are both technically sound and genuinely useful.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;