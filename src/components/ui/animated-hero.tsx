
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-12 lg:py-24 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">
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
