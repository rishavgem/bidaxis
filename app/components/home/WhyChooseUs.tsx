export default function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Consultants",
      description:
        "Our experts have years of experience in government procurement and tender consultancy.",
    },
    {
      title: "End-to-End Support",
      description:
        "From GeM registration to bid submission and reverse auctions, we handle everything.",
    },
    {
      title: "High Success Rate",
      description:
        "We help businesses improve their chances of winning government tenders.",
    },
    {
      title: "Dedicated Account Manager",
      description:
        "A single point of contact for all your tender and GeM-related requirements.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose BidAxis?
          </h2>

          <p className="mt-4 text-gray-600">
            We simplify government procurement so you can focus on growing your
            business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-blue-700">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
