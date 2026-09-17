import Link from "next/link";

/* =========================================================
   GeM STRATEGIC GROWTH PLANS
========================================================= */

const plans = [
  {
    name: "Launch",
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

    iconColor: "from-violet-500 to-purple-600",
    accent: "violet",

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

    iconColor: "from-blue-500 to-indigo-600",
    accent: "blue",

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

    iconColor: "from-emerald-500 to-teal-600",
    accent: "emerald",

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
    name: "OEM",
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

    iconColor: "from-purple-500 to-fuchsia-600",
    accent: "purple",

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
        <span className="mr-2">⏳</span>
        Offer Ending Soon
      </span>

      <span className="growth-ticker-separator">•</span>

      <span className="growth-ticker-discount">
        <span className="mr-2">🎉</span>
        Get an Additional 5%–10% Discount — Contact Our Sales Team Today
      </span>

      <span className="growth-ticker-separator">•</span>

      <span className="growth-ticker-highlight">
        Strategic GeM Growth Packages
      </span>

      <span className="growth-ticker-separator">•</span>
    </>
  );

  return (
    <>
      <section className="relative z-20 w-full overflow-hidden border-y border-violet-400/40 bg-gradient-to-r from-violet-900 via-indigo-700 to-blue-700 shadow-[0_10px_35px_rgba(79,70,229,.15)]">
        <div className="relative flex h-[54px] w-full items-center overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-violet-900 to-transparent" />

          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-blue-700 to-transparent" />

          <div className="growth-ticker-track">
            <div className="growth-ticker-content">{offerItems}</div>

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
          animation: growthTickerScroll 22s linear infinite;
          will-change: transform;
        }

        .growth-ticker-track:hover {
          animation-play-state: paused;
        }

        .growth-ticker-content {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 46px;
          padding-right: 46px;
          white-space: nowrap;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
        }

        .growth-ticker-ending {
          display: inline-flex;
          align-items: center;
          color: #fef3c7;
          font-weight: 900;
        }

        .growth-ticker-discount {
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          font-weight: 800;
        }

        .growth-ticker-highlight {
          color: #bfdbfe;
          font-weight: 800;
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
            animation-duration: 16s;
          }

          .growth-ticker-content {
            gap: 28px;
            padding-right: 28px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .growth-ticker-track {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

/* =========================================================
   STATUS ICON
========================================================= */

function StatusIcon({ value }: { value: boolean }) {
  if (value) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      </span>
    );
  }

  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </svg>
    </span>
  );
}

/* =========================================================
   PLAN ICON
========================================================= */

function PlanIcon({ type }: { type: string }) {
  if (type === "Launch") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 2c3 2 5 5.5 5 9v3l2 2v1H5v-1l2-2v-3c0-3.5 2-7 5-9Z" />
        <path d="M9 17v2a3 3 0 0 0 6 0v-2" />
        <path d="M12 6v5" />
      </svg>
    );
  }

  if (type === "Build") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20V7" />
        <path d="m3 8 6-5 6 7 7-5" />
      </svg>
    );
  }

  if (type === "Grow") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M3 20h18" />
        <path d="m5 16 4-5 4 3 6-8" />
        <path d="M15 6h4v4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M3 21h18" />
      <path d="M5 21V8l7-4 7 4v13" />
      <path d="M9 21v-5h6v5" />
      <path d="M8 10h2" />
      <path d="M14 10h2" />
      <path d="M8 13h2" />
      <path d="M14 13h2" />
    </svg>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function GemStrategicGrowthManagementPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#faf9ff]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-white">
        {/* Background graphics */}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-[180px] -top-[180px] h-[520px] w-[520px] rounded-full bg-violet-200/45 blur-[120px]" />

          <div className="absolute -right-[160px] top-[-150px] h-[520px] w-[520px] rounded-full bg-blue-200/50 blur-[120px]" />

          <div className="absolute left-[42%] top-[120px] h-[280px] w-[280px] rounded-full bg-indigo-100/50 blur-[100px]" />

          <div
            className="absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(99,102,241,.16) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-12 md:px-7 lg:grid-cols-[1.08fr_.92fr] lg:pb-20 lg:pt-16">
          {/* LEFT */}

          <div>
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-2 text-[12px] font-bold text-slate-500 transition hover:text-violet-700"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

              Back to Pricing
            </Link>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-violet-700">
                <span className="h-2 w-2 rounded-full bg-violet-600" />
                GeM Strategic Growth Management
              </span>
            </div>

            <h1 className="mt-6 max-w-[760px] text-[39px] font-black leading-[1.05] tracking-[-0.05em] text-[#071630] sm:text-[48px] lg:text-[57px]">
              Turn GeM Participation Into
              <span className="block bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Sustainable Growth.
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[14px] leading-7 text-slate-600 sm:text-[15px]">
              Strategic GeM consultancy combined with active tender
              participation, product management, competition tracking and
              long-term marketplace growth support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#growth-plans"
                className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-[13px] bg-gradient-to-r from-violet-600 to-indigo-600 px-6 text-[11px] font-black text-white shadow-[0_14px_30px_rgba(124,58,237,.2)] transition hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(124,58,237,.28)]"
              >
                Explore Growth Plans

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>

              <Link
                href="/contact"
                className="inline-flex h-[50px] items-center justify-center rounded-[13px] border border-slate-200 bg-white px-6 text-[11px] font-black text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:text-violet-700"
              >
                Talk to Growth Team
              </Link>
            </div>

            {/* Hero metrics */}

            <div className="mt-9 grid max-w-[620px] grid-cols-3 overflow-hidden rounded-[18px] border border-slate-200 bg-white/75 shadow-[0_12px_35px_rgba(15,23,42,.05)] backdrop-blur-xl">
              <HeroMetric value="4" label="Growth Plans" />

              <HeroMetric value="₹2 Cr" label="Order Coverage" border />

              <HeroMetric value="36 Mo" label="Long-term Support" border />
            </div>
          </div>

          {/* RIGHT GRAPHIC */}

          <div className="relative mx-auto hidden h-[480px] w-full max-w-[520px] lg:block">
            {/* Orb */}

            <div className="absolute left-1/2 top-1/2 h-[370px] w-[370px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-violet-100 via-indigo-100 to-blue-100 blur-sm" />

            <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/70" />

            <div className="absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-200/70" />

            {/* Main dashboard */}

            <div className="absolute left-1/2 top-1/2 w-[330px] -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-[28px] border border-white bg-white/95 p-6 shadow-[0_35px_80px_rgba(79,70,229,.18)] backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.16em] text-violet-500">
                    GeM Growth Dashboard
                  </div>

                  <div className="mt-1 text-[18px] font-black text-[#071630]">
                    Business Growth
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                  <PlanIcon type="Grow" />
                </div>
              </div>

              {/* Chart */}

              <div className="relative mt-7 h-[150px] overflow-hidden rounded-[18px] bg-gradient-to-b from-violet-50 to-white p-4">
                <div className="absolute inset-x-4 top-[35px] border-t border-dashed border-slate-200" />
                <div className="absolute inset-x-4 top-[75px] border-t border-dashed border-slate-200" />
                <div className="absolute inset-x-4 top-[115px] border-t border-dashed border-slate-200" />

                <svg
                  viewBox="0 0 280 110"
                  className="relative h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="growthArea"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#7c3aed"
                        stopOpacity="0.30"
                      />
                      <stop
                        offset="100%"
                        stopColor="#7c3aed"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0 94 C25 91 38 82 57 84 C77 86 89 67 109 69 C130 70 139 52 158 55 C179 57 191 38 211 40 C232 42 246 18 280 12 L280 110 L0 110 Z"
                    fill="url(#growthArea)"
                  />

                  <path
                    d="M0 94 C25 91 38 82 57 84 C77 86 89 67 109 69 C130 70 139 52 158 55 C179 57 191 38 211 40 C232 42 246 18 280 12"
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute right-5 top-5 rounded-full bg-emerald-50 px-3 py-1.5 text-[8px] font-black text-emerald-600">
                  Growth ↑
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2">
                <DashboardStat value="75+" label="Bids" />
                <DashboardStat value="50" label="Uploads" />
                <DashboardStat value="₹80L" label="Cover" />
              </div>
            </div>

            {/* Floating card 1 */}

            <div className="absolute left-0 top-[70px] rounded-[17px] border border-violet-100 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,.10)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                  <TargetIcon />
                </div>

                <div>
                  <div className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                    Strategy
                  </div>
                  <div className="mt-1 text-[10px] font-black text-slate-800">
                    Growth Planning
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card 2 */}

            <div className="absolute bottom-[70px] right-[-10px] rounded-[17px] border border-emerald-100 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,.10)]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                  <CheckIcon />
                </div>

                <div>
                  <div className="text-[8px] font-black uppercase tracking-wider text-slate-400">
                    Tender Activity
                  </div>
                  <div className="mt-1 text-[10px] font-black text-slate-800">
                    Active Participation
                  </div>
                </div>
              </div>
            </div>

            {/* Floating pill */}

            <div className="absolute right-[5px] top-[55px] rounded-full border border-blue-100 bg-white px-4 py-2.5 text-[9px] font-black text-blue-600 shadow-lg">
              GeM Marketplace
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MOVING OFFER
      ====================================================== */}

      <OfferTicker />

      {/* =====================================================
          PRICING CARDS
      ====================================================== */}

      <section
        id="growth-plans"
        className="relative mx-auto max-w-[1500px] px-5 pb-20 pt-20 md:px-7"
      >
        <div className="pointer-events-none absolute left-1/2 top-[80px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-100/40 blur-[150px]" />

        <div className="relative">
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-violet-700">
              Growth & Retainer Packages
            </span>

            <h2 className="mt-5 text-[34px] font-black tracking-[-0.04em] text-[#071630] md:text-[43px]">
              Choose Your Strategic
              <span className="text-violet-600"> Growth Plan</span>
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-[13px] leading-7 text-slate-500">
              Select a package based on your growth targets, tender volume,
              product portfolio and long-term GeM business requirements.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`group relative flex h-full flex-col rounded-[28px] bg-white p-6 transition-all duration-300 hover:-translate-y-2 ${
                  plan.featured
                    ? "border-2 border-violet-500 shadow-[0_25px_65px_rgba(124,58,237,.15)]"
                    : "border border-slate-200 shadow-[0_12px_35px_rgba(15,23,42,.06)] hover:border-violet-200 hover:shadow-[0_25px_60px_rgba(79,70,229,.12)]"
                }`}
              >
                {/* Popular */}

                {plan.featured && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white shadow-lg">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-3.5 w-3.5"
                      >
                        <path d="m12 2.5 2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5Z" />
                      </svg>

                      Most Popular
                    </span>
                  </div>
                )}

                {/* Top */}

                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-[17px] bg-gradient-to-br ${plan.iconColor} text-white shadow-lg`}
                  >
                    <PlanIcon type={plan.name} />
                  </div>

                  <span className="rounded-full bg-slate-50 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
                    {plan.duration}
                  </span>
                </div>

                <p className="mt-6 text-[9px] font-black uppercase tracking-[0.16em] text-violet-600">
                  {plan.name} Package
                </p>

                <h3 className="mt-2 text-[25px] font-black tracking-[-0.035em] text-[#071630]">
                  {plan.displayName}
                </h3>

                <p className="mt-3 min-h-[48px] text-[11px] leading-6 text-slate-500">
                  {plan.subtitle}
                </p>

                {/* Price */}

                <div className="mt-5 rounded-[18px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-blue-50 p-5">
                  <p className="text-[8px] font-black uppercase tracking-[0.14em] text-slate-400">
                    Strategic Growth Package
                  </p>

                  <div className="mt-2">
                    <span className="text-[29px] font-black tracking-[-0.04em] text-[#071630]">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] font-bold text-slate-400">
                    {plan.priceSuffix}
                  </p>
                </div>

                {/* Quick stats */}

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <PlanStat
                    label="Order Cover"
                    value={plan.orderCover}
                    highlight
                  />

                  <PlanStat
                    label="Tender Bids"
                    value={plan.bids}
                  />

                  <PlanStat
                    label="Monthly Uploads"
                    value={plan.monthlyUploads}
                  />

                  <PlanStat
                    label="Incidents"
                    value={plan.incidentManagement}
                  />
                </div>

                {/* Features */}

                <div className="mt-7 flex-grow">
                  <h4 className="text-[12px] font-black text-[#071630]">
                    What You Get
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[10px] leading-5 text-slate-600"
                      >
                        <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
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

                {/* Button */}

                <div className="mt-7">
                  <Link
                    href={plan.href}
                    className={`group/button flex w-full items-center justify-center gap-2 rounded-[13px] px-5 py-4 text-[10px] font-black text-white transition-all ${
                      plan.featured
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_12px_28px_rgba(124,58,237,.2)] hover:shadow-[0_16px_34px_rgba(124,58,237,.28)]"
                        : "bg-[#155EEF] hover:bg-blue-700"
                    }`}
                  >
                    {plan.button}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-4 w-4 transition-transform group-hover/button:translate-x-1"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          GROWTH PROCESS GRAPHIC
      ====================================================== */}

      <section className="relative bg-white py-20">
        <div className="mx-auto max-w-[1240px] px-5 md:px-7">
          <div className="text-center">
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-violet-600">
              How Strategic Growth Works
            </span>

            <h2 className="mt-4 text-[32px] font-black tracking-[-0.04em] text-[#071630] md:text-[40px]">
              From GeM Presence to
              <span className="text-violet-600"> Business Growth</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[12px] leading-6 text-slate-500">
              A structured approach combining marketplace management, tender
              participation and continuous strategic review.
            </p>
          </div>

          <div className="relative mt-14 grid gap-4 md:grid-cols-4">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-[40px] hidden border-t-2 border-dashed border-violet-200 md:block" />

            <ProcessCard
              number="01"
              title="Build Presence"
              text="Strengthen product listings and marketplace visibility."
            />

            <ProcessCard
              number="02"
              title="Discover"
              text="Identify relevant tenders and GeM opportunities."
            />

            <ProcessCard
              number="03"
              title="Participate"
              text="Execute structured tender and bid participation."
            />

            <ProcessCard
              number="04"
              title="Scale"
              text="Review performance and build a long-term growth strategy."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PLAN COMPARISON
      ====================================================== */}

      <section className="relative mx-auto max-w-[1500px] px-5 py-20 md:px-7">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-violet-700">
            Compare Plans
          </span>

          <h2 className="mt-4 text-[32px] font-black tracking-[-0.04em] text-[#071630] md:text-[40px]">
            Strategic Growth Plan Comparison
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-[12px] leading-6 text-slate-500">
            Compare key inclusions across every BidAxis strategic growth
            package.
          </p>
        </div>

        <div className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,.08)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1180px]">
              <thead>
                <tr className="bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 text-left text-[10px] text-white">
                  <th className="px-6 py-5 font-black">
                    Plan
                  </th>

                  <th className="px-5 py-5 font-black">
                    Duration
                  </th>

                  <th className="px-5 py-5 font-black">
                    Order Cover
                  </th>

                  <th className="px-5 py-5 font-black">
                    Monthly Uploads
                  </th>

                  <th className="px-5 py-5 font-black">
                    Bids
                  </th>

                  <th className="px-5 py-5 font-black">
                    Incident Management
                  </th>

                  <th className="px-5 py-5 text-center font-black">
                    Competition Tracking
                  </th>

                  <th className="px-5 py-5 text-center font-black">
                    Distributor Management
                  </th>

                  <th className="px-5 py-5 font-black">
                    Vendor Assessment
                  </th>
                </tr>
              </thead>

              <tbody>
                {plans.map((plan, index) => (
                  <tr
                    key={plan.name}
                    className={`border-t border-slate-100 text-[11px] transition hover:bg-violet-50/50 ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                    }`}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-[10px] bg-gradient-to-br ${plan.iconColor} text-white`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-4 w-4"
                          >
                            <path d="m5 12 4 4L19 6" />
                          </svg>
                        </div>

                        <div>
                          <div className="font-black text-[#071630]">
                            {plan.displayName}
                          </div>

                          {plan.featured && (
                            <div className="mt-1 text-[7px] font-black uppercase tracking-wider text-violet-600">
                              Most Popular
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-5 font-bold text-slate-700">
                      {plan.duration}
                    </td>

                    <td className="px-5 py-5 font-black text-emerald-600">
                      {plan.orderCover}
                    </td>

                    <td className="px-5 py-5 font-semibold text-slate-700">
                      {plan.monthlyUploads}
                    </td>

                    <td className="px-5 py-5 font-bold text-slate-800">
                      {plan.bids}
                    </td>

                    <td className="px-5 py-5 font-bold text-slate-800">
                      {plan.incidentManagement}
                    </td>

                    <td className="px-5 py-5 text-center">
                      <StatusIcon value={plan.competitionTracking} />
                    </td>

                    <td className="px-5 py-5 text-center">
                      <StatusIcon value={plan.distributorManagement} />
                    </td>

                    <td className="px-5 py-5 font-black text-slate-800">
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
          CONTACT / SALES STRIP
      ====================================================== */}

      <section className="mx-auto max-w-[1240px] px-5 pb-8 md:px-7">
        <div className="grid gap-4 rounded-[25px] border border-violet-100 bg-white p-5 shadow-[0_15px_45px_rgba(15,23,42,.06)] md:grid-cols-3">
          <ContactItem
            label="Sales"
            value="+91 88825 37520"
            href="tel:+918882537520"
          />

          <ContactItem
            label="Alternate"
            value="+91 78883 71643"
            href="tel:+917888371643"
          />

          <ContactItem
            label="Email"
            value="sales@bidaxis.in"
            href="mailto:sales@bidaxis.in"
          />
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="mx-auto max-w-[1240px] px-5 pb-20 pt-6 md:px-7">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#170b3f] via-[#312e81] to-[#0756b8] px-6 py-14 text-center text-white shadow-[0_30px_80px_rgba(49,46,129,.22)] md:px-12 md:py-16">
          {/* Graphic background */}

          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-violet-400/25 blur-[90px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px]" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-violet-100 backdrop-blur-xl">
              Strategic GeM Growth
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-[32px] font-black leading-[1.1] tracking-[-0.04em] md:text-[43px]">
              Ready to Build Sustainable Growth on GeM?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-[12px] leading-7 text-violet-100/75">
              Speak with our strategic GeM team and select a plan based on
              your revenue goals, product portfolio and tender participation
              requirements.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex h-[50px] items-center justify-center gap-2 rounded-[13px] bg-white px-7 text-[10px] font-black text-indigo-700 shadow-xl transition hover:-translate-y-1"
              >
                Talk to Our Growth Team

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

              <a
                href="tel:+918882537520"
                className="inline-flex h-[50px] items-center justify-center rounded-[13px] border border-white/15 bg-white/10 px-7 text-[10px] font-black text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Call +91 88825 37520
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[8px] font-bold text-blue-100/60">
              <span>New Delhi, Delhi</span>
              <span className="h-1 w-1 rounded-full bg-blue-300/50" />
              <span>Abohar, Punjab</span>
              <span className="h-1 w-1 rounded-full bg-blue-300/50" />
              <span>sales@bidaxis.in</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function HeroMetric({
  value,
  label,
  border = false,
}: {
  value: string;
  label: string;
  border?: boolean;
}) {
  return (
    <div
      className={`px-3 py-4 text-center ${
        border ? "border-l border-slate-200" : ""
      }`}
    >
      <div className="text-[17px] font-black text-[#071630]">
        {value}
      </div>

      <div className="mt-1 text-[7px] font-black uppercase tracking-[0.12em] text-slate-400">
        {label}
      </div>
    </div>
  );
}

function DashboardStat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-slate-50 px-2 py-3 text-center">
      <div className="text-[13px] font-black text-[#071630]">
        {value}
      </div>

      <div className="mt-1 text-[7px] font-bold uppercase tracking-wider text-slate-400">
        {label}
      </div>
    </div>
  );
}

function PlanStat({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-[13px] border border-slate-100 bg-slate-50/80 p-3">
      <div className="text-[7px] font-black uppercase tracking-[0.11em] text-slate-400">
        {label}
      </div>

      <div
        className={`mt-1.5 text-[10px] font-black ${
          highlight ? "text-emerald-600" : "text-slate-800"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative z-10 rounded-[22px] border border-slate-200 bg-white p-5 text-center shadow-[0_10px_35px_rgba(15,23,42,.05)] transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_45px_rgba(79,70,229,.10)]">
      <div className="mx-auto flex h-[78px] w-[78px] items-center justify-center rounded-full border-[7px] border-violet-50 bg-gradient-to-br from-violet-600 to-indigo-600 text-[17px] font-black text-white shadow-lg">
        {number}
      </div>

      <h3 className="mt-5 text-[14px] font-black text-[#071630]">
        {title}
      </h3>

      <p className="mt-2 text-[10px] leading-5 text-slate-500">
        {text}
      </p>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-[17px] bg-slate-50 px-4 py-4 transition hover:bg-violet-50"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
        <ContactIcon />
      </div>

      <div className="min-w-0">
        <div className="text-[7px] font-black uppercase tracking-[0.13em] text-slate-400">
          {label}
        </div>

        <div className="mt-1 truncate text-[10px] font-black text-[#071630]">
          {value}
        </div>
      </div>
    </a>
  );
}

/* =========================================================
   GRAPHIC ICONS
========================================================= */

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="m15 9 6-6" />
      <path d="M17 3h4v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8" />
      <path d="M8 13h5" />
    </svg>
  );
}