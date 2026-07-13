export default function GemRegistrationPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            GeM Registration Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Complete assistance for Government e-Marketplace registration,
            seller onboarding, catalogue creation, and compliance support.
          </p>

        </div>
      </section>


      {/* Content */}

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">


            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Grow Your Business with GeM
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Government e-Marketplace (GeM) provides businesses with
                opportunities to sell products and services directly to
                government buyers.
              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                BidAxis helps you complete registration, understand
                requirements, upload catalogues, and maintain compliance.
              </p>

            </div>


            <div className="rounded-3xl bg-white p-10 shadow-xl">

              <h3 className="text-2xl font-bold">
                Our GeM Services Include
              </h3>


              <ul className="mt-6 space-y-4 text-slate-600">

                <li>
                  ✔ New GeM Seller Registration
                </li>

                <li>
                  ✔ Seller Profile Setup
                </li>

                <li>
                  ✔ Product Catalogue Upload
                </li>

                <li>
                  ✔ Brand Approval Assistance
                </li>

                <li>
                  ✔ Documentation Support
                </li>

                <li>
                  ✔ Account Management Guidance
                </li>

              </ul>

            </div>


          </div>

        </div>
      </section>


      {/* Process */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Our Registration Process
          </h2>


          <div className="mt-12 grid gap-8 md:grid-cols-4">


            {[
              "Document Collection",
              "Account Creation",
              "Profile Verification",
              "Catalogue Setup",
            ].map((step, index) => (

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
            Need Help With GeM Registration?
          </h2>

          <p className="mt-5 text-blue-100">
            Connect with BidAxis experts today.
          </p>


          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black">
            Contact Us
          </button>


        </div>

      </section>


    </main>
  );
}