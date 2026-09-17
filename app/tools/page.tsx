"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category = "Certificate" | "Declaration" | "MSME" | "OEM";

type IconName =
  | "shield"
  | "india"
  | "matrix"
  | "users"
  | "justice"
  | "finance"
  | "security"
  | "warranty"
  | "msme"
  | "growth"
  | "document"
  | "globe"
  | "factory"
  | "price"
  | "tag";

type Tool = {
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  category: Category;
  icon: IconName;
  badge?: string;
  tags: string[];
};

const tools: Tool[] = [
  {
    title: "Non-Blacklist Certificate",
    shortTitle: "Non-Blacklist",
    description:
      "Generate a professional declaration confirming that your company has not been blacklisted or debarred.",
    href: "/tools/non-blacklist",
    category: "Certificate",
    icon: "shield",
    tags: ["GeM Ready", "DOCX"],
  },
  {
    title: "Make in India (MII) Certificate",
    shortTitle: "MII Certificate",
    description:
      "Create a Make in India local-content certificate for GeM and government tender submissions.",
    href: "/tools/mii-certificate",
    category: "Certificate",
    icon: "india",
    badge: "Popular",
    tags: ["Local Content", "DOCX"],
  },
  {
    title: "Escalation Matrix",
    shortTitle: "Escalation Matrix",
    description:
      "Prepare an escalation matrix containing authorized contacts and escalation levels for tender requirements.",
    href: "/tools/escalation-matrix",
    category: "Certificate",
    icon: "matrix",
    tags: ["Contacts", "Tender"],
  },
  {
    title: "Non-Relation Undertaking",
    shortTitle: "Non-Relation",
    description:
      "Generate an undertaking declaring absence of prohibited relationships with concerned officials.",
    href: "/tools/non-relation",
    category: "Declaration",
    icon: "users",
    tags: ["Undertaking", "DOCX"],
  },
  {
    title: "Non-Conviction Certificate",
    shortTitle: "Non-Conviction",
    description:
      "Prepare a company declaration regarding conviction and legal compliance for bid documentation.",
    href: "/tools/non-conviction",
    category: "Certificate",
    icon: "justice",
    tags: ["Compliance", "DOCX"],
  },
  {
    title: "Financial Standing Undertaking",
    shortTitle: "Financial Standing",
    description:
      "Generate an undertaking regarding your company's financial standing and business status.",
    href: "/tools/financial-standing",
    category: "Declaration",
    icon: "finance",
    tags: ["Financial", "Tender"],
  },
  {
    title: "Bid Security Declaration",
    shortTitle: "Bid Security",
    description:
      "Create a bid security declaration for eligible tenders and procurement submissions.",
    href: "/tools/bid-security",
    category: "Declaration",
    icon: "security",
    tags: ["Bid Security", "DOCX"],
  },
  {
    title: "Warranty Declaration",
    shortTitle: "Warranty",
    description:
      "Prepare a formal warranty declaration containing product and service warranty commitments.",
    href: "/tools/warranty-declaration",
    category: "Declaration",
    icon: "warranty",
    tags: ["Warranty", "DOCX"],
  },
  {
    title: "MSME EMD Exemption",
    shortTitle: "EMD Exemption",
    description:
      "Generate an EMD exemption request or declaration for eligible MSME bidders.",
    href: "/tools/emd-exemption",
    category: "MSME",
    icon: "msme",
    badge: "MSME",
    tags: ["EMD", "Exemption"],
  },
  {
    title: "MSME Turnover / Experience Exemption",
    shortTitle: "Turnover Exemption",
    description:
      "Prepare an exemption request relating to turnover or prior experience requirements.",
    href: "/tools/turnover-exemption",
    category: "MSME",
    icon: "growth",
    badge: "MSME",
    tags: ["Turnover", "Experience"],
  },
  {
    title: "ATC / Terms Acceptance",
    shortTitle: "ATC Certificate",
    description:
      "Generate an acceptance certificate for Additional Terms & Conditions applicable to a bid.",
    href: "/tools/atc-certificate",
    category: "Certificate",
    icon: "document",
    badge: "Popular",
    tags: ["ATC", "GeM Ready"],
  },
  {
    title: "Land Border Declaration",
    shortTitle: "Land Border",
    description:
      "Create the required declaration concerning bidders from countries sharing a land border with India.",
    href: "/tools/land-border",
    category: "Declaration",
    icon: "globe",
    tags: ["Compliance", "Declaration"],
  },
  {
    title: "OEM Authorization",
    shortTitle: "OEM Authorization",
    description:
      "Prepare an OEM authorization document for authorized sellers, resellers and tender participation.",
    href: "/tools/oem-authorization",
    category: "OEM",
    icon: "factory",
    tags: ["OEM", "Authorization"],
  },
  {
    title: "Lowest Price Declaration",
    shortTitle: "Lowest Price",
    description:
      "Generate a declaration relating to quoted pricing for procurement and tender documentation.",
    href: "/tools/lowest-price",
    category: "Declaration",
    icon: "price",
    tags: ["Pricing", "Tender"],
  },
  {
    title: "MRP Declaration",
    shortTitle: "MRP Declaration",
    description:
      "Prepare an MRP declaration containing product pricing information for tender submissions.",
    href: "/tools/mrp-declaration",
    category: "Declaration",
    icon: "tag",
    tags: ["MRP", "Pricing"],
  },
];

const categories = ["All", "Certificate", "Declaration", "MSME", "OEM"];

function Icon({
  name,
  size = 25,
}: {
  name:
    | IconName
    | "search"
    | "arrow"
    | "upload"
    | "edit"
    | "download";
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

  const paths: Record<string, React.ReactNode> = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.7 2.8 8 7 10 4.2-2 7-5.3 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
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

    matrix: (
      <>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="12" cy="18" r="2" />
        <path d="M8 6h8M7 8l4 8M17 8l-4 8" />
      </>
    ),

    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c.6-4 2.6-6 6-6s5.4 2 6 6" />
        <path d="M16 5.5a3 3 0 0 1 0 5.5M17 14c2.4.5 3.7 2.5 4 5" />
      </>
    ),

    justice: (
      <>
        <path d="M12 3v18M7 5h10M5 8l-3 6h6L5 8ZM19 8l-3 6h6l-3-6ZM8 21h8" />
      </>
    ),

    finance: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8H9.5a2 2 0 0 0 0 4H14a2 2 0 0 1 0 4H8M12 6v12" />
      </>
    ),

    security: (
      <>
        <rect x="4" y="9" width="16" height="11" rx="2" />
        <path d="M8 9V7a4 4 0 0 1 8 0v2" />
        <path d="m9.5 14 1.7 1.7 3.5-3.5" />
      </>
    ),

    warranty: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m9 12 2 2 4-5" />
        <path d="m8 19-1 3 5-2 5 2-1-3" />
      </>
    ),

    msme: (
      <>
        <path d="M4 20V9l5-3v14M9 20V4l6 3v13M15 20v-8l5-2v10" />
        <path d="M2 20h20" />
      </>
    ),

    growth: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
        <path d="m4 8 6-4 6 5 6-7" />
      </>
    ),

    document: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
      </>
    ),

    factory: (
      <>
        <path d="M3 21V10l6 3v-3l6 3V6h6v15Z" />
        <path d="M7 17h2M13 17h2M18 10h3" />
      </>
    ),

    price: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 9h8M8 12h6M11 9c3 0 3 4 0 4H8l6 5" />
      </>
    ),

    tag: (
      <>
        <path d="M20 13 13 20 4 11V4h7Z" />
        <circle cx="8.5" cy="8.5" r="1.5" />
      </>
    ),

    upload: (
      <>
        <path d="M12 16V4M8 8l4-4 4 4" />
        <path d="M4 15v5h16v-5" />
      </>
    ),

    edit: (
      <>
        <path d="M4 20h4L19 9l-4-4L4 16v4Z" />
        <path d="m13 7 4 4" />
      </>
    ),

    download: (
      <>
        <path d="M12 4v12M8 12l4 4 4-4" />
        <path d="M4 20h16" />
      </>
    ),
  };

  return <svg {...common}>{paths[name]}</svg>;
}

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredTools = useMemo(() => {
    const q = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesSearch =
        !q ||
        tool.title.toLowerCase().includes(q) ||
        tool.shortTitle.toLowerCase().includes(q) ||
        tool.description.toLowerCase().includes(q) ||
        tool.category.toLowerCase().includes(q) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        category === "All" || tool.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const quickSearch = (value: string) => {
    setSearch(value);
    setCategory("All");
  };

  return (
    <main className="toolsPage">
      {/* ================= HERO ================= */}

      <section className="hero">
        <div className="gridPattern" />
        <div className="heroOrb orb1" />
        <div className="heroOrb orb2" />
        <div className="heroOrb orb3" />

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="heroBadge">
              <span className="pulse" />
              BIDAXIS DOCUMENT STUDIO
            </div>

            <h1>
              Tender paperwork,
              <span> simplified.</span>
            </h1>

            <p className="heroDescription">
              Create professional tender certificates, declarations and
              undertakings with a faster, cleaner document workflow.
            </p>

            <div className="heroSearch">
              <div className="searchSvg">
                <Icon name="search" size={22} />
              </div>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="What document do you need?"
              />

              {search ? (
                <button
                  className="clear"
                  type="button"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              ) : (
                <span className="searchHint">Search</span>
              )}
            </div>

            <div className="quickSearch">
              <span>Popular:</span>

              {["MII", "ATC", "MSME", "OEM"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => quickSearch(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="heroTrust">
              <div className="trustItem">
                <div className="trustIcon">
                  <Icon name="shield" size={17} />
                </div>
                <div>
                  <strong>15+</strong>
                  <span>Document Tools</span>
                </div>
              </div>

              <div className="trustItem">
                <div className="trustIcon">
                  <Icon name="document" size={17} />
                </div>
                <div>
                  <strong>DOCX</strong>
                  <span>Letterhead Support</span>
                </div>
              </div>

              <div className="trustItem">
                <div className="trustIcon">
                  <Icon name="warranty" size={17} />
                </div>
                <div>
                  <strong>GeM</strong>
                  <span>Tender Focused</span>
                </div>
              </div>
            </div>
          </div>

          {/* GRAPHICAL HERO */}

          <div className="heroVisual">
            <div className="visualGlow" />

            <div className="dashboardMockup">
              <div className="mockTop">
                <div className="mockLogo">
                  <span>B</span>
                  BidAxis
                </div>

                <div className="mockDots">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="mockBody">
                <div className="mockSidebar">
                  <span className="sideActive" />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="mockContent">
                  <div className="mockTitle">
                    <span />
                    <small />
                  </div>

                  <div className="miniCards">
                    <div className="miniCard">
                      <div className="miniIcon">
                        <Icon name="india" size={20} />
                      </div>
                      <div>
                        <strong>MII</strong>
                        <span>Certificate</span>
                      </div>
                    </div>

                    <div className="miniCard">
                      <div className="miniIcon">
                        <Icon name="document" size={20} />
                      </div>
                      <div>
                        <strong>ATC</strong>
                        <span>Acceptance</span>
                      </div>
                    </div>
                  </div>

                  <div className="documentPreview">
                    <div className="previewHeader">
                      <div className="previewLogo">B</div>

                      <div>
                        <strong>Certificate Preview</strong>
                        <span>Ready to generate</span>
                      </div>

                      <div className="readyDot">✓</div>
                    </div>

                    <div className="previewLines">
                      <span className="line80" />
                      <span className="line100" />
                      <span className="line90" />
                      <span className="line65" />
                    </div>

                    <div className="previewButton">
                      Generate Document
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="floatingCard floatingMii">
              <div className="floatingIcon">
                <Icon name="india" size={22} />
              </div>

              <div>
                <span>MAKE IN INDIA</span>
                <strong>MII Certificate</strong>
              </div>

              <i>✓</i>
            </div>

            <div className="floatingCard floatingDoc">
              <div className="floatingIcon">
                <Icon name="document" size={22} />
              </div>

              <div>
                <span>DOCUMENT</span>
                <strong>DOCX Ready</strong>
              </div>

              <i>✓</i>
            </div>

            <div className="floatingBadge">
              <div className="floatingBadgeIcon">
                <Icon name="shield" size={18} />
              </div>

              <div>
                <strong>GeM Focused</strong>
                <span>Tender documentation</span>
              </div>
            </div>
          </div>
        </div>

        <div className="heroBottomWave" />
      </section>

      {/* ================= TOOLS ================= */}

      <section className="toolsSection">
        <div className="container">
          <div className="sectionHeading">
            <div>
              <div className="smallTitle">
                <span />
                DOCUMENT GENERATORS
              </div>

              <h2>Everything you need for your bid.</h2>

              <p>
                Choose a document, add your tender details and prepare it for
                submission.
              </p>
            </div>

            <div className="toolCounter">
              <strong>{filteredTools.length}</strong>
              <span>tools available</span>
            </div>
          </div>

          <div className="filterBar">
            <div className="categories">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={category === item ? "active" : ""}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="miniSearch">
              <Icon name="search" size={17} />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter tools..."
              />

              {search && (
                <button type="button" onClick={() => setSearch("")}>
                  ×
                </button>
              )}
            </div>
          </div>

          {filteredTools.length ? (
            <div className="toolsGrid">
              {filteredTools.map((tool) => (
                <Link
                  href={tool.href}
                  key={tool.href}
                  className="toolCard"
                >
                  <div className="cardDecor cardDecor1" />
                  <div className="cardDecor cardDecor2" />

                  <div className="cardHeader">
                    <div
                      className={`toolIcon ${tool.category.toLowerCase()}`}
                    >
                      <Icon name={tool.icon} />
                    </div>

                    {tool.badge && (
                      <span className="badge">{tool.badge}</span>
                    )}
                  </div>

                  <div className="categoryLabel">
                    {tool.category}
                  </div>

                  {/* STRONGER / BOLDER TOOL NAME */}
                  <h3 className="toolName">
                    {tool.title}
                  </h3>

                  <p>{tool.description}</p>

                  <div className="tagRow">
                    {tool.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="cardAction">
                    <span>Create Document</span>

                    <div className="actionArrow">
                      <Icon name="arrow" size={18} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="empty">
              <div className="emptyGraphic">
                <Icon name="search" size={32} />
              </div>

              <h3>No matching document</h3>

              <p>
                Try another keyword or browse all available BidAxis tools.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                View all tools
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}

      <section className="workflow">
        <div className="container">
          <div className="workflowHeading">
            <div className="smallTitle center">
              <span />
              HOW IT WORKS
              <span />
            </div>

            <h2>From tender requirement to ready document.</h2>

            <p>
              A simple workflow designed to reduce repetitive tender
              paperwork.
            </p>
          </div>

          <div className="workflowGrid">
            <div className="workflowLine" />

            <div className="workflowCard">
              <div className="stepCircle">
                <Icon name="document" size={26} />
                <span>01</span>
              </div>

              <h3>Choose your document</h3>

              <p>
                Select the certificate, declaration or undertaking required
                by the tender.
              </p>

              <div className="stepMini">
                <span>MII</span>
                <span>ATC</span>
                <span>MSME</span>
              </div>
            </div>

            <div className="workflowCard">
              <div className="stepCircle">
                <Icon name="edit" size={26} />
                <span>02</span>
              </div>

              <h3>Add tender details</h3>

              <p>
                Enter company, bid and authorized signatory information using
                the guided form.
              </p>

              <div className="formGraphic">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="workflowCard">
              <div className="stepCircle">
                <Icon name="download" size={26} />
                <span>03</span>
              </div>

              <h3>Generate & download</h3>

              <p>
                Prepare the document using your company letterhead or the
                BidAxis template.
              </p>

              <div className="downloadGraphic">
                <Icon name="document" size={18} />
                <span>Document.docx</span>
                <b>✓</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LETTERHEAD ================= */}

      <section className="letterheadSection">
        <div className="container">
          <div className="letterheadPanel">
            <div className="panelGlow" />

            <div className="letterheadVisual">
              <div className="paper paperBack" />

              <div className="paper paperFront">
                <div className="paperHeader">
                  <div className="paperLogo">B</div>

                  <div>
                    <strong>YOUR COMPANY</strong>
                    <span>Company Letterhead</span>
                  </div>
                </div>

                <div className="paperDivider" />

                <div className="paperLines">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="insertIndicator">
                  <span>+</span>
                  Certificate content
                </div>
              </div>

              <div className="uploadBubble">
                <Icon name="upload" size={20} />
              </div>
            </div>

            <div className="letterheadCopy">
              <div className="panelBadge">
                YOUR BRAND. YOUR DOCUMENT.
              </div>

              <h2>Use your own company letterhead.</h2>

              <p>
                Upload a Word letterhead and generate tender documents while
                keeping your existing company branding and format.
              </p>

              <div className="features">
                <div>
                  <span>✓</span>
                  Word (.docx) letterhead support
                </div>

                <div>
                  <span>✓</span>
                  BidAxis template option
                </div>

                <div>
                  <span>✓</span>
                  Tender-specific document generation
                </div>
              </div>

              <Link
                href="/tools/mii-certificate"
                className="panelButton"
              >
                Try Document Generator
                <Icon name="arrow" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="ctaSection">
        <div className="container">
          <div className="cta">
            <div className="ctaPattern" />

            <div className="ctaIcon">
              <Icon name="document" size={31} />
            </div>

            <div className="ctaCopy">
              <span>NEED HELP CHOOSING?</span>

              <h2>
                Not sure which document your tender requires?
              </h2>

              <p>
                Explore the available generators or contact the BidAxis team
                for guidance.
              </p>
            </div>

            <Link href="/contact" className="ctaButton">
              Contact BidAxis
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .toolsPage {
          --blue: #0756b8;
          --blue2: #0a77e8;
          --navy: #061b35;
          --ink: #142033;
          --muted: #68758a;
          --line: #e6ebf2;
          --soft: #f5f8fc;

          background: #f7f9fc;
          color: var(--ink);
          overflow: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .hero {
          position: relative;
          min-height: 660px;
          display: flex;
          align-items: center;

          background:
            radial-gradient(
              circle at 12% 25%,
              rgba(20, 119, 255, 0.2),
              transparent 25%
            ),
            radial-gradient(
              circle at 82% 45%,
              rgba(30, 174, 255, 0.15),
              transparent 30%
            ),
            linear-gradient(
              120deg,
              #031427 0%,
              #05254a 55%,
              #073c72 100%
            );

          color: white;
          padding: 78px 0 95px;
        }

        .gridPattern {
          position: absolute;
          inset: 0;
          opacity: 0.08;

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
          mask-image: linear-gradient(
            to right,
            black,
            transparent 90%
          );
        }

        .heroOrb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .orb1 {
          width: 8px;
          height: 8px;
          background: #54b8ff;
          left: 7%;
          top: 24%;
          box-shadow: 0 0 25px #54b8ff;
        }

        .orb2 {
          width: 5px;
          height: 5px;
          background: white;
          left: 45%;
          top: 18%;
          opacity: 0.5;
        }

        .orb3 {
          width: 7px;
          height: 7px;
          background: #55d6ff;
          right: 7%;
          bottom: 25%;
          box-shadow: 0 0 20px #55d6ff;
        }

        .heroGrid {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          align-items: center;
          gap: 60px;
        }

        .heroBadge {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 8px 13px;

          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(10px);

          color: #cce6ff;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #42b7ff;
          box-shadow: 0 0 0 5px rgba(66, 183, 255, 0.12);
        }

        .hero h1 {
          max-width: 600px;
          margin: 22px 0 18px;

          font-size: clamp(44px, 5vw, 69px);
          line-height: 0.98;
          letter-spacing: -3.3px;
        }

        .hero h1 span {
          display: block;
          margin-top: 8px;

          background: linear-gradient(
            90deg,
            #53b5ff,
            #b4e4ff
          );

          -webkit-background-clip: text;
          color: transparent;
        }

        .heroDescription {
          max-width: 570px;

          color: #b9cbe0;

          font-size: 16px;
          line-height: 1.75;

          margin: 0;
        }

        .heroSearch {
          margin-top: 29px;

          width: min(100%, 570px);
          height: 61px;

          background: white;
          border-radius: 15px;

          display: flex;
          align-items: center;

          padding: 0 16px;

          box-shadow:
            0 22px 55px rgba(0, 0, 0, 0.22),
            0 0 0 5px rgba(255, 255, 255, 0.05);
        }

        .searchSvg {
          color: var(--blue);
          display: flex;
          margin-right: 11px;
        }

        .heroSearch input {
          flex: 1;
          min-width: 0;

          border: 0;
          outline: 0;

          background: transparent;

          color: #15243a;
          font-size: 14px;
        }

        .heroSearch input::placeholder {
          color: #8895a7;
        }

        .searchHint {
          color: #94a0af;
          font-size: 11px;

          border: 1px solid #e0e6ed;
          padding: 5px 8px;
          border-radius: 6px;
        }

        .clear {
          width: 29px;
          height: 29px;

          border: 0;
          border-radius: 50%;

          cursor: pointer;

          background: #eef3f8;
          color: #66758a;

          font-size: 18px;
        }

        .quickSearch {
          margin-top: 13px;

          display: flex;
          gap: 7px;
          align-items: center;
          flex-wrap: wrap;
        }

        .quickSearch > span {
          font-size: 11px;
          color: #809ab8;
          margin-right: 3px;
        }

        .quickSearch button {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.13);

          color: #c7d9ed;

          padding: 5px 10px;
          border-radius: 999px;

          font-size: 10px;
          font-weight: 700;

          cursor: pointer;
          transition: 0.2s;
        }

        .quickSearch button:hover {
          background: rgba(255, 255, 255, 0.14);
          color: white;
        }

        .heroTrust {
          display: flex;
          gap: 23px;
          margin-top: 31px;
          flex-wrap: wrap;
        }

        .trustItem {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .trustIcon {
          width: 35px;
          height: 35px;

          border-radius: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(72, 170, 255, 0.1);
          border: 1px solid rgba(95, 185, 255, 0.16);

          color: #65bdff;
        }

        .trustItem > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .trustItem strong {
          font-size: 12px;
          color: white;
        }

        .trustItem span {
          font-size: 9px;
          color: #829bb7;
          margin-top: 2px;
        }

        /* =====================================================
           HERO GRAPHIC
        ===================================================== */

        .heroVisual {
          position: relative;
          min-height: 500px;
          perspective: 1000px;
        }

        .visualGlow {
          position: absolute;

          width: 390px;
          height: 390px;

          border-radius: 50%;

          background: rgba(26, 143, 255, 0.19);

          filter: blur(75px);

          top: 50px;
          left: 70px;
        }

        .dashboardMockup {
          position: absolute;

          width: 470px;
          height: 365px;

          top: 65px;
          left: 30px;

          border-radius: 20px;

          background: rgba(250, 253, 255, 0.96);

          box-shadow:
            0 45px 80px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.35);

          transform: rotateY(-6deg) rotateX(2deg);

          overflow: hidden;
        }

        .mockTop {
          height: 48px;

          background: white;

          border-bottom: 1px solid #e7ecf2;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 16px;
        }

        .mockLogo {
          display: flex;
          align-items: center;
          gap: 7px;

          color: #15283f;

          font-size: 11px;
          font-weight: 800;
        }

        .mockLogo span {
          width: 23px;
          height: 23px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 7px;

          background: linear-gradient(
            135deg,
            #0756b8,
            #1c96ef
          );

          color: white;
        }

        .mockDots {
          display: flex;
          gap: 5px;
        }

        .mockDots i {
          width: 5px;
          height: 5px;
          background: #d3dce6;
          border-radius: 50%;
        }

        .mockBody {
          height: calc(100% - 48px);
          display: flex;
        }

        .mockSidebar {
          width: 48px;

          background: #f6f8fb;
          border-right: 1px solid #e8edf3;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding-top: 17px;
          gap: 17px;
        }

        .mockSidebar span {
          width: 18px;
          height: 5px;

          border-radius: 5px;

          background: #d8e0e9;
        }

        .mockSidebar .sideActive {
          height: 18px;
          border-radius: 6px;

          background: #d9ebff;
          border: 1px solid #b9d8fb;
        }

        .mockContent {
          flex: 1;
          padding: 21px;
          background: #f9fbfd;
        }

        .mockTitle {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mockTitle span {
          width: 120px;
          height: 9px;
          background: #213b59;
          border-radius: 5px;
        }

        .mockTitle small {
          width: 180px;
          height: 5px;
          background: #cfd9e4;
          border-radius: 5px;
        }

        .miniCards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;

          margin-top: 18px;
        }

        .miniCard {
          background: white;

          border: 1px solid #e3eaf1;
          border-radius: 11px;

          padding: 10px;

          display: flex;
          gap: 9px;
          align-items: center;
        }

        .miniIcon {
          width: 35px;
          height: 35px;

          border-radius: 9px;

          background: #eaf4ff;
          color: #0870d9;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .miniCard > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .miniCard strong {
          font-size: 9px;
          color: #1d3148;
        }

        .miniCard span {
          font-size: 7px;
          color: #8796a8;
          margin-top: 3px;
        }

        .documentPreview {
          margin-top: 12px;

          background: white;

          border: 1px solid #e3eaf1;
          border-radius: 12px;

          padding: 13px;
        }

        .previewHeader {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .previewLogo {
          width: 27px;
          height: 27px;

          border-radius: 7px;

          background: #0756b8;

          display: flex;
          align-items: center;
          justify-content: center;

          color: white;

          font-size: 10px;
          font-weight: 800;
        }

        .previewHeader > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .previewHeader strong {
          font-size: 8px;
          color: #25384e;
        }

        .previewHeader span {
          color: #95a2b1;
          font-size: 6px;
          margin-top: 2px;
        }

        .readyDot {
          width: 20px;
          height: 20px;

          border-radius: 50%;

          background: #e8f8ef;
          color: #1b9b55;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 9px;
        }

        .previewLines {
          display: flex;
          flex-direction: column;
          gap: 6px;

          margin: 15px 0;
        }

        .previewLines span {
          height: 4px;
          background: #e7ecf2;
          border-radius: 4px;
        }

        .line80 {
          width: 80%;
        }

        .line100 {
          width: 100%;
        }

        .line90 {
          width: 90%;
        }

        .line65 {
          width: 65%;
        }

        .previewButton {
          background: #0756b8;
          color: white;

          border-radius: 7px;

          padding: 7px;

          text-align: center;

          font-size: 7px;
          font-weight: 700;
        }

        .floatingCard {
          position: absolute;
          z-index: 5;

          background: rgba(255, 255, 255, 0.97);

          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 13px;

          padding: 11px 12px;

          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);

          display: flex;
          align-items: center;
          gap: 9px;

          animation: float 5s ease-in-out infinite;
        }

        .floatingMii {
          top: 28px;
          right: -5px;
        }

        .floatingDoc {
          bottom: 35px;
          left: -5px;
          animation-delay: -2s;
        }

        .floatingIcon {
          width: 37px;
          height: 37px;

          border-radius: 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #eaf4ff;
          color: #0756b8;
        }

        .floatingCard > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          min-width: 90px;
        }

        .floatingCard span {
          font-size: 6px;
          letter-spacing: 0.8px;
          color: #8291a3;
          font-weight: 800;
        }

        .floatingCard strong {
          color: #20364f;
          font-size: 9px;
          margin-top: 3px;
        }

        .floatingCard > i {
          width: 20px;
          height: 20px;

          border-radius: 50%;

          background: #e7f8ee;
          color: #199a54;

          font-size: 9px;
          font-style: normal;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floatingBadge {
          position: absolute;
          right: 10px;
          bottom: 72px;

          display: flex;
          gap: 9px;
          align-items: center;

          background: rgba(4, 26, 52, 0.9);

          border: 1px solid rgba(102, 186, 255, 0.2);
          border-radius: 12px;

          padding: 10px 13px;

          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.18);

          backdrop-filter: blur(10px);
        }

        .floatingBadgeIcon {
          color: #62bdff;
          display: flex;
        }

        .floatingBadge > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .floatingBadge strong {
          font-size: 9px;
        }

        .floatingBadge span {
          font-size: 7px;
          color: #829bb7;
          margin-top: 2px;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        .heroBottomWave {
          position: absolute;

          bottom: -1px;
          left: 0;
          right: 0;

          height: 40px;

          background: #f7f9fc;

          clip-path: polygon(
            0 65%,
            35% 100%,
            70% 55%,
            100% 85%,
            100% 100%,
            0 100%
          );
        }

        /* =====================================================
           TOOLS SECTION
        ===================================================== */

        .toolsSection {
          padding: 90px 0 105px;
        }

        .sectionHeading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .smallTitle {
          display: flex;
          align-items: center;
          gap: 8px;

          color: #0872df;

          font-size: 10px;
          letter-spacing: 1.6px;
          font-weight: 900;
        }

        .smallTitle > span {
          width: 18px;
          height: 2px;
          background: #0872df;
        }

        .sectionHeading h2,
        .workflowHeading h2 {
          margin: 9px 0 8px;

          color: #0a1f38;

          font-size: clamp(29px, 3vw, 39px);
          letter-spacing: -1.4px;
        }

        .sectionHeading p,
        .workflowHeading p {
          margin: 0;

          color: #758296;

          line-height: 1.6;
          font-size: 14px;
        }

        .toolCounter {
          min-width: 110px;

          background: white;

          border: 1px solid #e2e8ef;
          border-radius: 13px;

          padding: 11px 15px;

          display: flex;
          align-items: center;
          gap: 7px;

          box-shadow: 0 8px 22px rgba(20, 50, 80, 0.04);
        }

        .toolCounter strong {
          color: #0756b8;
          font-size: 19px;
        }

        .toolCounter span {
          color: #8592a3;
          font-size: 9px;
          line-height: 1.2;
        }

        /* FILTER BAR */

        .filterBar {
          margin: 34px 0 36px;

          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;

          background: white;

          border: 1px solid #e5eaf0;
          border-radius: 14px;

          padding: 8px;

          box-shadow: 0 10px 30px rgba(17, 48, 80, 0.04);
        }

        .categories {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .categories button {
          border: 0;
          background: transparent;

          color: #657386;

          border-radius: 9px;

          padding: 9px 14px;

          font-size: 11px;
          font-weight: 700;

          cursor: pointer;

          transition: 0.2s;
        }

        .categories button:hover {
          color: #0756b8;
          background: #f3f8fe;
        }

        .categories button.active {
          color: white;

          background: linear-gradient(
            135deg,
            #0756b8,
            #0b79e7
          );

          box-shadow: 0 7px 15px rgba(7, 86, 184, 0.18);
        }

        .miniSearch {
          width: 220px;
          height: 38px;

          border-radius: 9px;

          background: #f6f8fb;
          border: 1px solid #edf0f4;

          display: flex;
          align-items: center;

          padding: 0 11px;

          color: #8694a5;
        }

        .miniSearch input {
          min-width: 0;
          flex: 1;

          border: 0;
          outline: 0;

          background: transparent;

          margin-left: 7px;

          font-size: 11px;
          color: #28394d;
        }

        .miniSearch button {
          border: 0;
          background: transparent;

          cursor: pointer;

          color: #8895a5;
          font-size: 16px;
        }

        /* =====================================================
           TOOL CARDS
           UPDATED:
           - more space
           - bold title
           - title underline
           - stronger hierarchy
        ===================================================== */

        .toolsGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          /* Increased spacing between individual tools */
          column-gap: 28px;
          row-gap: 34px;
        }

        .toolCard {
          position: relative;

          /* Slightly taller for more breathing room */
          min-height: 375px;

          background: white;

          border: 1px solid #e1e8f0;
          border-radius: 20px;

          padding: 27px;

          overflow: hidden;

          display: flex;
          flex-direction: column;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .toolCard::after {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 4px;

          background: linear-gradient(
            90deg,
            #0756b8,
            #0a77e8,
            #29a8ff
          );

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.3s ease;
        }

        .toolCard:hover {
          transform: translateY(-8px);

          border-color: #a9cff5;

          box-shadow:
            0 25px 55px rgba(20, 56, 94, 0.12),
            0 8px 20px rgba(7, 86, 184, 0.06);
        }

        .toolCard:hover::after {
          transform: scaleX(1);
        }

        .cardDecor {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .cardDecor1 {
          width: 110px;
          height: 110px;

          right: -58px;
          top: -50px;

          background: #f0f7ff;
        }

        .cardDecor2 {
          width: 48px;
          height: 48px;

          right: 22px;
          top: 18px;

          border: 1px solid #f0f4f8;
        }

        .cardHeader {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .toolIcon {
          width: 58px;
          height: 58px;

          border-radius: 16px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #0756b8;

          background: linear-gradient(
            135deg,
            #e6f2ff,
            #f3f9ff
          );

          border: 1px solid #d7eaff;

          box-shadow: 0 8px 20px rgba(7, 86, 184, 0.08);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .toolCard:hover .toolIcon {
          transform: translateY(-2px) scale(1.03);

          box-shadow: 0 12px 25px rgba(7, 86, 184, 0.13);
        }

        .toolIcon.declaration {
          color: #7159c7;

          background: linear-gradient(
            135deg,
            #f0ecff,
            #faf8ff
          );

          border-color: #e4ddff;
        }

        .toolIcon.msme {
          color: #13805d;

          background: linear-gradient(
            135deg,
            #e5f8f1,
            #f5fcf9
          );

          border-color: #d5f0e6;
        }

        .toolIcon.oem {
          color: #c27317;

          background: linear-gradient(
            135deg,
            #fff2dd,
            #fffaf2
          );

          border-color: #f7e3c4;
        }

        .badge {
          position: relative;
          z-index: 3;

          background: #eaf4ff;
          color: #0756b8;

          padding: 6px 10px;

          border-radius: 999px;

          font-size: 8px;
          font-weight: 900;
          letter-spacing: 0.6px;

          text-transform: uppercase;
        }

        /* CATEGORY NOW HAS ITS OWN VISUAL BADGE */

        .categoryLabel {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;

          margin-top: 24px;

          padding: 6px 10px;

          color: #0756b8;

          background: linear-gradient(
            135deg,
            #edf6ff,
            #f8fbff
          );

          border: 1px solid #d8eaff;
          border-radius: 7px;

          font-size: 9px;
          line-height: 1;

          letter-spacing: 1.2px;

          text-transform: uppercase;

          font-weight: 900;
        }

        /* =====================================================
           TOOL NAME - MAIN UPDATE
        ===================================================== */

        .toolName {
          position: relative;

          margin: 15px 0 17px;

          color: #071f3d;

          /* Larger + noticeably bolder */
          font-size: 21px;
          line-height: 1.28;

          letter-spacing: -0.45px;

          font-weight: 900;

          /* Keeps cards visually aligned */
          min-height: 55px;
        }

        /* GRAPHICAL BLUE MARK UNDER TOOL NAME */

        .toolName::after {
          content: "";

          display: block;

          width: 44px;
          height: 4px;

          margin-top: 12px;

          border-radius: 999px;

          background: linear-gradient(
            90deg,
            #0756b8,
            #0a77e8,
            #35b4ff
          );

          box-shadow: 0 4px 10px rgba(7, 86, 184, 0.15);

          transition:
            width 0.3s ease,
            box-shadow 0.3s ease;
        }

        .toolCard:hover .toolName::after {
          width: 82px;

          box-shadow: 0 5px 15px rgba(7, 86, 184, 0.25);
        }

        .toolCard > p {
          margin: 0;

          padding-top: 1px;

          color: #6f7f94;

          font-size: 13px;
          line-height: 1.72;
        }

        .tagRow {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;

          /* Increased spacing from description */
          margin-top: 20px;
        }

        .tagRow span {
          font-size: 8px;

          color: #65778d;

          background: #f5f7fa;

          border: 1px solid #e8edf3;
          border-radius: 6px;

          padding: 5px 8px;

          font-weight: 800;
        }

        .cardAction {
          margin-top: auto;

          padding-top: 21px;

          border-top: 1px solid #e9eff5;

          display: flex;
          align-items: center;
          justify-content: space-between;

          color: #0756b8;

          font-size: 12px;
          font-weight: 900;
        }

        .actionArrow {
          width: 36px;
          height: 36px;

          border-radius: 50%;

          background: #edf6ff;

          display: flex;
          align-items: center;
          justify-content: center;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }

        .toolCard:hover .actionArrow {
          background: #0756b8;
          color: white;

          transform: translateX(4px);
        }

        /* EMPTY */

        .empty {
          background: white;

          border: 1px dashed #cad6e2;
          border-radius: 18px;

          text-align: center;

          padding: 70px 20px;
        }

        .emptyGraphic {
          margin: auto;

          width: 65px;
          height: 65px;

          border-radius: 18px;

          background: #eef6ff;
          color: #0756b8;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .empty h3 {
          margin: 16px 0 5px;
        }

        .empty p {
          color: #78869a;
        }

        .empty button {
          margin-top: 8px;

          border: 0;

          background: #0756b8;
          color: white;

          padding: 10px 16px;

          border-radius: 8px;

          cursor: pointer;
        }

        /* =====================================================
           WORKFLOW
        ===================================================== */

        .workflow {
          background: white;

          padding: 85px 0 100px;

          border-top: 1px solid #e8edf3;
          border-bottom: 1px solid #e8edf3;
        }

        .workflowHeading {
          text-align: center;

          max-width: 650px;
          margin: auto;
        }

        .smallTitle.center {
          justify-content: center;
        }

        .workflowGrid {
          position: relative;

          display: grid;
          grid-template-columns: repeat(3, 1fr);

          gap: 55px;

          margin-top: 60px;
        }

        .workflowLine {
          position: absolute;

          top: 37px;
          left: 16%;
          right: 16%;

          height: 1px;

          background: linear-gradient(
            90deg,
            transparent,
            #bcd8f5,
            #bcd8f5,
            transparent
          );
        }

        .workflowCard {
          position: relative;
          z-index: 2;

          text-align: center;
        }

        .stepCircle {
          position: relative;

          margin: auto;

          width: 74px;
          height: 74px;

          border-radius: 22px;

          background: linear-gradient(
            145deg,
            #eef7ff,
            #fff
          );

          border: 1px solid #d9eafb;

          color: #0756b8;

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow: 0 14px 30px rgba(7, 86, 184, 0.1);
        }

        .stepCircle > span {
          position: absolute;

          width: 21px;
          height: 21px;

          right: -7px;
          top: -7px;

          border-radius: 50%;

          background: #0756b8;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 7px;
          font-weight: 900;

          border: 3px solid white;
        }

        .workflowCard h3 {
          margin: 20px 0 7px;

          color: #10263f;

          font-size: 17px;
          font-weight: 800;
        }

        .workflowCard > p {
          margin: auto;

          max-width: 280px;

          color: #758397;

          line-height: 1.6;
          font-size: 12px;
        }

        .stepMini {
          margin: 19px auto 0;

          display: flex;
          justify-content: center;
          gap: 5px;
        }

        .stepMini span {
          background: #f2f7fd;

          border: 1px solid #e0ebf7;

          color: #507093;

          padding: 5px 8px;

          border-radius: 6px;

          font-size: 8px;
          font-weight: 800;
        }

        .formGraphic {
          width: 150px;

          margin: 19px auto 0;

          background: #f8fafc;

          border: 1px solid #e5ebf1;
          border-radius: 9px;

          padding: 9px;

          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .formGraphic span {
          height: 7px;

          background: white;

          border: 1px solid #e2e8ef;
          border-radius: 3px;
        }

        .downloadGraphic {
          width: 160px;

          margin: 19px auto 0;

          background: #f8fafc;

          border: 1px solid #e4eaf0;
          border-radius: 9px;

          padding: 8px 10px;

          display: flex;
          align-items: center;
          gap: 7px;

          color: #0756b8;
        }

        .downloadGraphic span {
          flex: 1;

          color: #65758a;

          text-align: left;

          font-size: 8px;
        }

        .downloadGraphic b {
          color: #199b57;
          font-size: 9px;
        }

        /* =====================================================
           LETTERHEAD
        ===================================================== */

        .letterheadSection {
          padding: 90px 0;
          background: #f7f9fc;
        }

        .letterheadPanel {
          position: relative;
          overflow: hidden;

          min-height: 420px;

          border-radius: 26px;

          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(40, 143, 255, 0.18),
              transparent 25%
            ),
            linear-gradient(
              125deg,
              #04182f,
              #063b70
            );

          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          align-items: center;

          color: white;

          padding: 45px 70px;

          box-shadow: 0 28px 60px rgba(5, 37, 70, 0.14);
        }

        .panelGlow {
          position: absolute;

          right: -100px;
          top: -120px;

          width: 350px;
          height: 350px;

          border-radius: 50%;

          background: rgba(36, 154, 255, 0.14);

          filter: blur(70px);
        }

        .letterheadVisual {
          position: relative;
          height: 310px;
        }

        .paper {
          position: absolute;

          width: 205px;
          height: 275px;

          border-radius: 8px;

          background: white;

          box-shadow: 0 22px 45px rgba(0, 0, 0, 0.24);
        }

        .paperBack {
          left: 90px;
          top: 20px;

          opacity: 0.25;

          transform: rotate(8deg);
        }

        .paperFront {
          left: 60px;
          top: 0;

          transform: rotate(-4deg);

          padding: 18px;

          color: #18304a;
        }

        .paperHeader {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .paperLogo {
          width: 30px;
          height: 30px;

          background: #0756b8;
          color: white;

          border-radius: 7px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 11px;
          font-weight: 900;
        }

        .paperHeader > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .paperHeader strong {
          font-size: 7px;
        }

        .paperHeader span {
          font-size: 5px;
          color: #8b99a8;
          margin-top: 2px;
        }

        .paperDivider {
          height: 2px;

          margin: 13px 0 20px;

          background: linear-gradient(
            90deg,
            #0756b8,
            #36a9f5
          );
        }

        .paperLines {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .paperLines span {
          height: 4px;

          border-radius: 4px;

          background: #e4e9ef;
        }

        .paperLines span:nth-child(1) {
          width: 55%;
        }

        .paperLines span:nth-child(3) {
          width: 90%;
        }

        .paperLines span:nth-child(5) {
          width: 70%;
        }

        .insertIndicator {
          margin-top: 25px;

          border: 1px dashed #9dc9f5;

          background: #f2f8ff;
          color: #4d7ba8;

          padding: 9px;

          border-radius: 6px;

          font-size: 6px;

          display: flex;
          align-items: center;
          gap: 6px;
        }

        .insertIndicator span {
          width: 14px;
          height: 14px;

          border-radius: 50%;

          background: #0756b8;
          color: white;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .uploadBubble {
          position: absolute;
          z-index: 4;

          left: 245px;
          top: 195px;

          width: 49px;
          height: 49px;

          border-radius: 15px;

          background: #0a7be8;

          border: 4px solid #164a79;

          color: white;

          display: flex;
          align-items: center;
          justify-content: center;

          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
        }

        .letterheadCopy {
          position: relative;
          z-index: 2;

          max-width: 510px;
        }

        .panelBadge {
          display: inline-block;

          color: #71c2ff;

          font-size: 9px;
          letter-spacing: 1.6px;
          font-weight: 900;
        }

        .letterheadCopy h2 {
          font-size: clamp(29px, 3vw, 42px);
          line-height: 1.1;
          letter-spacing: -1.5px;

          margin: 11px 0 13px;
        }

        .letterheadCopy > p {
          color: #aec4dc;

          font-size: 13px;
          line-height: 1.7;

          margin: 0;
        }

        .features {
          display: grid;
          gap: 9px;

          margin: 20px 0 25px;
        }

        .features div {
          display: flex;
          align-items: center;
          gap: 8px;

          color: #d3e2f1;

          font-size: 11px;
        }

        .features span {
          width: 18px;
          height: 18px;

          border-radius: 50%;

          background: rgba(59, 175, 255, 0.14);
          color: #62bdff;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 8px;
        }

        .panelButton {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          background: white;
          color: #0756b8;

          padding: 11px 16px;

          border-radius: 9px;

          font-size: 10px;
          font-weight: 800;

          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
        }

        /* =====================================================
           CTA
        ===================================================== */

        .ctaSection {
          background: white;
          padding: 70px 0 90px;
        }

        .cta {
          position: relative;
          overflow: hidden;

          border: 1px solid #dbe9f8;
          border-radius: 20px;

          background: linear-gradient(
            110deg,
            #f3f9ff,
            #ffffff
          );

          padding: 30px 35px;

          display: flex;
          align-items: center;
          gap: 22px;
        }

        .ctaPattern {
          position: absolute;

          right: 0;
          top: 0;

          width: 300px;
          height: 100%;

          opacity: 0.35;

          background:
            radial-gradient(
              circle at 50% 50%,
              #b6ddff 1px,
              transparent 1px
            );

          background-size: 14px 14px;
        }

        .ctaIcon {
          position: relative;
          z-index: 2;

          flex: 0 0 auto;

          width: 64px;
          height: 64px;

          border-radius: 17px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: linear-gradient(
            135deg,
            #0756b8,
            #1594ef
          );

          color: white;

          box-shadow: 0 13px 25px rgba(7, 86, 184, 0.2);
        }

        .ctaCopy {
          position: relative;
          z-index: 2;
          flex: 1;
        }

        .ctaCopy > span {
          color: #0872df;

          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .ctaCopy h2 {
          margin: 5px 0;

          color: #112840;

          font-size: 20px;
        }

        .ctaCopy p {
          margin: 0;

          color: #768397;

          font-size: 11px;
        }

        .ctaButton {
          position: relative;
          z-index: 2;

          white-space: nowrap;

          display: flex;
          align-items: center;
          gap: 9px;

          background: #0756b8;
          color: white;

          padding: 12px 16px;

          border-radius: 9px;

          font-size: 10px;
          font-weight: 800;

          box-shadow: 0 10px 20px rgba(7, 86, 184, 0.17);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1050px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }

          .heroCopy {
            text-align: center;
          }

          .heroDescription,
          .heroSearch {
            margin-left: auto;
            margin-right: auto;
          }

          .quickSearch,
          .heroTrust {
            justify-content: center;
          }

          .heroVisual {
            width: 550px;
            max-width: 100%;
            margin: -10px auto 0;
          }

          .toolsGrid {
            grid-template-columns: repeat(2, 1fr);

            column-gap: 24px;
            row-gap: 28px;
          }

          .letterheadPanel {
            padding: 45px;
          }
        }

        @media (max-width: 760px) {
          .hero {
            padding-top: 65px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .heroVisual {
            transform: scale(0.83);
            transform-origin: top center;

            margin-bottom: -75px;
          }

          .sectionHeading {
            display: block;
          }

          .toolCounter {
            display: inline-flex;
            margin-top: 18px;
          }

          .filterBar {
            display: block;
          }

          .miniSearch {
            width: 100%;
            margin-top: 8px;
          }

          .toolsGrid {
            grid-template-columns: 1fr;
            row-gap: 25px;
          }

          .toolCard {
            min-height: 350px;
          }

          .workflowGrid {
            grid-template-columns: 1fr;
            gap: 55px;
          }

          .workflowLine {
            top: 50px;
            bottom: 50px;

            left: 50%;
            right: auto;

            width: 1px;
            height: auto;
          }

          .workflowCard {
            background: white;
          }

          .letterheadPanel {
            grid-template-columns: 1fr;

            padding: 35px 25px;
          }

          .letterheadVisual {
            width: 340px;
            max-width: 100%;

            margin: auto;
          }

          .letterheadCopy {
            text-align: center;
          }

          .features {
            display: inline-grid;
            text-align: left;
          }

          .cta {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 540px) {
          .container {
            width: min(100% - 26px, 1180px);
          }

          .hero h1 {
            font-size: 43px;
          }

          .heroDescription {
            font-size: 14px;
          }

          .heroTrust {
            gap: 13px;
          }

          .dashboardMockup {
            width: 450px;

            left: 50%;

            transform: translateX(-50%);
          }

          .floatingMii {
            right: -45px;
          }

          .floatingDoc {
            left: -45px;
          }

          .floatingBadge {
            right: -25px;
          }

          .categories {
            justify-content: center;
          }

          .categories button {
            padding: 8px 10px;
          }

          .toolCard {
            min-height: 340px;
            padding: 23px;
          }

          .toolName {
            font-size: 20px;
            min-height: auto;
          }

          .toolName::after {
            margin-top: 10px;
          }

          .paperFront {
            left: 35px;
          }

          .paperBack {
            left: 65px;
          }

          .uploadBubble {
            left: 215px;
          }
        }
      `}</style>
    </main>
  );
}