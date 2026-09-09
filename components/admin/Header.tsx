"use client";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">

      <div>
        <h1 className="text-2xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-slate-500">
          Welcome to the BidAxis Admin Panel
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <p className="font-semibold">
            Administrator
          </p>

          <p className="text-sm text-slate-500">
            admin@bidaxis.com
          </p>

        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
          A
        </div>

      </div>

    </header>
  );
}