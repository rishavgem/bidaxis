"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewTenderPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    tenderId: "",
    title: "",
    department: "",
    category: "",
    location: "",
    closingDate: "",
    estimatedValue: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/admin/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        return;
      }

      alert("Tender created successfully!");

      router.push("/admin/tenders");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main className="mx-auto max-w-4xl">

      <h1 className="mb-8 text-4xl font-bold">
        Add New Tender
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-lg"
      >

        <input
          placeholder="Tender ID"
          value={form.tenderId}
          onChange={(e) => updateField("tenderId", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          placeholder="Tender Title"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          placeholder="Department"
          value={form.department}
          onChange={(e) => updateField("department", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => updateField("category", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          placeholder="Location"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          type="date"
          value={form.closingDate}
          onChange={(e) => updateField("closingDate", e.target.value)}
          className="w-full rounded-xl border p-4"
          required
        />

        <input
          placeholder="Estimated Value"
          value={form.estimatedValue}
          onChange={(e) => updateField("estimatedValue", e.target.value)}
          className="w-full rounded-xl border p-4"
        />

        <button
          disabled={loading}
          className="rounded-xl bg-blue-700 px-8 py-4 text-white hover:bg-blue-800"
        >
          {loading ? "Saving..." : "Create Tender"}
        </button>

      </form>

    </main>
  );
}