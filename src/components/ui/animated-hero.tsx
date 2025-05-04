
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

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

function HeroComponent() {
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-4 py-2 lg:py-10 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular">
              <motion.span 
                className="text-primary text-5xl md:text-6xl font-bold"
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
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
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
    </div>
  );
}

const Hero = React.memo(HeroComponent);

export { Hero };
