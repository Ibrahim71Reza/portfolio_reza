"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
  color: "blue" | "white" | "amber" | "cyan";
};

type Comet = {
  id: number;
  startX: number;
  startY: number;
  delay: number;
  duration: number;
  distance: number;
};

type Particle = {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

type Cluster = {
  id: number;
  left: number;
  top: number;
  width: number;
  height: number;
};

type GalacticElement = {
  stars: Star[];
  comets: Comet[];
  particles: Particle[];
  clusters: Cluster[];
};

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const [cosmos, setCosmos] = useState<GalacticElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const colors: Array<"blue" | "white" | "amber" | "cyan"> = [
        "blue",
        "white",
        "amber",
        "cyan",
      ];

      const generatedStars = Array.from({ length: 350 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3.5 + 1.2,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 5 + 2,
        delay: Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));

      // COMET UPDATE: Reduced to 3, starting from Top-Right, very rare delays
      const generatedComets = Array.from({ length: 7 }).map((_, i) => ({
        id: i,
        // Start anywhere from off-screen Left (-20%) to off-screen Right (120%)
        startX: Math.random() * 140 - 20, 
        // Start just above the top edge of the screen
        startY: Math.random() * 20 - 20, 
        delay: Math.random() * 30 + i * 15,
        duration: Math.random() * 2 + 4,
        distance: Math.random() * 1000 + 800,
      }));

      const generatedParticles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      }));

      const generatedClusters = Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        width: Math.random() * 40 + 20,
        height: Math.random() * 40 + 20,
      }));

      setCosmos({
        stars: generatedStars,
        comets: generatedComets,
        particles: generatedParticles,
        clusters: generatedClusters,
      });
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!cosmos) return null;

  const getStarColor = (color: Star["color"]) => {
    switch (color) {
      case "blue":
        return "rgba(120,180,255,1)";
      case "amber":
        return "rgba(255,210,120,1)";
      case "cyan":
        return "rgba(120,255,255,1)";
      default:
        return "rgba(255,255,255,1)";
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden z-0 pointer-events-none",
        "bg-[radial-gradient(circle_at_center,#0f172a_0%,#020617_45%,#000000_100%)]",
        className
      )}
    >
      {/* Base cosmic glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,.15),transparent_45%)]" />
      </div>

      {/* Galactic Dust */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59,130,246,.12), transparent 40%),
            radial-gradient(circle at 80% 60%, rgba(168,85,247,.10), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,.03), transparent 70%)
          `,
        }}
      />

      {/* Milky Way Band */}
      <motion.div
        className="absolute left-[-20%] top-[15%] w-[140%] h-[30%] blur-[120px] opacity-20"
        style={{
          transform: "rotate(-18deg)",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.08), rgba(139,92,246,.12), rgba(255,255,255,.08), transparent)",
        }}
        animate={{ opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Nebula Glows */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[160px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,.7) 0%, rgba(99,102,241,0) 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[65%] rounded-full blur-[170px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(168,85,247,.65) 0%, rgba(168,85,247,0) 70%)",
        }}
        animate={{ scale: [1.08, 1, 1.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Star Clusters */}
      {cosmos.clusters.map((cluster) => (
        <div
          key={`cluster-${cluster.id}`}
          className="absolute rounded-full blur-xl"
          style={{
            left: `${cluster.left}%`,
            top: `${cluster.top}%`,
            width: `${cluster.width}px`,
            height: `${cluster.height}px`,
            background: "rgba(255,255,255,0.04)",
          }}
        />
      ))}

      {/* Stars */}
      {cosmos.stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: getStarColor(star.color),
            boxShadow: `0 0 ${star.size * 3}px ${getStarColor(star.color)}`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.85, 1.25, 0.9],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting Stars / Comets */}
      {cosmos.comets.map((comet) => (
        <motion.div
          key={`comet-${comet.id}`}
          className="absolute"
          style={{
            top: `${comet.startY}%`,
            left: `${comet.startX}%`,
            width: "220px",
            height: "2px",
            // COMET UPDATE: Rotated to point Bottom-Left
            rotate: "145deg", 
            transformOrigin: "center center",
          }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            // COMET UPDATE: Move Negative X (Left) and Positive Y (Down)
            x: -comet.distance,
            y: comet.distance * 0.7,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: comet.duration,
            repeat: Infinity,
            delay: comet.delay,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(147,197,253,.45), rgba(255,255,255,1))",
              filter: "blur(1px)",
            }}
          />
          <div
            className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
            style={{
              background: "white",
              boxShadow: "0 0 8px white, 0 0 20px rgba(96,165,250,.8), 0 0 40px rgba(96,165,250,.6)",
            }}
          />
        </motion.div>
      ))}

      {/* Cosmic Dust Particles */}
      {cosmos.particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full blur-sm"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: "4px",
            height: "4px",
            background: "rgba(255,255,255,.15)",
          }}
          animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 1.4, 1] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(circle at center, transparent 45%, rgba(0,0,0,.45) 100%)" }}
      />

      {/* Bottom & Top Fades */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black via-black/40 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/40 to-transparent" />
    </div>
  );
};