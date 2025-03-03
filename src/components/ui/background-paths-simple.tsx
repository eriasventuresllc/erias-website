
"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // Adjusted path generation to make waves higher
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${220 + i * 8}C-${
            380 - i * 5 * position
        } -${220 + i * 8} -${312 - i * 5 * position} ${250 - i * 8} ${
            152 - i * 5 * position
        } ${380 - i * 8}C${616 - i * 5 * position} ${520 - i * 8} ${
            684 - i * 5 * position
        } ${900 - i * 8} ${684 - i * 5 * position} ${900 - i * 8}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none opacity-30">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPathsSimple() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Added mask-image for fade-out effect */}
            <div className="absolute inset-0" 
                 style={{ maskImage: 'linear-gradient(to bottom, rgba(255,255,255,1) 40%, rgba(255,255,255,0) 90%)' }}>
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
}
