"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    company: "ABC Enterprises",
    gst: "22AAAAA0000A1Z5",
    gemId: "GEMSELLER12345",
    address: "New Delhi, India",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold">My Profile</h1>
          <p className="mt-2 text-blue-100">
            Manage your personal and company information.
          </p>
        </div>
      </section>

      {/* Profile Card */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="mb-8 flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white">
              JD
            </div>

            <div>
              <h2 className="text-2xl font-bold">{profile.fullName}</h2>
              <p className="text-slate-500">{profile.email}</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">Full Name</label>
              <input
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Email</label>
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Phone</label>
              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">Company Name</label>
              <input
                name="company"
                value={profile.company}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">GST Number</label>
              <input
                name="gst"
                value={profile.gst}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">GeM Seller ID</label>
              <input
                name="gemId"
                value={profile.gemId}
                onChange={handleChange}
                className="w-full rounded-xl border p-3"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold">Business Address</label>
              <textarea
                name="address"
                value={profile.address}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl border p-3"
              />
            </div>

          </div>

          <button
            onClick={handleSave}
            className="mt-8 rounded-xl bg-blue-700 px-8 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Save Profile
          </button>

        </div>
      </section>

    </main>
  );
}