"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { Card } from "../ui/Card";
import { FramerMagnetic } from "./FramerMagnetic";
import { Button } from "../ui/Button";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  projectUrl: string;
  featured: boolean;
  results: { description: string }[];
  featuredImage: {
    node: { sourceUrl: string };
  } | null;
  categories: {
    nodes: { name: string; slug: string }[];
  };
  tags: {
    nodes: { name: string; slug: string }[];
  };
};

export const ProjectCard = ({
  project,
  progress,
  totalProjects,
  i,
}: {
  project: Project;
  progress: MotionValue<number>;
  totalProjects: number;
  i: number;
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  const targetScale = 1 - (totalProjects - i) * 0.05;
  const scale = useTransform(progress, [i * 0.25, 1], [1, targetScale]);

  const category = project.categories.nodes[0]?.slug ?? "";
  const imageUrl = project.featuredImage?.node.sourceUrl ?? "";

  return (
    <div
      ref={container}
      className="lg:h-screen flex items-center justify-center lg:sticky lg:top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 35}px)`,
        }}
        className="relative w-full"
      >
        <Card
          className={`px-8 pt-8 md:pt-12 pb-0 md:px-10 lg:pt-16 lg:px-20 origin-top overflow-hidden `}
          grainOpacity={0.1}
          style={{
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:min-h-[420px]">
            {/* Left: Text Content */}
            <div className="lg:pb-16">
              <div className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold tracking-widest uppercase text-sm text-transparent bg-clip-text">
                <span>{category}</span>
              </div>
              <h3 className="font-display text-2xl mt-2 md:mt-5 md:text-4xl">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm md:text-base text-white/50"
                  >
                    <CheckCircleIcon className="size-5 md:size-6 shrink-0 " />
                    <span>{result.description}</span>
                  </li>
                ))}
              </ul>
              <div className="md:max-w-62">
                <FramerMagnetic>
                  <Button
                    label="Visit Live Site"
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 projects-card"
                    href={project.projectUrl}
                    icon={true}
                    target="_blank"
                  />
                </FramerMagnetic>
              </div>
            </div>
            {/* Right: Image — bleeds to right edge */}
            <div className="relative overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none mt-8 h-55 lg:mt-0 md:h-80 lg:absolute lg:right-0 lg:top-18 lg:bottom-0 lg:h-full lg:w-[55%] lg:-mr-20">
              {/** For dekstop image */}
              <motion.div
                style={{ scale: imageScale }}
                className="absolute inset-0 hidden lg:block"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-left-top"
                  />
                )}
              </motion.div>
               {/** For mobile & tablet image */}
              <div
                className="absolute inset-0 block lg:hidden"
              >
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover object-left-top"
                  />
                )}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
