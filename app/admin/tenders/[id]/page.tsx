"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditTenderPage() {
  const { id } = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    tenderId: "",
    title: "",
    department: "",
    category: "",
    location: "",
    closingDate: "",
    estimatedValue: "",
  });

  useEffect(() => {
    async function loadTender() {
      try {
        const res = await fetch(`/api/admin/tenders/${id}`);

        if (!res.ok) {
          throw new Error("Unable to load tender");
        }

        const tender = await res.json();

        setForm({
          tenderId: tender.tenderId,
          title: tender.title,
          department: tender.department,
          category: tender.category,
          location: tender.location,
          closingDate: tender.closingDate.split("T")[0],
          estimatedValue: tender.estimatedValue || "",
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadTender();
  }, [id]);

  function updateField(name: string, value: string) {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/admin/tenders/${id}`, {
        method: "PUT",
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

      alert("Tender updated successfully!");

      router.push("/admin/tenders");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  if (loading) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">
          Loading...
        </h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl">

      <h1 className="mb-8 text-4xl font-bold">
        Edit Tender
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-3xl bg-white p-8 shadow-lg"
      >

        <input
          className="w-full rounded-xl border p-4"
          value={form.tenderId}
          onChange={(e) => updateField("tenderId", e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-4"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-4"
          value={form.department}
          onChange={(e) => updateField("department", e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-4"
          value={form.category}
          onChange={(e) => updateField("category", e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-4"
          value={form.location}
          onChange={(e) => updateField("location", e.target.value)}
        />

        <input
          type="date"
          className="w-full rounded-xl border p-4"
          value={form.closingDate}
          onChange={(e) => updateField("closingDate", e.target.value)}
        />

        <input
          className="w-full rounded-xl border p-4"
          value={form.estimatedValue}
          onChange={(e) => updateField("estimatedValue", e.target.value)}
        />

        <button
          type="submit"
          className="rounded-xl bg-blue-700 px-8 py-4 text-white hover:bg-blue-800"
        >
          Update Tender
        </button>

      </form>

    </main>
  );
}