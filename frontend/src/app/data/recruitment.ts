// Structured content for the "We're Hiring" recruitment popup.
// To add/remove/edit vacancies, edit the `jobOpenings` array below.
// To take the announcement down after the deadline, either set
// `recruitmentConfig.enabled` to false or simply let the deadline pass —
// `isRecruitmentActive()` already stops showing it automatically.

export interface ResponsibilityEntry {
  type: "section" | "bullet";
  /** Only used when type is "section" */
  heading?: string;
  /** One or more paragraphs/bullets of body text */
  paragraphs: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  /** Short one-line role tag shown on the selector cards */
  tagline: string;
  /** Optional heading shown above the summary in the detail view (e.g. "Overview") */
  overviewHeading?: string;
  /** Short summary/overview paragraph shown in the detail view */
  summary: string;
  responsibilitiesHeading: string;
  responsibilities: ResponsibilityEntry[];
  qualificationsHeading: string;
  qualifications: string[];
  competenciesHeading?: string;
  competencies?: string[];
}

export const recruitmentConfig = {
  // Flip to false to permanently retire the popup without deleting the code.
  enabled: true,
  // ISO date (YYYY-MM-DD). The popup stops appearing automatically after this date.
  deadline: "2026-08-20",
  applicationEmail: "narayankoirala2025@gmail.com",
  companyName: "Laxmishree Investment",
};

export function isRecruitmentActive(): boolean {
  if (!recruitmentConfig.enabled) return false;
  const deadline = new Date(`${recruitmentConfig.deadline}T23:59:59`);
  return new Date() <= deadline;
}

export function formatDeadline(): string {
  const deadline = new Date(`${recruitmentConfig.deadline}T00:00:00`);
  return deadline.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function mailtoFor(
  position: string,
  options?: { body?: boolean }
): string {
  const subject = encodeURIComponent(
    `Application for ${position} – ${recruitmentConfig.companyName}`
  );
  let url = `mailto:${recruitmentConfig.applicationEmail}?subject=${subject}`;

  if (options?.body) {
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\nI would like to apply for the ${position} position at ${recruitmentConfig.companyName}.\n\nPlease find my resume and cover letter attached.\n\nRegards,`
    );
    url += `&body=${body}`;
  }

  return url;
}

export const jobOpenings: JobOpening[] = [
  {
    id: "general-manager",
    title: "General Manager",
    tagline: "Corporate Strategy & IPO Leadership",
    overviewHeading: "Overview",
    summary:
      "Leading the strategic supervision of investment portfolio companies, driving the end-to-end Initial Public Offering (IPO) readiness, regulatory compliance lifecycle and overseeing overall corporate operations, finance, and human resources of the Company.",
    responsibilitiesHeading: "Primary Responsibilities",
    responsibilities: [
      {
        type: "section",
        heading: "SEBON Compliance & Documentation",
        paragraphs: [
          "Supervise, prepare, review, and finalize all required documents, details, data, reports and disclosures in strict accordance with the regulations and guidelines of the Securities Exchange Board of Nepal (SEBON) and other regulatory bodies for the approval of Initial Public Offering of the Investment Portfolio Companies.",
        ],
      },
      {
        type: "section",
        heading: "IPO Facilitation & Execution",
        paragraphs: [
          "Guide and facilitate portfolio companies through the entire IPO Pipeline Process, ensuring timely progression from pre-IPO restructuring and due diligence to the final submission and approval of the IPO application to the SEBON.",
        ],
      },
      {
        type: "section",
        heading: "Timeline & Roadmap Tracking",
        paragraphs: [
          "Monitor and manage the overall IPO journey roadmap and milestones for portfolio companies, ensuring critical deadlines for public issuance are met without regulatory bottlenecks and any irregularities.",
        ],
      },
      {
        type: "section",
        heading: "Due Diligence and Deficit Document Review",
        paragraphs: [
          "Identify and rectify data deficits, document gaps, and regulatory non-compliances across projects, ensuring full adherence to corporate, financial, and securities laws prior to public offering application submissions.",
        ],
      },
      {
        type: "section",
        heading: "Progress Tracking",
        paragraphs: [
          "Track and evaluate the primary progress of portfolio companies across multiple operational phases, including construction, commercial operation and business performance in line with the key performance indicators.",
        ],
      },
      {
        type: "section",
        heading: "Project Scenario Analysis",
        paragraphs: [
          "Conduct regular assessments of project performance, identify operational or financial hindrances, and formulate corrective action plans in coordination with portfolio management teams.",
        ],
      },
      {
        type: "section",
        heading: "Corporate Finance, Legal & Transactional Oversight",
        paragraphs: [
          "Prepare, critically review, and finalize robust investment proposals, comprehensive pitch decks, and high-level corporate presentations for stakeholders and strategic partners.",
          "Draft, review, and finalize vital legal contracts, including service agreements, Memorandums of Understanding (MoUs), and business partnership agreements with corporate entities and external parties.",
          "Design and maintain a rigorous MIS reporting framework to deliver timely, accurate, and actionable reports to the Board of Directors regarding project scenarios, regulatory hurdles, and risk updates.",
        ],
      },
      {
        type: "section",
        heading: "General Management, Finance & Administration",
        paragraphs: [
          "Overall supervision of the company's books of accounts, financial reporting standards, internal controls, and corporate budgeting.",
          "Direct the human resource functions—including talent management, performance appraisals, and policy implementation—alongside general administrative supervision to maintain high operational efficiency.",
        ],
      },
    ],
    qualificationsHeading: "Key Qualifications & Experience",
    qualifications: [
      "Master's degree in Management, Finance, Business Administration, Economics, Law, or professional qualifications such as CA, ACCA, or CFA.",
      "Minimum of 8–10 years of progressive corporate experience, with at least 5 years in a senior leadership role (General Manager, CEO, or Head of Investment/Corporate Finance), preferably in investment, merchant banking, issue management, underwriting or related field.",
      "In-depth, demonstrated knowledge of the Nepalese corporate and capital market legal framework, including the Companies Act, Securities Act, SEBON regulations, and Nepal Financial Reporting Standards (NFRS) and other relevant laws and guidelines.",
    ],
    competenciesHeading: "Required Competencies & Skills",
    competencies: [
      "Advanced expertise in financial modeling, corporate valuation, legal drafting, and regulatory compliance mapping.",
      "Proven ability to lead cross-functional teams, manage high-stakes external stakeholder relations, and interface effectively with a Board of Directors.",
      "Exceptional written and verbal communication skills for preparing high-level board reports, pitch decks, and negotiating complex commercial agreements.",
      "Strong analytical capability to diagnose operational, financial, or regulatory bottlenecks and execute decisive solutions under tight timelines.",
    ],
  },
  {
    id: "account-officer",
    title: "Account Officer",
    tagline: "Finance & Accounts",
    summary:
      "Manages day-to-day accounting, reconciliations, payroll, tax compliance, and financial reporting for the company.",
    responsibilitiesHeading: "Key Responsibilities & Duties",
    responsibilities: [
      "Oversee all daily data entry for all financial transactions, including Purchase, Sales, Income and Expenses and all other financial transactions.",
      "Prepare Accounting Vouchers and Transaction Summaries and maintain systematic, secure, and easily retrievable digital and physical records for audits and regulatory inquiries.",
      "Maintain accurate and up-to-date Day Books and General Ledgers for all company transactions.",
      "Perform weekly/monthly reconciliation of bank accounts, Purchase and Sales Ledger and other general ledger of the company.",
      "Maintain systematic log (Opening Balance, Purchase, Sales and Closing Balance) of Inventory on Daily Basis.",
      "Ensure timely calculation, filing, and payment of corporate taxes, including capital gains tax & TDS and other obligations of the company.",
      "Manage the payroll process, including salary processing, statutory deductions, and compliance reporting and taxation.",
      "Develop and generate comprehensive MIS reports to assist management in strategic planning.",
      "Prepare monthly, quarterly, and annual financial statements in accordance with relevant accounting standards.",
      "Any other tasks and responsibilities as delegated by the management and Board of Directors.",
    ].map((text) => ({ type: "bullet" as const, paragraphs: [text] })),
    qualificationsHeading: "Required Qualifications & Skills",
    qualifications: [
      "Bachelor's/master's degree in Management, Finance, or a related field.",
      "Minimum 2 Years of accounting experience in an investment firm, broker house, financial institutions or related field.",
      "Expertise in accounting software/s, Accounting Policies and corporate laws and taxation.",
      "Advanced Microsoft Office Package skills (MS Word, Excel, PowerPoint & Outlook).",
      "Good corporate communication skills.",
      "Clear understanding of equity market system and Investment accounting.",
      "Strong numerical aptitude with a keen eye for detail and data integrity.",
      "High level of professionalism with the ability to maintain confidentiality regarding sensitive financial and investment data.",
    ],
  },
  {
    id: "administration-officer",
    title: "Administration Officer",
    tagline: "Corporate Administration",
    summary:
      "Handles corporate correspondence, documentation, board coordination, and administrative operations of the company.",
    responsibilitiesHeading: "Key Responsibilities & Duties",
    responsibilities: [
      "Reconciliation and verification of Share application, Issuance of Cash Receipts and Finalization of Share Lagat.",
      "Record incoming and outgoing letter handling, proper lodging, dispatch, and delivery.",
      "Handle official emails and phone calls professionally, routing inquiries to the appropriate departments or personnel.",
      "Manage internal and external correspondence with government bodies (SEBON, NEPSE, etc.), consultants, and shareholders and other external parties.",
      "Draft official letters, notices, memos, and minutes of the company with high accuracy.",
      "Schedule and coordinate Board of Directors (BOD) meetings, Staff / Management Meeting and Draft Meeting Minutes.",
      "Prepare and distribute meeting agendas, working papers, and briefing packages to the BOD members in a timely manner.",
      "Maintain a strong, systematic system for record keeping and archiving of physical and digital company documents, licenses, agreements, and legal papers.",
      "Ensure accurate documentation, requiring proficient Nepali typing for official government correspondence and reports.",
      "Monitor and manage office supplies, stationery, and utility equipment.",
      "Assist in logistics management for site visits, official travels, and corporate events.",
      "Perform other administrative and support responsibilities as assigned by management and the BOD.",
    ].map((text) => ({ type: "bullet" as const, paragraphs: [text] })),
    qualificationsHeading: "Required Qualifications & Skills",
    qualifications: [
      "Bachelor's/master's degree in Management, Finance, or a related field.",
      "Minimum 2 Years of administration and Documentation experience in an investment firm, broker house, financial institutions or related field.",
      "Advanced Microsoft Office Package skills (MS Word, Excel, PowerPoint & Outlook).",
      "Good corporate communication skills.",
      "Clear understanding of equity market system and Documentation Handling System.",
      "High level of professionalism and the ability to maintain confidentiality regarding sensitive financial and investment data.",
      "Driving License of a Two-Wheeler and Good Negotiation Skill.",
    ],
  },
];
