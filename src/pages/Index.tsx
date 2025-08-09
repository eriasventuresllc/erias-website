import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useAnimation } from 'framer-motion';
import { BrainCircuit, Rocket, Lightbulb } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { useIsMobile } from '@/hooks/use-mobile';
import { BarChart4, Target, Network, Shield } from 'lucide-react';
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
      <div className="relative min-h-screen overflow-hidden mx-[calc(50%-50vw)] -mt-4 md:-mt-6">
        <video
          className="absolute inset-0 w-full h-full object-cover object-[right_-8%] scale-[1.01]"
          src="/lovable-uploads/main.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          {/* Top logo over video */}
          <div className="w-full flex justify-center pt-20 md:pt-16">
            <img 
              src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png" 
              alt="Erias Ventures Logo" 
              className="h-20 md:h-24 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
            />
          </div>
          <div className="mt-36 md:mt-48">
            <Hero />
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-8 mt-12 bg-secondary/50 rounded-3xl">
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
            <h2 className="text-3xl font-bold mb-2">Our Core Values</h2>
            <motion.p 
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
                delay: 0.3,
                duration: 0.6
              }} 
              className="text-muted-foreground max-w-2xl mx-auto mt-4"
            >
              Erias Ventures was founded to serve its customers with an <span className="text-lg font-bold text-primary">entrepreneurial mindset</span>. We value open communication, <span className="text-lg font-bold text-primary">taking action</span>, being committed, persevering through challenges and failures, and sharing <span className="text-lg font-bold text-primary">innovative ideas</span>.
            </motion.p>
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
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <ValueCardWithPattern
                icon={<BrainCircuit size={24} className="rotate-90" />}
                title="Entrepreneurial Mindset"
                description="We cultivate an environment where every engineer thinks like an owner, taking initiative, identifying opportunities, and driving solutions forward. This proactive mindset is amplified by the fact that over a third of our team brings direct leadership experience, guiding projects with foresight and accountability."
                delay={0.1}
              />
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <ValueCardWithPattern
                icon={<Rocket size={24} />}
                title="Taking Action"
                description="Ideas are valuable, but execution is paramount. We translate strategy into tangible results by meticulously planning, then acting decisively. Complex problems are systematically broken down into manageable tasks, enabling focused effort and consistent delivery."
                delay={0.2}
              />
            </motion.div>
            
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <ValueCardWithPattern
                icon={<Lightbulb size={24} />}
                title="Innovative Ideas"
                description="We champion a culture of open innovation where diverse perspectives converge. By actively sharing insights and challenging conventions, we collectively build more robust, scalable, and adaptive solutions that directly address the unique and demanding challenges our customers face."
                delay={0.3}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12">
        <div className="max-w-12xl mx-auto px-4">
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12 text-center">
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
                className="mr-2 h-10 w-auto opacity-80" 
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
            }} className="text-muted-foreground mb-6 max-w-6xl mx-auto">
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
            }} className="text-muted-foreground mb-6 max-w-6xl mx-auto">
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
            }} className="text-muted-foreground max-w-6xl mx-auto">
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
          
          {/* Mobile Layout - Circles Top, Banners Below */}
          <div className="block md:hidden">
            <div className="space-y-6">
              {/* Circular Awards (BBJ) */}
              <div className="flex justify-center gap-4">
                <div className="w-24 sm:w-28">
                  <AwardImage 
                    imgSrc="/lovable-uploads/ecafa5aa-5cf2-48a8-bd33-e209a12ee5a8.png" 
                    alt="BBJ Best Places to Work 2024"
                    delay={0.2}
                    width="100px" 
                  />
                </div>
                <div className="w-24 sm:w-28">
                  <AwardImage 
                    imgSrc="/lovable-uploads/4ce0f0cc-66af-4516-9b1a-e72c2d606f06.png" 
                    alt="BBJ Best Places to Work 2023"
                    delay={0.3}
                    width="100px" 
                  />
                </div>
              </div>
              
              {/* Banner Awards (Baltimore Sun + Washington Post) */}
              <div className="grid grid-cols-2 gap-3 justify-items-center">
                <div className="w-24 sm:w-28">
                  <AwardImage 
                    imgSrc="/lovable-uploads/949786dc-8dae-4b47-a5b6-53c5b6882715.png" 
                    alt="Baltimore Sun Top Workplaces 2024"
                    delay={0.4}
                    width="100px" 
                  />
                </div>
                <div className="w-24 sm:w-28">
                  <AwardImage 
                    imgSrc="/lovable-uploads/80498104-2126-40da-928c-517f9170e021.png" 
                    alt="Baltimore Sun Top Workplaces 2023"
                    delay={0.5}
                    width="100px" 
                  />
                </div>
                <div className="w-24 sm:w-28">
                  <AwardImage 
                    imgSrc="/lovable-uploads/af613ec9-b5af-42cb-9d4d-721550972ab0.png" 
                    alt="Washington Post Top Workplaces 2025"
                    delay={0.6}
                    width="100px" 
                  />
                </div>
                
                {/* Glassdoor Rating */}
                <div className="w-24 sm:w-28">
                  <a 
                    href="https://www.glassdoor.com/Overview/Working-at-Erias-Ventures-EI_IE2280176.11,25.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="/lovable-uploads/f29c2c4d-e886-446c-8c03-fca4024a8b87.png" 
                      alt="Glassdoor 5.0 Rating" 
                      className="w-full h-auto object-contain rounded-sm shadow-sm"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Updated to swap 2023 and 2024 Baltimore Sun logos */}
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="hidden md:grid grid-cols-6 gap-4 lg:gap-6 justify-items-center items-center">
            {/* First row: Circle awards */}
            <div className="col-span-1 flex items-center h-full">
              <AwardImage 
                imgSrc="/lovable-uploads/ecafa5aa-5cf2-48a8-bd33-e209a12ee5a8.png" 
                alt="BBJ Best Places to Work 2024"
                delay={0.2}
                width="120px" 
              />
            </div>
            <div className="col-span-1 flex items-center h-full">
              <AwardImage 
                imgSrc="/lovable-uploads/4ce0f0cc-66af-4516-9b1a-e72c2d606f06.png" 
                alt="BBJ Best Places to Work 2023"
                delay={0.3}
                width="120px" 
              />
            </div>
            
            {/* Vertical awards - Swapped 2023 and 2024 */}
            <div className="col-span-1">
              <AwardImage 
                imgSrc="/lovable-uploads/80498104-2126-40da-928c-517f9170e021.png" 
                alt="Baltimore Sun Top Workplaces 2023"
                delay={0.4}
                width="120px" 
              />
            </div>
            <div className="col-span-1">
              <AwardImage 
                imgSrc="/lovable-uploads/949786dc-8dae-4b47-a5b6-53c5b6882715.png" 
                alt="Baltimore Sun Top Workplaces 2024"
                delay={0.5}
                width="120px" 
              />
            </div>
            
            {/* New Washington Post award */}
            <div className="col-span-1">
              <AwardImage 
                imgSrc="/lovable-uploads/af613ec9-b5af-42cb-9d4d-721550972ab0.png" 
                alt="Washington Post Top Workplaces 2025"
                delay={0.6}
                width="120px" 
              />
            </div>
            
            {/* Glassdoor Rating */}
            <div className="col-span-1 flex items-center justify-center">
              <motion.a 
                href="https://www.glassdoor.com/Overview/Working-at-Erias-Ventures-EI_IE2280176.11,25.htm"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <img 
                  src="/lovable-uploads/f29c2c4d-e886-446c-8c03-fca4024a8b87.png" 
                  alt="Glassdoor 5.0 Rating" 
                  width={120} 
                  height="auto"
                  className="rounded-sm shadow-sm"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Customers Section */}
      <section className="py-12 mb-8">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="text-center mb-12">
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
              Our Customers
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
            }} className="text-muted-foreground mb-10 max-w-3xl mx-auto">
              We're proud to partner with leading organizations across government, intelligence, and defense sectors to deliver mission-critical solutions.
            </motion.p>
            
            <div className="mb-8">
              {/* Mobile layout (2-2-1) */}
              <div className="grid grid-cols-2 gap-8 justify-items-center items-center md:hidden">
                {/* First row - 2 logos */}
                <motion.div 
                  className="opacity-90 hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4, scale: { duration: 0.1 } }}
                  whileHover={{ scale: 1.12 }}
                >
                  <a 
                    href="https://www.cisa.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 flex items-center justify-center"
                    title="Cybersecurity and Infrastructure Security Agency"
                  >
                    <img
                      src="/lovable-uploads/Seal_of_Cybersecurity_and_Infrastructure_Security_Agency.svg"
                      alt="Cybersecurity and Infrastructure Security Agency"
                      className="h-24 sm:h-28 w-auto object-contain"
                    />
                  </a>
                </motion.div>
                <motion.div 
                  className="opacity-90 hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4, scale: { duration: 0.1 } }}
                  whileHover={{ scale: 1.12 }}
                >
                  <a 
                    href="https://www.cybercom.mil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 flex items-center justify-center"
                    title="United States Cyber Command"
                  >
                    <img
                      src="/lovable-uploads/Seal_of_the_United_States_Cyber_Command.svg"
                      alt="United States Cyber Command"
                      className="h-24 sm:h-28 w-auto object-contain"
                    />
                  </a>
                </motion.div>
                
                {/* Second row - 2 logos */}
                <motion.div 
                  className="opacity-90 hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4, scale: { duration: 0.1 } }}
                  whileHover={{ scale: 1.12 }}
                >
                  <a 
                    href="https://www.nsa.gov" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 flex items-center justify-center"
                    title="National Security Agency"
                  >
                    <img
                      src="/lovable-uploads/Seal_of_the_U.S._National_Security_Agency.svg.png"
                      alt="National Security Agency"
                      className="h-24 sm:h-28 w-auto object-contain"
                    />
                  </a>
                </motion.div>
                <motion.div 
                  className="opacity-90 hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.4, scale: { duration: 0.1 } }}
                  whileHover={{ scale: 1.12 }}
                >
                  <a 
                    href="https://www.af.mil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 flex items-center justify-center"
                    title="United States Air Force"
                  >
                    <img
                      src="/lovable-uploads/US_Air_Force_Logo_Solid_Colour.svg"
                      alt="US Air Force"
                      className="h-24 sm:h-28 w-auto object-contain"
                    />
                  </a>
                </motion.div>
                
                {/* Third row - 1 centered logo */}
                <motion.div 
                  className="opacity-90 hover:opacity-100 transition-all duration-300 col-span-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.9, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4, scale: { duration: 0.1 } }}
                  whileHover={{ scale: 1.12 }}
                >
                  <a 
                    href="https://www.army.mil" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-4 flex items-center justify-center"
                    title="United States Army"
                  >
                    <img
                      src="/lovable-uploads/Logo_of_the_United_States_Army.svg"
                      alt="US Army"
                      className="h-24 sm:h-28 w-auto object-contain"
                    />
                  </a>
                </motion.div>
              </div>
              
              {/* Desktop layout */}
              <div className="hidden md:block">
                {/* Top row - 3 logos */}
                <div className="grid grid-cols-3 gap-12 justify-items-center items-center mb-12">
                  <motion.div 
                    className="opacity-90 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4, scale: { duration: 0.1 } }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <a 
                      href="https://www.cisa.gov" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 flex items-center justify-center"
                      title="Cybersecurity and Infrastructure Security Agency"
                    >
                      <img
                        src="/lovable-uploads/Seal_of_Cybersecurity_and_Infrastructure_Security_Agency.svg"
                        alt="Cybersecurity and Infrastructure Security Agency"
                        className="h-32 w-auto object-contain"
                      />
                    </a>
                  </motion.div>
                  <motion.div 
                    className="opacity-90 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.4, scale: { duration: 0.1 } }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <a 
                      href="https://www.cybercom.mil" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 flex items-center justify-center"
                      title="United States Cyber Command"
                    >
                      <img
                        src="/lovable-uploads/Seal_of_the_United_States_Cyber_Command.svg"
                        alt="United States Cyber Command"
                        className="h-32 w-auto object-contain"
                      />
                    </a>
                  </motion.div>
                  <motion.div 
                    className="opacity-90 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4, scale: { duration: 0.1 } }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <a 
                      href="https://www.nsa.gov" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 flex items-center justify-center"
                      title="National Security Agency"
                    >
                      <img
                        src="/lovable-uploads/Seal_of_the_U.S._National_Security_Agency.svg.png"
                        alt="National Security Agency"
                        className="h-32 w-auto object-contain"
                      />
                    </a>
                  </motion.div>
                </div>
                
                {/* Bottom row - 2 logos with spacing */}
                <div className="flex justify-center items-center gap-48">
                  <motion.div 
                    className="opacity-90 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.4, scale: { duration: 0.1 } }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <a 
                      href="https://www.af.mil" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 flex items-center justify-center"
                      title="United States Air Force"
                    >
                      <img
                        src="/lovable-uploads/US_Air_Force_Logo_Solid_Colour.svg"
                        alt="US Air Force"
                        className="h-32 w-auto object-contain"
                      />
                    </a>
                  </motion.div>
                  <motion.div 
                    className="opacity-90 hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 0.9, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, duration: 0.4, scale: { duration: 0.1 } }}
                    whileHover={{ scale: 1.12 }}
                  >
                    <a 
                      href="https://www.army.mil" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 flex items-center justify-center"
                      title="United States Army"
                    >
                      <img
                        src="/lovable-uploads/Logo_of_the_United_States_Army.svg"
                        alt="US Army"
                        className="h-32 w-auto object-contain"
                      />
                    </a>
                  </motion.div>
                </div>
              </div>
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
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay,
    duration: 0.6
  }}>
      <PatternCard className="h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-2 hover:border-primary/20 transform hover:scale-[1.02]">
        <PatternCardBody className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
          </div>
          <p className="text-muted-foreground">{description}</p>
        </PatternCardBody>
      </PatternCard>
    </motion.div>;
};

const AwardImage = ({ imgSrc, alt, delay, width }) => {
  return (
    <div 
      className="bg-transparent flex items-center justify-center"
      style={{ maxWidth: width || '150px', height: 'auto' }}
    >
      <img src={imgSrc} alt={alt} className="max-w-full h-auto object-contain" />
    </div>
  );
};

export default Index;
