"use client";

import Link from "next/link";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type Mode = "bidaxis" | "letterhead";

type FormState = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  tenderTitle: string;
  departmentName: string;
  exemptionBasis: string;
  registrationNumber: string;
  signatoryName: string;
  designation: string;
  place: string;
  date: string;
};

const initialForm: FormState = {
  companyName: "",
  companyAddress: "",
  bidNumber: "",
  tenderTitle: "",
  departmentName: "",
  exemptionBasis: "",
  registrationNumber: "",
  signatoryName: "",
  designation: "",
  place: "",
  date: new Date().toISOString().split("T")[0],
};

type IconName =
  | "arrow"
  | "shield"
  | "document"
  | "upload"
  | "check"
  | "download";

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
  size?: number;
}) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg {...props}>
      {name === "arrow" && (
        <>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "upload" && (
        <>
          <path d="M12 16V4" />
          <path d="m8 8 4-4 4 4" />
          <path d="M4 15v5h16v-5" />
        </>
      )}

      {name === "check" && (
        <path d="m5 12 4 4L19 6" />
      )}

      {name === "download" && (
        <>
          <path d="M12 4v12" />
          <path d="m8 12 4 4 4-4" />
          <path d="M4 20h16" />
        </>
      )}
    </svg>
  );
}

export default function EmdExemptionPage() {
  const [mode, setMode] = useState<Mode>("bidaxis");
  const [form, setForm] = useState<FormState>(initialForm);
  const [letterhead, setLetterhead] = useState<File | null>(null);
  const [accuracyAccepted, setAccuracyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function selectMode(nextMode: Mode) {
    setMode(nextMode);
    setMessage("");
    setMessageType("");
  }

  function handleLetterhead(
    event: ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) {
      setLetterhead(null);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".docx")) {
      setLetterhead(null);
      setMessage("Please upload a Microsoft Word .docx file only.");
      setMessageType("error");
      event.target.value = "";
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setLetterhead(null);
      setMessage(
        "The uploaded Word file is too large. Maximum supported size is 15 MB."
      );
      setMessageType("error");
      event.target.value = "";
      return;
    }

    setLetterhead(file);
    setMessage("");
    setMessageType("");
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    if (!accuracyAccepted) {
      setMessage(
        "Please confirm the accuracy of the exemption information."
      );
      setMessageType("error");
      return;
    }

    if (mode === "letterhead" && !letterhead) {
      setMessage("Please upload your company Word letterhead.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const body = new FormData();

      body.append("mode", mode);
      body.append(
        "accuracyAccepted",
        accuracyAccepted ? "true" : "false"
      );

      Object.entries(form).forEach(([key, value]) => {
        body.append(key, value);
      });

      if (mode === "letterhead" && letterhead) {
        body.append("letterhead", letterhead);
      }

      const response = await fetch(
        "/api/tools/emd-exemption",
        {
          method: "POST",
          body,
        }
      );

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        throw new Error(
          result?.error ||
            "Unable to generate EMD Exemption Declaration."
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const company =
        form.companyName
          .trim()
          .replace(/[^a-z0-9]+/gi, "-")
          .replace(/^-+|-+$/g, "") || "BidAxis";

      const anchor = document.createElement("a");

      anchor.href = url;
      anchor.download =
        `EMD-Exemption-Declaration-${company}.docx`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.URL.revokeObjectURL(url);

      setMessage(
        "EMD Exemption Declaration generated successfully."
      );
      setMessageType("success");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while generating the document."
      );
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="heroSection">
        <div className="gridPattern" />
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <div className="container">
          <Link href="/tools" className="back">
            <Icon name="arrow" size={16} />
            All Document Tools
          </Link>

          <div className="hero">
            <div className="heroIcon">
              <Icon name="shield" size={34} />
            </div>

            <div>
              <div className="eyebrow">
                BIDAXIS DOCUMENT STUDIO
              </div>

              <h1>
                EMD Exemption <span>Declaration</span>
              </h1>

              <p>
                Create an editable declaration for claiming an
                applicable Earnest Money Deposit exemption against
                a tender or GeM bid.
              </p>

              <div className="tags">
                <span>EMD Exemption</span>
                <span>GeM Bid</span>
                <span>Editable DOCX</span>
                <span>Letterhead Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container layout">
          <form className="formCard" onSubmit={handleSubmit}>
            <SectionHeader
              label="DOCUMENT SETUP"
              title="Choose your document format"
              description="Use the BidAxis template or generate the declaration below your existing Word letterhead."
              step="01"
            />

            <div className="modeGrid">
              <ModeCard
                active={mode === "bidaxis"}
                icon="document"
                title="BidAxis Template"
                description="Professional editable Word declaration."
                onClick={() => selectMode("bidaxis")}
              />

              <ModeCard
                active={mode === "letterhead"}
                icon="upload"
                title="Company Letterhead"
                description="Use your existing .docx letterhead."
                onClick={() => selectMode("letterhead")}
              />
            </div>

            {mode === "letterhead" && (
              <div className="uploadBox">
                <input
                  id="emd-letterhead"
                  type="file"
                  accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleLetterhead}
                />

                <label htmlFor="emd-letterhead">
                  <div className="uploadIcon">
                    <Icon name="upload" size={24} />
                  </div>

                  <div className="uploadCopy">
                    <strong>
                      {letterhead
                        ? letterhead.name
                        : "Upload company letterhead"}
                    </strong>

                    <span>Microsoft Word .docx only</span>
                    <small>No placeholder is required.</small>
                  </div>

                  <b>{letterhead ? "Change" : "Browse"}</b>
                </label>
              </div>
            )}

            <div className="divider" />

            <SectionHeader
              label="EXEMPTION DETAILS"
              title="Enter tender and exemption information"
              description="Enter the actual basis under which your company is claiming EMD exemption."
              step="02"
            />

            <div className="formGrid">
              <Field
                label="Company Name"
                name="companyName"
                value={form.companyName}
                onChange={updateField}
                placeholder="ABC Technologies Pvt. Ltd."
                required
              />

              <Field
                label="Bid Number"
                name="bidNumber"
                value={form.bidNumber}
                onChange={updateField}
                placeholder="GEM/2026/B/XXXXXXX"
                required
              />

              <div className="full">
                <label className="textareaLabel">
                  Company Address <em>*</em>
                </label>

                <textarea
                  name="companyAddress"
                  value={form.companyAddress}
                  onChange={updateField}
                  placeholder="Registered / office address"
                  required
                />
              </div>

              <div className="full">
                <Field
                  label="Tender / Bid Title"
                  name="tenderTitle"
                  value={form.tenderTitle}
                  onChange={updateField}
                  placeholder="Supply of..."
                  required
                />
              </div>

              <div className="full">
                <Field
                  label="Department / Buyer Organisation"
                  name="departmentName"
                  value={form.departmentName}
                  onChange={updateField}
                  placeholder="Department / Organisation Name"
                  required
                />
              </div>

              <Field
                label="Exemption Basis"
                name="exemptionBasis"
                value={form.exemptionBasis}
                onChange={updateField}
                placeholder="Enter applicable exemption basis"
                required
              />

              <Field
                label="Registration / Certificate No."
                name="registrationNumber"
                value={form.registrationNumber}
                onChange={updateField}
                placeholder="Registration / Certificate Number"
                required
              />

              <Field
                label="Authorized Signatory"
                name="signatoryName"
                value={form.signatoryName}
                onChange={updateField}
                placeholder="Full Name"
                required
              />

              <Field
                label="Designation"
                name="designation"
                value={form.designation}
                onChange={updateField}
                placeholder="Director / Authorized Signatory"
                required
              />

              <Field
                label="Place"
                name="place"
                value={form.place}
                onChange={updateField}
                placeholder="New Delhi"
                required
              />

              <Field
                label="Date"
                name="date"
                value={form.date}
                onChange={updateField}
                type="date"
                required
              />
            </div>

            <div className="confirmationBox">
              <div className="confirmationIcon">
                <Icon name="shield" size={22} />
              </div>

              <div>
                <strong>Exemption eligibility confirmation</strong>

                <p>
                  BidAxis does not determine whether the company is
                  eligible for EMD exemption. Eligibility remains
                  subject to the applicable tender conditions and
                  verification of supporting documents.
                </p>

                <label className="confirm">
                  <input
                    type="checkbox"
                    checked={accuracyAccepted}
                    onChange={(event) =>
                      setAccuracyAccepted(event.target.checked)
                    }
                    required
                  />

                  <span>
                    I confirm that the exemption basis and registration
                    details entered above are accurate and may be used
                    to generate this declaration.
                  </span>
                </label>
              </div>
            </div>

            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              className="generate"
              disabled={loading}
            >
              <Icon name="download" size={19} />

              {loading
                ? "Generating Declaration..."
                : "Generate & Download DOCX"}
            </button>

            <p className="note">
              Attach the applicable supporting registration or
              certificate separately where required by the tender.
            </p>
          </form>

          <aside className="previewColumn">
            <div className="previewCard">
              <div className="previewHeader">
                <div>
                  <span>LIVE DOCUMENT PREVIEW</span>
                  <strong>EMD Exemption Declaration</strong>
                </div>

                <div className="ready">
                  <i />
                  Ready
                </div>
              </div>

              <div className="paper">
                <div className="paperBrand">
                  <div className="brandMark">
                    {mode === "bidaxis" ? (
                      "B"
                    ) : (
                      <Icon name="document" size={15} />
                    )}
                  </div>

                  <div>
                    <strong>
                      {mode === "bidaxis"
                        ? "BidAxis"
                        : form.companyName || "Your Company"}
                    </strong>

                    <span>
                      {mode === "bidaxis"
                        ? "Document Studio"
                        : "Uploaded Letterhead"}
                    </span>
                  </div>
                </div>

                <div className="blueRule" />

                <h3>EMD EXEMPTION DECLARATION</h3>

                <div className="previewText">
                  <p>
                    To,
                    <br />
                    <b>
                      {form.departmentName ||
                        "Department / Buyer Organisation"}
                    </b>
                  </p>

                  <p>
                    <b>Subject:</b> EMD Exemption Declaration against
                    Bid No.{" "}
                    <strong>
                      {form.bidNumber || "GEM/2026/B/XXXXXXX"}
                    </strong>
                  </p>

                  <p>Dear Sir/Madam,</p>

                  <p>
                    We,{" "}
                    <strong>
                      {form.companyName || "Company Name"}
                    </strong>
                    , request consideration of EMD exemption in
                    connection with the referenced bid.
                  </p>

                  <p>
                    The exemption is being claimed on the basis of{" "}
                    <strong>
                      {form.exemptionBasis || "Exemption Basis"}
                    </strong>
                    , with Registration / Certificate No.{" "}
                    <strong>
                      {form.registrationNumber ||
                        "Registration Number"}
                    </strong>
                    .
                  </p>

                  <p>
                    The claim remains subject to the applicable bid
                    conditions and verification by the buyer.
                  </p>
                </div>

                <div className="exemptionBadge">
                  <Icon name="shield" size={18} />

                  <div>
                    <span>EXEMPTION BASIS</span>
                    <strong>
                      {form.exemptionBasis ||
                        "Enter exemption basis"}
                    </strong>
                  </div>
                </div>

                <div className="signature">
                  <span>For</span>
                  <strong>
                    {form.companyName || "Company Name"}
                  </strong>

                  <div className="signatureSpace" />

                  <b>
                    {form.signatoryName ||
                      "Authorized Signatory"}
                  </b>

                  <small>
                    {form.designation || "Designation"}
                  </small>

                  <small>
                    Place: {form.place || "Place"}
                  </small>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <Icon name="shield" size={20} />
              </div>

              <div>
                <strong>User-declared exemption basis</strong>
                <p>
                  The generator does not automatically assume MSME,
                  Startup or any other exemption status.
                </p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <Icon name="document" size={19} />
              </div>

              <div>
                <strong>Editable Word output</strong>
                <p>
                  Review the generated declaration before signing and
                  uploading it with your bid.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <style jsx>{`
        .page {
          --blue: #0756b8;
          --blue2: #0a77e8;
          --ink: #142033;
          --line: #e4eaf1;
          min-height: 100vh;
          color: var(--ink);
          background: #f5f8fc;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        .heroSection {
          position: relative;
          overflow: hidden;
          padding: 40px 0 74px;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 22%,
              rgba(42, 160, 255, 0.2),
              transparent 29%
            ),
            linear-gradient(
              120deg,
              #031427,
              #052b53 58%,
              #07457f
            );
        }

        .gridPattern {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.4) 1px,
              transparent 1px
            );
          background-size: 48px 48px;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
        }

        .orbOne {
          width: 260px;
          height: 260px;
          right: -100px;
          top: -130px;
          background: rgba(50, 171, 255, 0.09);
        }

        .orbTwo {
          width: 170px;
          height: 170px;
          left: -80px;
          bottom: -100px;
          background: rgba(60, 145, 255, 0.08);
        }

        .back {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #a9c5df;
          font-size: 11px;
          font-weight: 700;
          text-decoration: none;
        }

        .back:hover {
          color: white;
        }

        .hero {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 42px;
        }

        .heroIcon {
          width: 72px;
          height: 72px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(99, 185, 255, 0.2);
          border-radius: 20px;
          color: #69c1ff;
          background: rgba(69, 166, 255, 0.1);
        }

        .eyebrow {
          margin-bottom: 7px;
          color: #6fc4ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(30px, 4vw, 45px);
          letter-spacing: -1.6px;
        }

        .hero h1 span {
          color: #7bc9ff;
        }

        .hero p {
          max-width: 700px;
          margin: 9px 0 0;
          color: #aec5da;
          font-size: 13px;
          line-height: 1.65;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 14px;
        }

        .tags span {
          padding: 5px 9px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          color: #bdd5e9;
          background: rgba(255, 255, 255, 0.055);
          font-size: 8px;
          font-weight: 700;
        }

        .content {
          padding: 55px 0 90px;
        }

        .layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(330px, 0.85fr);
          gap: 28px;
          align-items: start;
        }

        .formCard,
        .previewCard,
        .infoCard {
          border: 1px solid var(--line);
          background: white;
          box-shadow: 0 12px 35px rgba(20, 49, 80, 0.05);
        }

        .formCard {
          padding: 31px;
          border-radius: 20px;
        }

        .modeGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .uploadBox {
          margin-top: 14px;
        }

        .uploadBox input {
          display: none;
        }

        .uploadBox label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border: 1px dashed #aac7e4;
          border-radius: 13px;
          background: #f8fbff;
          cursor: pointer;
        }

        .uploadIcon {
          width: 42px;
          height: 42px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dfebf7;
          border-radius: 10px;
          color: var(--blue);
          background: white;
        }

        .uploadCopy {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .uploadCopy strong {
          color: #213950;
          font-size: 10px;
        }

        .uploadCopy span {
          margin-top: 3px;
          color: #8795a5;
          font-size: 8px;
        }

        .uploadCopy small {
          margin-top: 3px;
          color: #a0abb7;
          font-size: 7px;
        }

        .uploadBox b {
          padding: 7px 10px;
          border: 1px solid #d9e7f5;
          border-radius: 7px;
          color: var(--blue);
          background: white;
          font-size: 8px;
        }

        .divider {
          height: 1px;
          margin: 29px 0;
          background: #edf1f5;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
          margin-top: 20px;
        }

        .full {
          grid-column: 1 / -1;
        }

        .textareaLabel {
          display: block;
          margin-bottom: 7px;
          color: #435469;
          font-size: 9px;
          font-weight: 800;
        }

        em {
          color: #e14e4e;
          font-style: normal;
        }

        textarea {
          width: 100%;
          min-height: 80px;
          padding: 12px 13px;
          resize: vertical;
          outline: none;
          border: 1px solid #dfe6ee;
          border-radius: 10px;
          color: #23364d;
          background: #fbfcfe;
          font: inherit;
          font-size: 11px;
        }

        textarea:focus {
          border-color: var(--blue2);
          background: white;
          box-shadow: 0 0 0 3px rgba(10, 119, 232, 0.05);
        }

        .confirmationBox {
          display: flex;
          gap: 13px;
          margin-top: 25px;
          padding: 17px;
          border: 1px solid #dbe9f6;
          border-radius: 13px;
          background: #f6faff;
        }

        .confirmationIcon {
          width: 39px;
          height: 39px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e5f2ff;
        }

        .confirmationBox strong {
          color: #20384f;
          font-size: 10px;
        }

        .confirmationBox p {
          margin: 5px 0 11px;
          color: #738397;
          font-size: 8px;
          line-height: 1.55;
        }

        .confirm {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          cursor: pointer;
        }

        .confirm input {
          margin-top: 1px;
          accent-color: var(--blue);
        }

        .confirm span {
          color: #43566c;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.45;
        }

        .message {
          margin-top: 18px;
          padding: 11px 13px;
          border-radius: 9px;
          font-size: 9px;
          font-weight: 700;
        }

        .message.success {
          border: 1px solid #d1efdd;
          color: #177c48;
          background: #edf9f2;
        }

        .message.error {
          border: 1px solid #f3d8d8;
          color: #ad3d3d;
          background: #fff3f3;
        }

        .generate {
          width: 100%;
          height: 50px;
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border: 0;
          border-radius: 11px;
          color: white;
          background: linear-gradient(
            135deg,
            var(--blue),
            var(--blue2)
          );
          font-size: 11px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(7, 86, 184, 0.17);
        }

        .generate:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .note {
          margin: 10px 0 0;
          text-align: center;
          color: #98a4b2;
          font-size: 8px;
        }

        .previewColumn {
          position: sticky;
          top: 25px;
        }

        .previewCard {
          overflow: hidden;
          border-radius: 20px;
        }

        .previewHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
          border-bottom: 1px solid #e8edf2;
        }

        .previewHeader > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .previewHeader span {
          color: #8795a6;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .previewHeader strong {
          margin-top: 3px;
          color: #20354d;
          font-size: 11px;
        }

        .ready {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 8px;
          border-radius: 999px;
          color: #198a50;
          background: #edf9f2;
          font-size: 7px;
          font-weight: 800;
        }

        .ready i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #20a760;
        }

        .paper {
          width: calc(100% - 34px);
          min-height: 590px;
          margin: 17px;
          padding: 28px;
          border: 1px solid #e3e8ee;
          background: white;
          box-shadow: 0 10px 30px rgba(22, 48, 76, 0.06);
        }

        .paperBrand {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .brandMark {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: white;
          background: var(--blue);
          font-size: 11px;
          font-weight: 900;
        }

        .paperBrand > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .paperBrand strong {
          color: #1a3048;
          font-size: 9px;
        }

        .paperBrand span {
          color: #8b98a7;
          font-size: 6px;
        }

        .blueRule {
          height: 2px;
          margin: 14px 0 25px;
          background: linear-gradient(
            90deg,
            var(--blue),
            #53b8ff
          );
        }

        .paper h3 {
          margin: 0 0 24px;
          text-align: center;
          color: #1c2e42;
          font-size: 11px;
          text-decoration: underline;
        }

        .previewText {
          color: #46576a;
          font-size: 8px;
          line-height: 1.8;
        }

        .previewText p {
          margin: 0 0 14px;
        }

        .previewText strong,
        .previewText b {
          color: #273a50;
        }

        .exemptionBadge {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 20px 0;
          padding: 12px;
          border: 1px solid #dceaf7;
          border-radius: 10px;
          color: var(--blue);
          background: #f5faff;
        }

        .exemptionBadge div {
          display: flex;
          flex-direction: column;
        }

        .exemptionBadge span {
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .exemptionBadge strong {
          margin-top: 2px;
          color: #173a5c;
          font-size: 9px;
        }

        .signature {
          display: flex;
          flex-direction: column;
          margin-top: 30px;
          color: #4c5c6e;
          font-size: 8px;
        }

        .signature strong,
        .signature b {
          color: #25384e;
        }

        .signatureSpace {
          height: 40px;
        }

        .signature small {
          margin-top: 2px;
          color: #7e8c9d;
          font-size: 7px;
        }

        .infoCard {
          display: flex;
          gap: 11px;
          margin-top: 14px;
          padding: 16px;
          border-radius: 13px;
        }

        .infoIcon {
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .infoCard strong {
          color: #233a52;
          font-size: 9px;
        }

        .infoCard p {
          margin: 4px 0 0;
          color: #8794a4;
          font-size: 8px;
          line-height: 1.5;
        }

        @media (max-width: 950px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .previewColumn {
            position: static;
          }
        }

        @media (max-width: 650px) {
          .container {
            width: calc(100% - 24px);
          }

          .hero {
            align-items: flex-start;
          }

          .heroIcon {
            width: 55px;
            height: 55px;
          }

          .formCard {
            padding: 21px;
          }

          .modeGrid,
          .formGrid {
            grid-template-columns: 1fr;
          }

          .full {
            grid-column: auto;
          }
        }
      `}</style>
    </main>
  );
}

function SectionHeader({
  label,
  title,
  description,
  step,
}: {
  label: string;
  title: string;
  description: string;
  step: string;
}) {
  return (
    <div className="section">
      <div>
        <span>{label}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <b>{step}</b>

      <style jsx>{`
        .section {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
        }

        .section > div {
          max-width: 570px;
        }

        span {
          color: #0756b8;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        h2 {
          margin: 5px 0 0;
          color: #142b45;
          font-size: 19px;
        }

        p {
          margin: 6px 0 0;
          color: #8491a1;
          font-size: 9px;
          line-height: 1.55;
        }

        b {
          color: #e2eaf3;
          font-size: 30px;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}

function ModeCard({
  active,
  icon,
  title,
  description,
  onClick,
}: {
  active: boolean;
  icon: "document" | "upload";
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`mode ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="icon">
        <Icon name={icon} />
      </div>

      <div className="copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

      <i>
        {active && <Icon name="check" size={14} />}
      </i>

      <style jsx>{`
        .mode {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 16px;
          border: 1px solid #dfe7ef;
          border-radius: 13px;
          text-align: left;
          background: #fbfcfe;
          cursor: pointer;
          transition: 0.2s;
        }

        .mode:hover {
          border-color: #afd1f4;
          transform: translateY(-1px);
        }

        .mode.active {
          border-color: #0a72d9;
          background: #f2f8ff;
          box-shadow: 0 0 0 3px rgba(10, 114, 217, 0.05);
        }

        .icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #0756b8;
          background: #e9f4ff;
        }

        .copy {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        strong {
          color: #1d334c;
          font-size: 11px;
        }

        span {
          margin-top: 4px;
          color: #8390a1;
          font-size: 8px;
          line-height: 1.4;
        }

        i {
          width: 21px;
          height: 21px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #cbd7e3;
          border-radius: 50%;
          color: white;
          font-style: normal;
        }

        .active i {
          border-color: #0756b8;
          background: #0756b8;
        }
      `}</style>
    </button>
  );
}

function Field({
  label,
  name,
  value,
  placeholder,
  type = "text",
  required = false,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div>
      <label>
        {label}
        {required && (
          <>
            {" "}
            <em>*</em>
          </>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />

      <style jsx>{`
        label {
          display: block;
          margin-bottom: 7px;
          color: #435469;
          font-size: 9px;
          font-weight: 800;
        }

        em {
          color: #e14e4e;
          font-style: normal;
        }

        input {
          width: 100%;
          height: 43px;
          padding: 0 13px;
          outline: none;
          border: 1px solid #dfe6ee;
          border-radius: 10px;
          color: #23364d;
          background: #fbfcfe;
          font-size: 11px;
        }

        input:focus {
          border-color: #0a77e8;
          background: white;
          box-shadow: 0 0 0 3px rgba(10, 119, 232, 0.05);
        }

        input::placeholder {
          color: #a0aab6;
        }
      `}</style>
    </div>
  );
}