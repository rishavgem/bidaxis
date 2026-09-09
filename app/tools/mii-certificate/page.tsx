"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";

type SupplierClass = "Class I" | "Class II";
type CertificateMode = "letterhead" | "bidaxis";

export default function MIICertificatePage() {
  const [certificateMode, setCertificateMode] =
    useState<CertificateMode>("bidaxis");

  const [letterheadFile, setLetterheadFile] =
    useState<File | null>(null);

  const [letterheadError, setLetterheadError] = useState("");
  const [isGeneratingWord, setIsGeneratingWord] = useState(false);
  const [wordGenerationError, setWordGenerationError] = useState("");

  const [tenderNumber, setTenderNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [localContent, setLocalContent] = useState("50");

  const [supplierClass, setSupplierClass] =
    useState<SupplierClass>("Class I");

  const [signatoryName, setSignatoryName] = useState("");
  const [designation, setDesignation] = useState("");
  const [place, setPlace] = useState("");
  const [certificateDate, setCertificateDate] = useState("");

  const localContentNumber = Number(localContent);

  const classOneValid =
    supplierClass === "Class I" &&
    localContentNumber >= 50 &&
    localContentNumber <= 100;

  const classTwoValid =
    supplierClass === "Class II" &&
    localContentNumber >= 20 &&
    localContentNumber < 50;

  const localContentValid = classOneValid || classTwoValid;

  const requiredFieldsComplete =
    tenderNumber.trim() !== "" &&
    companyName.trim() !== "" &&
    companyAddress.trim() !== "" &&
    signatoryName.trim() !== "" &&
    designation.trim() !== "";

  const canDownload =
    requiredFieldsComplete && localContentValid;

  const canGenerateWord =
    letterheadFile !== null &&
    requiredFieldsComplete &&
    localContentValid;

  function handleLetterheadUpload(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    setLetterheadError("");
    setWordGenerationError("");

    if (!file) {
      setLetterheadFile(null);
      return;
    }

    const extension = file.name
      .split(".")
      .pop()
      ?.toLowerCase();

    if (extension !== "docx") {
      setLetterheadFile(null);
      event.target.value = "";

      setLetterheadError(
        "Please upload your company letterhead in .DOCX format only."
      );

      return;
    }

    const maxSize = 10 * 1024 * 1024;

    if (file.size > maxSize) {
      setLetterheadFile(null);
      event.target.value = "";

      setLetterheadError(
        "The Word document must be smaller than 10 MB."
      );

      return;
    }

    setLetterheadFile(file);
  }

  function handlePrint() {
    if (!canDownload) return;
    window.print();
  }

  async function handleGenerateWord() {
    if (!canGenerateWord || !letterheadFile) {
      return;
    }

    try {
      setIsGeneratingWord(true);
      setWordGenerationError("");

      const formData = new FormData();

      formData.append("letterhead", letterheadFile);
      formData.append("tenderNumber", tenderNumber);
      formData.append("companyName", companyName);
      formData.append("companyAddress", companyAddress);
      formData.append("localContent", localContent);
      formData.append("supplierClass", supplierClass);
      formData.append("signatoryName", signatoryName);
      formData.append("designation", designation);
      formData.append("place", place);
      formData.append("certificateDate", certificateDate);

      const response = await fetch(
        "/api/tools/mii-certificate",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        throw new Error(
          data?.error ||
            "Unable to generate the Word certificate."
        );
      }

      const blob = await response.blob();

      const objectUrl = URL.createObjectURL(blob);

      const safeTenderNumber =
        tenderNumber
          .replace(/[^a-zA-Z0-9-_]/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "") || "Tender";

      const anchor = document.createElement("a");

      anchor.href = objectUrl;
      anchor.download = `MII-Certificate-${safeTenderNumber}.docx`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      setWordGenerationError(
        error instanceof Error
          ? error.message
          : "Unable to generate the Word certificate."
      );
    } finally {
      setIsGeneratingWord(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>&larr;</span>
            Back to BidAxis
          </Link>

          <div className="mt-6">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              Free Tender Tool
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Make in India{" "}
            <span className="text-blue-600">(MII)</span>{" "}
            Certificate Generator
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Generate your MII certificate using your own Word
            letterhead or the BidAxis certificate template.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              Certificate Format
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-950 md:text-3xl">
              Choose Your Certificate Format
            </h2>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
            <button
              type="button"
              onClick={() =>
                setCertificateMode("letterhead")
              }
              className={`relative rounded-[22px] border-2 p-6 text-left transition-all ${
                certificateMode === "letterhead"
                  ? "border-blue-600 bg-blue-50/70 shadow-lg shadow-blue-600/10"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              {certificateMode === "letterhead" && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  &#10003;
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <span className="font-extrabold">W</span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                Use Company Letterhead
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Upload your company&apos;s Microsoft Word
                letterhead and generate the certificate inside
                that document.
              </p>

              <p className="mt-5 text-xs font-semibold text-slate-500">
                Microsoft Word .DOCX only
              </p>
            </button>

            <button
              type="button"
              onClick={() =>
                setCertificateMode("bidaxis")
              }
              className={`relative rounded-[22px] border-2 p-6 text-left transition-all ${
                certificateMode === "bidaxis"
                  ? "border-blue-600 bg-blue-50/70 shadow-lg shadow-blue-600/10"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              {certificateMode === "bidaxis" && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  &#10003;
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                &#10024;
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-950">
                Use BidAxis Template
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Continue with the existing BidAxis certificate
                design and PDF flow.
              </p>

              <p className="mt-5 text-xs font-semibold text-slate-500">
                Live preview &amp; Save as PDF
              </p>
            </button>
          </div>
        </div>
      </section>

      {certificateMode === "letterhead" && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/40 md:p-8">
            <div className="border-b border-slate-200 pb-7">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 1
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Upload Company Letterhead
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Your Word document must contain{" "}
                <strong className="text-slate-800">
                  {"{{MII_CONTENT}}"}
                </strong>{" "}
                where you want the certificate text inserted.
              </p>

              <div className="mt-5">
                <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                  Choose Word File

                  <input
                    type="file"
                    accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleLetterheadUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {letterheadFile && (
                <div className="mt-5 flex items-center justify-between rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {letterheadFile.name}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-emerald-700">
                      Letterhead ready
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setLetterheadFile(null)
                    }
                    className="text-xs font-bold text-red-500"
                  >
                    Remove
                  </button>
                </div>
              )}

              {letterheadError && (
                <p className="mt-4 text-sm font-semibold text-red-600">
                  {letterheadError}
                </p>
              )}
            </div>

            <div className="py-8">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 2
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Enter MII Certificate Details
              </h2>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Tender / Bid Number *
                  </label>

                  <input
                    value={tenderNumber}
                    onChange={(e) =>
                      setTenderNumber(e.target.value)
                    }
                    placeholder="GEM/2026/B/1234567"
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Local Content %
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={localContent}
                    onChange={(e) =>
                      setLocalContent(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-bold text-slate-700">
                  Supplier Classification
                </label>

                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSupplierClass("Class I")
                    }
                    className={`rounded-xl border p-4 text-left ${
                      supplierClass === "Class I"
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200"
                    }`}
                  >
                    <strong>Class I Local Supplier</strong>
                    <p className="mt-1 text-xs text-slate-500">
                      50% or more local content
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSupplierClass("Class II")
                    }
                    className={`rounded-xl border p-4 text-left ${
                      supplierClass === "Class II"
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200"
                    }`}
                  >
                    <strong>Class II Local Supplier</strong>
                    <p className="mt-1 text-xs text-slate-500">
                      20% to below 50%
                    </p>
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm font-bold text-slate-700">
                  Company / Firm Name *
                </label>

                <input
                  value={companyName}
                  onChange={(e) =>
                    setCompanyName(e.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-6">
                <label className="text-sm font-bold text-slate-700">
                  Registered Address *
                </label>

                <textarea
                  rows={3}
                  value={companyAddress}
                  onChange={(e) =>
                    setCompanyAddress(e.target.value)
                  }
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                />
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Signatory Name *
                  </label>

                  <input
                    value={signatoryName}
                    onChange={(e) =>
                      setSignatoryName(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Designation *
                  </label>

                  <input
                    value={designation}
                    onChange={(e) =>
                      setDesignation(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Place
                  </label>

                  <input
                    value={place}
                    onChange={(e) =>
                      setPlace(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Certificate Date
                  </label>

                  <input
                    type="date"
                    value={certificateDate}
                    onChange={(e) =>
                      setCertificateDate(e.target.value)
                    }
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {!localContentValid && (
                <div className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-700">
                  {supplierClass === "Class I"
                    ? "Class I requires at least 50% local content."
                    : "Class II requires at least 20% and less than 50% local content."}
                </div>
              )}
            </div>

            <div className="border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 3
              </p>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Generate Word Certificate
              </h2>

              <button
                type="button"
                onClick={handleGenerateWord}
                disabled={
                  !canGenerateWord || isGeneratingWord
                }
                className="mt-5 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isGeneratingWord
                  ? "Generating Word Certificate..."
                  : "Generate MII Certificate in Word"}
              </button>

              {wordGenerationError && (
                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {wordGenerationError}
                </div>
              )}

              {!letterheadFile && (
                <p className="mt-3 text-center text-xs font-semibold text-amber-600">
                  Upload your Word letterhead first.
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      {certificateMode === "bidaxis" && (
        <>
          {/* KEEP YOUR CURRENT WORKING BIDAXIS MII GENERATOR HERE */}
          {/* Paste the existing Certificate Builder + Live Preview section unchanged */}
        </>
      )}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Important
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-950">
            Verify Tender-Specific Requirements
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Certificate wording and procurement requirements may
            vary by tender. Always verify the applicable tender
            conditions before submission.
          </p>
        </div>
      </section>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden !important;
          }

          #mii-certificate,
          #mii-certificate * {
            visibility: visible !important;
          }

          #mii-certificate {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: white !important;
          }

          @page {
            size: A4;
            margin: 12mm;
          }
        }
      `}</style>
    </main>
  );
}