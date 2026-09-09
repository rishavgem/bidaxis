"use client";

import { useEffect, useState } from "react";

type Alert = {
  id: string;
  keyword: string | null;
  category: string | null;
  department: string | null;
  location: string | null;
  emailEnabled: boolean;
};

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchAlerts();
  }, []);

  async function fetchAlerts() {
    try {
      const res = await fetch("/api/alerts");

      if (!res.ok) return;

      const data = await res.json();
      setAlerts(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function saveAlert() {
    const res = await fetch("/api/alerts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        category,
        department,
        location,
        emailEnabled: true,
      }),
    });

    if (res.ok) {
      setKeyword("");
      setCategory("");
      setDepartment("");
      setLocation("");

      fetchAlerts();
    }
  }

  return (
    <main className="min-h-screen bg-slate-100">

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">

        <div className="mx-auto max-w-6xl px-6">

          <h1 className="text-4xl font-bold">
            Tender Alerts
          </h1>

          <p className="mt-3 text-blue-100">
            Receive notifications for matching tenders.
          </p>

        </div>

      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Create Alert
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Keyword"
              className="rounded-xl border p-4"
            />

            <input
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="Department"
              className="rounded-xl border p-4"
            />

            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="rounded-xl border p-4"
            />

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="rounded-xl border p-4"
            />

          </div>

          <button
            onClick={saveAlert}
            className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Save Alert
          </button>

        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Your Alerts
          </h2>

          {alerts.length === 0 ? (

            <p className="mt-6 text-slate-600">
              No alerts created yet.
            </p>

          ) : (

            <div className="mt-6 space-y-4">

              {alerts.map((alert) => (

                <div
                  key={alert.id}
                  className="rounded-2xl border p-5"
                >

                  <h3 className="font-semibold">
                    {alert.keyword || "Any Keyword"}
                  </h3>

                  <p className="text-slate-600">
                    {alert.category || "All Categories"}
                  </p>

                  <p className="text-slate-600">
                    {alert.department || "All Departments"}
                  </p>

                  <p className="text-slate-600">
                    {alert.location || "All Locations"}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      </section>

    </main>
  );
}