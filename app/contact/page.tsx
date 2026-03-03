import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Taylor Architecture Studio | Boulder County Architect",
  description:
    "Ready to start your project? Contact Taylor Architecture Studio for custom home design, additions, and Marshall Fire rebuilds in Boulder, Lafayette, Longmont & Louisville CO.",
  openGraph: {
    title: "Contact Taylor Architecture Studio | Boulder County Architect",
    description:
      "Ready to start your project? Contact Taylor Architecture Studio for custom home design in Boulder County, Colorado.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
            Start a Conversation
          </h1>
          <p className="mt-6 text-lg text-stone-500 font-light max-w-2xl leading-relaxed">
            Ready to start your project? Fill out the form below and we&apos;ll
            be in touch within one business day.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:border-l lg:border-stone-200 lg:pl-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:nicole@taylorarchitecturestudio.com"
                    className="text-stone-900 font-light hover:text-stone-600 transition-colors"
                  >
                    nicole@taylorarchitecturestudio.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:303-815-3463"
                    className="text-stone-900 font-light hover:text-stone-600 transition-colors"
                  >
                    (303) 815-3463
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2">
                    Location
                  </h3>
                  <p className="text-stone-900 font-light">
                    Boulder County, Colorado
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2">
                    Service Area
                  </h3>
                  <p className="text-stone-600 font-light text-sm leading-relaxed">
                    Boulder, Lafayette, Louisville, Superior, Longmont, Erie,
                    and surrounding communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
