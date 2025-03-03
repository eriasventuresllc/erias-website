
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const About = () => {
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
            About
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Our Philosophy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-gray-500"
          >
            We believe in design that is both simple and functional, where every element serves a purpose.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We focus on creating experiences that are intuitive and elegant, with attention to every detail. By embracing minimalism, we remove distractions and emphasize what truly matters.
            </p>
            <p className="text-gray-600">
              This philosophy extends to every aspect of our work, from the visual design to the underlying technology. The result is a product that feels cohesive, thoughtful, and delightful to use.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute w-40 h-40 bg-primary/5 rounded-full -top-10 -right-10"></div>
            <div className="absolute w-20 h-20 bg-primary/10 rounded-full bottom-10 left-10"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-4">Design Principles</h3>
              <ul className="space-y-4">
                {['Simplicity', 'Functionality', 'Attention to Detail', 'User-Centered'].map((principle, index) => (
                  <motion.li 
                    key={principle}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1), duration: 0.4 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{principle}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;
