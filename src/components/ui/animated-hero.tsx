
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Software", "System", "Data", "Cyber", "Target"],
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
        <div className="flex gap-4 py-8 lg:py-16 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
            <h1 className="text-3xl md:text-5xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-primary">Engineering </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-2 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
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
              <span className="text-primary"> Mission/Growth</span>
            </h1>

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
