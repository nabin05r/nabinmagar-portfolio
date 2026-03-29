"use client";
import { FramerMagnetic } from "../ui/FramerMagnetic";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { navItems } from "@/data/navItems";


export const Header = () => {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="px-4 md:px-8 lg:px-10 flex justify-between items-center relative top-8 w-full z-10">
      <FramerMagnetic max={5}>
        <a href={"/"}>
          <div className="logo">
            <p className="copyright">©</p>
            <div className="name">
              <p className="codeBy">Code by</p>
              <p className="nabin">Nabin</p>
              <p className="ghartimagar">Gharti Magar</p>
            </div>
          </div>
        </a>
      </FramerMagnetic>
      {/* Nav Menu */}
      <div className="hidden md:block">
        <nav className="flex gap-10 p-0.5">
          {navItems.filter((item) => item.showInHeader).map((item, index) => (
            <FramerMagnetic key={index}>
              <Link
                href={item.href}
                className="relative flex flex-col items-center gap-1 text-[clamp(16px,1.2vw,19px)]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.title}
                <motion.span
                  className="size-1.5 rounded-full bg-white absolute -bottom-3"
                  initial={{ scale: 0 }} // ← add this
                  animate={{
                    scale:
                      pathname === item.href || hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </FramerMagnetic>
          ))}
        </nav>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden inline-flex items-center gap-2"
        onClick={() => window.dispatchEvent(new Event('openMenu'))}
      >
        <span  className="size-1.5 rounded-full bg-white inline-block"></span>
        <p className=""> Menu</p>
      </div>
    </header>
  );
};
