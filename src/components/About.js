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
                  I'm an AI & NLP engineer who designs intelligent, data-driven systems, translating 
                  research concepts into scalable, real-world applications. My expertise spans natural 
                  language processing, speech AI, agentic workflows, and data pipelines.
                </p>
                
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed mb-6">
                  I focus on building end-to-end intelligent systems—from model training and pipeline 
                  design to production deployment. My experience includes generative AI applications, 
                  multimodal systems, and conversational AI platforms that solve real problems with 
                  thoughtful engineering.
                </p>
                
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed">
                  Web development serves as my delivery and integration layer, enabling AI systems 
                  to reach users effectively. I thrive in environments where technical excellence 
                  meets research innovation and product impact.
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