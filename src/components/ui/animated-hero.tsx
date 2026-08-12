import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/animation";

const FADE_TRANSITION = {
  duration: 0.9,
  ease: EASE_OUT_EXPO,
};

// Smooth clipped roll for the rotating word — short travel + blur reads as
// one continuous motion instead of a bouncy jump.
const WORD_TRANSITION = {
  duration: 0.75,
  ease: EASE_OUT_EXPO,
};

// Split a string into individual letter spans so we can stagger an entry per character.
const LetterReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className, delay = 0 }) => {
  const chars = Array.from(text);
  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          aria-hidden="true"
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.7,
            delay: delay + i * 0.028,
            ease: EASE_OUT_EXPO,
          }}
        >
          {c === " " ? "\u00A0" : c}
        </motion.span>
      ))}
    </span>
  );
};

function HeroContent() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ["Mission", "Growth", "Innovation"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((n) => (n === titles.length - 1 ? 0 : n + 1));
    }, 3600);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="container mx-auto relative z-10">
      <div className="flex gap-4 py-4 lg:py-6 items-center justify-center flex-col min-h-[35vh]">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...FADE_TRANSITION, delay: 0.1 }}
          className="mb-3 inline-flex items-center gap-3 font-mono text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-white/60"
        >
          <span className="relative inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="absolute inset-0 rounded-full bg-primary/60 animate-pulse-ring" />
          </span>
          <span>Mission-Focused <span className="text-primary/70">//</span> Engineering-Led</span>
        </motion.div>

        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular">
            <motion.span
              className="block text-white text-5xl md:text-6xl font-bold relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={FADE_TRANSITION}
            >
              <LetterReveal text="Engineering" delay={0.2} />
            </motion.span>

            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-4">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-primary will-change-transform"
                  initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
                  transition={WORD_TRANSITION}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1, filter: "blur(0px)" }
                      : {
                          y: titleNumber > index ? -44 : 44,
                          opacity: 0,
                          filter: "blur(8px)",
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...FADE_TRANSITION, delay: 0.85 }}
          className="mt-6 max-w-2xl text-center text-base md:text-lg text-white/75 leading-relaxed px-4"
        >
          We engineer software, AI/ML, and cybersecurity solutions for the
          nation's most critical missions.
        </motion.p>
      </div>
    </div>
  );
}

function HeroComponent() {
  return (
    <div className="w-full relative overflow-hidden bg-transparent">
      <HeroContent />
    </div>
  );
}

const Hero = React.memo(HeroComponent);

export { Hero };
