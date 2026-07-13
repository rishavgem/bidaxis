const services = [
  {
    title: "GeM Registration",
    description: "Complete GeM account setup and registration."
  },
  {
    title: "Tender Participation",
    description: "End-to-end government tender submission support."
  },
  {
    title: "Vendor Assessment",
    description: "OEM and vendor assessment assistance."
  },
  {
    title: "Reverse Auction",
    description: "Professional reverse auction guidance."
  },
  {
    title: "Bid Documentation",
    description: "Preparation of all tender documents."
  },
  {
    title: "Annual Management",
    description: "Complete GeM account management."
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Our Services
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-700">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}