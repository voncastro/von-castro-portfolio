export type LogoAsset = {
  src: string;
  alt: string;
  variant?: "icon" | "wordmark" | "wide";
};

export type Stat = {
  value: string;
  label: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  context: string;
  url?: string;
  logo: LogoAsset;
  bullets: string[];
  tags: string[];
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
  variant?: "phone" | "watch";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  role: string;
  dates: string;
  status: string;
  summary: string;
  logo?: LogoAsset;
  hook: string;
  bullets: string[];
  stats: Stat[];
  links: ProjectLink[];
  tags: string[];
  media: MediaAsset[];
};

export type WorkflowMove = {
  step: string;
  name: string;
  body: string;
};

export type SkillGroup = {
  label: string;
  values: string[];
};

/* ------------------------------------------------------------------ */
/* Identity — one reader (a hiring manager), one idea, one ask.        */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Von Castro",
  title: "Software Engineer",
  location: "Edmonton, AB",
  availability: "Open to remote & relocation",
  email: "voncastro.dev@gmail.com",
  // Positioning line: specific, verifiable, differentiating.
  tagline:
    "I build production-grade mobile and web product work — by running AI coding agents with the rigor of an engineering team.",
  // Hero proof paragraph: the four pillars — scale, recognition, startups, ownership.
  summary:
    "A year inside Intuit's QuickBooks platform org, shipping to 100M+ customers and earning org-wide recognition twice. Startup experience from both sides: a founder-led MVP and correctness work on a live money app. And Setlio — a full product, phone to watch to backend, built end to end, solo.",
  links: {
    email: "mailto:voncastro.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/voncastro/",
    github: "https://github.com/voncastro",
    resume: "/Von-Castro-Resume.pdf",
  },
};

/* Headline stats — the four pillars: scale, recognition, startups, ownership. */
export const heroStats: Stat[] = [
  { value: "100M+", label: "customers on the Intuit platform my internship work shipped to" },
  { value: "2×", label: "org-wide recognition awards for contributions at Intuit" },
  { value: "0→1", label: "startup experience, from founder-led MVP to a live money app" },
  { value: "Solo", label: "full product built end to end — phone, watch, and backend" },
];

/* ------------------------------------------------------------------ */
/* Experience — outcome-led bullets, 3 per role, no filler.            */
/* ------------------------------------------------------------------ */

export const experiences: Experience[] = [
  {
    company: "Intuit",
    role: "Software Developer Intern",
    dates: "Jan 2022 — Dec 2022",
    context: "QuickBooks Online platform · financial software serving 100M+ customers",
    url: "https://www.intuit.com",
    logo: {
      src: "/assets/logo-intuit.svg",
      alt: "Intuit logo",
      variant: "wide",
    },
    bullets: [
      "Led a server-side rendering performance investigation across a multi-plugin page architecture — measured up to 50% load-time improvement on targeted plugins and surfaced the compatibility blockers for a general rollout.",
      "Built and shipped an automated on-call handoff system at a company-wide hackathon — eliminated the manual context-gathering engineers did before every shift; adopted in production by a 12-engineer team.",
      "Shipped a plugin-health dashboard adopted org-wide as the centralized source for plugin status, ownership, and real-time health — recognized by upper management, with a second org-wide award for related cross-team analytics-pipeline work.",
    ],
    tags: ["React", "SSR", "Platform tooling", "Internal tools"],
  },
  {
    company: "Cassidy eCare",
    role: "Frontend Developer Intern",
    dates: "Sep 2021 — Dec 2021",
    context: "Early-stage health-tracking startup",
    logo: {
      src: "/assets/logo-cassidy-ecare.png",
      alt: "Cassidy eCare logo",
      variant: "wordmark",
    },
    bullets: [
      "Reported directly to the founder — translated evolving product requirements into shipped frontend features while the MVP was still taking shape.",
      "Built the React + Redux web frontend: component architecture, Redux store design, and backend API integration, with validation, error, and empty states ready before the backend landed.",
      "Wrote the project's onboarding documentation — current state, architecture, near-term direction — so new contributors could ship in their first week.",
    ],
    tags: ["React", "Redux", "Founder-facing", "0→1 product"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects — proof of current capability. Specifics only.             */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    name: "Setlio",
    role: "Solo Developer",
    dates: "Apr 2026 — Present",
    status: "Pre-release · daily driver since day one",
    summary:
      "Offline-first Flutter fitness tracker with a native Wear OS companion — workout logging, templates, calendar planning, stats, on-device ML label scanning, and local-first sync on encrypted Drift SQLite + Supabase.",
    hook: "Built solo at production rigor: 3,500+ automated tests and 76 scripted gates stand in for the code-review team I don't have.",
    bullets: [
      "Engineered the parts fitness apps usually get wrong: Wear OS phone-free tracking with foreground-service lifecycle that survives battery-optimization kills, a conflict-safe outbound sync queue, mid-workout crash recovery, and timestamp-anchored rest timers.",
      "Shipped GDPR-grade account deletion with a grace period, data-export archive, and scheduled Supabase cleanup — the unglamorous work that makes an app releasable.",
      "Built the engineering team into the repo: formal SPEC / ENGINEERING_STANDARDS / DOMAIN_EXPERTS contracts and a 449-script PowerShell toolkit — 76 automated check gates covering doc drift, architecture health, coverage floors, and Wear sync — run locally and in CI before every merge.",
    ],
    stats: [
      { value: "3,500+", label: "automated tests: unit, widget, golden, integration" },
      { value: "123", label: "golden screenshots guarding the UI" },
      { value: "71", label: "schema migrations without losing a workout" },
      { value: "76", label: "automated check gates before every merge" },
    ],
    links: [
      { label: "Landing page", href: "https://setlio.vercel.app/" },
      { label: "GitHub", href: "https://github.com/voncastro" },
    ],
    tags: ["Flutter", "Dart", "Kotlin", "Drift SQLite", "Supabase", "Wear OS", "Google ML Kit", "Android foreground services"],
    media: [
      {
        src: "/assets/setlio-phone-live-workout.png",
        alt: "Setlio on a physical phone mid-workout: Push A session with set 2 of 15 logged, PR badges, RIR tracking, a live rest countdown, and the connected watch indicator.",
        caption: "Physical phone: live session, rest running, watch connected",
        variant: "phone",
      },
      {
        src: "/assets/setlio-watch-live-set.png",
        alt: "Setlio on a physical Wear OS watch showing LIVE workout state: current exercise, elapsed time, set, weight, and reps, with a one-tap Done and rest button.",
        caption: "Physical watch, LIVE: the whole set without touching the phone",
        variant: "watch",
      },
      {
        src: "/assets/setlio-watch-resting.png",
        alt: "Setlio on a physical Wear OS watch in RESTING state: elapsed rest time, next set target, and a Stop rest button.",
        caption: "Watch owns the rest: elapsed time and next set at a glance",
        variant: "watch",
      },
    ],
  },
  {
    name: "dvup",
    role: "Volunteer Contributor · Nolstar Studio",
    dates: "Mar 2026 — Present",
    status: "Live on the App Store & Google Play",
    summary:
      "Cross-platform Flutter + Supabase expense-splitting app. I contribute feature and correctness work on the launched product — 49 commits and 9+ merged PRs across a codebase with 20+ tables and 40+ RPCs.",
    hook: "Money code where small mistakes become trust problems — shipped end to end, balanced to the cent.",
    bullets: [
      "Shipped the Settle Up CSV import as a full vertical slice: Postgres RPC migration, server-side validation, a multi-step Flutter flow, cross-currency confirmation, timezone-aware settlement dates, and split rounding that balances to the cent.",
      "Diagnosed and fixed correctness bugs in a live multi-currency ledger — split-rounding bias, a currency-derivation mismatch on group creation, and settlement-date timezone drift — the quiet bugs that silently corrupt user balances.",
      "Worked inside the studio's 16-domain AI-agent system: scoped tickets into the smallest mergeable diff, briefed agents against 3,400+ lines of SPEC contracts, and owned every merge after reading every diff.",
    ],
    stats: [
      { value: "9+", label: "PRs accepted into a studio's live money app" },
      { value: "3", label: "ledger-correctness bugs found & fixed" },
      { value: "$0.00", label: "tolerated drift — imports balance to the cent" },
    ],
    links: [{ label: "Live product", href: "https://dvup.ca/" }],
    logo: {
      src: "/assets/logo-dvup-app-icon.svg",
      alt: "dvup logo",
      variant: "icon",
    },
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Multi-currency math", "IANA timezones"],
    media: [
      {
        src: "/assets/dvup-official-itemized-splits.webp",
        alt: "dvup product shot showing itemized receipt splits.",
        caption: "Itemized splits",
      },
      {
        src: "/assets/dvup-official-living-balances.webp",
        alt: "dvup product shot showing living balances and who owes whom.",
        caption: "Living balances",
      },
      {
        src: "/assets/dvup-official-simplified-debts.webp",
        alt: "dvup product shot showing simplified debts after payment reduction.",
        caption: "Simplified debts",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* The differentiator — how the work actually gets shipped.            */
/* ------------------------------------------------------------------ */

export const workflowIntro =
  "I don't treat AI as autocomplete — I treat it as a team I'm responsible for managing. Same four moves on every PR, whether I'm contributing to someone else's codebase or running my own:";

export const workflowMoves: WorkflowMove[] = [
  {
    step: "01",
    name: "Scope",
    body: "Break the ticket into the smallest mergeable slice. Bad scope is the #1 cause of bad agent output.",
  },
  {
    step: "02",
    name: "Brief",
    body: "Hand over file paths, the relevant SPEC contracts, and acceptance criteria up front — never “figure it out.”",
  },
  {
    step: "03",
    name: "Route",
    body: "Dispatch to the domain expert that owns the surface being touched, not a generic agent.",
  },
  {
    step: "04",
    name: "Verify & own",
    body: "Read every diff, run the app, check invariants and gates. Agents draft; I merge.",
  },
];

export const workflowOutro =
  "The receipts: 3,500+ automated tests and 76 check gates on Setlio, and production money code on dvup verified against formal spec contracts before every merge.";

/* ------------------------------------------------------------------ */
/* About — liking + honesty. Short paragraphs, real voice.             */
/* ------------------------------------------------------------------ */

export const about: string[] = [
  "There's a piece of furniture-assembly wisdom every engineer recognizes: the bookshelf is built, it stands, it even looks right — and there are three screws left in the bag. Most software ships exactly like that. The work I love is the opposite: figuring out where those screws were supposed to go before the shelf meets real weight. No leftovers, no wobble, no “it's probably fine.” That's the moment I build for — and what I test for is the day somebody loads the top shelf.",
  "Building is what pulled me back into the industry after a post-graduation leave for personal matters. Correctness fixes on dvup relit the spark; taking Setlio from an empty repo to a full product turned it into momentum. Somewhere in that momentum, I felt ready: to apply what I've learned, to learn from brilliant engineers, and to build products alongside them that impact the many who use them.",
  "During that leave, my health and fitness fell to the lowest point they've ever been. The surprise wasn't the struggle — it was how much I missed training. The time away made it obvious that fitness had become part of who I am, so when things finally stabilized, I didn't mind that moving anything was a battle at first. I was just happy to be back. Rebuilding meant tracking everything, and I'm a data person — most fitness apps collect plenty of data and then do surprisingly little with it: stats screens that don't answer questions, too many taps for the obvious thing. I'd always wanted to build my own app, and now I had the reason — something I'd use almost every day, shaped to my flow, that treats my training data like it has something to say. The excitement got a little out of hand. Setlio was born.",
  "Away from the keyboard: I lift to eat and eat to lift. Yes, that's a circular dependency. No, I'm not fixing it.",
];

/* ------------------------------------------------------------------ */
/* Skills & education                                                   */
/* ------------------------------------------------------------------ */

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    values: ["Dart", "TypeScript", "JavaScript", "SQL", "Kotlin", "Python"],
  },
  {
    label: "Frameworks",
    values: ["Flutter", "React", "Redux", "Riverpod", "Provider"],
  },
  {
    label: "Backend / DB",
    values: ["Supabase", "PostgreSQL", "Edge Functions", "Drift SQLite", "Firebase", "REST APIs"],
  },
  {
    label: "Platforms",
    values: ["Android", "Wear OS", "iOS", "Web"],
  },
  {
    label: "AI tooling",
    values: ["Claude Code", "OpenAI Codex", "SPEC-contract briefing", "Scripted quality gates", "Domain-agent routing"],
  },
  {
    label: "Tools",
    values: ["Git", "GitHub", "Android Studio", "Xcode", "PowerShell", "Gradle", "Sentry"],
  },
];

export const education = {
  school: "MacEwan University",
  credential: "BSc Computer Science · Minor in Business Studies",
  date: "Graduated Nov 2023",
};
