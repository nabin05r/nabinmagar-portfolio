"use client";
import { Card } from "../ui/Card";
import { SectionHeader } from "../ui/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import WordPressIcon from "@/assets/icons/wordpress.svg";
import GithubIcon from "@/assets/icons/github.svg";
import PHPIcon from "@/assets/icons/php.svg";
import ElementorIcon from "@/assets/icons/elementor.svg";
import TailWindCSSIcon from "@/assets/icons/tailwindcss.svg";
import WooCommerceIcon from "@/assets/icons/woocommerce.svg";
import NextJSIcon from "@/assets/icons/nextdotjs.svg";
import WPGraphQLIcon from "@/assets/icons/graphql.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import mapImage from "@/assets/images/map.webp";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "../ui/CardHeader";
import { ToolBoxItems } from "../ui/ToolBoxItems";
import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import StarIcon from "@/assets/icons/star.svg";
import NgmPhoto from "@/assets/images/nabinmagar-sticker.png";
import { useState } from "react";

const toolboxItems = [
  { title: "WordPress", iconType: WordPressIcon },
  { title: "PHP", iconType: PHPIcon },
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS", iconType: CSSIcon },
  { title: "WooCommerce", iconType: WooCommerceIcon },
  { title: "Elementor", iconType: ElementorIcon },
  { title: "WPGraphQL", iconType: WPGraphQLIcon },
  { title: "JavaScript", iconType: JavascriptIcon },
  { title: "TypeScript", iconType: TypeScriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Next.js", iconType: NextJSIcon },
  { title: "Tailwind CSS", iconType: TailWindCSSIcon },
  { title: "GitHub", iconType: GithubIcon },
  { title: "Figma", iconType: FigmaIcon },
];

const hobbies = [
  {
    title: "Bike Riding",
    emoji: "🏍️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "40%",
    top: "8%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "80%",
    top: "10%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  },
  {
    title: "Parties",
    emoji: "🎉",
    left: "45%",
    top: "70%",
  },
  {
    title: "Travelling",
    emoji: "✈️",
    left: "60%",
    top: "35%",
  },
  {
    title: "Movies",
    emoji: "🎞️",
    left: "75%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          subtitle="About Me"
          title="A Glimpse Behind the Code"
          description="A snapshot of my technical skills, tools, and development interests."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card
              className="h-[320px] md:col-span-2 lg:col-span-1 card-hover relative"
            >
              <StarIcon className="size-9 text-emerald-300 card-header-star absolute left-5 top-5" />
              <div>
                <Image
                  src={NgmPhoto}
                  alt="NGMPhoto"
                  className="absolute top-8 ngm-photo"
                />
              </div>

              <p
                className="absolute right-5 top-1/2 -translate-y-1/2 -rotate-90  translate-x-1/2 text-sm text-white/80 tracking-widest uppercase animate-pulse"
              >
                Code By NGM
              </p>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 card-hover">
              <CardHeader
                title="My Toolbox"
                description="The tools I use to build scalable, high-performing WordPress solutions."
              />
              <ToolBoxItems
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] !p-0 flex flex-col md:col-span-3 lg:col-span-2 card-hover">
              <CardHeader
                title="Beyond the Code"
                description="Where I spend time beyond screens, code, and development."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-linear-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="text-gray-950 font-medium">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card
              className="h-[320px] !p-0 relative md:col-span-2 lg:col-span-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"
                ></div>
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"
                ></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>

              {/* popup slides up from bottom */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute bottom-0 left-0 right-0 backdrop-blur-[8px] p-4 rounded-b-3xl z-10"
                  >
                    <div className="flex flex-col gap-1.5 text-sm">
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span className="text-white/80">Kathmandu, Nepal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>🕐</span>
                        <span className="text-white/80">UTC+5:45</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>✉️</span>
                        <span className="text-white/80">
                          nabin.magar05r@gmail.com
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
