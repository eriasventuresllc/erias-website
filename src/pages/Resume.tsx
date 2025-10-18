
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { EASE_STANDARD, FADE_SOFT, INITIAL_FADE_DOWN, ENTER_SOFT } from '@/lib/animation';

const Resume = () => {
  const experiences = [
    {
      id: 1,
      period: '2021 - Present',
      title: 'Senior Product Designer',
      company: 'Design Studio',
      description: 'Lead designer for multiple client projects, focusing on creating intuitive and elegant user interfaces.',
    },
    {
      id: 2,
      period: '2018 - 2021',
      title: 'UX Designer',
      company: 'Tech Company',
      description: 'Redesigned the main product interface, improving user satisfaction by 35% and reducing support tickets by 50%.',
    },
    {
      id: 3,
      period: '2016 - 2018',
      title: 'UI Designer',
      company: 'Digital Agency',
      description: 'Created visual designs for web and mobile applications across a variety of industries.',
    },
  ];

  const education = [
    {
      id: 1,
      period: '2012 - 2016',
      degree: 'Bachelor of Design',
      institution: 'Design University',
      description: 'Focused on user interface design, user experience, and interactive design principles.',
    },
    {
      id: 2,
      period: '2016',
      degree: 'UX Certification',
      institution: 'Design Academy',
      description: 'Advanced coursework in user research, information architecture, and usability testing.',
    },
  ];

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_STANDARD as any }}
        className="py-20"
      >
        <motion.div 
          initial={INITIAL_FADE_DOWN}
          animate={ENTER_SOFT}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE_STANDARD as any }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: EASE_STANDARD as any }}
            className="inline-block px-3 py-1 text-xs font-medium bg-primary/5 text-primary rounded-full mb-4"
          >
            Resume
          </motion.span>
          <motion.h1 
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_STANDARD as any }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Experience & Education
          </motion.h1>
          <motion.p 
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.5, duration: 0.6, ease: EASE_STANDARD as any }}
            className="max-w-2xl mx-auto text-lg text-white/80"
          >
            An overview of my professional background and educational qualifications.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: EASE_STANDARD as any }}
          >
            <h2 className="text-2xl font-bold mb-8 border-b pb-4">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={INITIAL_FADE_DOWN}
                  animate={ENTER_SOFT}
                  transition={{ delay: 0.7 + (index * 0.1), duration: 0.5, ease: EASE_STANDARD as any }}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8"
                >
                  <div>
                    <span className="text-sm font-medium text-white/70">{item.period}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-primary font-medium mb-3">{item.company}</p>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE_STANDARD as any }}
          >
            <h2 className="text-2xl font-bold mb-8 border-b pb-4">Education</h2>
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={INITIAL_FADE_DOWN}
                  animate={ENTER_SOFT}
                  transition={{ delay: 1 + (index * 0.1), duration: 0.5, ease: EASE_STANDARD as any }}
                  className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8"
                >
                  <div>
                    <span className="text-sm font-medium text-white/70">{item.period}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                    <p className="text-primary font-medium mb-3">{item.institution}</p>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Resume;
