import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20 text-white">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Checkout
          </h1>

          <p className="mt-4 text-blue-100">
            Upgrade to BidAxis Professional
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">

        <div className="rounded-3xl bg-white p-10 shadow-xl">

          <h2 className="text-3xl font-bold">
            Professional Plan
          </h2>

          <p className="mt-3 text-5xl font-bold text-blue-700">
            ₹999
            <span className="text-lg text-slate-500"> / month</span>
          </p>

          <div className="mt-8 space-y-4">

            <p>✅ Unlimited Tender Search</p>
            <p>✅ Unlimited Saved Tenders</p>
            <p>✅ AI Tender Recommendations</p>
            <p>✅ Tender Alerts</p>
            <p>✅ Bid Documentation Support</p>
            <p>✅ Reverse Auction Support</p>

          </div>

          <button
            className="mt-10 w-full rounded-xl bg-blue-700 py-4 text-lg font-semibold text-white hover:bg-blue-800"
          >
            Pay ₹999
          </button>

          <Link
            href="/pricing"
            className="mt-6 block text-center text-blue-700 hover:underline"
          >
            ← Back to Pricing
          </Link>

        </div>

      </section>

    </main>
  );
}