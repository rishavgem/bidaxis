import Link from "next/link";

const categories = [
  "Latest",
  "GeM",
  "Central Govt.",
  "State Govt.",
  "Railways",
  "Defence",
  "PSUs",
];

const tenders = [
  {
    id: "GEM/2026/B/7812456",
    source: "GeM",
    department: "Government e-Marketplace",
    title: "Supply of Desktop Computers, Monitors and IT Accessories",
    category: "IT & Electronics",
    location: "New Delhi",
    closing: "24 Sep",
    remaining: "8 days left",
    badge:
      "border-blue-100 bg-blue-50 text-blue-700",
  },
  {
    id: "NR/PROC/2026/1842",
    source: "Railways",
    department: "Indian Railways",
    title:
      "Procurement of Electrical Equipment and Associated Components",
    category: "Electrical",
    location: "Uttar Pradesh",
    closing: "26 Sep",
    remaining: "10 days left",
    badge:
      "border-violet-100 bg-violet-50 text-violet-700",
  },
  {
    id: "DEF/2026/PROC/451",
    source: "Defence",
    department: "Ministry of Defence",
    title:
      "Supply and Installation of Networking & Communication Equipment",
    category: "Electronics",
    location: "Pan India",
    closing: "29 Sep",
    remaining: "13 days left",
    badge:
      "border-emerald-100 bg-emerald-50 text-emerald-700",
  },
  {
    id: "PWD/2026/CIVIL/328",
    source: "State Govt.",
    department: "Public Works Department",
    title:
      "Construction, Repair and Maintenance of Government Infrastructure",
    category: "Civil Works",
    location: "Rajasthan",
    closing: "02 Oct",
    remaining: "16 days left",
    badge:
      "border-orange-100 bg-orange-50 text-orange-700",
  },
];

export default function LatestTenders() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-12 lg:pb-28 lg:pt-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute -left-[300px] top-[100px] h-[650px] w-[650px] rounded-full bg-blue-50/70 blur-[140px]" />

      <div className="pointer-events-none absolute -right-[300px] top-[350px] h-[650px] w-[650px] rounded-full bg-indigo-50/60 blur-[150px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,.12) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[760px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-9 rounded-full bg-[#155EEF]" />

              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#155EEF]">
                Tender Opportunities
              </span>
            </div>

            <h2 className="mt-4 text-[35px] font-black tracking-[-0.04em] text-[#071630] sm:text-[42px] lg:text-[49px]">
              Latest Government{" "}
              <span className="bg-gradient-to-r from-[#155EEF] to-[#0284c7] bg-clip-text text-transparent">
                Tenders
              </span>
            </h2>

            <p className="mt-4 max-w-[690px] text-[15px] leading-7 text-slate-500">
              Discover recent procurement opportunities from GeM, government
              departments, public sector organisations and institutions across
              India.
            </p>
          </div>

          <Link
            href="/tenders"
            className="group inline-flex h-[49px] w-fit items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 text-sm font-extrabold text-slate-700 shadow-[0_8px_25px_rgba(15,23,42,.05)] transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-[0_12px_30px_rgba(37,99,235,.10)]"
          >
            View All Tenders

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* =====================================================
            CATEGORY FILTERS
        ===================================================== */}

        <div className="mt-9 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={`whitespace-nowrap rounded-full px-4 py-2.5 text-[11px] font-extrabold transition ${
                index === 0
                  ? "bg-[#155EEF] text-white shadow-[0_8px_20px_rgba(21,94,239,.20)]"
                  : "border border-slate-200 bg-white/80 text-slate-600 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =====================================================
            MAIN TENDER PANEL
        ===================================================== */}

        <div className="mt-6 overflow-hidden rounded-[26px] border border-slate-200/80 bg-white/90 shadow-[0_25px_70px_rgba(15,23,42,.075)] backdrop-blur-xl">
          {/* Desktop table header */}

          <div className="hidden grid-cols-[1.8fr_.62fr_.50fr_48px] gap-6 border-b border-slate-100 bg-gradient-to-r from-[#f8faff] to-[#fbfdff] px-7 py-4 md:grid">
            <div className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
              Tender Opportunity
            </div>

            <div className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
              Location
            </div>

            <div className="text-[9px] font-black uppercase tracking-[0.17em] text-slate-400">
              Closing
            </div>

            <div />
          </div>

          {/* Tender rows */}

          {tenders.map((tender, index) => (
            <TenderRow
              key={tender.id}
              tender={tender}
              last={index === tenders.length - 1}
            />
          ))}

          {/* Bottom status */}

          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 bg-gradient-to-r from-[#fafcff] to-white px-7 py-5 sm:flex-row">
            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>

              New procurement opportunities are added regularly
            </div>

            <Link
              href="/tenders"
              className="group text-xs font-black text-blue-700"
            >
              Explore all opportunities{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            DISCOVERY AREA
        ===================================================== */}

        <div className="mt-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-600">
                Discover Faster
              </div>

              <h3 className="mt-2 text-[27px] font-black tracking-[-0.03em] text-[#071630]">
                Explore tender opportunities
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Find relevant opportunities using the way your business works.
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <ExploreCard
              number="01"
              icon={<BuildingIcon />}
              title="By Department"
              description="Browse opportunities from ministries, departments and government organisations."
            />

            <ExploreCard
              number="02"
              icon={<LocationIcon />}
              title="By Location"
              description="Discover active government tenders across states and regions."
            />

            <ExploreCard
              number="03"
              icon={<CategoryIcon />}
              title="By Industry"
              description="Find procurement opportunities relevant to your business category."
            />

            <ExploreCard
              number="04"
              icon={<ClockIcon />}
              title="Closing Soon"
              description="Track opportunities approaching their bid submission deadline."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TENDER ROW
============================================================ */

function TenderRow({
  tender,
  last,
}: {
  tender: {
    id: string;
    source: string;
    department: string;
    title: string;
    category: string;
    location: string;
    closing: string;
    remaining: string;
    badge: string;
  };
  last: boolean;
}) {
  return (
    <div
      className={`group relative grid gap-5 px-6 py-6 transition duration-300 hover:bg-[#f8fbff] md:grid-cols-[1.8fr_.62fr_.50fr_48px] md:items-center md:gap-6 md:px-7 ${
        !last ? "border-b border-slate-100" : ""
      }`}
    >
      {/* Left hover indicator */}

      <div className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 rounded-r-full bg-[#155EEF] transition-transform duration-300 group-hover:scale-y-100" />

      {/* Tender info */}

      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.12em] ${tender.badge}`}
          >
            {tender.source}
          </span>

          <span className="text-[9px] font-bold text-slate-400">
            {tender.id}
          </span>
        </div>

        <Link
          href="/tenders"
          className="block max-w-[650px] text-[15px] font-extrabold leading-[1.55] text-slate-900 transition group-hover:text-[#155EEF]"
        >
          {tender.title}
        </Link>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-slate-500">
          <span>{tender.department}</span>

          <span className="text-slate-300">•</span>

          <span>{tender.category}</span>
        </div>
      </div>

      {/* Location */}

      <div>
        <div className="mb-1 text-[8px] font-black uppercase tracking-wider text-slate-400 md:hidden">
          Location
        </div>

        <div className="flex items-center gap-2 text-[12px] font-bold text-slate-600">
          <span className="text-blue-500">
            <LocationIcon />
          </span>

          {tender.location}
        </div>
      </div>

      {/* Closing */}

      <div>
        <div className="mb-1 text-[8px] font-black uppercase tracking-wider text-slate-400 md:hidden">
          Closing
        </div>

        <div className="text-[13px] font-black text-slate-900">
          {tender.closing}
        </div>

        <div className="mt-1 flex items-center gap-1.5 text-[9px] font-extrabold text-orange-500">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />

          {tender.remaining}
        </div>
      </div>

      {/* Arrow */}

      <Link
        href="/tenders"
        aria-label={`View ${tender.title}`}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-500 shadow-sm transition duration-300 group-hover:border-[#155EEF] group-hover:bg-[#155EEF] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(21,94,239,.22)]"
      >
        →
      </Link>
    </div>
  );
}

/* ============================================================
   EXPLORE CARD
============================================================ */

function ExploreCard({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link
      href="/tenders"
      className="group relative min-h-[220px] overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_12px_35px_rgba(15,23,42,.045)] transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-[0_22px_50px_rgba(37,99,235,.10)]"
    >
      {/* Number */}

      <div className="absolute -right-1 -top-7 text-[90px] font-black tracking-[-0.08em] text-slate-50 transition duration-300 group-hover:text-blue-50">
        {number}
      </div>

      {/* Icon */}

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white text-[#155EEF] shadow-sm">
        {icon}
      </div>

      <div className="relative mt-7">
        <h4 className="text-[17px] font-black tracking-[-0.015em] text-slate-900 transition group-hover:text-[#155EEF]">
          {title}
        </h4>

        <p className="mt-3 text-[11px] leading-[1.7] text-slate-500">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-[11px] font-black text-blue-700">
          Explore

          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ============================================================
   ICONS
============================================================ */

function LocationIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />

      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
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

function CategoryIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="12" cy="12" r="9" />

      <path d="M12 7v5l3 2" />
    </svg>
  );
}