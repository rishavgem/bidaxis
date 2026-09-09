"use client";

import TenderCard from "./TenderCard";

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
  tenders: Tender[];
  onSave: (id: string) => void;
};

export default function TenderList({
  tenders,
  onSave,
}: Props) {
  if (tenders.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow">
        <h2 className="text-2xl font-bold">
          No Tenders Found
        </h2>

        <p className="mt-3 text-slate-600">
          Try changing your search filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tenders.map((tender) => (
        <TenderCard
          key={tender.id}
          tender={tender}
          onSave={onSave}
        />
      ))}
    </div>
  );
}