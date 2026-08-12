import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Lock, Code, Brain } from 'lucide-react';
import { EASE_OUT_EXPO, fadeUp, staggerContainer } from '@/lib/animation';

const expertiseAreas = [
  {
    title: "Software & System Engineering",
    icon: <Code className="h-6 w-6 text-primary" />,
    description:
      "Our team delivers across the entire product lifecycle — from requirements and architecture through deployment. We build robust, scalable solutions for web, cloud, and enterprise environments.",
    groups: [
      {
        label: "Languages & Platforms",
        chips: ["Java", "C++", "Go", "Python", "C#", "Linux", "Windows", "Unix"],
      },
      {
        label: "Practices",
        chips: [
          "Requirements & discovery",
          "System architecture",
          "Agile (Scrum & Kanban)",
          "Testing & QA",
          "DevOps & CI/CD",
        ],
      },
      {
        label: "Cloud",
        chips: ["AWS Lambda", "EC2", "S3", "Redshift", "EMR", "Infrastructure automation"],
      },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="h-6 w-6 text-primary" />,
    description:
      "We design and deploy ML systems that augment analysts — combining machine learning, deep learning, and data engineering on scalable cloud platforms.",
    groups: [
      {
        label: "Modeling",
        chips: [
          "ML & deep learning",
          "Computer vision",
          "Object detection & OCR",
          "LLMs — RAG, fine-tuning, agents",
        ],
      },
      {
        label: "Data Engineering",
        chips: ["Spark", "Hadoop", "Apache NiFi", "Visualization & analytics", "AWS analytics stack"],
      },
      {
        label: "Operations",
        chips: ["Analyst workflow automation", "MLOps & repeatable pipelines", "Governance & compliance"],
      },
    ],
  },
  {
    title: "Cybersecurity",
    icon: <Lock className="h-6 w-6 text-primary" />,
    description:
      "Our team spans offensive and defensive operations to support mission-critical decision making — comprehensive threat analysis, intelligence, and security assessment.",
    groups: [
      {
        label: "Intelligence",
        chips: ["Threat intelligence & reporting", "OSINT collection", "TTP analysis"],
      },
      {
        label: "Analysis",
        chips: [
          "Malware analysis & reverse engineering",
          "Network forensics",
          "Traffic analysis",
          "Vulnerability assessment",
        ],
      },
      {
        label: "Defense",
        chips: ["Incident response", "Threat hunting & detection", "Security automation"],
      },
    ],
  },
];

const About = () => {
  return (
    <Layout>
      <section className="py-8 md:py-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.16, 0.1)}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span variants={fadeUp(0.7)} className="kicker">
            <b>//</b> Core Disciplines
          </motion.span>
          <motion.h1
            variants={fadeUp(0.8, 0.05)}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Expertise</span>
          </motion.h1>
          <motion.div variants={fadeUp(0.7, 0.1)} aria-hidden="true" className="scan-rule mx-auto mt-6" />
          <motion.p
            variants={fadeUp(0.8, 0.12)}
            className="mt-5 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground px-2"
          >
            We bring together expertise across three core disciplines to deliver
            innovative solutions for the most complex challenges.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-1">
          {expertiseAreas.map((area, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={area.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-12% 0px" }}
                variants={staggerContainer(0.14, 0.1)}
                className="group relative border-t border-white/[0.08] last:border-b py-10 md:py-14"
              >
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                  {/* Intro column */}
                  <motion.div
                    variants={fadeUp(0.85)}
                    className={`md:col-span-5 flex flex-col ${reversed ? "md:order-2" : ""}`}
                  >
                    <div className="mb-5">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10 border border-primary/25 transition-colors duration-500 group-hover:bg-primary/15">
                        {area.icon}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-[1.7rem] font-bold tracking-tight leading-snug">
                      {area.title}
                    </h2>
                    <p className="mt-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>

                  {/* Capability tags */}
                  <div className={`md:col-span-7 flex flex-col justify-center gap-6 ${reversed ? "md:order-1" : ""}`}>
                    {area.groups.map((group, gi) => (
                      <motion.div key={group.label} variants={fadeUp(0.8, gi * 0.08)}>
                        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                          <span className="text-primary/60">::</span> {group.label}
                        </div>
                        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
                          {group.chips.map((chip, ci) => (
                            <motion.span
                              key={chip}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: 0.25 + gi * 0.12 + ci * 0.05,
                                duration: 0.65,
                                ease: EASE_OUT_EXPO,
                              }}
                              className="group/chip inline-flex items-baseline gap-1.5 font-mono text-[11px] md:text-xs text-foreground/75 transition-colors duration-300 hover:text-primary cursor-default"
                            >
                              <span className="text-primary/40 transition-colors duration-300 group-hover/chip:text-primary">
                                /
                              </span>
                              {chip}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default About;
