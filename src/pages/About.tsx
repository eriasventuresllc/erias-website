import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lock, Code, Brain } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const About = () => {
  const expertiseAreas = [
    {
      title: "Software Engineering",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "Our full‑stack engineers and systems architects deliver across the entire lifecycle, building robust, scalable solutions for web, cloud, and enterprise environments with deep AWS and cloud infrastructure expertise.",
      features: [
        "Requirements analysis and discovery",
        "System architecture and design",
        "Front‑end and back‑end development (Java, C++, Go, Python, C#)",
        "Linux, Windows, and Unix platforms",
        "Agile delivery (Scrum, Kanban)",
        "Testing and quality engineering",
        "DevOps and CI/CD",
        "AWS (Lambda, EC2, S3, Redshift, EMR) and automation"
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="h-6 w-6 text-primary" />,
      description: "We design and deploy ML systems that augment analysts, combining machine learning, deep learning, and data engineering on scalable cloud platforms.",
      features: [
        "Model development (ML/DL) and evaluation",
        "Workflow automation for analysts",
        "Data pipelines and processing (Spark, Hadoop)",
        "Dataflow orchestration (Apache NiFi)",
        "Visualization and analytics",
        "AWS analytics stack (Redshift, EMR, S3, Lambda, EC2)",
        "MLOps and repeatable pipelines",
        "Governance, oversight, and compliance"
      ]
    },
    {
      title: "Cybersecurity",
      icon: <Lock className="h-6 w-6 text-primary" />,
      description: "We deliver comprehensive threat analysis, intelligence, and security assessment. Our team spans offensive and defensive operations to support mission‑critical decision making.",
      features: [
        "Threat intelligence and reporting",
        "Malware analysis and reverse engineering",
        "Network forensics and traffic analysis",
        "Vulnerability assessment and remediation",
        "Incident response and investigation",
        "Threat hunting and detection",
        "OSINT collection",
        "TTP analysis and security automation"
      ]
    }
  ];

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-14"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
          >
            We bring together expertise across three core disciplines to deliver innovative solutions for the most complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.15), duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <PatternCard 
                className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-primary/20 transform hover:scale-[1.02] bg-white/5 backdrop-blur-xl border-white/10"
              >
                <PatternCardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2.5">
                    {area.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.03), duration: 0.3 }}
                        className="flex items-start gap-2.5 group-hover:translate-x-1 transition-transform duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:bg-primary/80 transition-colors duration-300"></div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </PatternCardBody>
              </PatternCard>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;
