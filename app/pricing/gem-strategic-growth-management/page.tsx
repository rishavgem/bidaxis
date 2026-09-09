import Link from "next/link";

/* =========================================================
   GeM STRATEGIC GROWTH PLANS
========================================================= */

const plans = [
  {
    name: "Plan",
    displayName: "Launch Plan",
    subtitle: "For businesses beginning structured GeM growth.",

    duration: "6 Months",
    orderCover: "₹12.5 Lakhs",
    monthlyUploads: "15 Products",
    bids: "15 Bids",
    incidentManagement: "5",
    competitionTracking: false,
    distributorManagement: false,
    vendorAssessment: "5%",

    price: "₹24,999",
    priceSuffix: "+ taxes",

    iconColor: "bg-violet-500",

    features: [
      "Strategic GeM Consultancy",
      "15 Product Uploads Every Month",
      "15 Tender Bids",
      "Order Coverage up to ₹12.5 Lakhs",
      "5 Incident Management Cases",
      "5% Vendor Assessment Discount",
      "Monthly Growth Review",
      "GeM Opportunity Guidance",
    ],

    button: "Choose Launch",
    href: "/contact",

    featured: false,
  },

  {
    name: "Build",
    displayName: "Build Plan",
    subtitle: "For sellers building consistent GeM participation.",

    duration: "12 Months",
    orderCover: "₹33.33 Lakhs",
    monthlyUploads: "25 Products",
    bids: "30 Bids",
    incidentManagement: "Unlimited",
    competitionTracking: false,
    distributorManagement: false,
    vendorAssessment: "10%",

    price: "₹44,999",
    priceSuffix: "+ taxes",

    iconColor: "bg-blue-600",

    features: [
      "12 Months Strategic Consultancy",
      "25 Product Uploads Every Month",
      "30 Tender Bids",
      "Order Coverage up to ₹33.33 Lakhs",
      "Unlimited Incident Management",
      "10% Vendor Assessment Discount",
      "Monthly Performance Review",
      "Growth Opportunity Planning",
      "Priority Consultancy Support",
    ],

    button: "Choose Build",
    href: "/contact",

    featured: true,
  },

  {
    name: "Grow",
    displayName: "Grow Plan",
    subtitle: "For established sellers focused on aggressive growth.",

    duration: "24 Months",
    orderCover: "₹80 Lakhs",
    monthlyUploads: "50 Products",
    bids: "75 Bids",
    incidentManagement: "Unlimited",
    competitionTracking: true,
    distributorManagement: false,
    vendorAssessment: "20%",

    price: "₹84,999",
    priceSuffix: "+ taxes",

    iconColor: "bg-emerald-500",

    features: [
      "24 Months Strategic Consultancy",
      "50 Product Uploads Every Month",
      "75 Tender Bids",
      "Order Coverage up to ₹80 Lakhs",
      "Unlimited Incident Management",
      "Competition Tracking",
      "20% Vendor Assessment Discount",
      "Advanced Performance Analysis",
      "Tender Growth Strategy",
      "Priority Strategic Support",
    ],

    button: "Choose Grow",
    href: "/contact",

    featured: false,
  },

  {
    name: "OEM Plan",
    displayName: "OEM Growth Plan",
    subtitle: "Enterprise growth management for OEMs and large sellers.",

    duration: "36 Months",
    orderCover: "₹2 Crores",
    monthlyUploads: "100 Products",
    bids: "Unlimited",
    incidentManagement: "Unlimited",
    competitionTracking: true,
    distributorManagement: true,
    vendorAssessment: "Custom",

    price: "From ₹1,49,999",
    priceSuffix: "+ taxes",

    iconColor: "bg-purple-600",

    features: [
      "36 Months Strategic Consultancy",
      "100 Product Uploads Every Month",
      "Unlimited Tender Bids",
      "Order Coverage up to ₹2 Crores",
      "Unlimited Incident Management",
      "Advanced Competition Tracking",
      "Distributor Management",
      "Custom Vendor Assessment Benefits",
      "Dedicated Growth Consultant",
      "OEM & Channel Growth Strategy",
      "Revenue-focused GeM Planning",
    ],

    button: "Contact Sales",
    href: "/contact",

    featured: false,
  },
];

/* =========================================================
   MOVING OFFER TICKER
========================================================= */

function OfferTicker() {
  const offerItems = (
    <>
      <span className="growth-ticker-ending">
        ⏳ Offer Ending Soon
      </span>

      <span className="growth-ticker-separator">•</span>

      <span className="growth-ticker-discount">
        🎉 Get an Additional 5%–10% Discount — Contact Our Sales Team Today
      </span>

      <span className="growth-ticker-separator">•</span>
    </>
  );

  return (
    <>
      <section className="relative w-full overflow-hidden border-y border-violet-500 bg-gradient-to-r from-violet-800 via-indigo-600 to-blue-700">
        <div className="relative flex h-[52px] w-full items-center overflow-hidden">

          <div className="growth-ticker-track">

            <div className="growth-ticker-content">
              {offerItems}
            </div>

            <div
              className="growth-ticker-content"
              aria-hidden="true"
            >
              {offerItems}
            </div>

            <div
              className="growth-ticker-content"
              aria-hidden="true"
            >
              {offerItems}
            </div>

          </div>

        </div>
      </section>

      <style>{`

        .growth-ticker-track {
          display: flex;
          flex-shrink: 0;
          width: max-content;
          min-width: max-content;

          animation: growthTickerScroll 20s linear infinite;

          will-change: transform;
        }

        .growth-ticker-content {
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

        .growth-ticker-ending {
          display: inline-flex;
          align-items: center;

          color: #fef3c7;

          font-weight: 800;
        }

        .growth-ticker-discount {
          display: inline-flex;
          align-items: center;

          color: #ffffff;

          font-weight: 700;
        }

        .growth-ticker-separator {
          color: #c4b5fd;

          font-size: 20px;
        }

        @keyframes growthTickerScroll {

          0% {
            transform: translate3d(0, 0, 0);
          }

          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }

        }

        @media (max-width: 768px) {

          .growth-ticker-track {
            animation-duration: 15s;
          }

          .growth-ticker-content {
            gap: 30px;
            padding-right: 30px;
            font-size: 13px;
          }

        }

      `}</style>
    </>
  );
}

/* =========================================================
   YES / NO ICON
========================================================= */

function StatusIcon({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="h-4 w-4"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-50 text-red-500">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        className="h-4 w-4"
      >
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    </span>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function GemStrategicGrowthManagementPage() {
  return (
    <main className="min-h-screen bg-[#faf9ff]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-14 md:py-16">

        <div className="pointer-events-none absolute -left-28 top-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-28 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

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
            <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-violet-700">
              GeM Strategic Growth Management
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl text-3xl font-bold tracking-tight text-slate-950 md:text-4xl lg:text-[44px] lg:leading-[1.15]">
            Strategic GeM Consultancy + Active Tender Services
            <span className="text-violet-600"> = Sustainable Growth</span>
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-slate-600 md:text-lg">
            Strategic GeM management for businesses that want to improve
            tender participation, strengthen marketplace visibility and build
            sustainable government-business growth.
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

      <section className="mx-auto max-w-[1800px] px-5 pb-20 pt-16 md:px-7">

        <div className="mb-10 text-center">

          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
            Growth & Retainer Packages
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
            Choose Your Strategic Growth Plan
          </h2>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-slate-600">
            Select a package based on your growth targets, tender volume and
            long-term GeM business requirements.
          </p>

        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">

          {plans.map((plan) => (

            <article
              key={plan.name}
              className={`
                relative
                flex
                h-full
                flex-col
                rounded-[26px]
                bg-white
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl

                ${
                  plan.featured
                    ? "border-2 border-violet-500 shadow-[0_18px_50px_rgba(124,58,237,0.14)]"
                    : "border border-slate-200 shadow-[0_8px_30px_rgba(15,23,42,0.07)]"
                }
              `}
            >

              {/* POPULAR */}

              {plan.featured && (

                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">

                  <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">

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
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-sm ${plan.iconColor}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-7 w-7"
                >
                  <path d="M4 19V9" />
                  <path d="M10 19V5" />
                  <path d="M16 19v-7" />
                  <path d="M22 19V3" />
                  <path d="m3 7 6-4 6 6 7-6" />
                </svg>
              </div>

              {/* TITLE */}

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-violet-600">
                {plan.name}
              </p>

              <h3 className="mt-1 text-[27px] font-bold text-slate-950">
                {plan.displayName}
              </h3>

              <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-600">
                {plan.subtitle}
              </p>

              {/* PRICE */}

              <div className="mt-6 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-50 p-5">

                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Strategic Growth Package
                </p>

                <div className="mt-2">

                  <span className="text-[34px] font-extrabold tracking-tight text-slate-950">
                    {plan.price}
                  </span>

                </div>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {plan.priceSuffix}
                </p>

              </div>

              {/* QUICK STATS */}

              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Duration
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {plan.duration}
                  </p>

                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Bids
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {plan.bids}
                  </p>

                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Order Cover
                  </p>

                  <p className="mt-1 text-sm font-bold text-emerald-600">
                    {plan.orderCover}
                  </p>

                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50 p-3">

                  <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
                    Uploads
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {plan.monthlyUploads}
                  </p>

                </div>

              </div>

              {/* FEATURES */}

              <div className="mt-7 flex-grow">

                <h4 className="text-[17px] font-bold text-slate-950">
                  What You Get
                </h4>

                <ul className="mt-4 space-y-3">

                  {plan.features.map((feature) => (

                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-5 text-slate-600"
                    >

                      <span className="mt-0.5 flex h-[19px] w-[19px] flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-500">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="h-3 w-3"
                        >
                          <path d="m5 12 4 4L19 6" />
                        </svg>

                      </span>

                      <span>{feature}</span>

                    </li>

                  ))}

                </ul>

              </div>

              {/* BUTTON */}

              <div className="mt-8">

                <Link
                  href={plan.href}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
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

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          PLAN COMPARISON
      ====================================================== */}

      <section className="mx-auto max-w-[1500px] px-5 pb-20 md:px-7">

        <div className="mb-8 text-center">

          <span className="text-sm font-bold uppercase tracking-[0.15em] text-violet-600">
            Compare Plans
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Strategic Growth Plan Comparison
          </h2>

        </div>

        <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-lg">

          <div className="overflow-x-auto">

            <table className="min-w-[1100px] w-full">

              <thead>

                <tr className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 text-left text-sm text-white">

                  <th className="px-6 py-5 font-bold">
                    Plan
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Duration
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Order Cover
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Monthly Uploads
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Bids
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Incident Management
                  </th>

                  <th className="px-5 py-5 text-center font-bold">
                    Competition Tracking
                  </th>

                  <th className="px-5 py-5 text-center font-bold">
                    Distributor Management
                  </th>

                  <th className="px-5 py-5 font-bold">
                    Vendor Assessment
                  </th>

                </tr>

              </thead>

              <tbody>

                {plans.map((plan, index) => (

                  <tr
                    key={plan.name}
                    className={`
                      border-t border-slate-200
                      ${
                        index % 2 === 0
                          ? "bg-white"
                          : "bg-violet-50/40"
                      }
                    `}
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2">

                        <span className="font-bold text-slate-950">
                          {plan.displayName}
                        </span>

                        {plan.featured && (

                          <span className="rounded-full bg-violet-100 px-2 py-1 text-[10px] font-bold uppercase text-violet-700">
                            Popular
                          </span>

                        )}

                      </div>

                    </td>

                    <td className="px-5 py-5 font-medium text-slate-700">
                      {plan.duration}
                    </td>

                    <td className="px-5 py-5 font-bold text-emerald-600">
                      {plan.orderCover}
                    </td>

                    <td className="px-5 py-5 text-slate-700">
                      {plan.monthlyUploads}
                    </td>

                    <td className="px-5 py-5 font-medium text-slate-800">
                      {plan.bids}
                    </td>

                    <td className="px-5 py-5 font-medium text-slate-800">
                      {plan.incidentManagement}
                    </td>

                    <td className="px-5 py-5 text-center">
                      <StatusIcon value={plan.competitionTracking} />
                    </td>

                    <td className="px-5 py-5 text-center">
                      <StatusIcon value={plan.distributorManagement} />
                    </td>

                    <td className="px-5 py-5 font-bold text-slate-800">
                      {plan.vendorAssessment}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-6">

        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-violet-950 via-indigo-900 to-blue-800 px-6 py-12 text-center text-white shadow-xl md:px-12">

          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative">

            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-100">
              Strategic GeM Growth
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Build Sustainable Growth on GeM?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100">
              Speak with our strategic GeM consultants and choose a growth
              plan based on your revenue goals, product portfolio and tender
              participation requirements.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-indigo-700 transition hover:bg-violet-50"
            >
              Talk to Our Growth Team

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

        </div>

      </section>

    </main>
  );
}