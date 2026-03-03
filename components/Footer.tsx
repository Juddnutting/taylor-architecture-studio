import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex flex-col leading-tight mb-4">
              <span className="text-lg font-light tracking-[0.2em] uppercase text-white">
                Taylor
              </span>
              <span className="text-[10px] font-light tracking-[0.15em] uppercase text-stone-500">
                Architecture Studio
              </span>
            </div>
            <p className="text-sm leading-relaxed text-stone-500 max-w-xs">
              Thoughtful residential architecture in Boulder County, Colorado.
              Custom homes, additions, and ADUs throughout Boulder County.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-500 mb-4">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-500 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xs font-light tracking-[0.15em] uppercase text-stone-500 mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-sm text-stone-500">
              <p>Boulder County, Colorado</p>
              <a
                href="mailto:info@taylorarchitecturestudio.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@taylorarchitecturestudio.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 text-center">
          <p className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Taylor Architecture Studio. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
