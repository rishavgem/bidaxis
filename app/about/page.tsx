export default function AboutPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            About BidAxis
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Empowering businesses across India to participate confidently in
            Government e-Marketplace (GeM) procurement and public sector tenders.
          </p>

        </div>
      </section>

      {/* Company */}

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Who We Are
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BidAxis is a professional consultancy dedicated to helping
              businesses register on GeM, identify suitable tenders, prepare
              compliant bid documents, participate in reverse auctions, and
              maximize opportunities in government procurement.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is to simplify government procurement so businesses
              can focus on growth while we manage the complexities of tendering.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <h3 className="text-2xl font-bold">
              Why Choose BidAxis?
            </h3>

            <ul className="mt-8 space-y-4 text-slate-600">
              <li>✔ Expert GeM Registration Support</li>
              <li>✔ Tender Opportunity Identification</li>
              <li>✔ Bid Documentation Assistance</li>
              <li>✔ Reverse Auction Guidance</li>
              <li>✔ Vendor Assessment & Compliance</li>
              <li>✔ End-to-End Tender Consultancy</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-blue-50 p-10">
            <h2 className="text-3xl font-bold text-blue-800">
              Our Mission
            </h2>

            <p className="mt-5 text-slate-700">
              To provide transparent, reliable, and professional consultancy
              that enables businesses of all sizes to succeed in government
              procurement.
            </p>
          </div>

          <div className="rounded-3xl bg-yellow-50 p-10">
            <h2 className="text-3xl font-bold text-yellow-700">
              Our Vision
            </h2>

            <p className="mt-5 text-slate-700">
              To become India's most trusted partner for GeM and government
              tender consultancy services.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}