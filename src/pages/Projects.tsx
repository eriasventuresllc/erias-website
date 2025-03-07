
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Wallet, HeartPulse, Smile } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";

const Careers = () => {
  const benefitCategories = [
    {
      id: 1,
      title: "Wealth Benefits",
      description: "We provide an industry-leading compensation package so that team members can invest in their future.",
      icon: <Wallet className="h-8 w-8 text-primary" />,
      benefits: [
        "Above Market Pay",
        "Annual Profit Sharing Bonuses",
        "11% Roth or Traditional 401k with Immediate Vesting and Contributions",
        "Spot Bonuses for Awesome Customer Support, Business Development, and Operational Support",
        "Quarterly Bonuses for Employee Referrals",
        "Professional Development Bonuses for Certificates and Degrees"
      ]
    },
    {
      id: 2,
      title: "Health Benefits",
      description: "We provide a complete set of insurance benefits to keep our team healthy and protected.",
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      benefits: [
        "Company Subsidized Medical Coverage",
        "100% Company Paid Vision Coverage",
        "100% Company Paid Dental Coverage",
        "100% Company Paid Long Term Disability",
        "100% Company Paid Short Term Disability Insurance",
        "100% Company Paid Life Insurance",
        "100% Company Paid AD&D Insurance",
        "Monthly Wellness Reimbursement"
      ]
    },
    {
      id: 3,
      title: "Happiness Benefits",
      description: "We provide a collection of benefits for personal growth and happiness.",
      icon: <Smile className="h-8 w-8 text-primary" />,
      benefits: [
        "Paid Time Off with Flexible Work Schedules",
        "Birthday Off to Celebrate",
        "Monthly Internet Reimbursement",
        "Company Paid Professional Development and Training",
        "Technology and Productivity Reimbursements for Equipment and Supplies",
        "Amazon Prime Membership",
        "Swag and Gifts",
        "Morale Building and Company Events to Celebrate our Successes and Build our Community"
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
            Careers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
          >
            We are looking for engineers seeking to grow their careers and that want to become part of a strong, technical-minded, mission-focused company seeking to change how the government does business. Team members are provided a complete package of wealth, health, and happiness benefits. Take the next step and view our current openings.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8"
          >
            <a href="https://careers.eriasventures.com/" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
              View Current Openings
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1), duration: 0.5 }}
            >
              <PatternCard className="h-full hover:shadow-lg transition-shadow duration-300">
                <PatternCardBody>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (i * 0.05), duration: 0.3 }}
                        className="flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2"></div>
                        <span className="text-sm">{benefit}</span>
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

export default Careers;
