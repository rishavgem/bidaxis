"use client";

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  onSearch: () => void;
};

export default function TenderFilters({
  keyword,
  setKeyword,
  category,
  setCategory,
  location,
  setLocation,
  onSearch,
}: Props) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl">

      <h2 className="text-2xl font-bold">
        Search Government Tenders
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-4">

        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search by title or Tender ID"
          className="rounded-xl border p-4 outline-none focus:border-blue-600"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border p-4"
        >
          <option value="">All Categories</option>
          <option value="Supply">Supply</option>
          <option value="Construction">Construction</option>
          <option value="IT">IT</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-xl border p-4"
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Haryana">Haryana</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
        </select>

        <button
          onClick={onSearch}
          className="rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition"
        >
          Search
        </button>

      </div>

    </div>
  );
}