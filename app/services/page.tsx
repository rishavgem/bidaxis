export default function ServicesPage() {
  const services = [
    {
      title: "GeM Registration",
      description:
        "Complete assistance for Government e-Marketplace registration, seller profile creation, catalogue management, and compliance support.",
    },
    {
      title: "Tender Consultancy",
      description:
        "End-to-end support for identifying suitable tenders, analysing requirements, and preparing winning bid strategies.",
    },
    {
      title: "Bid Documentation",
      description:
        "Professional preparation and verification of technical and financial bid documents to ensure compliance.",
    },
    {
      title: "Reverse Auction Support",
      description:
        "Guidance and strategy support during reverse auctions to improve your chances of winning.",
    },
    {
      title: "Vendor Assessment",
      description:
        "Support for vendor evaluation processes, certifications, documentation, and procurement requirements.",
    },
    {
      title: "Government Procurement Advisory",
      description:
        "Complete consulting support to help businesses grow through government opportunities.",
    },
  ];

  return (
    <main className="bg-slate-50">

      {/* Header */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Complete GeM and Government Tender Consultancy Solutions
            to help businesses participate and succeed.
          </p>

        </div>
      </section>


      {/* Services Grid */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                  ✓
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <button className="mt-6 text-blue-700 font-semibold hover:text-blue-900">
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="bg-blue-900 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Ready to Grow Your Government Business?
          </h2>

          <p className="mt-5 text-blue-100">
            Let BidAxis help you identify opportunities and submit winning bids.
          </p>

          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black">
            Contact BidAxis
          </button>

        </div>
      </section>

    </main>
  );
}