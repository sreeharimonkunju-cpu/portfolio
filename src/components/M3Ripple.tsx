import React, { useState, useLayoutEffect } from 'react';

interface RippleItem {
  x: number;
  y: number;
  size: number;
  id: number;
}

export const useRipple = () => {
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 1.5;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple: RippleItem = {
      x,
      y,
      size,
      id: Date.now() + Math.random(),
    };

    setRipples((prev) => [...prev, newRipple]);
  };

  useLayoutEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples((prev) => prev.slice(1));
      }, 650);
      return () => clearTimeout(timer);
    }
  }, [ripples]);

  const RippleContainer = () => (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="m3-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </span>
  );

  return { createRipple, RippleContainer };
};
