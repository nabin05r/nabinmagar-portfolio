"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export const LenisProvider = () => {
  useEffect(() => {
    const lenis = new Lenis();
    (window as any).lenis = lenis; // expose lenis globally
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // ← cleanup on unmount
    };
  }, []);

  return null; // renders nothing
};