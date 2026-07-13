"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is GeM Registration?",
      answer:
        "GeM Registration enables businesses to sell products and services directly to government departments through the Government e-Marketplace.",
    },
    {
      question: "Do you help with tender documentation?",
      answer:
        "Yes. We prepare, review, and verify all required tender documents before submission.",
    },
    {
      question: "Do you provide PAN India services?",
      answer:
        "Yes, BidAxis serves clients across all states in India.",
    },
    {
      question: "Can you participate in bids on our behalf?",
      answer:
        "Yes. We provide complete bid management and submission support according to your authorization.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>

          <p className="mt-4 text-gray-600">
            Find answers to the most common questions about our services.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-5 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}