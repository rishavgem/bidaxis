export default function VendorAssessmentPage() {
  const services = [
    "Vendor Profile Evaluation",
    "Compliance Verification",
    "Documentation Review",
    "Capability Assessment",
    "Quality Requirement Analysis",
    "Procurement Readiness Support",
  ];

  const process = [
    "Information Collection",
    "Document Verification",
    "Assessment Review",
    "Final Recommendations",
  ];

  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Vendor Assessment Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Professional vendor evaluation and compliance support to help
            businesses become procurement-ready.
          </p>

        </div>
      </section>


      {/* Main Section */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Strengthen Your Business Profile
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Government and corporate procurement often require vendors to
              meet strict eligibility and compliance standards.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BidAxis helps businesses evaluate their readiness and improve
              their documentation before participating in opportunities.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-2xl font-bold">
              Our Assessment Support
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">

              {services.map((service) => (
                <li key={service}>
                  ✔ {service}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>


      {/* Process */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Assessment Process
          </h2>


          <div className="mt-12 grid gap-8 md:grid-cols-4">

            {process.map((step, index) => (

              <div
                key={step}
                className="rounded-2xl bg-blue-50 p-6 text-center"
              >

                <div className="text-3xl font-bold text-blue-700">
                  {index + 1}
                </div>

                <p className="mt-4 font-semibold">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-blue-900 py-16 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold">
            Prepare Your Business For Opportunities
          </h2>

          <p className="mt-5 text-blue-100">
            Get professional vendor assessment support from BidAxis.
          </p>


          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black">
            Contact BidAxis
          </button>

        </div>

      </section>

    </main>
  );
}