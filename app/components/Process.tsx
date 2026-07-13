export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Share Your Requirement",
      description:
        "Tell us about your business, products, and procurement goals.",
    },
    {
      number: "02",
      title: "Tender Analysis",
      description:
        "Our experts identify suitable tenders and analyse eligibility requirements.",
    },
    {
      number: "03",
      title: "Bid Preparation",
      description:
        "We prepare and review technical and financial bid documentation.",
    },
    {
      number: "04",
      title: "Submission Support",
      description:
        "Get complete assistance until successful bid submission.",
    },
  ];

  return (
    <section className="bg-white py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            How BidAxis Works
          </h2>

          <p className="mt-4 text-slate-600">
            A simple and transparent process to help businesses participate
            in government procurement opportunities.
          </p>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.number}
              className="rounded-3xl bg-slate-50 p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white">
                {step.number}
              </div>


              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>


              <p className="mt-4 text-slate-600">
                {step.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}