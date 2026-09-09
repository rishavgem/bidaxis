"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivity from "@/components/dashboard/RecentActivity";
import UpcomingDeadlines from "@/components/dashboard/UpcomingDeadlines";

type DashboardData = {
  totalTenders: number;
  savedTenders: number;
  closingSoon: number;
  memberSince?: string;
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData>({
    totalTenders: 0,
    savedTenders: 0,
    closingSoon: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const res = await fetch("/api/dashboard");

        if (!res.ok) {
          throw new Error("Failed to load dashboard");
        }

        const dashboard = await res.json();
        setData(dashboard);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Loading Dashboard...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-4xl font-bold">
            BidAxis Dashboard
          </h1>

          <p className="mt-3 text-blue-100">
            Welcome back! Here's your tender overview.
          </p>

        </div>
      </section>

      {/* Statistics */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total Tenders"
            value={data.totalTenders}
            color="text-blue-700"
          />

          <StatCard
            title="Saved Tenders"
            value={data.savedTenders}
            color="text-green-700"
          />

          <StatCard
            title="Closing Soon"
            value={data.closingSoon}
            color="text-red-600"
          />

          <StatCard
            title="Member Since"
            value={
              data.memberSince
                ? new Date(data.memberSince).toLocaleDateString("en-IN", {
                    month: "short",
                    year: "numeric",
                  })
                : "-"
            }
            color="text-purple-700"
          />

        </div>

        <div className="mt-12">
          <QuickActions />
        </div>
        <div className="mt-8">
          <RecentActivity />
        </div>

        <div className="mt-8">
          <UpcomingDeadlines />
        </div>

              </section>

            </main>
          );
        }

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string | number;
  color: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <p className="text-slate-500">
        {title}
      </p>

      <h2 className={`mt-4 text-4xl font-bold ${color}`}>
        {value}
      </h2>

    </div>
  );
}