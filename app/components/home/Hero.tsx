export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 lg:flex-row">

        {/* Left Content */}
        <div className="lg:w-1/2">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium">
            India's Trusted GeM & Tender Consultancy
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight lg:text-6xl">
            Win More{" "}
            <span className="text-yellow-400">
              Government Tenders
            </span>
            <br />
            with BidAxis
          </h1>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            We help businesses succeed in GeM Registration, Tender
            Participation, Bid Documentation, Reverse Auctions,
            Vendor Assessment, and Complete Government Procurement
            Consultancy.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+918882537520"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              📞 Call Now
            </a>

            <button className="rounded-xl border border-white px-7 py-4 transition hover:bg-white hover:text-blue-900">
              Explore Services
            </button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                1000+
              </h3>
              <p className="text-sm text-blue-100">
                Happy Clients
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                5000+
              </h3>
              <p className="text-sm text-blue-100">
                Tenders Supported
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">
                95%
              </h3>
              <p className="text-sm text-blue-100">
                Success Rate
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Placeholder */}
        <div className="mt-16 flex h-[450px] w-full items-center justify-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur lg:mt-0 lg:ml-12 lg:w-1/2">
          <div className="text-center px-8">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-400 text-4xl">
              📑
            </div>

            <h2 className="text-4xl font-bold">
              BidAxis
            </h2>

            <p className="mt-4 text-lg text-blue-100">
              Professional GeM Registration &
              Government Tender Consultancy
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 text-left">
              <div className="rounded-xl bg-white/10 p-4">
                ✅ GeM Registration
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                ✅ Tender Bidding
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                ✅ Reverse Auction
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                ✅ Vendor Assessment
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}