import Link from "next/link";

/* =========================================================
   PRICING CATEGORIES
========================================================= */

const pricingCategories = [
  {
    title: "Tender Management",
    subtitle:
      "Complete tender bidding support for businesses participating in government tenders.",

    href: "/pricing/tender-management",
    button: "Explore Tender Plans",

    theme: "blue",

    features: [
      "Tender Search & Discovery",
      "Tender Alerts",
      "AI Tender Recommendations",
      "Bid Documentation Support",
      "Reverse Auction Assistance",
      "Tender Consultancy",
    ],
  },

  {
    title: "GeM Account Management",
    subtitle:
      "Professional GeM account support covering registration, catalogue management and ongoing consultancy.",

    href: "/pricing/account-management",
    button: "Explore GeM Services",

    theme: "emerald",

    features: [
      "GeM Seller Registration",
      "Profile & Account Management",
      "Catalogue Listing",
      "Compliance Assistance",
      "Account Optimization",
      "Dedicated GeM Consultancy",
    ],
  },

  {
    title: "Strategic Growth",
    subtitle:
      "Strategic GeM growth support for businesses focused on long-term sales, tender participation and marketplace expansion.",

    href: "/pricing/gem-strategic-growth-management",
    button: "Explore Growth Plans",

    theme: "violet",

    features: [
      "Strategic GeM Growth Planning",
      "Product & Catalogue Optimization",
      "Active Tender Participation",
      "Competition Tracking",
      "Incident Management",
      "Revenue Growth Strategy",
    ],
  },
];

/* =========================================================
   HELPERS
========================================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="mt-0.5 h-[18px] w-[18px] flex-none text-emerald-500"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================================
   TENDER ICON
========================================================= */

function TenderIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v4h4" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
      <path d="M9 19h4" />
    </svg>
  );
}

/* =========================================================
   ACCOUNT ICON
========================================================= */

function AccountIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

/* =========================================================
   GROWTH ICON
========================================================= */

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <path d="M3 20h18" />
      <path d="m5 16 5-5 4 3 5-7" />
      <path d="M15 7h4v4" />
    </svg>
  );
}

/* =========================================================
   PLAN GUIDANCE
========================================================= */

function PricingGuidance() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 md:px-6">

      <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white shadow-[0_14px_45px_rgba(15,23,42,0.07)]">

        {/* DECORATIVE BACKGROUND */}

        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-blue-100/80 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-52 w-52 rounded-full bg-emerald-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-violet-100/70 blur-3xl" />

        <div className="relative flex flex-col gap-8 px-6 py-8 md:px-9 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT SIDE */}

          <div className="flex max-w-3xl items-start gap-5">

            {/* ICON */}

            <div className="hidden h-16 w-16 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20 sm:flex">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-8 w-8"
              >
                <circle cx="12" cy="12" r="9" />

                <path d="M9.5 9a2.5 2.5 0 1 1 4.5 1.5c-.9 1-2 1.4-2 3" />

                <path d="M12 17h.01" />
              </svg>

            </div>

            {/* CONTENT */}

            <div>

              <div className="mb-3 flex flex-wrap gap-2">

                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
                  Need Help Choosing?
                </span>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  Free Guidance

                </span>

              </div>

              <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-[28px]">
                Not Sure Where to Start?
              </h2>

              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-slate-600 md:text-base">
                Every business has different tender and GeM requirements.
                Tell us what you&apos;re looking to achieve, and our sales team
                will guide you toward the service or plan that best fits your
                needs.
              </p>

              {/* SMALL TRUST POINTS */}

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  Understand Your Requirements
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  Compare the Right Options
                </span>

                <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    ✓
                  </span>
                  Get Expert Guidance
                </span>

              </div>

            </div>

          </div>

          {/* RIGHT CTA */}

          <div className="flex-none lg:pl-6">

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 sm:w-auto"
            >
              Contact Sales Team

              <ArrowIcon />
            </Link>

            <p className="mt-2 text-center text-xs font-medium text-slate-400">
              Get personalized plan guidance
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfe]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-16 md:py-20">

        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-violet-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-6">

          <span className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
            Bid Axis Pricing
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Choose the Right Support for Your Business
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            From tender participation and GeM account management to strategic
            marketplace growth, choose the level of support that matches your
            business goals.
          </p>

        </div>

      </section>

      {/* =====================================================
          PRICING CATEGORY CARDS
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-5 pb-16 md:px-7">

        <div className="grid items-stretch gap-7 lg:grid-cols-3">

          {pricingCategories.map((category) => {

            const isBlue = category.theme === "blue";
            const isEmerald = category.theme === "emerald";

            return (
              <article
                key={category.title}
                className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_10px_35px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.11)]"
              >

                {/* ICON */}

                <div
                  className={`
                    flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-md

                    ${
                      isBlue
                        ? "bg-blue-600"
                        : isEmerald
                        ? "bg-emerald-500"
                        : "bg-violet-600"
                    }
                  `}
                >
                  {isBlue ? (
                    <TenderIcon />
                  ) : isEmerald ? (
                    <AccountIcon />
                  ) : (
                    <GrowthIcon />
                  )}
                </div>

                {/* TITLE */}

                <h2 className="mt-7 text-[27px] font-bold tracking-tight text-slate-950">
                  {category.title}
                </h2>

                <p className="mt-3 min-h-[84px] text-[15px] leading-7 text-slate-600">
                  {category.subtitle}
                </p>

                {/* DIVIDER */}

                <div className="my-7 border-t border-slate-200" />

                {/* FEATURES */}

                <div className="flex-grow">

                  <p className="mb-5 text-sm font-bold uppercase tracking-[0.08em] text-slate-900">
                    What&apos;s Included
                  </p>

                  <ul className="space-y-4">

                    {category.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] leading-6 text-slate-600"
                      >
                        <CheckIcon />

                        <span>{feature}</span>

                      </li>

                    ))}

                  </ul>

                </div>

                {/* CTA */}

                <Link
                  href={category.href}
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  {category.button}

                  <ArrowIcon />
                </Link>

              </article>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          NEW — NEED HELP CHOOSING?
      ====================================================== */}

      <PricingGuidance />

      {/* =====================================================
          ONE PLATFORM — THREE LEVELS OF SUPPORT
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white py-20">

        <div className="mx-auto max-w-7xl px-5 md:px-6">

          <div className="text-center">

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
              Built for Every Stage
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              One Platform. Three Levels of Support.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Whether you&apos;re participating in tenders, managing your GeM
              presence or building a long-term growth strategy, Bid Axis
              provides the right level of support.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* PARTICIPATE */}

            <div className="rounded-[24px] border border-blue-100 bg-blue-50/50 p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-sm font-extrabold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Participate
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Discover opportunities, prepare bid documents and participate
                in government tenders with expert support.
              </p>

            </div>

            {/* MANAGE */}

            <div className="rounded-[24px] border border-emerald-100 bg-emerald-50/50 p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-sm font-extrabold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Manage
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Keep your GeM account, catalogues, compliance and marketplace
                activities professionally managed.
              </p>

            </div>

            {/* GROW */}

            <div className="rounded-[24px] border border-violet-100 bg-violet-50/50 p-7">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-sm font-extrabold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-950">
                Grow
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Build a strategic GeM growth plan focused on stronger
                participation, marketplace visibility and long-term revenue.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-6">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 px-6 py-12 text-center text-white shadow-xl md:px-12">

          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-100">
              Let&apos;s Find Your Fit
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Still Not Sure Which Service Is Right for You?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Tell us about your business, bidding activity and GeM goals.
              Our team will help you choose the right Bid Axis service and
              support plan for your requirements.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Talk to Our Experts

              <ArrowIcon />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}