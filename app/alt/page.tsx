import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function AltHomePage() {
  const featured = projects.slice(0, 4);
  const hero = projects[0];
  const secondary = projects.slice(1, 3);

  return (
    <div className="bg-stone-950 text-white min-h-screen -mt-20">
      {/* ──────────────────────────────────────────────
          HERO — Full-screen split: image left, type right
          ────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative overflow-hidden">
          <Image
            src="/images/projects/966-arapahoe/01.jpg"
            alt="Custom residential architecture in Boulder County"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right: Type */}
        <div className="flex flex-col justify-end p-8 md:p-16 lg:p-20 bg-stone-950">
          <p className="text-[10px] tracking-[0.4em] uppercase text-stone-500 mb-6">
            Boulder County, Colorado
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] tracking-tight">
            Taylor
            <br />
            Architecture
            <br />
            <span className="italic font-light text-stone-400">Studio</span>
          </h1>
          <p className="mt-8 text-stone-500 font-light text-sm md:text-base max-w-sm leading-relaxed">
            Thoughtful residential design. Custom homes, additions, ADUs,
            and Marshall Fire rebuilds.
          </p>
          <div className="mt-10 flex gap-6">
            <Link
              href="/portfolio"
              className="text-xs tracking-[0.2em] uppercase text-white border-b border-white pb-1 hover:text-stone-400 hover:border-stone-400 transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-[0.2em] uppercase text-stone-500 border-b border-stone-700 pb-1 hover:text-white hover:border-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          MARQUEE — Scrolling text divider
          ────────────────────────────────────────────── */}
      <div className="border-y border-stone-800 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.3em] uppercase text-stone-600 mx-12"
            >
              Custom Homes &nbsp;&middot;&nbsp; Additions &nbsp;&middot;&nbsp;
              ADUs &nbsp;&middot;&nbsp; Marshall Fire Rebuilds
              &nbsp;&middot;&nbsp; Construction Documents
              &nbsp;&middot;&nbsp; Boulder County
            </span>
          ))}
        </div>
      </div>

      {/* ──────────────────────────────────────────────
          FEATURED — Asymmetric masonry grid
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">
                01
              </span>
              <h2 className="text-3xl md:text-4xl font-extralight mt-2 tracking-tight">
                Selected Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex text-xs tracking-[0.2em] uppercase text-stone-500 border-b border-stone-700 pb-1 hover:text-white hover:border-white transition-colors"
            >
              View All
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Large left */}
            <Link
              href={`/portfolio/${hero.slug}`}
              className="md:col-span-7 group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-900">
                <Image
                  src={hero.heroImage}
                  alt={hero.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-2">
                    {hero.type}
                  </p>
                  <h3 className="text-xl md:text-2xl font-extralight">
                    {hero.title}
                  </h3>
                  <p className="text-sm text-stone-400 mt-1">{hero.location}</p>
                </div>
              </div>
            </Link>

            {/* Stacked right */}
            <div className="md:col-span-5 flex flex-col gap-4 md:gap-6">
              {secondary.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group flex-1"
                >
                  <div className="relative h-full min-h-[200px] overflow-hidden bg-stone-900">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-1">
                        {project.type}
                      </p>
                      <h3 className="text-lg font-extralight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom row — wide cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
            {projects.slice(3, 5).map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-900">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 md:p-8">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-stone-400 mb-1">
                      {project.type}
                    </p>
                    <h3 className="text-lg md:text-xl font-extralight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-stone-400 mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          ABOUT — Horizontal cinematic strip
          ────────────────────────────────────────────── */}
      <section className="border-t border-stone-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Photo */}
          <div className="lg:col-span-4 relative min-h-[400px]">
            <Image
              src="/images/about/nicole.jpg"
              alt="Nicole Taylor Nutting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-5 flex flex-col justify-center p-10 md:p-16 lg:p-20">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600 mb-6">
              02 — About
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight leading-tight tracking-tight">
              Every space should
              <br />
              work beautifully for
              <br />
              <span className="italic text-stone-400">
                the people who live in it.
              </span>
            </h2>
            <p className="mt-8 text-stone-500 font-light leading-relaxed max-w-md">
              Taylor Architecture Studio is led by Nicole Taylor Nutting — a
              residential architect dedicated to creating homes that are as
              functional as they are beautiful. Based in Boulder County,
              specializing in custom homes, additions, and Marshall Fire
              rebuilds.
            </p>
            <Link
              href="/about"
              className="inline-flex mt-8 text-xs tracking-[0.2em] uppercase text-stone-500 border-b border-stone-700 pb-1 hover:text-white hover:border-white transition-colors w-fit"
            >
              Read More
            </Link>
          </div>

          {/* Stats column */}
          <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-stone-800 flex flex-row lg:flex-col">
            {[
              { value: "M.Arch", label: "CU Denver 2011" },
              { value: "11+", label: "Projects Completed" },
              { value: "6", label: "Marshall Fire Rebuilds" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center items-center p-8 border-r lg:border-r-0 lg:border-b border-stone-800 last:border-0"
              >
                <span className="text-2xl md:text-3xl font-extralight">
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 mt-2 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SERVICES — Numbered list, editorial style
          ────────────────────────────────────────────── */}
      <section className="py-20 md:py-32 px-6 lg:px-8 border-t border-stone-800">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-600">
              03 — Services
            </span>
            <h2 className="text-3xl md:text-4xl font-extralight mt-2 tracking-tight">
              What We Do
            </h2>
          </div>

          <div className="divide-y divide-stone-800">
            {[
              {
                title: "Custom Home Design",
                desc: "Ground-up residential design from concept through construction documents.",
              },
              {
                title: "Additions & Renovations",
                desc: "Expand and transform existing spaces with designs that feel original.",
              },
              {
                title: "ADU Design",
                desc: "Accessory dwelling units — guest houses, offices, and rental units.",
              },
              {
                title: "Marshall Fire Rebuilds",
                desc: "Compassionate, streamlined rebuilds with fire-resistant design.",
              },
              {
                title: "Construction Documents",
                desc: "Complete, permit-ready documentation for builders.",
              },
            ].map((svc, i) => (
              <Link
                key={svc.title}
                href="/services"
                className="group flex items-center justify-between py-8 md:py-10"
              >
                <div className="flex items-baseline gap-6 md:gap-10">
                  <span className="text-sm text-stone-700 font-light tabular-nums">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-extralight group-hover:text-stone-400 transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-stone-600 mt-1 hidden md:block max-w-lg">
                      {svc.desc}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-stone-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          LOCATION CTA — Full-bleed image with overlay
          ────────────────────────────────────────────── */}
      <section className="relative min-h-[500px] flex items-center justify-center">
        <Image
          src="/images/projects/1009-arapahoe/06.jpg"
          alt="Boulder County residential architecture"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative z-10 text-center px-6 py-20">
          <p className="text-[10px] tracking-[0.4em] uppercase text-stone-400 mb-6">
            Serving Boulder County
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-[0.95] tracking-tight">
            Let&apos;s build
            <br />
            <span className="italic text-stone-400">something lasting.</span>
          </h2>
          <p className="mt-8 text-stone-500 font-light max-w-lg mx-auto leading-relaxed">
            Boulder &middot; Lafayette &middot; Louisville &middot; Superior
            &middot; Longmont &middot; Erie
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-10 px-10 py-4 text-xs tracking-[0.2em] uppercase border border-white text-white hover:bg-white hover:text-stone-950 transition-all duration-500"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
