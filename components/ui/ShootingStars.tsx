"use client";

import { useEffect, useRef } from "react";

export function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createShootingStar = () => {
      const star = document.createElement("div");
      star.style.position = "absolute";
      star.style.width = "2px";
      star.style.height = "2px";
      star.style.background = "white";
      star.style.borderRadius = "50%";
      star.style.boxShadow = "0 0 6px 2px rgba(255, 255, 255, 0.8)";

      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.5;
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = startY + 300 + Math.random() * 200;

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;

      const trail = document.createElement("div");
      trail.style.position = "absolute";
      trail.style.left = `${startX}px`;
      trail.style.top = `${startY}px`;
      trail.style.width = "1px";
      trail.style.height = "100px";
      trail.style.background =
        "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)";
      trail.style.transformOrigin = "top center";

      const angle = Math.atan2(endY - startY, endX - startX);
      trail.style.transform = `rotate(${angle}rad)`;

      container.appendChild(star);
      container.appendChild(trail);

      const duration = 1000 + Math.random() * 1000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const currentX = startX + (endX - startX) * progress;
        const currentY = startY + (endY - startY) * progress;

        star.style.left = `${currentX}px`;
        star.style.top = `${currentY}px`;
        trail.style.left = `${currentX}px`;
        trail.style.top = `${currentY}px`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          star.remove();
          trail.remove();
        }
      };

      requestAnimationFrame(animate);
    };

    const interval = setInterval(createShootingStar, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}


