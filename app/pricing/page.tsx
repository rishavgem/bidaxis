"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

type IconName =
  | "document"
  | "user"
  | "growth"
  | "check"
  | "arrow"
  | "spark"
  | "target"
  | "shield"
  | "phone"
  | "briefcase"
  | "chart"
  | "layers"
  | "support";

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
    <svg {...props} aria-hidden="true">
      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "user" && (
        <>
          <circle cx="12" cy="8" r="4" />
          <path d="M5 21c0-4 2.8-7 7-7s7 3 7 7" />
        </>
      )}

      {name === "growth" && (
        <>
          <path d="M4 19V9" />
          <path d="M10 19V13" />
          <path d="M16 19V6" />
          <path d="m14 8 4-4 3 3" />
        </>
      )}

      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </>
      )}

      {name === "arrow" && (
        <>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
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
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </>
      )}

      {name === "shield" && (
        <>
          <path d="M12 3 5 6v5c0 4.8 2.7 8.1 7 10 4.3-1.9 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-4" />
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

      {name === "layers" && (
        <>
          <path d="m12 3 9 5-9 5-9-5z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </>
      )}

      {name === "support" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 15h2l2 2 2-2h2" />
          <path d="M8 10a4 4 0 0 1 8 0" />
        </>
      )}
    </svg>
  );
}

const plans: {
  number: string;
  icon: IconName;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  features: string[];
  href: string;
  button: string;
  accent: string;
  soft: string;
  border: string;
  featured?: boolean;
}[] = [
  {
    number: "01",
    icon: "document",
    eyebrow: "PARTICIPATE",
    title: "Tender Management",
    highlight: "Win More Opportunities",
    description:
      "Complete tender bidding support for businesses participating in government procurement opportunities.",
    features: [
      "Tender Search & Discovery",
      "Tender Alerts",
      "AI Tender Recommendations",
      "Bid Documentation Support",
      "Reverse Auction Assistance",
      "Tender Consultancy",
    ],
    href: "/pricing/tender-management",
    button: "Explore Tender Plans",
    accent: "#1165ed",
    soft: "#edf5ff",
    border: "#cfe2ff",
  },
  {
    number: "02",
    icon: "user",
    eyebrow: "MANAGE",
    title: "GeM Account Management",
    highlight: "Manage GeM Professionally",
    description:
      "Professional GeM account support covering registration, catalogue management and ongoing consultancy.",
    features: [
      "GeM Seller Registration",
      "Profile & Account Management",
      "Catalogue Listing",
      "Compliance Assistance",
      "Account Optimization",
      "Dedicated GeM Consultancy",
    ],
    href: "/pricing/account-management",
    button: "Explore GeM Services",
    accent: "#00a979",
    soft: "#eafbf5",
    border: "#c7eee1",
    featured: true,
  },
  {
    number: "03",
    icon: "growth",
    eyebrow: "GROW",
    title: "Strategic Growth",
    highlight: "Build Long-Term Growth",
    description:
      "Strategic GeM growth support for businesses focused on marketplace expansion and long-term revenue development.",
    features: [
      "Strategic GeM Growth Planning",
      "Product & Catalogue Optimization",
      "Active Tender Participation",
      "Competition Tracking",
      "Incident Management",
      "Revenue Growth Strategy",
    ],
    href: "/pricing/gem-strategic-growth",
    button: "Explore Growth Plans",
    accent: "#7c31ea",
    soft: "#f5efff",
    border: "#e3d4fb",
  },
];

const stages: {
  number: string;
  icon: IconName;
  title: string;
  subtitle: string;
  text: string;
  accent: string;
  soft: string;
}[] = [
  {
    number: "01",
    icon: "document",
    title: "Participate",
    subtitle: "Find & Bid",
    text: "Discover opportunities, prepare bid documents and participate in government tenders with structured support.",
    accent: "#1165ed",
    soft: "#edf5ff",
  },
  {
    number: "02",
    icon: "user",
    title: "Manage",
    subtitle: "Operate & Optimize",
    text: "Keep your GeM account, catalogue and marketplace activities professionally managed.",
    accent: "#00a979",
    soft: "#eafbf5",
  },
  {
    number: "03",
    icon: "growth",
    title: "Grow",
    subtitle: "Scale Strategically",
    text: "Build a strategic GeM growth plan focused on stronger participation and long-term business development.",
    accent: "#7c31ea",
    soft: "#f5efff",
  },
];

export default function PricingPage() {
  return (
    <main className="page">
      {/* =========================================================
          HERO
      ========================================================= */}
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
              BIDAXIS PRICING
            </div>

            <h1>
              Choose the Right Support
              <span> for Your Business.</span>
            </h1>

            <p className="heroLead">
              From tender participation and GeM account management to
              strategic marketplace growth, choose the support model aligned
              with your business requirement.
            </p>

            <div className="heroActions">
              <a href="#plans" className="primaryButton">
                Explore Our Services
                <Icon name="arrow" size={16} />
              </a>

              <Link href="/contact" className="secondaryButton">
                Talk to Our Team
              </Link>
            </div>

            <div className="heroTrust">
              <span>
                <Icon name="check" size={13} />
                Tender Participation
              </span>

              <span>
                <Icon name="check" size={13} />
                GeM Management
              </span>

              <span>
                <Icon name="check" size={13} />
                Strategic Growth
              </span>
            </div>
          </div>

          <div className="heroGraphic">
            <div className="graphicTop">
              <div>
                <small>BIDAXIS SUPPORT ECOSYSTEM</small>
                <strong>Choose Your Business Path</strong>
              </div>

              <span className="online">
                <i />
                SUPPORT
              </span>
            </div>

            <div className="graphicCenter">
              <div className="orbit orbit1" />
              <div className="orbit orbit2" />

              <div className="centerNode">
                <span>
                  <Icon name="briefcase" size={24} />
                </span>
                <small>BIDAXIS</small>
                <strong>Business Hub</strong>
              </div>

              <ServiceNode
                className="nodeTender"
                icon="document"
                title="Tender"
                subtitle="Participate"
                accent="#69b7ff"
              />

              <ServiceNode
                className="nodeGem"
                icon="user"
                title="GeM"
                subtitle="Manage"
                accent="#55deb2"
              />

              <ServiceNode
                className="nodeGrowth"
                icon="growth"
                title="Growth"
                subtitle="Scale"
                accent="#bc8cff"
              />
            </div>

            <div className="graphicBottom">
              <MiniMetric
                icon="document"
                label="TENDER"
                value="Participate"
              />

              <MiniMetric icon="user" label="ACCOUNT" value="Manage" />

              <MiniMetric icon="growth" label="STRATEGY" value="Grow" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="intro">
        <div className="container introGrid">
          <div>
            <SectionLabel icon="layers" text="THREE SUPPORT MODELS" />

            <h2 className="premiumHeading">
              One Platform.
              <span> Three Powerful Levels of Support.</span>
            </h2>

            <HeadingLine />
          </div>

          <div className="introContent">
            <strong>SUPPORT DESIGNED AROUND YOUR BUSINESS STAGE</strong>

            <p>
              Start with the service that matches your immediate requirement.
              Focus on tender participation, ongoing GeM account management,
              or strategic marketplace growth.
            </p>

            <div className="introBadges">
              <span>
                <Icon name="check" size={12} />
                Clear Service Categories
              </span>

              <span>
                <Icon name="check" size={12} />
                Dedicated Guidance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRICING / SERVICE CARDS
      ========================================================= */}
      <section className="plansSection" id="plans">
        <div className="container">
          <div className="plansGrid">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`planCard ${plan.featured ? "featured" : ""}`}
                style={
                  {
                    "--accent": plan.accent,
                    "--soft": plan.soft,
                    "--border": plan.border,
                  } as CSSProperties
                }
              >
                {plan.featured && (
                  <div className="recommended">
                    <Icon name="spark" size={10} />
                    POPULAR SUPPORT
                  </div>
                )}

                <div className="cardTop">
                  <div className="planIcon">
                    <Icon name={plan.icon} size={24} />
                  </div>

                  <span className="planNumber">{plan.number}</span>
                </div>

                <div className="planEyebrow">{plan.eyebrow}</div>

                <h3>{plan.title}</h3>

                <div className="titleLine" />

                <div className="planHighlight">
                  <Icon name="target" size={13} />
                  {plan.highlight}
                </div>

                <p className="planDescription">{plan.description}</p>

                <div className="cardDivider" />

                <div className="included">WHAT&apos;S INCLUDED</div>

                <div className="features">
                  {plan.features.map((feature) => (
                    <div className="featureRow" key={feature}>
                      <span>
                        <Icon name="check" size={11} />
                      </span>

                      <strong>{feature}</strong>
                    </div>
                  ))}
                </div>

                <Link href={plan.href} className="planButton">
                  <span>{plan.button}</span>
                  <Icon name="arrow" size={14} />
                </Link>

                <div className="cardGlow" />
              </article>
            ))}
          </div>

          {/* GUIDANCE */}
          <div className="guidance">
            <div className="guidanceGrid" />

            <div className="guidanceContent">
              <div className="guidanceIcon">
                <Icon name="support" size={24} />
              </div>

              <div>
                <div className="guidanceTags">
                  <span>NEED HELP CHOOSING?</span>
                  <span>PLAN GUIDANCE</span>
                </div>

                <h3>
                  Not Sure Where to <strong>Start?</strong>
                </h3>

                <p>
                  Every business has different tender and GeM requirements.
                  Tell us what you&apos;re looking to achieve and our team can
                  help you understand the available service options.
                </p>

                <div className="guidanceBenefits">
                  <span>
                    <Icon name="check" size={11} />
                    Understand Your Requirements
                  </span>

                  <span>
                    <Icon name="check" size={11} />
                    Compare Service Options
                  </span>

                  <span>
                    <Icon name="check" size={11} />
                    Get Plan Guidance
                  </span>
                </div>
              </div>
            </div>

            <div className="guidanceAction">
              <Link href="/contact">
                Contact Sales Team
                <Icon name="arrow" size={14} />
              </Link>

              <small>Get personalized service guidance</small>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}
      <section className="journeySection">
        <div className="container">
          <div className="centerHeading">
            <SectionLabel icon="target" text="BUILT FOR EVERY STAGE" />

            <h2>
              Your Business Journey.
              <span> Our Support.</span>
            </h2>

            <HeadingLine center />

            <p>
              Move from tender participation to professional marketplace
              management and long-term strategic growth.
            </p>
          </div>

          <div className="journeyGrid">
            {stages.map((stage, index) => (
              <article
                className="journeyCard"
                key={stage.title}
                style={
                  {
                    "--accent": stage.accent,
                    "--soft": stage.soft,
                  } as CSSProperties
                }
              >
                <div className="journeyHeader">
                  <div className="journeyIcon">
                    <Icon name={stage.icon} size={20} />
                  </div>

                  <span>{stage.number}</span>
                </div>

                <div className="journeySubtitle">{stage.subtitle}</div>

                <h3>{stage.title}</h3>

                <div className="journeyLine" />

                <p>{stage.text}</p>

                {index < stages.length - 1 && (
                  <div className="journeyArrow">
                    <Icon name="arrow" size={15} />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OBJECTIVE
      ========================================================= */}
      <section className="objectiveSection">
        <div className="container objectiveLayout">
          <div className="objectiveContent">
            <SectionLabel icon="chart" text="CHOOSE BY OBJECTIVE" />

            <h2>
              Start With What
              <span> You Want to Achieve.</span>
            </h2>

            <HeadingLine />

            <p>
              Choose the service category around your current business
              objective rather than choosing a plan based only on its name.
            </p>

            <div className="objectiveList">
              <Objective
                number="01"
                icon="document"
                title="Participate in Government Tenders"
                text="Explore Tender Management support."
              />

              <Objective
                number="02"
                icon="user"
                title="Professionally Manage My GeM Account"
                text="Explore GeM Account Management."
              />

              <Objective
                number="03"
                icon="growth"
                title="Build Long-Term Marketplace Growth"
                text="Explore Strategic Growth services."
              />
            </div>
          </div>

          <div className="supportMap">
            <div className="mapHeader">
              <div>
                <small>BIDAXIS SERVICE MAP</small>
                <strong>Find Your Support Path</strong>
              </div>

              <span>
                <Icon name="layers" size={20} />
              </span>
            </div>

            <div className="mapIntro">
              Select your current business objective and explore the
              corresponding support category.
            </div>

            <SupportPath
              number="01"
              icon="document"
              title="Tender Management"
              subtitle="Participate"
              description="Tender discovery, bid support & consultancy"
              progress={76}
              accent="#1165ed"
              soft="#edf5ff"
            />

            <SupportPath
              number="02"
              icon="user"
              title="GeM Account Management"
              subtitle="Manage"
              description="Account, catalogue & compliance support"
              progress={88}
              accent="#00a979"
              soft="#eafbf5"
            />

            <SupportPath
              number="03"
              icon="growth"
              title="Strategic Growth"
              subtitle="Grow"
              description="Marketplace strategy & business development"
              progress={95}
              accent="#7c31ea"
              soft="#f5efff"
            />

            <div className="mapFooter">
              <span>
                <Icon name="shield" size={13} />
                Business-focused support
              </span>

              <span>
                <Icon name="support" size={13} />
                Guidance available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="ctaSection">
        <div className="container">
          <div className="cta">
            <div className="ctaGrid" />
            <div className="ctaGlow" />

            <div className="ctaContent">
              <div className="ctaIcon">
                <Icon name="support" size={27} />
              </div>

              <div>
                <div className="ctaLabel">LET&apos;S FIND YOUR FIT</div>

                <h2>
                  Still Not Sure Which Service
                  <span> Is Right for You?</span>
                </h2>

                <p>
                  Tell us about your business, bidding activity and GeM goals.
                  Our team can help you understand the available support
                  options.
                </p>
              </div>
            </div>

            <div className="ctaActions">
              <Link href="/contact" className="ctaPrimary">
                Talk to Our Team
                <Icon name="arrow" size={14} />
              </Link>

              <a href="tel:+918882537520" className="ctaSecondary">
                <Icon name="phone" size={14} />
                8882537520
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          --navy: #03182d;
          --blue: #0756b8;
          --blue2: #0a77e8;
          --ink: #102941;
          --muted: #718195;

          overflow: hidden;
          color: var(--ink);
          background: #ffffff;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* ======================================================
           HERO
        ====================================================== */

        .hero {
          position: relative;
          overflow: hidden;
          padding: 92px 0 98px;
          color: white;
          background:
            radial-gradient(
              circle at 85% 15%,
              rgba(31, 160, 246, 0.2),
              transparent 30%
            ),
            linear-gradient(120deg, #021326 0%, #042f58 58%, #075cac 100%);
        }

        .heroGrid,
        .guidanceGrid,
        .ctaGrid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 1px,
              transparent 1px
            );
          background-size: 44px 44px;
        }

        .heroGrid {
          opacity: 0.5;
        }

        .heroGlow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .glowOne {
          width: 500px;
          height: 500px;
          top: -300px;
          right: -190px;
          border: 1px solid rgba(105, 197, 255, 0.15);
        }

        .glowTwo {
          width: 360px;
          height: 360px;
          left: -190px;
          bottom: -250px;
          background: rgba(26, 142, 224, 0.09);
        }

        .heroLayout {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(400px, 0.92fr);
          gap: 78px;
          align-items: center;
        }

        .heroContent {
          max-width: 670px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #72caff;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .eyebrow > span {
          width: 31px;
          height: 31px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(116, 204, 255, 0.18);
          border-radius: 9px;
          background: rgba(50, 160, 238, 0.11);
        }

        .hero h1 {
          max-width: 690px;
          margin: 18px 0 0;
          font-size: clamp(44px, 5vw, 66px);
          font-weight: 900;
          line-height: 1.03;
          letter-spacing: -2.8px;
        }

        .hero h1 span {
          display: block;
          margin-top: 6px;
          color: #79ccff;
        }

        .heroLead {
          max-width: 620px;
          margin: 21px 0 0;
          color: #b0c9dc;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.75;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 30px;
        }

        .primaryButton,
        .secondaryButton {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 21px;
          border-radius: 10px;
          font-size: 11px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .primaryButton {
          color: white;
          background: linear-gradient(135deg, #0874dd, #1598f4);
          box-shadow: 0 14px 28px rgba(7, 110, 214, 0.28);
        }

        .secondaryButton {
          color: #e0edf7;
          border: 1px solid rgba(255, 255, 255, 0.17);
          background: rgba(255, 255, 255, 0.06);
        }

        .primaryButton:hover,
        .secondaryButton:hover {
          transform: translateY(-2px);
        }

        .heroTrust {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 27px;
        }

        .heroTrust span {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #a3bfd4;
          font-size: 9px;
          font-weight: 800;
        }

        .heroTrust :global(svg) {
          color: #6dc8ff;
        }

        /* HERO GRAPHIC */

        .heroGraphic {
          position: relative;
          min-height: 425px;
          padding: 21px;
          border: 1px solid rgba(130, 206, 255, 0.17);
          border-radius: 22px;
          background: rgba(4, 31, 57, 0.92);
          box-shadow:
            0 35px 70px rgba(0, 10, 25, 0.38),
            inset 0 1px rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
        }

        .graphicTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .graphicTop > div {
          display: flex;
          flex-direction: column;
        }

        .graphicTop small {
          color: #718fa8;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .graphicTop strong {
          margin-top: 4px;
          color: #edf7fd;
          font-size: 13px;
          font-weight: 900;
        }

        .online {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid rgba(83, 218, 159, 0.14);
          border-radius: 999px;
          color: #60d79c;
          background: rgba(61, 192, 126, 0.08);
          font-size: 7px;
          font-weight: 900;
        }

        .online i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #60d79c;
        }

        .graphicCenter {
          position: relative;
          height: 260px;
          margin-top: 15px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 16px;
          background:
            radial-gradient(
              circle at center,
              rgba(27, 147, 230, 0.14),
              transparent 48%
            ),
            linear-gradient(
              rgba(255, 255, 255, 0.018),
              rgba(255, 255, 255, 0.008)
            );
        }

        .graphicCenter::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.4;
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }

        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(105, 199, 255, 0.09);
          border-radius: 50%;
        }

        .orbit1 {
          width: 210px;
          height: 210px;
        }

        .orbit2 {
          width: 145px;
          height: 145px;
        }

        .centerNode {
          position: absolute;
          z-index: 5;
          left: 50%;
          top: 50%;
          width: 110px;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(108, 201, 255, 0.21);
          border-radius: 50%;
          background: #0a3157;
          box-shadow: 0 0 45px rgba(20, 139, 225, 0.14);
        }

        .centerNode > span {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #68c6ff;
          background: rgba(62, 168, 241, 0.12);
        }

        .centerNode small {
          margin-top: 7px;
          color: #7093ae;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .centerNode strong {
          margin-top: 2px;
          color: #e2f0f9;
          font-size: 9px;
          font-weight: 900;
        }

        .graphicBottom {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 10px;
        }

        /* ======================================================
           INTRO
        ====================================================== */

        .intro {
          padding: 88px 0 45px;
          background: white;
        }

        .introGrid {
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 80px;
          align-items: end;
        }

        .premiumHeading {
          margin: 15px 0 0;
          max-width: 720px;
          color: #071d35;
          font-size: clamp(34px, 3.5vw, 48px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -1.7px;
        }

        .premiumHeading span {
          display: block;
          margin-top: 5px;
          color: #0756b8;
          font-weight: 900;
        }

        .introContent > strong {
          display: block;
          color: #173650;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.8px;
        }

        .introContent > p {
          margin: 10px 0 0;
          color: #718195;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.75;
        }

        .introBadges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .introBadges span {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 10px;
          border: 1px solid #dceaf6;
          border-radius: 999px;
          color: #4e6d88;
          background: #f5faff;
          font-size: 8px;
          font-weight: 900;
        }

        .introBadges :global(svg) {
          color: #0756b8;
        }

        /* ======================================================
           PLANS
        ====================================================== */

        .plansSection {
          padding: 42px 0 92px;
          background: white;
        }

        .plansGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .planCard {
          position: relative;
          overflow: hidden;
          min-height: 530px;
          padding: 27px;
          border: 1px solid #dfe7ef;
          border-radius: 20px;
          background: linear-gradient(180deg, #ffffff, #fbfdff);
          box-shadow: 0 12px 30px rgba(20, 50, 80, 0.055);
          transition: 0.25s ease;
        }

        .planCard::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent);
          opacity: 0;
          transition: 0.2s ease;
        }

        .planCard:hover {
          transform: translateY(-7px);
          border-color: var(--border);
          box-shadow: 0 25px 50px rgba(20, 50, 80, 0.12);
        }

        .planCard:hover::before,
        .planCard.featured::before {
          opacity: 1;
        }

        .planCard.featured {
          border-color: var(--border);
          box-shadow: 0 18px 42px rgba(0, 120, 90, 0.09);
        }

        .recommended {
          position: absolute;
          top: 0;
          right: 25px;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 7px 10px;
          border-radius: 0 0 9px 9px;
          color: var(--accent);
          background: var(--soft);
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .cardTop {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .planIcon {
          width: 53px;
          height: 53px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
          border-radius: 14px;
          color: var(--accent);
          background: var(--soft);
        }

        .planNumber {
          color: #d9e2eb;
          font-size: 32px;
          font-weight: 900;
        }

        .planEyebrow {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          margin-top: 22px;
          padding: 6px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--accent);
          background: var(--soft);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .planCard h3 {
          position: relative;
          z-index: 2;
          margin: 12px 0 0;
          color: #071d35;
          font-size: 22px;
          font-weight: 900;
          line-height: 1.18;
          letter-spacing: -0.6px;
        }

        .titleLine {
          position: relative;
          z-index: 2;
          width: 34px;
          height: 4px;
          margin-top: 10px;
          border-radius: 999px;
          background: var(--accent);
        }

        .planHighlight {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 15px;
          color: var(--accent);
          font-size: 10px;
          font-weight: 900;
        }

        .planDescription {
          position: relative;
          z-index: 2;
          min-height: 68px;
          margin: 10px 0 0;
          color: #6e8092;
          font-size: 10px;
          font-weight: 500;
          line-height: 1.65;
        }

        .cardDivider {
          position: relative;
          z-index: 2;
          height: 1px;
          margin: 18px 0;
          background: #e8edf2;
        }

        .included {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #173650;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .included::before {
          content: "";
          width: 5px;
          height: 17px;
          border-radius: 999px;
          background: var(--accent);
        }

        .features {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 15px;
        }

        .featureRow {
          display: flex;
          align-items: center;
          gap: 9px;
          min-height: 33px;
          padding: 6px 8px;
          border-radius: 8px;
          transition: 0.2s ease;
        }

        .featureRow:hover {
          background: var(--soft);
        }

        .featureRow > span {
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          color: var(--accent);
          background: var(--soft);
        }

        .featureRow strong {
          color: #405a72;
          font-size: 9px;
          font-weight: 800;
        }

        .planButton {
          position: relative;
          z-index: 2;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: 22px;
          padding: 0 15px;
          border-radius: 10px;
          color: white;
          background: var(--accent);
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s ease;
        }

        .planButton:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(20, 50, 80, 0.16);
        }

        .cardGlow {
          position: absolute;
          width: 190px;
          height: 190px;
          right: -120px;
          bottom: -120px;
          border-radius: 50%;
          background: var(--soft);
          opacity: 0.7;
        }

        /* ======================================================
           GUIDANCE
        ====================================================== */

        .guidance {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          margin-top: 26px;
          padding: 28px;
          border: 1px solid #d4e5f5;
          border-radius: 19px;
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(103, 226, 180, 0.14),
              transparent 27%
            ),
            linear-gradient(120deg, #f6fbff, #f1fbf7);
        }

        .guidanceGrid {
          opacity: 0.3;
          background-size: 30px 30px;
        }

        .guidanceContent {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .guidanceIcon {
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: #0756b8;
          background: #e7f3ff;
        }

        .guidanceTags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .guidanceTags span {
          padding: 5px 8px;
          border-radius: 999px;
          color: #0756b8;
          background: #e6f2ff;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .guidanceTags span:last-child {
          color: #00865e;
          background: #e0f8ee;
        }

        .guidance h3 {
          margin: 9px 0 0;
          color: #0b2843;
          font-size: 19px;
          font-weight: 900;
        }

        .guidance h3 strong {
          color: #0756b8;
        }

        .guidance p {
          max-width: 680px;
          margin: 7px 0 0;
          color: #718195;
          font-size: 9px;
          line-height: 1.65;
        }

        .guidanceBenefits {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 12px;
        }

        .guidanceBenefits span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #506b83;
          font-size: 7px;
          font-weight: 900;
        }

        .guidanceBenefits :global(svg) {
          color: #00a979;
        }

        .guidanceAction {
          position: relative;
          z-index: 2;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .guidanceAction a {
          min-height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0 16px;
          border-radius: 9px;
          color: white;
          background: #0756b8;
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
        }

        .guidanceAction small {
          margin-top: 6px;
          color: #8d9daa;
          font-size: 6px;
        }

        /* ======================================================
           JOURNEY
        ====================================================== */

        .journeySection {
          padding: 94px 0;
          border-top: 1px solid #e7edf3;
          background: #f7fafd;
        }

        .centerHeading {
          max-width: 680px;
          margin: auto;
          text-align: center;
        }

        .centerHeading h2,
        .objectiveContent h2 {
          margin: 15px 0 0;
          color: #071d35;
          font-size: clamp(34px, 3.5vw, 46px);
          font-weight: 900;
          line-height: 1.1;
          letter-spacing: -1.6px;
        }

        .centerHeading h2 span,
        .objectiveContent h2 span {
          color: #0756b8;
        }

        .centerHeading > p {
          max-width: 580px;
          margin: 15px auto 0;
          color: #778798;
          font-size: 11px;
          line-height: 1.7;
        }

        .journeyGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 40px;
        }

        .journeyCard {
          position: relative;
          min-height: 225px;
          padding: 23px;
          border: 1px solid #e0e8f0;
          border-radius: 17px;
          background: white;
          box-shadow: 0 10px 28px rgba(20, 50, 80, 0.05);
          transition: 0.2s ease;
        }

        .journeyCard:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 38px rgba(20, 50, 80, 0.09);
        }

        .journeyHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .journeyIcon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--accent);
          background: var(--soft);
        }

        .journeyHeader > span {
          color: var(--accent);
          font-size: 11px;
          font-weight: 900;
        }

        .journeySubtitle {
          display: inline-flex;
          margin-top: 18px;
          padding: 5px 8px;
          border-radius: 999px;
          color: var(--accent);
          background: var(--soft);
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }

        .journeyCard h3 {
          margin: 9px 0 0;
          color: #0b2944;
          font-size: 19px;
          font-weight: 900;
        }

        .journeyLine {
          width: 30px;
          height: 3px;
          margin-top: 9px;
          border-radius: 999px;
          background: var(--accent);
        }

        .journeyCard p {
          margin: 11px 0 0;
          color: #748496;
          font-size: 9px;
          line-height: 1.65;
        }

        .journeyArrow {
          position: absolute;
          z-index: 5;
          top: 50%;
          right: -22px;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateY(-50%);
          border: 1px solid #dce6ef;
          border-radius: 50%;
          color: #0756b8;
          background: white;
          box-shadow: 0 6px 15px rgba(20, 50, 80, 0.08);
        }

        /* ======================================================
           OBJECTIVE
        ====================================================== */

        .objectiveSection {
          padding: 100px 0;
          background: white;
        }

        .objectiveLayout {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 85px;
          align-items: center;
        }

        .objectiveContent > p {
          max-width: 550px;
          margin: 15px 0 0;
          color: #718195;
          font-size: 11px;
          line-height: 1.7;
        }

        .objectiveList {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 25px;
        }

        .supportMap {
          padding: 25px;
          border: 1px solid #dce7f0;
          border-radius: 19px;
          background:
            linear-gradient(180deg, #ffffff, #fbfdff);
          box-shadow: 0 25px 55px rgba(20, 52, 84, 0.1);
        }

        .mapHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .mapHeader > div {
          display: flex;
          flex-direction: column;
        }

        .mapHeader small {
          color: #8494a3;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .mapHeader strong {
          margin-top: 4px;
          color: #0c2b46;
          font-size: 16px;
          font-weight: 900;
        }

        .mapHeader > span {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: #0756b8;
          background: #e8f4ff;
        }

        .mapIntro {
          margin: 15px 0 8px;
          padding: 10px 12px;
          border-left: 3px solid #0756b8;
          border-radius: 0 8px 8px 0;
          color: #647b91;
          background: #f5f9fd;
          font-size: 8px;
          font-weight: 700;
          line-height: 1.5;
        }

        .mapFooter {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 17px;
          padding-top: 16px;
          border-top: 1px solid #edf1f5;
        }

        .mapFooter span {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #63788c;
          font-size: 7px;
          font-weight: 900;
        }

        .mapFooter :global(svg) {
          color: #0756b8;
        }

        /* ======================================================
           CTA
        ====================================================== */

        .ctaSection {
          padding: 15px 0 90px;
          background: white;
        }

        .cta {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 35px;
          border-radius: 22px;
          color: white;
          background:
            radial-gradient(
              circle at 82% 20%,
              rgba(83, 185, 255, 0.22),
              transparent 25%
            ),
            linear-gradient(120deg, #09275b, #0756b8, #0a77e8);
          box-shadow: 0 24px 50px rgba(7, 86, 184, 0.2);
        }

        .ctaGrid {
          opacity: 0.28;
          background-size: 35px 35px;
        }

        .ctaGlow {
          position: absolute;
          width: 260px;
          height: 260px;
          right: -85px;
          bottom: -160px;
          border: 35px solid rgba(255, 255, 255, 0.04);
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
          gap: 16px;
        }

        .ctaIcon {
          width: 59px;
          height: 59px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 15px;
          background: rgba(255, 255, 255, 0.1);
        }

        .ctaLabel {
          color: #bfe4ff;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .ctaContent h2 {
          margin: 5px 0 0;
          font-size: 22px;
          font-weight: 900;
        }

        .ctaContent h2 span {
          color: #cfeaff;
        }

        .ctaContent p {
          max-width: 570px;
          margin: 6px 0 0;
          color: #d4e8f8;
          font-size: 9px;
          line-height: 1.55;
        }

        .ctaActions {
          flex: 0 0 auto;
          display: flex;
          gap: 8px;
        }

        .ctaPrimary,
        .ctaSecondary {
          min-height: 43px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          padding: 0 15px;
          border-radius: 9px;
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
        }

        .ctaPrimary {
          color: #0756b8;
          background: white;
        }

        .ctaSecondary {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.23);
          background: rgba(255, 255, 255, 0.08);
        }

        /* ======================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1050px) {
          .heroLayout,
          .introGrid,
          .objectiveLayout {
            grid-template-columns: 1fr;
          }

          .heroGraphic {
            width: 100%;
            max-width: 620px;
            margin: auto;
          }

          .plansGrid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 760px) {
          .hero {
            padding: 70px 0;
          }

          .plansGrid,
          .journeyGrid {
            grid-template-columns: 1fr;
          }

          .journeyArrow {
            display: none;
          }

          .guidance,
          .cta {
            align-items: flex-start;
            flex-direction: column;
          }

          .planCard {
            min-height: auto;
          }
        }

        @media (max-width: 560px) {
          .container {
            width: calc(100% - 24px);
          }

          .hero h1 {
            font-size: 38px;
            letter-spacing: -1.7px;
          }

          .heroActions {
            flex-direction: column;
          }

          .primaryButton,
          .secondaryButton {
            width: 100%;
          }

          .graphicBottom {
            grid-template-columns: 1fr;
          }

          .guidanceContent {
            flex-direction: column;
          }

          .guidanceAction,
          .guidanceAction a {
            width: 100%;
          }

          .ctaContent {
            align-items: flex-start;
            flex-direction: column;
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
   SECTION LABEL
========================================================= */

function SectionLabel({
  icon,
  text,
}: {
  icon: IconName;
  text: string;
}) {
  return (
    <div className="sectionLabel">
      <span>
        <Icon name={icon} size={13} />
      </span>

      <strong>{text}</strong>

      <style jsx>{`
        .sectionLabel {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #0756b8;
        }

        .sectionLabel > span {
          width: 29px;
          height: 29px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #d5e7f8;
          border-radius: 8px;
          background: #eaf5ff;
        }

        strong {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.3px;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   HEADING LINE
========================================================= */

function HeadingLine({ center = false }: { center?: boolean }) {
  return (
    <div className={`headingLine ${center ? "center" : ""}`}>
      <i />
      <b />

      <style jsx>{`
        .headingLine {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 17px;
        }

        .headingLine.center {
          justify-content: center;
        }

        i {
          width: 45px;
          height: 5px;
          border-radius: 999px;
          background: #0756b8;
        }

        b {
          width: 10px;
          height: 5px;
          border-radius: 999px;
          background: #55b6f3;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   SERVICE NODE
========================================================= */

function ServiceNode({
  className,
  icon,
  title,
  subtitle,
  accent,
}: {
  className: string;
  icon: IconName;
  title: string;
  subtitle: string;
  accent: string;
}) {
  return (
    <div className={`serviceNode ${className}`}>
      <span style={{ color: accent }}>
        <Icon name={icon} size={16} />
      </span>

      <strong>{title}</strong>
      <small>{subtitle}</small>

      <style jsx>{`
        .serviceNode {
          position: absolute;
          z-index: 5;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .serviceNode > span {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(120, 201, 255, 0.15);
          border-radius: 11px;
          background: #0b365f;
          box-shadow: 0 10px 25px rgba(0, 10, 25, 0.15);
        }

        strong {
          margin-top: 5px;
          color: #d8e8f3;
          font-size: 8px;
          font-weight: 900;
        }

        small {
          margin-top: 1px;
          color: #718da4;
          font-size: 6px;
          font-weight: 800;
        }

        .nodeTender {
          left: 38px;
          top: 45px;
        }

        .nodeGem {
          right: 38px;
          top: 45px;
        }

        .nodeGrowth {
          left: 50%;
          bottom: 17px;
          transform: translateX(-50%);
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   MINI METRIC
========================================================= */

function MiniMetric({
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
      <span>
        <Icon name={icon} size={14} />
      </span>

      <div>
        <small>{label}</small>
        <strong>{value}</strong>
      </div>

      <style jsx>{`
        .metric {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px;
          border: 1px solid rgba(255, 255, 255, 0.055);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.025);
        }

        .metric > span {
          width: 29px;
          height: 29px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #66c4ff;
          background: rgba(50, 155, 230, 0.11);
        }

        .metric > div {
          display: flex;
          flex-direction: column;
        }

        small {
          color: #69879e;
          font-size: 5px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        strong {
          margin-top: 2px;
          color: #d2e3ef;
          font-size: 7px;
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   OBJECTIVE
========================================================= */

function Objective({
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
    <div className="objective">
      <div className="objectiveIcon">
        <Icon name={icon} size={17} />
      </div>

      <div className="objectiveText">
        <span>{number}</span>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

      <div className="objectiveArrow">
        <Icon name="arrow" size={14} />
      </div>

      <style jsx>{`
        .objective {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 1px solid #e0e8ef;
          border-radius: 12px;
          background: white;
          transition: 0.2s ease;
        }

        .objective:hover {
          transform: translateX(5px);
          border-color: #c4ddf2;
          box-shadow: 0 9px 22px rgba(20, 50, 80, 0.07);
        }

        .objectiveIcon {
          width: 41px;
          height: 41px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: #0756b8;
          background: #eaf4ff;
        }

        .objectiveText {
          flex: 1;
          display: grid;
          grid-template-columns: auto 1fr;
          column-gap: 8px;
          align-items: center;
        }

        .objectiveText span {
          color: #0a77e8;
          font-size: 7px;
          font-weight: 900;
        }

        .objectiveText strong {
          color: #263f57;
          font-size: 10px;
          font-weight: 900;
        }

        .objectiveText p {
          grid-column: 2;
          margin: 4px 0 0;
          color: #7c8b99;
          font-size: 8px;
          font-weight: 600;
        }

        .objectiveArrow {
          width: 29px;
          height: 29px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #0756b8;
          background: #f0f6fc;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   SUPPORT PATH
========================================================= */

function SupportPath({
  number,
  icon,
  title,
  subtitle,
  description,
  progress,
  accent,
  soft,
}: {
  number: string;
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  progress: number;
  accent: string;
  soft: string;
}) {
  return (
    <div className="path">
      <div className="pathTop">
        <div className="pathName">
          <span
            style={{
              color: accent,
              background: soft,
            }}
          >
            <Icon name={icon} size={16} />
          </span>

          <div>
            <small>{number}</small>
            <strong>{title}</strong>
            <p>{description}</p>
          </div>
        </div>

        <b
          style={{
            color: accent,
            background: soft,
          }}
        >
          {subtitle}
        </b>
      </div>

      <div className="progress">
        <div
          className="progressValue"
          style={{
            width: `${progress}%`,
            background: accent,
          }}
        />
      </div>

      <style jsx>{`
        .path {
          padding: 15px 0;
          border-bottom: 1px solid #edf1f5;
        }

        .path:last-of-type {
          border-bottom: 0;
        }

        .pathTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .pathName {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .pathName > span {
          width: 36px;
          height: 36px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
        }

        .pathName > div {
          display: flex;
          flex-direction: column;
        }

        small {
          color: #9ba7b3;
          font-size: 6px;
          font-weight: 900;
        }

        strong {
          margin-top: 2px;
          color: #263f57;
          font-size: 10px;
          font-weight: 900;
        }

        p {
          margin: 3px 0 0;
          color: #83919f;
          font-size: 7px;
          font-weight: 600;
        }

        b {
          flex: 0 0 auto;
          padding: 5px 8px;
          border-radius: 999px;
          font-size: 7px;
          font-weight: 900;
          text-transform: uppercase;
        }

        .progress {
          height: 5px;
          overflow: hidden;
          margin-top: 10px;
          border-radius: 999px;
          background: #edf2f6;
        }

        .progressValue {
          height: 100%;
          border-radius: inherit;
        }
      `}</style>
    </div>
  );
}