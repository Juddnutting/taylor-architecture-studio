import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={project.heroImage}
          alt={`${project.title} - ${project.location}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="mt-4">
        <h3 className="text-base font-light tracking-wide text-stone-900 group-hover:text-stone-600 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-stone-500 mt-1">
          {project.location} &middot; {project.type}
        </p>
      </div>
    </Link>
  );
}
