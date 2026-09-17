import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-t-[6px] border-[#075b61] bg-white shadow-[0_2px_10px_rgba(15,23,42,0.10)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-blue-700"
        >
          BidAxis
        </Link>

        {/* =====================================================
            DESKTOP MENU
        ====================================================== */}

        <ul className="hidden items-center gap-8 md:flex">

          {/* HOME */}

          <li>
            <Link
              href="/"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              Home
            </Link>
          </li>

          {/* =================================================
              SERVICES DROPDOWN
          ================================================== */}

          <li className="group/services relative">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-slate-800 transition hover:text-blue-700"
            >
              Services

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-200 group-hover/services:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            <div
              className="
                invisible
                absolute
                left-0
                top-full
                z-50
                w-72
                translate-y-2
                pt-5
                opacity-0
                transition-all
                duration-200
                group-hover/services:visible
                group-hover/services:translate-y-0
                group-hover/services:opacity-100
              "
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_55px_rgba(15,23,42,0.14)]">

                <Link
                  href="/services/gem-registration"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  GeM Registration
                </Link>

                <Link
                  href="/services/tender-consultancy"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Tender Consultancy
                </Link>

                <Link
                  href="/services/bid-documentation"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Bid Documentation
                </Link>

                <Link
                  href="/services/reverse-auction"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Reverse Auction
                </Link>

                <Link
                  href="/services/vendor-assessment"
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Vendor Assessment
                </Link>

                <div className="mt-2 border-t border-slate-100 pt-2">
                  <Link
                    href="/services"
                    className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    <span>View All Services</span>

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m14 7 5 5-5 5" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          </li>

          {/* =================================================
              ABOUT
          ================================================== */}

          <li>
            <Link
              href="/about"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              About
            </Link>
          </li>

          {/* =================================================
              ALL SERVICES
          ================================================== */}

          <li>
            <Link
              href="/services"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              All Services
            </Link>
          </li>

          {/* =================================================
              PRICING
          ================================================== */}

          <li>
            <Link
              href="/pricing"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              Pricing
            </Link>
          </li>

          {/* =================================================
              TOOLS DROPDOWN
          ================================================== */}

          <li className="group/tools relative">
            <button
              type="button"
              className="flex items-center gap-1 font-medium text-slate-800 transition hover:text-blue-700"
            >
              Tools

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-200 group-hover/tools:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {/* =================================================
                TOOLS DROPDOWN PANEL
            ================================================== */}

            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-50
                w-[390px]
                -translate-x-1/2
                translate-y-2
                pt-5
                opacity-0
                transition-all
                duration-200
                group-hover/tools:visible
                group-hover/tools:translate-y-0
                group-hover/tools:opacity-100
              "
            >
              <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white p-2.5 shadow-[0_25px_65px_rgba(15,23,42,0.18)]">

                {/* =============================================
                    TOOLS HEADER
                ============================================== */}

                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#061b35] via-[#07365f] to-[#0756b8] px-4 py-4">

                  {/* GRAPHIC CIRCLES */}

                  <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full border-[20px] border-white/[0.05]" />

                  <div className="pointer-events-none absolute -bottom-14 right-14 h-24 w-24 rounded-full border-[14px] border-sky-300/[0.05]" />

                  <div className="relative flex items-start justify-between gap-4">

                    <div>
                      <div className="mb-2 flex items-center gap-2">

                        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-sky-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M4 7h16" />
                            <path d="M4 12h16" />
                            <path d="M4 17h16" />
                            <circle cx="7" cy="7" r="1" />
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="17" cy="17" r="1" />
                          </svg>
                        </span>

                        <span className="text-[9px] font-black uppercase tracking-[0.18em] text-sky-300">
                          BidAxis Tools
                        </span>

                      </div>

                      <h3 className="text-[15px] font-extrabold text-white">
                        Quick Tender Utilities
                      </h3>

                      <p className="mt-1 max-w-[245px] text-[10px] font-medium leading-4 text-slate-300">
                        Generate commonly required tender certificates and
                        declarations.
                      </p>
                    </div>

                    <span className="flex-none rounded-full border border-emerald-300/20 bg-emerald-400/10 px-2.5 py-1 text-[8px] font-black uppercase tracking-wider text-emerald-300">
                      Free Tools
                    </span>

                  </div>
                </div>

                {/* =============================================
                    POPULAR TOOLS HEADING
                ============================================== */}

                <div className="flex items-center justify-between px-3 pb-2 pt-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.14em] text-slate-400">
                    Popular Tools
                  </span>

                  <span className="text-[9px] font-bold text-slate-400">
                    Quick Access
                  </span>
                </div>

                {/* =============================================
                    MII CERTIFICATE GENERATOR
                ============================================== */}

                <Link
                  href="/tools/mii-certificate"
                  className="group/mii relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/80"
                >

                  {/* LEFT HOVER LINE */}

                  <div className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 rounded-full bg-blue-600 transition-transform duration-200 group-hover/mii:scale-y-100" />

                  {/* ICON */}

                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700 transition-all duration-200 group-hover/mii:bg-blue-600 group-hover/mii:text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M6 3h9l3 3v15H6z" />
                      <path d="M15 3v4h4" />
                      <path d="M9 11h6" />
                      <path d="M9 15h6" />
                      <path d="M9 19h4" />
                    </svg>

                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-extrabold text-slate-900 transition group-hover/mii:text-blue-700">
                        MII Certificate Generator
                      </p>

                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-black uppercase tracking-wide text-emerald-700">
                        Free
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-medium leading-4 text-slate-500">
                      Make in India / Local Content Certificate
                    </p>

                    <div className="mt-1.5 flex items-center gap-1 text-[9px] font-extrabold text-blue-600">
                      Generate Document

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 transition-transform group-hover/mii:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m14 7 5 5-5 5" />
                      </svg>
                    </div>

                  </div>

                  {/* ARROW */}

                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all duration-200 group-hover/mii:bg-blue-600 group-hover/mii:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m14 7 5 5-5 5" />
                    </svg>
                  </div>

                </Link>

                {/* =============================================
                    DIVIDER
                ============================================== */}

                <div className="mx-3 h-px bg-slate-100" />

                {/* =============================================
                    ATC CERTIFICATE GENERATOR
                ============================================== */}

                <Link
                  href="/tools/atc-certificate"
                  className="group/atc relative flex items-center gap-3 overflow-hidden rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-violet-100 hover:bg-violet-50/80"
                >

                  {/* LEFT HOVER LINE */}

                  <div className="absolute bottom-0 left-0 top-0 w-[3px] scale-y-0 rounded-full bg-violet-600 transition-transform duration-200 group-hover/atc:scale-y-100" />

                  {/* ICON */}

                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-violet-50 text-violet-700 transition-all duration-200 group-hover/atc:bg-violet-600 group-hover/atc:text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M6 3h9l3 3v15H6z" />
                      <path d="M15 3v4h4" />
                      <path d="m9 14 2 2 4-5" />
                    </svg>

                  </div>

                  {/* CONTENT */}

                  <div className="min-w-0 flex-1">

                    <div className="flex items-center gap-2">
                      <p className="text-[13px] font-extrabold text-slate-900 transition group-hover/atc:text-violet-700">
                        ATC Certificate Generator
                      </p>

                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[8px] font-black uppercase tracking-wide text-emerald-700">
                        Free
                      </span>
                    </div>

                    <p className="mt-1 text-[10px] font-medium leading-4 text-slate-500">
                      Additional Terms &amp; Conditions Certificate
                    </p>

                    <div className="mt-1.5 flex items-center gap-1 text-[9px] font-extrabold text-violet-600">
                      Generate Document

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-3 w-3 transition-transform group-hover/atc:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m14 7 5 5-5 5" />
                      </svg>
                    </div>

                  </div>

                  {/* ARROW */}

                  <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-all duration-200 group-hover/atc:bg-violet-600 group-hover/atc:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14" />
                      <path d="m14 7 5 5-5 5" />
                    </svg>
                  </div>

                </Link>

                {/* =============================================
                    VIEW ALL TOOLS / LOAD MORE
                ============================================== */}

                <div className="mt-2 border-t border-slate-100 p-2 pt-3">

                  <Link
                    href="/tools"
                    className="group/all relative flex items-center justify-between gap-4 overflow-hidden rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 via-sky-50 to-cyan-50 px-4 py-3.5 transition-all duration-200 hover:border-blue-200 hover:shadow-[0_8px_22px_rgba(37,99,235,0.10)]"
                  >

                    {/* BACKGROUND GRAPHIC */}

                    <div className="pointer-events-none absolute -right-5 -top-8 h-20 w-20 rounded-full border-[12px] border-blue-600/[0.04]" />

                    <div className="relative flex items-center gap-3">

                      {/* GRID ICON */}

                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_7px_16px_rgba(37,99,235,0.22)]">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect x="3" y="3" width="7" height="7" rx="1" />
                          <rect x="14" y="3" width="7" height="7" rx="1" />
                          <rect x="3" y="14" width="7" height="7" rx="1" />
                          <rect x="14" y="14" width="7" height="7" rx="1" />
                        </svg>

                      </span>

                      <span className="flex flex-col">

                        <span className="text-[12px] font-black text-slate-900 transition group-hover/all:text-blue-700">
                          View All Tools
                        </span>

                        <span className="mt-0.5 text-[9px] font-medium text-slate-500">
                          Explore all BidAxis tender utilities
                        </span>

                      </span>

                    </div>

                    {/* RIGHT SIDE */}

                    <span className="relative flex items-center gap-2">

                      <span className="rounded-full border border-blue-100 bg-white px-2 py-1 text-[8px] font-black uppercase tracking-wide text-blue-600">
                        More Tools
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-[0_5px_12px_rgba(37,99,235,0.22)] transition-transform duration-200 group-hover/all:translate-x-1">

                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m14 7 5 5-5 5" />
                        </svg>

                      </span>

                    </span>

                  </Link>

                </div>

                {/* =============================================
                    DROPDOWN FOOTER
                ============================================== */}

                <div className="flex items-center justify-center gap-2 px-3 pb-2 pt-1 text-[8px] font-semibold text-slate-400">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 text-emerald-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>

                  Tender document utilities by BidAxis

                </div>

              </div>
            </div>
          </li>

          {/* =================================================
              CONTACT
          ================================================== */}

          <li>
            <Link
              href="/contact"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              Contact
            </Link>
          </li>

          {/* =================================================
              PROFILE
          ================================================== */}

          <li>
            <Link
              href="/profile"
              className="font-medium text-slate-800 transition hover:text-blue-700"
            >
              Profile
            </Link>
          </li>

        </ul>

        {/* =====================================================
            LOGIN
        ====================================================== */}

        <Link
          href="/login"
          className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-800 hover:shadow-md"
        >
          Login
        </Link>

      </nav>
    </header>
  );
}