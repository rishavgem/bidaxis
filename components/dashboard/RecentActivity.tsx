"use client";

import {
  Bookmark,
  Bell,
  FileSearch,
  User,
} from "lucide-react";

const activities = [
  {
    title: "Saved Railway Equipment Tender",
    time: "2 hours ago",
    icon: Bookmark,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "New CPWD Tender Alert",
    time: "5 hours ago",
    icon: Bell,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Viewed Defence Supply Tender",
    time: "Yesterday",
    icon: FileSearch,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Updated Company Profile",
    time: "2 days ago",
    icon: User,
    color: "bg-purple-100 text-purple-700",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border p-4 hover:bg-slate-50 transition"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`rounded-xl p-3 ${activity.color}`}
                >
                  <Icon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {activity.time}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}