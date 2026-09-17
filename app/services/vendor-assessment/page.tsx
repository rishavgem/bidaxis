"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "shield"
  | "document"
  | "search"
  | "building"
  | "target"
  | "chart"
  | "users"
  | "badge"
  | "clipboard"
  | "spark"
  | "phone"
  | "briefcase"
  | "verify";

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
          <path d="M9 12h6" />
          <path d="M9 16h6" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 5 5" />
        </>
      )}

      {name === "building" && (
        <>
          <path d="M4 21V5h10v16" />
          <path d="M14 9h6v12" />
          <path d="M7 8h3M7 12h3M7 16h3" />
          <path d="M17 12h1M17 16h1" />
        </>
      )}

      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </>
      )}

      {name === "chart" && (
        <>
          <path d="M4 20V11" />
          <path d="M10 20V6" />
          <path d="M16 20v-8" />
          <path d="M22 20H2" />
        </>
      )}

      {name === "users" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-4 2.5-6 6-6s6 2 6 6" />
          <circle cx="17" cy="9" r="2" />
          <path d="M16 14c3 0 5 2 5 5" />
        </>
      )}

      {name === "badge" && (
        <>
          <circle cx="12" cy="9" r="5" />
          <path d="m9 13-1 8 4-2 4 2-1-8" />
          <path d="m10 9 1.3 1.3L14 7.7" />
        </>
      )}

      {name === "clipboard" && (
        <>
          <path d="M7 5H5v16h14V5h-2" />
          <rect x="8" y="3" width="8" height="4" rx="1" />
          <path d="m8 12 2 2 4-4" />
          <path d="M8 18h7" />
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

      {name === "briefcase" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5h8v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </>
      )}

      {name === "verify" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </>
      )}
    </svg>
  );
}

const assessmentServices: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    number: "01",
    icon: "building",
    title: "Vendor Profile Evaluation",
    text: "Review business information, organizational profile and available supporting records relevant to procurement participation.",
  },
  {
    number: "02",
    icon: "shield",
    title: "Compliance Verification",
    text: "Review applicable eligibility and compliance requirements against the information and documents provided.",
  },
  {
    number: "03",
    icon: "document",
    title: "Documentation Review",
    text: "Organize and review procurement-related documents to identify missing, inconsistent or incomplete information.",
  },
  {
    number: "04",
    icon: "chart",
    title: "Capability Assessment",
    text: "Review declared operational and business capabilities against the requirements of the relevant opportunity.",
  },
  {
    number: "05",
    icon: "badge",
    title: "Quality Requirement Analysis",
    text: "Identify quality, certification and supporting-document requirements stated in the applicable procurement documents.",
  },
  {
    number: "06",
    icon: "target",
    title: "Procurement Readiness",
    text: "Bring profile, documentation and identified requirements together into a structured readiness review.",
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
    icon: "building",
    title: "Profile Review",
    text: "Understand your business profile and the procurement opportunity.",
  },
  {
    step: "02",
    icon: "clipboard",
    title: "Requirement Check",
    text: "Map available information against applicable requirements.",
  },
  {
    step: "03",
    icon: "search",
    title: "Gap Analysis",
    text: "Identify missing documents, information and readiness gaps.",
  },
  {
    step: "04",
    icon: "verify",
    title: "Readiness Review",
    text: "Prepare a structured view of your procurement readiness.",
  },
];

export default function VendorAssessmentPage() {
  return (
    <main className="page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="hero">
        <div className="heroGrid" />
        <div className="heroGlow glowOne" />
        <div className="heroGlow glowTwo" />

        <div className="container heroLayout">
          <div className="heroContent">
            <div className="eyebrow">
              <span>
                <Icon name="shield" size={14} />
              </span>
              BIDAXIS • VENDOR ASSESSMENT
            </div>

            <h1>
              Build a Stronger,
              <span> Procurement-Ready Profile.</span>
            </h1>

            <p className="heroText">
              Structured vendor assessment and documentation support
              designed to help businesses review their profile,
              understand procurement requirements and identify
              readiness gaps before participating in opportunities.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Request Assessment
                <Icon name="arrow" size={16} />
              </Link>

              <a href="#assessment-process" className="secondaryButton">
                View Assessment Process
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Profile Review
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Compliance Review
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Readiness Analysis
              </div>
            </div>
          </div>

          {/* =================================================
              GRAPHICAL VENDOR ASSESSMENT DASHBOARD
          ================================================= */}

          <div className="assessmentVisual">
            <div className="visualGlow" />

            <div className="assessmentDashboard">
              <div className="dashboardTop">
                <div className="dashboardTitle">
                  <div className="dashboardIcon">
                    <Icon name="building" size={21} />
                  </div>

                  <div>
                    <span>VENDOR ASSESSMENT</span>
                    <strong>Business Readiness Review</strong>
                  </div>
                </div>

                <div className="reviewBadge">
                  <i />
                  REVIEW
                </div>
              </div>

              <div className="companyCard">
                <div className="companyAvatar">
                  <Icon name="briefcase" size={22} />
                </div>

                <div className="companyInfo">
                  <span>VENDOR PROFILE</span>
                  <strong>Business Assessment</strong>
                  <small>
                    Procurement readiness overview
                  </small>
                </div>

                <div className="profileStatus">
                  <Icon name="shield" size={13} />
                  In Review
                </div>
              </div>

              <div className="readinessPanel">
                <div className="readinessHeader">
                  <div>
                    <span>ASSESSMENT OVERVIEW</span>
                    <strong>Readiness Areas</strong>
                  </div>

                  <div className="readinessIcon">
                    <Icon name="target" size={18} />
                  </div>
                </div>

                <div className="readinessRows">
                  <AssessmentRow
                    label="Business Profile"
                    width="92%"
                    status="Reviewed"
                  />

                  <AssessmentRow
                    label="Documentation"
                    width="78%"
                    status="Reviewing"
                  />

                  <AssessmentRow
                    label="Compliance"
                    width="84%"
                    status="Reviewing"
                  />

                  <AssessmentRow
                    label="Capability"
                    width="70%"
                    status="Check"
                  />
                </div>
              </div>

              <div className="dashboardMetrics">
                <Metric
                  icon="document"
                  label="DOCUMENTS"
                  value="Review"
                />

                <Metric
                  icon="shield"
                  label="COMPLIANCE"
                  value="Check"
                />

                <Metric
                  icon="target"
                  label="READINESS"
                  value="Assess"
                />
              </div>

              <div className="dashboardBottom">
                <div className="bottomLeft">
                  <div className="bottomIcon">
                    <Icon name="search" size={16} />
                  </div>

                  <div>
                    <span>GAP ANALYSIS</span>
                    <strong>
                      Identify missing requirements
                    </strong>
                  </div>
                </div>

                <div className="monitorBadge">
                  <i />
                  Analysis
                </div>
              </div>
            </div>

            <div className="floatingCard floatOne">
              <div className="floatingIcon">
                <Icon name="document" size={17} />
              </div>

              <div>
                <span>DOCUMENT REVIEW</span>
                <strong>Structured Check</strong>
              </div>
            </div>

            <div className="floatingCard floatTwo">
              <div className="floatingIcon">
                <Icon name="shield" size={17} />
              </div>

              <div>
                <span>COMPLIANCE</span>
                <strong>Requirement Mapping</strong>
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
              icon="building"
              text="VENDOR READINESS"
            />

            <h2>
              Strengthen your business
              <span> before you bid.</span>
            </h2>

            <p>
              Government and corporate procurement opportunities can
              include detailed eligibility, documentation, technical
              and compliance requirements.
            </p>

            <p>
              BidAxis helps businesses review the information they
              already have, understand applicable requirements and
              identify areas that may need attention before
              participation.
            </p>

            <div className="benefitList">
              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Business profile review
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Documentation check
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Requirement mapping
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Gap identification
              </div>
            </div>
          </div>

          {/* =================================================
              READINESS GRAPHIC
          ================================================= */}

          <div className="readinessBoard">
            <div className="boardHeader">
              <div>
                <span>PROCUREMENT READINESS</span>
                <strong>Assessment Framework</strong>
              </div>

              <div className="boardIcon">
                <Icon name="clipboard" size={21} />
              </div>
            </div>

            <div className="framework">
              <FrameworkItem
                icon="building"
                title="Profile"
                text="Business information"
              />

              <div className="frameworkArrow">
                <Icon name="arrow" size={13} />
              </div>

              <FrameworkItem
                icon="document"
                title="Documents"
                text="Supporting records"
              />

              <div className="frameworkArrow">
                <Icon name="arrow" size={13} />
              </div>

              <FrameworkItem
                icon="shield"
                title="Compliance"
                text="Requirement review"
              />
            </div>

            <div className="boardFooter">
              <div>
                <span>ASSESSMENT OBJECTIVE</span>
                <strong>
                  Identify readiness gaps before participation
                </strong>
              </div>

              <div className="structuredBadge">
                <Icon name="verify" size={14} />
                Structured
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="servicesSection">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="shield"
              text="OUR ASSESSMENT SUPPORT"
              centered
            />

            <h2>
              A Structured View of Your
              <span> Vendor Readiness.</span>
            </h2>

            <p>
              Review key business, documentation and procurement
              requirement areas through a structured assessment
              process.
            </p>
          </div>

          <div className="servicesGrid">
            {assessmentServices.map((service) => (
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
                    Assessment Support
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

      <section
        className="processSection"
        id="assessment-process"
      >
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="clipboard"
              text="ASSESSMENT PROCESS"
              centered
            />

            <h2>
              Review. Compare. Identify.
              <span> Prepare.</span>
            </h2>

            <p>
              A simple four-stage process for reviewing procurement
              readiness.
            </p>
          </div>

          <div className="processWrapper">
            <div className="processLine">
              <span />
            </div>

            <div className="processGrid">
              {process.map((item) => (
                <article
                  className="processCard"
                  key={item.step}
                >
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
          DARK SECTION
      ===================================================== */}

      <section className="whySection">
        <div className="whyGrid" />

        <div className="container whyLayout">
          <div className="whyContent">
            <div className="darkLabel">
              <span>
                <Icon name="spark" size={13} />
              </span>
              BETTER PROCUREMENT PREPARATION
            </div>

            <h2>
              Know what needs attention
              <span> before submission.</span>
            </h2>

            <p>
              A structured vendor assessment can help organize
              business information, identify documentary gaps and
              provide a clearer view of requirements relevant to a
              procurement opportunity.
            </p>

            <Link href="/contact" className="whiteButton">
              Discuss Your Assessment
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="whyCards">
            <WhyCard
              icon="building"
              title="Business Profile"
              text="Review business information relevant to procurement participation."
            />

            <WhyCard
              icon="document"
              title="Document Readiness"
              text="Identify available documents and areas requiring further attention."
            />

            <WhyCard
              icon="shield"
              title="Requirement Review"
              text="Map available information against applicable procurement requirements."
            />

            <WhyCard
              icon="target"
              title="Readiness View"
              text="Bring findings together into a structured view before participation."
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
                <Icon name="shield" size={28} />
              </div>

              <div>
                <span>
                  WANT TO REVIEW YOUR VENDOR PROFILE?
                </span>

                <h2>
                  Prepare your business with
                  <strong> BidAxis.</strong>
                </h2>

                <p>
                  Connect with our team for vendor profile,
                  documentation and procurement-readiness support.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Request Assessment
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
          background: #fff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* ================= HERO ================= */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 105px;
          color: white;
          background:
            radial-gradient(
              circle at 82% 28%,
              rgba(35, 157, 255, 0.2),
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
              rgba(255, 255, 255, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.055) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .heroGrid {
          opacity: 0.55;
          mask-image: linear-gradient(
            90deg,
            #000,
            transparent 85%
          );
        }

        .heroGlow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glowOne {
          width: 420px;
          height: 420px;
          top: -230px;
          right: -120px;
          border: 1px solid rgba(95, 190, 255, 0.12);
        }

        .glowTwo {
          width: 280px;
          height: 280px;
          left: -150px;
          bottom: -170px;
          background: rgba(28, 139, 226, 0.08);
        }

        .heroLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(430px, 0.88fr);
          gap: 70px;
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
          transition: 0.2s ease;
        }

        .primaryButton {
          color: #fff;
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

        /* ============= ASSESSMENT GRAPHIC ============= */

        .assessmentVisual {
          position: relative;
          min-height: 490px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualGlow {
          position: absolute;
          width: 390px;
          height: 390px;
          border-radius: 50%;
          background: rgba(21, 136, 230, 0.14);
          filter: blur(65px);
        }

        .assessmentDashboard {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 475px;
          padding: 21px;
          border: 1px solid rgba(143, 205, 255, 0.17);
          border-radius: 22px;
          background: rgba(7, 35, 64, 0.91);
          box-shadow:
            0 35px 70px rgba(0, 9, 24, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .dashboardTop,
        .readinessHeader,
        .dashboardBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .dashboardTitle {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dashboardIcon {
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

        .dashboardTitle > div:last-child,
        .readinessHeader > div:first-child,
        .bottomLeft > div:last-child,
        .floatingCard > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .dashboardTitle span,
        .readinessHeader span,
        .bottomLeft span,
        .floatingCard span {
          color: #7394af;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .dashboardTitle strong {
          margin-top: 3px;
          color: #fff;
          font-size: 11px;
        }

        .reviewBadge,
        .monitorBadge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid rgba(86, 219, 154, 0.15);
          border-radius: 999px;
          color: #69d69f;
          background: rgba(66, 195, 130, 0.08);
          font-size: 6px;
          font-weight: 900;
        }

        .reviewBadge i,
        .monitorBadge i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #61d498;
          box-shadow: 0 0 0 4px rgba(97, 212, 152, 0.08);
        }

        .companyCard {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 19px;
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
        }

        .companyAvatar {
          width: 43px;
          height: 43px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #69c4ff;
          background: rgba(48, 155, 231, 0.11);
        }

        .companyInfo {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .companyInfo span {
          color: #6889a4;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .companyInfo strong {
          margin-top: 2px;
          color: #dce9f3;
          font-size: 9px;
        }

        .companyInfo small {
          margin-top: 3px;
          color: #66849c;
          font-size: 5px;
        }

        .profileStatus {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px 8px;
          border-radius: 7px;
          color: #69c7ff;
          background: rgba(53, 158, 233, 0.09);
          font-size: 5px;
          font-weight: 800;
        }

        .readinessPanel {
          margin-top: 10px;
          padding: 14px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .readinessHeader strong {
          margin-top: 3px;
          color: #c9dbea;
          font-size: 9px;
        }

        .readinessIcon {
          width: 33px;
          height: 33px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #68c3ff;
          background: rgba(55, 158, 232, 0.09);
        }

        .readinessRows {
          display: grid;
          gap: 11px;
          margin-top: 15px;
        }

        .dashboardMetrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 9px;
        }

        .dashboardBottom {
          margin-top: 9px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.03);
        }

        .bottomLeft {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bottomIcon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #6bc4ff;
          background: rgba(50, 155, 230, 0.1);
        }

        .bottomLeft strong {
          margin-top: 2px;
          color: #c4d6e4;
          font-size: 6px;
        }

        .floatingCard {
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

        .floatingIcon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #66c0ff;
          background: rgba(56, 161, 235, 0.12);
        }

        .floatingCard strong {
          margin-top: 2px;
          color: #dceaf5;
          font-size: 7px;
        }

        .floatOne {
          top: 20px;
          right: -35px;
        }

        .floatTwo {
          left: -38px;
          bottom: 24px;
        }

        /* ================= INTRO ================= */

        .intro {
          padding: 90px 0;
          background: #fff;
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
          margin: 15px 0 0;
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

        .readinessBoard {
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

        .boardHeader,
        .boardFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .boardHeader > div:first-child,
        .boardFooter > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .boardHeader span,
        .boardFooter span {
          color: #8d9bab;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .boardHeader strong {
          margin-top: 3px;
          color: #1d3853;
          font-size: 11px;
        }

        .boardIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e9f4ff;
        }

        .framework {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 8px;
          margin: 31px 0;
        }

        .frameworkArrow {
          color: #8eb8db;
        }

        .boardFooter {
          padding-top: 15px;
          border-top: 1px solid #e9eef4;
        }

        .boardFooter strong {
          margin-top: 2px;
          color: #40566d;
          font-size: 8px;
        }

        .structuredBadge {
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

        /* ================= SERVICES ================= */

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
          background: #fff;
          box-shadow: 0 9px 25px rgba(20, 50, 80, 0.04);
          transition: 0.25s ease;
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

        /* ================= PROCESS ================= */

        .processSection {
          padding: 90px 0 100px;
          background: #fff;
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
          border: 5px solid #fff;
          border-radius: 50%;
          color: #fff;
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

        /* ================= WHY ================= */

        .whySection {
          position: relative;
          overflow: hidden;
          padding: 85px 0;
          color: #fff;
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
          color: #fff;
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
          background: #fff;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .whiteButton:hover {
          transform: translateY(-2px);
        }

        .whyCards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        /* ================= CTA ================= */

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
          color: #fff;
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
          background: #fff;
        }

        .ctaSecondary {
          border: 1px solid rgba(255, 255, 255, 0.22);
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        /* ================= RESPONSIVE ================= */

        @media (max-width: 1050px) {
          .heroLayout,
          .introLayout,
          .whyLayout {
            grid-template-columns: 1fr;
          }

          .assessmentVisual {
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

          .floatOne,
          .floatTwo {
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

          .assessmentVisual {
            min-height: auto;
          }

          .assessmentDashboard {
            padding: 15px;
          }

          .companyCard {
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .profileStatus {
            margin-left: 53px;
          }

          .dashboardMetrics {
            grid-template-columns: 1fr;
          }

          .benefitList {
            grid-template-columns: 1fr;
          }

          .framework {
            grid-template-columns: 1fr;
          }

          .frameworkArrow {
            justify-self: center;
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

function AssessmentRow({
  label,
  width,
  status,
}: {
  label: string;
  width: string;
  status: string;
}) {
  return (
    <div className="assessmentRow">
      <div className="rowTop">
        <span>{label}</span>
        <small>{status}</small>
      </div>

      <div className="progress">
        <span style={{ width }} />
      </div>

      <style jsx>{`
        .assessmentRow {
          width: 100%;
        }

        .rowTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .rowTop span {
          color: #a9bfd1;
          font-size: 6px;
          font-weight: 700;
        }

        .rowTop small {
          color: #68c6ff;
          font-size: 5px;
          font-weight: 800;
        }

        .progress {
          height: 5px;
          margin-top: 5px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.055);
        }

        .progress span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #0874dc,
            #57c1ff
          );
        }
      `}</style>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: IconName;
  label: string;
  value: string;
}) {
  return (
    <div className="metric">
      <div className="metricIcon">
        <Icon name={icon} size={14} />
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <style jsx>{`
        .metric {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.025);
        }

        .metricIcon {
          width: 27px;
          height: 27px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #65c1ff;
          background: rgba(50, 155, 230, 0.1);
        }

        span {
          display: block;
          color: #63829b;
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.6px;
        }

        strong {
          display: block;
          margin-top: 2px;
          color: #cbdce9;
          font-size: 7px;
        }
      `}</style>
    </div>
  );
}

function FrameworkItem({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="frameworkItem">
      <div className="frameworkIcon">
        <Icon name={icon} size={18} />
      </div>

      <strong>{title}</strong>
      <span>{text}</span>

      <style jsx>{`
        .frameworkItem {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .frameworkIcon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d8e8f7;
          border-radius: 11px;
          color: #0756b8;
          background: #fff;
          box-shadow: 0 6px 15px rgba(20, 55, 90, 0.05);
        }

        strong {
          margin-top: 7px;
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
          transition: 0.2s ease;
        }

        .whyCard:hover {
          transform: translateY(-2px);
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