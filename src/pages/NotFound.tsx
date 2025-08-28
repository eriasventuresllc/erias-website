import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { EASE_STANDARD, FADE_SOFT, INITIAL_FADE_DOWN, ENTER_SOFT } from "@/lib/animation";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div 
          initial={INITIAL_FADE_DOWN}
          animate={ENTER_SOFT}
          transition={FADE_SOFT}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: EASE_STANDARD as any }}
            className="inline-flex items-center justify-center rounded-2xl px-10 py-6 border border-white/10 supports-[backdrop-filter]:bg-white/5 bg-white/0 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.18)] mb-6"
          >
            <span className="text-7xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              404
            </span>
          </motion.div>
          <motion.p 
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_STANDARD as any }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            The page you're looking for doesn't exist.
          </motion.p>
          <motion.div
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.6, duration: 0.6, ease: EASE_STANDARD as any }}
          >
            <a 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              Return to Home
            </a>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
