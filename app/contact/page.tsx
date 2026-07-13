export default function ContactPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Contact BidAxis
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Get expert assistance for GeM registration, government tenders,
            and procurement consultancy.
          </p>

        </div>

      </section>


      {/* Contact Section */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">


          {/* Information */}

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Let's Discuss Your Requirements
            </h2>


            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our experts help businesses participate confidently in
              government procurement opportunities.
            </p>


            <div className="mt-10 space-y-6">


              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="font-bold text-blue-700">
                  Phone
                </h3>

                <p className="mt-2 text-slate-600">
                  +91 XXXXX XXXXX
                </p>

              </div>


              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="font-bold text-blue-700">
                  Email
                </h3>

                <p className="mt-2 text-slate-600">
                  info@bidaxis.com
                </p>

              </div>


              <div className="rounded-xl bg-white p-6 shadow">

                <h3 className="font-bold text-blue-700">
                  Office Hours
                </h3>

                <p className="mt-2 text-slate-600">
                  Monday - Saturday | 9:00 AM - 6:00 PM
                </p>

              </div>


            </div>


          </div>


          {/* Form */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">


            <h2 className="text-3xl font-bold">
              Send An Inquiry
            </h2>


            <form className="mt-8 space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-4"
              />


              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />


              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border p-4"
              />


              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full rounded-xl border p-4"
              />


              <button
                type="submit"
                className="w-full rounded-xl bg-blue-700 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Submit Inquiry
              </button>


            </form>


          </div>


        </div>

      </section>


      {/* CTA */}

      <section className="bg-blue-900 py-16 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">


          <h2 className="text-4xl font-bold">
            Ready To Start Your Tender Journey?
          </h2>


          <p className="mt-5 text-blue-100">
            Connect with BidAxis today.
          </p>


        </div>

      </section>


    </main>
  );
}
