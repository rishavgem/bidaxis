"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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

export default function TenderDetailPage() {
  const params = useParams<{ id: string }>();
  const tenderId = params.id;

  const [tender, setTender] = useState<Tender | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTender() {
      try {
        const res = await fetch(`/api/tenders/${tenderId}`);

        if (!res.ok) {
          throw new Error("Tender not found");
        }

        const data = await res.json();
        setTender(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    if (tenderId) {
      loadTender();
    }
  }, [tenderId]);

  const handleSave = async () => {
    if (!tender) return;

    try {
      const res = await fetch("/api/save-tender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderId: tender.id,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Unable to save tender");
        return;
      }

      alert(data.message);
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold">
          Loading Tender...
        </h1>
      </main>
    );
  }

  if (!tender) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-red-600">
          Tender Not Found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">

          <h1 className="text-5xl font-bold">
            {tender.title}
          </h1>

          <p className="mt-3 text-lg text-blue-100">
            Government Tender Details
          </p>

        </div>
      </section>

      {/* Tender Details */}

      <section className="mx-auto max-w-5xl px-6 py-12">

        <div className="rounded-3xl bg-white p-10 shadow-lg">

          <div className="grid gap-8 md:grid-cols-2">

            <div>
              <h3 className="font-semibold text-slate-800">
                Tender ID
              </h3>
              <p className="mt-2 text-slate-600">
                {tender.tenderId}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Department
              </h3>
              <p className="mt-2 text-slate-600">
                {tender.department}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Category
              </h3>
              <p className="mt-2 text-slate-600">
                {tender.category}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Location
              </h3>
              <p className="mt-2 text-slate-600">
                {tender.location}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Closing Date
              </h3>
              <p className="mt-2 font-semibold text-red-600">
                {new Date(tender.closingDate).toLocaleDateString()}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">
                Estimated Value
              </h3>
              <p className="mt-2 font-semibold text-green-700">
                {tender.estimatedValue || "Not Available"}
              </p>
            </div>

          </div>

          {/* Action Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              onClick={handleSave}
              className="rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
            >
              ⭐ Save Tender
            </button>

            <Link
              href="/tenders"
              className="rounded-xl border border-slate-300 px-6 py-3 hover:bg-slate-100"
            >
              ← Back to Tenders
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}