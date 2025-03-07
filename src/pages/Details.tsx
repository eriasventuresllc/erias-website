
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Timeline } from "@/components/ui/timeline";
import { motion } from 'framer-motion';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const Details = () => {
  const timelineData = [
    {
      title: "2018",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            First contract supporting NSA
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Growth on several additional NSA contracts
          </p>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Expansion to USCC and DHS
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Expansion to NASIC and Air Force
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base mb-4">
            Continued growth at USCC, DHS, NSA
          </p>
        </div>
      ),
    },
  ];

  // Employee data with the specific counts provided
  const employeeData = [
    { year: "2018", count: 4 },
    { year: "2019", count: 5 },
    { year: "2020", count: 6 },
    { year: "2021", count: 11 },
    { year: "2022", count: 30 },
    { year: "2023", count: 45 },
    { year: "2024", count: 49 },
    { year: "2025", count: 60 }
  ];

  const maxEmployeeCount = Math.max(...employeeData.map(item => item.count));

  return (
    <Layout>
      <section className="pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{
              opacity: 0
            }} 
            whileInView={{
              opacity: 1
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.6
            }} 
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold mb-4">Company Details</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our journey and accomplishments over the years.
            </p>
          </motion.div>

          {/* Employee Growth Chart with specific numbers */}
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
            className="mb-16"
          >
            <PatternCard className="rounded-3xl border border-border">
              <PatternCardBody className="p-8">
                <h3 className="text-xl font-semibold mb-6">Employees</h3>
                <div className="h-60 w-full">
                  <div className="relative h-full">
                    {/* Y-axis labels */}
                    <div className="absolute left-0 h-full flex flex-col justify-between">
                      <span className="text-xs text-muted-foreground">60</span>
                      <span className="text-xs text-muted-foreground">50</span>
                      <span className="text-xs text-muted-foreground">40</span>
                      <span className="text-xs text-muted-foreground">30</span>
                      <span className="text-xs text-muted-foreground">20</span>
                      <span className="text-xs text-muted-foreground">10</span>
                      <span className="text-xs text-muted-foreground">0</span>
                    </div>
                    
                    {/* Chart content */}
                    <div className="ml-8 h-full flex items-end justify-between">
                      {employeeData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div 
                            className="w-6 bg-primary/80 rounded-t-sm h-0 transition-height duration-1000" 
                            style={{ height: `${(item.count / maxEmployeeCount) * 100}%` }}
                          ></div>
                          <span className="text-xs mt-1 text-muted-foreground">{item.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  We pride ourselves on a lean business model offering a diverse
                  mission experience across multiple organizations, products and focus
                  areas with proven technical, task, and product leadership which has led to constant growth.
                </p>
              </PatternCardBody>
            </PatternCard>
          </motion.div>

          {/* Timeline */}
          <div className="mb-16">
            <Timeline data={timelineData} />
          </div>

          {/* Our Work Section */}
          <motion.div 
            initial={{
              opacity: 0,
              y: 20
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              delay: 0.2,
              duration: 0.6
            }}
          >
            <PatternCard className="rounded-3xl border border-border mb-8">
              <PatternCardBody className="p-8">
                <h3 className="text-xl font-semibold mb-4">Our Work</h3>
                <p className="text-muted-foreground mb-6">
                  Software engineering, system engineering, data science, and operational and tool support
                  across large enterprise systems, CNO tools, HPC platforms, and analyst applications. We are
                  involved in the creation of automated dissemination and reporting tools which are helping to
                  scale the ability for the agency to produce intelligence, the development of scalable HPC
                  platforms and services, and the creation of cyber tools for usage in operations.
                </p>
                <p className="text-muted-foreground mb-6">
                  Research, create, and implement data science, cyber security, and software development
                  solutions for support of the CISA threat hunting and vulnerability management teams. We
                  provide data science and software development support using languages and technologies such
                  as AWS Redshift, Python, Pandas, Keras, VueJS, Django, PySpark, EMR, Kibana, ElasticSearch,
                  and Jupyter notebooks. Our work includes traffic, malware, and protocol analysis, and
                  cybersecurity research.
                </p>
                <p className="text-muted-foreground">
                  Focused on building a scalable, automated malware analysis solution. We provide data science
                  and software development support using languages and technologies such as Python, Java,
                  various and machine learning libraries.
                </p>
                <p className="text-muted-foreground mt-6">
                  Support software development of various MASINT Enterprise software tools including
                  SPUD, EOS, MCS-PED, and SIP. We provide research and enhancement of existing NASIC tools.
                </p>
              </PatternCardBody>
            </PatternCard>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Details;
