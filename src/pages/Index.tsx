import React, { useEffect, useRef } from 'react';
import Layout from '@/components/layout/Layout';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BrainCircuit, Rocket, Lightbulb, ArrowRight } from 'lucide-react';
import { initializeApp } from "firebase/app";
import { Hero } from '@/components/ui/animated-hero';
import CanvasRevealEffect from '@/components/ui/canvas-reveal-effect';
import SpotlightCard from '@/components/ui/spotlight-card';
import MagneticButton from '@/components/ui/magnetic-button';
import {
  EASE_OUT_EXPO,
  EASE_STANDARD,
  fadeUp,
  staggerContainer,
  FADE_SOFT,
  INITIAL_FADE_DOWN,
  ENTER_SOFT,
} from '@/lib/animation';

const firebaseConfig = {
  apiKey: "AIzaSyAqqSwztIW-lkqf_Md4liG86UyNhr899Tc",
  authDomain: "erias-website.firebaseapp.com",
  projectId: "erias-website",
  storageBucket: "erias-website.firebasestorage.app",
  messagingSenderId: "427921251921",
  appId: "1:427921251921:web:4cededa3003e2717116270",
  measurementId: "G-R3GKGJ8QFZ",
};

const app = initializeApp(firebaseConfig);

const customers = [
  {
    name: "Cybersecurity and Infrastructure Security Agency",
    href: "https://www.cisa.gov",
    src: "/lovable-uploads/Seal_of_Cybersecurity_and_Infrastructure_Security_Agency.svg",
  },
  {
    name: "United States Cyber Command",
    href: "https://www.cybercom.mil",
    src: "/lovable-uploads/Seal_of_the_United_States_Cyber_Command.svg",
  },
  {
    name: "National Security Agency",
    href: "https://www.nsa.gov",
    src: "/lovable-uploads/Seal_of_the_U.S._National_Security_Agency.svg.png",
  },
  {
    name: "United States Air Force",
    href: "https://www.af.mil",
    src: "/lovable-uploads/US_Air_Force_Logo_Solid_Colour.svg",
  },
  {
    name: "United States Army",
    href: "https://www.army.mil",
    src: "/lovable-uploads/Logo_of_the_United_States_Army.svg",
  },
  {
    name: "United States Marine Corps",
    href: "https://www.marines.mil",
    src: "/lovable-uploads/Seal_of_the_United_States_Marine_Corps.png",
  },
];

const awards = [
  { src: "/lovable-uploads/4ce0f0cc-66af-4516-9b1a-e72c2d606f06.png", alt: "BBJ Best Places to Work 2023" },
  { src: "/lovable-uploads/ecafa5aa-5cf2-48a8-bd33-e209a12ee5a8.png", alt: "BBJ Best Places to Work 2024" },
  { src: "/lovable-uploads/erias-bbptw-2025.png", alt: "BBJ Best Places to Work 2025" },
  { src: "/lovable-uploads/80498104-2126-40da-928c-517f9170e021.png", alt: "Baltimore Sun Top Workplaces 2023" },
  { src: "/lovable-uploads/949786dc-8dae-4b47-a5b6-53c5b6882715.png", alt: "Baltimore Sun Top Workplaces 2024" },
  {
    src: "/lovable-uploads/baltimore-sun-top-workplaces-2025.png",
    alt: "Baltimore Sun Top Workplaces 2025",
    className: "max-w-[68px] sm:max-w-[74px] md:max-w-[80px]",
  },
  { src: "/lovable-uploads/af613ec9-b5af-42cb-9d4d-721550972ab0.png", alt: "Washington Post Top Workplaces 2025" },
];

const Index = () => {
  // Scroll-linked parallax: hero content drifts up and softly fades as you scroll.
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, -110]);
  const heroOpacity = useTransform(heroProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    if (!import.meta.env.PROD) return;
    (async () => {
      try {
        const { isSupported, getAnalytics } = await import("firebase/analytics");
        const supported = await isSupported();
        if (supported) {
          try {
            getAnalytics(app);
          } catch (_) {
            /* noop */
          }
        }
      } catch (_) {
        /* noop */
      }
    })();
  }, []);

  return (
    <Layout>
      {/* =============================================================== */}
      {/* HERO                                                            */}
      {/* =============================================================== */}
      <div ref={heroRef} className="relative min-h-[92svh] md:min-h-screen overflow-hidden mx-[calc(50%-50vw)] bg-black -mt-24 pt-24">
        {/* Particles background */}
        <div className="absolute inset-0">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 255, 255], [255, 255, 255]]}
            dotSize={6}
            reverse={false}
          />
        </div>

        {/* Soft ambient orbs with a very slow drift */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full blur-[120px] animate-aurora-a"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.35), transparent 60%)" }}
          />
          <div
            className="absolute -bottom-24 right-1/4 h-[24rem] w-[24rem] rounded-full blur-[110px] animate-aurora-b"
            style={{ background: "radial-gradient(circle, hsl(280 70% 60% / 0.22), transparent 60%)" }}
          />
        </div>

        {/* Bottom fade to blend into the next section */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>

        <motion.div className="relative z-50 pb-10 md:pb-14" style={{ y: heroY, opacity: heroOpacity }}>
          {/* Logo */}
          <motion.div
            className="pt-20 md:pt-44 mb-6 md:mb-8 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          >
            <div className="relative">
              <motion.img
                src="/lovable-uploads/4ec1c21d-b6c5-4305-9f4b-6b7658a5a06d.png"
                alt="Erias Ventures Logo"
                className="h-20 sm:h-24 md:h-28 lg:h-[7.2rem] w-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600%] w-[420%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at center, hsl(351 75% 52% / 0.35), hsl(var(--primary) / 0.12) 40%, transparent 68%)",
                }}
              />
            </div>
          </motion.div>

          <div className="pt-1">
            <Hero />
            <motion.div
              className="mt-6 md:mt-8 flex items-center justify-center gap-3 flex-wrap px-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <MagneticButton to="/about" className="group">
                Explore Expertise
              </MagneticButton>
              <MagneticButton to="/benefits" variant="subtle">
                Join Our Team
              </MagneticButton>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =============================================================== */}
      {/* CUSTOMERS                                                        */}
      {/* =============================================================== */}
      <section aria-label="Our customers" className="relative mt-10 md:mt-14 py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.08, 0)}
            className="text-center mb-8 md:mb-10"
          >
            <motion.span variants={fadeUp(0.5)} className="kicker">
              <b>//</b> Trusted Partners
            </motion.span>
            <motion.h2
              variants={fadeUp(0.6, 0.05)}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Our <span className="text-primary">Customers</span>
            </motion.h2>
            <motion.div variants={fadeUp(0.5, 0.08)} aria-hidden="true" className="scan-rule mx-auto mt-5" />
            <motion.p
              variants={fadeUp(0.6, 0.1)}
              className="mt-4 text-muted-foreground max-w-3xl mx-auto text-sm md:text-base px-2"
            >
              We're proud to partner with leading organizations across intelligence and defense
              sectors to deliver mission-critical solutions.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6 md:gap-8 justify-items-center items-center border-y border-white/[0.08] py-7 md:py-9">
            {customers.map((c, idx) => (
              <motion.a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                title={c.name}
                initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.55, ease: EASE_OUT_EXPO }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="group relative p-4 flex items-center justify-center"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)" }}
                />
                <img
                  src={c.src}
                  alt={c.name}
                  className="relative h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform duration-300"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================================== */}
      {/* VALUES                                                          */}
      {/* =============================================================== */}
      <section id="values" className="py-14 md:py-20 relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.08, 0)}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span variants={fadeUp(0.5)} className="kicker">
            <b>//</b> What Drives Us
          </motion.span>
          <motion.h2
            variants={fadeUp(0.6, 0.05)}
            className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Values</span>
          </motion.h2>
          <motion.div variants={fadeUp(0.5, 0.08)} aria-hidden="true" className="scan-rule mx-auto mt-5" />
          <motion.p
            variants={fadeUp(0.6, 0.1)}
            className="mt-4 text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed px-2"
          >
            Erias Ventures was founded to serve its customers with an{' '}
            <span className="font-semibold text-primary">entrepreneurial mindset</span>. We value open communication,{' '}
            <span className="font-semibold text-primary">taking action</span>, being committed, persevering through challenges and failures, and sharing{' '}
            <span className="font-semibold text-primary">innovative ideas</span>.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.12, 0.1)}
          className="max-w-6xl mx-auto px-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {[
            {
              icon: <BrainCircuit size={20} />,
              title: "Entrepreneurial Mindset",
              description:
                "We cultivate an environment where every engineer thinks like an owner—taking initiative, identifying opportunities, and driving solutions forward. Over a third of our team brings direct leadership experience, guiding projects with foresight and accountability.",
            },
            {
              icon: <Rocket size={20} />,
              title: "Taking Action",
              description:
                "Ideas are valuable—execution is paramount. We translate strategy into tangible results through meticulous planning and decisive action. Complex problems are systematically broken down into manageable tasks for consistent delivery.",
            },
            {
              icon: <Lightbulb size={20} />,
              title: "Innovative Ideas",
              description:
                "We champion a culture of open innovation where diverse perspectives converge. By sharing insights and challenging conventions, we collectively build more robust, scalable, and adaptive solutions for our customers' toughest problems.",
            },
          ].map((item) => (
            <motion.div key={item.title} variants={fadeUp(0.7)} className="group h-full">
              <SpotlightCard className="p-6 md:p-7">
                <div className="mb-5">
                  <div className="inline-flex p-2.5 rounded-sm bg-primary/10 border border-primary/20 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-[15px]">{item.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div aria-hidden="true" className="section-divider" />

      {/* =============================================================== */}
      {/* APPROACH                                                        */}
      {/* =============================================================== */}
      <section className="py-12 md:py-16 relative">
        <div className="max-w-6xl mx-auto px-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer(0.08, 0)}
            className="mb-8 text-center"
          >
            <motion.span variants={fadeUp(0.5)} className="kicker">
              <b>//</b> How We Work
            </motion.span>
            <motion.h2
              variants={fadeUp(0.6, 0.05)}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Our <span className="text-primary">Approach</span>
            </motion.h2>
            <motion.div variants={fadeUp(0.5, 0.08)} aria-hidden="true" className="scan-rule mx-auto mt-5" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer(0.12, 0.05)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          >
            {[
              {
                title: "Mission First",
                text: (
                  <>
                    A <span className="font-semibold text-primary">mission-focused</span> company with an emphasis on{' '}
                    <span className="font-semibold text-primary">software and system engineering</span>,{' '}
                    <span className="font-semibold text-primary">AI/ML</span>,{' '}
                    <span className="font-semibold text-primary">data science</span>, and{' '}
                    <span className="font-semibold text-primary">cybersecurity</span>. Our lean structure delivers diverse
                    mission experience across organizations, products, and focus areas.
                  </>
                ),
              },
              {
                title: "Proven Leadership",
                text: (
                  <>
                    Proven technical, task, and product leadership has driven consistent growth. We believe{' '}
                    <span className="font-semibold text-primary">innovation</span> is essential to satisfy the unique
                    problems our customers face as they work to secure the nation.
                  </>
                ),
              },
              {
                title: "Tailored Solutions",
                text: (
                  <>
                    We analyze <span className="font-semibold text-primary">complex mission requirements</span> and deploy
                    specialized engineering teams to build{' '}
                    <span className="font-semibold text-primary">tailored technical solutions</span> that enable critical
                    national-security missions — lean, efficient, and continuously evolving.
                  </>
                ),
              },
            ].map((step) => (
              <motion.div key={step.title} variants={fadeUp(0.7)} className="group relative h-full">
                <div className="hud-ticks relative h-full rounded-sm border border-white/[0.08] bg-white/[0.015] p-6 md:p-7 overflow-hidden transition-all duration-700 ease-out hover:border-white/[0.18] hover:bg-white/[0.03]">
                  <div className="relative">
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =============================================================== */}
      {/* AWARDS                                                          */}
      {/* =============================================================== */}
      <section className="py-12 md:py-16 relative border-y border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer(0.08, 0)}
            className="text-center mb-8 md:mb-10"
          >
            <motion.span variants={fadeUp(0.5)} className="kicker">
              <b>//</b> Recognition
            </motion.span>
            <motion.h2
              variants={fadeUp(0.6, 0.05)}
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            >
              Our <span className="text-primary">Awards</span>
            </motion.h2>
            <motion.div variants={fadeUp(0.5, 0.08)} aria-hidden="true" className="scan-rule mx-auto mt-5" />
            <motion.p
              variants={fadeUp(0.6, 0.1)}
              className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-2"
            >
              Our commitment to excellence has been recognized through these prestigious awards.
            </motion.p>
          </motion.div>

          {/* Unified responsive grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={staggerContainer(0.06, 0.05)}
            className="grid grid-cols-3 md:grid-cols-8 gap-3 md:gap-4 items-center justify-items-center"
          >
            {awards.map((award, i) => (
              <motion.div
                key={award.src}
                variants={fadeUp(0.55)}
                whileHover={{ scale: 1.06, y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative"
              >
                <img
                  src={award.src}
                  alt={award.alt}
                  className={`${
                    award.className ?? "max-w-[92px] sm:max-w-[100px] md:max-w-[110px]"
                  } w-full h-auto object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)] transition-[filter] duration-500 hover:drop-shadow-[0_10px_28px_rgba(0,0,0,0.5)]`}
                  loading={i > 2 ? "lazy" : "eager"}
                />
              </motion.div>
            ))}

            <motion.a
              href="https://www.glassdoor.com/Overview/Working-at-Erias-Ventures-EI_IE2280176.11,25.htm"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp(0.55)}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative col-span-3 md:col-span-1 justify-self-center"
            >
              <img
                src="/lovable-uploads/f29c2c4d-e886-446c-8c03-fca4024a8b87.png"
                alt="Glassdoor 5.0 Rating"
                width={110}
                height="auto"
                className="relative rounded-sm shadow-sm max-w-[110px] w-full h-auto"
                loading="lazy"
              />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <div aria-hidden="true" className="section-divider mb-10 md:mb-14" />

      {/* =============================================================== */}
      {/* CTA BAND                                                         */}
      {/* =============================================================== */}
      <section className="relative mb-10 md:mb-14">
        <motion.div
          initial={INITIAL_FADE_DOWN}
          whileInView={ENTER_SOFT}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ ...FADE_SOFT, ease: EASE_STANDARD }}
          className="hud-ticks relative overflow-hidden rounded-sm border border-white/[0.08] bg-white/[0.015] p-10 md:p-16 text-center"
        >
          {/* Soft ambient glow with slow drift */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full blur-[90px] animate-aurora-a"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.25), transparent 60%)" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-[90px] animate-aurora-b"
            style={{ background: "radial-gradient(circle, hsl(280 70% 60% / 0.18), transparent 60%)" }}
          />

          <div className="relative z-10">
            <div className="kicker mb-4">
              <b>//</b> Join Us
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Ready to build what's <span className="text-primary">next</span>?
            </h3>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-2">
              Join a team of engineers delivering mission-critical solutions for the organizations that matter most.
            </p>
            <div className="mt-6 md:mt-7 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton
                as="a"
                href="https://careers.eriasventures.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                See Open Roles
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Index;
