import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Working With an Architect in Boulder County",
  description:
    "Common questions about working with Taylor Architecture Studio. Learn about our process, timelines, costs, and what to expect when designing your custom home in Boulder County.",
  alternates: {
    canonical: "https://taylorarchitecturestudio.com/faq/",
  },
  openGraph: {
    title: "FAQ | Working With an Architect in Boulder County",
    description:
      "Common questions about working with Taylor Architecture Studio in Boulder County, Colorado.",
  },
};

const faqs = [
  {
    question: "What does the architectural design process look like?",
    answer:
      "Our process typically follows four phases: Existing Conditions (understanding your site and current home), Schematic Design (exploring layouts and concepts together), Design Development (refining details with engineering consultants), and Construction Documentation (producing permit-ready drawings). We guide you through each step, ensuring you're comfortable and informed throughout.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by project scope. A simple addition might take 3-4 months of design work, while a custom home from scratch can take 6-12 months before breaking ground. We'll give you a realistic timeline during our initial consultation based on your specific project.",
  },
  {
    question: "How much does it cost to hire an Architect?",
    answer:
      "Architectural fees depend on the scope and complexity of your project. We offer a free initial consultation to understand your goals and provide a clear proposal with transparent pricing. Our fees are typically a percentage of construction cost or an hourly basis with estimated fee ranges — we'll discuss both options and find what works best for your project.",
  },
  {
    question: "Do I really need an Architect for my project?",
    answer:
      "While not every project requires an Architect, working with one ensures your design is thoughtful, functional, code-compliant, and tailored to your needs. For additions, renovations, and new construction in Boulder County, an Architect helps navigate complex zoning and building codes while creating spaces that truly work for your family.",
  },
  {
    question: "Do you handle permitting?",
    answer:
      "Yes. We prepare all required construction documents and manage the full permitting process — submitting to the building department, responding to review comments, and seeing the permit through to approval. We handle the back-and-forth so you can focus on the bigger picture.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We work with clients throughout Boulder County, including Boulder, Lafayette, Louisville, Superior, Longmont, and Erie, Colorado. If you're nearby but not sure if we cover your area, just reach out — we're happy to discuss.",
  },
  {
    question: "Will you work with my builder?",
    answer:
      "Absolutely. We collaborate with a wide range of builders and general contractors across Boulder County. If you already have a builder in mind, we're happy to work with them. If you need a recommendation, we can suggest trusted builders who match your project's scope and style.",
  },
  {
    question: "What should I prepare before our first meeting?",
    answer:
      "Come with any inspiration images, a rough idea of your budget range, and a sense of what's working and not working in your current home. Don't worry about having everything figured out — that's what we're here for. We'll help you refine your vision during the design process.",
  },
];

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
            Common Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
            Everything you need to know about working with an Architect. Don&apos;t
            see your question here?{" "}
            <Link
              href="/contact"
              className="text-stone-900 border-b border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-colors"
            >
              Reach out
            </Link>{" "}
            and we&apos;ll be happy to help.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-8 bg-stone-50">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight">
            Still have questions?
          </h2>
          <p className="mt-4 text-stone-500 font-light">
            We offer free initial consultations to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center mt-8 px-8 py-3 text-sm tracking-wide uppercase font-light border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
