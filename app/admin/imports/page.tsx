"use client";

export default function ImportCenterPage() {
  async function syncCPPP() {
    try {
      const res = await fetch("/api/admin/imports/cppp", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Import failed");
        return;
      }

      alert(
        `✅ Import Successful!

Imported: ${data.imported}
Updated: ${data.updated}
Total Processed: ${data.total}`
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold">
        Import Center
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* CPPP */}

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            CPPP
          </h2>

          <p className="mb-6 text-gray-600">
            Import tenders from Central Public Procurement Portal.
          </p>

          <button
            onClick={syncCPPP}
            className="rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Sync CPPP
          </button>

        </div>

        {/* GeM */}

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            GeM
          </h2>

          <p className="mb-6 text-gray-600">
            Coming Soon
          </p>

          <button
            disabled
            className="rounded-xl bg-gray-400 px-6 py-3 text-white cursor-not-allowed"
          >
            Sync GeM
          </button>

        </div>

        {/* Railways */}

        <div className="rounded-2xl bg-white p-6 shadow">

          <h2 className="mb-4 text-2xl font-bold">
            Railways
          </h2>

          <p className="mb-6 text-gray-600">
            Coming Soon
          </p>

          <button
            disabled
            className="rounded-xl bg-gray-400 px-6 py-3 text-white cursor-not-allowed"
          >
            Sync Railways
          </button>

        </div>

      </div>
    </main>
  );
}