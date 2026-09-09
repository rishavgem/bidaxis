"use client";

import Link from "next/link";

type Tender = {
  id: string;
  tenderId: string;
  title: string;
  department: string;
  category: string;
  location: string;
  closingDate: string;
  estimatedValue?: string;
};

type Props = {
  tender: Tender;
  onSave: (id: string) => void;
};

export default function TenderCard({
  tender,
  onSave,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex justify-between items-center">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {tender.category}
        </span>

        <span className="font-semibold text-green-600">
          Active
        </span>

      </div>

      <h3 className="mt-5 text-xl font-bold">
        {tender.title}
      </h3>

      <div className="mt-4 space-y-2 text-slate-600">

        <p>📄 {tender.tenderId}</p>

        <p>🏢 {tender.department}</p>

        <p>📍 {tender.location}</p>

        <p className="font-semibold text-red-600">
          Closing:{" "}
          {new Date(tender.closingDate).toLocaleDateString()}
        </p>

        {tender.estimatedValue && (
          <p className="font-semibold text-green-700">
            {tender.estimatedValue}
          </p>
        )}

      </div>

      <div className="mt-6 flex gap-3">

        <Link
          href={`/tenders/${tender.id}`}
          className="rounded-xl bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        >
          View
        </Link>

        <button
          onClick={() => onSave(tender.id)}
          className="rounded-xl border px-4 py-2 hover:bg-slate-100"
        >
          ⭐ Save
        </button>

      </div>

    </div>
  );
}