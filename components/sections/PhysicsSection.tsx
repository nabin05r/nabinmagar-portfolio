"use client";
import { useEffect, useRef } from "react";
import Matter from "matter-js";
import goodVibe from "@/assets/images/good-vibes.png";

const { Engine, Bodies, Body, Mouse, MouseConstraint, Composite, Events } =
  Matter;

const STICKERS = [
  { src: goodVibe.src, size: 60 },
  { src: "/stickers/ideas.svg", size: 80 },
  { src: "/stickers/lets-imagine.svg", size: 130 },
  { src: "/stickers/outside-box.svg", size: 100 },
  { src: "/stickers/good-day.svg", size: 130 },
  { src: "/stickers/to-moon.svg", size: 110 },
  { src: "/stickers/wizard.svg", size: 180 },
  { src: "/stickers/peace.svg", size: 70 },
  { src: "/stickers/hello-world.svg", size: 90 },
];

export const PhysicsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const engineRef = useRef<Matter.Engine | null>(null);
  const cardEls = useRef<HTMLElement[]>([]);

  const destroyPhysics = () => {
    cancelAnimationFrame(rafRef.current);
    clearTimeout(timeoutRef.current);
    if (engineRef.current) {
      Engine.clear(engineRef.current);
      Composite.clear(engineRef.current.world, false);
    }
    cardEls.current.forEach((el) => el.remove());
    cardEls.current = [];
    engineRef.current = null;
  };

  const initPhysics = () => {
    const section = sectionRef.current!;
    const container = containerRef.current!;
    const W = section.offsetWidth;
    const H = section.offsetHeight;

    // ── Engine ──────────────────────────────────────────────────────────────
    const engine = Engine.create({ gravity: { y: 0.8 } });
    engineRef.current = engine;
    const world = engine.world;

    // ── Walls — thick like CodePen ───────────────────────────────────────────
    const wallOpts = { isStatic: true, restitution: 0.8, friction: 0.1 };
    const ground = Bodies.rectangle(W / 2, H + 400, W, 800, wallOpts);
    const wallLeft = Bodies.rectangle(-400, H / 2, 800, H + 1600, wallOpts);
    const wallRight = Bodies.rectangle(W + 400, H / 2, 800, H + 1600, wallOpts);
    const ceiling = Bodies.rectangle(W / 2, -800, W, 800, wallOpts);
    Composite.add(world, [ground, wallLeft, wallRight, ceiling]);

    // ── Create DOM elements ──────────────────────────────────────────────────
    type StickerEl = { el: HTMLElement; size: number };
    const stickerEls: StickerEl[] = [];

    STICKERS.forEach(({ src, size }) => {
      const el = document.createElement("div");
      el.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        cursor: grab;
        user-select: none;
        pointer-events: auto;
        opacity: 0;  /* ← hidden initially */
      `;

      const img = document.createElement("img");
      img.src = src;
      img.style.cssText = "width:100%;height:100%;object-fit:contain;";
      img.draggable = false;
      el.appendChild(img);

      el.addEventListener("mousedown", () => (el.style.cursor = "grabbing"));
      el.addEventListener("mouseup", () => (el.style.cursor = "grab"));

      container.appendChild(el);
      cardEls.current.push(el);
      stickerEls.push({ el, size });
    });

    // ── Wait for Tailwind paint, then measure + create bodies ────────────────
    timeoutRef.current = setTimeout(() => {
      type CardData = { el: HTMLElement; body: Matter.Body; size: number };
      const cardData: CardData[] = [];

      stickerEls.forEach(({ el, size }, i) => {
        // Spawn above container, staggered — exactly like CodePen
        const left = Math.random() * (W - size) + size / 2;
        const y = -(size / 2 + i * 30); // simple stagger, stays within ceiling

        const body = Bodies.circle(left, y, size / 2, {
          restitution: 0.8,
          friction: 0.3,
          frictionAir: 0.01,
          density: 0.002,
        });

        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.1);
        Composite.add(world, body);
        cardData.push({ el, body, size });
      });

      // ── Mouse constraint ───────────────────────────────────────────────────
      const mouse = Mouse.create(container);
      (mouse as any).element.removeEventListener(
        "mousewheel",
        (mouse as any).mousewheel,
      );
      (mouse as any).element.removeEventListener(
        "DOMMouseScroll",
        (mouse as any).mousewheel,
      );

      const mouseConstraint = MouseConstraint.create(engine, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: false } },
      });
      Composite.add(world, mouseConstraint);

      // ── Speed cap — exactly like CodePen ──────────────────────────────────
      Events.on(engine, "beforeUpdate", () => {
        const MAX = 70;
        cardData.forEach(({ body }) => {
          const v = body.velocity;
          if (v.x > MAX) Body.setVelocity(body, { x: MAX, y: v.y });
          if (v.x < -MAX) Body.setVelocity(body, { x: -MAX, y: v.y });
          if (v.y > MAX) Body.setVelocity(body, { x: v.x, y: MAX });
          if (v.y < -MAX) Body.setVelocity(body, { x: v.x, y: -MAX });
        });
      });

      // ── Render loop — direct Engine.update like CodePen ───────────────────
      const run = () => {
        Engine.update(engine, 1000 / 60); // ← same as CodePen's Matter.Engine.update(engine)
        cardData.forEach(({ el, body, size }) => {
          const { x, y } = body.position;
          el.style.left = `${x - size / 2}px`;
          el.style.top = `${y - size / 2}px`;
          el.style.transform = `rotate(${body.angle}rad)`;
          el.style.opacity = "1"; // ← show once positioned
        });
        rafRef.current = requestAnimationFrame(run);
      };
      rafRef.current = requestAnimationFrame(run);
    }, 100);
  };

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          initPhysics();
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      destroyPhysics();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ height: "clamp(200px, 35vh, 500px)" }}
    >
      <div ref={containerRef} className="relative w-full h-full z-10" />
    </section>
  );
};

// At the bottom of PhysicsSection.tsx
export default PhysicsSection;
