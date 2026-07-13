export default function ReverseAuctionPage() {
  const services = [
    "Reverse Auction Preparation",
    "Price Strategy Guidance",
    "Competition Analysis",
    "Real-Time Auction Support",
    "Bid Optimization",
    "Post Auction Assistance",
  ];

  const process = [
    "Auction Analysis",
    "Strategy Planning",
    "Live Participation",
    "Result Evaluation",
  ];

  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Reverse Auction Support Services
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            Strategic guidance and professional support to help businesses
            participate effectively in government reverse auctions.
          </p>

        </div>

      </section>


      {/* Content */}

      <section className="py-20">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          <div>

            <h2 className="text-4xl font-bold text-slate-900">
              Compete Smarter in Reverse Auctions
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Reverse auctions require proper preparation, pricing strategy,
              and quick decision-making during live bidding.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              BidAxis provides strategic support to help businesses improve
              their participation and bidding approach.
            </p>

          </div>


          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="text-2xl font-bold">
              Our Support Includes
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
            Reverse Auction Process
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
            Need Help Winning Reverse Auctions?
          </h2>

          <p className="mt-5 text-blue-100">
            Get expert guidance from BidAxis consultants.
          </p>

          <button className="mt-8 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black">
            Talk To Experts
          </button>

        </div>

      </section>


    </main>
  );
}