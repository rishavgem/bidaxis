import Link from "next/link";

/* =========================================================
   TENDER MANAGEMENT PLANS
========================================================= */

const plans = [
  {
    name: "Starter Plan",
    subtitle: "Best for beginners testing bidding",

    originalPrice: 7199,
    finalPrice: 4999,

    badge: "1 Month / 10 Bids",
    discount: "30% OFF",

    iconColor: "bg-orange-500",

    description:
      "Perfect for new sellers who want to start bidding with guidance.",

    features: [
      "1 Month Validity",
      "10 Bids Included",
      "Guided Bid Submission (Self-assisted)",
      "Basic Eligibility Check",
      "Document Checklist",
      "Standard Support (Email/WhatsApp)",
      "Basic Document Review (Error-check)",
      "Rejection Feedback (Basic Level)",
    ],

    button: "Choose Plan",
    href: "/checkout?plan=starter",

    featured: false,
    custom: false,
  },

  {
    name: "Growth Plan",
    subtitle: "Best for consistent participation",

    originalPrice: 19999,
    finalPrice: 13999,

    badge: "3 Months / 20 Bids",
    discount: "30% OFF",

    iconColor: "bg-emerald-500",

    description:
      "Ideal for sellers who want regular bidding with expert assistance.",

    features: [
      "3 Months Validity",
      "20 Bids Included",
      "Direct Support in Bid Submission",
      "Detailed Eligibility Check",
      "Complete Documentation Support",
      "Faster Support (Same-day response)",
      "End-to-End Submission Assistance",
      "OEM Coordination Support",
      "Error-free Document Review",
    ],

    button: "Choose Plan",
    href: "/checkout?plan=growth",

    featured: false,
    custom: false,
  },

  {
    name: "Premium Plan",
    subtitle: "Best for scaling & winning more bids",

    originalPrice: 42999,
    finalPrice: 29999,

    badge: "6 Months / 50 Bids",
    discount: "30% OFF",

    iconColor: "bg-blue-600",

    description:
      "Designed for serious sellers aiming to increase win rate & scale operations.",

    features: [
      "6 Months Validity",
      "50 Bids Included",
      "Dedicated Account Manager",
      "Advanced Eligibility Analysis",
      "Complete Documentation Handling",
      "Priority Bid Submission (Deadline-focused)",
      "End-to-End Bid Participation",
      "OEM Authorization Support",
      "Rejection Analysis & Improvement Strategy",
      "Monthly Performance Report",
      "Strategic Tender Support",
    ],

    button: "Choose Plan",
    href: "/checkout?plan=premium",

    featured: true,
    custom: false,
  },

  {
    name: "Custom Bid Plan",
    subtitle: "Best for high-value & complex tenders",

    originalPrice: null,
    finalPrice: null,

    badge: "Custom Scope",
    discount: null,

    iconColor: "bg-purple-600",

    description:
      "Perfect for enterprises handling high-value, complex tenders.",

    features: [
      "Pricing based on bid scope & complexity",
      "Requirement-based / High-volume bidding",
      "Dedicated 1 Person",
      "BOQ & Complex Documentation Handling",
      "Advanced Eligibility & Risk Analysis",
      "OEM / MAF Coordination",
      "Managed Bid Handling & Submission",
      "Rejection Analysis & Strategy Optimization",
      "Revenue-focused Bidding Strategy",
    ],

    button: "Contact Us",
    href: "/contact",

    featured: false,
    custom: true,
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

            {/* COPY 1 */}
            <div className="offer-ticker-content">
              {offerItems}
            </div>

            {/* COPY 2 */}
            <div
              className="offer-ticker-content"
              aria-hidden="true"
            >
              {offerItems}
            </div>

            {/* COPY 3 */}
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
   PAGE
========================================================= */

export default function TenderManagementPricingPage() {
  return (
    <main className="min-h-screen bg-[#fbfcfe]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-14">

        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center md:px-6">

          {/* BACK TO PRICING */}

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

          {/* CATEGORY */}

          <div>
            <span className="inline-flex rounded-full bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-orange-600">
              Tender Management Plans
            </span>
          </div>

          {/* HEADING */}

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-[42px]">
            Flexible Tender Bidding Support Plans
          </h1>

          {/* DESCRIPTION */}

          <p className="mx-auto mt-4 max-w-4xl text-base leading-7 text-slate-600 md:text-lg">
            Choose the right tender management plan based on your bidding
            volume, business goals and support requirements.
          </p>

        </div>

      </section>

      {/* =====================================================
          MOVING OFFER
      ====================================================== */}

      <OfferTicker />

      {/* =====================================================
          PRICING CARDS
      ====================================================== */}

      <section className="mx-auto max-w-[1800px] px-5 pb-20 pt-14 md:px-7">

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan) => (

            <div
              key={plan.name}
              className={`
                relative
                flex
                min-h-[790px]
                flex-col
                rounded-[24px]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl

                ${
                  plan.featured
                    ? "border-2 border-blue-600 shadow-[0_15px_40px_rgba(37,99,235,0.14)]"
                    : "border border-slate-200 shadow-[0_7px_25px_rgba(15,23,42,0.07)]"
                }
              `}
            >

              {/* =================================================
                  MOST POPULAR
              ================================================== */}

              {plan.featured && (

                <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">

                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-md">

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

              {/* =================================================
                  ICON
              ================================================== */}

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
                  <path d="M8 3h8a2 2 0 0 1 2 2v16H6V5a2 2 0 0 1 2-2Z" />
                  <path d="M9 7h6" />
                  <path d="M9 11h6" />
                  <path d="M9 15h4" />
                </svg>
              </div>

              {/* =================================================
                  TITLE
              ================================================== */}

              <h2 className="mt-7 text-[26px] font-bold leading-tight tracking-tight text-slate-950">
                {plan.name}
              </h2>

              <p className="mt-3 min-h-[52px] text-[15px] leading-6 text-slate-600">
                {plan.subtitle}
              </p>

              {/* =================================================
                  PRICE
              ================================================== */}

              <div className="mt-7 min-h-[170px]">

                {!plan.custom ? (
                  <>

                    {/* ORIGINAL PRICE + DISCOUNT */}

                    <div className="flex flex-wrap items-center gap-3">

                      <span className="text-lg font-semibold text-slate-400 line-through decoration-2">
                        {formatPrice(plan.originalPrice as number)}
                      </span>

                      <span className="rounded-md bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-700">
                        {plan.discount}
                      </span>

                    </div>

                    {/* FINAL PRICE */}

                    <div className="mt-2">

                      <span className="text-[42px] font-extrabold leading-none tracking-tight text-slate-950">
                        {formatPrice(plan.finalPrice as number)}
                      </span>

                    </div>

                    <p className="mt-2 text-xs font-semibold text-emerald-600">
                      Limited Time Offer
                    </p>

                  </>
                ) : (
                  <>

                    <div className="mt-1">

                      <span className="text-[36px] font-extrabold leading-none tracking-tight text-slate-950">
                        As per Requirement
                      </span>

                    </div>

                    <p className="mt-3 text-sm font-medium text-slate-500">
                      Custom pricing based on scope and complexity
                    </p>

                  </>
                )}

                {/* PLAN BADGE */}

                <div className="mt-5">

                  <span className="inline-flex rounded-xl bg-blue-50 px-4 py-2.5 text-[15px] font-semibold text-blue-600">
                    {plan.badge}
                  </span>

                </div>

              </div>

              {/* DIVIDER */}

              <div className="my-7 border-t border-slate-200" />

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="flex-grow">

                <h3 className="mb-4 text-[18px] font-bold text-slate-950">
                  What You Get:
                </h3>

                <ul className="space-y-3">

                  {plan.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[14px] leading-5 text-slate-600"
                    >

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="mt-0.5 h-[18px] w-[18px] flex-none text-emerald-500"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>

                      <span>{feature}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p className="mt-6 min-h-[42px] text-sm leading-5 text-slate-500">
                {plan.description}
              </p>

              {/* =================================================
                  BUTTON
                  ALL BUTTONS NOW BID AXIS BLUE
              ================================================== */}

              <div className="mt-7">

                <Link
                  href={plan.href}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-4
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    hover:bg-blue-700
                    hover:shadow-lg
                    hover:shadow-blue-600/20
                  "
                >

                  {plan.button}

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-6">

        <div className="rounded-[26px] bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 px-6 py-12 text-center text-white shadow-xl md:px-12">

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-100">
            Tender Consultancy
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
            Not Sure Which Tender Plan Is Right for You?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            Talk to our tender experts and choose a bidding support plan based
            on your business size, tender volume and bidding requirements.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Talk to Our Experts

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>

          </Link>

        </div>

      </section>

    </main>
  );
}