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
                  distance: 180,
                  links: {
                    opacity: 0.8,
                    color: connectionColor || "#ff6b6b",
                  },
                },
                connect: {
                  distance: 120,
                  links: {
                    opacity: 0.6,
                  },
                },
                bubble: {
                  distance: 100,
                  size: 8,
                  duration: 2,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: particleColor || "#ff6b6b",
              },
              links: {
                color: connectionColor || "#ff6b6b",
                distance: 140,
                enable: true,
                opacity: 0.4,
                width: 1.5,
                triangles: {
                  enable: false,
                },
                shadow: {
                  enable: true,
                  color: connectionColor || "#ff6b6b",
                  blur: 2,
                },
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: speed || 0.8,
                straight: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                },
                value: particleDensity || 80,
              },
              opacity: {
                value: {
                  min: 0.4,
                  max: 0.9,
                },
                animation: {
                  enable: true,
                  speed: speed || 0.8,
                  sync: false,
                },
              },
              shape: {
                type: ["polygon", "circle"],
                polygon: {
                  sides: 6, // Hexagons for cyber look
                },
              },
              size: {
                value: {
                  min: minSize || 2,
                  max: maxSize || 5,
                },
                animation: {
                  enable: true,
                  speed: 2,
                  sync: false,
                },
              },
              stroke: {
                color: connectionColor || "#ff6b6b",
                width: 1,
                opacity: 0.8,
              },
              shadow: {
                enable: true,
                color: particleColor || "#ff6b6b",
                blur: 3,
                offset: {
                  x: 0,
                  y: 0,
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