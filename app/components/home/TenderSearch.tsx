"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TenderSearch() {

  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const tenders = [
    {
      id: "GEM/2026/B/1001",
      title: "Railway Equipment Supply Tender",
      department: "Indian Railways",
      category: "Supply",
      state: "Delhi",
      closing: "25 Jul 2026",
    },
    {
      id: "GEM/2026/B/1002",
      title: "Infrastructure Development Work",
      department: "CPWD",
      category: "Construction",
      state: "Haryana",
      closing: "28 Jul 2026",
    },
    {
      id: "GEM/2026/B/1003",
      title: "Power Equipment Procurement",
      department: "NHPC",
      category: "Electrical",
      state: "Punjab",
      closing: "30 Jul 2026",
    },
    {
      id: "GEM/2026/B/1004",
      title: "Defence Supply Requirement",
      department: "Indian Army",
      category: "Defence",
      state: "Rajasthan",
      closing: "02 Aug 2026",
    },
  ];


  return (
    <section className="bg-slate-100 py-20">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Search Government Tenders
          </h2>

          <p className="mt-4 text-slate-600">
            Find GeM and government tender opportunities across India.
          </p>

        </div>



        {/* Search Panel */}

        <div className="mt-12 rounded-3xl bg-white p-8 shadow-xl">


          <div className="grid gap-5 md:grid-cols-5">


            
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="🔍 Keyword"
              className="rounded-xl border p-4"
            />


            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-xl border p-4"
            >

              <option value="">
                Category
              </option>

              <option value="Supply">
                Supply
              </option>

              <option value="Construction">
                Construction
              </option>

              <option value="IT">
                IT Services
              </option>

            </select>


            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="rounded-xl border p-4"
            >

              <option value="">
                Department
              </option>

              <option value="Indian Railways">
                Indian Railways
              </option>

              <option value="CPWD">
                CPWD
              </option>

              <option value="Indian Army">
                Indian Army
              </option>

            </select>


            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="rounded-xl border p-4"
            >

              <option value="">
                State
              </option>

              <option value="Delhi">
                Delhi
              </option>

              <option value="Haryana">
                Haryana
              </option>

              <option value="Punjab">
                Punjab
              </option>

              <option value="Rajasthan">
                Rajasthan
              </option>
            </select>



            <button
              onClick={() => {
                const params = new URLSearchParams();

                if (keyword.trim()) {
                  params.append("keyword", keyword.trim());
                }

                if (category) {
                  params.append("category", category);
                }

                if (state) {
                  params.append("location", state);
                }

                router.push(`/tenders?${params.toString()}`);
              }}
              className="rounded-xl bg-blue-700 font-semibold text-white hover:bg-blue-800"
            >
              Search
            </button>


          </div>


        </div>



        {/* Tender Cards */}


        <div className="mt-12 grid gap-6 md:grid-cols-2">


          {tenders.map((tender) => (

            <div
              key={tender.id}
              className="rounded-3xl bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >


              <div className="flex justify-between">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  {tender.category}
                </span>


                <span className="text-sm font-semibold text-red-600">
                  Closing: {tender.closing}
                </span>


              </div>



              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {tender.title}
              </h3>



              <div className="mt-4 space-y-2 text-slate-600">

                <p>
                  📄 {tender.id}
                </p>

                <p>
                  🏢 {tender.department}
                </p>

                <p>
                  📍 {tender.state}
                </p>

              </div>



              <button className="mt-6 rounded-xl bg-blue-700 px-6 py-3 text-white hover:bg-blue-800">
                View Tender
              </button>


            </div>

          ))}


        </div>



        {/* CTA */}


        <div className="mt-12 text-center">

          <a
            href="/tenders"
            className="inline-block rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-black"
          >
            Explore All Tenders
          </a>

        </div>


      </div>

    </section>
  );
}