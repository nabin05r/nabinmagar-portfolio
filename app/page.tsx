import { AboutSection } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/Contact";
import { HeroSection } from "@/components/sections/Hero";
import { ProjectsSection } from "@/components/sections/Projects";
import { TapeSection } from "@/components/sections/Tape";
import { PhysicsSectionWrapper } from "@/components/ui/PhysicsSectionWrapper";
import { fetchGraphQL } from "@/lib/graphql";
import { GET_PROJECTS } from "@/lib/queries";

export default async function Home() {

  const data = await fetchGraphQL(GET_PROJECTS);
  const projects = data.projects.nodes.filter(
  (project: any) => project.featured === true
);

  return (
    <main>
      <HeroSection />
      <ProjectsSection projects={projects} />
      <TapeSection />
      <AboutSection />
      <ContactSection containerClass="container"/>
      <PhysicsSectionWrapper />
    </main>
  );
}
