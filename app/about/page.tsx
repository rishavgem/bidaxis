"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "shield"
  | "target"
  | "eye"
  | "building"
  | "document"
  | "search"
  | "chart"
  | "users"
  | "spark"
  | "briefcase"
  | "handshake"
  | "phone"
  | "gem"
  | "auction";

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

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </>
      )}

      {name === "eye" && (
        <>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
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

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 5 5" />
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

      {name === "briefcase" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5h8v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </>
      )}

      {name === "handshake" && (
        <>
          <path d="m8 12 3 3c1 1 2.5 1 3.5 0l4.5-4.5" />
          <path d="m2 9 4-4 4 3" />
          <path d="m22 9-4-4-3 3" />
          <path d="m6 13 4 4c1 1 2 1 3 0" />
        </>
      )}

      {name === "phone" && (
        <path d="M6.5 3h3l1.3 4-2 1.5c1.2 2.8 3 4.6 5.8 5.8l1.5-2 4 1.3v3c0 2-1.5 3.4-3.5 3.4C9.2 20 4 14.8 4 7.5 4 5.5 5 3 6.5 3Z" />
      )}

      {name === "gem" && (
        <>
          <path d="m4 8 3-4h10l3 4-8 12z" />
          <path d="M4 8h16" />
          <path d="m8 4 4 16 4-16" />
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
    </svg>
  );
}

const services: {
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "gem",
    title: "GeM Support",
    text: "Registration, seller onboarding, catalogue and marketplace support.",
  },
  {
    icon: "search",
    title: "Tender Discovery",
    text: "Support in identifying relevant government procurement opportunities.",
  },
  {
    icon: "document",
    title: "Bid Documentation",
    text: "Structured assistance for preparing and reviewing tender documentation.",
  },
  {
    icon: "auction",
    title: "Reverse Auction",
    text: "Strategic support for preparation and participation in reverse auctions.",
  },
  {
    icon: "shield",
    title: "Vendor Assessment",
    text: "Business profile, documentation and procurement-readiness support.",
  },
  {
    icon: "briefcase",
    title: "Tender Consultancy",
    text: "End-to-end consultancy across key stages of government procurement.",
  },
];

const values: {
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    icon: "shield",
    title: "Professional Support",
    text: "A structured approach to procurement and tender-related support.",
  },
  {
    icon: "document",
    title: "Documentation Focus",
    text: "Careful attention to tender requirements, documentation and submissions.",
  },
  {
    icon: "users",
    title: "Business Focused",
    text: "Services designed around the practical procurement needs of businesses.",
  },
  {
    icon: "target",
    title: "Opportunity Driven",
    text: "Helping businesses better understand and approach public procurement opportunities.",
  },
];

export default function AboutPage() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="heroGrid" />
        <div className="glow glow1" />
        <div className="glow glow2" />

        <div className="container heroLayout">
          <div className="heroContent">
            <div className="eyebrow">
              <span>
                <Icon name="spark" size={14} />
              </span>
              ABOUT BIDAXIS
            </div>

            <h1>
              Making Government
              <span> Procurement Simpler.</span>
            </h1>

            <p className="heroText">
              BidAxis supports businesses across India with GeM,
              government tendering, bid documentation, procurement
              readiness and consultancy services.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Talk to Our Team
                <Icon name="arrow" size={16} />
              </Link>

              <Link href="/services" className="secondaryButton">
                Explore Services
              </Link>
            </div>

            <div className="heroPoints">
              <div>
                <Icon name="check" size={14} />
                GeM Support
              </div>
              <div>
                <Icon name="check" size={14} />
                Tender Assistance
              </div>
              <div>
                <Icon name="check" size={14} />
                Procurement Support
              </div>
            </div>
          </div>

          {/* GRAPHICAL DASHBOARD */}
          <div className="visual">
            <div className="dashboard">
              <div className="dashboardHeader">
                <div className="dashboardBrand">
                  <div className="dashboardLogo">
                    <Icon name="briefcase" size={21} />
                  </div>

                  <div>
                    <span>BIDAXIS</span>
                    <strong>Procurement Ecosystem</strong>
                  </div>
                </div>

                <div className="status">
                  <i />
                  ACTIVE
                </div>
              </div>

              <div className="ecosystem">
                <div className="orbit orbit1" />
                <div className="orbit orbit2" />

                <div className="centerNode">
                  <div className="centerIcon">
                    <Icon name="building" size={26} />
                  </div>
                  <span>BIDAXIS</span>
                  <strong>Business Support</strong>
                </div>

                <div className="node node1">
                  <div>
                    <Icon name="gem" size={16} />
                  </div>
                  <span>GeM</span>
                </div>

                <div className="node node2">
                  <div>
                    <Icon name="search" size={16} />
                  </div>
                  <span>Tenders</span>
                </div>

                <div className="node node3">
                  <div>
                    <Icon name="document" size={16} />
                  </div>
                  <span>Bids</span>
                </div>

                <div className="node node4">
                  <div>
                    <Icon name="auction" size={16} />
                  </div>
                  <span>Auction</span>
                </div>
              </div>

              <div className="dashboardCards">
                <MiniCard
                  icon="search"
                  label="OPPORTUNITY"
                  value="Tender Discovery"
                />
                <MiniCard
                  icon="document"
                  label="DOCUMENTATION"
                  value="Bid Support"
                />
                <MiniCard
                  icon="shield"
                  label="READINESS"
                  value="Vendor Support"
                />
              </div>

              <div className="dashboardFooter">
                <div>
                  <span>PROCUREMENT JOURNEY</span>
                  <strong>
                    Opportunity → Preparation → Participation
                  </strong>
                </div>

                <div className="supportBadge">
                  <Icon name="handshake" size={14} />
                  Support
                </div>
              </div>
            </div>

            <div className="floatingCard floating1">
              <span>
                <Icon name="document" size={17} />
              </span>
              <div>
                <small>DOCUMENTATION</small>
                <strong>Bid Preparation</strong>
              </div>
            </div>

            <div className="floatingCard floating2">
              <span>
                <Icon name="shield" size={17} />
              </span>
              <div>
                <small>PROCUREMENT</small>
                <strong>Readiness Support</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="aboutSection">
        <div className="container aboutLayout">
          <div className="aboutContent">
            <SectionLabel icon="building" text="WHO WE ARE" />

            <h2>
              Helping businesses navigate
              <span> public procurement.</span>
            </h2>

            <p>
              BidAxis is a professional consultancy focused on helping
              businesses understand and participate in GeM and
              government procurement opportunities.
            </p>

            <p>
              Our support covers key areas including GeM registration,
              tender discovery, bid documentation, reverse auction
              support, vendor assessment and tender consultancy.
            </p>

            <div className="aboutChecks">
              <div>
                <Icon name="check" size={15} />
                GeM Registration Support
              </div>

              <div>
                <Icon name="check" size={15} />
                Tender Opportunity Assistance
              </div>

              <div>
                <Icon name="check" size={15} />
                Bid Documentation Support
              </div>

              <div>
                <Icon name="check" size={15} />
                Procurement Consultancy
              </div>
            </div>
          </div>

          <div className="journeyCard">
            <div className="journeyHeader">
              <div>
                <span>HOW BIDAXIS HELPS</span>
                <strong>Procurement Journey</strong>
              </div>

              <div className="journeyIcon">
                <Icon name="chart" size={21} />
              </div>
            </div>

            <JourneyItem
              number="01"
              icon="search"
              title="Discover"
              text="Identify relevant procurement opportunities."
            />

            <JourneyItem
              number="02"
              icon="document"
              title="Prepare"
              text="Review requirements and prepare documentation."
            />

            <JourneyItem
              number="03"
              icon="shield"
              title="Review"
              text="Check procurement and documentation readiness."
            />

            <JourneyItem
              number="04"
              icon="target"
              title="Participate"
              text="Proceed with structured tender participation support."
              last
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="missionSection">
        <div className="container">
          <div className="missionGrid">
            <article className="missionCard">
              <div className="missionIcon">
                <Icon name="target" size={25} />
              </div>

              <div>
                <span>OUR MISSION</span>
                <h2>Simplify Procurement Participation</h2>
                <p>
                  To provide transparent, structured and professional
                  consultancy support that helps businesses understand
                  and navigate government procurement opportunities.
                </p>
              </div>

              <div className="cardDecoration" />
            </article>

            <article className="missionCard visionCard">
              <div className="missionIcon">
                <Icon name="eye" size={25} />
              </div>

              <div>
                <span>OUR VISION</span>
                <h2>Build a Strong Procurement Ecosystem</h2>
                <p>
                  To support businesses in becoming better prepared,
                  informed and capable of participating in GeM and
                  government tender opportunities.
                </p>
              </div>

              <div className="cardDecoration" />
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="servicesSection">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="briefcase"
              text="WHAT WE SUPPORT"
              centered
            />

            <h2>
              Procurement Support
              <span> Across the Journey.</span>
            </h2>

            <p>
              BidAxis brings together practical support for businesses
              navigating GeM and government tender opportunities.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <div className="serviceIcon">
                  <Icon name={service.icon} size={22} />
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>

                <div className="serviceBottom">
                  <span>
                    <Icon name="check" size={12} />
                    BidAxis Support
                  </span>

                  <Icon name="arrow" size={14} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="valuesSection">
        <div className="valuesGridBg" />

        <div className="container valuesLayout">
          <div className="valuesContent">
            <div className="darkLabel">
              <span>
                <Icon name="spark" size={14} />
              </span>
              OUR APPROACH
            </div>

            <h2>
              Built around clarity,
              <span> preparation and support.</span>
            </h2>

            <p>
              Government procurement can involve detailed eligibility
              criteria, documentation requirements and platform
              processes. Our role is to help businesses approach those
              requirements in a more structured way.
            </p>

            <Link href="/contact" className="whiteButton">
              Connect With BidAxis
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="valuesCards">
            {values.map((value) => (
              <article className="valueCard" key={value.title}>
                <div className="valueIcon">
                  <Icon name={value.icon} size={20} />
                </div>

                <div>
                  <strong>{value.title}</strong>
                  <p>{value.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ctaSection">
        <div className="container">
          <div className="cta">
            <div className="ctaGrid" />

            <div className="ctaContent">
              <div className="ctaIcon">
                <Icon name="handshake" size={27} />
              </div>

              <div>
                <span>READY TO WORK WITH BIDAXIS?</span>
                <h2>
                  Let&apos;s simplify your
                  <strong> procurement journey.</strong>
                </h2>

                <p>
                  Connect with our team for GeM, tender documentation
                  and government procurement support.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Contact Us
                <Icon name="arrow" size={15} />
              </Link>

              <a href="tel:+918882537520" className="ctaSecondary">
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
          overflow: hidden;
          color: var(--ink);
          background: #fff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        /* HERO */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 100px;
          color: #fff;
          background:
            radial-gradient(
              circle at 82% 25%,
              rgba(44, 158, 246, 0.19),
              transparent 27%
            ),
            linear-gradient(
              120deg,
              #031427 0%,
              #05294f 52%,
              #0759a9 100%
            );
        }

        .heroGrid,
        .valuesGridBg,
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
          opacity: 0.55;
          mask-image: linear-gradient(
            90deg,
            #000,
            transparent 90%
          );
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glow1 {
          width: 450px;
          height: 450px;
          right: -200px;
          top: -220px;
          border: 1px solid rgba(92, 192, 255, 0.14);
        }

        .glow2 {
          width: 300px;
          height: 300px;
          left: -180px;
          bottom: -160px;
          background: rgba(30, 143, 230, 0.08);
        }

        .heroLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr minmax(420px, 0.88fr);
          gap: 70px;
          align-items: center;
        }

        .heroContent {
          max-width: 660px;
        }

        .eyebrow,
        .darkLabel {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #73c9ff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .eyebrow > span,
        .darkLabel > span {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(106, 198, 255, 0.18);
          border-radius: 8px;
          background: rgba(58, 165, 240, 0.1);
        }

        .hero h1 {
          margin: 18px 0 0;
          max-width: 650px;
          font-size: clamp(43px, 5vw, 65px);
          line-height: 1.04;
          letter-spacing: -2.7px;
        }

        .hero h1 span {
          color: #75caff;
        }

        .heroText {
          max-width: 590px;
          margin: 20px 0 0;
          color: #afc6da;
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
          background: linear-gradient(135deg, #0874dd, #1598f4);
          box-shadow: 0 14px 28px rgba(7, 110, 214, 0.25);
        }

        .secondaryButton {
          color: #dcebf7;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-2px);
        }

        .heroPoints {
          display: flex;
          flex-wrap: wrap;
          gap: 17px;
          margin-top: 27px;
          color: #9cb7ce;
          font-size: 8px;
          font-weight: 700;
        }

        .heroPoints div {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .heroPoints :global(svg) {
          color: #65c3ff;
        }

        /* DASHBOARD */

        .visual {
          position: relative;
          min-height: 475px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dashboard {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 470px;
          padding: 21px;
          border: 1px solid rgba(140, 207, 255, 0.17);
          border-radius: 22px;
          background: rgba(6, 34, 63, 0.92);
          box-shadow:
            0 35px 70px rgba(0, 10, 25, 0.35),
            inset 0 1px rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .dashboardHeader,
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

        .dashboardLogo {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: #69c4ff;
          background: rgba(56, 164, 239, 0.11);
          border: 1px solid rgba(104, 194, 255, 0.15);
        }

        .dashboardBrand > div:last-child,
        .dashboardFooter > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .dashboardBrand span,
        .dashboardFooter span {
          color: #7292ad;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .dashboardBrand strong {
          margin-top: 3px;
          color: #fff;
          font-size: 11px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border-radius: 999px;
          color: #6bd8a2;
          background: rgba(63, 193, 129, 0.08);
          border: 1px solid rgba(88, 213, 153, 0.14);
          font-size: 6px;
          font-weight: 900;
        }

        .status i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #63d69d;
          box-shadow: 0 0 0 4px rgba(99, 214, 157, 0.08);
        }

        .ecosystem {
          position: relative;
          height: 240px;
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 15px;
          background:
            radial-gradient(
              circle at center,
              rgba(31, 143, 225, 0.1),
              transparent 50%
            ),
            rgba(255, 255, 255, 0.02);
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px dashed rgba(105, 192, 250, 0.13);
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit1 {
          width: 160px;
          height: 160px;
        }

        .orbit2 {
          width: 215px;
          height: 215px;
        }

        .centerNode {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border: 1px solid rgba(112, 200, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: #092f55;
          box-shadow: 0 0 40px rgba(20, 139, 225, 0.12);
        }

        .centerIcon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #69c5ff;
          background: rgba(63, 168, 241, 0.11);
        }

        .centerNode span {
          margin-top: 7px;
          color: #6d94b1;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .centerNode strong {
          margin-top: 2px;
          color: #dbeaf5;
          font-size: 7px;
        }

        .node {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          flex-direction: column;
          gap: 4px;
          color: #86a5bd;
          font-size: 6px;
          font-weight: 800;
        }

        .node > div {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(110, 199, 255, 0.14);
          border-radius: 10px;
          color: #68c2ff;
          background: #0b365f;
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

        .dashboardCards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 9px;
        }

        .dashboardFooter {
          margin-top: 9px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.025);
        }

        .dashboardFooter strong {
          margin-top: 3px;
          color: #c4d7e5;
          font-size: 6px;
        }

        .supportBadge {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 6px 8px;
          border-radius: 7px;
          color: #67c6ff;
          background: rgba(58, 160, 232, 0.09);
          font-size: 6px;
          font-weight: 800;
        }

        .floatingCard {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid rgba(150, 211, 255, 0.16);
          border-radius: 11px;
          background: rgba(7, 40, 72, 0.97);
          box-shadow: 0 18px 35px rgba(0, 12, 30, 0.25);
        }

        .floatingCard > span {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #67c3ff;
          background: rgba(53, 158, 233, 0.11);
        }

        .floatingCard > div {
          display: flex;
          flex-direction: column;
        }

        .floatingCard small {
          color: #7192ad;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .floatingCard strong {
          margin-top: 2px;
          color: #d9e8f3;
          font-size: 7px;
        }

        .floating1 {
          top: 16px;
          right: -35px;
        }

        .floating2 {
          left: -38px;
          bottom: 22px;
        }

        /* ABOUT */

        .aboutSection {
          padding: 95px 0;
          background: #fff;
        }

        .aboutLayout {
          display: grid;
          grid-template-columns: 1fr 0.88fr;
          gap: 80px;
          align-items: center;
        }

        .aboutContent h2,
        .sectionHeading h2,
        .valuesContent h2 {
          margin: 14px 0 0;
          color: #102941;
          font-size: clamp(30px, 3vw, 41px);
          line-height: 1.12;
          letter-spacing: -1.3px;
        }

        .aboutContent h2 span,
        .sectionHeading h2 span {
          color: var(--blue);
        }

        .aboutContent > p {
          max-width: 590px;
          margin: 15px 0 0;
          color: #718194;
          font-size: 12px;
          line-height: 1.8;
        }

        .aboutChecks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 25px;
        }

        .aboutChecks > div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #40566d;
          font-size: 9px;
          font-weight: 700;
        }

        .aboutChecks :global(svg) {
          color: #0872d8;
        }

        /* JOURNEY */

        .journeyCard {
          padding: 23px;
          border: 1px solid #e1e9f1;
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

        .journeyHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 10px;
        }

        .journeyHeader > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .journeyHeader span {
          color: #8a99a8;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .journeyHeader strong {
          margin-top: 3px;
          color: #1e3852;
          font-size: 12px;
        }

        .journeyIcon {
          width: 41px;
          height: 41px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          color: var(--blue);
          background: #eaf4ff;
        }

        /* MISSION */

        .missionSection {
          padding: 0 0 95px;
          background: #fff;
        }

        .missionGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px;
        }

        .missionCard {
          position: relative;
          overflow: hidden;
          display: flex;
          gap: 18px;
          padding: 29px;
          border: 1px solid #dbe8f4;
          border-radius: 18px;
          background:
            linear-gradient(
              135deg,
              #eef6ff,
              #f9fcff
            );
        }

        .visionCard {
          border-color: #e4e5d5;
          background:
            linear-gradient(
              135deg,
              #fffceb,
              #fffef7
            );
        }

        .missionIcon {
          position: relative;
          z-index: 2;
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #0756b8;
          background: #fff;
          box-shadow: 0 8px 18px rgba(30, 60, 90, 0.07);
        }

        .visionCard .missionIcon {
          color: #a96b00;
        }

        .missionCard > div:nth-child(2) {
          position: relative;
          z-index: 2;
        }

        .missionCard span {
          color: #0756b8;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .visionCard span {
          color: #a96b00;
        }

        .missionCard h2 {
          margin: 5px 0 0;
          color: #19344e;
          font-size: 18px;
        }

        .missionCard p {
          max-width: 450px;
          margin: 8px 0 0;
          color: #6f8192;
          font-size: 9px;
          line-height: 1.65;
        }

        .cardDecoration {
          position: absolute;
          width: 160px;
          height: 160px;
          right: -70px;
          bottom: -85px;
          border: 20px solid rgba(7, 86, 184, 0.035);
          border-radius: 50%;
        }

        /* SERVICES */

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
          margin: 0 auto 39px;
          text-align: center;
        }

        .sectionHeading p {
          max-width: 560px;
          margin: 12px auto 0;
          color: #7c8b9b;
          font-size: 11px;
          line-height: 1.65;
        }

        .servicesGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .serviceCard {
          padding: 22px;
          border: 1px solid #e0e8f0;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 9px 25px rgba(20, 50, 80, 0.04);
          transition: 0.25s ease;
        }

        .serviceCard:hover {
          transform: translateY(-5px);
          border-color: #bfdcf5;
          box-shadow: 0 20px 38px rgba(20, 50, 80, 0.09);
        }

        .serviceIcon {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .serviceCard h3 {
          margin: 17px 0 0;
          color: #19334d;
          font-size: 12px;
        }

        .serviceCard > p {
          min-height: 46px;
          margin: 8px 0 0;
          color: #7b8b9b;
          font-size: 9px;
          line-height: 1.65;
        }

        .serviceBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid #edf1f5;
          color: var(--blue);
        }

        .serviceBottom span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #46709a;
          font-size: 7px;
          font-weight: 800;
        }

        /* VALUES */

        .valuesSection {
          position: relative;
          overflow: hidden;
          padding: 88px 0;
          color: #fff;
          background:
            radial-gradient(
              circle at 85% 20%,
              rgba(48, 162, 243, 0.15),
              transparent 26%
            ),
            linear-gradient(
              120deg,
              #04172c,
              #07365f
            );
        }

        .valuesGridBg {
          opacity: 0.4;
        }

        .valuesLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .valuesContent h2 {
          color: #fff;
        }

        .valuesContent h2 span {
          color: #70c8ff;
        }

        .valuesContent > p {
          margin: 15px 0 0;
          color: #a9bfd3;
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
        }

        .valuesCards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 11px;
        }

        .valueCard {
          display: flex;
          gap: 11px;
          padding: 17px;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.045);
        }

        .valueIcon {
          width: 38px;
          height: 38px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #6fc6ff;
          background: rgba(62, 161, 231, 0.1);
        }

        .valueCard strong {
          color: #e8f2f9;
          font-size: 9px;
        }

        .valueCard p {
          margin: 4px 0 0;
          color: #91abc0;
          font-size: 7px;
          line-height: 1.5;
        }

        /* CTA */

        .ctaSection {
          padding: 70px 0 85px;
          background: #f5f8fc;
        }

        .cta {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 31px;
          border-radius: 20px;
          color: #fff;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(83, 185, 255, 0.2),
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
          opacity: 0.35;
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
          width: 56px;
          height: 56px;
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
          border: 1px solid rgba(255, 255, 255, 0.22);
          background: rgba(255, 255, 255, 0.08);
        }

        /* RESPONSIVE */

        @media (max-width: 1050px) {
          .heroLayout,
          .aboutLayout,
          .valuesLayout {
            grid-template-columns: 1fr;
          }

          .visual {
            width: 100%;
            max-width: 620px;
            margin: auto;
          }

          .servicesGrid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {
          .hero {
            padding: 70px 0;
          }

          .floating1,
          .floating2 {
            display: none;
          }

          .missionGrid,
          .servicesGrid,
          .valuesCards {
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

          .ecosystem {
            height: 230px;
          }

          .node1 {
            left: 20px;
          }

          .node2 {
            right: 20px;
          }

          .node3 {
            left: 25px;
          }

          .node4 {
            right: 25px;
          }

          .dashboardCards {
            grid-template-columns: 1fr;
          }

          .aboutChecks {
            grid-template-columns: 1fr;
          }

          .missionCard {
            flex-direction: column;
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
   COMPONENTS
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
    <div className={`sectionLabel ${centered ? "centered" : ""}`}>
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
          border: 1px solid #d6e8f8;
          border-radius: 8px;
          background: #eaf5ff;
        }
      `}</style>
    </div>
  );
}

function MiniCard({
  icon,
  label,
  value,
}: {
  icon: IconName;
  label: string;
  value: string;
}) {
  return (
    <div className="mini">
      <span>
        <Icon name={icon} size={14} />
      </span>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>

      <style jsx>{`
        .mini {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.025);
        }

        .mini > span {
          width: 28px;
          height: 28px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #65c1ff;
          background: rgba(50, 155, 230, 0.1);
        }

        .mini > div {
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

function JourneyItem({
  number,
  icon,
  title,
  text,
  last = false,
}: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
  last?: boolean;
}) {
  return (
    <div className={`journeyItem ${last ? "last" : ""}`}>
      <div className="number">{number}</div>

      <div className="itemIcon">
        <Icon name={icon} size={17} />
      </div>

      <div className="itemContent">
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      {!last && <div className="line" />}

      <style jsx>{`
        .journeyItem {
          position: relative;
          display: grid;
          grid-template-columns: 27px 38px 1fr;
          gap: 10px;
          align-items: center;
          padding: 13px 0;
        }

        .number {
          color: #91a0af;
          font-size: 7px;
          font-weight: 900;
        }

        .itemIcon {
          position: relative;
          z-index: 2;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #0756b8;
          background: #eaf4ff;
        }

        .itemContent strong {
          color: #263f56;
          font-size: 9px;
        }

        .itemContent p {
          margin: 3px 0 0;
          color: #82909f;
          font-size: 7px;
          line-height: 1.5;
        }

        .line {
          position: absolute;
          width: 1px;
          height: 17px;
          left: 45px;
          bottom: -8px;
          background: #dce6ef;
        }
      `}</style>
    </div>
  );
}