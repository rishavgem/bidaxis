"use client";

import Link from "next/link";
import { useState, type ChangeEvent } from "react";

type CertificateMode = "letterhead" | "bidaxis";

export default function ATCCertificatePage() {
  const [certificateMode, setCertificateMode] =
    useState<CertificateMode>("bidaxis");

  const [letterheadFile, setLetterheadFile] =
    useState<File | null>(null);

  const [letterheadError, setLetterheadError] =
    useState("");

  const [isGeneratingWord, setIsGeneratingWord] =
    useState(false);

  const [
    wordGenerationError,
    setWordGenerationError,
  ] = useState("");

  const [recipient, setRecipient] = useState("");
  const [organization, setOrganization] =
    useState("");

  const [
    organizationAddress,
    setOrganizationAddress,
  ] = useState("");

  const [tenderNumber, setTenderNumber] =
    useState("");

  const [companyName, setCompanyName] =
    useState("");

  const [companyAddress, setCompanyAddress] =
    useState("");

  const [signatoryName, setSignatoryName] =
    useState("");

  const [designation, setDesignation] =
    useState("");

  const [place, setPlace] = useState("");

  const [certificateDate, setCertificateDate] =
    useState("");

  const requiredFieldsComplete =
    recipient.trim() !== "" &&
    organization.trim() !== "" &&
    organizationAddress.trim() !== "" &&
    tenderNumber.trim() !== "" &&
    companyName.trim() !== "" &&
    companyAddress.trim() !== "" &&
    signatoryName.trim() !== "" &&
    designation.trim() !== "";

  const canGenerateWord =
    letterheadFile !== null &&
    requiredFieldsComplete;

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
    if (!requiredFieldsComplete) {
      return;
    }

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

      formData.append(
        "letterhead",
        letterheadFile
      );

      formData.append(
        "recipient",
        recipient
      );

      formData.append(
        "organization",
        organization
      );

      formData.append(
        "organizationAddress",
        organizationAddress
      );

      formData.append(
        "tenderNumber",
        tenderNumber
      );

      formData.append(
        "companyName",
        companyName
      );

      formData.append(
        "companyAddress",
        companyAddress
      );

      formData.append(
        "signatoryName",
        signatoryName
      );

      formData.append(
        "designation",
        designation
      );

      formData.append(
        "place",
        place
      );

      formData.append(
        "certificateDate",
        certificateDate
      );

      const response = await fetch(
        "/api/tools/atc-certificate",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => null);

        throw new Error(
          data?.error ||
            "Unable to generate the ATC Word certificate."
        );
      }

      const blob = await response.blob();

      const objectUrl =
        URL.createObjectURL(blob);

      const safeTenderNumber =
        tenderNumber
          .replace(
            /[^a-zA-Z0-9-_]/g,
            "-"
          )
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "") ||
        "Tender";

      const anchor =
        document.createElement("a");

      anchor.href = objectUrl;

      anchor.download =
        `ATC-Certificate-${safeTenderNumber}.docx`;

      document.body.appendChild(anchor);

      anchor.click();

      anchor.remove();

      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      setWordGenerationError(
        error instanceof Error
          ? error.message
          : "Unable to generate the ATC Word certificate."
      );
    } finally {
      setIsGeneratingWord(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-violet-100/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>&larr;</span>
            Back to BidAxis
          </Link>

          <div className="mt-6">
            <span className="inline-flex rounded-full bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-700">
              Free Tender Tool
            </span>
          </div>

          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Acceptance of Terms &amp;
            Conditions{" "}
            <span className="text-blue-600">
              Certificate Generator
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
            Create an ATC certificate for
            tender submissions using your
            company&apos;s Word letterhead or
            the BidAxis certificate template.
          </p>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATE MODE SELECTOR
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pt-12">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-8">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              Certificate Format
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-950 md:text-3xl">
              How Would You Like to
              Generate Your Certificate?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500">
              Use your existing company
              letterhead or generate the
              certificate using the BidAxis
              template.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-5 md:grid-cols-2">
            {/* COMPANY LETTERHEAD */}

            <button
              type="button"
              onClick={() =>
                setCertificateMode(
                  "letterhead"
                )
              }
              className={`relative rounded-[22px] border-2 p-6 text-left transition-all ${
                certificateMode ===
                "letterhead"
                  ? "border-blue-600 bg-blue-50/70 shadow-lg shadow-blue-600/10"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              {certificateMode ===
                "letterhead" && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  &#10003;
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 font-extrabold text-blue-700">
                W
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-slate-950">
                  Use Company Letterhead
                </h3>

                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                  DOCX
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Upload your existing Microsoft
                Word letterhead and automatically
                add the ATC certificate to the
                document.
              </p>

              <p className="mt-5 text-xs font-semibold text-slate-500">
                Microsoft Word .DOCX only
              </p>
            </button>

            {/* BIDAXIS TEMPLATE */}

            <button
              type="button"
              onClick={() =>
                setCertificateMode(
                  "bidaxis"
                )
              }
              className={`relative rounded-[22px] border-2 p-6 text-left transition-all ${
                certificateMode ===
                "bidaxis"
                  ? "border-blue-600 bg-blue-50/70 shadow-lg shadow-blue-600/10"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              {certificateMode ===
                "bidaxis" && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  &#10003;
                </span>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl text-violet-700">
                &#10024;
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-bold text-slate-950">
                  Use BidAxis Template
                </h3>

                <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                  Recommended
                </span>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use the ready-made BidAxis ATC
                certificate format with live
                preview and PDF saving.
              </p>

              <p className="mt-5 text-xs font-semibold text-slate-500">
                Live preview &amp; Save as PDF
              </p>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          COMPANY LETTERHEAD FLOW
      ====================================================== */}

      {certificateMode ===
        "letterhead" && (
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-8">
            {/* STEP 1 */}

            <div className="border-b border-slate-200 pb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 1
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Upload Your Word
                Letterhead
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                Upload your normal company
                letterhead in Microsoft Word
                format. BidAxis will
                automatically add the ATC
                certificate below the existing
                document content.
              </p>

              <div className="mt-6 rounded-[22px] border-2 border-dashed border-slate-200 bg-slate-50 p-7 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 font-extrabold text-blue-700">
                  W
                </div>

                <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Company Letterhead
                </p>

                <h3 className="mt-2 text-lg font-bold text-slate-950">
                  Upload Your Word
                  Letterhead
                </h3>

                <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                  Use a normal blank company
                  letterhead. No placeholder is
                  required.
                </p>

                <label className="mt-5 inline-flex cursor-pointer items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">
                  Choose Word File

                  <input
                    type="file"
                    accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={
                      handleLetterheadUpload
                    }
                    className="hidden"
                  />
                </label>

                <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
                  <span>
                    .DOCX format only
                  </span>

                  <span>
                    Maximum 10 MB
                  </span>

                  <span>
                    Company letterhead
                    document
                  </span>
                </div>
              </div>

              {letterheadFile && (
                <div className="mt-5 flex flex-col gap-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      {letterheadFile.name}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-emerald-700">
                      Word letterhead selected
                      successfully
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setLetterheadFile(
                        null
                      );

                      setWordGenerationError(
                        ""
                      );
                    }}
                    className="text-left text-xs font-bold text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}

              {letterheadError && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {letterheadError}
                </div>
              )}

              <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 px-4 py-4">
                <p className="text-sm font-semibold leading-6 text-blue-800">
                  For best results, use a
                  blank .DOCX letterhead with
                  the company logo and contact
                  information in the Word
                  header or at the top of the
                  first page.
                </p>
              </div>
            </div>

            {/* STEP 2 */}

            <div className="border-b border-slate-200 py-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 2
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Enter ATC Certificate
                Details
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the tender,
                recipient and company
                information below.
              </p>

              <ATCForm
                recipient={recipient}
                setRecipient={setRecipient}
                organization={organization}
                setOrganization={
                  setOrganization
                }
                organizationAddress={
                  organizationAddress
                }
                setOrganizationAddress={
                  setOrganizationAddress
                }
                tenderNumber={
                  tenderNumber
                }
                setTenderNumber={
                  setTenderNumber
                }
                companyName={companyName}
                setCompanyName={
                  setCompanyName
                }
                companyAddress={
                  companyAddress
                }
                setCompanyAddress={
                  setCompanyAddress
                }
                signatoryName={
                  signatoryName
                }
                setSignatoryName={
                  setSignatoryName
                }
                designation={designation}
                setDesignation={
                  setDesignation
                }
                place={place}
                setPlace={setPlace}
                certificateDate={
                  certificateDate
                }
                setCertificateDate={
                  setCertificateDate
                }
              />
            </div>

            {/* STEP 3 */}

            <div className="pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Step 3
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Generate ATC Word
                Certificate
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                BidAxis will add the ATC
                declaration to your uploaded
                Word letterhead and create a
                new .DOCX file.
              </p>

              <button
                type="button"
                onClick={
                  handleGenerateWord
                }
                disabled={
                  !canGenerateWord ||
                  isGeneratingWord
                }
                className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {isGeneratingWord
                  ? "Generating Word Certificate..."
                  : "Generate ATC Certificate in Word"}
              </button>

              {!letterheadFile && (
                <p className="mt-3 text-center text-xs font-semibold text-amber-600">
                  Upload your Word
                  letterhead to continue.
                </p>
              )}

              {letterheadFile &&
                !requiredFieldsComplete && (
                  <p className="mt-3 text-center text-xs font-semibold text-amber-600">
                    Complete all required
                    fields to generate the
                    certificate.
                  </p>
                )}

              {wordGenerationError && (
                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {
                    wordGenerationError
                  }
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          BIDAXIS TEMPLATE FLOW
      ====================================================== */}

      {certificateMode ===
        "bidaxis" && (
        <section className="mx-auto max-w-[1450px] px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* FORM */}

            <div className="h-fit rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:p-8">
              <div>
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                  Certificate Builder
                </span>

                <h2 className="mt-4 text-2xl font-bold text-slate-950">
                  Enter ATC Details
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill in the tender and
                  company information. The
                  certificate preview will
                  update automatically.
                </p>
              </div>

              <ATCForm
                recipient={recipient}
                setRecipient={setRecipient}
                organization={organization}
                setOrganization={
                  setOrganization
                }
                organizationAddress={
                  organizationAddress
                }
                setOrganizationAddress={
                  setOrganizationAddress
                }
                tenderNumber={
                  tenderNumber
                }
                setTenderNumber={
                  setTenderNumber
                }
                companyName={companyName}
                setCompanyName={
                  setCompanyName
                }
                companyAddress={
                  companyAddress
                }
                setCompanyAddress={
                  setCompanyAddress
                }
                signatoryName={
                  signatoryName
                }
                setSignatoryName={
                  setSignatoryName
                }
                designation={designation}
                setDesignation={
                  setDesignation
                }
                place={place}
                setPlace={setPlace}
                certificateDate={
                  certificateDate
                }
                setCertificateDate={
                  setCertificateDate
                }
              />

              <button
                type="button"
                onClick={handlePrint}
                disabled={
                  !requiredFieldsComplete
                }
                className="mt-8 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Download / Save as PDF
              </button>

              {!requiredFieldsComplete && (
                <p className="mt-3 text-center text-xs font-semibold text-slate-400">
                  Complete all required
                  fields to enable the
                  certificate.
                </p>
              )}
            </div>

            {/* PREVIEW */}

            <div>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Live Preview
                  </span>

                  <h2 className="mt-1 text-xl font-bold text-slate-950">
                    ATC Certificate
                  </h2>
                </div>

                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-500">
                  A4 Preview
                </span>
              </div>

              <div
                id="atc-certificate"
                className="mx-auto min-h-[1050px] w-full max-w-[820px] overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 via-violet-500 to-blue-600" />

                <div className="px-12 py-12 text-slate-900 md:px-16">
                  <div className="border-b border-slate-200 pb-8 text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
                      Tender Declaration
                    </p>

                    <h1 className="mt-4 text-2xl font-extrabold uppercase leading-tight tracking-wide md:text-3xl">
                      Acceptance of Terms
                      &amp; Conditions
                    </h1>

                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                      ATC Certificate
                    </p>
                  </div>

                  <div className="mt-10 text-[15px] leading-8 text-slate-700">
                    <div>
                      <p className="font-semibold text-slate-900">
                        To,
                      </p>

                      <p className="font-bold text-slate-900">
                        {recipient ||
                          "Recipient / Authority"}
                      </p>

                      <p>
                        {organization ||
                          "Organization Name"}
                      </p>

                      <p className="whitespace-pre-line">
                        {organizationAddress ||
                          "Organization Address"}
                      </p>
                    </div>

                    <p className="mt-8 font-bold text-slate-900">
                      Subject: Acceptance of
                      Terms and Conditions for
                      Tender / Bid No.{" "}
                      <span className="text-blue-700">
                        {tenderNumber ||
                          "GEM/XXXX/B/XXXXXXX"}
                      </span>
                    </p>

                    <p className="mt-8">
                      Dear Sir / Madam,
                    </p>

                    <p className="mt-5 text-justify">
                      We,{" "}
                      <strong className="text-slate-900">
                        {companyName ||
                          "Company / Firm Name"}
                      </strong>
                      , having our registered
                      office at{" "}
                      <strong className="text-slate-900">
                        {companyAddress ||
                          "Company Address"}
                      </strong>
                      , hereby confirm that we
                      have carefully read and
                      understood all the terms
                      and conditions,
                      specifications,
                      requirements and other
                      provisions contained in
                      Tender / Bid No.{" "}
                      <strong className="text-slate-900">
                        {tenderNumber ||
                          "Tender Number"}
                      </strong>
                      .
                    </p>

                    <p className="mt-5 text-justify">
                      We hereby accept the
                      applicable terms and
                      conditions of the
                      above-mentioned tender
                      and agree to comply with
                      the requirements
                      specified in the tender
                      document, including any
                      corrigenda, amendments
                      or clarifications issued
                      by the buyer or competent
                      authority.
                    </p>

                    <p className="mt-5 text-justify">
                      We further confirm that
                      the information,
                      declarations and
                      documents submitted by
                      us in connection with the
                      tender are true and
                      correct to the best of
                      our knowledge and belief.
                    </p>

                    <div className="mt-8 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Tender / Bid Number
                      </p>

                      <p className="mt-1 font-bold text-slate-950">
                        {tenderNumber ||
                          "GEM/XXXX/B/XXXXXXX"}
                      </p>
                    </div>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2">
                      <div>
                        <p>
                          <strong className="text-slate-900">
                            Place:
                          </strong>{" "}
                          {place ||
                            "________________"}
                        </p>

                        <p className="mt-2">
                          <strong className="text-slate-900">
                            Date:
                          </strong>{" "}
                          {certificateDate ||
                            "________________"}
                        </p>
                      </div>

                      <div className="sm:text-right">
                        <div className="mb-14" />

                        <p className="font-bold text-slate-950">
                          Authorized Signatory
                        </p>

                        <p className="mt-2 font-semibold text-slate-900">
                          {signatoryName ||
                            "Signatory Name"}
                        </p>

                        <p className="text-slate-600">
                          {designation ||
                            "Designation"}
                        </p>

                        <p className="font-semibold text-slate-700">
                          {companyName ||
                            "Company / Firm Name"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-14 border-t border-slate-200 pt-5">
                    <p className="text-center text-[11px] leading-5 text-slate-400">
                      This certificate has
                      been prepared based on
                      the information provided
                      by the user. Tender
                      requirements may vary.
                      Verify the applicable
                      ATC, tender document and
                      corrigenda before
                      submission.
                    </p>
                  </div>
                </div>

                <div className="grid h-2 grid-cols-3">
                  <div className="bg-orange-500" />
                  <div className="bg-white" />
                  <div className="bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          INSTRUCTIONS
      ====================================================== */}

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-6 rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)] md:grid-cols-[0.75fr_1.25fr] md:p-8">
          <div>
            <span className="inline-flex rounded-full bg-violet-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-violet-700">
              How It Works
            </span>

            <h2 className="mt-4 text-2xl font-bold text-slate-950">
              Generate Your ATC
              Certificate in Minutes
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Choose your preferred
              certificate format and provide
              the required tender details.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                number: "01",
                title:
                  "Choose Certificate Format",
                text:
                  "Select your company Word letterhead or the BidAxis certificate template.",
              },
              {
                number: "02",
                title:
                  "Enter Tender Details",
                text:
                  "Provide the recipient, organization, tender number and company information.",
              },
              {
                number: "03",
                title:
                  "Generate Certificate",
                text:
                  "Create the ATC certificate in Word or use the live BidAxis preview.",
              },
              {
                number: "04",
                title:
                  "Review Before Submission",
                text:
                  "Check the final document against the tender ATC and any applicable corrigenda.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="text-xs font-extrabold text-blue-600">
                  {item.number}
                </span>

                <h3 className="mt-2 font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-[22px] border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Important
          </p>

          <h3 className="mt-2 text-lg font-bold text-slate-950">
            Verify Tender-Specific ATC
            Requirements
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Some tenders prescribe specific
            ATC wording, additional
            declarations or a mandatory
            certificate format. Always review
            the tender document, ATC,
            amendments and corrigenda before
            submitting the generated
            certificate.
          </p>
        </div>
      </section>

      {/* =====================================================
          PRINT CSS
      ====================================================== */}

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden !important;
          }

          #atc-certificate,
          #atc-certificate * {
            visibility: visible !important;
          }

          #atc-certificate {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            min-height: auto !important;
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

/* =========================================================
   SHARED ATC FORM
========================================================= */

type ATCFormProps = {
  recipient: string;
  setRecipient: (
    value: string
  ) => void;

  organization: string;
  setOrganization: (
    value: string
  ) => void;

  organizationAddress: string;
  setOrganizationAddress: (
    value: string
  ) => void;

  tenderNumber: string;
  setTenderNumber: (
    value: string
  ) => void;

  companyName: string;
  setCompanyName: (
    value: string
  ) => void;

  companyAddress: string;
  setCompanyAddress: (
    value: string
  ) => void;

  signatoryName: string;
  setSignatoryName: (
    value: string
  ) => void;

  designation: string;
  setDesignation: (
    value: string
  ) => void;

  place: string;
  setPlace: (
    value: string
  ) => void;

  certificateDate: string;
  setCertificateDate: (
    value: string
  ) => void;
};

function ATCForm({
  recipient,
  setRecipient,
  organization,
  setOrganization,
  organizationAddress,
  setOrganizationAddress,
  tenderNumber,
  setTenderNumber,
  companyName,
  setCompanyName,
  companyAddress,
  setCompanyAddress,
  signatoryName,
  setSignatoryName,
  designation,
  setDesignation,
  place,
  setPlace,
  certificateDate,
  setCertificateDate,
}: ATCFormProps) {
  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10";

  const labelClass =
    "text-sm font-bold text-slate-700";

  return (
    <div className="mt-7 space-y-6">
      <div>
        <label className={labelClass}>
          To *
        </label>

        <input
          value={recipient}
          onChange={(event) =>
            setRecipient(
              event.target.value
            )
          }
          placeholder="The Commandant"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Organization *
        </label>

        <input
          value={organization}
          onChange={(event) =>
            setOrganization(
              event.target.value
            )
          }
          placeholder="Indian Army"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Organization Address *
        </label>

        <textarea
          rows={3}
          value={organizationAddress}
          onChange={(event) =>
            setOrganizationAddress(
              event.target.value
            )
          }
          placeholder="Enter the buyer / organization address"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Tender / Bid Number *
        </label>

        <input
          value={tenderNumber}
          onChange={(event) =>
            setTenderNumber(
              event.target.value
            )
          }
          placeholder="GEM/2026/B/1234567"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Company / Firm Name *
        </label>

        <input
          value={companyName}
          onChange={(event) =>
            setCompanyName(
              event.target.value
            )
          }
          placeholder="Your company name"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Company Address *
        </label>

        <textarea
          rows={3}
          value={companyAddress}
          onChange={(event) =>
            setCompanyAddress(
              event.target.value
            )
          }
          placeholder="Registered company address"
          className={inputClass}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>
            Signatory Name *
          </label>

          <input
            value={signatoryName}
            onChange={(event) =>
              setSignatoryName(
                event.target.value
              )
            }
            placeholder="Authorized signatory"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Designation *
          </label>

          <input
            value={designation}
            onChange={(event) =>
              setDesignation(
                event.target.value
              )
            }
            placeholder="Director / Proprietor / Manager"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className={labelClass}>
            Place
          </label>

          <input
            value={place}
            onChange={(event) =>
              setPlace(
                event.target.value
              )
            }
            placeholder="New Delhi"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Certificate Date
          </label>

          <input
            type="date"
            value={certificateDate}
            onChange={(event) =>
              setCertificateDate(
                event.target.value
              )
            }
            className={inputClass}
          />
        </div>
      </div>
    </div>
  );
}