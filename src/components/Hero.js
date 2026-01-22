import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiExternalLink, HiSparkles, HiLightBulb, HiCog } from 'react-icons/hi';
import { FaGithub, FaBrain, FaRobot, FaMicrophone } from 'react-icons/fa';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [particles, setParticles] = useState([]);

  const roles = [
    { text: "AI/ML Engineer", icon: FaBrain, color: "from-purple-500 to-pink-500" },
    { text: "Full-Stack Developer", icon: FaRobot, color: "from-blue-500 to-cyan-500" },
    { text: "Data Scientist", icon: FaMicrophone, color: "from-green-500 to-emerald-500" },
    { text: "Systems Architect", icon: HiCog, color: "from-orange-500 to-red-500" }
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Rotating roles effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Floating particles effect
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const currentRoleData = roles[currentRole];
  const CurrentIcon = currentRoleData.icon;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-purple-50 dark:from-primary-900 dark:via-primary-800 dark:to-purple-900 pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-accent-400 dark:bg-accent-300 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-20"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl opacity-15"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="section-padding w-full relative z-10">
        <div className="container-width text-center">
          {/* Main heading with rotating roles */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className={`p-4 rounded-2xl bg-gradient-to-r ${currentRoleData.color} mr-4`}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CurrentIcon className="text-white" size={32} />
              </motion.div>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: 90 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-900 dark:text-white"
                >
                  <span className={`bg-gradient-to-r ${currentRoleData.color} bg-clip-text text-transparent`}>
                    {currentRoleData.text}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <HiSparkles className="text-accent-500 animate-pulse" size={24} />
              <span className="text-xl md:text-2xl text-primary-700 dark:text-primary-200 font-medium">
                Building Intelligence, One System at a Time
              </span>
              <HiSparkles className="text-purple-500 animate-pulse" size={24} />
            </motion.div>
          </motion.div>

          {/* Enhanced description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-10"
          >
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              I work across AI/ML, data science, digital twin systems, and full-stack web development, 
              building end-to-end software that connects data, intelligence, and user experience through 
              scalable, production-ready applications.
            </p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["AI/ML & Data Science", "Full-Stack Development", "Digital Twin Systems", "Web Applications"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-white/80 dark:bg-primary-800/80 backdrop-blur-sm rounded-full text-primary-700 dark:text-primary-200 font-medium shadow-lg border border-primary-200 dark:border-primary-600"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={scrollToProjects}
              className="btn-primary group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-700 to-accent-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                <HiLightBulb className="mr-2" />
                Explore AI Projects
                <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>

            <motion.a
              href="https://github.com/TrinaLynus011"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-primary-100 dark:bg-primary-700"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                <FaGithub className="mr-2" />
                GitHub Portfolio
                <HiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.a>

            <motion.button
              onClick={scrollToContact}
              className="btn-secondary group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>

          {/* Achievement badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              { label: "AI Projects", value: "10+", icon: FaBrain },
              { label: "Hackathon Wins", value: "3", icon: HiSparkles },
              { label: "Certifications", value: "15+", icon: HiLightBulb }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="bg-white/90 dark:bg-primary-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-200 dark:border-primary-600 text-center min-w-[100px]"
              >
                <stat.icon className="text-accent-500 mx-auto mb-2" size={24} />
                <div className="text-2xl font-bold text-primary-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-primary-600 dark:text-primary-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-8"
          >
            <p className="text-sm text-primary-500 dark:text-primary-400 mb-4">
              Bridging AI intelligence with web engineering excellence
            </p>
            <motion.div 
              className="w-px h-16 bg-gradient-to-b from-accent-500 to-transparent mx-auto"
              animate={{ scaleY: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;