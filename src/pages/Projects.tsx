import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Wallet, HeartPulse, Smile, Check, ArrowRight } from 'lucide-react';
import SpotlightCard from '@/components/ui/spotlight-card';
import MagneticButton from '@/components/ui/magnetic-button';
import AnimatedCounter from '@/components/ui/animated-counter';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  EASE_OUT_EXPO,
  fadeUp,
  staggerContainer,
  INITIAL_FADE_DOWN,
  ENTER_SOFT,
  FADE_SOFT,
} from '@/lib/animation';

const teamImages = [
  { src: "/lovable-uploads/62ca1c37-324b-4c81-b8a9-5bd90eb839e8.png", alt: "Erias Ventures Team Event - Outdoor Group" },
  { src: "/lovable-uploads/a04fc258-052d-433c-93fe-5698ed2e43fd.png", alt: "Erias Ventures Team Dinner" },
  { src: "/lovable-uploads/22ac3038-7685-4cf9-b20d-d4c2c0cb8d6b.png", alt: "Erias Ventures Orioles Event" },
  { src: "/lovable-uploads/5938ba44-3970-44c2-bced-8160200c5995.png", alt: "Erias Ventures Holiday Dinner" },
];

const highlights = [
  {
    value: 11,
    suffix: "%",
    label: "401(k) contribution with immediate vesting",
  },
  {
    value: 100,
    suffix: "%",
    label: "Company-paid dental, vision, life & disability",
  },
  {
    value: null,
    text: "Annual",
    label: "Profit sharing bonuses for every team member",
  },
];

const benefitCategories = [
  {
    id: 1,
    title: "Wealth",
    tagline: "Invest in your future",
    description: "An industry-leading compensation package so team members can build lasting wealth.",
    icon: <Wallet className="h-5 w-5 text-primary" />,
    benefits: [
      "Above-market pay",
      "Annual profit sharing",
      "11% 401(k) — immediate vesting",
      "Spot bonuses",
      "Referral bonuses",
      "Cert & degree bonuses",
    ],
  },
  {
    id: 2,
    title: "Health",
    tagline: "Coverage without the fine print",
    description: "A complete set of insurance benefits to keep our team healthy and protected.",
    icon: <HeartPulse className="h-5 w-5 text-primary" />,
    benefits: [
      "Subsidized medical",
      "100% paid vision",
      "100% paid dental",
      "100% paid life & AD&D",
      "100% paid short & long-term disability",
      "Monthly wellness stipend",
    ],
  },
  {
    id: 3,
    title: "Happiness",
    tagline: "Room to live your life",
    description: "A collection of benefits for personal growth, flexibility, and community.",
    icon: <Smile className="h-5 w-5 text-primary" />,
    benefits: [
      "PTO + flexible schedules",
      "Your birthday off",
      "Internet reimbursement",
      "Paid professional development",
      "Tech & equipment budget",
      "Amazon Prime membership",
      "Swag & gifts",
      "Morale & community events",
    ],
  },
];

const Careers = () => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 8000);
    return () => window.clearInterval(intervalId);
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <Layout>
      <section className="py-8 md:py-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.16, 0.1)}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span variants={fadeUp(0.7)} className="kicker">
            <b>//</b> Benefits &amp; Perks
          </motion.span>
          <motion.h1
            variants={fadeUp(0.8, 0.05)}
            className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Our <span className="text-primary">Benefits</span>
          </motion.h1>
          <motion.div variants={fadeUp(0.7, 0.1)} aria-hidden="true" className="scan-rule mx-auto mt-6" />
          <motion.p
            variants={fadeUp(0.8, 0.12)}
            className="mt-5 max-w-3xl mx-auto text-sm md:text-base text-muted-foreground px-2"
          >
            We are looking for engineers seeking to grow their careers as part of a{' '}
            <span className="font-semibold text-primary">strong</span>,{' '}
            <span className="font-semibold text-primary">technical-minded</span>,{' '}
            <span className="font-semibold text-primary">mission-focused</span> company
            changing how the government does business.
          </motion.p>

          <motion.div
            variants={fadeUp(0.8, 0.2)}
            className="mt-7 flex items-center justify-center gap-3 flex-wrap"
          >
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
          </motion.div>
        </motion.div>

        {/* Headline numbers */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12% 0px" }}
          variants={staggerContainer(0.16, 0.1)}
          className="max-w-6xl mx-auto px-1 mb-10 md:mb-14 grid grid-cols-1 sm:grid-cols-3 border-y border-white/[0.08]"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.label}
              variants={fadeUp(0.8)}
              className="relative flex flex-col items-center text-center gap-1.5 py-7 md:py-9 px-4 sm:border-l sm:border-white/[0.07] sm:first:border-l-0"
            >
              <div className="font-mono text-3xl md:text-4xl font-semibold tracking-tight text-white">
                {h.value !== null ? (
                  <AnimatedCounter value={h.value} suffix={h.suffix} />
                ) : (
                  h.text
                )}
              </div>
              <div className="text-xs md:text-[13px] text-muted-foreground leading-snug max-w-[16rem]">{h.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefit categories */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.18, 0.1)}
          className="max-w-6xl mx-auto px-1 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {benefitCategories.map((category, index) => (
            <motion.div key={category.id} variants={fadeUp(0.85)} className="group h-full">
              <SpotlightCard className="p-6 md:p-7 flex flex-col">
                <div className="mb-5">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 border border-primary/25 transition-colors duration-500 group-hover:bg-primary/15">
                    {category.icon}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-semibold leading-snug group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  <span className="text-primary/60">::</span> {category.tagline}
                </div>

                <p className="text-muted-foreground text-sm my-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 content-start flex-1">
                  {category.benefits.map((benefit, i) => (
                    <motion.span
                      key={benefit}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.25 + index * 0.1 + i * 0.05,
                        duration: 0.65,
                        ease: EASE_OUT_EXPO,
                      }}
                      className="inline-flex items-center gap-2 self-start rounded-[3px] border border-white/[0.12] bg-white/[0.02] pl-2 pr-3 py-1.5 font-mono text-[11px] md:text-xs text-foreground/80 transition-colors duration-300 hover:border-primary/50 hover:bg-primary/[0.07] hover:text-primary cursor-default"
                    >
                      <Check size={11} strokeWidth={2.5} className="text-primary shrink-0" />
                      {benefit}
                    </motion.span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div aria-hidden="true" className="section-divider" />

      {/* Our Team */}
      <section className="max-w-5xl mx-auto px-1 pt-10 md:pt-14 pb-12">
        <motion.div
          initial={INITIAL_FADE_DOWN}
          whileInView={ENTER_SOFT}
          viewport={{ once: true }}
          transition={FADE_SOFT}
          className="text-center mb-8 md:mb-10"
        >
          <span className="kicker">
            <b>//</b> Culture
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
            Our <span className="text-primary">Team</span>
          </h2>
          <div aria-hidden="true" className="scan-rule mx-auto mt-5" />
          <p className="mt-4 text-sm md:text-base text-muted-foreground px-2">
            Meet the dedicated professionals behind our mission-critical solutions.
          </p>
        </motion.div>

        <Carousel opts={{ loop: true }} setApi={setEmblaApi} className="relative w-full max-w-3xl mx-auto">
          <CarouselContent>
            {teamImages.map((img) => (
              <CarouselItem key={img.src} className="flex justify-center items-center">
                <div className="w-full h-64 sm:h-[380px] md:h-[440px] flex justify-center items-center overflow-hidden rounded-sm border border-white/[0.1] shadow-[0_16px_40px_-20px_rgba(0,0,0,0.55)] transition-all duration-500 relative">
                  <img
                    src={img.src}
                    alt={img.alt.replace(/ - /g, ", ")}
                    className="object-cover object-center w-full h-full transition-transform duration-700 hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur-md border border-white/10 hover:bg-primary/20 hover:text-white transition-colors" />
          <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur-md border border-white/10 hover:bg-primary/20 hover:text-white transition-colors" />
        </Carousel>

        <div className="mt-5 flex items-center justify-center gap-2">
          {teamImages.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={
                "h-1.5 rounded-full transition-all duration-300 " +
                (i === current ? "w-6 bg-primary" : "w-2 bg-white/20 hover:bg-white/40")
              }
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
