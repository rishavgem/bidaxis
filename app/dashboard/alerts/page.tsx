export default function AlertsPage() {

  const alerts = [
    {
      title: "Railway Equipment Supply Tender",
      department: "Indian Railways",
      match: "96%",
      status: "New",
      closing: "25 Jul 2026",
    },
    {
      title: "IT Hardware Procurement",
      department: "Government Agency",
      match: "91%",
      status: "Recommended",
      closing: "30 Jul 2026",
    },
    {
      title: "Civil Construction Contract",
      department: "CPWD",
      match: "87%",
      status: "Closing Soon",
      closing: "02 Aug 2026",
    },
  ];


  return (

    <main className="min-h-screen bg-slate-50">


      {/* Header */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-4xl font-bold">
            🔔 Tender Alert Center
          </h1>

          <p className="mt-3 text-blue-100">
            AI powered tender recommendations based on your business profile.
          </p>

        </div>

      </section>



      <section className="mx-auto max-w-7xl px-6 py-12">


        {/* Alert Stats */}

        <div className="grid gap-6 md:grid-cols-3">


          <div className="rounded-3xl bg-white p-6 shadow">

            <p className="text-slate-600">
              New Matches
            </p>

            <h2 className="mt-3 text-4xl font-bold text-blue-700">
              12
            </h2>

          </div>



          <div className="rounded-3xl bg-white p-6 shadow">

            <p className="text-slate-600">
              High Priority
            </p>

            <h2 className="mt-3 text-4xl font-bold text-red-600">
              5
            </h2>

          </div>



          <div className="rounded-3xl bg-white p-6 shadow">

            <p className="text-slate-600">
              Closing This Week
            </p>

            <h2 className="mt-3 text-4xl font-bold text-yellow-600">
              8
            </h2>

          </div>


        </div>




        {/* Alerts List */}


        <div className="mt-10 space-y-6">


          {alerts.map((alert)=>(


            <div
              key={alert.title}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >


              <div className="flex flex-col justify-between gap-4 md:flex-row">


                <div>


                  <div className="flex gap-3">


                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                      {alert.status}
                    </span>


                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      AI Match {alert.match}
                    </span>


                  </div>



                  <h2 className="mt-5 text-2xl font-bold">
                    {alert.title}
                  </h2>


                  <p className="mt-2 text-slate-600">
                    🏢 {alert.department}
                  </p>


                  <p className="mt-2 font-semibold text-red-600">
                    ⏳ Closing Date: {alert.closing}
                  </p>


                </div>




                <div className="flex items-center">


                  <button className="rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">
                    View Tender
                  </button>


                </div>


              </div>


            </div>


          ))}


        </div>




        {/* Premium CTA */}


        <div className="mt-12 rounded-3xl bg-blue-900 p-10 text-center text-white">


          <h2 className="text-3xl font-bold">
            Get Instant Tender Notifications
          </h2>


          <p className="mt-4 text-blue-100">
            Upgrade your account for WhatsApp and Email tender alerts.
          </p>


          <button className="mt-6 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black">
            Upgrade Plan
          </button>


        </div>


      </section>


    </main>

  );
}