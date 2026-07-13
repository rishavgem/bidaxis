export default function TenderDetailPage() {

  const tender = {
    id: "GEM/2026/B/1001",
    title: "Railway Equipment Supply Tender",
    department: "Indian Railways",
    category: "Supply",
    location: "Delhi",
    closing: "25 Jul 2026",
  };


  return (
    <main className="bg-slate-50 min-h-screen">


      {/* Header */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-4xl font-bold">
            {tender.title}
          </h1>

          <p className="mt-3 text-blue-100">
            Tender ID: {tender.id}
          </p>

        </div>

      </section>



      <section className="mx-auto max-w-7xl px-6 py-12">


        <div className="grid gap-8 lg:grid-cols-3">


          {/* Main Details */}

          <div className="lg:col-span-2 space-y-8">


            <div className="rounded-3xl bg-white p-8 shadow">


              <h2 className="text-2xl font-bold">
                Tender Overview
              </h2>


              <div className="mt-6 grid gap-4 md:grid-cols-2">


                <p>
                  🏢 Department:
                  <b> {tender.department}</b>
                </p>


                <p>
                  📂 Category:
                  <b> {tender.category}</b>
                </p>


                <p>
                  📍 Location:
                  <b> {tender.location}</b>
                </p>


                <p className="text-red-600">
                  ⏳ Closing:
                  <b> {tender.closing}</b>
                </p>


              </div>


            </div>



            {/* AI Box */}


            <div className="rounded-3xl bg-gradient-to-r from-indigo-900 to-blue-700 p-8 text-white">


              <h2 className="text-2xl font-bold">
                🤖 BidAxis AI Analysis
              </h2>


              <div className="mt-6 grid gap-5 md:grid-cols-3">


                <div className="rounded-xl bg-white/10 p-5">

                  <p className="text-blue-100">
                    Match Score
                  </p>

                  <p className="mt-2 text-3xl font-bold text-yellow-400">
                    92%
                  </p>

                </div>



                <div className="rounded-xl bg-white/10 p-5">

                  <p className="text-blue-100">
                    Competition
                  </p>

                  <p className="mt-2 text-xl font-bold">
                    Medium
                  </p>

                </div>



                <div className="rounded-xl bg-white/10 p-5">

                  <p className="text-blue-100">
                    Recommendation
                  </p>

                  <p className="mt-2 font-bold">
                    Apply Quickly
                  </p>

                </div>


              </div>



              <p className="mt-6 text-blue-100">
                AI suggestion: Prepare technical documents early
                and review eligibility requirements before submission.
              </p>


            </div>



            {/* Documents */}


            <div className="rounded-3xl bg-white p-8 shadow">


              <h2 className="text-2xl font-bold">
                Tender Documents
              </h2>


              <ul className="mt-5 space-y-3 text-blue-700">


                <li>
                  📄 Notice Inviting Tender
                </li>


                <li>
                  📄 Technical Specification
                </li>


                <li>
                  📄 BOQ Document
                </li>


              </ul>


            </div>



          </div>




          {/* Sidebar */}


          <div className="rounded-3xl bg-white p-8 shadow h-fit">


            <h2 className="text-xl font-bold">
              Take Action
            </h2>


            <button className="mt-6 w-full rounded-xl bg-blue-700 py-4 text-white">
              ⭐ Save Tender
            </button>


            <button className="mt-4 w-full rounded-xl bg-yellow-400 py-4 font-semibold text-black">
              📞 Request Bid Assistance
            </button>


          </div>



        </div>


      </section>


    </main>
  );
}