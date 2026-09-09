import Link from "next/link";

/* =========================================================
   GeM ACCOUNT MANAGEMENT PLANS
========================================================= */

const accountPlans = [
  {
    name: "Starter",
    subtitle:
      "Essential GeM account management support for new and growing sellers.",

    originalPrice: 14299,
    finalPrice: 9999,
    priceSuffix: "/month + taxes",

    badge: "Monthly Plan",
    discount: "SPECIAL OFFER",

    iconColor: "bg-blue-500",

    l1Assist: "Up to ₹15 Lakhs L1 Assist",
    bidAssist: "Up to ₹10 Lakhs Bid Assist",

    features: [
      "GeM Account Management",
      "GeM Account Health Check",
      "Profile Management Assistance",
      "Basic Catalogue Support",
      "Monthly Account Review",
      "Basic Compliance Guidance",
      "Issue Resolution Assistance",
      "Renewal & Compliance Reminders",
      "Email / WhatsApp Support",
    ],

    description:
      "Best for new and small GeM sellers who need essential account management and ongoing support.",

    button: "Choose Starter",
    href: "/contact",

    featured: false,
  },

  {
    name: "Pro",
    subtitle:
      "Complete GeM account management for businesses actively selling on GeM.",

    originalPrice: 28499,
    finalPrice: 14999,
    priceSuffix: "/month + taxes",

    badge: "Monthly Plan",
    discount: "SPECIAL OFFER",

    iconColor: "bg-emerald-500",

    l1Assist: "Up to ₹25 Lakhs L1 Assist",
    bidAssist: "Up to ₹15 Lakhs Bid Assist",

    features: [
      "Everything in Starter",
      "Dedicated GeM Consultant",
      "Complete Account Management",
      "Regular Catalogue Management",
      "Monthly Account Review & Optimization",
      "Bid Monitoring & Tender Alerts",
      "Buyer Communication Assistance",
      "Priority Issue Resolution",
      "Compliance Tracking",
      "Monthly Performance Review",
      "Priority Call / WhatsApp Support",
    ],

    description:
      "Ideal for active GeM sellers who need regular account management, monitoring and expert assistance.",

    button: "Choose Pro",
    href: "/contact",

    featured: true,
  },

  {
    name: "Advanced",
    subtitle:
      "Advanced GeM management and optimization for established businesses.",

    originalPrice: 42999,
    finalPrice: 24999,
    priceSuffix: "/month + taxes",

    badge: "Monthly Plan",
    discount: "SPECIAL OFFER",

    iconColor: "bg-violet-600",

    l1Assist: "Up to ₹45 Lakhs L1 Assist",
    bidAssist: "Up to ₹30 Lakhs Bid Assist",

    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Advanced Account Optimization",
      "Product & Category Strategy",
      "Priority Catalogue Management",
      "Tender Participation Planning",
      "Competitor & Opportunity Analysis",
      "Advanced Compliance Assistance",
      "Escalation & Incident Management",
      "Monthly Strategy Consultation",
      "Priority Support",
      "Performance & Growth Recommendations",
    ],

    description:
      "Designed for established sellers that require advanced optimization, priority support and strategic GeM management.",

    button: "Choose Advanced",
    href: "/contact",

    featured: false,
  },
];

/* =========================================================
   INDIVIDUAL GeM SERVICES
========================================================= */

const individualServices = [
  {
    name: "GeM Seller Registration",
    subtitle:
      "Complete onboarding and seller registration support for your GeM account.",

    originalPrice: 1499,
    finalPrice: 999,
    priceSuffix: "+ taxes",

    badge: "One-Time GeM Consultancy Fee",
    discount: "SPECIAL OFFER",

    iconColor: "bg-blue-600",

    features: [
      "GeM Seller Registration on Government Portal",
      "Customized Seller Onboarding Support",
      "Complete Profile Setup Assistance",
      "Document Guidance & Verification",
      "Product / Service Category Assistance",
      "Dedicated GeM Consultancy Support",
      "Support via Email / Call / WhatsApp",
    ],

    description:
      "Ideal for businesses starting their GeM journey and requiring expert registration assistance.",

    button: "Book Registration Service",
    href: "/contact",
  },

  {
    name: "GeM Catalogue Listing",
    subtitle:
      "Professional catalogue creation and listing support for GeM products and services.",

    originalPrice: 299,
    finalPrice: 199,
    priceSuffix: "per catalogue + taxes",

    badge: "One-Time Setup",
    discount: "SPECIAL OFFER",

    iconColor: "bg-orange-500",

    features: [
      "Catalogue Creation & Publishing",
      "Correct Category Selection",
      "Attribute Mapping",
      "Product / Service Specification Setup",
      "Tax & Compliance Setup",
      "SEO-Friendly Product Description",
      "Supporting Document Upload",
      "Catalogue Error Resolution",
    ],

    description:
      "Suitable for sellers who need professional GeM catalogue creation and publishing support.",

    button: "Book Catalogue Service",
    href: "/contact",
  },
];

/* =========================================================
   PRICE FORMATTER
========================================================= */

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

/* =========================================================
   CHECK ICON
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

/* =========================================================
   L1 ASSIST ICON
========================================================= */

function L1AssistIcon() {
  return (
    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M3 17 9 11l4 4 8-9" />
        <path d="M14 6h7v7" />
      </svg>
    </span>
  );
}

/* =========================================================
   BID ASSIST ICON
========================================================= */

function BidAssistIcon() {
  return (
    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M4 20h16" />
        <path d="M6 16h12" />
        <path d="M8 12h8" />
        <path d="M10 8h4" />
        <path d="M12 4v4" />
      </svg>
    </span>
  );
}

/* =========================================================
   ARROW ICON
========================================================= */

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
   MOVING OFFER TICKER
========================================================= */

function OfferTicker() {
  const offerItems = (
    <>
      <span className="ticker-ending">
        ⏳ Offer Ending Soon
      </span>

      <span className="ticker-separator">•</span>

      <span className="ticker-discount">
        🎉 Get an Additional 5%–10% Discount — Contact Our Sales Team Today
      </span>

      <span className="ticker-separator">•</span>
    </>
  );

  return (
    <>
      <section className="relative w-full overflow-hidden border-y border-blue-500 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800">

        <div className="relative flex h-[52px] w-full items-center overflow-hidden">

          <div className="offer-ticker-track">

            <div className="offer-ticker-content">
              {offerItems}
            </div>

            <div
              className="offer-ticker-content"
              aria-hidden="true"
            >
              {offerItems}
            </div>

            <div
              className="offer-ticker-content"
              aria-hidden="true"
            >
              {offerItems}
            </div>

          </div>

        </div>

      </section>

      <style>{`
        .offer-ticker-track {
          display: flex;
          flex-shrink: 0;
          width: max-content;
          min-width: max-content;
          animation: bidaxisOfferScroll 20s linear infinite;
          will-change: transform;
        }

        .offer-ticker-content {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 48px;
          padding-right: 48px;
          white-space: nowrap;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
        }

        .ticker-ending {
          display: inline-flex;
          align-items: center;
          color: #fef3c7;
          font-weight: 800;
          letter-spacing: 0.01em;
        }

        .ticker-discount {
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          font-weight: 700;
        }

        .ticker-separator {
          color: #93c5fd;
          font-size: 20px;
          font-weight: 700;
        }

        @keyframes bidaxisOfferScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .offer-ticker-track {
            animation-duration: 15s;
          }

          .offer-ticker-content {
            gap: 30px;
            padding-right: 30px;
            font-size: 13px;
          }

          .ticker-separator {
            font-size: 17px;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   PLAN GUIDANCE
========================================================= */

function PlanGuidance() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-8 md:px-6">

      <div className="relative overflow-hidden rounded-[24px] border border-blue-100 bg-white px-6 py-6 shadow-[0_10px_35px_rgba(15,23,42,0.06)] md:px-8">

        {/* Decorative background */}

        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-100 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-12 left-1/3 h-28 w-28 rounded-full bg-emerald-100 blur-3xl" />

        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          {/* LEFT */}

          <div className="flex items-start gap-4">

            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-600/20">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-7 w-7"
              >
                <path d="M12 3a7 7 0 0 0-4 12.7V19h8v-3.3A7 7 0 0 0 12 3Z" />
                <path d="M9 22h6" />
              </svg>

            </div>

            <div>

              <div className="mb-2 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-700">
                  Need Help Choosing?
                </span>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-emerald-700">
                  Free Plan Guidance
                </span>

              </div>

              <h2 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl">
                Not Sure Which GeM Plan Is Right for Your Business?
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 md:text-[15px]">
                Share your bidding requirements, L1 needs and business goals
                with our sales team. We&apos;ll help you identify the plan that
                best fits your current requirements and growth objectives.
              </p>

            </div>

          </div>

          {/* CTA */}

          <div className="w-full flex-none md:w-auto">

            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 md:w-auto"
            >
              Get Plan Guidance
              <ArrowIcon />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function AccountManagementPricingPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfe]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-14">

        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-6">

          <Link
            href="/pricing"
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>

            Back to Pricing
          </Link>

          <div>
            <span className="inline-flex rounded-full bg-emerald-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-600">
              GeM Account Management
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-[42px]">
            GeM Account Management Services
          </h1>

          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600 md:text-lg">
            Choose the right GeM account management plan for your business,
            or select individual registration and catalogue services as needed.
          </p>

        </div>

      </section>

      {/* =====================================================
          OFFER TICKER
      ====================================================== */}

      <OfferTicker />

      {/* =====================================================
          NEW PLAN GUIDANCE
      ====================================================== */}

      <PlanGuidance />

      {/* =====================================================
          ACCOUNT MANAGEMENT PLANS
      ====================================================== */}

      <section className="mx-auto max-w-[1700px] px-5 pb-20 pt-14 md:px-7">

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">
            Monthly Account Management Plans
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Choose Your GeM Account Management Plan
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
            Choose Starter, Pro or Advanced based on your account management
            requirements, business scale, L1 Assist and Bid Assist requirements.
          </p>

        </div>

        <div className="grid items-stretch gap-7 lg:grid-cols-3">

          {accountPlans.map((plan) => (

            <article
              key={plan.name}
              className={`
                relative
                flex
                h-full
                flex-col
                rounded-[26px]
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl

                ${
                  plan.featured
                    ? "border-2 border-emerald-500 shadow-[0_18px_50px_rgba(16,185,129,0.14)]"
                    : "border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.07)]"
                }
              `}
            >

              {/* MOST POPULAR */}

              {plan.featured && (

                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">

                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-emerald-500 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">

                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
                    </svg>

                    MOST POPULAR

                  </span>

                </div>

              )}

              {/* ICON */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-sm ${plan.iconColor}`}
              >
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
              </div>

              {/* TITLE */}

              <h3 className="mt-7 text-[30px] font-bold tracking-tight text-slate-950">
                {plan.name}
              </h3>

              <p className="mt-3 min-h-[58px] text-[15px] leading-6 text-slate-600">
                {plan.subtitle}
              </p>

              {/* PRICE */}

              <div className="mt-7">

                <div className="flex flex-wrap items-center gap-3">

                  <span className="text-lg font-semibold text-slate-400 line-through decoration-2">
                    {formatPrice(plan.originalPrice)}
                  </span>

                  <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                    {plan.discount}
                  </span>

                </div>

                <div className="mt-2 flex flex-wrap items-end gap-2">

                  <span className="text-[42px] font-extrabold leading-none tracking-tight text-slate-950">
                    {formatPrice(plan.finalPrice)}
                  </span>

                  <span className="pb-1 text-sm font-medium text-slate-500">
                    {plan.priceSuffix}
                  </span>

                </div>

                <p className="mt-2 text-xs font-semibold text-emerald-600">
                  Limited Time Offer
                </p>

                <div className="mt-5">

                  <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                    {plan.badge}
                  </span>

                </div>

              </div>

              {/* DIVIDER */}

              <div className="my-7 border-t border-slate-200" />

              {/* FEATURES */}

              <div className="flex-grow">

                <h4 className="mb-5 text-[18px] font-bold text-slate-950">
                  What&apos;s Included:
                </h4>

                {/* L1 ASSIST */}

                <div
                  className={`
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4

                    ${
                      plan.name === "Starter"
                        ? "border-blue-200 bg-blue-50"
                        : plan.name === "Pro"
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-violet-200 bg-violet-50"
                    }
                  `}
                >

                  <L1AssistIcon />

                  <div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      L1 Assist Coverage
                    </p>

                    <p
                      className={`
                        mt-1 text-[17px] font-extrabold

                        ${
                          plan.name === "Starter"
                            ? "text-blue-700"
                            : plan.name === "Pro"
                            ? "text-emerald-700"
                            : "text-violet-700"
                        }
                      `}
                    >
                      {plan.l1Assist}
                    </p>

                  </div>

                </div>

                {/* BID ASSIST */}

                <div
                  className={`
                    mt-3
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    p-4

                    ${
                      plan.name === "Starter"
                        ? "border-blue-200 bg-blue-50"
                        : plan.name === "Pro"
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-violet-200 bg-violet-50"
                    }
                  `}
                >

                  <BidAssistIcon />

                  <div>

                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                      Bid Assist Coverage
                    </p>

                    <p
                      className={`
                        mt-1 text-[17px] font-extrabold

                        ${
                          plan.name === "Starter"
                            ? "text-blue-700"
                            : plan.name === "Pro"
                            ? "text-emerald-700"
                            : "text-violet-700"
                        }
                      `}
                    >
                      {plan.bidAssist}
                    </p>

                  </div>

                </div>

                {/* OTHER FEATURES */}

                <ul className="mt-6 space-y-3">

                  {plan.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[15px] leading-5 text-slate-600"
                    >
                      <CheckIcon />

                      <span>{feature}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {/* DESCRIPTION */}

              <p className="mt-6 text-sm leading-6 text-slate-500">
                {plan.description}
              </p>

              {/* BUTTONS */}

              <div className="mt-7 space-y-3">

                <Link
                  href={plan.href}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  {plan.button}
                  <ArrowIcon />
                </Link>

                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl border-2 border-blue-600 px-5 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
                >
                  Enquire Now
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          INDIVIDUAL GeM SERVICES
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white py-20">

        <div className="mx-auto max-w-[1250px] px-5 md:px-7">

          <div className="mb-12 text-center">

            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
              Individual GeM Services
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Need a Specific GeM Service?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Choose a one-time GeM seller registration or catalogue listing
              service without subscribing to an account management plan.
            </p>

          </div>

          <div className="grid items-stretch gap-8 md:grid-cols-2">

            {individualServices.map((service) => (

              <article
                key={service.name}
                className="flex h-full flex-col rounded-[26px] border border-slate-200 bg-[#fbfcfe] p-8 shadow-[0_8px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* ICON */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-sm ${service.iconColor}`}
                >

                  {service.name.includes("Registration") ? (

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

                  ) : (

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-7 w-7"
                    >
                      <path d="M6 3h12a2 2 0 0 1 2 2v16H4V5a2 2 0 0 1 2-2Z" />
                      <path d="M8 8h8" />
                      <path d="M8 12h8" />
                      <path d="M8 16h5" />
                    </svg>

                  )}

                </div>

                {/* TITLE */}

                <h3 className="mt-7 text-[28px] font-bold tracking-tight text-slate-950">
                  {service.name}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {service.subtitle}
                </p>

                {/* PRICE */}

                <div className="mt-7">

                  <div className="flex flex-wrap items-center gap-3">

                    <span className="text-lg font-semibold text-slate-400 line-through">
                      {formatPrice(service.originalPrice)}
                    </span>

                    <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                      {service.discount}
                    </span>

                  </div>

                  <div className="mt-2 flex flex-wrap items-end gap-2">

                    <span className="text-[42px] font-extrabold leading-none tracking-tight text-slate-950">
                      {formatPrice(service.finalPrice)}
                    </span>

                    <span className="pb-1 text-sm font-medium text-slate-500">
                      {service.priceSuffix}
                    </span>

                  </div>

                  <p className="mt-2 text-xs font-semibold text-emerald-600">
                    Limited Time Offer
                  </p>

                  <div className="mt-5">

                    <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                      {service.badge}
                    </span>

                  </div>

                </div>

                <div className="my-7 border-t border-slate-200" />

                {/* FEATURES */}

                <div className="flex-grow">

                  <h4 className="mb-5 text-[18px] font-bold text-slate-950">
                    What&apos;s Included:
                  </h4>

                  <ul className="space-y-3">

                    {service.features.map((feature) => (

                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[15px] leading-5 text-slate-600"
                      >
                        <CheckIcon />
                        <span>{feature}</span>
                      </li>

                    ))}

                  </ul>

                </div>

                {/* DESCRIPTION */}

                <p className="mt-6 text-sm leading-6 text-slate-500">
                  {service.description}
                </p>

                {/* BUTTONS */}

                <div className="mt-7 space-y-3">

                  <Link
                    href={service.href}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                  >
                    {service.button}
                    <ArrowIcon />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center rounded-xl border-2 border-blue-600 px-5 py-3.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
                  >
                    Enquire Now
                  </Link>

                </div>

              </article>

            ))}

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
              GeM Consultancy
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Not Sure Which GeM Plan Is Right for You?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
              Talk to our GeM experts and we&apos;ll help you select the right
              management plan or individual service based on your business
              requirements.
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