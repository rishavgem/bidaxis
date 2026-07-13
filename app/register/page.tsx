"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration Failed");
        return;
      }

      alert("Registration Successful!");

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Create BidAxis Account
        </h1>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
          required
        />

        <input
          name="phone"
          type="text"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <input
          name="company"
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-4"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded p-3 mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </main>
  );
}