
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Code, Database, Users, Brain, GraduationCap } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const About = () => {
  const expertiseAreas = [
    {
      title: "System Engineering",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "We provide System Engineers that are experts in Requirements Gathering, Research and Analysis, System Design and Architecture, Agile Development Methodologies, Product Management and Leadership.",
      features: [
        "Certified Scrum Masters",
        "Thread, Workflow, and Dataflow Engineering",
        "Knowledge Management and Information Sharing Experts",
        "Software and System Testing",
        "Extensive Intelligence Community Experience"
      ]
    },
    {
      title: "Software Engineering",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Our Full-Stack Developers are knowledgeable about the complete life-cycle of systems development and are experienced in building modern, robust, scalable applications on Web, Cloud, Enterprise, and Data-Centric architectures.",
      features: [
        "Software Architecture and Design",
        "Java, C++, C#, Groovy, Go, Python, Scala, Shell Scripting",
        "Linux, Windows, Unix",
        "Scrum, Kanban, Lean Development Methodologies",
        "System Administration and DevOps",
        "Automated Dissemination and Reporting"
      ]
    },
    {
      title: "Automated Intelligence",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "We are proven innovators in developing and leading products that augment human analysts by providing repeatable, scalable, automated solutions to generate intelligence and analysis reports for the National Intelligence Community.",
      features: [
        "Legal, Policy, Oversight, and Compliance Knowledge",
        "Automating Analyst Workflows",
        "Subject Matter Experts on Policy and Technical Capabilities"
      ]
    },
    {
      title: "Cyber Engineering",
      icon: <Shield className="h-8 w-8 text-primary" />,
      description: "Experienced in all facets of Computer Network Operations, including both Offensive and Defensive capabilities, our Cyber Engineers are experts in researching, designing, implementing, and conducting Cyber operations using the latest tradecraft, tools, techniques, and processes in Cybersecurity.",
      features: [
        "Collection, Operations, Analysis, and Reporting Expertise",
        "Information Systems Security",
        "Vulnerability Discovery and Prevention"
      ]
    },
    {
      title: "Data Science and Analytics",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "With expertise in machine learning, analytics, data mining, and cloud and distributed computing, our Data Scientists are able to bring new insights and value to organizations facing the most complex analytical problems.",
      features: [
        "Hadoop MapReduce, Spark",
        "Machine Learning, Deep Learning, Artificial Intelligence",
        "Data Mining and Visualization",
        "Apache NiFi and Dataflow Management"
      ]
    }
  ];

  // Group the cards into top row (first 3) and bottom row (last 2)
  const topRowCards = expertiseAreas.slice(0, 3);
  const bottomRowCards = expertiseAreas.slice(3);

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Our Areas of Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We bring together expertise across multiple disciplines to deliver innovative solutions.
          </motion.p>
        </motion.div>

        {/* Top row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {topRowCards.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
            >
              <PatternCard 
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <PatternCardBody>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.05), duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </PatternCardBody>
              </PatternCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 cards with offset */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-16 lg:px-24">
          {bottomRowCards.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
            >
              <PatternCard 
                className="h-full hover:shadow-lg transition-shadow duration-300"
              >
                <PatternCardBody>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{area.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {area.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.05), duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-sm">{feature}</span>
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
