'use client';
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

export const FramerMagnetic = ({ 
  children, 
  max = 10  // ← max pixels it can move
}: { 
  children: ReactNode, 
  strength?: number,
  max?: number 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const rawX = (clientX - (left + width / 2)) 
    const rawY = (clientY - (top + height / 2)) 

    // ← clamp movement to max pixels
    const x = Math.max(-max, Math.min(max, rawX));
    const y = Math.max(-max, Math.min(max, rawY));

    setPosition({ x, y });
  }

  const mouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  }

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 80, damping: 10, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};