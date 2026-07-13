export default function TendersPage() {

  const tenders = [
    {
      id: "GEM/2026/B/1001",
      title: "Railway Equipment Supply",
      department: "Indian Railways",
      location: "Delhi",
      closing: "25 Jul 2026",
      category: "Supply",
    },
    {
      id: "GEM/2026/B/1002",
      title: "Civil Construction Work",
      department: "CPWD",
      location: "Haryana",
      closing: "28 Jul 2026",
      category: "Construction",
    },
    {
      id: "GEM/2026/B/1003",
      title: "IT Hardware Procurement",
      department: "Government Agency",
      location: "Punjab",
      closing: "30 Jul 2026",
      category: "IT",
    },
  ];


  return (
    <main className="bg-slate-50">


      {/* Header */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20 text-white">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            BidAxis Tender Dashboard
          </h1>

          <p className="mt-5 text-lg text-blue-100">
            Discover, track and manage government tender opportunities.
          </p>

        </div>

      </section>



      {/* Dashboard */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">


          {/* Filters */}

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
              Search Tenders
            </h2>


            <div className="mt-6 grid gap-4 md:grid-cols-4">


              <input
                placeholder="Keyword"
                className="rounded-xl border p-4"
              />


              <select className="rounded-xl border p-4">

                <option>
                  Category
                </option>

                <option>
                  Supply
                </option>

                <option>
                  Construction
                </option>

                <option>
                  IT
                </option>

              </select>


              <select className="rounded-xl border p-4">

                <option>
                  Location
                </option>

                <option>
                  Delhi
                </option>

                <option>
                  Haryana
                </option>

              </select>



              <button className="rounded-xl bg-blue-700 text-white">
                Search
              </button>


            </div>


          </div>



          {/* Tender Cards */}


          <div className="mt-10 grid gap-6 md:grid-cols-3">


            {tenders.map((tender)=>(

              <div
                key={tender.id}
                className="rounded-3xl bg-white p-7 shadow-lg"
              >

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {tender.category}
                </span>


                <h3 className="mt-5 text-xl font-bold">
                  {tender.title}
                </h3>


                <div className="mt-4 space-y-2 text-slate-600">

                  <p>
                    📄 {tender.id}
                  </p>

                  <p>
                    🏢 {tender.department}
                  </p>

                  <p>
                    📍 {tender.location}
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
                    Save
                  </button>


                </div>


              </div>

            ))}


          </div>



          {/* Login CTA */}


          <div className="mt-16 rounded-3xl bg-blue-900 p-10 text-center text-white">


            <h2 className="text-3xl font-bold">
              Get Personalized Tender Alerts
            </h2>


            <p className="mt-4 text-blue-100">
              Login to save tenders and receive opportunities matching your business.
            </p>


            <button className="mt-6 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black">
              Create Account
            </button>


          </div>


        </div>

      </section>


    </main>
  );
}