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
  departmentName: string;

  level1Name: string;
  level1Designation: string;
  level1Phone: string;
  level1Email: string;

  level2Name: string;
  level2Designation: string;
  level2Phone: string;
  level2Email: string;

  level3Name: string;
  level3Designation: string;
  level3Phone: string;
  level3Email: string;

  signatoryName: string;
  designation: string;
  place: string;
  date: string;
};

const initialForm: FormState = {
  companyName: "",
  companyAddress: "",
  bidNumber: "",
  departmentName: "",

  level1Name: "",
  level1Designation: "",
  level1Phone: "",
  level1Email: "",

  level2Name: "",
  level2Designation: "",
  level2Phone: "",
  level2Email: "",

  level3Name: "",
  level3Designation: "",
  level3Phone: "",
  level3Email: "",

  signatoryName: "",
  designation: "",
  place: "",
  date: new Date().toISOString().split("T")[0],
};

type IconName =
  | "arrow"
  | "matrix"
  | "document"
  | "upload"
  | "check"
  | "download"
  | "user"
  | "phone";

function Icon({
  name,
  size = 20,
}: {
  name: IconName;
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

  return (
    <svg {...common}>
      {name === "arrow" && (
        <>
          <path d="M19 12H5" />
          <path d="m12 19-7-7 7-7" />
        </>
      )}

      {name === "matrix" && (
        <>
          <circle cx="12" cy="5" r="2.5" />
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="18" r="2.5" />
          <path d="M12 7.5v4M12 11.5H6v4M12 11.5h6v4" />
        </>
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5M9 12h6M9 16h6" />
        </>
      )}

      {name === "upload" && (
        <>
          <path d="M12 16V4M8 8l4-4 4 4" />
          <path d="M4 15v5h16v-5" />
        </>
      )}

      {name === "check" && (
        <path d="m5 12 4 4L19 6" />
      )}

      {name === "download" && (
        <>
          <path d="M12 4v12M8 12l4 4 4-4" />
          <path d="M4 20h16" />
        </>
      )}

      {name === "user" && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c.8-4 3.4-6 8-6s7.2 2 8 6" />
        </>
      )}

      {name === "phone" && (
        <>
          <path d="M5 4h4l2 5-3 2c1.3 2.6 2.8 4.1 5.5 5.5l2-3 4.5 2V20c0 .6-.4 1-1 1C10 21 3 14 3 5c0-.6.4-1 1-1h1Z" />
        </>
      )}
    </svg>
  );
}

export default function EscalationMatrixPage() {
  const [mode, setMode] = useState<Mode>("bidaxis");
  const [form, setForm] = useState<FormState>(initialForm);
  const [letterhead, setLetterhead] = useState<File | null>(null);
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

    if (mode === "letterhead" && !letterhead) {
      setMessage("Please upload your company Word letterhead.");
      setMessageType("error");
      return;
    }

    try {
      setLoading(true);

      const body = new FormData();

      body.append("mode", mode);

      Object.entries(form).forEach(([key, value]) => {
        body.append(key, value);
      });

      if (mode === "letterhead" && letterhead) {
        body.append("letterhead", letterhead);
      }

      const response = await fetch(
        "/api/tools/escalation-matrix",
        {
          method: "POST",
          body,
        }
      );

      if (!response.ok) {
        const result = await response.json().catch(() => null);

        throw new Error(
          result?.error || "Unable to generate Escalation Matrix."
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
      anchor.download = `Escalation-Matrix-${company}.docx`;

      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();

      window.URL.revokeObjectURL(url);

      setMessage("Escalation Matrix generated successfully.");
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
        <div className="orb orb1" />
        <div className="orb orb2" />

        <div className="container">
          <Link href="/tools" className="back">
            <Icon name="arrow" size={16} />
            All Document Tools
          </Link>

          <div className="hero">
            <div className="heroIcon">
              <Icon name="matrix" size={34} />
            </div>

            <div>
              <div className="eyebrow">
                BIDAXIS DOCUMENT STUDIO
              </div>

              <h1>
                Escalation <span>Matrix</span>
              </h1>

              <p>
                Create a professional three-level escalation matrix
                containing the responsible contact persons for your
                GeM or government tender.
              </p>

              <div className="tags">
                <span>3-Level Escalation</span>
                <span>Contact Matrix</span>
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
              description="Use the BidAxis document template or your own company Word letterhead."
              step="01"
            />

            <div className="modeGrid">
              <ModeCard
                active={mode === "bidaxis"}
                icon="document"
                title="BidAxis Template"
                description="Generate a clean professional escalation matrix."
                onClick={() => selectMode("bidaxis")}
              />

              <ModeCard
                active={mode === "letterhead"}
                icon="upload"
                title="Company Letterhead"
                description="Generate on your existing .docx company letterhead."
                onClick={() => selectMode("letterhead")}
              />
            </div>

            {mode === "letterhead" && (
              <div className="uploadBox">
                <input
                  id="matrix-letterhead"
                  type="file"
                  accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleLetterhead}
                />

                <label htmlFor="matrix-letterhead">
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

                    <small>
                      No special placeholder is required.
                    </small>
                  </div>

                  <b>{letterhead ? "Change" : "Browse"}</b>
                </label>
              </div>
            )}

            <div className="divider" />

            <SectionHeader
              label="BID & COMPANY"
              title="Tender information"
              description="Enter the company and bid details for this escalation matrix."
              step="02"
            />

            <div className="formGrid sectionFields">
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
                  label="Department / Buyer Organisation"
                  name="departmentName"
                  value={form.departmentName}
                  onChange={updateField}
                  placeholder="Department / Organisation Name"
                  required
                />
              </div>
            </div>

            <div className="divider" />

            <SectionHeader
              label="ESCALATION CONTACTS"
              title="Configure three escalation levels"
              description="Add the contact person responsible at each escalation level."
              step="03"
            />

            <ContactLevel
              level="01"
              title="Primary Contact"
              subtitle="First point of contact"
              nameValue={form.level1Name}
              designationValue={form.level1Designation}
              phoneValue={form.level1Phone}
              emailValue={form.level1Email}
              nameField="level1Name"
              designationField="level1Designation"
              phoneField="level1Phone"
              emailField="level1Email"
              onChange={updateField}
            />

            <ContactLevel
              level="02"
              title="Secondary Escalation"
              subtitle="Escalate when Level 1 requires further support"
              nameValue={form.level2Name}
              designationValue={form.level2Designation}
              phoneValue={form.level2Phone}
              emailValue={form.level2Email}
              nameField="level2Name"
              designationField="level2Designation"
              phoneField="level2Phone"
              emailField="level2Email"
              onChange={updateField}
            />

            <ContactLevel
              level="03"
              title="Final Escalation"
              subtitle="Senior / final escalation point"
              nameValue={form.level3Name}
              designationValue={form.level3Designation}
              phoneValue={form.level3Phone}
              emailValue={form.level3Email}
              nameField="level3Name"
              designationField="level3Designation"
              phoneField="level3Phone"
              emailField="level3Email"
              onChange={updateField}
            />

            <div className="divider" />

            <SectionHeader
              label="AUTHORIZATION"
              title="Authorized signatory"
              description="Enter the person authorizing this escalation matrix."
              step="04"
            />

            <div className="formGrid sectionFields">
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

            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}

            <button
              className="generate"
              type="submit"
              disabled={loading}
            >
              <Icon name="download" size={19} />

              {loading
                ? "Generating Escalation Matrix..."
                : "Generate & Download DOCX"}
            </button>
          </form>

          <aside className="previewColumn">
            <div className="previewCard">
              <div className="previewHeader">
                <div>
                  <span>LIVE DOCUMENT PREVIEW</span>
                  <strong>Escalation Matrix</strong>
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
                        : "Company Letterhead"}
                    </span>
                  </div>
                </div>

                <div className="blueRule" />

                <h3>ESCALATION MATRIX</h3>

                <div className="meta">
                  <div>
                    <span>Company</span>
                    <b>{form.companyName || "Company Name"}</b>
                  </div>

                  <div>
                    <span>Bid No.</span>
                    <b>
                      {form.bidNumber ||
                        "GEM/2026/B/XXXXXXX"}
                    </b>
                  </div>
                </div>

                <div className="matrixPreview">
                  <PreviewContact
                    level="LEVEL 01"
                    title="Primary Contact"
                    name={form.level1Name}
                    designation={form.level1Designation}
                    phone={form.level1Phone}
                    email={form.level1Email}
                  />

                  <div className="connector">
                    <span />
                  </div>

                  <PreviewContact
                    level="LEVEL 02"
                    title="Secondary Escalation"
                    name={form.level2Name}
                    designation={form.level2Designation}
                    phone={form.level2Phone}
                    email={form.level2Email}
                  />

                  <div className="connector">
                    <span />
                  </div>

                  <PreviewContact
                    level="LEVEL 03"
                    title="Final Escalation"
                    name={form.level3Name}
                    designation={form.level3Designation}
                    phone={form.level3Phone}
                    email={form.level3Email}
                  />
                </div>

                <div className="previewNote">
                  The above contacts shall be approached sequentially
                  for matters requiring escalation in connection with
                  the referenced bid / contract.
                </div>

                <div className="signature">
                  <span>For</span>
                  <strong>
                    {form.companyName || "Company Name"}
                  </strong>

                  <div className="signatureSpace" />

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
                <Icon name="matrix" size={20} />
              </div>

              <div>
                <strong>Three-level escalation</strong>
                <p>
                  Provides a clear primary, secondary and final
                  escalation hierarchy.
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
                  Review and modify the generated .docx before tender
                  submission.
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
          color: white;
          background:
            radial-gradient(
              circle at 82% 22%,
              rgba(42, 160, 255, 0.2),
              transparent 29%
            ),
            linear-gradient(120deg, #031427, #052b53 58%, #07457f);
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

        .orb1 {
          width: 260px;
          height: 260px;
          right: -100px;
          top: -130px;
          background: rgba(50, 171, 255, 0.09);
        }

        .orb2 {
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
          border-radius: 20px;
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

        .hero h1 span {
          color: #7bc9ff;
        }

        .hero p {
          max-width: 690px;
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
          background: rgba(255, 255, 255, 0.055);
          color: #bdd5e9;
          font-size: 8px;
          font-weight: 700;
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
          border-radius: 10px;
          background: white;
          color: var(--blue);
          border: 1px solid #dfebf7;
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
          background: white;
          color: var(--blue);
          font-size: 8px;
        }

        .divider {
          height: 1px;
          margin: 29px 0;
          background: #edf1f5;
        }

        .sectionFields {
          margin-top: 20px;
        }

        .formGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
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
          background: #fbfcfe;
          color: #23364d;
          font: inherit;
          font-size: 11px;
        }

        textarea:focus {
          border-color: var(--blue2);
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
          color: white;
          background: linear-gradient(135deg, var(--blue), var(--blue2));
          font-size: 11px;
          font-weight: 900;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(7, 86, 184, 0.17);
        }

        .generate:disabled {
          opacity: 0.65;
          cursor: wait;
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
          min-height: 620px;
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
          margin: 14px 0 24px;
          background: linear-gradient(90deg, var(--blue), #53b8ff);
        }

        .paper h3 {
          margin: 0 0 21px;
          text-align: center;
          color: #1c2e42;
          font-size: 11px;
          text-decoration: underline;
        }

        .meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 20px;
        }

        .meta > div {
          padding: 8px;
          border: 1px solid #e7edf3;
          border-radius: 6px;
          background: #fbfcfe;
        }

        .meta span {
          display: block;
          color: #8a98a8;
          font-size: 6px;
        }

        .meta b {
          display: block;
          margin-top: 3px;
          color: #2b3f55;
          font-size: 7px;
        }

        .matrixPreview {
          margin-top: 12px;
        }

        .connector {
          height: 19px;
          display: flex;
          justify-content: center;
        }

        .connector span {
          width: 1px;
          height: 19px;
          background: #b9d6ef;
        }

        .previewNote {
          margin-top: 21px;
          padding: 10px;
          border-left: 2px solid var(--blue);
          background: #f6faff;
          color: #718093;
          font-size: 7px;
          line-height: 1.55;
        }

        .signature {
          display: flex;
          flex-direction: column;
          margin-top: 26px;
          color: #4c5c6e;
          font-size: 8px;
        }

        .signature strong,
        .signature b {
          color: #25384e;
        }

        .signatureSpace {
          height: 34px;
        }

        .signature small {
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

      <i>{active && <Icon name="check" size={14} />}</i>

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

function ContactLevel({
  level,
  title,
  subtitle,
  nameValue,
  designationValue,
  phoneValue,
  emailValue,
  nameField,
  designationField,
  phoneField,
  emailField,
  onChange,
}: {
  level: string;
  title: string;
  subtitle: string;
  nameValue: string;
  designationValue: string;
  phoneValue: string;
  emailValue: string;
  nameField: string;
  designationField: string;
  phoneField: string;
  emailField: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="contact">
      <div className="contactTop">
        <div className="number">{level}</div>

        <div>
          <strong>{title}</strong>
          <span>{subtitle}</span>
        </div>
      </div>

      <div className="fields">
        <Field
          label="Contact Person"
          name={nameField}
          value={nameValue}
          onChange={onChange}
          placeholder="Full Name"
          required
        />

        <Field
          label="Designation"
          name={designationField}
          value={designationValue}
          onChange={onChange}
          placeholder="Manager / Head"
          required
        />

        <Field
          label="Phone Number"
          name={phoneField}
          value={phoneValue}
          onChange={onChange}
          placeholder="+91 XXXXX XXXXX"
          type="tel"
          required
        />

        <Field
          label="Email Address"
          name={emailField}
          value={emailValue}
          onChange={onChange}
          placeholder="name@company.com"
          type="email"
          required
        />
      </div>

      <style jsx>{`
        .contact {
          margin-top: 17px;
          padding: 18px;
          border: 1px solid #e1e8f0;
          border-radius: 14px;
          background: #fbfcfe;
        }

        .contactTop {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .number {
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #0756b8;
          background: #e9f4ff;
          font-size: 9px;
          font-weight: 900;
        }

        .contactTop > div:last-child {
          display: flex;
          flex-direction: column;
        }

        strong {
          color: #20374f;
          font-size: 10px;
        }

        span {
          margin-top: 2px;
          color: #8b97a6;
          font-size: 8px;
        }

        .fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        @media (max-width: 650px) {
          .fields {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
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
          background: #fff;
          color: #23364d;
          font-size: 11px;
        }

        input:focus {
          border-color: #0a77e8;
          box-shadow: 0 0 0 3px rgba(10, 119, 232, 0.05);
        }

        input::placeholder {
          color: #a0aab6;
        }
      `}</style>
    </div>
  );
}

function PreviewContact({
  level,
  title,
  name,
  designation,
  phone,
  email,
}: {
  level: string;
  title: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
}) {
  return (
    <div className="contact">
      <div className="badge">{level}</div>

      <div className="details">
        <strong>{title}</strong>

        <b>{name || "Contact Person"}</b>

        <span>{designation || "Designation"}</span>

        <div className="contactLine">
          {phone || "+91 XXXXX XXXXX"}
        </div>

        <div className="contactLine">
          {email || "name@company.com"}
        </div>
      </div>

      <style jsx>{`
        .contact {
          display: flex;
          gap: 10px;
          padding: 11px;
          border: 1px solid #e3eaf1;
          border-radius: 8px;
          background: #fbfcfe;
        }

        .badge {
          width: 47px;
          height: 24px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          color: #0756b8;
          background: #eaf4ff;
          font-size: 6px;
          font-weight: 900;
        }

        .details {
          display: flex;
          flex-direction: column;
        }

        strong {
          color: #0756b8;
          font-size: 6px;
          text-transform: uppercase;
        }

        b {
          margin-top: 3px;
          color: #273b51;
          font-size: 8px;
        }

        span {
          margin-top: 1px;
          color: #7d8b9a;
          font-size: 6px;
        }

        .contactLine {
          margin-top: 3px;
          color: #526478;
          font-size: 6px;
        }
      `}</style>
    </div>
  );
}