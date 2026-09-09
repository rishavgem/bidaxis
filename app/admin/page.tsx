"use client";

import { useEffect, useState } from "react";
import StatCard from "@/components/admin/StatCard";

type DashboardData = {
  totalUsers: number;
  totalTenders: number;
  totalSavedTenders: number;
  totalAlerts: number;
};

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData>({
    totalUsers: 0,
    totalTenders: 0,
    totalSavedTenders: 0,
    totalAlerts: 0,
  });

  useEffect(() => {
    async function loadDashboard() {
      const res = await fetch("/api/admin/dashboard");
      const dashboard = await res.json();
      setData(dashboard);
    }

    loadDashboard();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-2 text-slate-600">
        Welcome back, Administrator.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Users"
          value={data.totalUsers}
          color="text-blue-700"
        />

        <StatCard
          title="Total Tenders"
          value={data.totalTenders}
          color="text-green-700"
        />

        <StatCard
          title="Saved Tenders"
          value={data.totalSavedTenders}
          color="text-purple-700"
        />

        <StatCard
          title="Tender Alerts"
          value={data.totalAlerts}
          color="text-red-600"
        />

      </div>
    </div>
  );
}