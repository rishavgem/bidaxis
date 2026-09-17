"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";

type Mode = "bidaxis" | "letterhead";

type FormDataState = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  tenderTitle: string;
  departmentName: string;
  signatoryName: string;
  designation: string;
  place: string;
  date: string;
};

const initialForm: FormDataState = {
  companyName: "",
  companyAddress: "",
  bidNumber: "",
  tenderTitle: "",
  departmentName: "",
  signatoryName: "",
  designation: "",
  place: "",
  date: new Date().toISOString().split("T")[0],
};

function Icon({
  name,
  size = 20,
}: {
  name: "arrow" | "document" | "upload" | "shield" | "download" | "check";
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const icons = {
    arrow: (
      <>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4M8 8l4-4 4 4" />
        <path d="M4 15v5h16v-5" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v12M8 12l4 4 4-4" />
        <path d="M4 20h16" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{icons[name]}</svg>;
}

export default function NonBlacklistPage() {
  const [mode, setMode] = useState<Mode>("bidaxis");
  const [form, setForm] = useState<FormDataState>(initialForm);
  const [letterhead, setLetterhead] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleLetterhead(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setLetterhead(null);
      return;
    }

    if (!file.name.toLowerCase().endsWith(".docx")) {
      setMessage("Please upload a Word .docx file only.");
      event.target.value = "";
      setLetterhead(null);
      return;
    }

    setMessage("");
    setLetterhead(file);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (mode === "letterhead" && !letterhead) {
      setMessage("Please upload your company Word letterhead.");
      return;
    }

    try {
      setLoading(true);

      const body = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        body.append(key, value);
      });

      body.append("mode", mode);

      if (letterhead) {
        body.append("letterhead", letterhead);
      }

      const response = await fetch("/api/tools/non-blacklist", {
        method: "POST",
        body,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);

        throw new Error(
          data?.error || "Unable to generate the certificate."
        );
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `Non-Blacklist-Certificate-${form.companyName
        .trim()
        .replace(/[^a-z0-9]+/gi, "-") || "BidAxis"}.docx`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.URL.revokeObjectURL(url);

      setMessage("Certificate generated successfully.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="top">
        <div className="grid" />

        <div className="container">
          <Link href="/tools" className="back">
            <Icon name="arrow" size={16} />
            All Document Tools
          </Link>

          <div className="hero">
            <div className="heroIcon">
              <Icon name="shield" size={31} />
            </div>

            <div>
              <div className="eyebrow">BIDAXIS DOCUMENT STUDIO</div>

              <h1>Non-Blacklist Certificate</h1>

              <p>
                Generate a professional declaration confirming that
                your company has not been blacklisted or debarred.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container layout">
          <form className="formCard" onSubmit={handleSubmit}>
            <div className="sectionHeader">
              <div>
                <span>DOCUMENT SETUP</span>
                <h2>Choose your document format</h2>
              </div>

              <div className="step">01</div>
            </div>

            <div className="modeGrid">
              <button
                type="button"
                className={`mode ${mode === "bidaxis" ? "active" : ""}`}
                onClick={() => setMode("bidaxis")}
              >
                <div className="modeIcon">
                  <Icon name="document" />
                </div>

                <div>
                  <strong>BidAxis Template</strong>
                  <span>
                    Generate using our professional document format.
                  </span>
                </div>

                <i>
                  {mode === "bidaxis" && <Icon name="check" size={14} />}
                </i>
              </button>

              <button
                type="button"
                className={`mode ${
                  mode === "letterhead" ? "active" : ""
                }`}
                onClick={() => setMode("letterhead")}
              >
                <div className="modeIcon">
                  <Icon name="upload" />
                </div>

                <div>
                  <strong>Company Letterhead</strong>
                  <span>
                    Upload your existing Word letterhead (.docx).
                  </span>
                </div>

                <i>
                  {mode === "letterhead" && (
                    <Icon name="check" size={14} />
                  )}
                </i>
              </button>
            </div>

            {mode === "letterhead" && (
              <div className="uploadBox">
                <input
                  id="letterhead"
                  type="file"
                  accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleLetterhead}
                />

                <label htmlFor="letterhead">
                  <div className="uploadIcon">
                    <Icon name="upload" size={24} />
                  </div>

                  <div>
                    <strong>
                      {letterhead
                        ? letterhead.name
                        : "Upload company letterhead"}
                    </strong>

                    <span>
                      Word .docx only • No placeholder required
                    </span>
                  </div>

                  <b>{letterhead ? "Change" : "Browse"}</b>
                </label>
              </div>
            )}

            <div className="divider" />

            <div className="sectionHeader detailsHeader">
              <div>
                <span>COMPANY & TENDER DETAILS</span>
                <h2>Enter certificate information</h2>
              </div>

              <div className="step">02</div>
            </div>

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
                <label>
                  Company Address <em>*</em>
                </label>

                <textarea
                  name="companyAddress"
                  value={form.companyAddress}
                  onChange={updateField}
                  placeholder="Enter registered / office address"
                  required
                />
              </div>

              <Field
                label="Tender / Bid Title"
                name="tenderTitle"
                value={form.tenderTitle}
                onChange={updateField}
                placeholder="Supply of..."
              />

              <Field
                label="Department / Buyer"
                name="departmentName"
                value={form.departmentName}
                onChange={updateField}
                placeholder="Department / Organisation"
                required
              />

              <Field
                label="Authorized Signatory"
                name="signatoryName"
                value={form.signatoryName}
                onChange={updateField}
                placeholder="Full name"
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

            {message && (
              <div
                className={`message ${
                  message.includes("successfully") ? "success" : "error"
                }`}
              >
                {message}
              </div>
            )}

            <button className="generate" type="submit" disabled={loading}>
              <Icon name="download" size={19} />

              {loading
                ? "Generating Document..."
                : "Generate & Download DOCX"}
            </button>

            <p className="privacy">
              Your document is generated only from the information
              provided in this form.
            </p>
          </form>

          <aside className="previewColumn">
            <div className="previewCard">
              <div className="previewTop">
                <div>
                  <span>LIVE DOCUMENT PREVIEW</span>
                  <strong>Non-Blacklist Certificate</strong>
                </div>

                <div className="status">
                  <i />
                  Ready
                </div>
              </div>

              <div className="paper">
                <div className="paperBrand">
                  {mode === "bidaxis" ? (
                    <>
                      <div className="brandMark">B</div>

                      <div>
                        <strong>BidAxis</strong>
                        <span>Document Studio</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="brandMark custom">
                        <Icon name="document" size={15} />
                      </div>

                      <div>
                        <strong>Your Company</strong>
                        <span>Uploaded Letterhead</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="paperRule" />

                <h3>NON-BLACKLIST CERTIFICATE</h3>

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
                    <b>Subject:</b> Non-Blacklist Declaration against
                    Bid No.{" "}
                    <strong>
                      {form.bidNumber || "GEM/2026/B/XXXXXXX"}
                    </strong>
                  </p>

                  <p>
                    We,{" "}
                    <strong>
                      {form.companyName || "Company Name"}
                    </strong>
                    , having our office at{" "}
                    <strong>
                      {form.companyAddress || "Company Address"}
                    </strong>
                    , hereby declare that our company has not been
                    blacklisted or debarred by any Government
                    Department / PSU / Autonomous Body as applicable
                    to the bid requirements.
                  </p>

                  <p>
                    We further confirm that the information furnished
                    in this declaration is true and correct to the
                    best of our knowledge and belief.
                  </p>
                </div>

                <div className="signature">
                  <span>For</span>
                  <strong>
                    {form.companyName || "Company Name"}
                  </strong>

                  <div className="signSpace" />

                  <b>
                    {form.signatoryName || "Authorized Signatory"}
                  </b>

                  <small>
                    {form.designation || "Designation"}
                  </small>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <Icon name="shield" size={19} />
              </div>

              <div>
                <strong>Editable Word document</strong>
                <p>
                  The generated .docx can be reviewed and edited before
                  final tender submission.
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
          --navy: #061b35;
          --ink: #142033;
          --muted: #68758a;
          --line: #e4eaf1;
          min-height: 100vh;
          background: #f5f8fc;
          color: var(--ink);
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        .top {
          position: relative;
          overflow: hidden;
          padding: 40px 0 74px;
          color: white;
          background:
            radial-gradient(
              circle at 80% 25%,
              rgba(34, 154, 255, 0.2),
              transparent 28%
            ),
            linear-gradient(120deg, #031427, #052b53 58%, #07457f);
        }

        .grid {
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
          width: 70px;
          height: 70px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19px;
          color: #69c1ff;
          background: rgba(69, 166, 255, 0.1);
          border: 1px solid rgba(99, 185, 255, 0.2);
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

        .hero p {
          max-width: 650px;
          margin: 9px 0 0;
          color: #aec5da;
          font-size: 13px;
          line-height: 1.6;
        }

        .content {
          padding: 55px 0 90px;
        }

        .layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr);
          gap: 28px;
          align-items: start;
        }

        .formCard,
        .previewCard,
        .infoCard {
          background: white;
          border: 1px solid var(--line);
          box-shadow: 0 12px 35px rgba(20, 49, 80, 0.05);
        }

        .formCard {
          border-radius: 20px;
          padding: 31px;
        }

        .sectionHeader {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
        }

        .sectionHeader span {
          color: var(--blue);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .sectionHeader h2 {
          margin: 5px 0 0;
          color: #142b45;
          font-size: 19px;
        }

        .step {
          color: #e2eaf3;
          font-size: 30px;
          font-weight: 900;
        }

        .modeGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .mode {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 16px;
          text-align: left;
          border: 1px solid #dfe7ef;
          border-radius: 13px;
          background: #fbfcfe;
          cursor: pointer;
          transition: 0.2s;
        }

        .mode:hover {
          border-color: #afd1f4;
        }

        .mode.active {
          border-color: #0a72d9;
          background: #f2f8ff;
          box-shadow: 0 0 0 3px rgba(10, 114, 217, 0.05);
        }

        .modeIcon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: #e9f4ff;
          color: var(--blue);
        }

        .mode > div:nth-child(2) {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .mode strong {
          color: #1d334c;
          font-size: 11px;
        }

        .mode span {
          margin-top: 4px;
          color: #8390a1;
          font-size: 8px;
          line-height: 1.4;
        }

        .mode i {
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

        .mode.active i {
          border-color: var(--blue);
          background: var(--blue);
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
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: white;
          color: var(--blue);
          border: 1px solid #dfebf7;
        }

        .uploadBox label > div:nth-child(2) {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .uploadBox strong {
          color: #213950;
          font-size: 10px;
        }

        .uploadBox span {
          margin-top: 3px;
          color: #8795a5;
          font-size: 8px;
        }

        .uploadBox b {
          padding: 7px 10px;
          border-radius: 7px;
          background: white;
          color: var(--blue);
          font-size: 8px;
          border: 1px solid #d9e7f5;
        }

        .divider {
          height: 1px;
          margin: 29px 0;
          background: #edf1f5;
        }

        .detailsHeader {
          margin-bottom: 20px;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .full {
          grid-column: 1 / -1;
        }

        .full label {
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
          resize: vertical;
          padding: 12px 13px;
          outline: none;
          border: 1px solid #dfe6ee;
          border-radius: 10px;
          background: #fbfcfe;
          color: #23364d;
          font: inherit;
          font-size: 11px;
        }

        textarea:focus {
          border-color: #0a77e8;
          background: white;
          box-shadow: 0 0 0 3px rgba(10, 119, 232, 0.05);
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
          background: linear-gradient(135deg, #0756b8, #0a77e8);
          color: white;
          font-size: 11px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(7, 86, 184, 0.17);
        }

        .generate:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .privacy {
          margin: 10px 0 0;
          text-align: center;
          color: #98a4b2;
          font-size: 8px;
        }

        .message {
          margin-top: 18px;
          padding: 11px 13px;
          border-radius: 9px;
          font-size: 9px;
          font-weight: 700;
        }

        .message.success {
          color: #177c48;
          background: #edf9f2;
          border: 1px solid #d1efdd;
        }

        .message.error {
          color: #ad3d3d;
          background: #fff3f3;
          border: 1px solid #f3d8d8;
        }

        .previewColumn {
          position: sticky;
          top: 25px;
        }

        .previewCard {
          overflow: hidden;
          border-radius: 20px;
        }

        .previewTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          padding: 18px 20px;
          border-bottom: 1px solid #e8edf2;
        }

        .previewTop > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .previewTop span {
          color: #8795a6;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .previewTop strong {
          margin-top: 3px;
          color: #20354d;
          font-size: 11px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 5px 8px;
          border-radius: 999px;
          background: #edf9f2;
          color: #198a50;
          font-size: 7px;
          font-weight: 800;
        }

        .status i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #20a760;
        }

        .paper {
          width: calc(100% - 34px);
          min-height: 540px;
          margin: 17px;
          padding: 28px;
          background: white;
          border: 1px solid #e3e8ee;
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
          background: var(--blue);
          color: white;
          font-size: 11px;
          font-weight: 900;
        }

        .brandMark.custom {
          background: #eef5fc;
          color: var(--blue);
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
          margin-top: 1px;
          color: #8b98a7;
          font-size: 6px;
        }

        .paperRule {
          height: 2px;
          margin: 14px 0 25px;
          background: linear-gradient(90deg, var(--blue), #53b8ff);
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

        .signature {
          display: flex;
          flex-direction: column;
          margin-top: 32px;
          color: #4c5c6e;
          font-size: 8px;
        }

        .signature strong {
          margin-top: 2px;
          color: #25384e;
        }

        .signSpace {
          height: 42px;
        }

        .signature b {
          color: #26394f;
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
          background: #eaf4ff;
          color: var(--blue);
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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="field">
      <label>
        {label} {required && <em>*</em>}
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
        .field label {
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
          background: #fbfcfe;
          color: #23364d;
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