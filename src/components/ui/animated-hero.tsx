import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "./sparkles-core";

// Consistent animation constants
const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 30
};

const FADE_TRANSITION = {
  duration: 0.7,
  ease: "easeOut"
};

function HeroContent() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Mission", "Growth"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="container mx-auto relative z-10">
      <div className="flex gap-4 py-16 lg:py-20 items-center justify-center flex-col min-h-[60vh]">
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular">
            <motion.span
              className="text-white text-5xl md:text-6xl font-bold relative inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={FADE_TRANSITION}
            >
              Engineering
            </motion.span>
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-4">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-white"
                  initial={{ opacity: 0, y: -100 }}
                  transition={SPRING_TRANSITION}
                  animate={
                    titleNumber === index
                      ? {
                          y: 0,
                          opacity: 1,
                        }
                      : {
                          y: titleNumber > index ? -150 : 150,
                          opacity: 0,
                        }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

function HeroComponent() {
  return (
    <div className="w-full min-h-[60vh] relative rounded-3xl overflow-hidden bg-background">
      {/* Starry Night Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={1}
          maxSize={4}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#ffffff"
          speed={1}
        />
      </div>

      <HeroContent />
    </div>
  );
}

const Hero = React.memo(HeroComponent);

export { Hero };
