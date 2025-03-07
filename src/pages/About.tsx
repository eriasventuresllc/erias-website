
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Shield, Code, Database, Users, Search, Settings, Brain, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

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
      ],
      colors: ["#f0f9ff", "#bae6fd", "#0ea5e9"] // Blue theme
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
      ],
      colors: ["#ecfdf5", "#a7f3d0", "#10b981"] // Green theme
    },
    {
      title: "Automated Intelligence",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "We are proven innovators in developing and leading products that augment human analysts by providing repeatable, scalable, automated solutions to generate intelligence and analysis reports for the National Intelligence Community.",
      features: [
        "Legal, Policy, Oversight, and Compliance Knowledge",
        "Automating Analyst Workflows",
        "Subject Matter Experts on Policy and Technical Capabilities"
      ],
      colors: ["#fdf4ff", "#e9d5ff", "#a855f7"] // Purple theme
    },
    {
      title: "Cyber Engineering",
      icon: <Shield className="h-8 w-8 text-primary" />,
      description: "Experienced in all facets of Computer Network Operations, including both Offensive and Defensive capabilities, our Cyber Engineers are experts in researching, designing, implementing, and conducting Cyber operations using the latest tradecraft, tools, techniques, and processes in Cybersecurity.",
      features: [
        "Collection, Operations, Analysis, and Reporting Expertise",
        "Information Systems Security",
        "Vulnerability Discovery and Prevention"
      ],
      colors: ["#fff1f2", "#fda4af", "#f43f5e"] // Red theme
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
      ],
      colors: ["#fffbeb", "#fde68a", "#f59e0b"] // Yellow/Gold theme
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
              className="relative"
            >
              <Card className="h-full overflow-hidden border-border hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm relative">
                <PixelCanvas
                  gap={10}
                  speed={25}
                  colors={area.colors}
                  variant="icon"
                />
                <CardHeader className="pb-2 relative z-10">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      {area.icon}
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground text-sm">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </Layout>
  );
};

export default About;
