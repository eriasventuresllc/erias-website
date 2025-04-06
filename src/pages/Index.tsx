import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare, Rocket, Lightbulb, BarChart4, Target, Network, Shield } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { useIsMobile } from '@/hooks/use-mobile';
import { Hero } from '@/components/ui/animated-hero';

const Index = () => {
  const controls = useAnimation();
  const isMobile = useIsMobile();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      y: 0
    });
  }, [controls]);

  return <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Values Section */}
      <section className="py-12 bg-secondary/50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at Erias Ventures.
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCardWithPattern icon={<MessageSquare size={24} />} title="Open Communication" description="We ensure our employees, partners, and customers are kept informed of decisions and actions. By sharing intentions, we prevent mishaps during mission execution." delay={0.1} />
            
            <ValueCardWithPattern icon={<Rocket size={24} />} title="Taking Action" description="We believe that with proper planning and deliberate focus, even the hardest problems can be dismantled into manageable pieces that can be committed to and worked." delay={0.2} />
            
            <ValueCardWithPattern icon={<Lightbulb size={24} />} title="Innovation" description="We are committed to providing innovative, scalable, and adaptive solutions as we develop and build complex systems and products to satisfy our customers' unique challenges." delay={0.3} />
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-12">
            <motion.h2 initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1,
            duration: 0.6
          }} className="text-3xl font-bold mb-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/08860f36-fa2d-4182-bcba-1e2d2476d92a.png"
                alt="Leaf icon" 
                className="mr-2 h-10 w-auto" 
              />
              Our Approach
            </motion.h2>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2,
            duration: 0.6
          }} className="text-muted-foreground mb-6">
              We are a <span className="text-lg font-bold text-primary">mission-focused</span> company with an emphasis on <span className="text-lg font-bold text-primary">software and system engineering</span>, <span className="text-lg font-bold text-primary">data science</span>, network, target and signals analysis, and <span className="text-lg font-bold text-primary">cyber operations</span>. We pride ourselves on a lean business model offering a diverse mission experience across multiple organizations, products and focus areas.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3,
            duration: 0.6
          }} className="text-muted-foreground mb-6">
              With proven technical, task, and product leadership, our approach has led to constant growth. We believe that <span className="text-lg font-bold text-primary">innovation</span> is needed to satisfy the unique problems that our customers face as they work to secure the nation. That's why we're committed to providing <span className="text-lg font-bold text-primary">innovative, scalable, and adaptive solutions</span>.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }} className="text-muted-foreground">
              We analyze <span className="text-lg font-bold text-primary">complex mission requirements</span> and deploy specialized engineering teams to develop <span className="text-lg font-bold text-primary">tailored technical solutions</span> that enable critical national security missions. Our teams continuously assess and evolve capabilities while maintaining a lean, efficient operational model.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-12 bg-secondary/50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Awards & Recognition</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized through these prestigious awards.
            </p>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 justify-items-center">
            {/* First row: Circle awards side by side */}
            <div className="col-span-1 flex items-center h-full">
              <AwardImage 
                imgSrc="/lovable-uploads/ecafa5aa-5cf2-48a8-bd33-e209a12ee5a8.png" 
                alt="BBJ Best Places to Work 2024"
                delay={0.2}
                width="150px" 
              />
            </div>
            <div className="col-span-1 flex items-center h-full">
              <AwardImage 
                imgSrc="/lovable-uploads/4ce0f0cc-66af-4516-9b1a-e72c2d606f06.png" 
                alt="BBJ Best Places to Work 2023"
                delay={0.3}
                width="150px" 
              />
            </div>
            
            {/* Second row: Vertical awards side by side */}
            <div className="col-span-1">
              <AwardImage 
                imgSrc="/lovable-uploads/80498104-2126-40da-928c-517f9170e021.png" 
                alt="Baltimore Sun Top Workplaces 2023"
                delay={0.4}
                width="150px" 
              />
            </div>
            <div className="col-span-1">
              <AwardImage 
                imgSrc="/lovable-uploads/949786dc-8dae-4b47-a5b6-53c5b6882715.png" 
                alt="Baltimore Sun Top Workplaces 2024"
                delay={0.5}
                width="150px" 
              />
            </div>
            
            {/* Glassdoor Rating */}
            <div className="col-span-2 md:col-span-1 flex items-center justify-center">
              <motion.a 
                href="https://www.glassdoor.com/Overview/Working-at-Erias-Ventures-EI_IE2280176.11,25.htm"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <img 
                  src="/lovable-uploads/f29c2c4d-e886-446c-8c03-fca4024a8b87.png" 
                  alt="Glassdoor 5.0 Rating" 
                  width={150} 
                  height="auto"
                  className="rounded-sm shadow-sm"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>;
};

const ValueCardWithPattern = ({
  icon,
  title,
  description,
  delay
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay,
    duration: 0.6
  }}>
      <PatternCard className="h-full hover:shadow-md transition-shadow">
        <PatternCardBody>
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </PatternCardBody>
      </PatternCard>
    </motion.div>;
};

const AwardImage = ({ imgSrc, alt, delay, width }) => {
  return (
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
        delay,
        duration: 0.6
      }}
      className="bg-transparent flex items-center justify-center"
      style={{ maxWidth: width || '150px', height: 'auto' }}
    >
      <img src={imgSrc} alt={alt} className="max-w-full h-auto object-contain" />
    </motion.div>
  );
};

export default Index;
