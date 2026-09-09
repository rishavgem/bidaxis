"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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

export default function TendersPage() {
  const searchParams = useSearchParams();
  const [tenders, setTenders] = useState<Tender[]>([]);
  const [loading, setLoading] = useState(false);

  const [keyword, setKeyword] = useState(
    searchParams.get("keyword") || ""
  );

  const [category, setCategory] = useState(
    searchParams.get("category") || ""
  );

  const [location, setLocation] = useState(
    searchParams.get("location") || ""
  );

  // NEW SORT STATE
  const [sortBy, setSortBy] = useState("closingDate");

  // Load Tenders
  const loadTenders = async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (keyword.trim()) params.append("keyword", keyword.trim());
      if (category) params.append("category", category);
      if (location) params.append("location", location);

      const res = await fetch(`/api/tenders?${params.toString()}`);

      if (!res.ok) {
        throw new Error("Failed to fetch tenders");
      }

      const data = await res.json();

      data.sort((a: Tender, b: Tender) => {
        switch (sortBy) {
          case "title":
            return a.title.localeCompare(b.title);

          case "department":
            return a.department.localeCompare(b.department);

          case "category":
            return a.category.localeCompare(b.category);

          case "location":
            return a.location.localeCompare(b.location);

          default:
            return (
              new Date(a.closingDate).getTime() -
              new Date(b.closingDate).getTime()
            );
        }
      });

      setTenders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Reset Filters
  const resetFilters = async () => {
    setKeyword("");
    setCategory("");
    setLocation("");
    setSortBy("closingDate");

    try {
      setLoading(true);

      const res = await fetch("/api/tenders");
      const data = await res.json();

      setTenders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTenders();
  }, [keyword, category, location]);

  // Save Tender
  const handleSave = async (tenderId: string) => {
    try {
      const res = await fetch("/api/save-tender", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tenderId,
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

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

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

      {/* Search */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h2 className="text-2xl font-bold">
              Search Tenders
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-5">

              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search by title or Tender ID"
                className="rounded-xl border p-4"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border p-4"
              >
                <option value="">All Categories</option>
                <option value="Supply">Supply</option>
                <option value="Construction">Construction</option>
                <option value="IT">IT</option>
              </select>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="rounded-xl border p-4"
              >
                <option value="">All Locations</option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
              </select>

              <button
                onClick={loadTenders}
                className="rounded-xl bg-blue-700 text-white hover:bg-blue-800"
              >
                Search
              </button>

              <button
                onClick={resetFilters}
                className="rounded-xl border border-red-500 text-red-600 hover:bg-red-50"
              >
                Reset
              </button>

            </div>

            {/* Sort */}

            <div className="mt-6 flex justify-end">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-xl border p-3"
              >
                <option value="closingDate">Sort: Closing Date</option>
                <option value="title">Sort: Title</option>
                <option value="department">Sort: Department</option>
                <option value="category">Sort: Category</option>
                <option value="location">Sort: Location</option>
              </select>

            </div>

          </div>

          {/* Results */}

          <div className="mt-10 flex items-center justify-between">

            <h2 className="text-3xl font-bold">
              Available Tenders
            </h2>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Showing {tenders.length} Tender{tenders.length !== 1 ? "s" : ""}
            </span>

          </div>

                    {/* Loading */}

          {loading ? (

            <div className="py-20 text-center">

              <h2 className="text-2xl font-bold">
                Loading Tenders...
              </h2>

            </div>

          ) : tenders.length === 0 ? (

            <div className="mt-10 rounded-3xl bg-white p-12 text-center shadow-lg">

              <h2 className="text-2xl font-bold">
                No Tenders Found
              </h2>

              <p className="mt-3 text-slate-600">
                Try changing your search filters or click Reset Filters.
              </p>

              <button
                onClick={resetFilters}
                className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
              >
                Reset Filters
              </button>

            </div>

          ) : (

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              {tenders.map((tender) => (

                <div
                  key={tender.id}
                  className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    {tender.category}
                  </span>

                  <h3 className="mt-5 text-xl font-bold">
                    {tender.title}
                  </h3>

                  <div className="mt-4 space-y-3 text-slate-600">

                    <p>
                      📄 <span className="font-medium">{tender.tenderId}</span>
                    </p>

                    <p>
                      🏢 {tender.department}
                    </p>

                    <p>
                      📍 {tender.location}
                    </p>

                    <p className="font-semibold text-red-600">
                      Closing:{" "}
                      {new Date(tender.closingDate).toLocaleDateString()}
                    </p>

                    {tender.estimatedValue && (
                      <p className="font-semibold text-green-700">
                        💰 {tender.estimatedValue}
                      </p>
                    )}

                  </div>

                  <div className="mt-6 flex gap-3">

                    <Link
                      href={`/tenders/${tender.id}`}
                      className="rounded-xl bg-blue-700 px-5 py-2 text-white transition hover:bg-blue-800"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleSave(tender.id)}
                      className="rounded-xl border px-5 py-2 transition hover:bg-slate-100"
                    >
                      ⭐ Save
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

          {/* CTA */}

          <div className="mt-16 rounded-3xl bg-blue-900 p-10 text-center text-white">

            <h2 className="text-3xl font-bold">
              Get Personalized Tender Alerts
            </h2>

            <p className="mt-4 text-blue-100">
              Login to save tenders and receive opportunities matching your business.
            </p>

            <Link
              href="/register"
              className="mt-6 inline-block rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
            >
              Create Account
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}