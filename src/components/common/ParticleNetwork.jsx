// src/components/common/ParticleNetwork.jsx
import { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let particles = [];
    let animationId;
    let width = 0;
    let height = 0;

    const CONFIG = {
      density: 0.00008,        // particles per px² → ~70 on 1080p
      maxParticles: 90,
      minParticles: 30,
      speed: 0.25,             // very slow drift
      particleRadius: 1.2,
      linkDistance: 140,       // max distance to draw a line
      mouseRadius: 180,        // cursor influence radius
      particleColor: 'rgba(148, 163, 184, 0.55)',   // slate-400
      lineColor: '148, 163, 184',                    // slate-400 rgb
      cursorLineColor: '251, 191, 36',               // amber-400
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Recalculate particle count for new viewport
      const target = Math.floor(width * height * CONFIG.density);
      const count = Math.max(
        CONFIG.minParticles,
        Math.min(CONFIG.maxParticles, target)
      );
      initParticles(count);
    };

    const initParticles = (count) => {
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.speed,
        vy: (Math.random() - 0.5) * CONFIG.speed,
      }));
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouseRef.current;

      // Update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONFIG.linkDistance * CONFIG.linkDistance) {
            const dist = Math.sqrt(distSq);
            const alpha =
              (1 - dist / CONFIG.linkDistance) * 0.18; // max 18% opacity
            ctx.strokeStyle = `rgba(${CONFIG.lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw cursor links (amber accent)
      if (mx !== null && my !== null) {
        for (const p of particles) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONFIG.mouseRadius * CONFIG.mouseRadius) {
            const dist = Math.sqrt(distSq);
            const alpha =
              (1 - dist / CONFIG.mouseRadius) * 0.35;
            ctx.strokeStyle = `rgba(${CONFIG.cursorLineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
      ctx.fillStyle = CONFIG.particleColor;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, CONFIG.particleRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;