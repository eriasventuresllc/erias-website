
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useAnimation } from 'framer-motion';
import { MessageSquare, Rocket, Lightbulb, BarChart4, Target, Network, Shield } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

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
      {/* Hero Banner with enhanced animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mb-6 mt-6 flex justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.02, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/10 rounded-xl blur-xl opacity-70 animate-pulse-glow"></div>
          <img 
            src="/lovable-uploads/fb5e1708-fcb6-4f00-bf24-4b624a4ffcd5.png" 
            alt="Erias Ventures Banner" 
            className={`${isMobile ? 'w-[75%]' : 'w-[45%]'} h-auto object-cover rounded-xl relative z-10 shadow-xl`}
          />
        </motion.div>
      </motion.div>

      {/* Hero Section with enhanced text animations */}
      <section className="py-10 md:py-[50px]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center">
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="max-w-3xl mx-auto text-xl text-muted-foreground mb-10 relative">
            <span className="relative inline-block">
              <span className="relative z-10">
                Erias Ventures was founded to serve its customers with an entrepreneurial mindset. 
                We value open communication, taking action, being committed, persevering through challenges 
                and failures, and sharing innovative ideas.
              </span>
              <motion.span 
                className="absolute bottom-0 left-0 h-1 bg-primary/20 rounded-full w-0 z-0"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.2, ease: "easeInOut" }}
              />
            </span>
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section with enhanced card effects */}
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
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Our Core Values</h2>
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

      {/* Approach Section with enhanced visual elements */}
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
        }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
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
            }} className="text-3xl font-bold mb-6 flex items-center">
                <motion.span 
                  className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  Our Approach
                </motion.span>
                <motion.img 
                  src="/lovable-uploads/08860f36-fa2d-4182-bcba-1e2d2476d92a.png"
                  alt="Leaf icon" 
                  className="ml-2 h-8 w-auto" 
                  whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.2 }}
                  transition={{ duration: 1.5, ease: "easeInOut", repeat: 0 }}
                />
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
            }} className="text-muted-foreground mb-6 border-l-2 border-primary/30 pl-4">
                We are a mission-focused company with an emphasis on software and system engineering, data science, network, target and signals analysis, and cyber operations. We pride ourselves on a lean business model offering a diverse mission experience across multiple organizations, products and focus areas.
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
            }} className="text-muted-foreground border-l-2 border-primary/30 pl-4">
                With proven technical, task, and product leadership, our approach has led to constant growth. We believe that innovation is needed to satisfy the unique problems that our customers face as they work to secure the nation. That's why we're committed to providing innovative, scalable, and adaptive solutions.
              </motion.p>
            </div>
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4,
            duration: 0.6
          }}>
              <PatternCard className="rounded-3xl border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <PatternCardBody className="p-10 relative z-10">
                  <motion.h3 
                    className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    Strategic Development
                  </motion.h3>
                  <ul className="space-y-4">
                    <StrategyItem text="Analyze complex mission requirements through multi-dimensional assessment frameworks" />
                    <StrategyItem text="Deploy specialized engineering teams with deep domain expertise and technical proficiency" />
                    <StrategyItem text="Develop tailored technical solutions using cutting-edge methodologies and technologies" />
                    <StrategyItem text="Enable critical national security missions through innovative operational capabilities" />
                    <StrategyItem text="Continuously assess and evolve capabilities to address emerging challenges" />
                    <StrategyItem text="Maintain lean, efficient operational model for maximum impact and resource optimization" />
                  </ul>
                </PatternCardBody>
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                />
              </PatternCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section with enhanced animations */}
      <section className="py-12 bg-secondary/50 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">Awards & Recognition</h2>
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
        }} className="flex flex-wrap justify-center items-center gap-8">
            <AwardImage 
              imgSrc="/lovable-uploads/ecafa5aa-5cf2-48a8-bd33-e209a12ee5a8.png" 
              alt="BBJ Best Places to Work 2024"
              delay={0.2}
              width="150px" 
            />
            <AwardImage 
              imgSrc="/lovable-uploads/80498104-2126-40da-928c-517f9170e021.png" 
              alt="Baltimore Sun Top Workplaces 2023"
              delay={0.4}
              width="150px" 
            />
            <AwardImage 
              imgSrc="/lovable-uploads/949786dc-8dae-4b47-a5b6-53c5b6882715.png" 
              alt="Baltimore Sun Top Workplaces 2024"
              delay={0.3}
              width="150px" 
            />
            <AwardImage 
              imgSrc="/lovable-uploads/4ce0f0cc-66af-4516-9b1a-e72c2d606f06.png" 
              alt="BBJ Best Places to Work 2023"
              delay={0.5}
              width="150px" 
            />
          </motion.div>
        </div>
      </section>
    </Layout>;
};

// Enhanced ValueCard with nicer hover effects
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
      <PatternCard className="h-full hover:shadow-lg transition-shadow duration-500 group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <PatternCardBody className="relative z-10">
          <motion.div 
            className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary/20 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5 
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <motion.h3 
            className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </PatternCardBody>
      </PatternCard>
    </motion.div>;
};

// New StrategyItem component with animation
const StrategyItem = ({ text }) => {
  return (
    <motion.li 
      className="flex items-start"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-1 overflow-hidden">
        <motion.div 
          className="w-2 h-2 bg-primary rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            ease: "easeInOut"
          }}
        />
      </div>
      <span className="text-card-foreground">{text}</span>
    </motion.li>
  );
};

// Enhanced AwardImage with hover effects
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
      whileHover={{ 
        scale: 1.1,
        rotate: [-1, 1, -1, 0],
        transition: { duration: 0.5 }
      }}
      className="bg-transparent flex items-center justify-center p-4 rounded-lg relative"
      style={{ maxWidth: width || '150px', height: 'auto' }}
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <img src={imgSrc} alt={alt} className={cn("max-w-full h-auto object-contain relative z-10", "img-transition")} />
    </motion.div>
  );
};

export default Index;
