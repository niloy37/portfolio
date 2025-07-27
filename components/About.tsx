import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiBriefcase, FiCalendar } from 'react-icons/fi';
import { personalInfo, experience, education } from '@/data/personal';

const About = () => {
  return (
    <section id="about" className="section-padding bg-black/20">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title gradient-text mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about pushing the boundaries of artificial intelligence and computational sciences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As an MSc student in Computational Sciences, I'm dedicated to exploring the fascinating 
                intersection of mathematics, computer science, and artificial intelligence. My research 
                focuses on Natural Language Processing and Retrieval-Augmented Generation systems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm particularly passionate about model optimization and hyperparameter tuning, 
                constantly seeking ways to improve AI system performance and efficiency. My work 
                spans from theoretical research to practical implementations that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding or researching, I enjoy staying up-to-date with the latest 
                developments in AI, contributing to open-source projects, and sharing knowledge 
                with the developer community.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">15+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience */}
            <div className="card">
              <div className="flex items-center mb-6">
                <FiBriefcase className="text-2xl text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-blue-500 pl-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-sm text-gray-400 flex items-center">
                        <FiCalendar className="mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="card">
              <div className="flex items-center mb-6">
                <FiBook className="text-2xl text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-2 border-purple-500 pl-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                      <span className="text-sm text-gray-400 flex items-center">
                        <FiCalendar className="mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-300 text-sm">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
