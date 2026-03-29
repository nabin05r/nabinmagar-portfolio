import gsap from "gsap";
import { useRef } from "react";

interface ButtonAnimationOptions {
  enterTop?: string;
  exitTop?: string;
  enterWidth?: string;
  exitWidth?: string;
}

export const useButtonAnimation = (options: ButtonAnimationOptions = {}) => {
  const {
    enterTop = "-25%",
    exitTop = "-150%",
    enterWidth = "150%",
    exitWidth = "125%"
  } = options;

  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const manageMouseEnter = () => {
    if (!timeline.current && circle.current) {
      timeline.current = gsap.timeline({ paused: true });
      timeline.current
        .to(circle.current, { top: enterTop, width: enterWidth, duration: 0.4, ease: "power3.in" }, "enter")
        .to(circle.current, { top: exitTop, width: exitWidth, duration: 0.25 }, "exit");
    }
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
      timeoutId.current = null;
    }
    timeline.current?.tweenFromTo("enter", "exit");
  }

  const manageMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  }

  return { circle, manageMouseEnter, manageMouseLeave };
}