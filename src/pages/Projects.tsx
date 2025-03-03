
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Minimalist Dashboard',
    description: 'A clean, elegant dashboard design focused on data visualization with minimal distractions.',
    category: 'UI/UX Design',
  },
  {
    id: 2,
    title: 'Product Website',
    description: 'Sleek product landing page with smooth animations and intuitive navigation.',
    category: 'Web Design',
  },
  {
    id: 3,
    title: 'Mobile App Interface',
    description: 'Simple yet powerful mobile application interface with a focus on usability.',
    category: 'Mobile Design',
  },
  {
    id: 4,
    title: 'Brand Identity System',
    description: 'Comprehensive brand system with clear guidelines and versatile applications.',
    category: 'Branding',
  },
];

const Projects = () => {
  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Selected Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-gray-500"
          >
            A showcase of our work that demonstrates our approach to design and problem-solving.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/0 to-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-6 z-20">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-white backdrop-blur-sm rounded-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.category}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-xl font-bold text-gray-100 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </Layout>
  );
};

export default Projects;
