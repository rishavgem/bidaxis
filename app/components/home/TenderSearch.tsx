"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Tender = {
  id: number;
  bidNumber: string;
  title: string;
  category: string;
  department: string;
  state: string;
  closingDate: string;
  description: string;
  value?: string;
};

const tenders: Tender[] = [
  {
    id: 1,
    bidNumber: "GEM/2026/B/1001",
    title: "Railway Equipment Supply Tender",
    category: "Supply",
    department: "Indian Railways",
    state: "Delhi",
    closingDate: "25 Jul 2026",
    description:
      "Procurement opportunity for supply of railway equipment and associated products.",
    value: "GeM Bid",
  },
  {
    id: 2,
    bidNumber: "GEM/2026/B/1002",
    title: "Infrastructure Development Work",
    category: "Construction",
    department: "CPWD",
    state: "Haryana",
    closingDate: "28 Jul 2026",
    description:
      "Infrastructure development and construction-related procurement opportunity.",
    value: "Government Tender",
  },
];

type IconName =
  | "search"
  | "building"
  | "location"
  | "calendar"
  | "document"
  | "arrow"
  | "filter"
  | "briefcase"
  | "spark"
  | "clock"
  | "category";

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
      {name === "search" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </>
      )}

      {name === "building" && (
        <>
          <path d="M4 21V5h10v16" />
          <path d="M14 9h6v12" />
          <path d="M8 9h2M8 13h2M8 17h2" />
          <path d="M17 13h1M17 17h1" />
          <path d="M2 21h20" />
        </>
      )}

      {name === "location" && (
        <>
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}

      {name === "calendar" && (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </>
      )}

      {name === "document" && (
        <>
          <path d="M6 3h8l4 4v14H6z" />
          <path d="M14 3v5h5" />
          <path d="M9 12h6M9 16h6" />
        </>
      )}

      {name === "arrow" && (
        <>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </>
      )}

      {name === "filter" && (
        <>
          <path d="M4 6h16" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </>
      )}

      {name === "briefcase" && (
        <>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5h8v2" />
          <path d="M3 12h18" />
        </>
      )}

      {name === "spark" && (
        <>
          <path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2z" />
          <path d="m18 14 .7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7z" />
        </>
      )}

      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      )}

      {name === "category" && (
        <>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </>
      )}
    </svg>
  );
}

export default function TenderSearch() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [state, setState] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(tenders.map((item) => item.category))),
    []
  );

  const departments = useMemo(
    () => Array.from(new Set(tenders.map((item) => item.department))),
    []
  );

  const states = useMemo(
    () => Array.from(new Set(tenders.map((item) => item.state))),
    []
  );

  const filteredTenders = useMemo(() => {
    const search = submittedKeyword.trim().toLowerCase();

    return tenders.filter((tender) => {
      const keywordMatch =
        !search ||
        tender.title.toLowerCase().includes(search) ||
        tender.bidNumber.toLowerCase().includes(search) ||
        tender.department.toLowerCase().includes(search) ||
        tender.category.toLowerCase().includes(search) ||
        tender.state.toLowerCase().includes(search);

      const categoryMatch =
        !category || tender.category === category;

      const departmentMatch =
        !department || tender.department === department;

      const stateMatch =
        !state || tender.state === state;

      return (
        keywordMatch &&
        categoryMatch &&
        departmentMatch &&
        stateMatch
      );
    });
  }, [
    submittedKeyword,
    category,
    department,
    state,
  ]);

  function handleSearch() {
    setSubmittedKeyword(keyword);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  function clearFilters() {
    setKeyword("");
    setSubmittedKeyword("");
    setCategory("");
    setDepartment("");
    setState("");
  }

  const filtersActive =
    Boolean(submittedKeyword) ||
    Boolean(category) ||
    Boolean(department) ||
    Boolean(state);

  return (
    <section className="tenderSection">
      <div className="backgroundGrid" />
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <div className="container">
        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="sectionHeading">
          <div className="eyebrow">
            <span className="eyebrowIcon">
              <Icon name="spark" size={13} />
            </span>

            GOVERNMENT PROCUREMENT DISCOVERY
          </div>

          <h2>
            Find the right tender.
            <span> Bid with confidence.</span>
          </h2>

          <p>
            Discover GeM and government procurement
            opportunities across India with intelligent
            search and focused tender filters.
          </p>
        </div>

        {/* =====================================================
            SEARCH CONSOLE
        ===================================================== */}

        <div className="searchConsole">
          <div className="consoleTop">
            <div className="consoleTitle">
              <div className="consoleIcon">
                <Icon name="search" size={19} />
              </div>

              <div>
                <span>TENDER SEARCH ENGINE</span>
                <strong>
                  Search live procurement opportunities
                </strong>
              </div>
            </div>

            <div className="databaseStatus">
              <i />
              Tender Database
            </div>
          </div>

          <div className="searchGrid">
            <div className="keywordField">
              <div className="fieldIcon">
                <Icon name="search" size={19} />
              </div>

              <div className="inputContent">
                <label>KEYWORD / BID NUMBER</label>

                <input
                  value={keyword}
                  onChange={(event) =>
                    setKeyword(event.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Search tender, product, bid..."
                />
              </div>
            </div>

            <FilterSelect
              icon="category"
              label="CATEGORY"
              value={category}
              onChange={setCategory}
              placeholder="All Categories"
              options={categories}
            />

            <FilterSelect
              icon="building"
              label="DEPARTMENT"
              value={department}
              onChange={setDepartment}
              placeholder="All Departments"
              options={departments}
            />

            <FilterSelect
              icon="location"
              label="STATE"
              value={state}
              onChange={setState}
              placeholder="All States"
              options={states}
            />

            <button
              className="searchButton"
              type="button"
              onClick={handleSearch}
            >
              <Icon name="search" size={18} />

              <span>Search Tenders</span>

              <Icon name="arrow" size={16} />
            </button>
          </div>

          <div className="consoleBottom">
            <div className="searchHint">
              <Icon name="filter" size={14} />

              <span>
                Refine opportunities by category,
                department and state
              </span>
            </div>

            {filtersActive && (
              <button
                type="button"
                className="clearButton"
                onClick={clearFilters}
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* =====================================================
            RESULTS HEADER
        ===================================================== */}

        <div className="resultsHeader">
          <div>
            <div className="resultsLabel">
              <span className="resultsIcon">
                <Icon name="briefcase" size={15} />
              </span>

              TENDER OPPORTUNITIES
            </div>

            <h3>
              Latest Government Tenders
            </h3>

            <p>
              Explore procurement opportunities matching
              your business requirements.
            </p>
          </div>

          <div className="resultCount">
            <span>
              {filteredTenders.length
                .toString()
                .padStart(2, "0")}
            </span>

            <div>
              <strong>Opportunities</strong>
              <small>currently displayed</small>
            </div>
          </div>
        </div>

        {/* =====================================================
            TENDER CARDS
        ===================================================== */}

        {filteredTenders.length > 0 ? (
          <div className="tenderGrid">
            {filteredTenders.map((tender) => (
              <article
                className="tenderCard"
                key={tender.id}
              >
                <div className="cardAccent" />

                <div className="cardTop">
                  <div className="categoryBadge">
                    <Icon
                      name="category"
                      size={12}
                    />

                    {tender.category}
                  </div>

                  <div className="closingBadge">
                    <Icon
                      name="clock"
                      size={13}
                    />

                    <div>
                      <span>CLOSING</span>
                      <strong>
                        {tender.closingDate}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="bidNumber">
                  <Icon
                    name="document"
                    size={14}
                  />

                  {tender.bidNumber}
                </div>

                <h4>{tender.title}</h4>

                <p className="description">
                  {tender.description}
                </p>

                <div className="metaGrid">
                  <div className="metaItem">
                    <div className="metaIcon">
                      <Icon
                        name="building"
                        size={17}
                      />
                    </div>

                    <div>
                      <span>DEPARTMENT</span>
                      <strong>
                        {tender.department}
                      </strong>
                    </div>
                  </div>

                  <div className="metaItem">
                    <div className="metaIcon">
                      <Icon
                        name="location"
                        size={17}
                      />
                    </div>

                    <div>
                      <span>LOCATION</span>
                      <strong>
                        {tender.state}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="cardFooter">
                  <div className="tenderType">
                    <span>PROCUREMENT</span>
                    <strong>
                      {tender.value ||
                        "Government Tender"}
                    </strong>
                  </div>

                  <Link
                    href={`/tenders/${tender.id}`}
                    className="viewButton"
                  >
                    View Tender
                    <Icon
                      name="arrow"
                      size={15}
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="emptyState">
            <div className="emptyIcon">
              <Icon name="search" size={27} />
            </div>

            <h3>No matching tenders found</h3>

            <p>
              Try changing your keyword or removing one
              of the selected filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
            >
              Reset Search
            </button>
          </div>
        )}

        {/* =====================================================
            CTA STRIP
        ===================================================== */}

        <div className="alertStrip">
          <div className="alertGraphic">
            <div className="alertIcon">
              <Icon name="spark" size={21} />
            </div>

            <div>
              <span>SMART TENDER DISCOVERY</span>

              <strong>
                Don&apos;t miss opportunities relevant
                to your business.
              </strong>

              <p>
                Save tenders, track deadlines and access
                BidAxis tender management support from
                one platform.
              </p>
            </div>
          </div>

          <Link
            href="/register"
            className="alertButton"
          >
            Create Free Account
            <Icon name="arrow" size={15} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .tenderSection {
          --blue: #0756b8;
          --blue2: #0a77e8;
          --navy: #061b35;
          --ink: #142033;
          --muted: #718096;
          --line: #e3eaf2;

          position: relative;
          overflow: hidden;
          padding: 92px 0 95px;
          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(10, 119, 232, 0.08),
              transparent 27%
            ),
            radial-gradient(
              circle at 90% 65%,
              rgba(0, 91, 187, 0.055),
              transparent 25%
            ),
            #f5f8fc;
        }

        .backgroundGrid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.32;
          background-image:
            linear-gradient(
              rgba(8, 72, 139, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 72, 139, 0.035) 1px,
              transparent 1px
            );
          background-size: 55px 55px;
          mask-image: linear-gradient(
            to bottom,
            black,
            transparent 70%
          );
        }

        .glow {
          position: absolute;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(2px);
        }

        .glowOne {
          width: 330px;
          height: 330px;
          top: -210px;
          right: 5%;
          border: 1px solid rgba(10, 119, 232, 0.08);
        }

        .glowTwo {
          width: 220px;
          height: 220px;
          left: -130px;
          bottom: 100px;
          border: 1px solid rgba(10, 119, 232, 0.07);
        }

        .container {
          position: relative;
          z-index: 2;
          width: min(
            1180px,
            calc(100% - 40px)
          );
          margin: auto;
        }

        /* HEADING */

        .sectionHeading {
          max-width: 760px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
          color: var(--blue);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.35px;
        }

        .eyebrowIcon {
          width: 25px;
          height: 25px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #cfe3f7;
          border-radius: 8px;
          background: #eaf5ff;
        }

        .sectionHeading h2 {
          margin: 0;
          color: #071a31;
          font-size: clamp(
            32px,
            4vw,
            48px
          );
          line-height: 1.08;
          letter-spacing: -1.8px;
        }

        .sectionHeading h2 span {
          color: var(--blue);
        }

        .sectionHeading p {
          max-width: 650px;
          margin: 15px auto 0;
          color: #66788d;
          font-size: 14px;
          line-height: 1.7;
        }

        /* SEARCH */

        .searchConsole {
          overflow: hidden;
          border: 1px solid rgba(
            214,
            225,
            237,
            0.9
          );
          border-radius: 23px;
          background: white;
          box-shadow:
            0 28px 60px
              rgba(15, 46, 79, 0.1),
            0 3px 8px
              rgba(15, 46, 79, 0.035);
        }

        .consoleTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 17px 21px;
          border-bottom: 1px solid #edf1f5;
          background: linear-gradient(
            90deg,
            #fbfdff,
            #f6faff
          );
        }

        .consoleTitle {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .consoleIcon {
          width: 37px;
          height: 37px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          color: var(--blue);
          background: #e8f3ff;
        }

        .consoleTitle > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .consoleTitle span {
          color: #8393a5;
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1.2px;
        }

        .consoleTitle strong {
          margin-top: 3px;
          color: #1c344d;
          font-size: 11px;
        }

        .databaseStatus {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 10px;
          border: 1px solid #d9eee3;
          border-radius: 999px;
          color: #24764c;
          background: #f1fbf5;
          font-size: 8px;
          font-weight: 800;
        }

        .databaseStatus i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #25a761;
          box-shadow:
            0 0 0 4px
            rgba(37, 167, 97, 0.1);
        }

        .searchGrid {
          display: grid;
          grid-template-columns:
            1.3fr 1fr 1fr 0.9fr auto;
          gap: 11px;
          padding: 20px;
        }

        .keywordField {
          min-width: 0;
          height: 65px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 14px;
          border: 1px solid #dce5ee;
          border-radius: 12px;
          background: #fbfcfe;
          transition: 0.2s;
        }

        .keywordField:focus-within {
          border-color: #6aafea;
          background: white;
          box-shadow:
            0 0 0 4px
            rgba(10, 119, 232, 0.06);
        }

        .fieldIcon {
          color: #478ccf;
        }

        .inputContent {
          min-width: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .inputContent label {
          color: #8a98a8;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        .inputContent input {
          width: 100%;
          margin-top: 5px;
          padding: 0;
          outline: none;
          border: 0;
          color: #17304a;
          background: transparent;
          font-size: 11px;
          font-weight: 700;
        }

        .inputContent input::placeholder {
          color: #a2adba;
          font-weight: 500;
        }

        .searchButton {
          min-width: 170px;
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 20px;
          border: 0;
          border-radius: 12px;
          color: white;
          background:
            linear-gradient(
              135deg,
              #0756b8,
              #0a77e8
            );
          font-size: 10px;
          font-weight: 900;
          cursor: pointer;
          box-shadow:
            0 13px 24px
            rgba(7, 86, 184, 0.18);
          transition: 0.2s;
        }

        .searchButton:hover {
          transform: translateY(-2px);
          box-shadow:
            0 17px 28px
            rgba(7, 86, 184, 0.23);
        }

        .consoleBottom {
          min-height: 43px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 0 21px;
          border-top: 1px solid #edf1f5;
          background: #fbfcfe;
        }

        .searchHint {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #8a98a8;
          font-size: 8px;
        }

        .clearButton {
          padding: 0;
          border: 0;
          color: var(--blue);
          background: transparent;
          font-size: 8px;
          font-weight: 800;
          cursor: pointer;
        }

        /* RESULTS */

        .resultsHeader {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin: 52px 0 20px;
        }

        .resultsLabel {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--blue);
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1.1px;
        }

        .resultsIcon {
          width: 27px;
          height: 27px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #e6f2ff;
        }

        .resultsHeader h3 {
          margin: 8px 0 0;
          color: #102941;
          font-size: 25px;
          letter-spacing: -0.6px;
        }

        .resultsHeader p {
          margin: 6px 0 0;
          color: #8390a0;
          font-size: 10px;
        }

        .resultCount {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid #e0e8f0;
          border-radius: 12px;
          background: white;
        }

        .resultCount > span {
          color: var(--blue);
          font-size: 25px;
          font-weight: 900;
          line-height: 1;
        }

        .resultCount > div {
          display: flex;
          flex-direction: column;
        }

        .resultCount strong {
          color: #31475e;
          font-size: 8px;
        }

        .resultCount small {
          margin-top: 2px;
          color: #9aa5b1;
          font-size: 7px;
        }

        /* TENDER CARDS */

        .tenderGrid {
          display: grid;
          grid-template-columns:
            repeat(2, minmax(0, 1fr));
          gap: 19px;
        }

        .tenderCard {
          position: relative;
          overflow: hidden;
          padding: 23px;
          border: 1px solid #e2e9f0;
          border-radius: 18px;
          background: white;
          box-shadow:
            0 10px 30px
            rgba(17, 48, 79, 0.055);
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }

        .tenderCard:hover {
          transform: translateY(-5px);
          border-color: #bfdaf3;
          box-shadow:
            0 22px 45px
            rgba(17, 48, 79, 0.11);
        }

        .cardAccent {
          position: absolute;
          top: 0;
          left: 28px;
          width: 58px;
          height: 3px;
          border-radius: 0 0 5px 5px;
          background: linear-gradient(
            90deg,
            var(--blue),
            #52b6ff
          );
        }

        .cardTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .categoryBadge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 9px;
          border: 1px solid #d9e9fa;
          border-radius: 999px;
          color: var(--blue);
          background: #eef6ff;
          font-size: 8px;
          font-weight: 800;
        }

        .closingBadge {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #e45050;
        }

        .closingBadge > div {
          display: flex;
          flex-direction: column;
        }

        .closingBadge span {
          color: #a6afb9;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .closingBadge strong {
          margin-top: 1px;
          color: #d63c3c;
          font-size: 8px;
        }

        .bidNumber {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 23px;
          color: #66819b;
          font-size: 8px;
          font-weight: 700;
        }

        .tenderCard h4 {
          margin: 9px 0 0;
          color: #0d253d;
          font-size: 19px;
          line-height: 1.3;
          letter-spacing: -0.35px;
        }

        .description {
          min-height: 38px;
          margin: 8px 0 0;
          color: #7a8999;
          font-size: 9px;
          line-height: 1.65;
        }

        .metaGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-top: 20px;
        }

        .metaItem {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px;
          border: 1px solid #e8edf3;
          border-radius: 10px;
          background: #fafcfe;
        }

        .metaIcon {
          width: 31px;
          height: 31px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .metaItem > div:last-child {
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        .metaItem span {
          color: #9aa6b3;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .metaItem strong {
          max-width: 150px;
          margin-top: 2px;
          overflow: hidden;
          color: #31485f;
          font-size: 8px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .cardFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 20px;
          padding-top: 17px;
          border-top: 1px solid #edf1f5;
        }

        .tenderType {
          display: flex;
          flex-direction: column;
        }

        .tenderType span {
          color: #a1abb6;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .tenderType strong {
          margin-top: 3px;
          color: #40566c;
          font-size: 8px;
        }

        .viewButton {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 9px;
          color: white;
          background: var(--blue);
          font-size: 9px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s;
        }

        .viewButton:hover {
          background: #064a9f;
          transform: translateX(2px);
        }

        /* EMPTY */

        .emptyState {
          padding: 60px 25px;
          border: 1px dashed #cad9e7;
          border-radius: 18px;
          text-align: center;
          background: white;
        }

        .emptyIcon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: auto;
          border-radius: 16px;
          color: var(--blue);
          background: #eaf4ff;
        }

        .emptyState h3 {
          margin: 15px 0 0;
          color: #18324b;
          font-size: 17px;
        }

        .emptyState p {
          margin: 6px 0 0;
          color: #8593a2;
          font-size: 10px;
        }

        .emptyState button {
          margin-top: 17px;
          padding: 10px 16px;
          border: 0;
          border-radius: 8px;
          color: white;
          background: var(--blue);
          font-size: 9px;
          font-weight: 800;
          cursor: pointer;
        }

        /* CTA */

        .alertStrip {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 25px;
          padding: 22px 25px;
          border-radius: 17px;
          color: white;
          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(72, 178, 255, 0.18),
              transparent 25%
            ),
            linear-gradient(
              120deg,
              #061b35,
              #073b6d
            );
          box-shadow:
            0 15px 35px
            rgba(6, 27, 53, 0.13);
        }

        .alertGraphic {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .alertIcon {
          width: 45px;
          height: 45px;
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(
            100,
            190,
            255,
            0.2
          );
          border-radius: 12px;
          color: #76c8ff;
          background: rgba(
            72,
            167,
            255,
            0.1
          );
        }

        .alertGraphic > div:last-child {
          display: flex;
          flex-direction: column;
        }

        .alertGraphic span {
          color: #6fc3ff;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .alertGraphic strong {
          margin-top: 3px;
          color: white;
          font-size: 11px;
        }

        .alertGraphic p {
          margin: 4px 0 0;
          color: #a9c0d5;
          font-size: 8px;
        }

        .alertButton {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 14px;
          border: 1px solid rgba(
            255,
            255,
            255,
            0.14
          );
          border-radius: 9px;
          color: #07345f;
          background: white;
          font-size: 8px;
          font-weight: 900;
          text-decoration: none;
          transition: 0.2s;
        }

        .alertButton:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 1050px) {
          .searchGrid {
            grid-template-columns:
              1fr 1fr;
          }

          .searchButton {
            width: 100%;
          }
        }

        @media (max-width: 800px) {
          .tenderGrid {
            grid-template-columns: 1fr;
          }

          .resultsHeader {
            align-items: flex-start;
          }
        }

        @media (max-width: 650px) {
          .tenderSection {
            padding: 70px 0;
          }

          .container {
            width: calc(100% - 24px);
          }

          .sectionHeading h2 {
            font-size: 33px;
          }

          .consoleTop,
          .consoleBottom,
          .resultsHeader,
          .alertStrip {
            align-items: flex-start;
            flex-direction: column;
          }

          .databaseStatus {
            align-self: flex-start;
          }

          .searchGrid {
            grid-template-columns: 1fr;
            padding: 14px;
          }

          .searchButton {
            min-width: 0;
          }

          .consoleBottom {
            padding: 12px 17px;
          }

          .resultsHeader {
            margin-top: 40px;
          }

          .metaGrid {
            grid-template-columns: 1fr;
          }

          .cardFooter {
            align-items: flex-start;
            flex-direction: column;
          }

          .viewButton,
          .alertButton {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

function FilterSelect({
  icon,
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  icon:
    | "category"
    | "building"
    | "location";
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="selectField">
      <div className="icon">
        <Icon name={icon} size={18} />
      </div>

      <div className="content">
        <label>{label}</label>

        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
        >
          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              value={option}
              key={option}
            >
              {option}
            </option>
          ))}
        </select>
      </div>

      <style jsx>{`
        .selectField {
          min-width: 0;
          height: 65px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 12px;
          border: 1px solid #dce5ee;
          border-radius: 12px;
          background: #fbfcfe;
          transition: 0.2s;
        }

        .selectField:focus-within {
          border-color: #6aafea;
          background: white;
          box-shadow:
            0 0 0 4px
            rgba(10, 119, 232, 0.06);
        }

        .icon {
          color: #478ccf;
        }

        .content {
          min-width: 0;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        label {
          color: #8a98a8;
          font-size: 6px;
          font-weight: 900;
          letter-spacing: 0.9px;
        }

        select {
          width: 100%;
          margin-top: 5px;
          padding: 0 20px 0 0;
          outline: none;
          border: 0;
          color: #17304a;
          background: transparent;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}