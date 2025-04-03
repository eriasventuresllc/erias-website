
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Growth", "Mission"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 lg:py-24 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col items-center">
              <img 
                src="/lovable-uploads/erias-name-dark.svg" 
                alt="Erias Ventures" 
                className="w-full max-w-md mb-3"
              />
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-5xl md:text-7xl text-spektr-cyan-50"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
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
            </div>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Erias Ventures was founded to serve its customers with an entrepreneurial mindset. We value open communication, taking action, being committed, persevering through challenges and failures, and sharing innovative ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
