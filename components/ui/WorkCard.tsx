import { Card } from "../ui/Card";
import { FramerMagnetic } from "./FramerMagnetic";
import { Button } from "../ui/Button";
import Image from "next/image";

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
};

export const WorkCard = ({ project }: { project: Project }) => {
  const category = project.categories.nodes[0]?.slug ?? '';
  const imageUrl = project.featuredImage?.node.sourceUrl ?? '';
  const tags = project.tags.nodes.map((tag) => tag.name);

  return (
    <Card
      className="overflow-hidden origin-top h-full flex flex-col group"
      grainOpacity={0.1}
      style={{ backdropFilter: "blur(20px)" }}
    >
      {/* Image on top */}
      <div className="relative h-52 lg:h-90 overflow-hidden">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={project.title}
            fill
             sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-[rgba(30,41,57,0.15)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(30,41,57,0.6)] to-transparent" />
      </div>

      {/* Content */}
      <div className="px-8 pt-8 pb-14 md:px-10 md:pb-16 flex flex-col flex-1">
        {/* Category */}
        <div className="inline-block">
          <span className="text-xs font-bold tracking-widest uppercase bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display text-2xl mt-3 md:text-3xl">
          {project.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-x-2 gap-y-3 mt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-sm px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8 md:pt-14">
          <FramerMagnetic>
            <Button
              label="Visit Live Site"
              className="w-full inline-flex items-center justify-center gap-2 projects-card"
              href={project.projectUrl}
              target="_blank"
              icon={true}
            />
          </FramerMagnetic>
        </div>
      </div>
    </Card>
  );
};