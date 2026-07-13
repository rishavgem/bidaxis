export default function Stats() {
  const stats = [
    {
      number: "1000+",
      title: "Happy Clients",
      description: "Businesses trust BidAxis for GeM and tender consultancy.",
    },
    {
      number: "5000+",
      title: "Tenders Supported",
      description: "Successfully assisted in government tender participation.",
    },
    {
      number: "95%",
      title: "Success Rate",
      description: "High client satisfaction with our expert consultancy.",
    },
    {
      number: "24×7",
      title: "Support",
      description: "Dedicated assistance whenever you need us.",
    },
  ];

  return (
    <section className="bg-blue-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Our Achievements
          </h2>

          <p className="mt-4 text-blue-200">
            Numbers that reflect our commitment to helping businesses succeed.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/10 p-8 text-center backdrop-blur transition hover:-translate-y-2 hover:bg-white/20"
            >
              <h3 className="text-5xl font-bold text-yellow-300">
                {item.number}
              </h3>

              <h4 className="mt-4 text-2xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-3 text-blue-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}