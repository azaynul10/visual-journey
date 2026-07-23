import React, { useRef, useEffect } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Reduce particle count on mobile
    const isMobile = window.innerWidth < 768;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Reduced star counts (~50% fewer)
    const layers = isMobile
      ? [{ count: 20, speed: 0.08, size: 1.2, opacity: 0.4 }]
      : [
          { count: 40, speed: 0.08, size: 1.2, opacity: 0.4 },
          { count: 20, speed: 0.2,  size: 1.8, opacity: 0.6 },
          { count: 8,  speed: 0.4,  size: 2.5, opacity: 0.8 },
        ];

    const stars = layers.flatMap(layer =>
      Array.from({ length: layer.count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        baseX: Math.random() * canvas.width,
        baseY: Math.random() * canvas.height,
        size: layer.size + Math.random() * 0.5,
        speed: layer.speed,
        opacity: layer.opacity,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.005 + Math.random() * 0.01,
        hue: Math.random() > 0.5 ? 30 + Math.random() * 15 : 220 + Math.random() * 20,
        sat: 70 + Math.random() * 30,
      }))
    );

    // Fewer nebulae on mobile
    const nebulae = isMobile
      ? [{ x: 0.5, y: 0.4, radius: 300, hue: 220, phase: 0 }]
      : [
          { x: 0.2, y: 0.3, radius: 400, hue: 220, phase: 0 },
          { x: 0.8, y: 0.7, radius: 350, hue: 30,  phase: Math.PI },
          { x: 0.5, y: 0.1, radius: 300, hue: 270, phase: Math.PI / 2 },
        ];

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw nebulae (using only opacity/transform, no layout props)
      nebulae.forEach(neb => {
        const breathe = Math.sin(time * 0.003 + neb.phase) * 0.5 + 0.5;
        const cx = neb.x * canvas.width + Math.sin(time * 0.001 + neb.phase) * 50;
        const cy = neb.y * canvas.height + Math.cos(time * 0.0015 + neb.phase) * 30;
        const r = neb.radius + breathe * 80;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        const alpha = 0.06 + breathe * 0.04;
        grad.addColorStop(0, `hsla(${neb.hue}, 80%, 50%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${neb.hue}, 60%, 30%, ${alpha * 0.4})`);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Draw stars
      stars.forEach(star => {
        star.x = star.baseX + Math.sin(time * 0.0005 * star.speed) * (30 / star.speed);
        star.y = star.baseY + Math.cos(time * 0.0003 * star.speed) * (20 / star.speed);

        if (star.x > canvas.width) star.baseX -= canvas.width;
        if (star.x < 0) star.baseX += canvas.width;
        if (star.y > canvas.height) star.baseY -= canvas.height;
        if (star.y < 0) star.baseY += canvas.height;

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;

        // Simplified: skip glow on mobile
        if (!isMobile) {
          const glowGrad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          glowGrad.addColorStop(0, `hsla(${star.hue}, ${star.sat}%, 80%, ${alpha})`);
          glowGrad.addColorStop(0.4, `hsla(${star.hue}, ${star.sat}%, 60%, ${alpha * 0.3})`);
          glowGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `hsla(${star.hue}, ${star.sat}%, 95%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.12 }}
      aria-hidden="true"
    />
  );
}
