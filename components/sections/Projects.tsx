"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../ui/ProjectCard";
import { FramerMagnetic } from "../ui/FramerMagnetic";
import { Button } from "../ui/Button";

type ProjectResult = {
  description: string;
};

type Project = {
  id: string;
  title: string;
  projectUrl: string;
  featured: boolean;
  results: ProjectResult[];
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

export const ProjectsSection = ({ projects }: { projects: Project[] }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="pb-24 lg:py-24 relative" ref={container}>
      <div className="container">
        <SectionHeader
          subtitle="Built & Shipped"
          title="Selected Projects"
          description="Curated portfolio projects highlighting real-world solutions and development work."
        />
        {/* No gap here — each card is 100vh tall */}
        <div className="mt-20 lg:-mt-[20px]">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              progress={scrollYProgress}
              totalProjects={projects.length}
              i={i} // 0-indexed now
            />
          ))}
        </div>
        <div className="flex justify-center mt-40 md:mt-20 lg:-mt-5 xl:-mt-10 relative z-10">
            <FramerMagnetic>
              <Button
                label="View All Work"
                href="/work"
              />
            </FramerMagnetic>
          </div>
      </div>
    </section>
  );
};
