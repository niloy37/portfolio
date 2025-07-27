import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '@/data/personal';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-blue-400 font-medium"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-hero gradient-text leading-tight"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 h-20 flex items-center justify-center"
          >
            <TypeAnimation
              sequence={[
                'MSc Computational Sciences Student',
                2000,
                'AI & Deep Learning Specialist',
                2000,
                'NLP Researcher',
                2000,
                'Model Optimization Expert',
                2000,
                'RAG Systems Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Interests Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {personalInfo.interests.slice(0, 6).map((interest, index) => (
              <span
                key={interest}
                className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium text-gray-300 hover:bg-white/20 transition-all duration-300"
              >
                {interest}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="btn-primary group"
            >
              <span>View My Work</span>
              <motion.div
                className="ml-2 group-hover:translate-x-1 transition-transform"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                →
              </motion.div>
            </button>
            
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              Get In Touch
            </button>
            
            <a
              href={personalInfo.resume}
              download
              className="flex items-center space-x-2 px-6 py-3 bg-transparent border border-gray-500 text-gray-300 hover:bg-gray-500 hover:text-white rounded-lg transition-all duration-300"
            >
              <FiDownload size={18} />
              <span>Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex justify-center space-x-6"
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={personalInfo.social.email}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FiMail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
