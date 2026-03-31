import Image from "next/image";
import { GrainImagePage } from "@/components/ui/GrainImagePage";
import NgmPhoto from "@/assets/images/nabinmagar-sticker.png";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactSection } from "@/components/sections/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Nabin Gharti Magar",
  description: "Learn about Nabin Gharti Magar — a Senior Full Stack WordPress Developer from Kathmandu, Nepal with 5+ years of experience in custom WordPress, WooCommerce, and headless Next.js development.",
};

const experiences = [
  {
    id: 1,
    role: "Full Stack WordPress Developer",
    company: "Funz Technology",
    companyUrl: "https://funztechnology.com/",
    period: "2025 - Present",
    location: "Kathmandu, Nepal",
    description:
      "Working across both frontend and backend on international client projects and in-house products. Build custom WordPress solutions from scratch, develop WooCommerce stores, and implement Elementor-based designs based on client needs. Also responsible for ongoing website maintenance and client support.",
  },
  {
    id: 2,
    role: "WordPress Theme Developer",
    company: "Rigorous Web Service",
    companyUrl: "https://www.rigorousweb.com/",
    period: "2022 - 2024",
    location: "Kathmandu, Nepal",
    description:
      "Focused on WordPress product development — built both Classic and Full Site Editing (FSE) themes and plugins for international clients. Published the WP Entrepreneur FSE theme on WordPress.org. Also developed a Gutenberg block plugin and worked as a backend developer on client websites, handling frontend design with Elementor.",
  },
  {
    id: 3,
    role: "WordPress Developer",
    company: "Vrit Technologies",
    companyUrl: "https://vrittechnologies.com/",
    period: "2020 - 2021",
    location: "Kathmandu, Nepal",
    description:
      "Started professional WordPress development career building client websites using custom PHP/HTML/CSS coding alongside Elementor page builder for frontend design.",
  },
];

export default function About() {
  return (
    <main className="relative">
      <GrainImagePage />
      <section
        className="pt-40 md:pb-30 md:pt-54"
      >
        <div className="container-medium">
          <h1 className="ngm-h1 font-display leading-[1.2] tracking-widest">
           A little about me
          </h1>
          <div className="relative h-0 mt-25">  {/* ← h-0 keeps layout clean but allows absolute children */}
            <div className="border-t border-white/15 " />
            <div className="digital-ball">
              <div className="overlay"/>
              <div className="globe">
                <div className="globe-wrap">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle-hor"></div>
                  <div className="circle-hor-middle"></div>
                </div>
              </div>
            </div>
          </div>
          {/** Intro section with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-5 pt-24 pb-10 lg:pb-8 lg:pt-32 gap-8 md:gap-10 items-center">
            {/* Left — 2 cols */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-center">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                I&apos;m a Full Stack WordPress Developer based in Kathmandu, Nepal 
                with 5+ years of experience building tailor-made web solutions 
                for clients worldwide.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mt-6 text-white/60">
                From custom WordPress themes and plugins to headless Next.js 
                architectures — I push every project to new horizons, always 
                putting quality and performance first.
              </p>
            </div>

            {/* Right — 3 cols */}
            <div
              className="col-span-1 lg:col-span-3 relative h-80 md:h-100 lg:h-[700px] rounded-3xl overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 80% 50%, rgba(16,185,129,0.2) 0%, rgba(56,189,248,0.1) 0%, transparent 70%)',
              }}
            >
              <Image
                src={NgmPhoto}
                alt="Nabin"
                fill
                 sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain object-top"
              />
              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101828] to-transparent" />
              {/* Right fade */}
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#101828] to-transparent" />
            </div>
          </div>
          {/** Help Service Section */}
          <section className="py-16 lg:py-24">
            <div className="pb-10 md:pb-14">
              <h2 className="font-display text-3xl md:text-5xl">
                I can help you with
                <span className="animate-dot text-4xl pl-2"> .</span>
                <span className="animate-dot text-4xl"> .</span>
                <span className="animate-dot text-4xl"> .</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="card-hover border-t-2 border-emerald-400 transition-transform duration-300 hover:-translate-y-1">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <span className="font-display text-5xl text-white/15">
                    01
                  </span>
                  <hr className="border-white/10 mt-4" />
                  <h4 className="text-xl 2xl:text-2xl font-semibold mt-4 text-white/90">
                    WordPress Development
                  </h4>
                  <div className="mt-6 text-sm 2xl:text-base leading-relaxed text-white/60 flex flex-col gap-3 flex-1">
                    <p className="service-item">
                      Custom Theme development
                    </p>
                    <p className="service-item">Plugin development</p>
                    <p className="service-item">Figma to WordPress builds</p>
                    <p className="service-item">WooCommerce stores</p>
                    <p className="service-item">Gutenberg & FSE blocks</p>
                    {/* <p className="service-item">Core Web Vitals optimization</p> */}
                  </div>
                </div>
              </Card>

              <Card className="card-hover border-t-2 border-sky-400 transition-transform duration-300 hover:-translate-y-1">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <span className="font-display text-5xl text-white/15">
                    02
                  </span>
                  <hr className="border-white/10 mt-4" />
                  <h4 className="font-semibold text-xl 2xl:text-2xl mt-4 text-white/90">
                    Headless & Modern Web
                  </h4>
                  <div className="mt-6 text-sm 2xl:text-base leading-relaxed text-white/60 flex flex-col gap-3 flex-1">
                    <p className="service-item">
                      Headless WordPress with Next.js
                    </p>
                    <p className="service-item">
                      WPGraphQL & REST API integration
                    </p>
                    <p className="service-item">
                      React & TypeScript development
                    </p>
                    <p className="service-item">
                      GSAP & Framer Motion animations
                    </p>
                    <p className="service-item">Lenis smooth scrolling</p>
                  </div>
                </div>
              </Card>

              <Card className="card-hover border-t-2 border-violet-400 transition-transform duration-300 hover:-translate-y-1">
                <div className="p-8 md:p-10 flex flex-col h-full">
                  <span className="font-display text-5xl text-white/15">
                    03
                  </span>
                  <hr className="border-white/10 mt-4" />
                  <h4 className="font-semibold text-xl 2xl:text-2xl mt-4 text-white/90">
                    Support & Maintenance
                  </h4>
                  <div className="mt-6 text-sm 2xl:text-base leading-relaxed text-white/60 flex flex-col gap-3 flex-1">
                    <p className="service-item">WordPress migrations</p>
                    <p className="service-item">Security hardening</p>
                    <p className="service-item">Plugin & theme updates</p>
                    <p className="service-item">Bug fixes & troubleshooting</p>
                    <p className="service-item">DNS & hosting management</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
          {/* Tech Stack Section */}
          <section className="py-16 lg:py-24">
            <div className="[&_h2]:text-left [&_p]:text-left [&_.flex]:justify-start">
              <SectionHeader
                subtitle="My Toolbox"
                title="Technologies I Work With"
                description=""
              />
            </div>

            <div className=" mt-10 md:mt-12 space-y-8">
              {/* WordPress & PHP */}
              <div>
                <p className="text-white/40 uppercase text-xs tracking-widest mb-4">
                  WordPress & PHP
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "WordPress",
                    "PHP",
                    "WooCommerce",
                    "Gutenberg / FSE",
                    "ACF",
                    "WPGraphQL",
                    "REST API",
                    "Elementor",
                    "Divi",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:border-emerald-400/40 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div>
                <p className="text-white/40 uppercase text-xs tracking-widest mb-4">
                  Frontend
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "GSAP",
                    "Framer Motion",
                    "Lenis",
                    "HTML",
                    "CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:border-sky-400/40 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow */}
              <div>
                <p className="text-white/40 uppercase text-xs tracking-widest mb-4">
                  Tools & Workflow
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Git",
                    "GitHub",
                    "VS Code",
                    "Figma",
                    "cPanel",
                    "Cloudflare",
                    "Vercel",
                    "Postman",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 hover:border-white/30 hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {/* Experience & Education section */}
          <section className="py-16 lg:py-24">
            <div className="[&_h2]:text-left [&_p]:text-left [&_.flex]:justify-start">
              <SectionHeader
                subtitle="My Experiences"
                title="Where I've Been Employed"
                description=""
              />
            </div>
            <div className="mt-10 md:mt-12">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="border-t border-white/10" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-10 md:py-12">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold">
                        {exp.role}
                      </h3>
                      <a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display text-lg md:text-2xl bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mt-1 inline-block"
                      >
                        {exp.company}
                      </a>
                      <p className="mt-2 text-sm text-white/40 italic">
                        {exp.period} / {exp.location}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60 text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Education — same rhythm as experience entries */}
              <div className="border-t border-white/10" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-10 md:py-12">
                <div>
                  <p className="text-white/40 uppercase text-xs tracking-widest mb-3">
                    Education
                  </p>
                  <h3 className="font-display font-bold text-xl md:text-2xl">
                    Bachelor&apos;s in Computer Systems Engineering
                  </h3>
                  <p className="font-display text-lg bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mt-1 inline-block">
                    ISMT College - British Degree
                  </p>
                  <p className="mt-2 text-sm text-white/40 italic">
                    2016 - 2020 / Kathmandu, Nepal
                  </p>
                </div>
                <div>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    Studied computer systems engineering with a strong foundation
                    in programming, algorithms, and software development.
                    Developed an early passion for web development through C and
                    C++ coursework.
                  </p>
                </div>
              </div>
              <div className="border-t border-white/10" />
            </div>
          </section>
          {/** Contact CTA */}
          <ContactSection containerClass="" />
        </div>
      </section>
    </main>
  );
}
