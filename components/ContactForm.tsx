"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <h3 className="text-2xl font-light text-stone-900 mb-4">
          Thank you for reaching out!
        </h3>
        <p className="text-stone-500 font-light">
          We&apos;ll review your message and get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
        })
          .then(() => setSubmitted(true))
          .catch(() => alert("Something went wrong. Please try again or email us directly."));
      }}
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
            placeholder="(303) 555-0123"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="project-type"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Project Type
          </label>
          <select
            id="project-type"
            name="project-type"
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-white"
          >
            <option value="">Select a project type</option>
            <option value="custom-home">Custom Home</option>
            <option value="addition">Addition</option>
            <option value="renovation">Renovation</option>
            <option value="adu">ADU / Accessory Dwelling Unit</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Project Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
            placeholder="City or neighborhood"
          />
        </div>

        {/* Timeline */}
        <div>
          <label
            htmlFor="timeline"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-white"
          >
            <option value="">When are you looking to start?</option>
            <option value="immediately">Immediately</option>
            <option value="1-3-months">1-3 months</option>
            <option value="3-6-months">3-6 months</option>
            <option value="6-12-months">6-12 months</option>
            <option value="just-exploring">Just exploring</option>
          </select>
        </div>

        {/* Budget Range */}
        <div className="md:col-span-2">
          <label
            htmlFor="budget"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 focus:outline-none focus:border-stone-900 transition-colors bg-white"
          >
            <option value="">Select a budget range</option>
            <option value="under-250k">Under $250,000</option>
            <option value="250k-500k">$250,000 - $500,000</option>
            <option value="500k-1m">$500,000 - $1,000,000</option>
            <option value="1m-plus">$1,000,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        {/* Message */}
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-xs font-light tracking-[0.15em] uppercase text-stone-400 mb-2"
          >
            Tell Us About Your Project *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full border border-stone-200 px-4 py-3 text-sm font-light text-stone-900 placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors resize-none"
            placeholder="What are you envisioning? What's working or not working in your current space?"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex items-center px-10 py-3 text-sm tracking-wide uppercase font-light bg-stone-900 text-white hover:bg-stone-800 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
