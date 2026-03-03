import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Architecture Portfolio | Custom Homes & Marshall Fire Rebuilds",
  description:
    "View completed residential projects including Marshall Fire rebuilds, custom homes, and renovations in Boulder County, Colorado. Modern farmhouse to contemporary designs.",
  openGraph: {
    title: "Architecture Portfolio | Custom Homes & Marshall Fire Rebuilds",
    description:
      "View completed residential projects including Marshall Fire rebuilds, custom homes, and renovations in Boulder County, Colorado.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
            Our Work
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
            Portfolio
          </h1>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
            A selection of residential projects across Boulder County — from
            Marshall Fire rebuilds to custom homes, additions, and new
            construction.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
