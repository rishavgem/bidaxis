export default function GeMPage() {
  return (
    <main>

      <h1 className="mb-8 text-4xl font-bold">
        GeM Integration
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Connection
          </h2>

          <p className="mt-4 text-gray-600">
            Status
          </p>

          <p className="mt-2 text-xl font-semibold text-red-600">
            Not Connected
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Last Import
          </h2>

          <p className="mt-4 text-gray-600">
            Never
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="text-2xl font-bold">
            Imported Tenders
          </h2>

          <p className="mt-4 text-3xl font-bold">
            0
          </p>

        </div>

      </div>

      <div className="mt-10 rounded-2xl bg-white p-8 shadow">

        <h2 className="text-2xl font-bold">
          GeM Actions
        </h2>

        <div className="mt-6 flex gap-4">

          <button
            className="rounded-xl bg-blue-700 px-6 py-3 text-white"
          >
            Connect GeM
          </button>

          <button
            className="rounded-xl bg-green-700 px-6 py-3 text-white"
          >
            Import Tenders
          </button>

        </div>

      </div>

    </main>
  );
}