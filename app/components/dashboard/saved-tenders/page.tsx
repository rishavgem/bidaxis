export default function SavedTendersPage() {

  const savedTenders = [
    {
      id: "GEM/2026/B/1001",
      title: "Railway Equipment Supply",
      department: "Indian Railways",
      category: "Supply",
      closing: "25 Jul 2026",
      priority: "High",
    },
    {
      id: "GEM/2026/B/1002",
      title: "Civil Construction Project",
      department: "CPWD",
      category: "Construction",
      closing: "28 Jul 2026",
      priority: "Medium",
    },
    {
      id: "GEM/2026/B/1003",
      title: "IT Hardware Procurement",
      department: "Government Agency",
      category: "IT",
      closing: "30 Jul 2026",
      priority: "High",
    },
  ];


  return (
    <main className="min-h-screen bg-slate-50">


      {/* Header */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-4xl font-bold">
            Saved Tenders
          </h1>

          <p className="mt-3 text-blue-100">
            Manage your shortlisted government opportunities.
          </p>

        </div>

      </section>



      {/* Saved List */}

      <section className="mx-auto max-w-7xl px-6 py-12">


        <div className="grid gap-6 md:grid-cols-3">


          {savedTenders.map((tender)=>(

            <div
              key={tender.id}
              className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1"
            >


              <div className="flex justify-between">


                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {tender.category}
                </span>


                <span
                  className={
                    tender.priority === "High"
                    ? "text-red-600 font-semibold"
                    : "text-yellow-600 font-semibold"
                  }
                >
                  {tender.priority}
                </span>


              </div>



              <h2 className="mt-5 text-xl font-bold">
                {tender.title}
              </h2>


              <div className="mt-4 space-y-2 text-slate-600">

                <p>
                  📄 {tender.id}
                </p>


                <p>
                  🏢 {tender.department}
                </p>


                <p className="font-semibold text-red-600">
                  Closing: {tender.closing}
                </p>


              </div>



              <div className="mt-6 flex gap-3">


                <button className="rounded-xl bg-blue-700 px-4 py-2 text-white">
                  View
                </button>


                <button className="rounded-xl border px-4 py-2">
                  Remove
                </button>


              </div>


            </div>


          ))}


        </div>



        {/* Consultancy CTA */}


        <div className="mt-12 rounded-3xl bg-blue-900 p-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            Need Help Winning These Tenders?
          </h2>


          <p className="mt-4 text-blue-100">
            Get BidAxis experts to analyze and prepare your bids.
          </p>


          <button className="mt-6 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black">
            Request Expert Support
          </button>


        </div>


      </section>


    </main>
  );
}