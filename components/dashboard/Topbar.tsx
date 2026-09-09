"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white p-6 shadow">

      <div className="relative w-96">

        <Search
          className="absolute left-4 top-3 text-gray-400"
          size={20}
        />

        <input
          placeholder="Search..."
          className="w-full rounded-xl border py-3 pl-12 pr-4"
        />

      </div>

      <div className="flex items-center gap-6">

        <Bell className="cursor-pointer" />

        <div className="text-right">

          <h3 className="font-bold">
            Welcome
          </h3>

          <p className="text-sm text-gray-500">
            Free Plan
          </p>

        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
          S
        </div>

      </div>

    </header>
  );
}