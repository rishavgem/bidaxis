"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;

    if (!hero || !glow) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      glow.style.transform = `translate3d(${x - 250}px, ${
        y - 250
      }px, 0)`;
    };

    hero.addEventListener("mousemove", handleMouseMove);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-[#f7faff]"
      >
        {/* =====================================================
            PREMIUM BACKGROUND
        ===================================================== */}

        <div className="absolute inset-0 -z-50 bg-[linear-gradient(115deg,#ffffff_0%,#f8fbff_30%,#edf5ff_62%,#f2f8ff_100%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 -z-40 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.045) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Static mesh glows */}

        <div className="absolute -right-[180px] -top-[250px] -z-30 h-[780px] w-[780px] rounded-full bg-blue-300/30 blur-[150px]" />

        <div className="absolute right-[22%] top-[20%] -z-30 h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-[130px]" />

        <div className="absolute -left-[250px] top-[20%] -z-30 h-[650px] w-[650px] rounded-full bg-indigo-200/20 blur-[150px]" />

        <div className="absolute bottom-[-250px] left-[30%] -z-30 h-[500px] w-[900px] rounded-full bg-blue-200/30 blur-[140px]" />

        {/* Mouse responsive glow */}

        <div
          ref={glowRef}
          className="pointer-events-none absolute left-0 top-0 -z-20 hidden h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[120px] transition-transform duration-700 ease-out lg:block"
        />

        {/* =====================================================
            DECORATIVE ELEMENTS
        ===================================================== */}

        <div className="absolute left-[3%] top-[20%] hidden opacity-50 lg:block">
          <DotGrid />
        </div>

        <div className="absolute right-[3%] top-[12%] hidden rotate-12 opacity-40 lg:block">
          <DotGrid />
        </div>

        <div className="absolute left-[47%] top-[12%] hidden h-2 w-2 rounded-full bg-blue-500/60 lg:block" />

        <div className="absolute left-[44%] top-[20%] hidden h-1.5 w-1.5 rounded-full bg-cyan-500 lg:block" />

        {/* =====================================================
            HERO CONTENT
        ===================================================== */}

        <div className="relative mx-auto max-w-[1440px] px-6 pb-[210px] pt-14 md:px-8 lg:px-12 lg:pb-[205px] lg:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1.03fr_.97fr] xl:gap-16">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="mx-auto w-full max-w-[670px] lg:mx-0">

              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/75 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-blue-700 shadow-[0_8px_25px_rgba(37,99,235,.08)] backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>

                India's Tender Discovery Platform
              </div>

              {/* Heading */}

              <h1 className="mt-7 text-[44px] font-black leading-[1.03] tracking-[-0.045em] text-[#071630] sm:text-[54px] lg:text-[61px] xl:text-[68px]">
                Discover Government

                <span className="relative mt-1 block w-fit bg-gradient-to-r from-[#155EEF] via-[#2563eb] to-[#0284c7] bg-clip-text text-transparent">
                  Opportunities.

                  <span className="absolute -bottom-2 left-0 h-[5px] w-[145px] rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />
                </span>

                <span className="mt-4 block">
                  Grow Your Business.
                </span>
              </h1>

              {/* Description */}

              <p className="mt-8 max-w-[610px] text-[16px] leading-[1.8] text-slate-600 lg:text-[17px]">
                Discover GeM and government tender opportunities across India
                with intelligent search, timely insights and professional
                bidding support.
              </p>

              {/* CTA */}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/tenders"
                  className="group inline-flex h-[55px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#155EEF] to-[#0b5bd3] px-7 text-sm font-extrabold text-white shadow-[0_15px_35px_rgba(21,94,239,.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(21,94,239,.32)]"
                >
                  Explore Tenders

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex h-[55px] items-center justify-center gap-2 rounded-xl border border-white/80 bg-white/75 px-7 text-sm font-extrabold text-slate-800 shadow-[0_10px_30px_rgba(15,23,42,.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-700"
                >
                  Talk to an Expert
                </Link>
              </div>

              {/* Features */}

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <Feature text="Tender Discovery" />
                <Feature text="GeM Assistance" />
                <Feature text="Bid Support" />
              </div>
            </div>

            {/* =================================================
                RIGHT PREMIUM GRAPHIC
            ================================================= */}

            <div className="relative mx-auto hidden h-[530px] w-full max-w-[650px] lg:block">

              {/* Outer glow */}

              <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/35 blur-[50px]" />

              {/* Glass sphere */}

              <div className="absolute left-1/2 top-1/2 h-[445px] w-[445px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/90 bg-white/35 shadow-[inset_0_0_70px_rgba(255,255,255,.8),0_35px_100px_rgba(37,99,235,.13)] backdrop-blur-md" />

              {/* Inner orbit */}

              <div className="absolute left-1/2 top-1/2 h-[365px] w-[365px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300/80" />

              {/* Orbit dots */}

              <div className="absolute left-[77px] top-[130px] h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_0_9px_rgba(250,204,21,.13)]" />

              <div className="absolute bottom-[105px] right-[65px] h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_9px_rgba(37,99,235,.13)]" />

              <div className="absolute right-[90px] top-[75px] h-2 w-2 rounded-full bg-cyan-500" />

              {/* =================================================
                  DOCUMENT STACK
              ================================================= */}

              <div className="absolute left-[185px] top-[82px] h-[360px] w-[265px] rotate-[9deg] rounded-[30px] border border-blue-100/80 bg-gradient-to-br from-blue-100 to-blue-200/60 shadow-xl" />

              <div className="absolute left-[157px] top-[78px] h-[365px] w-[270px] -rotate-[6deg] rounded-[30px] border border-white/80 bg-white/60 shadow-xl backdrop-blur-xl" />

              {/* Main tender document */}

              <div className="absolute left-[178px] top-[55px] z-10 h-[390px] w-[300px] rounded-[30px] border border-white/90 bg-white/95 p-7 shadow-[0_40px_100px_rgba(30,64,175,.22)] backdrop-blur-xl">

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#155EEF] to-[#0b5bd3] text-white shadow-[0_10px_25px_rgba(21,94,239,.25)]">
                    <DocumentIcon />
                  </div>

                  <span className="rounded-full border border-green-100 bg-green-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.12em] text-green-700">
                    ● Active
                  </span>
                </div>

                <div className="mt-6 text-[9px] font-black uppercase tracking-[0.18em] text-blue-600">
                  Government Tender
                </div>

                <h3 className="mt-2 text-[22px] font-black leading-[1.25] tracking-[-0.02em] text-slate-950">
                  Supply & Procurement
                  <br />
                  Opportunity
                </h3>

                {/* Fake document */}

                <div className="mt-6 space-y-3">
                  <Skeleton width="100%" />
                  <Skeleton width="84%" />
                  <Skeleton width="94%" />
                </div>

                {/* Details */}

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3">
                    <div className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                      Tender ID
                    </div>

                    <div className="mt-1 text-[11px] font-black text-slate-800">
                      BID/2026/0192
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-3">
                    <div className="text-[8px] font-black uppercase tracking-wider text-blue-400">
                      Status
                    </div>

                    <div className="mt-1 text-[11px] font-black text-blue-700">
                      Open
                    </div>
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-xs font-bold text-slate-500">
                    View Details
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#155EEF] to-[#0b5bd3] text-white shadow-lg">
                    →
                  </div>
                </div>
              </div>

              {/* =================================================
                  FLOATING GEM CARD
              ================================================= */}

              <div className="bidaxis-float absolute right-[-5px] top-[105px] z-30 w-[195px] rounded-[20px] border border-white/80 bg-white/75 p-4 shadow-[0_20px_60px_rgba(15,23,42,.14)] backdrop-blur-2xl">
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 text-xl">
                    🏛️
                  </div>

                  <div>
                    <div className="text-[9px] font-black uppercase tracking-wider text-slate-400">
                      Opportunity
                    </div>

                    <div className="text-sm font-black text-slate-900">
                      GeM Tender
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 text-[10px] font-extrabold text-green-600">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Open for Bidding
                </div>
              </div>

              {/* =================================================
                  RAILWAY CARD
              ================================================= */}

              <div className="bidaxis-float-medium absolute left-[5px] top-[115px] z-30 w-[175px] rounded-[18px] border border-white/80 bg-white/75 p-4 shadow-[0_18px_50px_rgba(15,23,42,.12)] backdrop-blur-2xl">
                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-lg">
                    🚆
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                      Department
                    </div>

                    <div className="text-xs font-black text-slate-900">
                      Railways
                    </div>
                  </div>
                </div>

                <div className="mt-3 text-[10px] font-bold text-blue-600">
                  New opportunities →
                </div>
              </div>

              {/* =================================================
                  VERIFIED CARD
              ================================================= */}

              <div className="bidaxis-float-slow absolute bottom-[55px] left-[25px] z-30 w-[190px] rounded-[19px] border border-white/80 bg-white/80 p-4 shadow-[0_20px_55px_rgba(15,23,42,.13)] backdrop-blur-2xl">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 font-black text-green-700">
                    ✓
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                      Tender Status
                    </div>

                    <div className="text-sm font-black text-slate-900">
                      Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  CLOSING CARD
              ================================================= */}

              <div className="bidaxis-float-medium absolute bottom-[40px] right-[5px] z-30 rounded-[16px] border border-orange-100 bg-orange-50/85 px-5 py-3.5 shadow-[0_15px_40px_rgba(249,115,22,.10)] backdrop-blur-xl">

                <div className="text-[8px] font-black uppercase tracking-[0.12em] text-orange-500">
                  Closing Soon
                </div>

                <div className="mt-1 text-[11px] font-black text-slate-800">
                  Check Deadline →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CURVED BOTTOM TRANSITION
        ===================================================== */}

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[125px] overflow-hidden">
          <svg
            viewBox="0 0 1440 150"
            preserveAspectRatio="none"
            className="absolute bottom-0 h-full w-full"
          >
            <path
              d="M0,90 C240,145 470,135 720,105 C980,72 1180,35 1440,75 L1440,150 L0,150 Z"
              fill="rgba(255,255,255,.60)"
            />

            <path
              d="M0,112 C250,145 480,132 720,115 C970,95 1190,60 1440,90 L1440,150 L0,150 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* =====================================================
            SEARCH PANEL
        ===================================================== */}

        <div className="absolute bottom-[28px] left-0 right-0 z-40 px-4 sm:px-6">
          <div className="mx-auto max-w-[1240px] rounded-[24px] border border-white/90 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,.14)] backdrop-blur-2xl md:p-5">

            <div className="flex flex-col gap-3 lg:flex-row">

              {/* Search */}

              <div className="relative flex-[1.7]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 text-slate-400">
                  <SearchIcon />
                </div>

                <input
                  type="text"
                  placeholder="Search tenders by keyword, product, Tender ID..."
                  className="h-[58px] w-full rounded-xl border border-slate-200/80 bg-white/70 pl-14 pr-4 text-sm font-semibold text-slate-800 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/70"
                />
              </div>

              {/* Category */}

              <select className="h-[58px] flex-1 rounded-xl border border-slate-200/80 bg-white/70 px-5 text-sm font-semibold text-slate-600 outline-none transition hover:border-blue-300">
                <option>All Categories</option>
                <option>IT & Electronics</option>
                <option>Civil Works</option>
                <option>Electrical</option>
                <option>Medical</option>
                <option>Services</option>
              </select>

              {/* Location */}

              <select className="h-[58px] flex-1 rounded-xl border border-slate-200/80 bg-white/70 px-5 text-sm font-semibold text-slate-600 outline-none transition hover:border-blue-300">
                <option>All India</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
                <option>Gujarat</option>
                <option>Uttar Pradesh</option>
                <option>Rajasthan</option>
                <option>Karnataka</option>
              </select>

              {/* Search button */}

              <button
                type="button"
                className="group h-[58px] rounded-xl bg-gradient-to-r from-[#155EEF] to-[#0b5bd3] px-9 text-sm font-black text-white shadow-[0_12px_28px_rgba(21,94,239,.25)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(21,94,239,.32)]"
              >
                Search

                <span className="ml-2 inline-block text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            {/* Popular searches */}

            <div className="mt-4 flex flex-wrap items-center gap-2 px-1">
              <span className="mr-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                Popular:
              </span>

              {[
                "GeM",
                "Railways",
                "Defence",
                "IT",
                "Civil Works",
                "Medical",
              ].map((item) => (
                <span
                  key={item}
                  className="cursor-pointer rounded-full border border-slate-100 bg-white/70 px-3.5 py-1.5 text-[10px] font-bold text-slate-600 shadow-sm transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VERY SMALL TRANSITION SPACE

          Search is now INSIDE Hero instead of hanging outside.
          This prevents the previous overlap/gap issue.
      ===================================================== */}

      <div className="h-5 bg-white md:h-7" />

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes bidaxisFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }

          50% {
            transform: translateY(-9px) rotate(0.4deg);
          }
        }

        @keyframes bidaxisFloatMedium {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes bidaxisFloatSlow {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(7px);
          }
        }

        .bidaxis-float {
          animation: bidaxisFloat 4.5s ease-in-out infinite;
        }

        .bidaxis-float-medium {
          animation: bidaxisFloatMedium 5.2s ease-in-out infinite;
        }

        .bidaxis-float-slow {
          animation: bidaxisFloatSlow 6s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bidaxis-float,
          .bidaxis-float-medium,
          .bidaxis-float-slow {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}


/* ============================================================
   FEATURE
============================================================ */

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
      <div className="flex h-[21px] w-[21px] items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[10px] font-black text-blue-700">
        ✓
      </div>

      {text}
    </div>
  );
}


/* ============================================================
   SKELETON
============================================================ */

function Skeleton({ width }: { width: string }) {
  return (
    <div
      className="h-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50"
      style={{ width }}
    />
  );
}


/* ============================================================
   DOT GRID
============================================================ */

function DotGrid() {
  return (
    <div className="grid grid-cols-5 gap-3">
      {Array.from({ length: 25 }).map((_, index) => (
        <span
          key={index}
          className="h-1.5 w-1.5 rounded-full bg-blue-300"
        />
      ))}
    </div>
  );
}


/* ============================================================
   DOCUMENT ICON
============================================================ */

function DocumentIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

      <path d="M14 2v6h6" />

      <path d="M8 13h8" />

      <path d="M8 17h6" />
    </svg>
  );
}


/* ============================================================
   SEARCH ICON
============================================================ */

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="11" cy="11" r="8" />

      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}