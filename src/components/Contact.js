import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:trinajoanlynus@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactLinks = [
    {
      name: 'Email',
      href: 'mailto:trinajoanlynus@gmail.com',
      icon: HiMail,
      label: 'trinajoanlynus@gmail.com'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/TrinaLynus011',
      icon: FaGithub,
      label: 'github.com/TrinaLynus011'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/trina-joan-lynus',
      icon: FaLinkedin,
      label: 'linkedin.com/in/trina-joan-lynus'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-primary-50 dark:bg-primary-800">
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
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-lg text-primary-600 dark:text-primary-300 max-w-2xl mx-auto">
              I am actively seeking Full-Stack Engineering and AI/ML opportunities where I can 
              contribute to building intelligent, scalable web systems and innovative AI applications.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-primary-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white dark:bg-primary-900 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-lg mr-4">
                        <Icon className="text-accent-600 dark:text-accent-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-primary-900 dark:text-white">
                          {link.name}
                        </p>
                        <p className="text-primary-600 dark:text-primary-300 text-sm">
                          {link.label}
                        </p>
                      </div>
                      <HiExternalLink className="text-primary-400 group-hover:text-accent-500 transition-colors duration-200" />
                    </a>
                  );
                })}
              </div>

              <div className="bg-white dark:bg-primary-900 rounded-2xl p-6">
                <p className="text-primary-700 dark:text-primary-200 leading-relaxed">
                  I'm passionate about creating intelligent web systems that solve real-world problems 
                  through the perfect blend of modern web development and cutting-edge AI. Whether 
                  it's building full-stack applications, developing NLP systems, or creating seamless 
                  user experiences for AI-powered platforms, I'm ready to bring my expertise to your next breakthrough.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-primary-900 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold text-primary-900 dark:text-white mb-6">
                  Send a Message
                </h3>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 dark:text-primary-200 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-primary-300 dark:border-primary-600 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-white dark:bg-primary-800 text-primary-900 dark:text-white transition-colors duration-200 resize-none"
                      placeholder="Tell me about the opportunity or project you'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;