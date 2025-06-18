import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lock, Code, Brain } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const About = () => {
  const expertiseAreas = [
    {
      title: "Software Engineering",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Our Full,Stack Developers and System Engineers are experts in the complete life,cycle of systems development, building modern, robust, scalable applications on Web, Cloud, Enterprise, and Data,Centric architectures with extensive AWS and cloud infrastructure expertise.",
      features: [
        "Requirements Gathering, Research and Analysis",
        "System Design and Architecture",
        "Software Architecture and Design",
        "Java, C++, C#, Groovy, Go, Python, Scala, Shell Scripting",
        "Linux, Windows, Unix",
        "Agile Development Methodologies, Scrum, Kanban, Lean",
        "Product Management and Leadership",
        "Certified Scrum Masters",
        "Thread, Workflow, and Dataflow Engineering",
        "Knowledge Management and Information Sharing",
        "Software and System Testing",
        "System Administration and DevOps",
        "Automated Dissemination and Reporting",
        "AWS Cloud: Building, deploying, and managing solutions with Redshift, EMR, Lambda, EC2, S3, and cloud automation"
      ]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "We are proven innovators in developing automated intelligence solutions that augment human analysts. Our Data Scientists bring expertise in machine learning, analytics, data mining, and cloud computing to solve the most complex analytical problems, with extensive AWS experience for scalable data analytics.",
      features: [
        "Machine Learning, Deep Learning, Artificial Intelligence",
        "Automating Analyst Workflows",
        "Automated Intelligence and Analysis Reports",
        "Data Mining and Visualization",
        "Hadoop MapReduce, Spark",
        "Apache NiFi and Dataflow Management",
        "Repeatable, Scalable, Automated Solutions",
        "AWS services: Redshift, EMR, S3, Lambda, and EC2 for scalable data analytics",
        "Legal, Policy, Oversight, and Compliance Knowledge",
        "Subject Matter Experts on Policy and Technical Capabilities"
      ]
    },
    {
      title: "Cyber Security",
      icon: <Lock className="h-8 w-8 text-primary" />,
      description: "Our Cyber Analysts specialize in comprehensive threat analysis, intelligence gathering, and security assessment. With deep expertise in both offensive and defensive cyber operations, our team delivers critical insights and analysis to support mission,critical decision making.",
      features: [
        "Cyber Threat Intelligence Analysis",
        "Malware Analysis and Reverse Engineering",
        "Network Traffic Analysis and Forensics",
        "Vulnerability Assessment and Analysis",
        "Incident Response and Investigation",
        "Threat Hunting and Detection",
        "Intelligence Report Writing and Briefing",
        "Open Source Intelligence (OSINT) Collection",
        "Adversary Tactics, Techniques, and Procedures (TTPs) Analysis",
        "Risk Assessment and Mitigation Strategies",
        "Cyber Operations Support and Analysis",
        "Security Tool Development and Automation"
      ]
    }
  ];

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
            Our Expertise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            We bring together expertise across three core disciplines to deliver innovative solutions for the most complex challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
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
      </motion.section>
    </Layout>
  );
};

export default About;
