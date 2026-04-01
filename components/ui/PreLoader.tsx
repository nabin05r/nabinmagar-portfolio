"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [dimension, setDimension] = useState({width:0, height:0});
  const words = ["Hello", "Hola", "Bonjour", "Ciao", "Olá", "안녕하세요", "こんにちは", "नमस्ते"];
  const slideUp = {
    initial: {
        y: "0"
    },
    exit: {
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay:0.2 }
    }
  }
  const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: { duration:0.2, delay:0.2 }
    }
  }

  useEffect(() => {
    setDimension({width: window.innerWidth, height: window.innerHeight});
  }, []);

  useEffect(() => {
    // disable scroll when preloader starts
    // document.documentElement.style.overflow = "hidden";
     document.body.style.cursor = "wait"; // ← set wait on mount
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "";
      document.body.style.overflow = ""; // ← re-enable
      
      const lenis = (window as any).lenis;
    if(lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    }, 2000);
  }, []);

  useEffect(() => {
    if(wordIndex == words.length) return

    setTimeout(() => {
       setWordIndex(wordIndex + 1); 
    }, wordIndex == 0 ? 1000: 150);
  }, [wordIndex]);

  const curveHeight = dimension.width * 0.416;
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height}
    Q${dimension.width/2} ${dimension.height + curveHeight} 0 ${dimension.height} L0 0
  `;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height}
    Q${dimension.width/2} ${dimension.height} 0 ${dimension.height} L0 0
  `;
  const curve = {
    initial: {
        d: initialPath
    },
    exit: {
        d: targetPath,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay:0.2 }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          variants={slideUp}
          initial = 'initial'
          exit='exit'
          className="w-screen bg-[#162734] fixed top-0 left-0 z-[9999] text-white flex items-center justify-center"
          style={{ height: '100svh' }}
        >
            <motion.p
                variants={opacity} 
                initial="initial" 
                animate="enter" 
                className="text-[clamp(2rem,5vw,4rem)] flex items-center gap-3"
                >
                    <span className="size-2.5 rounded-full bg-white inline-block"/>
                    {words[wordIndex]}
                    
            </motion.p>
            {dimension.width > 0 && (
            <svg className="absolute top-0 left-0 w-full -z-10
             pointer-events-none" style={{ height: dimension.height + curveHeight}}>
                <motion.path
                 variants={curve}
                 initial = 'initial'
                 animate= 'initial'
                 exit='exit'
                 d={initialPath}
                 fill="#162734" 
                   >
                   </motion.path>
            </svg>
            )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
