"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type SavedTender = {
  id: string;
  createdAt: string;
  tender: {
    id: string;
    tenderId: string;
    title: string;
    department: string;
    category: string;
    location: string;
    closingDate: string;
    estimatedValue?: string;
  };
};

export default function SavedTendersPage() {
  const [savedTenders, setSavedTenders] = useState<SavedTender[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSavedTenders();
  }, []);

  async function fetchSavedTenders() {
    try {
      const res = await fetch("/api/saved-tenders");

      if (!res.ok) {
        throw new Error("Failed to fetch saved tenders");
      }

      const data = await res.json();
      setSavedTenders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRemove(tenderId: string) {
    if (!confirm("Remove this tender from saved list?")) {
      return;
    }

    try {
      const res = await fetch("/api/save-tender", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      setSavedTenders((prev) =>
        prev.filter((item) => item.tender.id !== tenderId)
      );

      alert("Tender removed successfully");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          Loading Saved Tenders...
        </h1>
      </main>
    );
  }

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

      <section className="mx-auto max-w-7xl px-6 py-12">

        {savedTenders.length === 0 ? (

          <div className="rounded-3xl bg-white p-10 text-center shadow">

            <h2 className="text-2xl font-bold">
              No Saved Tenders
            </h2>

            <p className="mt-3 text-slate-600">
              You haven't saved any tenders yet.
            </p>

            <Link
              href="/tenders"
              className="mt-6 inline-block rounded-xl bg-blue-700 px-6 py-3 text-white"
            >
              Browse Tenders
            </Link>

          </div>

        ) : (

          <div className="grid gap-6 md:grid-cols-3">

            {savedTenders.map((item) => (

              <div
                key={item.id}
                className="rounded-3xl bg-white p-7 shadow-lg hover:-translate-y-1 transition"
              >

                <div className="flex justify-between">

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {item.tender.category}
                  </span>

                  <span className="font-semibold text-green-600">
                    Saved
                  </span>

                </div>

                <h2 className="mt-5 text-xl font-bold">
                  {item.tender.title}
                </h2>

                <div className="mt-4 space-y-2 text-slate-600">

                  <p>
                    📄 {item.tender.tenderId}
                  </p>

                  <p>
                    🏢 {item.tender.department}
                  </p>

                  <p>
                    📍 {item.tender.location}
                  </p>

                  <p className="font-semibold text-red-600">
                    Closing:{" "}
                    {new Date(
                      item.tender.closingDate
                    ).toLocaleDateString()}
                  </p>

                  {item.tender.estimatedValue && (
                    <p className="font-semibold text-green-700">
                      {item.tender.estimatedValue}
                    </p>
                  )}

                </div>

                <div className="mt-6 flex gap-3">

                  <Link
                    href={`/tenders/${item.tender.id}`}
                    className="rounded-xl bg-blue-700 px-4 py-2 text-white"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleRemove(item.tender.id)}
                    className="rounded-xl border border-red-500 px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

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