export default function TenderConsultancyPage() {
  const services = [
    "Tender Identification & Shortlisting",
    "Eligibility Analysis",
    "Tender Document Review",
    "Technical Bid Preparation",
    "Financial Bid Guidance",
    "Submission Support",
  ];

  const process = [
    "Requirement Analysis",
    "Tender Selection",
    "Document Preparation",
    "Bid Submission",
  ];

  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Tender Consultancy Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            End-to-end government tender consultancy to help businesses
            identify opportunities and submit compliant bids.
          </p>

        </div>

      </section>


      {/* Introduction */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">


          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Win More Government Contracts
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Government tenders involve complex eligibility criteria,
              technical requirements, and documentation procedures.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BidAxis helps businesses analyse opportunities, prepare
              compliant bids, and improve their chances of success.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-2xl font-bold">
              Our Consultancy Includes
            </h3>

            <ul className="mt-6 space-y-4 text-slate-600">

              {services.map((item) => (

                <li key={item}>
                  ✔ {item}
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
            Our Tender Process
          </h2>


          <div className="mt-12 grid gap-8 md:grid-cols-4">


            {process.map((item, index) => (

              <div
                key={item}
                className="rounded-2xl bg-blue-50 p-6 text-center"
              >

                <div className="text-3xl font-bold text-blue-700">
                  {index + 1}
                </div>

                <p className="mt-4 font-semibold">
                  {item}
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
            Need Professional Tender Support?
          </h2>

          <p className="mt-5 text-blue-100">
            Let BidAxis help you participate confidently in government tenders.
          </p>

          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black">
            Get Consultation
          </button>

        </div>

      </section>


    </main>
  );
}