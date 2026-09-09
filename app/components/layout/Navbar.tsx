import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href="/"
          className="text-2xl font-bold text-blue-700"
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
              className="transition hover:text-blue-700"
            >
              Home
            </Link>
          </li>


          {/* =================================================
              SERVICES DROPDOWN
          ================================================== */}

          <li className="group relative">

            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-blue-700"
            >
              Services

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>


            {/* DROPDOWN */}

            <div
              className="
                invisible
                absolute
                left-0
                top-full
                z-50
                w-72
                pt-4
                opacity-0
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
              "
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_55px_rgba(15,23,42,0.14)]">

                <Link
                  href="/services/gem-registration"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  GeM Registration
                </Link>

                <Link
                  href="/services/tender-consultancy"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Tender Consultancy
                </Link>

                <Link
                  href="/services/bid-documentation"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Bid Documentation
                </Link>

                <Link
                  href="/services/reverse-auction"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Reverse Auction
                </Link>

                <Link
                  href="/services/vendor-assessment"
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  Vendor Assessment
                </Link>

              </div>
            </div>

          </li>


          {/* =================================================
              ABOUT
          ================================================== */}

          <li>
            <Link
              href="/about"
              className="transition hover:text-blue-700"
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
              className="transition hover:text-blue-700"
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
              className="transition hover:text-blue-700"
            >
              Pricing
            </Link>
          </li>


          {/* =================================================
              TOOLS DROPDOWN
          ================================================== */}

          <li className="group relative">

            <button
              type="button"
              className="flex items-center gap-1 transition hover:text-blue-700"
            >
              Tools

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>

            </button>


            {/* TOOLS DROPDOWN */}

            <div
              className="
                invisible
                absolute
                left-1/2
                top-full
                z-50
                w-[370px]
                -translate-x-1/2
                pt-4
                opacity-0
                transition-all
                duration-200
                group-hover:visible
                group-hover:opacity-100
              "
            >

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(15,23,42,0.15)]">

                {/* TOOLS HEADER */}

                <div className="px-3 pb-2 pt-2">

                  <div className="flex items-center justify-between">

                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      BidAxis Tools
                    </p>

                    <span className="rounded-full bg-blue-50 px-2 py-1 text-[9px] font-extrabold uppercase tracking-wide text-blue-600">
                      Tender Utilities
                    </span>

                  </div>

                </div>


                {/* =================================================
                    MII CERTIFICATE GENERATOR
                ================================================== */}

                <Link
                  href="/tools/mii-certificate"
                  className="group/tool flex items-start gap-3 rounded-xl p-3 transition hover:bg-blue-50"
                >

                  {/* ICON */}

                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover/tool:bg-blue-600 group-hover/tool:text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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

                      <p className="text-sm font-bold text-slate-900 transition group-hover/tool:text-blue-700">
                        MII Certificate Generator
                      </p>

                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-700">
                        Free
                      </span>

                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Generate a Make in India local content
                      certificate for GeM and tender submissions.
                    </p>

                  </div>

                </Link>


                {/* =================================================
                    ATC CERTIFICATE GENERATOR
                ================================================== */}

                <Link
                  href="/tools/atc-certificate"
                  className="group/tool flex items-start gap-3 rounded-xl p-3 transition hover:bg-violet-50"
                >

                  {/* ICON */}

                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition group-hover/tool:bg-violet-600 group-hover/tool:text-white">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
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

                      <p className="text-sm font-bold text-slate-900 transition group-hover/tool:text-violet-700">
                        ATC Certificate Generator
                      </p>

                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-700">
                        Free
                      </span>

                    </div>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Generate an Acceptance of Terms & Conditions
                      certificate for tender submissions.
                    </p>

                  </div>

                </Link>


                {/* =================================================
                    MORE TOOLS MESSAGE
                ================================================== */}

                <div className="mt-1 border-t border-slate-100 px-3 py-3">

                  <div className="flex items-center gap-2">

                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-slate-100 text-slate-400">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-3.5 w-3.5"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>

                    </span>

                    <div>

                      <p className="text-[11px] font-semibold text-slate-500">
                        More document tools coming soon
                      </p>

                      <p className="mt-0.5 text-[10px] text-slate-400">
                        Built to simplify tender participation
                      </p>

                    </div>

                  </div>

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
              className="transition hover:text-blue-700"
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
              className="transition hover:text-blue-700"
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
          className="rounded-lg bg-blue-700 px-5 py-2 font-semibold text-white transition hover:bg-blue-800"
        >
          Login
        </Link>

      </nav>
    </header>
  );
}