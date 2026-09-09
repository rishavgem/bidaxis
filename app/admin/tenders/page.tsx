"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Tender = {
  id: string;
  tenderId: string;
  title: string;
  department: string;
  category: string;
  location: string;
  closingDate: string;
  estimatedValue?: string;
};

export default function AdminTendersPage() {
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTenders();
  }, []);

  async function fetchTenders() {
    try {
      const res = await fetch("/api/admin/tenders");

      if (!res.ok) {
        throw new Error("Unable to fetch tenders");
      }

      const data = await res.json();
      setTenders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this tender?")) return;

    try {
      const res = await fetch(`/api/admin/tenders/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      setTenders((prev) => prev.filter((tender) => tender.id !== id));

      alert("Tender deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  if (loading) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Loading Tenders...
        </h1>
      </main>
    );
  }

  return (
    <main>

      <div className="mb-8 flex items-center justify-between">

        <h1 className="text-4xl font-bold">
          Tender Management
        </h1>

        <Link
          href="/admin/tenders/new"
          className="rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
        >
          + Add Tender
        </Link>

      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">Tender ID</th>

              <th className="px-6 py-4 text-left">Title</th>

              <th className="px-6 py-4 text-left">Department</th>

              <th className="px-6 py-4 text-left">Category</th>

              <th className="px-6 py-4 text-left">Location</th>

              <th className="px-6 py-4 text-left">Closing</th>

              <th className="px-6 py-4 text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {tenders.map((tender) => (

              <tr
                key={tender.id}
                className="border-t"
              >

                <td className="px-6 py-4">
                  {tender.tenderId}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {tender.title}
                </td>

                <td className="px-6 py-4">
                  {tender.department}
                </td>

                <td className="px-6 py-4">
                  {tender.category}
                </td>

                <td className="px-6 py-4">
                  {tender.location}
                </td>

                <td className="px-6 py-4">
                  {new Date(tender.closingDate).toLocaleDateString()}
                </td>

                <td className="px-6 py-4">

                  <div className="flex justify-center gap-3">

                    <Link
                      href={`/admin/tenders/${tender.id}`}
                      className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black hover:bg-yellow-500"
                    >
                      ✏️ Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(tender.id)}
                      className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </main>
  );
}