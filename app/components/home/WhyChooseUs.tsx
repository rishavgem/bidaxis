"use client";

import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Experienced Consultants",
    description:
      "Professional guidance backed by experience in government procurement, GeM and tender consultancy.",
    icon: <ConsultantIcon />,
    tag: "Expert Guidance",
    stat: "Tender Experts",
  },
  {
    number: "02",
    title: "End-to-End Support",
    description:
      "From opportunity discovery and GeM assistance to bid documentation and participation support.",
    icon: <WorkflowIcon />,
    tag: "Complete Workflow",
    stat: "One Platform",
  },
  {
    number: "03",
    title: "Focused Bid Assistance",
    description:
      "Structured tender support designed to help businesses prepare and participate more effectively.",
    icon: <TargetIcon />,
    tag: "Bid Focused",
    stat: "Structured Support",
  },
  {
    number: "04",
    title: "Dedicated Account Manager",
    description:
      "A single point of contact to coordinate your tender and GeM-related service requirements.",
    icon: <ManagerIcon />,
    tag: "Personal Support",
    stat: "Dedicated Contact",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[280px] top-[100px] h-[600px] w-[600px] rounded-full bg-blue-100/45 blur-[150px]" />

        <div className="absolute -right-[300px] bottom-[-100px] h-[650px] w-[650px] rounded-full bg-cyan-100/40 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,.14) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#155EEF]">
              Why BidAxis
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />
          </div>

          <h2 className="mt-5 text-[37px] font-black leading-[1.08] tracking-[-0.045em] text-[#071630] sm:text-[44px] lg:text-[52px]">
            More Than Tender Search.
            <span className="block bg-gradient-to-r from-[#155EEF] to-[#0284c7] bg-clip-text text-transparent">
              A Procurement Support Ecosystem.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">
            BidAxis brings tender discovery, professional assistance and
            structured procurement support together so your business can focus
            on relevant government opportunities.
          </p>
        </div>

        {/* =====================================================
            MAIN GRAPHICAL AREA
        ===================================================== */}

        <div className="mt-16 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          {/* =================================================
              LEFT - GRAPHICAL PROCUREMENT ENGINE
          ================================================= */}

          <div className="relative min-h-[600px] overflow-hidden rounded-[34px] bg-gradient-to-br from-[#061a38] via-[#0b3473] to-[#155EEF] p-7 shadow-[0_35px_90px_rgba(7,27,59,.22)] sm:p-9">
            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.10]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Glows */}

            <div className="absolute -right-[120px] -top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-[90px]" />

            <div className="absolute -bottom-[180px] -left-[100px] h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-[100px]" />

            {/* Top label */}

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-blue-100 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />

                  <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
                </span>

                BidAxis Procurement Journey
              </div>

              <h3 className="mt-6 max-w-[420px] text-[29px] font-black leading-[1.15] tracking-[-0.035em] text-white sm:text-[34px]">
                One connected journey from
                <span className="text-cyan-300"> opportunity to support.</span>
              </h3>
            </div>

            {/* =================================================
                PROCESS GRAPHIC
            ================================================= */}

            <div className="relative mt-12">
              {/* Vertical connection */}

              <div className="absolute bottom-[30px] left-[25px] top-[30px] w-px bg-gradient-to-b from-cyan-300 via-blue-300 to-white/20" />

              <JourneyStep
                number="01"
                title="Discover"
                text="Find relevant opportunities"
                icon={<SearchIcon />}
                active
              />

              <JourneyStep
                number="02"
                title="Evaluate"
                text="Review tender requirements"
                icon={<EvaluateIcon />}
              />

              <JourneyStep
                number="03"
                title="Prepare"
                text="Organise bid documentation"
                icon={<DocumentIcon />}
              />

              <JourneyStep
                number="04"
                title="Participate"
                text="Get structured assistance"
                icon={<RocketIcon />}
              />
            </div>

            {/* =================================================
                FLOATING STATUS
            ================================================= */}

            <div className="why-float absolute bottom-8 right-7 hidden w-[185px] rounded-[18px] border border-white/15 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-2xl sm:block">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-200">
                    Support Status
                  </div>

                  <div className="mt-1 text-[12px] font-black">
                    Expert Assistance
                  </div>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400/20 text-green-300">
                  ✓
                </div>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-300 to-blue-300" />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT BENEFIT CARDS
          ================================================= */}

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.number}
                benefit={benefit}
                featured={index === 0}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            TRUST FLOW
        ===================================================== */}

        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-r from-white via-[#f8fbff] to-white px-6 py-7 shadow-[0_15px_45px_rgba(15,23,42,.05)] lg:px-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center">
            <div className="shrink-0 lg:w-[220px]">
              <div className="text-[9px] font-black uppercase tracking-[0.18em] text-blue-600">
                Connected Support
              </div>

              <div className="mt-2 text-[17px] font-black text-[#071630]">
                Built around your tender journey
              </div>
            </div>

            <div className="hidden h-[45px] w-px bg-slate-200 lg:block" />

            <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <TrustItem
                icon={<SearchIcon />}
                title="Discover"
                text="Opportunities"
              />

              <TrustItem
                icon={<EvaluateIcon />}
                title="Understand"
                text="Requirements"
              />

              <TrustItem
                icon={<DocumentIcon />}
                title="Prepare"
                text="Documentation"
              />

              <TrustItem
                icon={<ManagerIcon />}
                title="Get"
                text="Professional Support"
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[25px] border border-blue-100 bg-blue-50/60 px-7 py-7 sm:flex-row">
          <div>
            <div className="text-[9px] font-black uppercase tracking-[0.16em] text-blue-600">
              Need tender assistance?
            </div>

            <div className="mt-2 text-[19px] font-black tracking-[-0.02em] text-[#071630]">
              Speak with the BidAxis team about your requirements.
            </div>
          </div>

          <Link
            href="/contact"
            className="group inline-flex h-[50px] shrink-0 items-center gap-3 rounded-xl bg-[#155EEF] px-6 text-[12px] font-black text-white shadow-[0_12px_30px_rgba(21,94,239,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[#0b51d1]"
          >
            Talk to an Expert

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>{`
        @keyframes whyFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes whyCardGlow {
          0%, 100% {
            opacity: .25;
          }

          50% {
            opacity: .55;
          }
        }

        .why-float {
          animation: whyFloat 4.5s ease-in-out infinite;
        }

        .why-card-glow {
          animation: whyCardGlow 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .why-float,
          .why-card-glow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   BENEFIT CARD
============================================================ */

function BenefitCard({
  benefit,
  featured,
}: {
  benefit: {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
    stat: string;
  };
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative min-h-[285px] overflow-hidden rounded-[26px] border p-6 transition duration-500 hover:-translate-y-2 ${
        featured
          ? "border-blue-200 bg-gradient-to-br from-blue-50 via-white to-white shadow-[0_22px_55px_rgba(37,99,235,.10)]"
          : "border-slate-200/80 bg-white shadow-[0_15px_40px_rgba(15,23,42,.05)] hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(37,99,235,.10)]"
      }`}
    >
      {/* Glow */}

      <div className="why-card-glow absolute -right-[70px] -top-[70px] h-[180px] w-[180px] rounded-full bg-blue-100 blur-[50px]" />

      {/* Background number */}

      <div className="absolute -right-1 -top-8 text-[100px] font-black tracking-[-0.08em] text-slate-50 transition group-hover:text-blue-50">
        {benefit.number}
      </div>

      <div className="relative">
        {/* Icon + tag */}

        <div className="flex items-start justify-between gap-3">
          <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[15px] border border-blue-100 bg-gradient-to-br from-blue-50 to-white text-[#155EEF] shadow-[0_8px_20px_rgba(37,99,235,.08)] transition duration-500 group-hover:scale-110 group-hover:bg-[#155EEF] group-hover:text-white">
            {benefit.icon}
          </div>

          <span className="rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-slate-500">
            {benefit.tag}
          </span>
        </div>

        {/* Text */}

        <h3 className="mt-6 text-[20px] font-black tracking-[-0.025em] text-[#071630] transition group-hover:text-[#155EEF]">
          {benefit.title}
        </h3>

        <p className="mt-3 text-[12px] leading-[1.75] text-slate-500">
          {benefit.description}
        </p>

        {/* Status */}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.12em] text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            {benefit.stat}
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-blue-600 transition group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
            →
          </div>
        </div>
      </div>

      {/* Bottom line */}

      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#155EEF] to-cyan-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

/* ============================================================
   JOURNEY STEP
============================================================ */

function JourneyStep({
  number,
  title,
  text,
  icon,
  active,
}: {
  number: string;
  title: string;
  text: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div className="relative mb-5 flex items-center gap-4 last:mb-0">
      <div
        className={`relative z-10 flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] border ${
          active
            ? "border-cyan-300/50 bg-cyan-300 text-[#071b3b] shadow-[0_0_30px_rgba(103,232,249,.25)]"
            : "border-white/15 bg-white/10 text-white backdrop-blur-xl"
        }`}
      >
        {icon}
      </div>

      <div className="flex-1 rounded-[17px] border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-[8px] font-black uppercase tracking-[0.15em] text-blue-200">
              Step {number}
            </div>

            <div className="mt-1 text-[13px] font-black text-white">
              {title}
            </div>
          </div>

          <div className="text-[9px] font-semibold text-blue-100/70">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   TRUST ITEM
============================================================ */

function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="group flex items-center gap-3 rounded-[15px] border border-transparent p-2 transition hover:border-blue-100 hover:bg-blue-50/70">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <div>
        <div className="text-[9px] font-black uppercase tracking-[0.12em] text-slate-400">
          {title}
        </div>

        <div className="mt-0.5 text-[11px] font-black text-slate-800">
          {text}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function ConsultantIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="m17 11 2 2 3-3" />
    </svg>
  );
}

function WorkflowIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="6" height="6" rx="2" />
      <rect x="15" y="15" width="6" height="6" rx="2" />
      <path d="M9 6h4a3 3 0 0 1 3 3v6" />
      <path d="m13 12 3 3 3-3" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
      <path d="m16 8 5-5" />
    </svg>
  );
}

function ManagerIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21a7 7 0 0 1 14 0" />
      <path d="M17 8h5" />
      <path d="M19.5 5.5v5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function EvaluateIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11 11 13 15 9" />
      <path d="M7 3h10l3 3v15H4V3h3Z" />
      <path d="M8 17h8" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 6c4-4 7-3 7-3s1 3-3 7l-5 5-4-4 5-5Z" />
      <path d="m9 11-4 1-2 3 6 1" />
      <path d="m13 15-1 4-3 2-1-6" />
      <circle cx="16" cy="8" r="1.5" />
    </svg>
  );
}