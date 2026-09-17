"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "document"
  | "shield"
  | "verify"
  | "folder"
  | "search"
  | "edit"
  | "send"
  | "headset"
  | "spark"
  | "phone"
  | "layers"
  | "filecheck"
  | "rupee";

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
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </>
      )}

      {name === "check" && <path d="m5 12 4 4L19 6" />}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "verify" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </>
      )}

      {name === "folder" && (
        <>
          <path d="M3 6h7l2 2h9v11H3z" />
          <path d="M3 10h18" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m16.5 16.5 4 4" />
        </>
      )}

      {name === "edit" && (
        <>
          <path d="M4 20h4l11-11-4-4L4 16z" />
          <path d="m13.5 6.5 4 4" />
        </>
      )}

      {name === "send" && (
        <>
          <path d="m3 4 18 8-18 8 4-8z" />
          <path d="M7 12h14" />
        </>
      )}

      {name === "headset" && (
        <>
          <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 13h3v6H5a1 1 0 0 1-1-1z" />
          <path d="M20 13h-3v6h2a1 1 0 0 0 1-1z" />
          <path d="M17 19c0 1.2-1.2 2-3 2h-2" />
        </>
      )}

      {name === "spark" && (
        <>
          <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2z" />
          <path d="m18 14 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7z" />
        </>
      )}

      {name === "phone" && (
        <path d="M6.5 3h3l1.3 4-2 1.5c1.2 2.8 3 4.6 5.8 5.8l1.5-2 4 1.3v3c0 2-1.5 3.4-3.5 3.4C9.2 20 4 14.8 4 7.5 4 5.5 5 3 6.5 3Z" />
      )}

      {name === "layers" && (
        <>
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      )}

      {name === "filecheck" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="m9 15 2 2 4-5" />
        </>
      )}

      {name === "rupee" && (
        <>
          <path d="M6 5h12" />
          <path d="M6 9h12" />
          <path d="M7 5c7 0 7 8 0 8h2l7 7" />
        </>
      )}
    </svg>
  );
}

const documentationServices: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    number: "01",
    icon: "layers",
    title: "Technical Bid Preparation",
    text: "Assistance in organising technical documents, specifications, declarations and supporting information required by the tender.",
  },
  {
    number: "02",
    icon: "rupee",
    title: "Financial Bid Assistance",
    text: "Guidance in organising applicable commercial information and understanding financial submission requirements.",
  },
  {
    number: "03",
    icon: "filecheck",
    title: "Document Verification",
    text: "Review of submitted documentation for completeness, consistency and alignment with stated tender requirements.",
  },
  {
    number: "04",
    icon: "shield",
    title: "Eligibility Compliance Check",
    text: "Structured review of applicable eligibility criteria and the supporting documents requested in the tender.",
  },
  {
    number: "05",
    icon: "search",
    title: "Tender Requirement Analysis",
    text: "Tender conditions, document requirements and important submission instructions are identified and organised.",
  },
  {
    number: "06",
    icon: "verify",
    title: "Final Bid Review",
    text: "A final documentation review helps identify missing information before the applicable submission stage.",
  },
];

const process: {
  step: string;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    step: "01",
    icon: "search",
    title: "Requirement Review",
    text: "Tender documentation and submission requirements are identified.",
  },
  {
    step: "02",
    icon: "folder",
    title: "Document Collection",
    text: "Applicable business, technical and supporting documents are organised.",
  },
  {
    step: "03",
    icon: "edit",
    title: "Bid Preparation",
    text: "Documents and bid information are prepared in a structured format.",
  },
  {
    step: "04",
    icon: "verify",
    title: "Final Review",
    text: "The documentation set is reviewed before the applicable submission stage.",
  },
];

export default function BidDocumentationPage() {
  return (
    <main className="page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="heroGrid" />
        <div className="heroOrb orbOne" />
        <div className="heroOrb orbTwo" />

        <div className="container heroLayout">
          <div className="heroContent">
            <div className="eyebrow">
              <span>
                <Icon name="spark" size={13} />
              </span>
              BIDAXIS • BID DOCUMENTATION
            </div>

            <h1>
              Build Better Bids With
              <span> Structured Documentation.</span>
            </h1>

            <p className="heroText">
              Professional bid documentation support for organising
              technical documents, reviewing tender requirements,
              checking eligibility information and preparing a
              structured bid submission.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Get Documentation Support
                <Icon name="arrow" size={16} />
              </Link>

              <a href="#process" className="secondaryButton">
                View Documentation Process
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Requirement Review
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Document Preparation
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Final Review
              </div>
            </div>
          </div>

          {/* =================================================
              DOCUMENT WORKSPACE GRAPHIC
          ================================================= */}

          <div className="heroVisual">
            <div className="visualGlow" />

            <div className="documentWorkspace">
              <div className="workspaceHeader">
                <div className="workspaceBrand">
                  <div className="workspaceBrandIcon">
                    <Icon name="folder" size={20} />
                  </div>

                  <div>
                    <span>BID WORKSPACE</span>
                    <strong>Documentation Manager</strong>
                  </div>
                </div>

                <div className="reviewBadge">
                  <i />
                  In Review
                </div>
              </div>

              <div className="completionPanel">
                <div className="completionTop">
                  <div>
                    <span>DOCUMENT READINESS</span>
                    <strong>Bid Documentation</strong>
                  </div>

                  <div className="completionScore">
                    <strong>75%</strong>
                    <span>READY</span>
                  </div>
                </div>

                <div className="progressBar">
                  <span />
                </div>

                <div className="progressMeta">
                  <span>Requirements</span>
                  <span>Documents</span>
                  <span>Review</span>
                  <span>Submit</span>
                </div>
              </div>

              <div className="documentGrid">
                <DocumentCard
                  icon="document"
                  label="TECHNICAL"
                  title="Technical Bid"
                  status="Prepared"
                  complete
                />

                <DocumentCard
                  icon="shield"
                  label="ELIGIBILITY"
                  title="Compliance Docs"
                  status="Reviewed"
                  complete
                />

                <DocumentCard
                  icon="rupee"
                  label="FINANCIAL"
                  title="Commercial Bid"
                  status="In Progress"
                />
              </div>

              <div className="checklistPanel">
                <div className="checklistHeader">
                  <span>DOCUMENT CHECKLIST</span>
                  <strong>3 / 4 Reviewed</strong>
                </div>

                <ChecklistRow
                  title="Eligibility documents"
                  status="Verified"
                  done
                />

                <ChecklistRow
                  title="Technical documentation"
                  status="Reviewed"
                  done
                />

                <ChecklistRow
                  title="Required declarations"
                  status="Prepared"
                  done
                />

                <ChecklistRow
                  title="Final bid review"
                  status="Pending"
                />
              </div>

              <div className="workspaceFooter">
                <div className="supportUser">
                  <div className="supportAvatar">
                    <Icon name="headset" size={17} />
                  </div>

                  <div>
                    <span>BIDAXIS SUPPORT</span>
                    <strong>Documentation Assistance</strong>
                  </div>
                </div>

                <div className="available">
                  <i />
                  Available
                </div>
              </div>
            </div>

            <div className="floatCard floatTop">
              <div className="floatIcon">
                <Icon name="shield" size={17} />
              </div>

              <div>
                <span>COMPLIANCE</span>
                <strong>Requirement Review</strong>
              </div>
            </div>

            <div className="floatCard floatBottom">
              <div className="floatIcon">
                <Icon name="filecheck" size={17} />
              </div>

              <div>
                <span>FINAL CHECK</span>
                <strong>Documentation Review</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="intro">
        <div className="container introLayout">
          <div className="introContent">
            <SectionLabel
              icon="document"
              text="BID DOCUMENTATION SUPPORT"
            />

            <h2>
              Accurate documentation is
              <span> central to tender participation.</span>
            </h2>

            <p>
              Tender submissions can require multiple technical,
              commercial and eligibility-related documents. BidAxis
              helps businesses understand these requirements, organise
              applicable information and prepare documentation for the
              tender process.
            </p>

            <div className="benefitList">
              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Technical bid preparation
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Financial bid assistance
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Document verification
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Final bid review
              </div>
            </div>
          </div>

          {/* DOCUMENT FLOW */}

          <div className="documentFlowPanel">
            <div className="flowHeader">
              <div>
                <span>DOCUMENT WORKFLOW</span>
                <strong>Requirement to Ready Bid</strong>
              </div>

              <div className="flowHeaderIcon">
                <Icon name="filecheck" size={21} />
              </div>
            </div>

            <div className="flowVisual">
              <FlowItem
                icon="search"
                title="Review"
                text="Tender requirements"
              />

              <div className="flowConnector">
                <span />
                <Icon name="arrow" size={12} />
              </div>

              <FlowItem
                icon="folder"
                title="Organise"
                text="Bid documents"
              />

              <div className="flowConnector">
                <span />
                <Icon name="arrow" size={12} />
              </div>

              <FlowItem
                icon="verify"
                title="Check"
                text="Final documentation"
              />
            </div>

            <div className="flowFooter">
              <div>
                <span>SUPPORT MODEL</span>
                <strong>Structured documentation assistance</strong>
              </div>

              <div className="bidaxisBadge">
                <Icon name="shield" size={14} />
                BidAxis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENTATION SERVICES
      ===================================================== */}

      <section className="servicesSection">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="folder"
              text="DOCUMENTATION SERVICES"
              centered
            />

            <h2>
              Everything Your Bid Needs,
              <span> Organised.</span>
            </h2>

            <p>
              Structured assistance across the major documentation
              stages involved in government tender participation.
            </p>
          </div>

          <div className="servicesGrid">
            {documentationServices.map((service) => (
              <article
                className="serviceCard"
                key={service.number}
              >
                <span className="serviceNumber">
                  {service.number}
                </span>

                <div className="serviceIcon">
                  <Icon name={service.icon} size={23} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <div className="serviceFooter">
                  <span>
                    <Icon name="check" size={12} />
                    Documentation Support
                  </span>

                  <Icon name="arrow" size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="processSection" id="process">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="layers"
              text="OUR DOCUMENTATION PROCESS"
              centered
            />

            <h2>
              From Tender Requirements to
              <span> Final Review</span>
            </h2>

            <p>
              A clear four-stage workflow for organising and reviewing
              your tender documentation.
            </p>
          </div>

          <div className="processWrapper">
            <div className="processLine">
              <span />
            </div>

            <div className="processGrid">
              {process.map((item) => (
                <article className="processCard" key={item.step}>
                  <div className="processIcon">
                    <Icon name={item.icon} size={22} />
                  </div>

                  <span className="stepLabel">
                    STEP {item.step}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DOCUMENTATION
      ===================================================== */}

      <section className="whySection">
        <div className="whyGrid" />

        <div className="container whyLayout">
          <div className="whyContent">
            <div className="darkLabel">
              <span>
                <Icon name="shield" size={13} />
              </span>
              BIDAXIS DOCUMENTATION
            </div>

            <h2>
              Keep your tender documentation
              <span> clear and organised.</span>
            </h2>

            <p>
              Our documentation workflow is designed to help businesses
              understand tender requirements, organise applicable
              documents and review their submission material before the
              applicable bid deadline.
            </p>

            <Link href="/contact" className="whiteButton">
              Discuss Your Bid
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="whyCards">
            <WhyCard
              icon="search"
              title="Requirement Analysis"
              text="Identify applicable document and submission requirements from the tender."
            />

            <WhyCard
              icon="folder"
              title="Document Organisation"
              text="Keep technical, eligibility and commercial documentation structured."
            />

            <WhyCard
              icon="shield"
              title="Compliance Review"
              text="Review documentation against the requirements stated in the tender."
            />

            <WhyCard
              icon="verify"
              title="Final Check"
              text="Review the documentation set before the applicable submission stage."
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ctaSection">
        <div className="container">
          <div className="ctaCard">
            <div className="ctaGrid" />

            <div className="ctaContent">
              <div className="ctaIcon">
                <Icon name="filecheck" size={27} />
              </div>

              <div>
                <span>NEED BID DOCUMENTATION SUPPORT?</span>

                <h2>
                  Prepare your next bid with
                  <strong> BidAxis.</strong>
                </h2>

                <p>
                  Connect with our team for assistance with tender
                  requirements, bid documents and final documentation
                  review.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Get Documentation Help
                <Icon name="arrow" size={15} />
              </Link>

              <a
                href="tel:+918882537520"
                className="ctaSecondary"
              >
                <Icon name="phone" size={15} />
                8882537520
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          --blue: #0756b8;
          --blue2: #0a77e8;
          --navy: #061b35;
          --ink: #142033;
          --muted: #718096;
          --line: #e3eaf2;

          overflow: hidden;
          color: var(--ink);
          background: #ffffff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 105px;
          color: #ffffff;
          background:
            radial-gradient(
              circle at 82% 34%,
              rgba(31, 151, 255, 0.2),
              transparent 28%
            ),
            linear-gradient(
              120deg,
              #031427 0%,
              #05284d 52%,
              #0756a5 100%
            );
        }

        .heroGrid,
        .whyGrid,
        .ctaGrid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .heroGrid {
          opacity: 0.55;
          mask-image: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.9),
            transparent 80%
          );
        }

        .heroOrb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .orbOne {
          width: 420px;
          height: 420px;
          top: -230px;
          right: -130px;
          border: 1px solid rgba(92, 186, 255, 0.12);
        }

        .orbTwo {
          width: 260px;
          height: 260px;
          left: -150px;
          bottom: -160px;
          background: rgba(23, 133, 225, 0.08);
        }

        .heroLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(430px, 0.88fr);
          gap: 72px;
          align-items: center;
        }

        .heroContent {
          max-width: 680px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #78caff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .eyebrow > span {
          width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(115, 199, 255, 0.18);
          border-radius: 8px;
          background: rgba(59, 165, 242, 0.1);
        }

        .hero h1 {
          max-width: 680px;
          margin: 18px 0 0;
          font-size: clamp(42px, 5vw, 64px);
          line-height: 1.04;
          letter-spacing: -2.6px;
        }

        .hero h1 span {
          color: #74c8ff;
        }

        .heroText {
          max-width: 600px;
          margin: 20px 0 0;
          color: #afc5d9;
          font-size: 14px;
          line-height: 1.75;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 29px;
        }

        .primaryButton,
        .secondaryButton {
          min-height: 47px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 19px;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .primaryButton {
          color: #ffffff;
          background: linear-gradient(
            135deg,
            #0873df,
            #1796f5
          );
          box-shadow: 0 14px 27px rgba(5, 113, 219, 0.25);
        }

        .secondaryButton {
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #d9e9f7;
          background: rgba(255, 255, 255, 0.06);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-2px);
        }

        .heroTrust {
          display: flex;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 27px;
          color: #9db8cf;
          font-size: 8px;
          font-weight: 700;
        }

        .heroTrust > div {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .heroTrust > div > span {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #67c6ff;
          background: rgba(74, 178, 246, 0.1);
        }

        /* =====================================================
           DOCUMENT WORKSPACE
        ===================================================== */

        .heroVisual {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualGlow {
          position: absolute;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: rgba(21, 136, 230, 0.14);
          filter: blur(65px);
        }

        .documentWorkspace {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 475px;
          padding: 21px;
          border: 1px solid rgba(143, 205, 255, 0.17);
          border-radius: 22px;
          background: rgba(7, 35, 64, 0.9);
          box-shadow:
            0 35px 70px rgba(0, 9, 24, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .workspaceHeader,
        .completionTop,
        .workspaceFooter,
        .checklistHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .workspaceBrand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .workspaceBrandIcon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(102, 193, 255, 0.18);
          border-radius: 11px;
          color: #68c1ff;
          background: rgba(58, 160, 232, 0.11);
        }

        .workspaceBrand > div:last-child,
        .completionTop > div:first-child,
        .supportUser > div:last-child,
        .floatCard > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .workspaceBrand span,
        .completionTop span,
        .supportUser span,
        .floatCard span {
          color: #7394af;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .workspaceBrand strong {
          margin-top: 3px;
          color: #ffffff;
          font-size: 11px;
        }

        .reviewBadge,
        .available {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid rgba(78, 184, 255, 0.14);
          border-radius: 999px;
          color: #77c9ff;
          background: rgba(43, 147, 221, 0.08);
          font-size: 7px;
          font-weight: 800;
        }

        .reviewBadge i,
        .available i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #55c1ff;
          box-shadow: 0 0 0 4px rgba(85, 193, 255, 0.08);
        }

        .completionPanel {
          margin-top: 20px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
        }

        .completionTop > div:first-child strong {
          margin-top: 3px;
          color: #d7e5f1;
          font-size: 9px;
        }

        .completionScore {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border: 3px solid #168bd6;
          border-radius: 50%;
          background: rgba(16, 106, 177, 0.08);
        }

        .completionScore strong {
          color: #7dceff;
          font-size: 10px;
          line-height: 1;
        }

        .completionScore span {
          margin-top: 2px;
          font-size: 4px;
        }

        .progressBar {
          height: 4px;
          margin-top: 14px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }

        .progressBar span {
          display: block;
          width: 75%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #0876dd,
            #56c3ff
          );
        }

        .progressMeta {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          color: #718da5;
          font-size: 5px;
          font-weight: 700;
        }

        .documentGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .checklistPanel {
          margin-top: 10px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
        }

        .checklistHeader {
          margin-bottom: 5px;
        }

        .checklistHeader span {
          color: #6687a3;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .checklistHeader strong {
          color: #75c7ff;
          font-size: 6px;
        }

        .workspaceFooter {
          margin-top: 10px;
          padding: 7px 3px 1px;
        }

        .supportUser {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .supportAvatar {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #65bdff;
          background: #0d4778;
        }

        .supportUser strong {
          margin-top: 2px;
          color: #cadbea;
          font-size: 7px;
        }

        .floatCard {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid rgba(165, 214, 255, 0.16);
          border-radius: 11px;
          background: rgba(8, 41, 72, 0.96);
          box-shadow: 0 18px 35px rgba(0, 12, 30, 0.25);
        }

        .floatIcon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #66c0ff;
          background: rgba(56, 161, 235, 0.12);
        }

        .floatCard strong {
          margin-top: 2px;
          color: #dceaf5;
          font-size: 7px;
        }

        .floatTop {
          top: 12px;
          right: -35px;
        }

        .floatBottom {
          left: -38px;
          bottom: 15px;
        }

        /* =====================================================
           INTRO
        ===================================================== */

        .intro {
          padding: 90px 0;
          background: #ffffff;
        }

        .introLayout {
          display: grid;
          grid-template-columns: 1fr 0.88fr;
          gap: 80px;
          align-items: center;
        }

        .introContent h2,
        .sectionHeading h2,
        .whyContent h2 {
          margin: 13px 0 0;
          color: #102941;
          font-size: clamp(29px, 3vw, 40px);
          line-height: 1.12;
          letter-spacing: -1.3px;
        }

        .introContent h2 span,
        .sectionHeading h2 span {
          color: var(--blue);
        }

        .introContent > p {
          max-width: 600px;
          margin: 16px 0 0;
          color: #718194;
          font-size: 12px;
          line-height: 1.8;
        }

        .benefitList {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-top: 25px;
        }

        .benefitList > div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #41566c;
          font-size: 9px;
          font-weight: 700;
        }

        .benefitList > div > span {
          width: 24px;
          height: 24px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .documentFlowPanel {
          overflow: hidden;
          padding: 21px;
          border: 1px solid #e0e8f0;
          border-radius: 19px;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(10, 119, 232, 0.07),
              transparent 30%
            ),
            #fbfdff;
          box-shadow: 0 20px 45px rgba(20, 52, 84, 0.08);
        }

        .flowHeader,
        .flowFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .flowHeader > div:first-child,
        .flowFooter > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .flowHeader span,
        .flowFooter span {
          color: #8d9bab;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .flowHeader strong {
          margin-top: 3px;
          color: #1d3853;
          font-size: 11px;
        }

        .flowHeaderIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e9f4ff;
        }

        .flowVisual {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 7px;
          margin: 30px 0;
        }

        .flowConnector {
          display: flex;
          align-items: center;
          color: #8cb6dc;
        }

        .flowConnector span {
          width: 18px;
          height: 1px;
          background: #cbdced;
        }

        .flowFooter {
          padding-top: 15px;
          border-top: 1px solid #e9eef4;
        }

        .flowFooter strong {
          margin-top: 2px;
          color: #40566d;
          font-size: 8px;
        }

        .bidaxisBadge {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 8px;
          border-radius: 7px;
          color: #21724b;
          background: #edf8f2;
          font-size: 7px;
          font-weight: 800;
        }

        /* =====================================================
           SERVICES
        ===================================================== */

        .servicesSection {
          padding: 90px 0;
          background: linear-gradient(
            180deg,
            #f6f9fd,
            #f2f7fc
          );
        }

        .sectionHeading {
          max-width: 680px;
          margin: 0 auto 38px;
          text-align: center;
        }

        .sectionHeading p {
          max-width: 560px;
          margin: 12px auto 0;
          color: #7c8a9b;
          font-size: 11px;
          line-height: 1.65;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .serviceCard {
          position: relative;
          overflow: hidden;
          padding: 22px;
          border: 1px solid #e0e8f0;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 9px 25px rgba(20, 50, 80, 0.04);
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .serviceCard:hover {
          transform: translateY(-5px);
          border-color: #bedaf4;
          box-shadow: 0 20px 38px rgba(20, 50, 80, 0.09);
        }

        .serviceNumber {
          position: absolute;
          top: 18px;
          right: 20px;
          color: #e2ebf4;
          font-size: 24px;
          font-weight: 900;
        }

        .serviceIcon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .serviceCard h3 {
          margin: 18px 0 0;
          color: #19334d;
          font-size: 12px;
        }

        .serviceCard > p {
          min-height: 48px;
          margin: 8px 0 0;
          color: #7c8b9b;
          font-size: 9px;
          line-height: 1.65;
        }

        .serviceFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 17px;
          padding-top: 14px;
          border-top: 1px solid #edf1f5;
          color: var(--blue);
        }

        .serviceFooter > span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #46709a;
          font-size: 7px;
          font-weight: 800;
        }

        /* =====================================================
           PROCESS
        ===================================================== */

        .processSection {
          padding: 90px 0 100px;
          background: #ffffff;
        }

        .processWrapper {
          position: relative;
          margin-top: 50px;
        }

        .processLine {
          position: absolute;
          z-index: 0;
          top: 27px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: #e2eaf2;
        }

        .processLine span {
          display: block;
          width: 76%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #0a6ed0,
            #66c7ff
          );
        }

        .processGrid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .processCard {
          text-align: center;
        }

        .processIcon {
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          border: 5px solid #ffffff;
          border-radius: 50%;
          color: #ffffff;
          background: linear-gradient(
            135deg,
            #0756b8,
            #1593ef
          );
          box-shadow: 0 8px 18px rgba(7, 86, 184, 0.18);
        }

        .stepLabel {
          display: block;
          margin-top: 15px;
          color: var(--blue);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .processCard h3 {
          margin: 6px 0 0;
          color: #213a52;
          font-size: 11px;
        }

        .processCard p {
          max-width: 210px;
          margin: 7px auto 0;
          color: #8290a0;
          font-size: 8px;
          line-height: 1.55;
        }

        /* =====================================================
           WHY
        ===================================================== */

        .whySection {
          position: relative;
          overflow: hidden;
          padding: 85px 0;
          color: #ffffff;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(49, 160, 241, 0.15),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #04172c,
              #07345f
            );
        }

        .whyGrid {
          opacity: 0.4;
        }

        .whyLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .darkLabel {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6fc6ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .darkLabel > span {
          width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(106, 195, 255, 0.16);
          border-radius: 8px;
          background: rgba(69, 166, 236, 0.1);
        }

        .whyContent h2 {
          color: #ffffff;
        }

        .whyContent h2 span {
          color: #6fc6ff;
        }

        .whyContent > p {
          margin: 15px 0 0;
          color: #a8bfd3;
          font-size: 11px;
          line-height: 1.75;
        }

        .whiteButton {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 15px;
          border-radius: 9px;
          color: #06345f;
          background: #ffffff;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .whiteButton:hover {
          transform: translateY(-2px);
        }

        .whyCards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ctaSection {
          padding: 70px 0 85px;
          background: #f5f8fc;
        }

        .ctaCard {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 30px;
          border-radius: 20px;
          color: #ffffff;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(82, 184, 255, 0.2),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #0756b8,
              #0a77e8
            );
          box-shadow: 0 22px 45px rgba(7, 86, 184, 0.18);
        }

        .ctaGrid {
          opacity: 0.4;
          background-size: 35px 35px;
        }

        .ctaContent,
        .ctaActions {
          position: relative;
          z-index: 2;
        }

        .ctaContent {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ctaIcon {
          width: 55px;
          height: 55px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.1);
        }

        .ctaContent > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .ctaContent span {
          color: #bfe4ff;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .ctaContent h2 {
          margin: 4px 0 0;
          font-size: 21px;
        }

        .ctaContent h2 strong {
          color: #d7efff;
        }

        .ctaContent p {
          max-width: 570px;
          margin: 5px 0 0;
          color: #d3e7f8;
          font-size: 8px;
          line-height: 1.5;
        }

        .ctaActions {
          flex: 0 0 auto;
          display: flex;
          gap: 8px;
        }

        .ctaPrimary,
        .ctaSecondary {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0 14px;
          border-radius: 9px;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
        }

        .ctaPrimary {
          color: #0756b8;
          background: #ffffff;
        }

        .ctaSecondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .heroLayout,
          .introLayout,
          .whyLayout {
            grid-template-columns: 1fr;
          }

          .heroVisual {
            width: 100%;
            max-width: 620px;
            margin: 0 auto;
          }

          .servicesGrid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {
          .hero {
            padding: 70px 0;
          }

          .heroLayout {
            gap: 45px;
          }

          .floatTop,
          .floatBottom {
            display: none;
          }

          .servicesGrid,
          .whyCards {
            grid-template-columns: 1fr;
          }

          .processGrid {
            grid-template-columns: 1fr 1fr;
            gap: 35px 15px;
          }

          .processLine {
            display: none;
          }

          .ctaCard {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .container {
            width: calc(100% - 24px);
          }

          .hero h1 {
            font-size: 36px;
            letter-spacing: -1.5px;
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .heroVisual {
            min-height: auto;
          }

          .documentWorkspace {
            padding: 15px;
          }

          .documentGrid {
            grid-template-columns: 1fr;
          }

          .benefitList {
            grid-template-columns: 1fr;
          }

          .flowVisual {
            grid-template-columns: 1fr;
          }

          .flowConnector {
            justify-content: center;
            transform: rotate(90deg);
          }

          .processGrid {
            grid-template-columns: 1fr;
          }

          .ctaContent {
            align-items: flex-start;
          }

          .ctaActions {
            width: 100%;
            flex-direction: column;
          }

          .ctaPrimary,
          .ctaSecondary {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SectionLabel({
  icon,
  text,
  centered = false,
}: {
  icon: IconName;
  text: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`sectionLabel ${
        centered ? "centered" : ""
      }`}
    >
      <span>
        <Icon name={icon} size={13} />
      </span>

      {text}

      <style jsx>{`
        .sectionLabel {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0756b8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .sectionLabel.centered {
          justify-content: center;
        }

        .sectionLabel > span {
          width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d5e8f9;
          border-radius: 8px;
          background: #eaf5ff;
        }
      `}</style>
    </div>
  );
}

function DocumentCard({
  icon,
  label,
  title,
  status,
  complete = false,
}: {
  icon: IconName;
  label: string;
  title: string;
  status: string;
  complete?: boolean;
}) {
  return (
    <div className="documentCard">
      <div className="documentIcon">
        <Icon name={icon} size={17} />
      </div>

      <span>{label}</span>
      <strong>{title}</strong>

      <small className={complete ? "complete" : ""}>
        <i />
        {status}
      </small>

      <style jsx>{`
        .documentCard {
          padding: 11px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.035);
        }

        .documentIcon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          border-radius: 8px;
          color: #6bc3ff;
          background: rgba(50, 155, 230, 0.12);
        }

        span {
          display: block;
          color: #6687a3;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        strong {
          display: block;
          margin-top: 3px;
          color: #d8e7f3;
          font-size: 7px;
        }

        small {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 7px;
          color: #e0b760;
          font-size: 5px;
          font-weight: 800;
        }

        small i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #e0b760;
        }

        small.complete {
          color: #65d296;
        }

        small.complete i {
          background: #65d296;
        }
      `}</style>
    </div>
  );
}

function ChecklistRow({
  title,
  status,
  done = false,
}: {
  title: string;
  status: string;
  done?: boolean;
}) {
  return (
    <div className="checkRow">
      <div className="left">
        <span className={done ? "done" : ""}>
          {done ? (
            <Icon name="check" size={10} />
          ) : (
            <i />
          )}
        </span>

        <strong>{title}</strong>
      </div>

      <small className={done ? "doneText" : ""}>
        {status}
      </small>

      <style jsx>{`
        .checkRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding: 6px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.045);
        }

        .left {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .left > span {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: #6f879b;
          background: rgba(255, 255, 255, 0.05);
        }

        .left > span.done {
          color: #64d298;
          background: rgba(72, 199, 132, 0.09);
        }

        .left i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #6f879b;
        }

        strong {
          color: #b9cddd;
          font-size: 6px;
        }

        small {
          color: #d3ad62;
          font-size: 5px;
          font-weight: 800;
        }

        small.doneText {
          color: #67d39a;
        }
      `}</style>
    </div>
  );
}

function FlowItem({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="flowItem">
      <div className="flowIcon">
        <Icon name={icon} size={18} />
      </div>

      <strong>{title}</strong>
      <span>{text}</span>

      <style jsx>{`
        .flowItem {
          min-width: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .flowIcon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d8e8f7;
          border-radius: 11px;
          color: #0756b8;
          background: #ffffff;
          box-shadow: 0 6px 15px rgba(20, 55, 90, 0.05);
        }

        strong {
          margin-top: 8px;
          color: #284158;
          font-size: 8px;
        }

        span {
          margin-top: 2px;
          color: #8b98a6;
          font-size: 6px;
        }
      `}</style>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <article className="whyCard">
      <div className="whyIcon">
        <Icon name={icon} size={20} />
      </div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <style jsx>{`
        .whyCard {
          display: flex;
          gap: 11px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.045);
          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .whyCard:hover {
          transform: translateY(-2px);
          border-color: rgba(105, 196, 255, 0.17);
          background: rgba(255, 255, 255, 0.065);
        }

        .whyIcon {
          width: 37px;
          height: 37px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #6fc5ff;
          background: rgba(62, 161, 231, 0.1);
        }

        strong {
          color: #e7f1f8;
          font-size: 9px;
        }

        p {
          margin: 4px 0 0;
          color: #8faac0;
          font-size: 7px;
          line-height: 1.5;
        }
      `}</style>
    </article>
  );
}