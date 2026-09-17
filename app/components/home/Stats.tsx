"use client";

const stats = [
  {
    value: "1000+",
    label: "Happy Clients",
    description: "Businesses supported across GeM and tender requirements.",
    icon: <UsersIcon />,
  },
  {
    value: "5000+",
    label: "Tenders Supported",
    description: "Government procurement opportunities assisted.",
    icon: <TenderIcon />,
  },
  {
    value: "95%",
    label: "Client Satisfaction",
    description: "Focused assistance through our consultancy services.",
    icon: <TargetIcon />,
  },
  {
    value: "24×7",
    label: "Support",
    description: "Assistance whenever your business needs guidance.",
    icon: <SupportIcon />,
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#071b3b] py-20 lg:py-24">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      {/* Glows */}
      <div className="absolute -left-[200px] -top-[250px] h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[130px]" />

      <div className="absolute -right-[200px] bottom-[-300px] h-[650px] w-[650px] rounded-full bg-cyan-400/20 blur-[140px]" />

      {/* Decorative orbit */}
      <div className="absolute right-[8%] top-[8%] hidden h-[220px] w-[220px] rounded-full border border-white/5 lg:block" />

      <div className="absolute right-[11%] top-[14%] hidden h-[130px] w-[130px] rounded-full border border-white/5 lg:block" />

      <div className="relative mx-auto max-w-[1240px] px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-[700px]">
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-cyan-300" />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-cyan-300">
                Our Achievements
              </span>
            </div>

            <h2 className="mt-5 text-[35px] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[48px]">
              Built Around Businesses
              <span className="block text-blue-300">
                Participating in Government Procurement.
              </span>
            </h2>

            <p className="mt-4 max-w-[620px] text-[13px] leading-6 text-blue-100/65">
              A growing ecosystem focused on tender discovery, GeM assistance,
              bid support and procurement consultancy.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.07] px-4 py-3 backdrop-blur-xl">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-60" />

              <span className="relative h-2.5 w-2.5 rounded-full bg-green-300" />
            </span>

            <div>
              <div className="text-[8px] font-black uppercase tracking-[0.14em] text-blue-200">
                BidAxis
              </div>

              <div className="text-[11px] font-black text-white">
                Procurement Support Network
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card group relative overflow-hidden rounded-[25px] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.11]"
            >
              {/* Number */}
              <div className="absolute -right-2 -top-7 text-[85px] font-black text-white/[0.025]">
                0{index + 1}
              </div>

              {/* Icon */}
              <div className="relative flex h-[48px] w-[48px] items-center justify-center rounded-[14px] border border-white/10 bg-white/10 text-cyan-300 transition duration-500 group-hover:bg-cyan-300 group-hover:text-[#071b3b]">
                {stat.icon}
              </div>

              <div className="relative mt-7">
                <div className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-[37px] font-black tracking-[-0.05em] text-transparent">
                  {stat.value}
                </div>

                <h3 className="mt-1 text-[14px] font-black text-white">
                  {stat.label}
                </h3>

                <p className="mt-3 text-[10px] leading-[1.7] text-blue-100/60">
                  {stat.description}
                </p>
              </div>

              {/* Progress */}
              <div className="relative mt-6 h-[3px] overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                  style={{
                    width:
                      index === 0
                        ? "72%"
                        : index === 1
                        ? "88%"
                        : index === 2
                        ? "95%"
                        : "100%",
                  }}
                />
              </div>

              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-cyan-300 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21a7 7 0 0 1 14 0" />
      <path d="M16 5a4 4 0 0 1 0 7" />
      <path d="M17 15a6 6 0 0 1 5 6" />
    </svg>
  );
}

function TenderIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 13a8 8 0 0 1 16 0" />
      <path d="M4 13v5h4v-6H6a2 2 0 0 0-2 1Z" />
      <path d="M20 13v5h-4v-6h2a2 2 0 0 1 2 1Z" />
      <path d="M16 18c0 2-1 3-4 3" />
    </svg>
  );
}