import React, { useEffect, useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const LiquidBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Smooth mouse follower for dynamic liquid refraction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 50 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Generate deterministic floating micro-particles
  const particles = useMemo(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      x: (i * 17) % 100,
      y: (i * 23) % 100,
      size: (i % 3) + 2,
      duration: 12 + (i % 10),
      delay: (i % 5) * 1.5,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#060a12]">
      {/* Dynamic Fluid Liquid Gradients & Organic Blobs */}
      <div className="absolute inset-0 opacity-85 mix-blend-screen filter blur-[90px] sm:blur-[130px]">
        {/* Blob 1: Vibrant Indigo / Violet Liquid Core */}
        <div 
          className="liquid-blob-1 absolute top-[-10%] left-[-10%] w-[580px] sm:w-[820px] h-[580px] sm:h-[820px] rounded-full bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-600 opacity-65"
        />

        {/* Blob 2: Electric Cyan / Sky Refractive Bloom */}
        <div 
          className="liquid-blob-2 absolute top-[20%] right-[-15%] w-[540px] sm:w-[760px] h-[540px] sm:h-[760px] rounded-full bg-gradient-to-bl from-cyan-400 via-sky-500 to-blue-600 opacity-60"
        />

        {/* Blob 3: Magenta / Rose Liquid Accent */}
        <div 
          className="liquid-blob-3 absolute bottom-[-10%] left-[15%] w-[550px] sm:w-[720px] h-[550px] sm:h-[720px] rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 opacity-55"
        />

        {/* Blob 4: Warm Amber / Sunbeam Glow (subtle depth) */}
        <div 
          className="liquid-blob-1 absolute top-[50%] left-[8%] w-[450px] sm:w-[620px] h-[450px] sm:h-[620px] rounded-full bg-gradient-to-br from-amber-500/40 via-violet-600/30 to-blue-500/30 opacity-45"
        />

        {/* Blob 5: Bottom Cyan Deep Reservoir */}
        <div 
          className="liquid-blob-2 absolute bottom-[-15%] right-[-5%] w-[480px] sm:w-[680px] h-[480px] sm:h-[680px] rounded-full bg-gradient-to-t from-teal-500 via-cyan-600 to-indigo-700 opacity-50"
        />
      </div>

      {/* Interactive Cursor Fluid Highlight (Two-Layer Dynamic Refraction) */}
      {mounted && (
        <>
          <motion.div
            className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none filter blur-[90px] opacity-35 mix-blend-color-dodge bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500"
            style={{
              x: smoothX,
              y: smoothY,
            }}
          />
          <motion.div
            className="absolute w-[220px] h-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none filter blur-[40px] opacity-25 mix-blend-screen bg-cyan-300"
            style={{
              x: smoothX,
              y: smoothY,
            }}
          />
        </>
      )}

      {/* Floating Micro Stardust Particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.1, y: 0 }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [-15, 15, -15],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            className="absolute rounded-full bg-cyan-200/40 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* Material Design 3 Micro Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* Subtle Radial Vignette for Readability */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060a12]/40 to-[#060a12]/90" />
    </div>
  );
};
