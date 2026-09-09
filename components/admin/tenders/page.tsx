"use client";

import { useEffect, useState } from "react";

type Tender = {
  id: string;
  tenderId: string;
  title: string;
  department: string;
  category: string;
  location: string;
  closingDate: string;
};

export default function AdminTendersPage() {
  const [tenders, setTenders] = useState<Tender[]>([]);

  useEffect(() => {
    async function loadTenders() {
      const res = await fetch("/api/admin/tenders");
      const data = await res.json();
      setTenders(data);
    }

    loadTenders();
  }, []);

  return (
    <main>

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-4xl font-bold">
            Tender Management
          </h1>

          <p className="mt-2 text-slate-600">
            Manage all government tenders.
          </p>

        </div>

        <button className="rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">
          + Add Tender
        </button>

      </div>

      <div className="rounded-2xl bg-white shadow">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Tender ID
              </th>

              <th className="px-6 py-4 text-left">
                Title
              </th>

              <th className="px-6 py-4 text-left">
                Department
              </th>

              <th className="px-6 py-4 text-left">
                Closing
              </th>

            </tr>

          </thead>

          <tbody>

            {tenders.map((tender) => (

              <tr
                key={tender.id}
                className="border-b"
              >

                <td className="px-6 py-4">
                  {tender.tenderId}
                </td>

                <td className="px-6 py-4">
                  {tender.title}
                </td>

                <td className="px-6 py-4">
                  {tender.department}
                </td>

                <td className="px-6 py-4">
                  {new Date(tender.closingDate).toLocaleDateString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}