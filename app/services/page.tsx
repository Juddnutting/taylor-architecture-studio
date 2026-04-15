import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Architectural Services | Custom Home Design Boulder Colorado",
  description:
    "Full-service residential architecture: custom home design, additions, ADUs, and construction documents. Serving Boulder, Lafayette, Louisville, Longmont & Boulder County CO.",
  alternates: {
    canonical: "https://taylorarchitecturestudio.com/services/",
  },
  openGraph: {
    title: "Architectural Services | Custom Home Design Boulder Colorado",
    description:
      "Full-service residential architecture: custom home design, additions, ADUs, and construction documents. Serving Boulder County CO.",
  },
};

const processSteps = [
  {
    number: "01",
    title: "Existing Conditions",
    description:
      "We start by understanding your site and your existing home. This includes but is not limited to site surveys, topography assessment, regulatory requirements verification, photo documentation, measurements, and 3D modeling using Autodesk Revit. This phase establishes the foundation for design by identifying parameters and opportunities.",
    image: "/images/services/existing-conditions.jpg",
  },
  {
    number: "02",
    title: "Schematic Design",
    description:
      "This is where we collaboratively explore your vision, hopes, and priorities. We develop layouts with floor plans and exterior modeling, iterating on the design to reflect your needs, lifestyle, and aesthetic preferences. The goal is to achieve your approval on the overall direction before advancing to the next phase.",
    image: "/images/services/schematic-design.jpg",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "We coordinate with consultants including structural engineers, HVAC specialists, interior designers, and civil engineers. This phase focuses on detailed specification, code compliance verification, early conflict identification and resolution, and regular client communication for decision-making.",
    image: "/images/services/design-development.jpg",
  },
  {
    number: "04",
    title: "Construction Documentation",
    description:
      "We produce comprehensive drawing sets for permitting and construction, including plans, schedules, sections, and specialized details. We manage building department submission and the approval process, providing your contractor with complete, approved documentation.",
    image: "/images/services/construction-docs.jpg",
  },
];

const services = [
  {
    title: "Custom Home Design",
    description:
      "From initial concept to construction documents, we design homes that reflect your lifestyle, your site, and the Colorado landscape. Every detail is considered — from how morning light enters your kitchen to how the floorplan supports your daily routines.",
  },
  {
    title: "Additions & Renovations",
    description:
      "Expand and transform your existing home with designs that feel original, not added-on. Whether you need a new primary suite, an expanded kitchen, or a second story, we integrate new spaces seamlessly with your home's existing character.",
  },
  {
    title: "ADU Design",
    description:
      "Accessory dwelling units that maximize your property's potential. From guest houses and home offices to rental units, we navigate zoning requirements and design compact spaces that live large.",
  },
  {
    title: "Construction Documents",
    description:
      "Complete, permit-ready documentation for builders. Our detailed construction document sets include structural plans, schedules, sections, and specifications — everything your contractor needs to build with confidence.",
  },
  {
    title: "Permitting",
    description:
      "We manage the full permitting process — preparing code-compliant drawing sets, submitting to the building department, and responding to review comments. We handle the back-and-forth so you don't have to.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
            How We Work
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
            A personalized approach tailored to your specific situation,
            timeline, and budget. We guide every project seamlessly from initial
            concept through permit approval.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 md:mb-20">
            <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
              Trust the Process
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-stone-900 tracking-tight">
              How We Get There
            </h2>
          </div>

          <div className="space-y-20 md:space-y-28">
            {processSteps.map((step, i) => (
              <div
                key={step.number}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="text-5xl font-extralight text-stone-200">
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-light text-stone-900 mt-2 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-stone-200 ${
                    i % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={`${step.title} phase of architectural design`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            Service Area
          </h2>
          <p className="mt-6 text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            We work with clients throughout Boulder County, including Boulder,
            Lafayette, Louisville, Superior, Longmont, and Erie, Colorado.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-10 px-8 py-3 text-sm tracking-wide uppercase font-light border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
