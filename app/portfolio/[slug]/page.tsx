import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${project.type} - ${project.location}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Taylor Architecture Studio`,
      description: project.shortDescription,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[60vh] min-h-[400px] -mt-20">
        <Image
          src={project.heroImage}
          alt={`${project.title} - ${project.location}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* Project Info */}
      <section className="py-16 md:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-light tracking-wide text-stone-500 hover:text-stone-900 transition-colors mb-8"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg text-stone-500 font-light">
                {project.shortDescription}
              </p>

              <div className="mt-8 space-y-4">
                {project.longDescription.split("\n\n").map((paragraph, i) =>
                  paragraph.startsWith("\u201c") || paragraph.startsWith('"') ? (
                    <blockquote
                      key={i}
                      className="border-l-2 border-stone-300 pl-5 italic text-stone-500 font-light leading-relaxed"
                    >
                      {paragraph}
                    </blockquote>
                  ) : (
                    <p
                      key={i}
                      className="text-stone-600 font-light leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:border-l lg:border-stone-200 lg:pl-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-1">
                    Location
                  </h3>
                  <p className="text-stone-900 font-light">{project.location}</p>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-1">
                    Project Type
                  </h3>
                  <p className="text-stone-900 font-light">{project.type}</p>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-1">
                    Role
                  </h3>
                  <p className="text-stone-900 font-light">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-1">
                    Builder
                  </h3>
                  <p className="text-stone-900 font-light">{project.builder}</p>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-1">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-light tracking-wide text-stone-500 border border-stone-200 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.galleryImages.slice(1).map((image, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] overflow-hidden bg-stone-100"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${i + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-stone-500 font-light">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-3 text-sm tracking-wide uppercase font-light border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
