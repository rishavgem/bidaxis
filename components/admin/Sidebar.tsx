"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  BarChart3,
  Settings,
  RefreshCw,
  Globe,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    name: "Tenders",
    href: "/admin/tenders",
    icon: FileText,
  },
  {
  name: "GeM",
  href: "/admin/gem",
  icon: Globe,
  },
  {
    name: "Subscriptions",
    href: "/admin/subscriptions",
    icon: CreditCard,
  },
  {
    name: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
  name: "Import Center",
  href: "/admin/imports",
  icon: RefreshCw,
  },
  
  {
    name: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-blue-950 text-white min-h-screen">

      <div className="border-b border-blue-800 p-6">

        <h1 className="text-3xl font-bold">
          BidAxis
        </h1>

        <p className="text-sm text-blue-200">
          Admin Panel
        </p>

      </div>

      <nav className="mt-6 space-y-2 px-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-700"
                  : "hover:bg-blue-900"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}