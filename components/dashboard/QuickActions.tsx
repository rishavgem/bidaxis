"use client";

import Link from "next/link";
import {
  FileSearch,
  Bookmark,
  Bell,
  CreditCard,
} from "lucide-react";

const actions = [
  {
    title: "Browse Tenders",
    description: "Search all government tenders",
    href: "/tenders",
    icon: FileSearch,
    color: "bg-blue-600",
  },
  {
    title: "Saved Tenders",
    description: "View your saved opportunities",
    href: "/dashboard/saved-tenders",
    icon: Bookmark,
    color: "bg-green-600",
  },
  {
    title: "Tender Alerts",
    description: "Manage email notifications",
    href: "/dashboard/alerts",
    icon: Bell,
    color: "bg-yellow-500",
  },
  {
    title: "Upgrade Plan",
    description: "Unlock premium features",
    href: "/pricing",
    icon: CreditCard,
    color: "bg-purple-600",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="flex items-center gap-4 rounded-2xl border p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`${action.color} rounded-xl p-3 text-white`}>
                <Icon size={24} />
              </div>

              <div>
                <h3 className="font-bold">
                  {action.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {action.description}
                </p>
              </div>
            </Link>
          );
        })}

      </div>

    </div>
  );
}