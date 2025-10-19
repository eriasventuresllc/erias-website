
import React from 'react';
import Layout from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { FADE_SOFT } from '@/lib/animation';
import { EASE_STANDARD } from '@/lib/animation';
import { Wallet, HeartPulse, Smile } from 'lucide-react';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Normalize benefit bullets to sentence case while preserving acronyms and numbers.
function formatBenefitText(benefit: string): string {
  const trimmed = (benefit || "").trim();
  if (!trimmed) return trimmed;
  const startsWithLetter = /^[A-Za-z]/.test(trimmed);

  const words = trimmed.split(/\s+/).map((word) => {
    // Preserve obvious acronyms or tokens with symbols commonly uppercased (e.g., AD&D)
    if (/^[A-Z0-9&+/.-]+$/.test(word) && /[A-Z]/.test(word)) {
      return word; // keep as-is
    }
    return word.toLowerCase();
  });

  const sentence = words.join(" ");
  if (!startsWithLetter) return sentence; // e.g., "100% company paid ..."
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

const teamImages = [
  {
    src: "/lovable-uploads/62ca1c37-324b-4c81-b8a9-5bd90eb839e8.png",
    alt: "Erias Ventures Team Event - Outdoor Group"
  },
  {
    src: "/lovable-uploads/a04fc258-052d-433c-93fe-5698ed2e43fd.png",
    alt: "Erias Ventures Team Dinner"
  },
  {
    src: "/lovable-uploads/22ac3038-7685-4cf9-b20d-d4c2c0cb8d6b.png",
    alt: "Erias Ventures Orioles Event"
  },
  {
    src: "/lovable-uploads/5938ba44-3970-44c2-bced-8160200c5995.png",
    alt: "Erias Ventures Holiday Dinner"
  }
];

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

// Removed bullet lowercasing to preserve provided capitalization

const Careers = () => {
  const [emblaApi, setEmblaApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!emblaApi) return;
    const intervalId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 10000);
    return () => window.clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <Layout>
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_STANDARD as any }}
        className="py-16"
      >
        {/* Benefits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: EASE_STANDARD as any }}
          className="text-center mb-16"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_STANDARD as any }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Our Benefits
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...FADE_SOFT, delay: 0.5 }}
            className="max-w-3xl mx-auto text-lg text-muted-foreground"
          >
            We are looking for engineers seeking to grow their careers, who want to become part of a <span className="font-bold text-primary">strong</span>, <span className="font-bold text-primary">technical-minded</span>, <span className="font-bold text-primary">mission-focused</span> company seeking to change how the government does business. Our team members are provided a complete package of <span className="font-bold text-primary">wealth</span>, <span className="font-bold text-primary">health</span>, and <span className="font-bold text-primary">happiness</span> benefits. Take the next step and join the team!
          </motion.p>
          
          
        </motion.div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefitCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + (index * 0.1), duration: 0.5, ease: EASE_STANDARD as any }}
            >
              <PatternCard className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border hover:border-primary/20 transform hover:scale-[1.01] supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl border-white/10">
                <PatternCardBody className="p-6">
                  <div className="flex items-center mb-4 justify-between gap-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 group-hover:from-primary/25 group-hover:to-primary/15 transition-all duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-2.5">
                    {category.benefits.map((benefit, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ...FADE_SOFT, delay: 0.8 + (i * 0.05) }}
                        className="flex items-start gap-2.5 group-hover:translate-x-[2px] transition-transform duration-200"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 group-hover:bg-primary/80 transition-colors duration-300"></div>
                        <span className="text-sm leading-relaxed text-foreground/90">{formatBenefitText(benefit)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </PatternCardBody>
              </PatternCard>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.section>

      {/* Our Team Section with Carousel */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Meet the dedicated professionals behind our mission-critical solutions.
          </p>
        </div>
        <Carousel opts={{ loop: true }} setApi={setEmblaApi} className="relative w-full max-w-3xl mx-auto">
          <CarouselContent>
            {teamImages.map((img, idx) => (
              <CarouselItem key={img.src} className="flex justify-center items-center">
                <div className="w-full h-80 sm:h-[420px] md:h-[460px] flex justify-center items-center overflow-hidden rounded-2xl border border-white/10 supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-all duration-500">
                  <img
                    src={img.src}
                    alt={img.alt.replace(/ - /g, ", ")}
                    className="object-cover object-center w-full h-full transition-transform duration-500 hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur-xl border border-white/10" />
          <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur-xl border border-white/10" />
        </Carousel>
      </section>
    </Layout>
  );
};

export default Careers;

