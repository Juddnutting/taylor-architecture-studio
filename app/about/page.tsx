import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Nicole Taylor Nutting | Boulder County Residential Architect",
  description:
    "Meet Nicole Taylor Nutting, founder of Taylor Architecture Studio. Dedicated to creating thoughtful, functional homes in Boulder County, Colorado. Licensed Architect.",
  alternates: {
    canonical: "https://taylorarchitecturestudio.com/about/",
  },
  openGraph: {
    title: "About Nicole Taylor Nutting | Boulder County Residential Architect",
    description:
      "Meet Nicole Taylor Nutting, founder of Taylor Architecture Studio. Dedicated to creating thoughtful, functional homes in Boulder County, Colorado.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-light tracking-[0.2em] uppercase text-stone-400 mb-3">
            About
          </p>
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 tracking-tight">
            Nicole Taylor Nutting
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 md:pb-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 max-w-lg mx-auto lg:mx-0 w-full">
              <Image
                src="/images/about/nicole.jpg"
                alt="Nicole Taylor Nutting, founder of Taylor Architecture Studio"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl md:text-3xl font-light text-stone-900 tracking-tight leading-tight mb-8">
                Every space should work beautifully for the people who live in
                it.
              </h2>

              <div className="space-y-6 text-stone-600 font-light leading-relaxed">
                <p>
                  Home is where life unfolds, and we believe your spaces should
                  support the way you truly live. At Taylor Architecture Studio,
                  we listen closely to your needs — whether you&apos;re making
                  room for a growing family, welcoming a parent, or building your
                  forever home.
                </p>
                <p>
                  Every project, from a new build to a thoughtful addition, is an
                  opportunity to create spaces that feel natural, functional, and
                  deeply personal. We know that even the smallest design
                  decisions can make a big difference.
                </p>
                <p>
                  Nicole relocated to Colorado from California in 2005 to
                  study Environmental Design and earned her Master of Architecture 
                  from CU Denver in 2011. Her expertise developed under Jeff
                  VanSambeek at Lodestone Design Group, where she gained deep
                  experience in residential design and learned to guide projects
                  seamlessly from initial concept through permit approval.
                </p>
                <p>
                  Her passion centers on single-family residential architecture,
                  particularly additions and renovations that transform underused
                  spaces into custom solutions tailored to a family&apos;s
                  lifestyle. She played a key role in Marshall Fire recovery
                  efforts in Louisville, helping families rebuild their homes and
                  their lives.
                </p>
                <p>
                  Outside the studio, Nicole enjoys spending time with her husband
                  of 17 years and wrangling their three childen.
                  She enjoys exploring Colorado through
                  hiking, skiing, swimming, and camping. Her hobbies include
                  gardening, cooking, and soaking in everything Colorado&apos;s
                  outdoor lifestyle has to offer.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-stone-200">
                <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-4">
                  Credentials
                </h3>
                <ul className="space-y-2 text-sm text-stone-600 font-light">
                  <li>Master of Architecture, CU Denver (2011)</li>
                  <li>Bachelor of Environmental Design, CU Boulder</li>
                  <li>Licensed Architect, State of Colorado</li>
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center mt-10 px-8 py-3 text-sm tracking-wide uppercase font-light border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
              >
                Work With Nicole
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
