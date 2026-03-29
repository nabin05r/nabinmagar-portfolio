import { fetchGraphQL } from "@/lib/graphql";
import { GET_PROJECTS } from "@/lib/queries";
import { GrainImagePage } from "@/components/ui/GrainImagePage";
import { WorkGrid } from "@/components/ui/WorkGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Nabin Gharti Magar",
  description: "Portfolio of WordPress and headless Next.js projects built by Nabin Gharti Magar — custom themes, plugins, WooCommerce stores and headless architectures.",
};

export default async function Work() {
  const data = await fetchGraphQL(GET_PROJECTS);
  const projects = data.projects.nodes;

  return (
    <main className="relative">
      <GrainImagePage />
      <section className="pt-40 pb-30 md:pt-54 lg:pb-60">
        <div className="container-medium">
          <h1 className="ngm-h1 font-display leading-[1.2] tracking-widest">
            Crafted Projects
          </h1>
          <p className="mt-4 text-lg text-white/50 max-w-lg">
            A selection of projects I&apos;ve built — from custom WordPress themes and plugins to headless Next.js architectures.
          </p>
          <WorkGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}