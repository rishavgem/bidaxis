"use client";

import Link from "next/link";
import {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

type Mode = "bidaxis" | "letterhead";

type FormDataState = {
  companyName: string;
  companyAddress: string;
  bidNumber: string;
  productName: string;
  brandName: string;
  localContent: string;
  manufacturingLocation: string;
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
  productName: "",
  brandName: "",
  localContent: "",
  manufacturingLocation: "",
  departmentName: "",
  signatoryName: "",
  designation: "",
  place: "",
  date: new Date().toISOString().split("T")[0],
};

type IconName =
  | "arrow"
  | "document"
  | "upload"
  | "india"
  | "download"
  | "check";

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

  const icons: Record<IconName, React.ReactNode> = {
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

    india: (
      <>
        <path d="M7 3h10v18H7z" />
        <path d="M7 8h10M7 16h10" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 10v4M10 12h4" />
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

export default function MIICertificatePage() {
  const [mode, setMode] = useState<Mode>("bidaxis");

  const [form, setForm] =
    useState<FormDataState>(initialForm);

  const [letterhead, setLetterhead] =
    useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");

  function updateField(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
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
      setMessage(
        "Please upload a Microsoft Word .docx file only."
      );

      setMessageType("error");

      setLetterhead(null);

      event.target.value = "";

      return;
    }

    setLetterhead(file);

    setMessage("");
    setMessageType("");
  }

  function selectMode(selectedMode: Mode) {
    setMode(selectedMode);

    setMessage("");
    setMessageType("");
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setMessageType("");

    if (
      Number(form.localContent) < 0 ||
      Number(form.localContent) > 100
    ) {
      setMessage(
        "Local content percentage must be between 0 and 100."
      );

      setMessageType("error");

      return;
    }

    if (mode === "letterhead" && !letterhead) {
      setMessage(
        "Please upload your company Word letterhead."
      );

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
        "/api/tools/mii-certificate",
        {
          method: "POST",
          body,
        }
      );

      if (!response.ok) {
        const data = await response
          .json()
          .catch(() => null);

        throw new Error(
          data?.error ||
            "Unable to generate the MII certificate."
        );
      }

      const blob = await response.blob();

      const url =
        window.URL.createObjectURL(blob);

      const company =
        form.companyName
          .trim()
          .replace(/[^a-z0-9]+/gi, "-")
          .replace(/^-+|-+$/g, "") || "BidAxis";

      const anchor =
        document.createElement("a");

      anchor.href = url;

      anchor.download =
        `MII-Certificate-${company}.docx`;

      document.body.appendChild(anchor);

      anchor.click();

      anchor.remove();

      window.URL.revokeObjectURL(url);

      setMessage(
        "MII Certificate generated successfully."
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
      {/* ======================================================
          HERO
      ====================================================== */}

      <section className="top">
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
              <Icon name="india" size={32} />
            </div>

            <div className="heroCopy">
              <div className="eyebrow">
                BIDAXIS DOCUMENT STUDIO
              </div>

              <h1>
                Make in India{" "}
                <span>(MII) Certificate</span>
              </h1>

              <p>
                Create a professional Make in India and
                local-content declaration for GeM and
                government tender submissions.
              </p>

              <div className="heroTags">
                <span>GeM Ready</span>
                <span>Local Content</span>
                <span>Editable DOCX</span>
                <span>Letterhead Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          MAIN
      ====================================================== */}

      <section className="content">
        <div className="container layout">
          {/* ==================================================
              FORM
          ================================================== */}

          <form
            className="formCard"
            onSubmit={handleSubmit}
          >
            <div className="sectionHeader">
              <div>
                <span>DOCUMENT SETUP</span>

                <h2>
                  Choose your document format
                </h2>

                <p>
                  Use the BidAxis template or generate the
                  certificate on your existing Word
                  letterhead.
                </p>
              </div>

              <div className="step">01</div>
            </div>

            <div className="modeGrid">
              <button
                type="button"
                className={`mode ${
                  mode === "bidaxis"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectMode("bidaxis")
                }
              >
                <div className="modeIcon">
                  <Icon name="document" />
                </div>

                <div className="modeCopy">
                  <strong>
                    BidAxis Template
                  </strong>

                  <span>
                    Generate using the professional
                    BidAxis document format.
                  </span>
                </div>

                <i>
                  {mode === "bidaxis" && (
                    <Icon
                      name="check"
                      size={14}
                    />
                  )}
                </i>
              </button>

              <button
                type="button"
                className={`mode ${
                  mode === "letterhead"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectMode("letterhead")
                }
              >
                <div className="modeIcon">
                  <Icon name="upload" />
                </div>

                <div className="modeCopy">
                  <strong>
                    Company Letterhead
                  </strong>

                  <span>
                    Upload your existing Word
                    letterhead (.docx).
                  </span>
                </div>

                <i>
                  {mode === "letterhead" && (
                    <Icon
                      name="check"
                      size={14}
                    />
                  )}
                </i>
              </button>
            </div>

            {/* LETTERHEAD */}

            {mode === "letterhead" && (
              <div className="uploadBox">
                <input
                  id="letterhead"
                  type="file"
                  accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={
                    handleLetterhead
                  }
                />

                <label htmlFor="letterhead">
                  <div className="uploadIcon">
                    <Icon
                      name="upload"
                      size={24}
                    />
                  </div>

                  <div className="uploadCopy">
                    <strong>
                      {letterhead
                        ? letterhead.name
                        : "Upload company letterhead"}
                    </strong>

                    <span>
                      Microsoft Word .docx only
                    </span>

                    <small>
                      Your existing branding and
                      document formatting will be
                      retained.
                    </small>
                  </div>

                  <b>
                    {letterhead
                      ? "Change"
                      : "Browse"}
                  </b>
                </label>
              </div>
            )}

            <div className="divider" />

            {/* DETAILS */}

            <div className="sectionHeader detailsHeader">
              <div>
                <span>
                  COMPANY & TENDER DETAILS
                </span>

                <h2>
                  Enter certificate information
                </h2>

                <p>
                  These details will be inserted
                  automatically into your MII
                  certificate.
                </p>
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
                <label className="textareaLabel">
                  Company Address{" "}
                  <em>*</em>
                </label>

                <textarea
                  name="companyAddress"
                  value={
                    form.companyAddress
                  }
                  onChange={updateField}
                  placeholder="Enter registered / office address"
                  required
                />
              </div>

              <Field
                label="Product Name"
                name="productName"
                value={form.productName}
                onChange={updateField}
                placeholder="Product / Item offered"
                required
              />

              <Field
                label="Brand / Make"
                name="brandName"
                value={form.brandName}
                onChange={updateField}
                placeholder="Brand / Make"
                required
              />

              <Field
                label="Local Content (%)"
                name="localContent"
                value={form.localContent}
                onChange={updateField}
                placeholder="Example: 50"
                type="number"
                min="0"
                max="100"
                required
              />

              <Field
                label="Location of Local Value Addition"
                name="manufacturingLocation"
                value={
                  form.manufacturingLocation
                }
                onChange={updateField}
                placeholder="City, State"
                required
              />

              <div className="full">
                <Field
                  label="Department / Buyer Organisation"
                  name="departmentName"
                  value={
                    form.departmentName
                  }
                  onChange={updateField}
                  placeholder="Department / Organisation Name"
                  required
                />
              </div>

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
              <div
                className={`message ${messageType}`}
              >
                {message}
              </div>
            )}

            <button
              className="generate"
              type="submit"
              disabled={loading}
            >
              <Icon
                name="download"
                size={19}
              />

              {loading
                ? "Generating MII Certificate..."
                : "Generate & Download DOCX"}
            </button>

            <p className="privacy">
              Review the generated declaration
              against the applicable bid requirements
              before submission.
            </p>
          </form>

          {/* ==================================================
              PREVIEW
          ================================================== */}

          <aside className="previewColumn">
            <div className="previewCard">
              <div className="previewTop">
                <div>
                  <span>
                    LIVE DOCUMENT PREVIEW
                  </span>

                  <strong>
                    MII Certificate
                  </strong>
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
                      <div className="brandMark">
                        B
                      </div>

                      <div>
                        <strong>
                          BidAxis
                        </strong>

                        <span>
                          Document Studio
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="brandMark custom">
                        <Icon
                          name="document"
                          size={15}
                        />
                      </div>

                      <div>
                        <strong>
                          Your Company
                        </strong>

                        <span>
                          Uploaded Letterhead
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="paperRule" />

                <h3>
                  MAKE IN INDIA / LOCAL CONTENT
                  DECLARATION
                </h3>

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
                    <b>Subject:</b>{" "}
                    Declaration regarding Local
                    Content / Make in India
                    compliance against Bid No.{" "}

                    <strong>
                      {form.bidNumber ||
                        "GEM/2026/B/XXXXXXX"}
                    </strong>
                  </p>

                  <p>
                    Dear Sir/Madam,
                  </p>

                  <p>
                    We,{" "}
                    <strong>
                      {form.companyName ||
                        "Company Name"}
                    </strong>
                    , having our registered /
                    office address at{" "}

                    <strong>
                      {form.companyAddress ||
                        "Company Address"}
                    </strong>
                    , hereby declare that the
                    product offered by us against
                    the above bid, namely{" "}

                    <strong>
                      {form.productName ||
                        "Product Name"}
                    </strong>
                    , under the brand / make{" "}

                    <strong>
                      {form.brandName ||
                        "Brand Name"}
                    </strong>
                    , contains{" "}

                    <strong>
                      {form.localContent ||
                        "XX"}
                      %
                    </strong>{" "}
                    local content.
                  </p>

                  <p>
                    The location at which the local
                    value addition is carried out
                    is{" "}

                    <strong>
                      {form.manufacturingLocation ||
                        "Manufacturing / Value Addition Location"}
                    </strong>
                    .
                  </p>

                  <p>
                    We certify that the information
                    furnished above is true and
                    correct to the best of our
                    knowledge and belief.
                  </p>
                </div>

                <div className="signature">
                  <span>For</span>

                  <strong>
                    {form.companyName ||
                      "Company Name"}
                  </strong>

                  <div className="signSpace" />

                  <b>
                    {form.signatoryName ||
                      "Authorized Signatory"}
                  </b>

                  <small>
                    {form.designation ||
                      "Designation"}
                  </small>

                  <small>
                    Place:{" "}
                    {form.place || "Place"}
                  </small>
                </div>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon">
                <Icon
                  name="document"
                  size={19}
                />
              </div>

              <div>
                <strong>
                  Editable Word document
                </strong>

                <p>
                  The generated .docx can be
                  reviewed and edited before final
                  tender submission.
                </p>
              </div>
            </div>

            <div className="infoCard">
              <div className="infoIcon indiaInfo">
                <Icon
                  name="india"
                  size={19}
                />
              </div>

              <div>
                <strong>
                  Local-content declaration
                </strong>

                <p>
                  Enter the applicable local-content
                  percentage and value-addition
                  location for your offered product.
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
          width: min(
            1180px,
            calc(100% - 40px)
          );

          margin: auto;
        }

        /* HERO */

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
            radial-gradient(
              circle at 12% 75%,
              rgba(28, 117, 255, 0.13),
              transparent 26%
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
              rgba(
                  255,
                  255,
                  255,
                  0.4
                )
                1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(
                  255,
                  255,
                  255,
                  0.4
                )
                1px,
              transparent 1px
            );

          background-size: 48px 48px;
        }

        .orb {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }

        .orbOne {
          width: 250px;
          height: 250px;

          right: -90px;
          top: -120px;

          background: rgba(
            52,
            173,
            255,
            0.09
          );
        }

        .orbTwo {
          width: 160px;
          height: 160px;

          left: -80px;
          bottom: -100px;

          background: rgba(
            64,
            159,
            255,
            0.08
          );
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

          transition: 0.2s;
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

          background: rgba(
            69,
            166,
            255,
            0.1
          );

          border: 1px solid
            rgba(
              99,
              185,
              255,
              0.2
            );

          box-shadow:
            inset 0 0 20px
              rgba(
                71,
                172,
                255,
                0.06
              ),
            0 12px 30px
              rgba(0, 0, 0, 0.08);
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

          font-size: clamp(
            30px,
            4vw,
            45px
          );

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

        .heroTags {
          display: flex;
          flex-wrap: wrap;

          gap: 7px;

          margin-top: 14px;
        }

        .heroTags span {
          padding: 5px 9px;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          border-radius: 999px;

          background: rgba(
            255,
            255,
            255,
            0.055
          );

          color: #bdd5e9;

          font-size: 8px;
          font-weight: 700;
        }

        /* MAIN */

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
          background: white;

          border: 1px solid
            var(--line);

          box-shadow:
            0 12px 35px
              rgba(
                20,
                49,
                80,
                0.05
              );
        }

        .formCard {
          border-radius: 20px;

          padding: 31px;
        }

        .sectionHeader {
          display: flex;

          justify-content:
            space-between;

          gap: 20px;

          align-items: flex-start;
        }

        .sectionHeader > div:first-child {
          max-width: 570px;
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

        .sectionHeader p {
          margin: 6px 0 0;

          color: #8491a1;

          font-size: 9px;
          line-height: 1.55;
        }

        .step {
          color: #e2eaf3;

          font-size: 30px;
          font-weight: 900;
        }

        /* MODES */

        .modeGrid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

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

          border: 1px solid
            #dfe7ef;

          border-radius: 13px;

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

          box-shadow:
            0 0 0 3px
              rgba(
                10,
                114,
                217,
                0.05
              );
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

        .modeCopy {
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

          flex: 0 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid
            #cbd7e3;

          border-radius: 50%;

          color: white;

          font-style: normal;
        }

        .mode.active i {
          border-color: var(--blue);

          background: var(--blue);
        }

        /* UPLOAD */

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

          border: 1px dashed
            #aac7e4;

          border-radius: 13px;

          background: #f8fbff;

          cursor: pointer;

          transition: 0.2s;
        }

        .uploadBox label:hover {
          border-color: var(--blue);

          background: #f3f9ff;
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

          border: 1px solid
            #dfebf7;
        }

        .uploadCopy {
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

        .uploadBox small {
          margin-top: 3px;

          color: #a0abb7;

          font-size: 7px;
        }

        .uploadBox b {
          padding: 7px 10px;

          border-radius: 7px;

          background: white;

          color: var(--blue);

          font-size: 8px;

          border: 1px solid
            #d9e7f5;
        }

        .divider {
          height: 1px;

          margin: 29px 0;

          background: #edf1f5;
        }

        .detailsHeader {
          margin-bottom: 20px;
        }

        /* FORM */

        .formGrid {
          display: grid;

          grid-template-columns:
            1fr 1fr;

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

          resize: vertical;

          padding: 12px 13px;

          outline: none;

          border: 1px solid
            #dfe6ee;

          border-radius: 10px;

          background: #fbfcfe;

          color: #23364d;

          font: inherit;

          font-size: 11px;

          transition: 0.2s;
        }

        textarea:focus {
          border-color: #0a77e8;

          background: white;

          box-shadow:
            0 0 0 3px
              rgba(
                10,
                119,
                232,
                0.05
              );
        }

        textarea::placeholder {
          color: #a0aab6;
        }

        /* BUTTON */

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

          background:
            linear-gradient(
              135deg,
              #0756b8,
              #0a77e8
            );

          color: white;

          font-size: 11px;
          font-weight: 900;

          cursor: pointer;

          box-shadow:
            0 12px 24px
              rgba(
                7,
                86,
                184,
                0.17
              );

          transition: 0.2s;
        }

        .generate:hover:not(:disabled) {
          transform: translateY(-1px);

          box-shadow:
            0 15px 28px
              rgba(
                7,
                86,
                184,
                0.22
              );
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

          border: 1px solid
            #d1efdd;
        }

        .message.error {
          color: #ad3d3d;

          background: #fff3f3;

          border: 1px solid
            #f3d8d8;
        }

        /* PREVIEW */

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

          justify-content:
            space-between;

          align-items: center;

          gap: 15px;

          padding: 18px 20px;

          border-bottom: 1px solid
            #e8edf2;
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
          width: calc(
            100% - 34px
          );

          min-height: 570px;

          margin: 17px;

          padding: 28px;

          background: white;

          border: 1px solid
            #e3e8ee;

          box-shadow:
            0 10px 30px
              rgba(
                22,
                48,
                76,
                0.06
              );
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

          background:
            linear-gradient(
              90deg,
              var(--blue),
              #53b8ff
            );
        }

        .paper h3 {
          margin: 0 0 24px;

          text-align: center;

          color: #1c2e42;

          font-size: 10px;

          line-height: 1.45;

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

        .indiaInfo {
          background: #f0f7ff;
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

        @media (
          max-width: 950px
        ) {
          .layout {
            grid-template-columns:
              1fr;
          }

          .previewColumn {
            position: static;
          }
        }

        @media (
          max-width: 650px
        ) {
          .container {
            width: calc(
              100% - 24px
            );
          }

          .hero {
            align-items:
              flex-start;
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
            grid-template-columns:
              1fr;
          }

          .full {
            grid-column: auto;
          }

          .sectionHeader p {
            max-width: 260px;
          }
        }
      `}</style>
    </main>
  );
}

/* ==========================================================
   FIELD
========================================================== */

function Field({
  label,
  name,
  value,
  placeholder,
  type = "text",
  required = false,
  min,
  max,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: string;
  max?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
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
        min={min}
        max={max}
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

          border: 1px solid
            #dfe6ee;

          border-radius: 10px;

          background: #fbfcfe;

          color: #23364d;

          font-size: 11px;

          transition: 0.2s;
        }

        input:focus {
          border-color: #0a77e8;

          background: white;

          box-shadow:
            0 0 0 3px
              rgba(
                10,
                119,
                232,
                0.05
              );
        }

        input::placeholder {
          color: #a0aab6;
        }
      `}</style>
    </div>
  );
}