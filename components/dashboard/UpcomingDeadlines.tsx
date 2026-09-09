"use client";

import Link from "next/link";
import { CalendarDays } from "lucide-react";

const deadlines = [
  {
    id: "cma001",
    title: "Railway Equipment Supply",
    department: "Indian Railways",
    closing: "25 Jul 2026",
  },
  {
    id: "cma002",
    title: "Infrastructure Development",
    department: "CPWD",
    closing: "28 Jul 2026",
  },
  {
    id: "cma003",
    title: "Power Equipment Procurement",
    department: "NHPC",
    closing: "30 Jul 2026",
  },
];

export default function UpcomingDeadlines() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold">
        Upcoming Deadlines
      </h2>

      <div className="mt-6 space-y-5">
        {deadlines.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-red-100 p-3 text-red-600">
                <CalendarDays size={22} />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {item.department}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold text-red-600">
                {item.closing}
              </p>

              <Link
                href={`/tenders/${item.id}`}
                className="text-sm text-blue-700 hover:underline"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
