
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Award, MessageSquare, Rocket, Lightbulb, PenTool } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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
            Welcome to Erias Ventures
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Entrepreneurial Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-3xl mx-auto text-xl text-gray-500 mb-10"
          >
            Erias Ventures was founded to serve its customers with an entrepreneurial mindset. 
            We value open communication, taking action, being committed, persevering through challenges 
            and failures, and sharing innovative ideas.
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
              Our Services
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-200"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-3xl mx-auto">
              These principles guide everything we do at Erias Ventures.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <ValueCard 
              icon={<MessageSquare size={24} />}
              title="Open Communication"
              description="We ensure our employees, partners, and customers are kept informed of decisions and actions. By sharing intentions, we prevent mishaps during mission execution."
              delay={0.1}
            />
            
            <ValueCard 
              icon={<Rocket size={24} />}
              title="Taking Action"
              description="We believe that with proper planning and deliberate focus, even the hardest problems can be dismantled into manageable pieces that can be committed to and worked."
              delay={0.2}
            />
            
            <ValueCard 
              icon={<Lightbulb size={24} />}
              title="Innovation"
              description="We are committed to providing innovative, scalable, and adaptive solutions as we develop and build complex systems and products to satisfy our customers' unique challenges."
              delay={0.3}
            />
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-3xl font-bold mb-6"
              >
                Our Approach
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-500 mb-6"
              >
                Taking action requires commitment and perseverance. Here at Erias Ventures, we believe that with proper planning and deliberate focus even the hardest problems can be dismantled into manageable pieces that can be committed to and worked.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-gray-500"
              >
                Innovation is needed to satisfy the unique problems that our customers face as they work to secure the nation. That is why we are committed to providing innovative, scalable, and adaptive solutions as we develop and build complex systems and products.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-primary/5 rounded-3xl p-10 border border-primary/10 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                <PenTool className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Strategic Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Identify core challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Create actionable plans</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Execute with precision</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Continuously innovate</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized through these prestigious awards.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AwardCard 
              title="Data Works MD DAX Conf"
              delay={0.1}
            />
            <AwardCard 
              title="BBJ Best Places to Work 2024"
              delay={0.2}
            />
            <AwardCard 
              title="BBJ Best Places to Work 2023"
              delay={0.3}
            />
            <AwardCard 
              title="Baltimore Top Workplaces 2023/24"
              delay={0.4}
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-500">
        {description}
      </p>
    </motion.div>
  );
};

// Award Card Component
const AwardCard = ({ title, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center"
    >
      <Award className="w-10 h-10 text-primary mb-4" />
      <h3 className="text-base font-medium text-center">{title}</h3>
    </motion.div>
  );
};

export default Index;
