"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

/* ============================================================
   TYPES
============================================================ */

type FAQItem = {
  question: string;
  answer: string;
  category: string;
  icon: ReactNode;
};

/* ============================================================
   FAQ DATA
============================================================ */

const faqs: FAQItem[] = [
  {
    question: "I am new to GeM. Can BidAxis help me get started?",
    answer:
      "Yes. BidAxis can assist businesses in understanding the GeM onboarding process, seller requirements and the services relevant to getting started on the Government e-Marketplace.",
    category: "GeM",
    icon: <BuildingIcon />,
  },
  {
    question: "Can you help us understand tender eligibility and documents?",
    answer:
      "Yes. Our team can assist with reviewing tender requirements, understanding important eligibility conditions and organising the documents required for participation. Final eligibility always depends on the conditions specified by the respective buyer or tendering authority.",
    category: "Documentation",
    icon: <DocumentIcon />,
  },
  {
    question: "How do you help us find tenders relevant to our business?",
    answer:
      "Tender opportunities can be identified around your products, services, categories and other relevant criteria, helping your team focus on opportunities that are more closely aligned with your business.",
    category: "Discovery",
    icon: <SearchIcon />,
  },
  {
    question: "Do you provide support after we identify a tender?",
    answer:
      "Depending on the service selected, BidAxis assistance can extend beyond tender discovery to requirement review, documentation support and coordination during different stages of the participation process.",
    category: "Bid Support",
    icon: <SupportIcon />,
  },
  {
    question: "Can BidAxis submit a bid on our behalf?",
    answer:
      "Bid participation remains subject to the seller's authorisation, credentials and the requirements of the relevant procurement platform. BidAxis can provide assistance and coordination within the scope of the selected service.",
    category: "Participation",
    icon: <BidIcon />,
  },
  {
    question: "Do you provide support for businesses across India?",
    answer:
      "BidAxis services are designed to support businesses working with government procurement opportunities across India, subject to the scope and availability of the selected service.",
    category: "Coverage",
    icon: <IndiaIcon />,
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[320px] top-[50px] h-[650px] w-[650px] rounded-full bg-blue-100/50 blur-[160px]" />

        <div className="absolute -right-[320px] bottom-[-100px] h-[650px] w-[650px] rounded-full bg-cyan-100/40 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,.13) 1px, transparent 1px)",
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
              BidAxis Help Center
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />
          </div>

          <h2 className="mt-5 text-[37px] font-black leading-[1.08] tracking-[-0.045em] text-[#071630] sm:text-[44px] lg:text-[50px]">
            Questions About Tenders?
            <span className="block text-[#155EEF]">
              Start Here.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-slate-500">
            Practical answers to common questions about GeM, government
            tenders, documentation and BidAxis support services.
          </p>
        </div>

        {/* =====================================================
            MAIN FAQ LAYOUT
        ===================================================== */}

        <div className="mt-14 grid items-start gap-7 lg:grid-cols-[0.72fr_1.28fr]">
          {/* =================================================
              LEFT GRAPHICAL PANEL
          ================================================= */}

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#061a38] via-[#0b3473] to-[#155EEF] p-7 text-white shadow-[0_30px_80px_rgba(7,27,59,.2)] sm:p-8 lg:sticky lg:top-24">
            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "38px 38px",
              }}
            />

            {/* Glows */}

            <div className="absolute -right-[100px] -top-[100px] h-[320px] w-[320px] rounded-full bg-cyan-300/25 blur-[80px]" />

            <div className="absolute -bottom-[160px] -left-[100px] h-[400px] w-[400px] rounded-full bg-blue-300/20 blur-[100px]" />

            {/* Decorative circles */}

            <div className="absolute right-[40px] top-[70px] h-[160px] w-[160px] rounded-full border border-white/[0.06]" />

            <div className="absolute right-[70px] top-[100px] h-[100px] w-[100px] rounded-full border border-white/[0.07]" />

            <div className="relative">
              {/* Live badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[8px] font-black uppercase tracking-[0.15em] text-blue-100 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-60" />

                  <span className="relative h-2 w-2 rounded-full bg-green-300" />
                </span>

                BidAxis Support
              </div>

              {/* Graphic */}

              <div className="relative mx-auto mt-9 flex h-[190px] w-[190px] items-center justify-center">
                {/* Outer rings */}

                <div className="faq-ring absolute inset-0 rounded-full border border-dashed border-cyan-200/25" />

                <div className="absolute inset-[22px] rounded-full border border-white/10" />

                <div className="absolute inset-[43px] rounded-full bg-white/10 shadow-[0_0_50px_rgba(103,232,249,.12)] backdrop-blur-xl" />

                {/* Question bubble */}

                <div className="relative flex h-[82px] w-[82px] items-center justify-center rounded-[25px] border border-white/20 bg-white text-[38px] font-black text-[#155EEF] shadow-[0_20px_45px_rgba(0,0,0,.2)]">
                  ?
                </div>

                {/* Floating icons */}

                <div className="faq-float-one absolute -left-2 top-[25px] flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/15 bg-white/10 text-cyan-200 shadow-xl backdrop-blur-xl">
                  <SearchIcon />
                </div>

                <div className="faq-float-two absolute -right-1 bottom-[25px] flex h-11 w-11 items-center justify-center rounded-[13px] border border-white/15 bg-white/10 text-blue-100 shadow-xl backdrop-blur-xl">
                  <DocumentIcon />
                </div>
              </div>

              {/* Text */}

              <div className="mt-6 text-center">
                <div className="text-[9px] font-black uppercase tracking-[0.17em] text-cyan-300">
                  Procurement Questions
                </div>

                <h3 className="mt-3 text-[25px] font-black tracking-[-0.03em]">
                  Need a clearer answer?
                </h3>

                <p className="mx-auto mt-3 max-w-[340px] text-[11px] leading-6 text-blue-100/65">
                  Tender requirements can vary between buyers and procurement
                  platforms. Our team can help you understand the service
                  options available for your requirement.
                </p>
              </div>

              {/* Categories */}

              <div className="mt-7 grid grid-cols-2 gap-2">
                <MiniCategory
                  icon={<BuildingIcon />}
                  title="GeM"
                />

                <MiniCategory
                  icon={<SearchIcon />}
                  title="Tenders"
                />

                <MiniCategory
                  icon={<DocumentIcon />}
                  title="Documents"
                />

                <MiniCategory
                  icon={<SupportIcon />}
                  title="Bid Support"
                />
              </div>

              {/* CTA */}

              <div className="mt-7 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-cyan-200">
                    <MessageIcon />
                  </div>

                  <div>
                    <div className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-200">
                      Still have a question?
                    </div>

                    <div className="mt-1 text-[11px] font-black">
                      Speak with our team
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="group mt-5 flex h-[50px] w-full items-center justify-center gap-3 rounded-xl bg-white text-[11px] font-black text-[#0b4aa2] shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  Ask BidAxis

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT FAQ ACCORDION
          ================================================= */}

          <div>
            {/* Section indicator */}

            <div className="mb-4 flex items-center justify-between px-1">
              <div>
                <div className="text-[9px] font-black uppercase tracking-[0.15em] text-blue-600">
                  Common Questions
                </div>

                <div className="mt-1 text-[12px] font-semibold text-slate-400">
                  Select a question to view the answer
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[8px] font-black text-slate-500 sm:flex">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                {faqs.length} Answers
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = open === index;

                return (
                  <div
                    key={faq.question}
                    className={`group relative overflow-hidden rounded-[21px] border transition duration-300 ${
                      isOpen
                        ? "border-blue-200 bg-gradient-to-r from-blue-50/80 to-white shadow-[0_14px_40px_rgba(37,99,235,.09)]"
                        : "border-slate-200/80 bg-white shadow-[0_5px_20px_rgba(15,23,42,.025)] hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,.06)]"
                    }`}
                  >
                    {/* Active left line */}

                    <div
                      className={`absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#155EEF] to-cyan-400 transition-opacity duration-300 ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      {/* Number/icon */}

                      <div
                        className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[13px] transition duration-300 ${
                          isOpen
                            ? "bg-[#155EEF] text-white shadow-[0_8px_20px_rgba(21,94,239,.22)]"
                            : "bg-blue-50 text-blue-700 group-hover:bg-blue-100"
                        }`}
                      >
                        {faq.icon}
                      </div>

                      {/* Question */}

                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-500">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-slate-300" />

                          <span className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
                            {faq.category}
                          </span>
                        </div>

                        <h3
                          className={`text-[12px] font-black leading-5 transition sm:text-[13px] ${
                            isOpen
                              ? "text-blue-700"
                              : "text-[#17233a]"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>

                      {/* Plus */}

                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-[20px] font-light transition duration-300 ${
                          isOpen
                            ? "rotate-45 border-blue-200 bg-white text-blue-700 shadow-sm"
                            : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-blue-200 group-hover:text-blue-700"
                        }`}
                      >
                        +
                      </div>
                    </button>

                    {/* =================================================
                        ANSWER
                    ================================================= */}

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-6 sm:pl-[86px] sm:pr-7">
                          <div className="border-t border-blue-100 pt-5">
                            <div className="flex gap-3">
                              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                                <CheckIcon />
                              </div>

                              <p className="text-[11px] leading-[1.8] text-slate-500 sm:text-[12px]">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM HELP CARD
            ================================================= */}

            <div className="mt-5 flex flex-col justify-between gap-5 rounded-[20px] border border-dashed border-blue-200 bg-blue-50/50 px-5 py-5 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-white text-blue-600 shadow-sm">
                  <MessageIcon />
                </div>

                <div>
                  <div className="text-[11px] font-black text-[#071630]">
                    Didn't find what you were looking for?
                  </div>

                  <div className="mt-1 text-[9px] text-slate-500">
                    Tell us about your tender or GeM requirement.
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="group inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#155EEF] px-4 text-[9px] font-black text-white transition hover:bg-[#0b51d1]"
              >
                Contact Us

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes faqRing {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes faqFloatOne {
          0%, 100% {
            transform: translateY(0px) rotate(-5deg);
          }

          50% {
            transform: translateY(-8px) rotate(-2deg);
          }
        }

        @keyframes faqFloatTwo {
          0%, 100% {
            transform: translateY(0px) rotate(5deg);
          }

          50% {
            transform: translateY(8px) rotate(2deg);
          }
        }

        .faq-ring {
          animation: faqRing 22s linear infinite;
        }

        .faq-float-one {
          animation: faqFloatOne 4s ease-in-out infinite;
        }

        .faq-float-two {
          animation: faqFloatTwo 4.8s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-ring,
          .faq-float-one,
          .faq-float-two {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   MINI CATEGORY
============================================================ */

function MiniCategory({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="group flex items-center gap-2.5 rounded-[13px] border border-white/10 bg-white/[0.07] px-3 py-3 backdrop-blur-xl transition hover:bg-white/[0.12]">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-white/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-[#071b3b]">
        {icon}
      </div>

      <span className="text-[9px] font-black text-blue-50">
        {title}
      </span>
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function BuildingIcon() {
  return (
    <svg
      width="20"
      height="20"
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
      width="20"
      height="20"
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

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
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

function SupportIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v5h4v-6H6a2 2 0 0 0-2 1Z" />
      <path d="M20 13v5h-4v-6h2a2 2 0 0 1 2 1Z" />
      <path d="M16 18c0 2-1 3-4 3" />
    </svg>
  );
}

function BidIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h16" />
      <path d="m7 16 6-6 4 4" />
      <path d="M14 7h5v5" />
      <path d="M5 4h6" />
      <path d="M5 8h3" />
    </svg>
  );
}

function IndiaIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}