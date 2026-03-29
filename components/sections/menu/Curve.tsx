"use client";
import { motion } from "framer-motion";

export const Curve = () => {
  const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`
  
  const pathAnimation = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    }
  }
  
  return (
    <svg className="svgCurve">
      <motion.path
        variants={pathAnimation}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};