export default function Testimonials() {
  const testimonials = [
    {
      name: "ABC Engineering Pvt. Ltd.",
      person: "Rajesh Kumar",
      review:
        "BidAxis helped us complete our GeM registration and win our first government tender. Their team was highly professional.",
    },
    {
      name: "Sharma Enterprises",
      person: "Anita Sharma",
      review:
        "Excellent support throughout the bidding process. Documentation and submission were handled perfectly.",
    },
    {
      name: "Tech Solutions India",
      person: "Amit Verma",
      review:
        "The BidAxis team guided us through reverse auctions and tender compliance. Highly recommended.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by businesses across India for GeM and government tender consultancy.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.review}"
              </p>

              <div className="mt-6 border-t pt-4">
                <h3 className="font-bold text-blue-700">
                  {item.person}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}