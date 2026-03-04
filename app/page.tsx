import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <>
      {/* JSON-LD Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Taylor Architecture Studio",
            description:
              "Custom home design in Boulder County, Colorado. Thoughtful residential architecture for new homes, additions, and ADUs.",
            url: "https://taylorarchitecturestudio.com",
            telephone: "",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Boulder",
              addressRegion: "CO",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.015,
              longitude: -105.2705,
            },
            areaServed: [
              "Boulder",
              "Lafayette",
              "Louisville",
              "Superior",
              "Longmont",
              "Erie",
            ],
            priceRange: "$$$$",
            image: "https://taylorarchitecturestudio.com/images/og-image.jpg",
            sameAs: [],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-end -mt-20">
        <Image
          src="/images/projects/miami-way/01.jpg"
          alt="Custom residential architecture in Boulder County, Colorado"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 w-full pb-16 md:pb-24 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Thoughtful Architecture
              <br />
              <span className="text-stone-300">for How You Live</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone-300 font-light max-w-xl leading-relaxed">
              Custom residential design in Boulder County, Colorado. New homes,
              additions, ADUs, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase font-light border border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase font-light bg-white text-stone-900 hover:bg-stone-100 transition-all duration-300"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex text-sm font-light tracking-wide text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-10 md:hidden text-center">
            <Link
              href="/portfolio"
              className="text-sm font-light tracking-wide text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 w-full overflow-hidden bg-stone-100">
              <Image
                src="/images/about/nicole.jpg"
                alt="Nicole Taylor Nutting, founder of Taylor Architecture Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <div className="mb-8">
                <Image
                  src="/images/logo.png"
                  alt="Taylor Architecture Studio"
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
                About the Studio
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight leading-tight">
                Designed Around
                <br />
                the Way You Live
              </h2>
              <p className="mt-6 text-stone-600 font-light leading-relaxed">
                Taylor Architecture Studio is led by Nicole Taylor Nutting, a
                residential Architect dedicated to creating homes that are as
                functional as they are beautiful. Based in Boulder County, we
                specialize in custom homes, additions, and ADUs — always with a
                deep respect for the Colorado landscape
                and the people who call it home.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-sm font-light tracking-wide text-stone-900 border-b border-stone-900 pb-0.5 hover:text-stone-600 hover:border-stone-600 transition-colors"
              >
                Learn More About Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Custom Home Design",
                description:
                  "From concept to construction documents, we design homes that reflect your lifestyle and the Colorado landscape.",
              },
              {
                title: "Additions & Renovations",
                description:
                  "Expand and transform your existing home with designs that feel original, not added-on.",
              },
              {
                title: "ADU Design",
                description:
                  "Accessory dwelling units that maximize your property's potential — guest houses, home offices, and rental units.",
              },
              {
                title: "Construction Documents",
                description:
                  "Complete, permit-ready documentation for builders, including structural details and specifications.",
              },
              {
                title: "Permitting",
                description:
                  "We manage the full permitting process — preparing code-compliant drawings, submitting to the building department, and handling review comments.",
              },
              {
                title: "Consultations",
                description:
                  "Not sure where to start? We offer initial consultations to explore your project's possibilities.",
              },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="h-px w-12 bg-stone-300 mb-6 group-hover:w-20 group-hover:bg-stone-900 transition-all duration-500" />
                <h3 className="text-lg font-light text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 text-sm tracking-wide uppercase font-light border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Location / SEO Content */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-stone-950 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight leading-tight">
            Residential Architecture
            <br />
            <span className="text-stone-400">in Boulder County, Colorado</span>
          </h2>
          <p className="mt-8 text-stone-400 font-light leading-relaxed max-w-2xl mx-auto">
            Taylor Architecture Studio serves Boulder County, Colorado,
            including Boulder, Lafayette, Louisville, Superior, and the
            surrounding communities. We specialize in custom residential design from small ADUs to entire single family residences.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-10 px-8 py-3 text-sm tracking-wide uppercase font-light border border-white text-white hover:bg-white hover:text-stone-900 transition-all duration-300"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
