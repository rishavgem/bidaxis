"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type ServiceKey =
  | "discovery"
  | "gem"
  | "bid"
  | "management"
  | "growth"
  | "consultancy";

type Service = {
  key: ServiceKey;
  number: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  image: string;
  icon: ReactNode;
  stat: string;
  points: string[];
};

/* ============================================================
   SERVICES DATA
============================================================ */

const services: Service[] = [
  {
    key: "discovery",
    number: "01",
    eyebrow: "Opportunity Intelligence",
    title: "Tender Search & Discovery",
    shortTitle: "Tender Discovery",
    description:
      "Discover relevant government and GeM tender opportunities aligned with your products, services, categories and business capabilities.",
    href: "/tenders",
    image: "/services/tender-discovery.webp",
    icon: <SearchIcon />,
    stat: "Smart Discovery",
    points: [
      "Government tender discovery",
      "GeM opportunity search",
      "Category-based opportunities",
    ],
  },
  {
    key: "gem",
    number: "02",
    eyebrow: "GeM Marketplace",
    title: "GeM Account Management",
    shortTitle: "GeM Management",
    description:
      "Professional assistance for managing your GeM presence, marketplace opportunities and day-to-day account activities.",
    href: "/pricing",
    image: "/services/gem-management.webp",
    icon: <BuildingIcon />,
    stat: "Managed Support",
    points: [
      "GeM account assistance",
      "Opportunity monitoring",
      "Marketplace support",
    ],
  },
  {
    key: "bid",
    number: "03",
    eyebrow: "Bid Preparation",
    title: "Bid Documentation Support",
    shortTitle: "Bid Support",
    description:
      "Get structured assistance with tender documents, compliance requirements and preparation for bid participation.",
    href: "/pricing",
    image: "/services/bid-support.webp",
    icon: <DocumentIcon />,
    stat: "Bid Ready",
    points: [
      "Document preparation",
      "Compliance assistance",
      "Bid submission support",
    ],
  },
  {
    key: "management",
    number: "04",
    eyebrow: "Tender Workflow",
    title: "Tender Management",
    shortTitle: "Tender Management",
    description:
      "Manage tender opportunities through a structured workflow from discovery and evaluation to participation and follow-up.",
    href: "/pricing",
    image: "/services/tender-management.webp",
    icon: <WorkflowIcon />,
    stat: "End-to-End",
    points: [
      "Opportunity tracking",
      "Tender coordination",
      "Participation assistance",
    ],
  },
  {
    key: "growth",
    number: "05",
    eyebrow: "Business Growth",
    title: "Strategic Growth Management",
    shortTitle: "Growth Strategy",
    description:
      "Build a structured approach to GeM opportunities with professional account, opportunity and growth assistance.",
    href: "/pricing",
    image: "/services/growth-management.webp",
    icon: <GrowthIcon />,
    stat: "Growth Focused",
    points: [
      "Opportunity planning",
      "Growth assistance",
      "Strategic GeM support",
    ],
  },
  {
    key: "consultancy",
    number: "06",
    eyebrow: "Expert Assistance",
    title: "Tender Consultancy",
    shortTitle: "Consultancy",
    description:
      "Get professional guidance for tender participation, procurement processes and government marketplace requirements.",
    href: "/contact",
    image: "/services/consultancy.webp",
    icon: <SupportIcon />,
    stat: "Expert Guidance",
    points: [
      "Professional guidance",
      "Tender participation support",
      "Dedicated assistance",
    ],
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function Services() {
  const [active, setActive] = useState<ServiceKey>("discovery");

  const activeService =
    services.find((service) => service.key === active) ?? services[0];

  return (
    <section className="relative overflow-hidden bg-[#f7faff] py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[320px] top-[180px] h-[720px] w-[720px] rounded-full bg-blue-100/60 blur-[150px]" />

        <div className="absolute -right-[320px] top-[20px] h-[720px] w-[720px] rounded-full bg-cyan-100/50 blur-[160px]" />

        <div className="absolute bottom-[-400px] left-[30%] h-[700px] w-[700px] rounded-full bg-indigo-100/40 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto max-w-[830px] text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#155EEF]">
              BidAxis Capabilities
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />
          </div>

          <h2 className="mt-5 text-[37px] font-black leading-[1.08] tracking-[-0.045em] text-[#071630] sm:text-[44px] lg:text-[52px]">
            Government Procurement,{" "}
            <span className="bg-gradient-to-r from-[#155EEF] via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Simplified.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[700px] text-[15px] leading-7 text-slate-500">
            One connected ecosystem for discovering opportunities, preparing
            bids, managing GeM activities and growing your government business.
          </p>
        </div>

        {/* =====================================================
            DESKTOP INTERACTIVE MAP
        ===================================================== */}

        <div className="relative mt-16 hidden h-[610px] lg:block">
          {/* Glass stage */}

          <div className="absolute inset-x-[55px] top-0 h-[570px] rounded-[44px] border border-white/90 bg-white/45 shadow-[0_35px_100px_rgba(37,99,235,.08)] backdrop-blur-xl" />

          {/* Center glow */}

          <div className="absolute left-1/2 top-[285px] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/35 blur-[90px]" />

          {/* Orbit rings */}

          <div className="absolute left-1/2 top-[285px] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-200/90" />

          <div className="absolute left-1/2 top-[285px] h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100" />

          {/* =================================================
              CONNECTING LINES
          ================================================= */}

          <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-[570px] w-full"
            viewBox="0 0 1200 570"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="serviceLine"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#93c5fd"
                  stopOpacity="0.15"
                />

                <stop
                  offset="50%"
                  stopColor="#2563eb"
                  stopOpacity="0.8"
                />

                <stop
                  offset="100%"
                  stopColor="#67e8f9"
                  stopOpacity="0.15"
                />
              </linearGradient>
            </defs>

            <path
              d="M600 285 C470 220 380 150 260 120"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />

            <path
              d="M600 285 C730 220 820 150 940 120"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />

            <path
              d="M600 285 C430 285 330 285 175 285"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />

            <path
              d="M600 285 C770 285 870 285 1025 285"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />

            <path
              d="M600 285 C470 350 380 420 260 455"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />

            <path
              d="M600 285 C730 350 820 420 940 455"
              stroke="url(#serviceLine)"
              strokeWidth="1.5"
              strokeDasharray="7 8"
            />
          </svg>

          {/* Rotating data ring */}

          <div className="service-ring absolute left-1/2 top-[285px] h-[345px] w-[345px] rounded-full border border-blue-300/30">
            <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,.8)]" />

            <span className="absolute bottom-[35px] left-[35px] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
          </div>

          {/* =================================================
              CENTRAL ENGINE
          ================================================= */}

          <div className="absolute left-1/2 top-[285px] z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="service-engine relative flex h-[235px] w-[235px] items-center justify-center rounded-full border border-blue-200/70 bg-white/85 shadow-[0_30px_80px_rgba(37,99,235,.18)] backdrop-blur-2xl">
              <div className="absolute inset-[15px] rounded-full border border-blue-100" />

              <div className="absolute inset-[31px] rounded-full bg-gradient-to-br from-[#071b3b] via-[#0d3f8f] to-[#155EEF] shadow-[inset_0_0_35px_rgba(255,255,255,.08)]" />

              <div className="relative z-10 text-center text-white">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[15px] border border-white/20 bg-white/10 backdrop-blur-xl">
                  <AxisIcon />
                </div>

                <div className="mt-4 text-[9px] font-black uppercase tracking-[0.22em] text-blue-200">
                  BidAxis
                </div>

                <div className="mt-1 text-[19px] font-black leading-[1.1]">
                  Opportunity
                  <br />
                  Engine
                </div>

                <div className="mt-3 flex items-center justify-center gap-2 text-[8px] font-bold text-blue-100">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />

                    <span className="relative h-2 w-2 rounded-full bg-cyan-300" />
                  </span>

                  Connected
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              SERVICE NODES
          ================================================= */}

          <ServiceNode
            service={services[0]}
            active={active === services[0].key}
            onClick={() => setActive(services[0].key)}
            className="left-[75px] top-[55px]"
          />

          <ServiceNode
            service={services[1]}
            active={active === services[1].key}
            onClick={() => setActive(services[1].key)}
            className="right-[75px] top-[55px]"
          />

          <ServiceNode
            service={services[2]}
            active={active === services[2].key}
            onClick={() => setActive(services[2].key)}
            className="left-[5px] top-[225px]"
          />

          <ServiceNode
            service={services[3]}
            active={active === services[3].key}
            onClick={() => setActive(services[3].key)}
            className="right-[5px] top-[225px]"
          />

          <ServiceNode
            service={services[4]}
            active={active === services[4].key}
            onClick={() => setActive(services[4].key)}
            className="left-[75px] top-[395px]"
          />

          <ServiceNode
            service={services[5]}
            active={active === services[5].key}
            onClick={() => setActive(services[5].key)}
            className="right-[75px] top-[395px]"
          />
        </div>

        {/* =====================================================
            MOBILE SERVICE SELECTOR
        ===================================================== */}

        <div className="mt-10 flex gap-2 overflow-x-auto pb-3 lg:hidden">
          {services.map((service) => {
            const selected = active === service.key;

            return (
              <button
                key={service.key}
                type="button"
                onClick={() => setActive(service.key)}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-black transition ${
                  selected
                    ? "border-blue-600 bg-blue-600 text-white shadow-[0_10px_25px_rgba(37,99,235,.2)]"
                    : "border-slate-200 bg-white text-slate-600"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center">
                  {service.icon}
                </span>

                {service.shortTitle}
              </button>
            );
          })}
        </div>

        {/* =====================================================
            ACTIVE SERVICE SHOWCASE
        ===================================================== */}

        <div className="relative mt-3 overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,23,42,.09)] lg:mt-0">
          <div className="grid lg:grid-cols-[1.03fr_.97fr]">
            {/* =================================================
                LEFT IMAGE / GRAPHIC
            ================================================= */}

            <div className="relative min-h-[430px] overflow-hidden bg-gradient-to-br from-[#071b3b] via-[#0b3473] to-[#155EEF] p-5 sm:min-h-[520px] sm:p-7">
              {/* Grid */}

              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />

              {/* Glows */}

              <div className="absolute -right-[100px] -top-[100px] h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-[90px]" />

              <div className="absolute -bottom-[150px] -left-[80px] h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[100px]" />

              {/* Main image frame */}

              <div className="relative h-full min-h-[390px] overflow-hidden rounded-[25px] border border-white/15 bg-white/10 shadow-[0_25px_70px_rgba(0,0,0,.18)] backdrop-blur-xl sm:min-h-[465px]">
                <ServiceImage
                  key={activeService.key}
                  service={activeService}
                />

                {/* Image overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06152f]/90 via-[#071b3b]/10 to-transparent" />

                {/* Top badges */}

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                  <div className="rounded-full border border-white/20 bg-[#071b3b]/40 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                    {activeService.number} / 06
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-[#071b3b]/40 px-3 py-2 text-[9px] font-bold text-white backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    {activeService.stat}
                  </div>
                </div>

                {/* Floating workflow card */}

                <div className="service-float absolute right-5 top-[92px] hidden w-[175px] rounded-[18px] border border-white/20 bg-white/15 p-4 text-white shadow-2xl backdrop-blur-2xl sm:block">
                  <div className="text-[8px] font-black uppercase tracking-[0.16em] text-blue-100">
                    BidAxis
                  </div>

                  <div className="mt-2 text-[12px] font-black">
                    Opportunity Workflow
                  </div>

                  <div className="mt-4 flex gap-1">
                    <span className="h-1.5 flex-1 rounded-full bg-cyan-300" />
                    <span className="h-1.5 flex-1 rounded-full bg-blue-300" />
                    <span className="h-1.5 flex-1 rounded-full bg-white/30" />
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-full rounded-full bg-white/15" />

                    <div className="h-1.5 w-[75%] rounded-full bg-white/15" />
                  </div>
                </div>

                {/* Bottom glass card */}

                <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/15 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-2xl sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-white text-[#155EEF] shadow-lg">
                      {activeService.icon}
                    </div>

                    <div>
                      <div className="text-[8px] font-black uppercase tracking-[0.17em] text-blue-200">
                        {activeService.eyebrow}
                      </div>

                      <div className="mt-1 text-[16px] font-black sm:text-[18px]">
                        {activeService.shortTitle}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT INFORMATION
            ================================================= */}

            <div
              key={activeService.key}
              className="service-content relative flex min-h-[500px] flex-col justify-center overflow-hidden p-7 sm:p-10 lg:p-12"
            >
              {/* Big background number */}

              <div className="pointer-events-none absolute -right-1 top-1 select-none text-[110px] font-black tracking-[-0.08em] text-slate-50 sm:text-[140px]">
                {activeService.number}
              </div>

              <div className="relative">
                {/* Eyebrow */}

                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-blue-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                  {activeService.eyebrow}
                </div>

                {/* Heading */}

                <h3 className="mt-6 max-w-[500px] text-[30px] font-black leading-[1.12] tracking-[-0.04em] text-[#071630] sm:text-[36px]">
                  {activeService.title}
                </h3>

                {/* Description */}

                <p className="mt-5 max-w-[520px] text-[13px] leading-[1.8] text-slate-500 sm:text-[14px]">
                  {activeService.description}
                </p>

                {/* Benefits */}

                <div className="mt-7 grid gap-3">
                  {activeService.points.map((point, index) => (
                    <div
                      key={point}
                      className="group flex items-center gap-3 rounded-[14px] border border-slate-100 bg-slate-50/70 px-4 py-3 transition hover:border-blue-100 hover:bg-blue-50/60"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[9px] font-black text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <span className="text-[11px] font-extrabold text-slate-700">
                        {point}
                      </span>

                      <span className="ml-auto text-blue-500">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={activeService.href}
                    className="group inline-flex h-[52px] items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#155EEF] to-[#0b5bd3] px-6 text-[12px] font-black text-white shadow-[0_12px_30px_rgba(21,94,239,.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(21,94,239,.3)]"
                  >
                    Explore Service

                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex h-[52px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-[12px] font-black text-slate-700 transition hover:border-blue-200 hover:text-blue-700"
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP QUICK SERVICE NAVIGATION
        ===================================================== */}

        <div className="mt-6 hidden grid-cols-6 gap-2 lg:grid">
          {services.map((service) => {
            const selected = active === service.key;

            return (
              <button
                key={service.key}
                type="button"
                onClick={() => setActive(service.key)}
                className={`group rounded-[18px] border px-3 py-4 text-left transition duration-300 ${
                  selected
                    ? "border-blue-200 bg-blue-50 shadow-[0_10px_30px_rgba(37,99,235,.08)]"
                    : "border-slate-200/80 bg-white/70 hover:border-blue-200 hover:bg-white"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-[11px] transition ${
                    selected
                      ? "bg-[#155EEF] text-white"
                      : "bg-slate-50 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-700"
                  }`}
                >
                  {service.icon}
                </div>

                <div
                  className={`mt-3 text-[10px] font-black ${
                    selected ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  {service.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <div className="relative mt-16 overflow-hidden rounded-[30px] bg-[#071b3b] px-7 py-10 shadow-[0_30px_80px_rgba(7,27,59,.18)] sm:px-10 lg:px-12">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute -right-[100px] -top-[200px] h-[500px] w-[500px] rounded-full bg-blue-500/30 blur-[100px]" />

          <div className="absolute bottom-[-250px] left-[25%] h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[100px]" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-[700px]">
              <div className="text-[9px] font-black uppercase tracking-[0.18em] text-cyan-300">
                BidAxis Expert Assistance
              </div>

              <h3 className="mt-3 text-[27px] font-black tracking-[-0.035em] text-white sm:text-[32px]">
                Not sure where to start?
              </h3>

              <p className="mt-3 max-w-[650px] text-[13px] leading-6 text-blue-100/75">
                Tell us what your business needs and our team can help you
                understand the relevant tender, GeM or account-management
                service.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-[52px] items-center gap-3 rounded-xl bg-white px-6 text-[12px] font-black text-[#0b3f91] shadow-xl transition hover:-translate-y-1"
              >
                Talk to an Expert

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/pricing"
                className="inline-flex h-[52px] items-center rounded-xl border border-white/20 bg-white/10 px-6 text-[12px] font-black text-white backdrop-blur-xl transition hover:bg-white/15"
              >
                Explore Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes bidaxisServiceRing {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes bidaxisServiceFloat {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes bidaxisServiceEngine {
          0%, 100% {
            box-shadow:
              0 30px 80px rgba(37, 99, 235, 0.18);
          }

          50% {
            box-shadow:
              0 35px 100px rgba(37, 99, 235, 0.30);
          }
        }

        @keyframes bidaxisServiceContent {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-ring {
          transform: translate(-50%, -50%);
          animation:
            bidaxisServiceRing 18s linear infinite;
        }

        .service-float {
          animation:
            bidaxisServiceFloat 4.5s ease-in-out infinite;
        }

        .service-engine {
          animation:
            bidaxisServiceEngine 4s ease-in-out infinite;
        }

        .service-content {
          animation:
            bidaxisServiceContent 0.4s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .service-ring,
          .service-float,
          .service-engine,
          .service-content {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   SERVICE NODE
============================================================ */

function ServiceNode({
  service,
  active,
  onClick,
  className,
}: {
  service: Service;
  active: boolean;
  onClick: () => void;
  className: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute z-30 w-[225px] rounded-[21px] border p-4 text-left transition duration-500 hover:-translate-y-1.5 ${className} ${
        active
          ? "border-blue-300 bg-white shadow-[0_20px_50px_rgba(37,99,235,.17)]"
          : "border-white/90 bg-white/75 shadow-[0_15px_40px_rgba(15,23,42,.07)] backdrop-blur-xl hover:border-blue-200 hover:bg-white"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] transition ${
            active
              ? "bg-[#155EEF] text-white shadow-[0_8px_20px_rgba(37,99,235,.25)]"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          {service.icon}
        </div>

        <div>
          <div className="text-[8px] font-black uppercase tracking-[0.14em] text-slate-400">
            {service.number}
          </div>

          <div
            className={`mt-1 text-[11px] font-black ${
              active ? "text-blue-700" : "text-slate-800"
            }`}
          >
            {service.shortTitle}
          </div>
        </div>
      </div>

      {active && (
        <div className="mt-3 flex items-center gap-2 border-t border-blue-50 pt-3 text-[8px] font-black uppercase tracking-[0.12em] text-blue-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          Selected Service
        </div>
      )}
    </button>
  );
}

/* ============================================================
   SERVICE IMAGE
============================================================ */

function ServiceImage({ service }: { service: Service }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0">
      {!failed ? (
        <img
          src={service.image}
          alt={`${service.title} - BidAxis`}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
        />
      ) : (
        <ServiceFallback service={service} />
      )}
    </div>
  );
}

/* ============================================================
   GRAPHICAL FALLBACK

   Displays automatically until your service image exists.
============================================================ */

function ServiceFallback({ service }: { service: Service }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#0b3473] via-[#155EEF] to-[#0284c7] p-6">
      {/* Background circles */}

      <div className="absolute right-[5%] top-[8%] h-[220px] w-[220px] rounded-full border border-white/10" />

      <div className="absolute right-[10%] top-[14%] h-[150px] w-[150px] rounded-full border border-white/10" />

      {/* Dashboard */}

      <div className="relative w-[92%] max-w-[430px] rotate-[-2deg] rounded-[26px] border border-white/20 bg-white/10 p-5 shadow-[0_35px_80px_rgba(0,0,0,.22)] backdrop-blur-xl">
        {/* Browser header */}

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-300" />

          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

          <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

          <div className="ml-3 h-6 flex-1 rounded-full border border-white/10 bg-white/10" />
        </div>

        <div className="mt-6 grid grid-cols-[72px_1fr] gap-4">
          {/* Sidebar */}

          <div className="space-y-3">
            <div className="flex h-10 items-center justify-center rounded-xl bg-white/20 text-white">
              {service.icon}
            </div>

            <div className="h-9 rounded-xl bg-white/10" />

            <div className="h-9 rounded-xl bg-white/10" />

            <div className="h-9 rounded-xl bg-white/10" />

            <div className="h-9 rounded-xl bg-white/10" />
          </div>

          {/* Dashboard content */}

          <div className="rounded-[18px] border border-white/10 bg-white/10 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-14 rounded-full bg-cyan-200/60" />

                <div className="mt-3 h-3 w-28 rounded-full bg-white/70" />
              </div>

              <div className="rounded-full border border-green-300/20 bg-green-300/15 px-3 py-1.5 text-[7px] font-black uppercase tracking-wider text-green-100">
                Active
              </div>
            </div>

            {/* Search */}

            <div className="mt-5 flex h-9 items-center rounded-lg border border-white/10 bg-white/10 px-3">
              <SearchIcon />

              <div className="ml-2 h-1.5 w-[55%] rounded-full bg-white/20" />
            </div>

            {/* Cards */}

            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                <div className="h-2 w-8 rounded bg-white/20" />

                <div className="mt-3 h-5 w-10 rounded bg-white/50" />
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                <div className="h-2 w-8 rounded bg-white/20" />

                <div className="mt-3 h-5 w-8 rounded bg-cyan-200/60" />
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-2">
                <div className="h-2 w-8 rounded bg-white/20" />

                <div className="mt-3 h-5 w-12 rounded bg-blue-200/60" />
              </div>
            </div>

            {/* Chart */}

            <div className="mt-4 flex h-[72px] items-end gap-2 rounded-xl border border-white/10 bg-white/5 px-3 pb-3">
              <div className="h-[28%] flex-1 rounded-t bg-white/20" />

              <div className="h-[48%] flex-1 rounded-t bg-blue-200/40" />

              <div className="h-[38%] flex-1 rounded-t bg-white/20" />

              <div className="h-[70%] flex-1 rounded-t bg-cyan-200/60" />

              <div className="h-[58%] flex-1 rounded-t bg-blue-200/50" />

              <div className="h-[88%] flex-1 rounded-t bg-white/60" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}

      <div className="service-float absolute bottom-[12%] right-[4%] hidden rounded-[16px] border border-white/20 bg-white/15 px-4 py-3 text-white shadow-2xl backdrop-blur-xl sm:block">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-400/20 text-green-200">
            ✓
          </div>

          <div>
            <div className="text-[7px] font-black uppercase tracking-wider text-blue-100">
              Opportunity
            </div>

            <div className="mt-1 text-[9px] font-black">
              New Tender Found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function AxisIcon() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />

      <circle cx="12" cy="12" r="8" />

      <path d="M12 4V2" />

      <path d="M12 22v-2" />

      <path d="m4.9 4.9 1.4 1.4" />

      <path d="m17.7 17.7 1.4 1.4" />

      <path d="M4 12H2" />

      <path d="M22 12h-2" />
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

      <path d="M8 11h6" />
    </svg>
  );
}

function BuildingIcon() {
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

function WorkflowIcon() {
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
      <rect
        x="3"
        y="3"
        width="6"
        height="6"
        rx="2"
      />

      <rect
        x="15"
        y="15"
        width="6"
        height="6"
        rx="2"
      />

      <path d="M9 6h4a3 3 0 0 1 3 3v6" />

      <path d="m13 12 3 3 3-3" />
    </svg>
  );
}

function GrowthIcon() {
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
      <path d="M4 19V9" />

      <path d="M10 19V5" />

      <path d="M16 19v-7" />

      <path d="M22 19H2" />

      <path d="m4 7 5-4 6 5 5-5" />
    </svg>
  );
}

function SupportIcon() {
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
      <path d="M4 13a8 8 0 0 1 16 0" />

      <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1Z" />

      <path d="M20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1Z" />

      <path d="M16 19c0 1.1-.9 2-2 2h-2" />
    </svg>
  );
}