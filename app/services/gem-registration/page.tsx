"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "building"
  | "document"
  | "catalogue"
  | "shield"
  | "users"
  | "headset"
  | "verify"
  | "store"
  | "spark"
  | "phone";

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

      {name === "building" && (
        <>
          <path d="M4 21V5h10v16" />
          <path d="M14 9h6v12" />
          <path d="M8 9h2M8 13h2M8 17h2" />
          <path d="M17 13h1M17 17h1" />
          <path d="M2 21h20" />
        </>
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "catalogue" && (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "users" && (
        <>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-4 2.4-6 6-6s6 2 6 6" />
          <circle cx="17" cy="9" r="2" />
          <path d="M16 15c3.1.2 5 1.8 5 5" />
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

      {name === "verify" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </>
      )}

      {name === "store" && (
        <>
          <path d="M4 10v10h16V10" />
          <path d="M3 10 5 4h14l2 6" />
          <path d="M3 10c0 2 3 2 4.5 0 1.5 2 4.5 2 6 0 1.5 2 4.5 2 6 0" />
          <path d="M9 20v-5h6v5" />
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
    </svg>
  );
}

const services: {
  icon: IconName;
  number: string;
  title: string;
  text: string;
}[] = [
  {
    icon: "store",
    number: "01",
    title: "New GeM Seller Registration",
    text: "Assistance with seller onboarding and registration requirements for businesses entering GeM.",
  },
  {
    icon: "users",
    number: "02",
    title: "Seller Profile Setup",
    text: "Support for organising seller information and completing the required business profile details.",
  },
  {
    icon: "catalogue",
    number: "03",
    title: "Product Catalogue Support",
    text: "Assistance with product information, catalogue preparation and listing-related requirements.",
  },
  {
    icon: "shield",
    number: "04",
    title: "Brand Approval Assistance",
    text: "Guidance for applicable brand-related documentation and approval workflows.",
  },
  {
    icon: "document",
    number: "05",
    title: "Documentation Support",
    text: "Structured assistance in preparing and organising documentation required during onboarding.",
  },
  {
    icon: "headset",
    number: "06",
    title: "Account Management Guidance",
    text: "Ongoing guidance for sellers who need assistance managing their GeM account and activities.",
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
    icon: "document",
    title: "Document Collection",
    text: "We identify and organise the information required for your registration.",
  },
  {
    step: "02",
    icon: "store",
    title: "Account Creation",
    text: "Your business details are prepared for the applicable onboarding process.",
  },
  {
    step: "03",
    icon: "verify",
    title: "Profile Verification",
    text: "Business and seller profile information is reviewed for completeness.",
  },
  {
    step: "04",
    icon: "catalogue",
    title: "Catalogue Setup",
    text: "We assist with the applicable product and catalogue setup requirements.",
  },
];

export default function GemRegistrationPage() {
  return (
    <main className="page">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="heroGrid" />
        <div className="heroOrb orbOne" />
        <div className="heroOrb orbTwo" />

        <div className="container heroLayout">
          <div className="heroContent">
            <div className="eyebrow">
              <span className="eyebrowIcon">
                <Icon name="spark" size={13} />
              </span>
              BIDAXIS • GEM SERVICES
            </div>

            <h1>
              Start & Grow Your Business
              <span> on GeM</span>
            </h1>

            <p className="heroText">
              End-to-end assistance for Government e-Marketplace
              seller onboarding, profile setup, catalogue support,
              documentation and account guidance.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Get Registration Assistance
                <Icon name="arrow" size={16} />
              </Link>

              <a href="#process" className="secondaryButton">
                View Our Process
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Seller Onboarding
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Documentation
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Catalogue Support
              </div>
            </div>
          </div>

          {/* HERO GRAPHIC */}

          <div className="heroVisual">
            <div className="visualGlow" />

            <div className="dashboard">
              <div className="dashboardHeader">
                <div className="dashboardBrand">
                  <div className="dashboardBrandIcon">
                    <Icon name="building" size={20} />
                  </div>

                  <div>
                    <span>SELLER ONBOARDING</span>
                    <strong>GeM Registration</strong>
                  </div>
                </div>

                <div className="statusBadge">
                  <i />
                  Assisted
                </div>
              </div>

              <div className="workflowPanel">
                <div className="workflowTop">
                  <div>
                    <span>REGISTRATION WORKFLOW</span>
                    <strong>Seller setup journey</strong>
                  </div>

                  <b>4 Steps</b>
                </div>

                <div className="progressBar">
                  <span />
                </div>

                <div className="progressDots">
                  <i className="done" />
                  <i className="done" />
                  <i className="done" />
                  <i />
                </div>
              </div>

              <div className="dashboardCards">
                <DashboardCard
                  icon="document"
                  label="DOCUMENTS"
                  title="Organised"
                  text="Registration information"
                />

                <DashboardCard
                  icon="verify"
                  label="PROFILE"
                  title="Guided"
                  text="Seller profile assistance"
                />

                <DashboardCard
                  icon="catalogue"
                  label="CATALOGUE"
                  title="Supported"
                  text="Product listing guidance"
                />
              </div>

              <div className="dashboardFooter">
                <div className="supportUser">
                  <div className="supportAvatar">
                    <Icon name="headset" size={17} />
                  </div>

                  <div>
                    <span>BIDAXIS SUPPORT</span>
                    <strong>Registration Assistance</strong>
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
                <span>DOCUMENTATION</span>
                <strong>Structured Support</strong>
              </div>
            </div>

            <div className="floatCard floatBottom">
              <div className="floatIcon">
                <Icon name="catalogue" size={17} />
              </div>

              <div>
                <span>CATALOGUE</span>
                <strong>Setup Guidance</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="intro">
        <div className="container introLayout">
          <div className="introContent">
            <SectionLabel
              icon="store"
              text="GEM SELLER ONBOARDING"
            />

            <h2>
              Build your government marketplace
              <span> presence with confidence.</span>
            </h2>

            <p>
              Government e-Marketplace provides businesses with
              access to government procurement opportunities.
              BidAxis helps sellers understand the onboarding
              workflow, organise documentation, prepare their seller
              profile and work through catalogue-related requirements.
            </p>

            <div className="benefitList">
              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Guided onboarding workflow
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Documentation assistance
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Catalogue setup support
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Seller account guidance
              </div>
            </div>
          </div>

          <div className="journeyPanel">
            <div className="journeyHeader">
              <div>
                <span>GEM SELLER SERVICES</span>
                <strong>One guided workflow</strong>
              </div>

              <div className="journeyHeaderIcon">
                <Icon name="store" size={21} />
              </div>
            </div>

            <div className="journeyFlow">
              <JourneyItem
                icon="document"
                title="Prepare"
                text="Business documents"
              />

              <div className="journeyConnector">
                <span />
                <Icon name="arrow" size={12} />
              </div>

              <JourneyItem
                icon="verify"
                title="Register"
                text="Seller profile"
              />

              <div className="journeyConnector">
                <span />
                <Icon name="arrow" size={12} />
              </div>

              <JourneyItem
                icon="catalogue"
                title="List"
                text="Products & services"
              />
            </div>

            <div className="journeyFooter">
              <div>
                <span>SUPPORT MODEL</span>
                <strong>End-to-end guidance</strong>
              </div>

              <div className="bidaxisBadge">
                <Icon name="shield" size={14} />
                BidAxis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="servicesSection">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="spark"
              text="WHAT WE ASSIST WITH"
              centered
            />

            <h2>
              Complete GeM Registration
              <span> Support</span>
            </h2>

            <p>
              Structured assistance across key stages of seller
              onboarding and marketplace setup.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
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
                    BidAxis Assistance
                  </span>

                  <Icon name="arrow" size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}

      <section className="processSection" id="process">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="verify"
              text="HOW IT WORKS"
              centered
            />

            <h2>
              Your GeM Registration
              <span> Journey</span>
            </h2>

            <p>
              A clear four-stage workflow from initial documentation
              through seller and catalogue setup.
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

      {/* ================= WHY BIDAXIS ================= */}

      <section className="whySection">
        <div className="whyGridBackground" />

        <div className="container whyLayout">
          <div className="whyContent">
            <div className="darkLabel">
              <span>
                <Icon name="shield" size={13} />
              </span>
              WHY BIDAXIS
            </div>

            <h2>
              More than registration.
              <span> Built for tender participation.</span>
            </h2>

            <p>
              BidAxis supports businesses across multiple stages of
              government procurement—from seller onboarding and
              documentation to tender discovery and bid-related
              support.
            </p>

            <Link href="/contact" className="whiteButton">
              Speak With Our Team
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="whyCards">
            <WhyCard
              icon="headset"
              title="Expert Guidance"
              text="Structured assistance through relevant onboarding steps."
            />

            <WhyCard
              icon="document"
              title="Document Support"
              text="Help organising registration and seller documentation."
            />

            <WhyCard
              icon="catalogue"
              title="Marketplace Setup"
              text="Support for seller profile and catalogue-related activities."
            />

            <WhyCard
              icon="shield"
              title="Tender Ecosystem"
              text="Continue from registration into BidAxis tender services."
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="ctaSection">
        <div className="container">
          <div className="ctaCard">
            <div className="ctaGrid" />

            <div className="ctaContent">
              <div className="ctaIcon">
                <Icon name="headset" size={26} />
              </div>

              <div>
                <span>NEED ASSISTANCE?</span>

                <h2>
                  Ready to get started with
                  <strong> GeM?</strong>
                </h2>

                <p>
                  Connect with the BidAxis team for guidance on
                  registration, seller onboarding and marketplace
                  setup.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Contact Our Team
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
          --navy2: #07345f;
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
        .whyGridBackground,
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
            minmax(420px, 0.86fr);
          gap: 72px;
          align-items: center;
        }

        .heroContent {
          max-width: 670px;
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

        .eyebrowIcon {
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
          max-width: 650px;
          margin: 18px 0 0;
          font-size: clamp(42px, 5vw, 64px);
          line-height: 1.04;
          letter-spacing: -2.6px;
        }

        .hero h1 span {
          color: #74c8ff;
        }

        .heroText {
          max-width: 590px;
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
           HERO DASHBOARD
        ===================================================== */

        .heroVisual {
          position: relative;
          min-height: 430px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visualGlow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: rgba(21, 136, 230, 0.14);
          filter: blur(60px);
        }

        .dashboard {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 465px;
          padding: 21px;
          border: 1px solid rgba(143, 205, 255, 0.17);
          border-radius: 22px;
          background: rgba(7, 35, 64, 0.88);
          box-shadow:
            0 35px 70px rgba(0, 9, 24, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .dashboardHeader,
        .workflowTop,
        .dashboardFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .dashboardBrand {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .dashboardBrandIcon {
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

        .dashboardBrand > div:last-child,
        .workflowTop > div,
        .supportUser > div:last-child,
        .floatCard > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .dashboardBrand span,
        .workflowTop span,
        .supportUser span,
        .floatCard span {
          color: #7394af;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .dashboardBrand strong {
          margin-top: 3px;
          color: #ffffff;
          font-size: 11px;
        }

        .statusBadge,
        .available {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid rgba(71, 205, 134, 0.13);
          border-radius: 999px;
          color: #70d79f;
          background: rgba(49, 179, 109, 0.08);
          font-size: 7px;
          font-weight: 800;
        }

        .statusBadge i,
        .available i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ed18d;
          box-shadow: 0 0 0 4px rgba(78, 209, 141, 0.08);
        }

        .workflowPanel {
          margin-top: 20px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
        }

        .workflowTop strong {
          margin-top: 3px;
          color: #d7e5f1;
          font-size: 9px;
        }

        .workflowTop b {
          color: #73c8ff;
          font-size: 8px;
        }

        .progressBar {
          height: 4px;
          margin-top: 13px;
          overflow: hidden;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }

        .progressBar span {
          display: block;
          width: 76%;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #0876dd,
            #56c3ff
          );
        }

        .progressDots {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
        }

        .progressDots i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #31516c;
        }

        .progressDots i.done {
          background: #55bfff;
        }

        .dashboardCards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 9px;
          margin-top: 10px;
        }

        .dashboardFooter {
          margin-top: 10px;
          padding: 12px 3px 1px;
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
          top: 15px;
          right: -30px;
        }

        .floatBottom {
          left: -35px;
          bottom: 16px;
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

        .journeyPanel {
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

        .journeyHeader,
        .journeyFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .journeyHeader > div:first-child,
        .journeyFooter > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .journeyHeader span,
        .journeyFooter span {
          color: #8d9bab;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .journeyHeader strong {
          margin-top: 3px;
          color: #1d3853;
          font-size: 11px;
        }

        .journeyHeaderIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e9f4ff;
        }

        .journeyFlow {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 7px;
          margin: 30px 0;
        }

        .journeyConnector {
          display: flex;
          align-items: center;
          color: #8cb6dc;
        }

        .journeyConnector span {
          width: 18px;
          height: 1px;
          background: #cbdced;
        }

        .journeyFooter {
          padding-top: 15px;
          border-top: 1px solid #e9eef4;
        }

        .journeyFooter strong {
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
          color: #0756b8;
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
           WHY BIDAXIS
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

        .whyGridBackground {
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

          .heroContent {
            max-width: 760px;
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

          .dashboard {
            padding: 15px;
          }

          .dashboardCards {
            grid-template-columns: 1fr;
          }

          .benefitList {
            grid-template-columns: 1fr;
          }

          .journeyFlow {
            grid-template-columns: 1fr;
          }

          .journeyConnector {
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

function DashboardCard({
  icon,
  label,
  title,
  text,
}: {
  icon: IconName;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="dashboardCard">
      <div className="icon">
        <Icon name={icon} size={18} />
      </div>

      <span>{label}</span>
      <strong>{title}</strong>
      <small>{text}</small>

      <style jsx>{`
        .dashboardCard {
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.035);
        }

        .icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 13px;
          border-radius: 9px;
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
          font-size: 8px;
        }

        small {
          display: block;
          margin-top: 4px;
          color: #6f8aa2;
          font-size: 6px;
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}

function JourneyItem({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="journeyItem">
      <div className="icon">
        <Icon name={icon} size={18} />
      </div>

      <strong>{title}</strong>
      <span>{text}</span>

      <style jsx>{`
        .journeyItem {
          min-width: 0;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .icon {
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