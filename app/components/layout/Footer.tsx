import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#040d1f] text-white">
      {/* =====================================================
          BACKGROUND GRAPHICS
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Glows */}
        <div className="absolute -left-[220px] -top-[280px] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute -right-[220px] bottom-[-300px] h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Decorative circles */}
        <div className="absolute right-[8%] top-[15%] hidden h-[230px] w-[230px] rounded-full border border-white/[0.03] lg:block" />

        <div className="absolute right-[11%] top-[24%] hidden h-[130px] w-[130px] rounded-full border border-white/[0.04] lg:block" />
      </div>

      {/* =====================================================
          TOP CTA STRIP
      ===================================================== */}

      <div className="relative border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1240px] px-6 py-10">
          <div className="relative overflow-hidden rounded-[25px] border border-white/10 bg-gradient-to-r from-[#0b3473] via-[#155EEF] to-[#0878e8] px-6 py-7 shadow-[0_20px_60px_rgba(0,0,0,.18)] sm:px-8 lg:flex lg:items-center lg:justify-between lg:px-10">
            {/* CTA graphics */}

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,.8) 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="absolute -right-[100px] -top-[150px] h-[350px] w-[350px] rounded-full bg-cyan-300/25 blur-[80px]" />

            <div className="relative max-w-[680px]">
              <div className="text-[8px] font-black uppercase tracking-[0.18em] text-cyan-200">
                Government Procurement Support
              </div>

              <h2 className="mt-3 text-[24px] font-black tracking-[-0.035em] text-white sm:text-[28px]">
                Ready to explore your next tender opportunity?
              </h2>

              <p className="mt-2 text-[10px] leading-5 text-blue-100/75 sm:text-[11px]">
                Connect with BidAxis for tender discovery, GeM assistance,
                documentation and procurement support.
              </p>
            </div>

            <div className="relative mt-6 flex flex-wrap gap-3 lg:mt-0">
              <Link
                href="/tenders"
                className="group inline-flex h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-5 text-[10px] font-black text-[#0b4aa2] shadow-lg transition duration-300 hover:-translate-y-1"
              >
                Explore Tenders
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex h-[48px] items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 text-[10px] font-black text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1240px] px-6 pb-12 pt-12 lg:pb-14 lg:pt-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.9fr_1.25fr] lg:gap-12">
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {/* Logo icon */}

              <div className="relative flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-[#155EEF] to-[#05a6e8] shadow-[0_12px_30px_rgba(21,94,239,.25)]">
                <span className="relative text-[18px] font-black text-white">
                  B
                </span>

                <div className="absolute -bottom-3 -right-3 h-7 w-7 rounded-full bg-cyan-300/30 blur-md" />
              </div>

              <div>
                <div className="text-[24px] font-black tracking-[-0.04em] text-white">
                  Bid<span className="text-[#4ba3ff]">Axis</span>
                </div>

                <div className="mt-0.5 text-[7px] font-black uppercase tracking-[0.18em] text-blue-300/60">
                  Government Opportunities
                </div>
              </div>
            </Link>

            <p className="mt-6 max-w-[330px] text-[11px] leading-6 text-slate-400">
              Helping businesses discover government procurement opportunities
              and access professional assistance for GeM, tenders and bid
              participation.
            </p>

            {/* Trust chips */}

            <div className="mt-6 flex flex-wrap gap-2">
              <FooterBadge>GeM Assistance</FooterBadge>
              <FooterBadge>Tender Support</FooterBadge>
              <FooterBadge>Bid Assistance</FooterBadge>
            </div>

            {/* Support status */}

            <div className="mt-7 inline-flex items-center gap-3 rounded-[13px] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-green-400" />
              </span>

              <div>
                <div className="text-[7px] font-black uppercase tracking-[0.14em] text-slate-500">
                  Business Enquiries
                </div>

                <div className="mt-0.5 text-[9px] font-bold text-slate-300">
                  Sales team available
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <FooterHeading>Quick Links</FooterHeading>

            <nav className="mt-6 space-y-4">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About BidAxis</FooterLink>
              <FooterLink href="/tenders">Explore Tenders</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <FooterHeading>Services</FooterHeading>

            <nav className="mt-6 space-y-4">
              <FooterLink href="/services">GeM Services</FooterLink>
              <FooterLink href="/services">Tender Consultancy</FooterLink>
              <FooterLink href="/services">Bid Assistance</FooterLink>
              <FooterLink href="/services">Documentation Support</FooterLink>
              <FooterLink href="/services">Reverse Auction Support</FooterLink>
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <FooterHeading>Contact BidAxis</FooterHeading>

            <div className="mt-6 space-y-3">
              {/* PHONE 1 */}

              <ContactRow
                icon={<PhoneIcon />}
                label="Sales"
                value="+91 88825 37520"
                href="tel:+918882537520"
              />

              {/* PHONE 2 */}

              <ContactRow
                icon={<PhoneIcon />}
                label="Alternate"
                value="+91 78883 71643"
                href="tel:+917888371643"
              />

              {/* EMAIL */}

              <ContactRow
                icon={<MailIcon />}
                label="Email"
                value="sales@bidaxis.in"
                href="mailto:sales@bidaxis.in"
              />
            </div>

            {/* Office locations */}

            <div className="mt-6">
              <div className="mb-3 text-[7px] font-black uppercase tracking-[0.16em] text-blue-300/60">
                Office Locations
              </div>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <OfficeLocation
                  city="New Delhi"
                  state="Delhi"
                  code="DEL"
                />

                <OfficeLocation
                  city="Abohar"
                  state="Punjab"
                  code="PB"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}

      <div className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[9px] font-semibold text-slate-500">
            © {currentYear}{" "}
            <span className="font-black text-slate-300">BidAxis</span>. All
            rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="text-[8px] font-bold text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-[8px] font-bold text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="text-[8px] font-bold text-slate-500 transition hover:text-white"
            >
              Refund Policy
            </Link>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2 text-[8px] font-bold text-slate-500">
              <ShieldIcon />
              Secure & Confidential
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   FOOTER HEADING
============================================================ */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[12px] font-black text-white">{children}</h3>

      <div className="mt-2 flex items-center gap-1">
        <span className="h-[2px] w-6 rounded-full bg-[#155EEF]" />
        <span className="h-[2px] w-2 rounded-full bg-cyan-400" />
      </div>
    </div>
  );
}

/* ============================================================
   FOOTER LINK
============================================================ */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[10px] font-semibold text-slate-400 transition hover:translate-x-1 hover:text-white"
      >
        <span className="h-1 w-1 rounded-full bg-blue-500 opacity-50 transition group-hover:bg-cyan-300 group-hover:opacity-100" />

        {children}
      </Link>
    </div>
  );
}

/* ============================================================
   FOOTER BADGE
============================================================ */

function FooterBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[7px] font-black text-blue-200/70">
      {children}
    </span>
  );
}

/* ============================================================
   CONTACT ROW
============================================================ */

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-[13px] border border-white/[0.07] bg-white/[0.035] px-3.5 py-3 transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.07]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[7px] font-black uppercase tracking-[0.12em] text-slate-500">
          {label}
        </div>

        <div className="mt-1 truncate text-[9px] font-black text-slate-300 transition group-hover:text-white">
          {value}
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   OFFICE LOCATION
============================================================ */

function OfficeLocation({
  city,
  state,
  code,
}: {
  city: string;
  state: string;
  code: string;
}) {
  return (
    <div className="group rounded-[13px] border border-white/[0.07] bg-white/[0.035] p-3 transition hover:bg-white/[0.07]">
      <div className="flex items-center justify-between">
        <div className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-blue-500/10 text-blue-300">
          <LocationIcon />
        </div>

        <span className="rounded-full bg-white/[0.06] px-2 py-1 text-[6px] font-black uppercase tracking-[0.12em] text-slate-500">
          {code}
        </span>
      </div>

      <div className="mt-3 text-[9px] font-black text-slate-200">{city}</div>

      <div className="mt-1 text-[7px] font-semibold text-slate-500">
        {state}, India
      </div>
    </div>
  );
}

/* ============================================================
   ICONS
============================================================ */

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}