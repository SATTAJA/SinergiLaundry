"use client";

import { useRef, useState } from "react";

export default function HeroImage() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(800px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-out",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex-1 flex justify-center items-center order-1 md:order-2 animate-fade-in delay-300 w-full"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src="hero.png"
        alt="Hero Image"
        className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[966px] h-auto object-contain"
        style={style}
      />
    </div>
  );
}
