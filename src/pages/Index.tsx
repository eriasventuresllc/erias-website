
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full mb-4"
          >
            Welcome
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Beautifully Simple Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-2xl mx-auto text-xl text-gray-500 mb-10"
          >
            Minimalist, intuitive, and focused on user experience. Inspired by modern design principles.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition duration-200"
            >
              Explore Projects
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Feature {item}</h3>
              <p className="text-gray-500">
                The best products are built with attention to detail, precision, and focus on the user experience.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
