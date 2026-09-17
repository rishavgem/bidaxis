"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend demo only.
    // Connect this to your API / CRM later.
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7faff] py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[300px] top-[50px] h-[650px] w-[650px] rounded-full bg-blue-100/60 blur-[160px]" />

        <div className="absolute -right-[300px] bottom-[-150px] h-[650px] w-[650px] rounded-full bg-cyan-100/50 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.28]"
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

        <div className="mx-auto max-w-[780px] text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#155EEF]">
              Contact BidAxis
            </span>

            <span className="h-[2px] w-8 rounded-full bg-[#155EEF]" />
          </div>

          <h2 className="mt-5 text-[37px] font-black leading-[1.08] tracking-[-0.045em] text-[#071630] sm:text-[44px] lg:text-[50px]">
            Have a Tender Requirement?
            <span className="block text-[#155EEF]">Talk to Our Team.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[14px] leading-7 text-slate-500">
            Connect with BidAxis for GeM assistance, tender discovery,
            documentation support and government procurement services.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTACT CARD
        ===================================================== */}

        <div className="mt-14 grid overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_30px_90px_rgba(15,23,42,.09)] lg:grid-cols-[0.82fr_1.18fr]">
          {/* =================================================
              LEFT CONTACT PANEL
          ================================================= */}

          <div className="relative overflow-hidden bg-gradient-to-br from-[#061a38] via-[#0b3473] to-[#155EEF] p-7 text-white sm:p-9 lg:p-10">
            {/* Grid */}

            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Glows */}

            <div className="absolute -right-[120px] -top-[120px] h-[360px] w-[360px] rounded-full bg-cyan-300/25 blur-[90px]" />

            <div className="absolute -bottom-[170px] -left-[100px] h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[110px]" />

            {/* Decorative rings */}

            <div className="absolute right-[35px] top-[60px] h-[170px] w-[170px] rounded-full border border-white/[0.05]" />

            <div className="absolute right-[65px] top-[90px] h-[110px] w-[110px] rounded-full border border-white/[0.06]" />

            <div className="relative">
              {/* Availability */}

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[8px] font-black uppercase tracking-[0.15em] text-blue-100 backdrop-blur-xl">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-60" />

                  <span className="relative h-2 w-2 rounded-full bg-green-300" />
                </span>

                BidAxis Sales Team
              </div>

              <h3 className="mt-7 max-w-[420px] text-[30px] font-black leading-[1.15] tracking-[-0.035em] sm:text-[34px]">
                Let&apos;s discuss your
                <span className="text-cyan-300">
                  {" "}
                  government business opportunities.
                </span>
              </h3>

              <p className="mt-4 max-w-[420px] text-[11px] leading-6 text-blue-100/65">
                Whether you need help finding tenders, managing GeM
                requirements or preparing for a bid, connect with our team to
                discuss the support you need.
              </p>

              {/* =============================================
                  CONTACT INFORMATION
              ============================================= */}

              <div className="mt-9 space-y-3">
                {/* PHONE */}

                <ContactInfoCard
                  icon={<PhoneIcon />}
                  label="Call our sales team"
                  content={
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <a
                        href="tel:+918882537520"
                        className="transition hover:text-cyan-300"
                      >
                        +91 88825 37520
                      </a>

                      <span className="text-white/25">|</span>

                      <a
                        href="tel:+917888371643"
                        className="transition hover:text-cyan-300"
                      >
                        +91 78883 71643
                      </a>
                    </div>
                  }
                />

                {/* EMAIL */}

                <ContactInfoCard
                  icon={<MailIcon />}
                  label="Sales & Enquiries"
                  content={
                    <a
                      href="mailto:sales@bidaxis.in"
                      className="transition hover:text-cyan-300"
                    >
                      sales@bidaxis.in
                    </a>
                  }
                />
              </div>

              {/* =============================================
                  OFFICE LOCATIONS
              ============================================= */}

              <div className="mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <LocationIcon />

                  <span className="text-[8px] font-black uppercase tracking-[0.16em] text-cyan-300">
                    Our Offices
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* DELHI */}

                  <OfficeCard
                    city="New Delhi"
                    state="Delhi"
                    code="DEL"
                    number="01"
                  />

                  {/* ABOHAR */}

                  <OfficeCard
                    city="Abohar"
                    state="Punjab"
                    code="PB"
                    number="02"
                  />
                </div>
              </div>

              {/* Bottom status */}

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-400/10 text-green-300">
                  <CheckIcon />
                </div>

                <div>
                  <div className="text-[8px] font-black uppercase tracking-[0.13em] text-blue-200">
                    Business Enquiries
                  </div>

                  <div className="mt-1 text-[10px] font-semibold text-white">
                    Connect with our sales team
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT CALLBACK FORM
          ================================================= */}

          <div className="relative p-7 sm:p-9 lg:p-11">
            {/* Decorative quote */}

            <div className="absolute right-8 top-4 select-none text-[110px] font-black leading-none text-blue-50">
              →
            </div>

            <div className="relative">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-[9px] font-black uppercase tracking-[0.17em] text-[#155EEF]">
                    Request a Callback
                  </div>

                  <h3 className="mt-3 text-[27px] font-black tracking-[-0.035em] text-[#071630] sm:text-[30px]">
                    Tell us how we can help.
                  </h3>

                  <p className="mt-3 max-w-[500px] text-[11px] leading-6 text-slate-500">
                    Share your details and requirement with our team.
                  </p>
                </div>

                <div className="hidden h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] bg-blue-50 text-[#155EEF] sm:flex">
                  <MessageIcon />
                </div>
              </div>

              {/* =============================================
                  FORM
              ============================================= */}

              <form onSubmit={handleSubmit} className="mt-8">
                {/* Name + Phone */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    label="Full Name"
                    icon={<UserIcon />}
                  >
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-full w-full bg-transparent text-[12px] font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
                    />
                  </FormField>

                  <FormField
                    label="Phone Number"
                    icon={<PhoneSmallIcon />}
                  >
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="h-full w-full bg-transparent text-[12px] font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
                    />
                  </FormField>
                </div>

                {/* Email */}

                <div className="mt-4">
                  <FormField
                    label="Business Email"
                    icon={<MailSmallIcon />}
                  >
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@company.com"
                      className="h-full w-full bg-transparent text-[12px] font-semibold text-slate-800 outline-none placeholder:font-normal placeholder:text-slate-400"
                    />
                  </FormField>
                </div>

                {/* Service */}

                <div className="mt-4">
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
                    I&apos;m interested in
                  </label>

                  <div className="relative">
                    <select
                      name="service"
                      defaultValue=""
                      className="h-[57px] w-full appearance-none rounded-[14px] border border-slate-200 bg-[#fafcff] px-4 pr-12 text-[12px] font-semibold text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="tender-discovery">
                        Tender Discovery
                      </option>

                      <option value="gem-services">
                        GeM Services
                      </option>

                      <option value="bid-assistance">
                        Bid Assistance
                      </option>

                      <option value="tender-documentation">
                        Tender Documentation
                      </option>

                      <option value="reverse-auction">
                        Reverse Auction Support
                      </option>

                      <option value="account-management">
                        Account Management
                      </option>

                      <option value="consultancy">
                        Tender Consultancy
                      </option>
                    </select>

                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <ChevronIcon />
                    </div>
                  </div>
                </div>

                {/* Message */}

                <div className="mt-4">
                  <label className="mb-2 block text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
                    Your Requirement
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us briefly about your tender, GeM or procurement requirement..."
                    className="w-full resize-none rounded-[14px] border border-slate-200 bg-[#fafcff] px-4 py-4 text-[12px] font-semibold leading-6 text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  className="group mt-5 flex h-[55px] w-full items-center justify-center gap-3 rounded-[14px] bg-gradient-to-r from-[#155EEF] to-[#0878e8] text-[11px] font-black text-white shadow-[0_14px_30px_rgba(21,94,239,.2)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(21,94,239,.28)]"
                >
                  Submit Your Requirement

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                {/* Privacy */}

                <div className="mt-4 flex items-center justify-center gap-2 text-center text-[8px] text-slate-400">
                  <LockIcon />
                  Your information is used only to respond to your enquiry.
                </div>

                {/* Success message */}

                {submitted && (
                  <div className="contact-success mt-4 flex items-start gap-3 rounded-[14px] border border-green-200 bg-green-50 px-4 py-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <CheckIcon />
                    </div>

                    <div>
                      <div className="text-[10px] font-black text-green-800">
                        Thank you for your enquiry.
                      </div>

                      <div className="mt-1 text-[9px] leading-5 text-green-700/70">
                        Your form is ready. Connect this component to your
                        backend/API to start receiving enquiries.
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* =====================================================
            QUICK CONTACT STRIP
        ===================================================== */}

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <QuickCard
            icon={<PhoneSmallIcon />}
            label="Call"
            value="+91 88825 37520"
            href="tel:+918882537520"
          />

          <QuickCard
            icon={<PhoneSmallIcon />}
            label="Alternate"
            value="+91 78883 71643"
            href="tel:+917888371643"
          />

          <QuickCard
            icon={<MailSmallIcon />}
            label="Email"
            value="sales@bidaxis.in"
            href="mailto:sales@bidaxis.in"
          />

          <div className="flex items-center gap-3 rounded-[17px] border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_25px_rgba(15,23,42,.04)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-blue-50 text-blue-700">
              <LocationIcon />
            </div>

            <div>
              <div className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
                Offices
              </div>

              <div className="mt-1 text-[10px] font-black text-[#071630]">
                Delhi & Punjab
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes contactSuccess {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-success {
          animation: contactSuccess .35s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-success {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ============================================================
   CONTACT INFO CARD
============================================================ */

function ContactInfoCard({
  icon,
  label,
  content,
}: {
  icon: ReactNode;
  label: string;
  content: ReactNode;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-[17px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition duration-300 hover:bg-white/[0.11]">
      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[13px] border border-white/10 bg-white/10 text-cyan-300 transition group-hover:bg-cyan-300 group-hover:text-[#071b3b]">
        {icon}
      </div>

      <div>
        <div className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-200/70">
          {label}
        </div>

        <div className="mt-1 text-[11px] font-black text-white">
          {content}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   OFFICE CARD
============================================================ */

function OfficeCard({
  city,
  state,
  code,
  number,
}: {
  city: string;
  state: string;
  code: string;
  number: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[17px] border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">
      <div className="absolute -right-1 -top-4 text-[55px] font-black text-white/[0.035]">
        {number}
      </div>

      <div className="relative flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-white/10 text-cyan-300">
          <LocationIcon />
        </div>

        <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.12em] text-blue-100">
          {code}
        </span>
      </div>

      <div className="relative mt-4">
        <div className="text-[12px] font-black text-white">{city}</div>

        <div className="mt-1 text-[9px] font-semibold text-blue-200/60">
          {state}, India
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FORM FIELD
============================================================ */

function FormField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>

      <div className="flex h-[57px] items-center gap-3 rounded-[14px] border border-slate-200 bg-[#fafcff] px-4 transition focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">
        <span className="shrink-0 text-slate-400">{icon}</span>

        {children}
      </div>
    </label>
  );
}

/* ============================================================
   QUICK CARD
============================================================ */

function QuickCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-[17px] border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_25px_rgba(15,23,42,.04)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_30px_rgba(37,99,235,.08)]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      <div className="min-w-0">
        <div className="text-[8px] font-black uppercase tracking-[0.12em] text-slate-400">
          {label}
        </div>

        <div className="mt-1 truncate text-[10px] font-black text-[#071630]">
          {value}
        </div>
      </div>
    </a>
  );
}

/* ============================================================
   ICONS
============================================================ */

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg
      width="17"
      height="17"
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
      width="20"
      height="20"
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

function MailSmallIcon() {
  return (
    <svg
      width="17"
      height="17"
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
      width="18"
      height="18"
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

function MessageIcon() {
  return (
    <svg
      width="23"
      height="23"
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

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
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

function LockIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}