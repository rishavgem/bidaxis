"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Bookmark,
  Bell,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Saved Tenders",
    href: "/dashboard/saved",
    icon: Bookmark,
  },
  {
    title: "Alerts",
    href: "/dashboard/alerts",
    icon: Bell,
  },
  {
    title: "Subscription",
    href: "/dashboard/subscription",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 bg-blue-950 text-white min-h-screen">

      <div className="border-b border-blue-800 p-6">

        <h1 className="text-3xl font-bold">
          BidAxis
        </h1>

        <p className="mt-2 text-sm text-blue-200">
          Government Tender Portal
        </p>

      </div>

      <nav className="p-5 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-700"
                  : "hover:bg-blue-800"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

      </nav>

      <div className="absolute bottom-8 w-72 px-5">

        <button className="flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 hover:bg-red-700">

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}