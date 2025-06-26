
"use client";
import React, { useId } from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

type CyberParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  particleSize?: number;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
  connectionColor?: string;
};

export const CyberParticles = (props: CyberParticlesProps) => {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity,
    connectionColor,
  } = props;
  const [init, setInit] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    console.log("Initializing cyber particles engine...");
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      console.log("Cyber particles engine initialized successfully");
      setInit(true);
    }).catch((error) => {
      console.error("Failed to initialize cyber particles engine:", error);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log("Cyber particles loaded:", container);
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      });
    }
  };

  const generatedId = useId();
  
  console.log("CyberParticles render - init:", init);
  
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
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: ["push", "bubble"],
                },
                onHover: {
                  enable: true,
                  mode: ["grab", "connect"],
                },
                resize: {
                  delay: 0.5,
                  enable: true,
                },
              },
              modes: {
                push: {
                  quantity: 3,
                },
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.9,
                    color: "#00ffff",
                  },
                },
                connect: {
                  distance: 150,
                  links: {
                    opacity: 0.7,
                  },
                },
                bubble: {
                  distance: 120,
                  size: 12,
                  duration: 2,
                },
                repulse: {
                  distance: 180,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#ff6b6b", "#00ffff", "#ff4444", "#44ffff", "#ff0000"],
              },
              links: {
                color: "#00ffff",
                distance: 160,
                enable: true,
                opacity: 0.6,
                width: 2,
                triangles: {
                  enable: true,
                  color: "#ff6b6b",
                  opacity: 0.1,
                },
                shadow: {
                  enable: true,
                  color: "#00ffff",
                  blur: 5,
                },
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: speed || 1.5,
                straight: false,
                attract: {
                  enable: true,
                  rotate: {
                    x: 800,
                    y: 1600,
                  },
                },
                trail: {
                  enable: true,
                  length: 6,
                  fill: {
                    color: "#000000",
                  },
                },
              },
              number: {
                density: {
                  enable: true,
                },
                value: particleDensity || 70,
              },
              opacity: {
                value: {
                  min: 0.3,
                  max: 1,
                },
                animation: {
                  enable: true,
                  speed: speed || 1.2,
                  sync: false,
                },
              },
              shape: {
                type: ["triangle", "edge", "star"],
                triangle: {
                  sides: 3,
                },
                star: {
                  sides: 5,
                },
                edge: {
                  sides: 3,
                },
              },
              size: {
                value: {
                  min: minSize || 3,
                  max: maxSize || 8,
                },
                animation: {
                  enable: true,
                  speed: 3,
                  sync: false,
                },
              },
              stroke: {
                color: ["#ff6b6b", "#00ffff"],
                width: 2,
                opacity: 0.9,
              },
              shadow: {
                enable: true,
                color: ["#ff6b6b", "#00ffff"],
                blur: 10,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              life: {
                duration: {
                  sync: false,
                  value: 3,
                },
                count: 0,
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                  value: 1,
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
