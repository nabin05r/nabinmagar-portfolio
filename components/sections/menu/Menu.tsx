"use client";
import "./Menu.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Curve } from "./Curve";
import { usePathname } from "next/navigation";
import { menuSlide, slide, scale } from "./menuVariants";
import { FramerMagnetic } from "@/components/ui/FramerMagnetic";
import { FooterLinks } from "@/components/ui/FooterLinks";
import { useButtonAnimation } from "@/app/hooks/useButtonAnimation";
import { navItems } from "@/data/navItems";

export const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isVisible, setIsVisible] = useState(false); // For Hamburger icon visibility
  const { scrollY } = useScroll();
  const { circle, manageMouseEnter, manageMouseLeave } = useButtonAnimation({
    enterTop: "0%",
    exitTop: "-100%",
    enterWidth: "100%",
    exitWidth: "100%",
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const deviceHeight = window.innerWidth < 768 ? 200 : 400;
    if (latest > deviceHeight) {
      setIsVisible(true); // show after 100vh or 100px scroll
    } else {
      setIsVisible(false);
      setIsActive(false); // close menu when scrolling back to top
    }
  });

  // Listen for openMenu Event for showing Menu on Mobile when click on "Menu tag"
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleOpen = () => {
      setIsActive(true);
      // wait for menu to fully open before showing hamburger
      timeoutId = setTimeout(() => {
        if (window.innerWidth < 768) {
          setIsVisible(true);
        }
      }, 300);
    };
    window.addEventListener("openMenu", handleOpen);
    return () => {
      window.removeEventListener("openMenu", handleOpen);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768 && !isActive) {
      // only hide if the device inner Height is less than 200
      if (scrollY.get() < 200) {
        setIsVisible(false); // ← hide hamburger when menu closes on mobile
      }
    }
  }, [isActive]);

  // Sync selectedIndicator with pathname changes with Header navs
  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  // Close menu on route change
  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={() => setIsActive(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "#101828",
          opacity: isActive ? 0.35 : 0,
          pointerEvents: isActive ? "all" : "none",
          transition: "opacity 0.8s cubic-bezier(.7, 0, .2, 1)",
          zIndex: 15,
        }}
      />

      {/* Button shows only after scrolling 100px */}
      <AnimatePresence>
        {isVisible && (
          <div className="fixed right-3.5 md:right-5 top-3 md:top-5 z-30">
            <FramerMagnetic>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 0.4,
                  // ease: [0.76, 0, 0.24, 1],
                  ease: [0.25, 0.46, 0.45, 0.94],
                  // scale: { type: "spring", stiffness: 200, damping: 20 }
                }}
                className="menu-button"
                onClick={() => setIsActive(!isActive)}
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
              >
                <div className={`burger ${isActive ? "burgerActive" : ""}`} />
                <div ref={circle} className="circle"></div>
              </motion.div>
            </FramerMagnetic>
          </div>
        )}
      </AnimatePresence>

      {/* NavMenuItems */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={menuSlide}
            animate="enter"
            exit="exit"
            initial="initial"
            className="menu"
          >
            <div className="body">
              <div
                className="nav"
                onMouseLeave={() => {
                  setSelectedIndicator(pathname);
                }}
              >
                <div className="header">
                  <p className="mb-4">Navigation</p>
                </div>
                {navItems.map((item, index) => (
                  <FramerMagnetic key={index} max={15}>
                    <motion.div
                      key={index}
                      custom={index}
                      variants={slide}
                      animate="enter"
                      exit="exit"
                      initial="initial"
                      className="link"
                      onMouseEnter={() => {
                        setSelectedIndicator(item.href);
                      }}
                    >
                      <motion.div
                        variants={scale}
                        animate={
                          selectedIndicator === item.href ? "open" : "closed"
                        }
                        className="indicator"
                      ></motion.div>
                      <Link href={item.href}>{item.title}</Link>
                    </motion.div>
                  </FramerMagnetic>
                ))}
              </div>
              <div>
                <p className="uppercase text-[11px] text-[rgb(153,153,153)] mb-2">
                  Socials
                </p>
                <div className="footer">
                  <FooterLinks />
                </div>
              </div>
            </div>
            <Curve />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
