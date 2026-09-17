"use client";

import Link from "next/link";

type IconName =
  | "arrow"
  | "check"
  | "auction"
  | "chart"
  | "shield"
  | "clock"
  | "target"
  | "users"
  | "trend"
  | "rupee"
  | "strategy"
  | "headset"
  | "spark"
  | "phone"
  | "trophy"
  | "bolt"
  | "document";

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
        <path d="m5 12 4 4L19 6" />
      )}

      {name === "auction" && (
        <>
          <path d="m14 5 5 5" />
          <path d="m12 7 5 5" />
          <path d="m5 14 7-7" />
          <path d="m8 17 7-7" />
          <path d="M3 21h8" />
        </>
      )}

      {name === "chart" && (
        <>
          <path d="M4 20V10" />
          <path d="M10 20V4" />
          <path d="M16 20v-7" />
          <path d="M22 20H2" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}

      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}

      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
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

      {name === "trend" && (
        <>
          <path d="m4 17 5-5 4 3 7-8" />
          <path d="M15 7h5v5" />
        </>
      )}

      {name === "rupee" && (
        <>
          <path d="M6 5h12" />
          <path d="M6 9h12" />
          <path d="M7 5c7 0 7 8 0 8h2l7 7" />
        </>
      )}

      {name === "strategy" && (
        <>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="m8 7 3 8M16 7l-3 8M8 6h8" />
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

      {name === "trophy" && (
        <>
          <path d="M8 4h8v5a4 4 0 0 1-8 0z" />
          <path d="M8 6H4v2c0 2 1.5 3 4 3" />
          <path d="M16 6h4v2c0 2-1.5 3-4 3" />
          <path d="M12 13v4M8 21h8M9 17h6" />
        </>
      )}

      {name === "bolt" && (
        <path d="m13 2-8 12h6l-1 8 9-13h-6z" />
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}
    </svg>
  );
}

const supportServices: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}[] = [
  {
    number: "01",
    icon: "document",
    title: "Reverse Auction Preparation",
    text: "Review the applicable auction conditions, bidding structure and participation requirements before the event.",
  },
  {
    number: "02",
    icon: "strategy",
    title: "Price Strategy Guidance",
    text: "Build a structured bidding approach around your commercial limits, tender conditions and business considerations.",
  },
  {
    number: "03",
    icon: "chart",
    title: "Competition Analysis",
    text: "Use available auction information and bid movement to better understand the competitive bidding environment.",
  },
  {
    number: "04",
    icon: "headset",
    title: "Live Auction Support",
    text: "Receive operational guidance during the auction window to support timely and informed participation.",
  },
  {
    number: "05",
    icon: "target",
    title: "Bid Optimization",
    text: "Structure bidding decisions around pre-defined commercial boundaries rather than unplanned price reductions.",
  },
  {
    number: "06",
    icon: "trophy",
    title: "Post-Auction Assistance",
    text: "Review the auction outcome and applicable next steps after completion of the reverse auction process.",
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
    title: "Auction Review",
    text: "Understand the applicable auction conditions and participation requirements.",
  },
  {
    step: "02",
    icon: "strategy",
    title: "Strategy Planning",
    text: "Define commercial boundaries and a structured bidding approach.",
  },
  {
    step: "03",
    icon: "bolt",
    title: "Live Participation",
    text: "Participate during the auction window with operational support.",
  },
  {
    step: "04",
    icon: "chart",
    title: "Outcome Review",
    text: "Review the auction result and identify applicable next steps.",
  },
];

export default function ReverseAuctionPage() {
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
                <Icon name="auction" size={14} />
              </span>
              BIDAXIS • REVERSE AUCTION SUPPORT
            </div>

            <h1>
              Compete Smarter in
              <span> Reverse Auctions.</span>
            </h1>

            <p className="heroText">
              Strategic guidance and operational support for businesses
              participating in government reverse auctions — from
              preparation and commercial planning to live auction
              participation and post-auction review.
            </p>

            <div className="heroActions">
              <Link href="/contact" className="primaryButton">
                Get Auction Support
                <Icon name="arrow" size={16} />
              </Link>

              <a href="#process" className="secondaryButton">
                View Auction Process
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Auction Preparation
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Strategy Guidance
              </div>

              <div>
                <span>
                  <Icon name="check" size={12} />
                </span>
                Live Support
              </div>
            </div>
          </div>

          {/* =================================================
              LIVE AUCTION DASHBOARD
          ================================================= */}

          <div className="auctionVisual">
            <div className="visualGlow" />

            <div className="auctionDashboard">
              <div className="dashboardTop">
                <div className="dashboardBrand">
                  <div className="brandIcon">
                    <Icon name="auction" size={20} />
                  </div>

                  <div>
                    <span>REVERSE AUCTION</span>
                    <strong>Live Bidding Console</strong>
                  </div>
                </div>

                <div className="liveBadge">
                  <i />
                  LIVE
                </div>
              </div>

              <div className="auctionSummary">
                <div className="summaryMain">
                  <span>CURRENT BID</span>

                  <div className="currentPrice">
                    ₹ 8,42,500
                  </div>

                  <div className="priceMovement">
                    <Icon name="trend" size={12} />
                    Bid movement: ₹7,500
                  </div>
                </div>

                <div className="timerBox">
                  <span>TIME LEFT</span>
                  <strong>08:42</strong>
                  <small>AUCTION ACTIVE</small>
                </div>
              </div>

              <div className="chartPanel">
                <div className="chartHeader">
                  <div>
                    <span>AUCTION ACTIVITY</span>
                    <strong>Bid Movement</strong>
                  </div>

                  <span className="roundBadge">
                    ROUND 06
                  </span>
                </div>

                <div className="chartArea">
                  <div className="chartLines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <svg
                    className="bidChart"
                    viewBox="0 0 400 110"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="areaGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#1599f4"
                          stopOpacity="0.32"
                        />
                        <stop
                          offset="100%"
                          stopColor="#1599f4"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 18 C35 21,55 27,82 31 S130 40,158 45 S205 57,235 62 S285 74,318 81 S360 88,400 98 L400 110 L0 110 Z"
                      fill="url(#areaGradient)"
                    />

                    <path
                      d="M0 18 C35 21,55 27,82 31 S130 40,158 45 S205 57,235 62 S285 74,318 81 S360 88,400 98"
                      fill="none"
                      stroke="#42b6ff"
                      strokeWidth="3"
                    />

                    <circle
                      cx="400"
                      cy="98"
                      r="5"
                      fill="#66c6ff"
                    />
                  </svg>

                  <div className="chartLabels">
                    <span>R1</span>
                    <span>R2</span>
                    <span>R3</span>
                    <span>R4</span>
                    <span>R5</span>
                    <span>R6</span>
                  </div>
                </div>
              </div>

              <div className="auctionMetrics">
                <Metric
                  label="START PRICE"
                  value="₹ 9,25,000"
                  icon="rupee"
                />

                <Metric
                  label="ROUNDS"
                  value="06"
                  icon="auction"
                />

                <Metric
                  label="STATUS"
                  value="Active"
                  icon="bolt"
                  active
                />
              </div>

              <div className="strategyPanel">
                <div className="strategyLeft">
                  <div className="strategyIcon">
                    <Icon name="shield" size={17} />
                  </div>

                  <div>
                    <span>BIDDING DISCIPLINE</span>
                    <strong>
                      Stay within your approved commercial limit
                    </strong>
                  </div>
                </div>

                <div className="strategyStatus">
                  <i />
                  Monitoring
                </div>
              </div>
            </div>

            <div className="floatCard floatTop">
              <div className="floatIcon">
                <Icon name="clock" size={17} />
              </div>

              <div>
                <span>AUCTION WINDOW</span>
                <strong>Live Monitoring</strong>
              </div>
            </div>

            <div className="floatCard floatBottom">
              <div className="floatIcon">
                <Icon name="strategy" size={17} />
              </div>

              <div>
                <span>STRATEGY</span>
                <strong>Commercial Guidance</strong>
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
              icon="auction"
              text="REVERSE AUCTION ASSISTANCE"
            />

            <h2>
              Reverse auctions move fast.
              <span> Preparation matters.</span>
            </h2>

            <p>
              Reverse auctions can require quick commercial decisions
              within the applicable auction rules. BidAxis helps
              businesses understand the auction process, prepare their
              bidding approach and participate with better operational
              clarity.
            </p>

            <div className="benefitList">
              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Auction preparation
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Price strategy guidance
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Live auction support
              </div>

              <div>
                <span>
                  <Icon name="check" size={13} />
                </span>
                Post-auction review
              </div>
            </div>
          </div>

          {/* STRATEGY GRAPHIC */}

          <div className="strategyBoard">
            <div className="strategyHeader">
              <div>
                <span>AUCTION STRATEGY</span>
                <strong>Structured Bid Planning</strong>
              </div>

              <div className="strategyHeaderIcon">
                <Icon name="target" size={21} />
              </div>
            </div>

            <div className="strategySteps">
              <StrategyStep
                number="01"
                icon="document"
                title="Review"
                text="Auction terms"
              />

              <div className="strategyArrow">
                <Icon name="arrow" size={13} />
              </div>

              <StrategyStep
                number="02"
                icon="strategy"
                title="Plan"
                text="Commercial limits"
              />

              <div className="strategyArrow">
                <Icon name="arrow" size={13} />
              </div>

              <StrategyStep
                number="03"
                icon="bolt"
                title="Participate"
                text="Live auction"
              />
            </div>

            <div className="strategyFooter">
              <div>
                <span>KEY PRINCIPLE</span>
                <strong>
                  Structured decisions over reactive bidding
                </strong>
              </div>

              <div className="controlBadge">
                <Icon name="shield" size={14} />
                Controlled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPORT SERVICES
      ===================================================== */}

      <section className="servicesSection">
        <div className="container">
          <div className="sectionHeading">
            <SectionLabel
              icon="headset"
              text="OUR AUCTION SUPPORT"
              centered
            />

            <h2>
              Support Across the
              <span> Auction Lifecycle.</span>
            </h2>

            <p>
              Practical assistance from pre-auction preparation through
              live participation and post-auction review.
            </p>
          </div>

          <div className="servicesGrid">
            {supportServices.map((service) => (
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
                    Auction Support
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
              icon="strategy"
              text="REVERSE AUCTION PROCESS"
              centered
            />

            <h2>
              Prepare. Plan. Participate.
              <span> Review.</span>
            </h2>

            <p>
              A structured workflow designed around the key stages of
              reverse auction participation.
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
          WHY
      ===================================================== */}

      <section className="whySection">
        <div className="whyGrid" />

        <div className="container whyLayout">
          <div className="whyContent">
            <div className="darkLabel">
              <span>
                <Icon name="target" size={13} />
              </span>
              STRATEGIC AUCTION SUPPORT
            </div>

            <h2>
              Make auction decisions with
              <span> greater structure.</span>
            </h2>

            <p>
              Reverse auctions are time-sensitive and price-focused.
              Our support model helps businesses prepare their approach,
              understand the applicable process and maintain commercial
              discipline during participation.
            </p>

            <Link href="/contact" className="whiteButton">
              Discuss Your Auction
              <Icon name="arrow" size={15} />
            </Link>
          </div>

          <div className="whyCards">
            <WhyCard
              icon="document"
              title="Pre-Auction Review"
              text="Understand the applicable auction rules and participation requirements."
            />

            <WhyCard
              icon="strategy"
              title="Structured Planning"
              text="Define commercial boundaries before entering a live bidding environment."
            />

            <WhyCard
              icon="clock"
              title="Live Coordination"
              text="Receive operational support during the applicable auction window."
            />

            <WhyCard
              icon="chart"
              title="Outcome Review"
              text="Review auction results and the applicable next steps after completion."
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
                <Icon name="auction" size={28} />
              </div>

              <div>
                <span>
                  PREPARING FOR A REVERSE AUCTION?
                </span>

                <h2>
                  Build your auction strategy with
                  <strong> BidAxis.</strong>
                </h2>

                <p>
                  Connect with our team for reverse auction
                  preparation, strategic guidance and participation
                  support.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Get Auction Support
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
              circle at 83% 33%,
              rgba(35, 157, 255, 0.2),
              transparent 27%
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
            rgba(0, 0, 0, 0.9),
            transparent 82%
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
          width: 250px;
          height: 250px;
          left: -150px;
          bottom: -160px;
          background: rgba(28, 139, 226, 0.08);
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
           AUCTION DASHBOARD
        ===================================================== */

        .auctionVisual {
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

        .auctionDashboard {
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
        .auctionSummary,
        .chartHeader,
        .strategyPanel {
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
          border: 1px solid rgba(102, 193, 255, 0.18);
          border-radius: 11px;
          color: #68c1ff;
          background: rgba(58, 160, 232, 0.11);
        }

        .dashboardBrand > div:last-child,
        .chartHeader > div:first-child,
        .strategyLeft > div:last-child,
        .floatCard > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .dashboardBrand span,
        .chartHeader span,
        .strategyLeft span,
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

        .liveBadge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid rgba(86, 219, 154, 0.15);
          border-radius: 999px;
          color: #69d69f;
          background: rgba(66, 195, 130, 0.08);
          font-size: 7px;
          font-weight: 900;
        }

        .liveBadge i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #61d498;
          box-shadow: 0 0 0 4px rgba(97, 212, 152, 0.08);
          animation: pulse 1.7s infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(97, 212, 152, 0.2);
          }

          70% {
            box-shadow: 0 0 0 6px rgba(97, 212, 152, 0);
          }

          100% {
            box-shadow: 0 0 0 0 rgba(97, 212, 152, 0);
          }
        }

        .auctionSummary {
          margin-top: 19px;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.035);
        }

        .summaryMain > span,
        .timerBox > span {
          display: block;
          color: #7290a8;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .currentPrice {
          margin-top: 5px;
          color: #ffffff;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .priceMovement {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 5px;
          color: #65d29a;
          font-size: 6px;
          font-weight: 800;
        }

        .timerBox {
          min-width: 95px;
          padding: 10px;
          border: 1px solid rgba(75, 181, 255, 0.12);
          border-radius: 10px;
          text-align: center;
          background: rgba(26, 119, 190, 0.08);
        }

        .timerBox strong {
          display: block;
          margin-top: 4px;
          color: #7ccfff;
          font-size: 18px;
          letter-spacing: 0.8px;
        }

        .timerBox small {
          display: block;
          margin-top: 2px;
          color: #5f819d;
          font-size: 4px;
          font-weight: 900;
        }

        .chartPanel {
          margin-top: 10px;
          padding: 13px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .chartHeader strong {
          margin-top: 3px;
          color: #c9dbea;
          font-size: 8px;
        }

        .roundBadge {
          padding: 5px 7px;
          border-radius: 6px;
          color: #6fc7ff !important;
          background: rgba(56, 161, 235, 0.09);
          font-size: 5px !important;
        }

        .chartArea {
          position: relative;
          height: 115px;
          margin-top: 10px;
          overflow: hidden;
        }

        .chartLines {
          position: absolute;
          inset: 0 0 17px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }

        .chartLines i {
          display: block;
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.045);
        }

        .bidChart {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 95px;
        }

        .chartLabels {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          color: #5c7890;
          font-size: 5px;
          font-weight: 700;
        }

        .auctionMetrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 9px;
        }

        .strategyPanel {
          margin-top: 9px;
          padding: 10px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 11px;
          background: rgba(255, 255, 255, 0.03);
        }

        .strategyLeft {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .strategyIcon {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #6bc4ff;
          background: rgba(50, 155, 230, 0.1);
        }

        .strategyLeft strong {
          margin-top: 2px;
          color: #c4d6e4;
          font-size: 6px;
        }

        .strategyStatus {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #66d299;
          font-size: 5px;
          font-weight: 800;
        }

        .strategyStatus i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #66d299;
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
          top: 18px;
          right: -36px;
        }

        .floatBottom {
          left: -40px;
          bottom: 22px;
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

        .strategyBoard {
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

        .strategyHeader,
        .strategyFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .strategyHeader > div:first-child,
        .strategyFooter > div:first-child {
          display: flex;
          flex-direction: column;
        }

        .strategyHeader span,
        .strategyFooter span {
          color: #8d9bab;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .strategyHeader strong {
          margin-top: 3px;
          color: #1d3853;
          font-size: 11px;
        }

        .strategyHeaderIcon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e9f4ff;
        }

        .strategySteps {
          display: grid;
          grid-template-columns:
            1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 8px;
          margin: 31px 0;
        }

        .strategyArrow {
          color: #8eb8db;
        }

        .strategyFooter {
          padding-top: 15px;
          border-top: 1px solid #e9eef4;
        }

        .strategyFooter strong {
          margin-top: 2px;
          color: #40566d;
          font-size: 8px;
        }

        .controlBadge {
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

          .auctionVisual {
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

          .auctionVisual {
            min-height: auto;
          }

          .auctionDashboard {
            padding: 15px;
          }

          .auctionSummary {
            align-items: flex-start;
            flex-direction: column;
          }

          .timerBox {
            width: 100%;
          }

          .auctionMetrics {
            grid-template-columns: 1fr;
          }

          .benefitList {
            grid-template-columns: 1fr;
          }

          .strategySteps {
            grid-template-columns: 1fr;
          }

          .strategyArrow {
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

function Metric({
  label,
  value,
  icon,
  active = false,
}: {
  label: string;
  value: string;
  icon: IconName;
  active?: boolean;
}) {
  return (
    <div className="metric">
      <div className="metricIcon">
        <Icon name={icon} size={14} />
      </div>

      <div>
        <span>{label}</span>
        <strong className={active ? "active" : ""}>
          {value}
        </strong>
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

        strong.active {
          color: #64d297;
        }
      `}</style>
    </div>
  );
}

function StrategyStep({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: IconName;
  title: string;
  text: string;
}) {
  return (
    <div className="strategyStep">
      <div className="stepIcon">
        <Icon name={icon} size={18} />
      </div>

      <small>{number}</small>
      <strong>{title}</strong>
      <span>{text}</span>

      <style jsx>{`
        .strategyStep {
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
        }

        .stepIcon {
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

        small {
          margin-top: 7px;
          color: #0a77e8;
          font-size: 5px;
          font-weight: 900;
        }

        strong {
          margin-top: 2px;
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
            background 0.2s ease;
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