import React, { useRef, useLayoutEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// A simple placeholder mesh for the scene
const PlaceholderMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="royalblue" wireframe />
    </mesh>
  );
};

// The main component containing the 3D scene and scroll-based animations
const HeroScene = () => {
  const component = useRef<HTMLDivElement>(null!);
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const headlineRef = useRef<HTMLHeadingElement>(null!);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the hero section for a duration of 200% of the viewport height
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          start: 'top top',
          end: '+=200%', // Pin for 2x viewport height
          scrub: 1, // Smoothly animate on scroll
          onUpdate: (self) => {
            // Animate camera's z-position from 6 to 1 based on scroll progress
            if (cameraRef.current) {
              gsap.to(cameraRef.current.position, {
                z: gsap.utils.mapRange(0, 1, 6, 1)(self.progress),
                duration: 0.1, // Quick update to follow scrub
              });
            }
          },
          onToggle: (self) => {
            // Pause the canvas loop when the section is not active (unpinned)
            if (canvasRef.current) {
              // A bit of a hacky way to control R3F's loop, ideally use a state
              // This is a simple way to pause rendering
               gsap.set(canvasRef.current, { visibility: self.isActive ? 'visible' : 'hidden' });
            }
          },
        },
      });

      // Fade out the headline at 60% of the scroll progress
      tl.to(
        headlineRef.current,
        {
          opacity: 0,
          y: -50,
        },
        // Start this animation when the main timeline's progress is at 0.6
        // The "<" character ensures it starts at the same time as the previous animation starts progressing
        // but the 0.6 here acts as a progress marker in the scrub timeline
      );
       ScrollTrigger.create({
        trigger: headlineRef.current,
        start: 'top center',
        onUpdate: (self) => {
            const progress = self.progress;
            if (progress > 0.6) {
                 gsap.to(headlineRef.current, { opacity: 0, y: -20, duration: 0.5 });
            } else {
                 gsap.to(headlineRef.current, { opacity: 1, y: 0, duration: 0.5 });
            }
        }
       })


    }, component);

    return () => ctx.revert(); // Cleanup GSAP animations
  }, []);

  return (
    <div ref={component} className="h-screen w-full relative">
      <h1 ref={headlineRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-ink z-10">
        Interactive Linking
      </h1>
      <Suspense fallback={<div className="bg-base w-full h-full" />}>
        <Canvas
          ref={canvasRef}
          className="w-full h-full"
          dpr={[1, 1.5]} // Cap pixelRatio at 1.5 for performance
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 6]} fov={75} />
          <PlaceholderMesh />
          {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default HeroScene; 