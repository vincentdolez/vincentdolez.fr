"use client";

import { useEffect, useRef } from "react";

/**
 * Generative flow field animation — Perlin-inspired.
 * Monochrome stone (#94A3B8), opacity 0.03–0.08, slow movement (45–90s period).
 * < 20KB JS, zero dependencies.
 * Fallback: static gradient for prefers-reduced-motion.
 */

const PARTICLE_COUNT = 800;
const NOISE_SCALE = 0.003;
const SPEED = 0.3;

// Simple hash-based pseudo-noise (replaces Perlin dependency)
function noise2D(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  const m = Math.sin(x * 269.5 + y * 183.3) * 28947.3127;
  return (
    Math.sin(n + m + x * 0.01 + y * 0.01) * 0.5 +
    Math.sin(n * 0.5 + m * 0.3 + x * 0.005) * 0.3 +
    Math.sin(m * 0.7 + n * 0.2 + y * 0.008) * 0.2
  );
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
    }));

    let time = 0;

    const draw = () => {
      time += 0.002;

      // Very subtle fade — trails persist
      ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(148, 163, 184, 0.04)"; // stone #94A3B8
      ctx.lineWidth = 0.5;

      for (const p of particles) {
        const angle =
          noise2D(p.x * NOISE_SCALE + time, p.y * NOISE_SCALE + time) *
          Math.PI *
          4;

        const prevX = p.x;
        const prevY = p.y;

        p.x += Math.cos(angle) * SPEED;
        p.y += Math.sin(angle) * SPEED;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw trail
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    // Clear canvas to white first
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 50%, #FFFFFF 100%)",
      }}
    />
  );
}
