import React from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiExternalLink, HiUsers, HiLightBulb } from 'react-icons/hi';
import { FaRocket, FaPalette, FaGamepad, FaMobile, FaHeart } from 'react-icons/fa';

const Ayla = () => {
  const focusAreas = [
    {
      title: "Fashion Technology",
      description: "AI-driven design tools, body-aware fitting, and smart textile innovation",
      icon: FaPalette,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Digital Experiences",
      description: "Immersive interfaces, AR/VR fashion experiences, and interactive platforms",
      icon: FaGamepad,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Creative Technology",
      description: "Generative design systems, creative AI tools, and artistic expression platforms",
      icon: HiLightBulb,
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const collaborationRoles = [
    { role: "App Developers", icon: FaMobile, description: "Mobile-first fashion tech experiences" },
    { role: "Game Designers", icon: FaGamepad, description: "Gamified fashion discovery & interaction" },
    { role: "Fashion Technologists", icon: FaPalette, description: "AI-powered design & manufacturing" }
  ];

  return (
    <section id="ayla" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="section-padding relative z-10">
        <div className="container-width">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mr-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <FaRocket className="text-white" size={32} />
              </motion.div>
              <div className="text-left">
                <motion.h2 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.02 }}
                >
                  AYLA
                </motion.h2>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                  Founder & CEO
                </p>
              </div>
            </div>

            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-primary-700 dark:text-primary-200 max-w-3xl mx-auto leading-relaxed"
            >
              A multidisciplinary venture at the intersection of fashion, technology, and creative expression. 
              Building the future where AI meets artistry, and innovation drives inclusive design.
            </motion.p>
          </motion.div>

          {/* Focus Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/80 dark:bg-primary-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-200/50 dark:border-purple-700/50 group relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${area.gradient}`}
                    initial={false}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className={`p-4 rounded-xl bg-gradient-to-r ${area.gradient} text-white mb-6 inline-block`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={28} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-primary-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                      {area.title}
                    </h3>

                    <p className="text-primary-600 dark:text-primary-300 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Collaboration Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/90 dark:bg-primary-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-200/50 dark:border-purple-700/50 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <HiUsers className="text-purple-500 mr-3" size={32} />
                  <h3 className="text-3xl font-bold text-primary-900 dark:text-white">
                    Building Together
                  </h3>
                </div>
                <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
                  AYLA is actively seeking passionate collaborators to shape the future of fashion technology. 
                  Join us in creating experiences that blend creativity, technology, and human connection.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {collaborationRoles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={role.role}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl p-6 text-center border border-purple-200/50 dark:border-purple-700/50"
                    >
                      <motion.div
                        className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white inline-block mb-4"
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <h4 className="text-lg font-semibold text-primary-900 dark:text-white mb-2">
                        {role.role}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-300">
                        {role.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{ 
                      background: [
                        "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-4">
                      <FaHeart className="mr-2" size={24} />
                      <h4 className="text-2xl font-bold">Ready to Build the Future?</h4>
                    </div>
                    <p className="text-lg mb-6 opacity-90">
                      Interested in building with AYLA? Let's create something extraordinary together.
                    </p>
                    
                    <motion.a
                      href="mailto:fashions.ayla@gmail.com"
                      className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <HiMail className="mr-2" size={20} />
                      fashions.ayla@gmail.com
                      <HiExternalLink className="ml-2" size={16} />
                    </motion.a>
                    
                    <p className="text-sm mt-4 opacity-75">
                      Exclusive to AYLA-related inquiries and collaborations
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Ayla;