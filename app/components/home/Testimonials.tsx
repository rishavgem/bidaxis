"use client";

import { useState } from "react";

type Testimonial = {
  name: string;
  designation: string;
  company: string;
  location: string;
  initials: string;
  service: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    designation: "Director",
    company: "Vertex Industrial Solutions Pvt. Ltd.",
    location: "New Delhi",
    initials: "RM",
    service: "GeM Account Support",
    quote:
      "We were already registered on GeM, but managing product listings and identifying relevant opportunities was taking a lot of our time. The BidAxis team helped us organise the process and made the day-to-day coordination much easier.",
  },
  {
    name: "Neha Agarwal",
    designation: "Business Head",
    company: "Aarav Office Systems",
    location: "Noida, Uttar Pradesh",
    initials: "NA",
    service: "Tender Documentation",
    quote:
      "Our team needed support understanding tender documents and preparing the required paperwork. BidAxis explained the requirements clearly and helped us keep the documentation organised before submission.",
  },
  {
    name: "Vikram Singh",
    designation: "Managing Partner",
    company: "NorthStar Safety Solutions",
    location: "Gurugram, Haryana",
    initials: "VS",
    service: "Tender Discovery",
    quote:
      "Earlier we were checking multiple portals manually for opportunities. With BidAxis, it became easier for our team to focus on tenders that were more relevant to our product categories and business profile.",
  },
  {
    name: "Priya Nair",
    designation: "Operations Manager",
    company: "InnovaTech Systems",
    location: "Bengaluru, Karnataka",
    initials: "PN",
    service: "Bid Assistance",
    quote:
      "What we appreciated most was the communication. Whenever our team had a question about a tender requirement, we had someone to coordinate with instead of trying to interpret everything on our own.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  const previous = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const next = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[300px] top-[50px] h-[620px] w-[620px] rounded-full bg-blue-100/50 blur-[150px]" />

        <div className="absolute -right-[300px] bottom-[-180px] h-[650px] w-[650px] rounded-full bg-cyan-100/40 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,.12) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[800px] text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#155EEF]">
              Client Experiences
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />
          </div>

          <h2 className="mt-5 text-[37px] font-black leading-[1.08] tracking-[-0.045em] text-[#071630] sm:text-[44px] lg:text-[50px]">
            What Businesses Say
            <span className="text-[#155EEF]"> About BidAxis.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-slate-500">
            Experiences from businesses using tender, GeM and procurement
            support services.
          </p>
        </div>

        {/* =====================================================
            MAIN TESTIMONIAL
        ===================================================== */}

        <div className="mt-14 overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,23,42,.09)]">
          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* =================================================
                LEFT CLIENT PROFILE
            ================================================= */}

            <div className="relative min-h-[390px] overflow-hidden bg-gradient-to-br from-[#061a38] via-[#0b3473] to-[#155EEF] p-8 text-white lg:p-10">
              {/* Grid */}

              <div
                className="absolute inset-0 opacity-[0.09]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Glow */}

              <div className="absolute -right-[120px] -top-[120px] h-[350px] w-[350px] rounded-full bg-cyan-300/25 blur-[90px]" />

              <div className="absolute -bottom-[170px] -left-[100px] h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[100px]" />

              {/* Big quote graphic */}

              <div className="absolute right-7 top-3 select-none font-serif text-[130px] leading-none text-white/[0.06]">
                “
              </div>

              <div key={active} className="testimonial-profile relative">
                {/* Verified badge */}

                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[8px] font-black uppercase tracking-[0.15em] text-blue-100 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  Client Experience
                </div>

                {/* Avatar */}

                <div className="mt-10 flex h-[82px] w-[82px] items-center justify-center rounded-[24px] border border-white/20 bg-white/10 text-[24px] font-black shadow-[0_20px_45px_rgba(0,0,0,.15)] backdrop-blur-xl">
                  {testimonial.initials}
                </div>

                {/* Person */}

                <h3 className="mt-6 text-[22px] font-black tracking-[-0.02em]">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-[11px] font-bold text-cyan-300">
                  {testimonial.designation}
                </p>

                {/* Company */}

                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/10 text-blue-100">
                      <BuildingIcon />
                    </div>

                    <div>
                      <div className="text-[11px] font-black leading-5 text-white">
                        {testimonial.company}
                      </div>

                      <div className="mt-1 flex items-center gap-1.5 text-[9px] text-blue-100/60">
                        <LocationIcon />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service */}

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-2 text-[8px] font-black uppercase tracking-[0.12em] text-cyan-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  {testimonial.service}
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT REVIEW
            ================================================= */}

            <div
              key={`review-${active}`}
              className="testimonial-review relative flex min-h-[390px] flex-col justify-center p-8 sm:p-10 lg:p-14"
            >
              {/* Decorative quote */}

              <div className="pointer-events-none absolute right-10 top-5 select-none font-serif text-[150px] leading-none text-blue-50">
                “
              </div>

              <div className="relative">
                {/* Stars */}

                <div className="flex items-center gap-3">
                  <div className="flex gap-1 text-[18px] text-[#F5B91E]">
                    ★★★★★
                  </div>

                  <span className="h-4 w-px bg-slate-200" />

                  <span className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
                    Customer Feedback
                  </span>
                </div>

                {/* Quote */}

                <blockquote className="mt-8 max-w-[720px] text-[19px] font-semibold leading-[1.75] tracking-[-0.02em] text-[#17233a] sm:text-[22px]">
                  “{testimonial.quote}”
                </blockquote>

                {/* Bottom */}

                <div className="mt-10 flex flex-col gap-6 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-[12px] font-black text-[#071630]">
                      {testimonial.name}
                    </div>

                    <div className="mt-1 text-[9px] font-semibold text-slate-400">
                      {testimonial.designation} · {testimonial.company}
                    </div>
                  </div>

                  {/* Navigation */}

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Previous testimonial"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#155EEF] text-white shadow-[0_10px_25px_rgba(21,94,239,.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b51d1]"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLIENT SELECTOR
        ===================================================== */}

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => {
            const selected = active === index;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-[18px] border p-4 text-left transition duration-300 ${
                  selected
                    ? "border-blue-200 bg-blue-50 shadow-[0_12px_30px_rgba(37,99,235,.08)]"
                    : "border-slate-200 bg-white hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_10px_25px_rgba(15,23,42,.05)]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] text-[10px] font-black transition ${
                      selected
                        ? "bg-[#155EEF] text-white"
                        : "bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700"
                    }`}
                  >
                    {item.initials}
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-[10px] font-black text-slate-800">
                      {item.name}
                    </div>

                    <div className="mt-1 truncate text-[8px] font-semibold text-slate-400">
                      {item.company}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span
                    className={`text-[8px] font-black ${
                      selected ? "text-blue-700" : "text-slate-400"
                    }`}
                  >
                    {item.service}
                  </span>

                  <span
                    className={`h-2 w-2 rounded-full ${
                      selected ? "bg-blue-600" : "bg-slate-200"
                    }`}
                  />
                </div>

                {selected && (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-[#155EEF] to-cyan-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes testimonialReview {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes testimonialProfile {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .testimonial-review {
          animation: testimonialReview .4s ease both;
        }

        .testimonial-profile {
          animation: testimonialProfile .4s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-review,
          .testimonial-profile {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   ICONS
============================================================ */

function BuildingIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M6 21V10" />
      <path d="M18 21V10" />
      <path d="M4 10h16" />
      <path d="m12 3 8 4H4l8-4Z" />
      <path d="M9 14v3" />
      <path d="M15 14v3" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}