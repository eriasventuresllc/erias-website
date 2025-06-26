
"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = (props: ParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
  } = props;
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    console.log("Initializing particles engine...");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("Particles engine initialized successfully");
      setInit(true);
    }).catch((error) => {
      console.error("Failed to initialize particles engine:", error);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  const generatedId = useId();
  
  console.log("SparklesCore render - init:", init);
  
  return (
    <motion.div animate={controls} className={cn("opacity-0", className)}>
      {init && (
        <Particles
          id={id || generatedId}
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: background || "transparent",
              },
            },
            fullScreen: {
              enable: false,
              zIndex: 1,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: speed || 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: particleDensity || 150,
              },
              opacity: {
                value: {
                  min: 0.3,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 1,
                  sync: false,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: {
                  min: minSize || 1,
                  max: maxSize || 3,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </motion.div>
  );
};
