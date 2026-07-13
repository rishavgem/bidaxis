export default function DashboardPage() {

  const stats = [
    {
      title: "Saved Tenders",
      value: "25",
    },
    {
      title: "New Matches",
      value: "12",
    },
    {
      title: "Closing Soon",
      value: "5",
    },
    {
      title: "Applications",
      value: "8",
    },
  ];


  const alerts = [
    {
      title: "Railway Equipment Supply",
      department: "Indian Railways",
      closing: "25 Jul 2026",
    },
    {
      title: "IT Hardware Procurement",
      department: "Government Agency",
      closing: "30 Jul 2026",
    },
  ];


  return (
    <main className="min-h-screen bg-slate-50">


      {/* Header */}

      <section className="bg-blue-900 py-10 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-4xl font-bold">
            Welcome to BidAxis Dashboard
          </h1>

          <p className="mt-3 text-blue-100">
            Manage your tenders, alerts and business opportunities.
          </p>

        </div>

      </section>



      <section className="mx-auto max-w-7xl px-6 py-10">


        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-4">

          {stats.map((item)=>(

            <div
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow"
            >

              <h3 className="text-slate-600">
                {item.title}
              </h3>

              <p className="mt-3 text-4xl font-bold text-blue-700">
                {item.value}
              </p>

            </div>

          ))}

        </div>



        {/* Content */}

        <div className="mt-10 grid gap-8 lg:grid-cols-3">


          {/* Alerts */}

          <div className="rounded-3xl bg-white p-8 shadow lg:col-span-2">

            <h2 className="text-2xl font-bold">
              Tender Alerts
            </h2>


            <div className="mt-6 space-y-5">


              {alerts.map((alert)=>(

                <div
                  key={alert.title}
                  className="rounded-xl border p-5"
                >

                  <h3 className="font-bold">
                    📌 {alert.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {alert.department}
                  </p>

                  <p className="mt-2 font-semibold text-red-600">
                    Closing: {alert.closing}
                  </p>


                </div>

              ))}


            </div>


          </div>



          {/* Menu */}

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Account
            </h2>


            <ul className="mt-6 space-y-4 text-blue-700">


              <li>
                Dashboard
              </li>

              <li>
                Saved Tenders
              </li>

              <li>
                Tender Alerts
              </li>

              <li>
                Profile
              </li>

              <li>
                Subscription
              </li>

              <li>
                Logout
              </li>


            </ul>


          </div>


        </div>


      </section>


    </main>
  );
}