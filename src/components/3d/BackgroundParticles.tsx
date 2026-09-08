// 'use client';

// import { useEffect, useRef } from 'react';

// export default function BackgroundParticles() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let animationId: number;
//     const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

//     const resize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const createParticles = () => {
//       const count = Math.floor(window.innerWidth / 10);
//       for (let i = 0; i < count; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           size: Math.random() * 1.5,
//           speedX: (Math.random() - 0.5) * 0.5,
//           speedY: (Math.random() - 0.5) * 0.5,
//           opacity: Math.random() * 0.5 + 0.2,
//         });
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.x += p.speedX;
//         p.y += p.speedY;
//         if (p.x > canvas.width) p.x = 0;
//         if (p.x < 0) p.x = canvas.width;
//         if (p.y > canvas.height) p.y = 0;
//         if (p.y < 0) p.y = canvas.height;

//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
//         ctx.fill();
//       });
//       animationId = requestAnimationFrame(animate);
//     };

//     resize();
//     createParticles();
//     animate();

//     window.addEventListener('resize', () => {
//       resize();
//       particles.length = 0;
//       createParticles();
//     });

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', () => {});
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 z-0 pointer-events-none"
//       aria-hidden="true"
//     />
//   );
// }



















'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const count = Math.floor(window.innerWidth / 10);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // ✅ Dynamically select particle color based on the theme
      // Checks if the 'dark' class is present on the <html> element
      const isDark = document.documentElement.classList.contains('dark');
      // 255,255,255 for dark mode (white particles)
      // 15,15,35 for light mode (very dark purple/navy particles)
      const particleColor = isDark ? '255, 255, 255' : '15, 15, 35'; 

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      particles.length = 0;
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}