"use client";
import { useState } from "react";
import { WorkCard } from "./WorkCard";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  projectUrl: string;
  featured: boolean;
  results: { description: string }[];
  featuredImage: {
    node: { sourceUrl: string }
  } | null;
  categories: {
    nodes: { name: string; slug: string }[]
  };
  tags: {
    nodes: { name: string; slug: string }[]
  };
}

export const WorkGrid = ({ projects }: { projects: Project[] }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  // Generate unique filters from project categories
  const filters = [
    { label: "All", value: "all" },
    ...Array.from(
      new Set(
        projects.flatMap((p) =>
          p.categories.nodes.map((cat) => cat.slug)
        )
      )
    ).map((slug) => ({
      label: slug.charAt(0).toUpperCase() + slug.slice(1),
      value: slug,
    })),
  ];

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) =>
        p.categories.nodes.some((cat) => cat.slug === activeFilter)
      );

  return (
    <>
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-3 mt-10">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-8 py-3 rounded-full text-sm md:text-base font-medium border transition-all duration-200 cursor-pointer
              ${activeFilter === filter.value
                ? "bg-white text-gray-950 border-white"
                : "border-white/15 text-white/50 hover:border-white/40 hover:text-white"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-15 gap-y-10 md:gap-y-10 lg:gap-y-30 mt-10">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <WorkCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};