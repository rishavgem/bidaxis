"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "gem"
  | "search"
  | "document"
  | "auction"
  | "shield"
  | "briefcase"
  | "chart"
  | "users"
  | "spark"
  | "target"
  | "phone"
  | "clock"
  | "building";

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

      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </>
      )}

      {name === "gem" && (
        <>
          <path d="m4 8 3-4h10l3 4-8 12z" />
          <path d="M4 8h16" />
          <path d="m8 4 4 16 4-16" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 5 5" />
        </>
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "auction" && (
        <>
          <path d="m7 7 6 6" />
          <path d="m10 4 6 6" />
          <path d="m5 9 7-7" />
          <path d="m11 15 7-7" />
          <path d="M14 18h7" />
          <path d="M16 15v3" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "briefcase" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5h8v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </>
      )}

      {name === "chart" && (
        <>
          <path d="M4 20V12" />
          <path d="M10 20V7" />
          <path d="M16 20V4" />
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

      {name === "spark" && (
        <>
          <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2z" />
          <path d="m18 14 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7z" />
        </>
      )}

      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </>
      )}

      {name === "phone" && (
        <path d="M6.5 3h3l1.3 4-2 1.5c1.2 2.8 3 4.6 5.8 5.8l1.5-2 4 1.3v3c0 2-1.5 3.4-3.5 3.4C9.2 20 4 14.8 4 7.5 4 5.5 5 3 6.5 3Z" />
      )}

      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
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
    </svg>
  );
}

const services: {
  number: string;
  icon: IconName;
  title: string;
  short: string;
  description: string;
  features: string[];
  href: string;
}[] = [
  {
    number: "01",
    icon: "gem",
    title: "GeM Registration",
    short: "GeM Seller Onboarding",
    description:
      "Assistance for Government e-Marketplace registration, seller profile setup, catalogue onboarding and related documentation.",
    features: [
      "Seller Registration",
      "Profile Setup",
      "Catalogue Support",
    ],
    href: "/services/gem-registration",
  },
  {
    number: "02",
    icon: "search",
    title: "Tender Consultancy",
    short: "Opportunity to Submission",
    description:
      "Structured tender consultancy covering opportunity identification, requirement analysis, documentation and participation support.",
    features: [
      "Tender Identification",
      "Eligibility Review",
      "Submission Support",
    ],
    href: "/services/tender-consultancy",
  },
  {
    number: "03",
    icon: "document",
    title: "Bid Documentation",
    short: "Tender Documentation",
    description:
      "Professional assistance for organizing, preparing and reviewing technical and commercial bid documentation.",
    features: [
      "Technical Documents",
      "Compliance Review",
      "Final Bid Review",
    ],
    href: "/services/bid-documentation",
  },
  {
    number: "04",
    icon: "auction",
    title: "Reverse Auction Support",
    short: "Auction Participation",
    description:
      "Strategic preparation and participation support for government reverse auction events and commercial bidding processes.",
    features: [
      "Auction Preparation",
      "Pricing Guidance",
      "Participation Support",
    ],
    href: "/services/reverse-auction",
  },
  {
    number: "05",
    icon: "shield",
    title: "Vendor Assessment",
    short: "Procurement Readiness",
    description:
      "Support for evaluating vendor profiles, documentation, capability requirements and procurement readiness.",
    features: [
      "Profile Evaluation",
      "Document Review",
      "Readiness Support",
    ],
    href: "/services/vendor-assessment",
  },
  {
    number: "06",
    icon: "briefcase",
    title: "Government Procurement Advisory",
    short: "Business Procurement Support",
    description:
      "Consultancy support to help businesses understand procurement requirements and approach government opportunities systematically.",
    features: [
      "Procurement Guidance",
      "Opportunity Planning",
      "Business Support",
    ],
    href: "/contact",
  },
];

const process: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    number: "01",
    icon: "users",
    title: "Understand",
    text: "We understand your business, products, services and procurement requirements.",
  },
  {
    number: "02",
    icon: "search",
    title: "Analyse",
    text: "Relevant tender requirements, documentation and participation needs are reviewed.",
  },
  {
    number: "03",
    icon: "document",
    title: "Prepare",
    text: "Required documentation and procurement support activities are organized.",
  },
  {
    number: "04",
    icon: "target",
    title: "Participate",
    text: "Your business proceeds with structured support for the relevant procurement opportunity.",
  },
];

export default function ServicesPage() {
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
                <Icon name="spark" size={14} />
              </span>
              BIDAXIS SERVICES
            </div>

            <h1>
              Government Procurement
              <span> Support, Simplified.</span>
            </h1>

            <p className="heroText">
              From GeM onboarding and tender discovery to bid
              documentation, vendor assessment and reverse auction
              support — BidAxis helps businesses navigate key stages of
              government procurement.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Get Consultation
                <Icon name="arrow" size={16} />
              </Link>

              <a href="#services" className="secondaryButton">
                Explore Services
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <Icon name="check" size={13} />
                GeM Assistance
              </div>

              <div>
                <Icon name="check" size={13} />
                Tender Support
              </div>

              <div>
                <Icon name="check" size={13} />
                Bid Documentation
              </div>
            </div>
          </div>

          {/* HERO GRAPHIC */}
          <div className="heroVisual">
            <div className="dashboard">
              <div className="dashboardTop">
                <div className="dashboardBrand">
                  <div className="brandIcon">
                    <Icon name="briefcase" size={20} />
                  </div>

                  <div>
                    <span>BIDAXIS</span>
                    <strong>Procurement Service Hub</strong>
                  </div>
                </div>

                <div className="liveStatus">
                  <i />
                  SUPPORT
                </div>
              </div>

              <div className="serviceMap">
                <div className="mapGrid" />

                <div className="mapCenter">
                  <div className="centerIcon">
                    <Icon name="building" size={25} />
                  </div>
                  <span>BIDAXIS</span>
                  <strong>Procurement</strong>
                </div>

                <div className="mapLine line1" />
                <div className="mapLine line2" />
                <div className="mapLine line3" />
                <div className="mapLine line4" />

                <MapNode
                  className="node1"
                  icon="gem"
                  title="GeM"
                />

                <MapNode
                  className="node2"
                  icon="search"
                  title="Tenders"
                />

                <MapNode
                  className="node3"
                  icon="document"
                  title="Bids"
                />

                <MapNode
                  className="node4"
                  icon="auction"
                  title="Auction"
                />
              </div>

              <div className="dashboardStats">
                <DashboardStat
                  icon="search"
                  label="DISCOVER"
                  value="Opportunities"
                />

                <DashboardStat
                  icon="document"
                  label="PREPARE"
                  value="Documentation"
                />

                <DashboardStat
                  icon="target"
                  label="PARTICIPATE"
                  value="Procurement"
                />
              </div>

              <div className="dashboardBottom">
                <div>
                  <span>PROCUREMENT WORKFLOW</span>
                  <strong>
                    Discover → Prepare → Participate
                  </strong>
                </div>

                <div className="readyBadge">
                  <Icon name="shield" size={13} />
                  Structured Support
                </div>
              </div>
            </div>

            <div className="floating floatingOne">
              <span>
                <Icon name="document" size={16} />
              </span>

              <div>
                <small>DOCUMENTATION</small>
                <strong>Bid Support</strong>
              </div>
            </div>

            <div className="floating floatingTwo">
              <span>
                <Icon name="chart" size={16} />
              </span>

              <div>
                <small>PROCUREMENT</small>
                <strong>Business Support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE INTRO
      ===================================================== */}
      <section className="intro">
        <div className="container introGrid">
          <div>
            <SectionLabel
              icon="briefcase"
              text="OUR EXPERTISE"
            />

            <h2>
              Support across your
              <span> procurement journey.</span>
            </h2>
          </div>

          <div className="introRight">
            <p>
              Government procurement can involve platform processes,
              eligibility conditions, documentation requirements and
              commercial participation. BidAxis provides structured
              support across these areas.
            </p>

            <div className="introTags">
              <span>
                <Icon name="check" size={12} />
                GeM
              </span>

              <span>
                <Icon name="check" size={12} />
                Tenders
              </span>

              <span>
                <Icon name="check" size={12} />
                Documentation
              </span>

              <span>
                <Icon name="check" size={12} />
                Auctions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="servicesSection" id="services">
        <div className="container">
          <div className="servicesGrid">
            {services.map((service) => (
              <article
                className="serviceCard"
                key={service.title}
              >
                <div className="cardTop">
                  <div className="serviceIcon">
                    <Icon
                      name={service.icon}
                      size={23}
                    />
                  </div>

                  <span className="serviceNumber">
                    {service.number}
                  </span>
                </div>

                <div className="serviceType">
                  {service.short}
                </div>

                <h3>{service.title}</h3>

                <p className="description">
                  {service.description}
                </p>

                <div className="featureList">
                  {service.features.map((feature) => (
                    <div key={feature}>
                      <span>
                        <Icon
                          name="check"
                          size={11}
                        />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>

                <Link
                  href={service.href}
                  className="serviceLink"
                >
                  Explore Service
                  <Icon name="arrow" size={14} />
                </Link>

                <div className="cardGlow" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="processSection">
        <div className="processGridBackground" />

        <div className="container">
          <div className="processHeading">
            <div>
              <div className="darkEyebrow">
                <span>
                  <Icon name="chart" size={14} />
                </span>
                HOW WE SUPPORT YOU
              </div>

              <h2>
                A structured approach to
                <span> procurement support.</span>
              </h2>
            </div>

            <p>
              Every procurement requirement can be different. Our
              workflow focuses on understanding the opportunity,
              reviewing requirements and organizing the support needed
              for participation.
            </p>
          </div>

          <div className="processCards">
            {process.map((step, index) => (
              <div
                className="processCard"
                key={step.title}
              >
                <div className="processTop">
                  <span className="processNumber">
                    {step.number}
                  </span>

                  <div className="processIcon">
                    <Icon
                      name={step.icon}
                      size={20}
                    />
                  </div>
                </div>

                <h3>{step.title}</h3>
                <p>{step.text}</p>

                {index < process.length - 1 && (
                  <div className="connector">
                    <Icon
                      name="arrow"
                      size={13}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY BIDAXIS
      ===================================================== */}
      <section className="whySection">
        <div className="container whyLayout">
          <div className="whyGraphic">
            <div className="graphicCard">
              <div className="graphicHeader">
                <div>
                  <span>PROCUREMENT READINESS</span>
                  <strong>
                    BidAxis Support Framework
                  </strong>
                </div>

                <div className="graphicShield">
                  <Icon
                    name="shield"
                    size={21}
                  />
                </div>
              </div>

              <ReadinessRow
                icon="search"
                label="Opportunity Analysis"
                status="Supported"
                percent={92}
              />

              <ReadinessRow
                icon="document"
                label="Documentation"
                status="Structured"
                percent={86}
              />

              <ReadinessRow
                icon="gem"
                label="GeM Assistance"
                status="Available"
                percent={95}
              />

              <ReadinessRow
                icon="auction"
                label="Auction Support"
                status="Available"
                percent={82}
              />

              <div className="graphicFooter">
                <div>
                  <Icon
                    name="check"
                    size={13}
                  />
                  Structured Workflow
                </div>

                <div>
                  <Icon
                    name="check"
                    size={13}
                  />
                  Business Focused
                </div>
              </div>
            </div>
          </div>

          <div className="whyContent">
            <SectionLabel
              icon="shield"
              text="WHY BIDAXIS"
            />

            <h2>
              Procurement support designed
              <span> around your business.</span>
            </h2>

            <p>
              We focus on helping businesses better understand tender
              requirements, organize documentation and navigate key
              procurement processes.
            </p>

            <div className="whyPoints">
              <WhyPoint
                icon="search"
                title="Opportunity Focus"
                text="Support in understanding and evaluating relevant procurement opportunities."
              />

              <WhyPoint
                icon="document"
                title="Documentation Support"
                text="Structured assistance around tender and procurement documentation."
              />

              <WhyPoint
                icon="users"
                title="Business-Oriented Approach"
                text="Support aligned with the practical requirements of participating businesses."
              />

              <WhyPoint
                icon="target"
                title="End-to-End Perspective"
                text="Assistance across multiple stages of the procurement journey."
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="ctaSection">
        <div className="container">
          <div className="cta">
            <div className="ctaGrid" />
            <div className="ctaGlow" />

            <div className="ctaContent">
              <div className="ctaIcon">
                <Icon
                  name="briefcase"
                  size={26}
                />
              </div>

              <div>
                <span>
                  NEED PROCUREMENT SUPPORT?
                </span>

                <h2>
                  Find the right BidAxis service
                  <strong> for your business.</strong>
                </h2>

                <p>
                  Speak with our team about GeM,
                  tenders, documentation, reverse
                  auctions or procurement support.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link
                href="/contact"
                className="ctaPrimary"
              >
                Get Consultation
                <Icon
                  name="arrow"
                  size={15}
                />
              </Link>

              <a
                href="tel:+918882537520"
                className="ctaSecondary"
              >
                <Icon
                  name="phone"
                  size={15}
                />
                8882537520
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          --navy: #03182d;
          --navy2: #062b50;
          --blue: #0756b8;
          --blue2: #0a77e8;
          --sky: #69c5ff;
          --ink: #122b43;
          --muted: #718195;
          --line: #e1e9f1;
          overflow: hidden;
          color: var(--ink);
          background: #fff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        /* ==============================
           HERO
        ============================== */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 100px;
          color: #fff;
          background:
            radial-gradient(
              circle at 80% 25%,
              rgba(48, 164, 246, 0.19),
              transparent 28%
            ),
            linear-gradient(
              120deg,
              #031427 0%,
              #052b51 55%,
              #0759a9 100%
            );
        }

        .heroGrid,
        .processGridBackground,
        .ctaGrid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
        }

        .heroGrid {
          opacity: 0.5;
          mask-image: linear-gradient(
            90deg,
            #000,
            transparent 92%
          );
        }

        .heroGlow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glowOne {
          width: 480px;
          height: 480px;
          right: -200px;
          top: -250px;
          border: 1px solid
            rgba(100, 195, 255, 0.12);
        }

        .glowTwo {
          width: 310px;
          height: 310px;
          left: -170px;
          bottom: -180px;
          background: rgba(21, 140, 225, 0.07);
        }

        .heroLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns:
            minmax(0, 1fr)
            minmax(420px, 0.9fr);
          gap: 68px;
          align-items: center;
        }

        .heroContent {
          max-width: 660px;
        }

        .eyebrow,
        .darkEyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #72c9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .eyebrow > span,
        .darkEyebrow > span {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid
            rgba(106, 198, 255, 0.18);
          border-radius: 8px;
          background: rgba(58, 165, 240, 0.1);
        }

        .hero h1 {
          max-width: 650px;
          margin: 18px 0 0;
          font-size: clamp(43px, 5vw, 65px);
          line-height: 1.04;
          letter-spacing: -2.7px;
        }

        .hero h1 span {
          color: #76caff;
        }

        .heroText {
          max-width: 610px;
          margin: 20px 0 0;
          color: #b0c7da;
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
          gap: 8px;
          padding: 0 19px;
          border-radius: 10px;
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .primaryButton {
          color: #fff;
          background:
            linear-gradient(
              135deg,
              #0874dd,
              #1598f4
            );
          box-shadow:
            0 14px 28px
            rgba(7, 110, 214, 0.25);
        }

        .secondaryButton {
          color: #dcebf7;
          border: 1px solid
            rgba(255, 255, 255, 0.16);
          background:
            rgba(255, 255, 255, 0.06);
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
        }

        .heroTrust div {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #9cb8ce;
          font-size: 8px;
          font-weight: 700;
        }

        .heroTrust :global(svg) {
          color: #64c3ff;
        }

        /* ==============================
           HERO DASHBOARD
        ============================== */

        .heroVisual {
          position: relative;
          min-height: 475px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dashboard {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 470px;
          padding: 21px;
          border: 1px solid
            rgba(140, 207, 255, 0.17);
          border-radius: 22px;
          background:
            rgba(6, 34, 63, 0.94);
          box-shadow:
            0 35px 70px rgba(0, 10, 25, 0.36),
            inset 0 1px
              rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .dashboardTop,
        .dashboardBottom {
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

        .brandIcon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #69c5ff;
          background:
            rgba(56, 164, 239, 0.11);
          border: 1px solid
            rgba(104, 194, 255, 0.15);
        }

        .dashboardBrand > div:last-child,
        .dashboardBottom > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .dashboardBrand span,
        .dashboardBottom span {
          color: #7191aa;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .dashboardBrand strong {
          margin-top: 3px;
          color: #fff;
          font-size: 11px;
        }

        .liveStatus {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid
            rgba(88, 213, 153, 0.14);
          border-radius: 999px;
          color: #6bd8a2;
          background:
            rgba(63, 193, 129, 0.08);
          font-size: 6px;
          font-weight: 900;
        }

        .liveStatus i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #63d69d;
          box-shadow:
            0 0 0 4px
            rgba(99, 214, 157, 0.08);
        }

        .serviceMap {
          position: relative;
          height: 240px;
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid
            rgba(255, 255, 255, 0.055);
          border-radius: 15px;
          background:
            radial-gradient(
              circle at center,
              rgba(31, 143, 225, 0.11),
              transparent 48%
            ),
            rgba(255, 255, 255, 0.02);
        }

        .mapGrid {
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .mapCenter {
          position: absolute;
          z-index: 4;
          left: 50%;
          top: 50%;
          width: 105px;
          height: 105px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform:
            translate(-50%, -50%);
          border: 1px solid
            rgba(111, 200, 255, 0.2);
          border-radius: 50%;
          background: #092f55;
          box-shadow:
            0 0 40px
            rgba(20, 139, 225, 0.13);
        }

        .centerIcon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #69c5ff;
          background:
            rgba(63, 168, 241, 0.11);
        }

        .mapCenter span {
          margin-top: 7px;
          color: #6d94b1;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .mapCenter strong {
          margin-top: 2px;
          color: #dbeaf5;
          font-size: 7px;
        }

        .mapLine {
          position: absolute;
          z-index: 1;
          width: 120px;
          height: 1px;
          left: 50%;
          top: 50%;
          transform-origin: left center;
          background:
            linear-gradient(
              90deg,
              rgba(91, 188, 251, 0.3),
              rgba(91, 188, 251, 0.02)
            );
        }

        .line1 {
          transform: rotate(-145deg);
        }

        .line2 {
          transform: rotate(-35deg);
        }

        .line3 {
          transform: rotate(145deg);
        }

        .line4 {
          transform: rotate(35deg);
        }

        .dashboardStats {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 8px;
          margin-top: 9px;
        }

        .dashboardBottom {
          margin-top: 9px;
          padding: 10px;
          border: 1px solid
            rgba(255, 255, 255, 0.055);
          border-radius: 10px;
          background:
            rgba(255, 255, 255, 0.025);
        }

        .dashboardBottom strong {
          margin-top: 3px;
          color: #c4d7e5;
          font-size: 6px;
        }

        .readyBadge {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 8px;
          border-radius: 7px;
          color: #67c6ff;
          background:
            rgba(58, 160, 232, 0.09);
          font-size: 6px;
          font-weight: 800;
        }

        .floating {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid
            rgba(150, 211, 255, 0.16);
          border-radius: 11px;
          background:
            rgba(7, 40, 72, 0.97);
          box-shadow:
            0 18px 35px
            rgba(0, 12, 30, 0.25);
        }

        .floating > span {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #67c3ff;
          background:
            rgba(53, 158, 233, 0.11);
        }

        .floating > div {
          display: flex;
          flex-direction: column;
        }

        .floating small {
          color: #7192ad;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .floating strong {
          margin-top: 2px;
          color: #d9e8f3;
          font-size: 7px;
        }

        .floatingOne {
          top: 18px;
          right: -34px;
        }

        .floatingTwo {
          left: -38px;
          bottom: 23px;
        }

        /* ==============================
           INTRO
        ============================== */

        .intro {
          padding: 82px 0 42px;
          background: #fff;
        }

        .introGrid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 80px;
          align-items: end;
        }

        .intro h2,
        .processHeading h2,
        .whyContent h2 {
          margin: 14px 0 0;
          color: #102941;
          font-size:
            clamp(30px, 3vw, 41px);
          line-height: 1.12;
          letter-spacing: -1.3px;
        }

        .intro h2 span,
        .whyContent h2 span {
          color: var(--blue);
        }

        .introRight > p {
          margin: 0;
          color: #738397;
          font-size: 11px;
          line-height: 1.75;
        }

        .introTags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 16px;
        }

        .introTags span {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px 9px;
          border: 1px solid #deebf6;
          border-radius: 999px;
          color: #52708e;
          background: #f5faff;
          font-size: 7px;
          font-weight: 800;
        }

        .introTags :global(svg) {
          color: var(--blue);
        }

        /* ==============================
           SERVICES
        ============================== */

        .servicesSection {
          padding: 35px 0 95px;
          background: #fff;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns:
            repeat(3, 1fr);
          gap: 16px;
        }

        .serviceCard {
          position: relative;
          overflow: hidden;
          min-height: 355px;
          padding: 24px;
          border: 1px solid #e0e8f0;
          border-radius: 18px;
          background:
            linear-gradient(
              180deg,
              #fff,
              #fbfdff
            );
          box-shadow:
            0 10px 28px
            rgba(20, 50, 80, 0.05);
          transition: 0.25s ease;
        }

        .serviceCard:hover {
          transform: translateY(-6px);
          border-color: #bcdaf4;
          box-shadow:
            0 22px 42px
            rgba(20, 50, 80, 0.1);
        }

        .cardTop {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .serviceIcon {
          width: 49px;
          height: 49px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: #0756b8;
          background:
            linear-gradient(
              135deg,
              #e9f4ff,
              #f3f9ff
            );
          border: 1px solid #dcecf9;
        }

        .serviceNumber {
          color: #d5e0ea;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .serviceType {
          position: relative;
          z-index: 2;
          margin-top: 21px;
          color: #0b73d5;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .serviceCard h3 {
          position: relative;
          z-index: 2;
          margin: 6px 0 0;
          color: #172f47;
          font-size: 16px;
        }

        .description {
          position: relative;
          z-index: 2;
          min-height: 67px;
          margin: 10px 0 0;
          color: #718194;
          font-size: 9px;
          line-height: 1.65;
        }

        .featureList {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 17px;
          padding-top: 15px;
          border-top: 1px solid #edf1f5;
        }

        .featureList > div {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #50677e;
          font-size: 8px;
          font-weight: 700;
        }

        .featureList span {
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: #0872d8;
          background: #eaf5ff;
        }

        .serviceLink {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 19px;
          color: #0756b8;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
        }

        .serviceLink:hover {
          gap: 10px;
        }

        .cardGlow {
          position: absolute;
          width: 150px;
          height: 150px;
          right: -90px;
          bottom: -90px;
          border-radius: 50%;
          background:
            rgba(10, 119, 232, 0.04);
        }

        /* ==============================
           PROCESS
        ============================== */

        .processSection {
          position: relative;
          overflow: hidden;
          padding: 90px 0;
          color: #fff;
          background:
            radial-gradient(
              circle at 80% 10%,
              rgba(51, 164, 243, 0.14),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #04172c,
              #07365f
            );
        }

        .processGridBackground {
          opacity: 0.35;
        }

        .processHeading {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 70px;
          align-items: end;
        }

        .processHeading h2 {
          color: #fff;
        }

        .processHeading h2 span {
          color: #6fc8ff;
        }

        .processHeading > p {
          margin: 0;
          color: #a9bfd3;
          font-size: 10px;
          line-height: 1.7;
        }

        .processCards {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns:
            repeat(4, 1fr);
          gap: 12px;
          margin-top: 38px;
        }

        .processCard {
          position: relative;
          min-height: 180px;
          padding: 19px;
          border: 1px solid
            rgba(255, 255, 255, 0.075);
          border-radius: 14px;
          background:
            rgba(255, 255, 255, 0.045);
        }

        .processTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .processNumber {
          color: #5d7d97;
          font-size: 20px;
          font-weight: 900;
        }

        .processIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #69c6ff;
          background:
            rgba(62, 161, 231, 0.1);
        }

        .processCard h3 {
          margin: 20px 0 0;
          color: #edf6fb;
          font-size: 11px;
        }

        .processCard p {
          margin: 7px 0 0;
          color: #92abc0;
          font-size: 8px;
          line-height: 1.6;
        }

        .connector {
          position: absolute;
          z-index: 5;
          right: -20px;
          top: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border: 1px solid
            rgba(255, 255, 255, 0.09);
          border-radius: 50%;
          color: #67c4ff;
          background: #06325a;
        }

        /* ==============================
           WHY BIDAXIS
        ============================== */

        .whySection {
          padding: 95px 0;
          background:
            linear-gradient(
              180deg,
              #f8fbfe,
              #fff
            );
        }

        .whyLayout {
          display: grid;
          grid-template-columns: 0.92fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .graphicCard {
          padding: 23px;
          border: 1px solid #dfe8f1;
          border-radius: 19px;
          background: #fff;
          box-shadow:
            0 22px 48px
            rgba(20, 52, 84, 0.08);
        }

        .graphicHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 18px;
        }

        .graphicHeader > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .graphicHeader span {
          color: #8798a8;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .graphicHeader strong {
          margin-top: 3px;
          color: #1e3852;
          font-size: 12px;
        }

        .graphicShield {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #0756b8;
          background: #eaf4ff;
        }

        .graphicFooter {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 17px;
          padding-top: 15px;
          border-top: 1px solid #edf1f5;
        }

        .graphicFooter > div {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #60758a;
          font-size: 7px;
          font-weight: 800;
        }

        .graphicFooter :global(svg) {
          color: #0872d8;
        }

        .whyContent > p {
          max-width: 560px;
          margin: 15px 0 0;
          color: #718194;
          font-size: 11px;
          line-height: 1.75;
        }

        .whyPoints {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
          margin-top: 25px;
        }

        /* ==============================
           CTA
        ============================== */

        .ctaSection {
          padding: 20px 0 85px;
          background: #fff;
        }

        .cta {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 32px;
          border-radius: 20px;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 20%,
              rgba(83, 185, 255, 0.22),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #0756b8,
              #0a77e8
            );
          box-shadow:
            0 22px 45px
            rgba(7, 86, 184, 0.18);
        }

        .ctaGrid {
          opacity: 0.35;
          background-size: 35px 35px;
        }

        .ctaGlow {
          position: absolute;
          width: 250px;
          height: 250px;
          right: -80px;
          bottom: -150px;
          border: 35px solid
            rgba(255, 255, 255, 0.04);
          border-radius: 50%;
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
          width: 57px;
          height: 57px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid
            rgba(255, 255, 255, 0.16);
          border-radius: 14px;
          background:
            rgba(255, 255, 255, 0.1);
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
          color: #d8efff;
        }

        .ctaContent p {
          max-width: 550px;
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
          color: #fff;
          border: 1px solid
            rgba(255, 255, 255, 0.22);
          background:
            rgba(255, 255, 255, 0.08);
        }

        /* ==============================
           RESPONSIVE
        ============================== */

        @media (max-width: 1050px) {
          .heroLayout,
          .introGrid,
          .whyLayout,
          .processHeading {
            grid-template-columns: 1fr;
          }

          .heroVisual {
            width: 100%;
            max-width: 620px;
            margin: auto;
          }

          .servicesGrid {
            grid-template-columns: 1fr 1fr;
          }

          .processCards {
            grid-template-columns: 1fr 1fr;
          }

          .connector {
            display: none;
          }
        }

        @media (max-width: 760px) {
          .hero {
            padding: 70px 0;
          }

          .floating {
            display: none;
          }

          .servicesGrid,
          .processCards,
          .whyPoints {
            grid-template-columns: 1fr;
          }

          .cta {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 560px) {
          .container {
            width: calc(100% - 24px);
          }

          .hero h1 {
            font-size: 37px;
            letter-spacing: -1.6px;
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .dashboard {
            padding: 15px;
          }

          .dashboardStats {
            grid-template-columns: 1fr;
          }

          .serviceMap {
            height: 230px;
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
}: {
  icon: IconName;
  text: string;
}) {
  return (
    <div className="label">
      <span>
        <Icon name={icon} size={13} />
      </span>

      {text}

      <style jsx>{`
        .label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0756b8;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }

        .label > span {
          width: 27px;
          height: 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d6e8f8;
          border-radius: 8px;
          background: #eaf5ff;
        }
      `}</style>
    </div>
  );
}

function MapNode({
  className,
  icon,
  title,
}: {
  className: string;
  icon: IconName;
  title: string;
}) {
  return (
    <div className={`node ${className}`}>
      <span>
        <Icon name={icon} size={15} />
      </span>

      <small>{title}</small>

      <style jsx>{`
        .node {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
        }

        .node > span {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid
            rgba(110, 199, 255, 0.14);
          border-radius: 10px;
          color: #68c2ff;
          background: #0b365f;
        }

        small {
          color: #86a5bd;
          font-size: 6px;
          font-weight: 800;
        }

        .node1 {
          left: 42px;
          top: 38px;
        }

        .node2 {
          right: 43px;
          top: 38px;
        }

        .node3 {
          left: 48px;
          bottom: 32px;
        }

        .node4 {
          right: 46px;
          bottom: 32px;
        }

        @media (max-width: 560px) {
          .node1 {
            left: 18px;
          }

          .node2 {
            right: 18px;
          }

          .node3 {
            left: 22px;
          }

          .node4 {
            right: 22px;
          }
        }
      `}</style>
    </div>
  );
}

function DashboardStat({
  icon,
  label,
  value,
}: {
  icon: IconName;
  label: string;
  value: string;
}) {
  return (
    <div className="stat">
      <span>
        <Icon name={icon} size={14} />
      </span>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>

      <style jsx>{`
        .stat {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px;
          border: 1px solid
            rgba(255, 255, 255, 0.05);
          border-radius: 9px;
          background:
            rgba(255, 255, 255, 0.025);
        }

        .stat > span {
          width: 28px;
          height: 28px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #65c1ff;
          background:
            rgba(50, 155, 230, 0.1);
        }

        .stat > div {
          display: flex;
          flex-direction: column;
        }

        small {
          color: #64839c;
          font-size: 4px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        strong {
          margin-top: 2px;
          color: #cbdce9;
          font-size: 6px;
        }
      `}</style>
    </div>
  );
}

function ReadinessRow({
  icon,
  label,
  status,
  percent,
}: {
  icon: IconName;
  label: string;
  status: string;
  percent: number;
}) {
  return (
    <div className="row">
      <div className="rowTop">
        <div className="rowLabel">
          <span>
            <Icon name={icon} size={14} />
          </span>

          <strong>{label}</strong>
        </div>

        <small>{status}</small>
      </div>

      <div className="progress">
        <div
          className="progressValue"
          style={{ width: `${percent}%` }}
        />
      </div>

      <style jsx>{`
        .row {
          padding: 11px 0;
        }

        .rowTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .rowLabel {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .rowLabel > span {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #0756b8;
          background: #edf6ff;
        }

        strong {
          color: #40586e;
          font-size: 8px;
        }

        small {
          color: #0a76d9;
          font-size: 6px;
          font-weight: 900;
        }

        .progress {
          height: 5px;
          overflow: hidden;
          margin-top: 8px;
          border-radius: 999px;
          background: #edf2f6;
        }

        .progressValue {
          height: 100%;
          border-radius: inherit;
          background:
            linear-gradient(
              90deg,
              #0756b8,
              #1b96ee
            );
        }
      `}</style>
    </div>
  );
}

function WhyPoint({
  icon,
  title,
  text,
}: {
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <article className="point">
      <div className="pointIcon">
        <Icon name={icon} size={17} />
      </div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <style jsx>{`
        .point {
          display: flex;
          gap: 10px;
          padding: 14px;
          border: 1px solid #e2eaf1;
          border-radius: 12px;
          background: #fff;
        }

        .pointIcon {
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          color: #0756b8;
          background: #eaf4ff;
        }

        strong {
          color: #2a435a;
          font-size: 8px;
        }

        p {
          margin: 4px 0 0;
          color: #81909e;
          font-size: 7px;
          line-height: 1.5;
        }
      `}</style>
    </article>
  );
}