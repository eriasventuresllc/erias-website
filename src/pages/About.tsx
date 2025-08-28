import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { EASE_STANDARD, FADE_SOFT } from '@/lib/animation';
import { Lock, Code, Brain } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const About = () => {
  const expertiseAreas = [
    {
      title: "Software Engineering",
      icon: <Code className="h-6 w-6 text-primary" />,
      description: "Our team deliver across the entire product lifecycle. We build robust, scalable solutions for web, cloud, and enterprise environments.",
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
      description: "Our team designs and deploys ML systems that augment analysts, combining machine learning, deep learning, and data engineering on scalable cloud platforms.",
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
      description: "Our team spans offensive and defensive operations to support mission‑critical decision making. We deliver comprehensive threat analysis, intelligence, and security assessment.",
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
        transition={{ duration: 0.6, ease: EASE_STANDARD as any }}
        className="py-14"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE_STANDARD as any }}
          className="text-center mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_STANDARD as any }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...FADE_SOFT, delay: 0.5 }}
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
              transition={{ delay: 0.3 + (index * 0.15), duration: 0.6, ease: EASE_STANDARD as any }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: EASE_STANDARD as any } }}
              className="group"
            >
              <PatternCard 
                className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border hover:border-primary/20 transform hover:scale-[1.01] supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl border-white/10"
              >
                <PatternCardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/15 transition-all duration-300">
                      {area.icon}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2.5">
                    {area.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...FADE_SOFT, delay: 0.5 + (i * 0.03) }}
                        className="flex items-start gap-2.5 group-hover:translate-x-[2px] transition-transform duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:bg-primary/80 transition-colors duration-300"></div>
                        <span className="text-sm leading-relaxed text-foreground/90">{feature}</span>
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
