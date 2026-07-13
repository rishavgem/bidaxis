"use client";

export default function Contact() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Get in Touch
            </h2>

            <p className="mt-4 text-gray-600">
              Need help with GeM registration, tender participation, reverse
              auctions, or bid consultancy? Our experts are ready to assist you.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="font-semibold text-blue-700">📞 Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700">📧 Email</h3>
                <p className="text-gray-600">info@bidaxis.in</p>
              </div>

              <div>
                <h3 className="font-semibold text-blue-700">📍 Address</h3>
                <p className="text-gray-600">
                  Your Office Address, India
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h3 className="text-2xl font-bold">
              Request a Callback
            </h3>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-lg border p-3"
              />

              <textarea
                rows={5}
                placeholder="How can we help you?"
                className="w-full rounded-lg border p-3"
              />

              <button
                className="w-full rounded-lg bg-blue-700 py-3 font-semibold text-white hover:bg-blue-800"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}