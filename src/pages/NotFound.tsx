import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO, FADE_SOFT, INITIAL_FADE_DOWN, ENTER_SOFT } from "@/lib/animation";
import Layout from "@/components/layout/Layout";
import MagneticButton from "@/components/ui/magnetic-button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    const timeout = setTimeout(() => {
      navigate("/");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [location.pathname, navigate]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <motion.div
          initial={INITIAL_FADE_DOWN}
          animate={ENTER_SOFT}
          transition={FADE_SOFT}
          className="text-center relative"
        >
          {/* Decorative orb */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-20 -z-10 blur-[100px] opacity-60 rounded-full animate-aurora-a"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.35), transparent 60%)",
            }}
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: EASE_OUT_EXPO }}
            className="inline-flex items-center justify-center rounded-2xl px-10 py-6 glass-strong mb-6 relative overflow-hidden"
          >
            <span className="font-mono text-7xl md:text-8xl font-semibold tracking-tight text-primary">
              404
            </span>
          </motion.div>

          <motion.p
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="text-lg md:text-xl text-muted-foreground mb-3"
          >
            The page you're looking for doesn't exist.
          </motion.p>
          <motion.p
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.55, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="text-sm text-muted-foreground/60 mb-8"
          >
            Redirecting to home in 4 seconds…
          </motion.p>

          <motion.div
            initial={INITIAL_FADE_DOWN}
            animate={ENTER_SOFT}
            transition={{ delay: 0.7, duration: 0.6, ease: EASE_OUT_EXPO }}
            className="flex items-center justify-center"
          >
            <MagneticButton to="/">Return to Home</MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default NotFound;
