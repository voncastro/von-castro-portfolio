export type LogoAsset = {
  src: string;
  alt: string;
  variant?: "icon" | "wordmark" | "wide";
};

export type StoryParagraph = {
  lead: string;
  body: string;
};

export type ProjectImpact = {
  label: string;
  value: string;
};

export type ProofHighlight = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href?: string;
};

export type ProjectNote = {
  title: string;
  body: string[];
};

export type QualityCheck = {
  invariant: string;
  gate: string;
  catches: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  context: string;
  url: string;
  logo: LogoAsset;
  hook: string;
  story: StoryParagraph[];
  evidence: string[];
};

export type MediaAsset = {
  src: string;
  alt: string;
  caption: string;
  variant?: "phone" | "watch";
};

export type Project = {
  name: string;
  role: string;
  dates: string;
  summary: string;
  logo?: LogoAsset;
  impact: ProjectImpact[];
  links: ProjectLink[];
  tags: string[];
  hook: string;
  story: StoryParagraph[];
  note: ProjectNote;
  media: MediaAsset[];
};

export type SkillGroup = {
  label: string;
  values: string[];
};

export type SnapshotFact = {
  label: string;
  value: string;
};

export const profile = {
  name: "Von Castro",
  title: "Software Engineer",
  email: "voncastro.dev@gmail.com",
  location: "Edmonton, AB",
  summary:
    "Software engineer with internship experience at Intuit and startup product work across Flutter, React, Supabase, and offline-first mobile systems.",
  pitch:
    "I like product problems where scattered details have to come together and just work, from balanced ledgers to offline sync.",
  links: {
    email: "mailto:voncastro.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/voncastro/",
    github: "https://github.com/voncastro",
    resume: "/Von-Castro-Resume.pdf",
  },
};

export const snapshot: SnapshotFact[] = [
  {
    label: "Experience",
    value: "Intuit · Cassidy eCare",
  },
  {
    label: "Projects",
    value: "dvup · Setlio",
  },
  {
    label: "Core stack",
    value: "Flutter · React · Supabase",
  },
  {
    label: "Location",
    value: "Edmonton, AB · open to remote/relocation",
  },
  {
    label: "Seeking",
    value: "Early-career software engineer roles",
  },
];

export const proofHighlights: ProofHighlight[] = [
  {
    label: "Platform work",
    value: "Intuit SSR evaluation, on-call automation, and plugin-health tooling",
  },
  {
    label: "Shipped product",
    value: "dvup Settle Up CSV import review, validation, and launch-stage fixes",
  },
  {
    label: "Systems depth",
    value: "Setlio offline-first workout logging with phone and Wear OS state",
  },
  {
    label: "Quality bar",
    value: "60+ scripted checks plus manual review before product changes ship",
  },
];

export const experiences: Experience[] = [
  {
    company: "Intuit",
    role: "Software Developer Intern",
    dates: "Jan 2022 - Dec 2022",
    context: "Financial software platform serving 100M+ customers worldwide.",
    url: "https://www.intuit.com",
    logo: {
      src: "/assets/logo-intuit.svg",
      alt: "Intuit ecosystem logo",
      variant: "wide",
    },
    hook: "I learned how to turn ambiguous platform work into useful internal tools and clearer ownership.",
    story: [
      {
        lead: "Platform performance",
        body: "I worked on a multi-plugin page platform where performance, compatibility, and ownership handoffs all collided. I contributed to the team's server-side rendering evaluation by converting core plugins to be SSR-compliant, replacing or safely deferring incompatible libraries, manually verifying data integrity in browser dev tools, and documenting the compatibility blockers a wider rollout would have to clear.",
      },
      {
        lead: "Operational tooling",
        body: "During a company-wide hackathon, I built an automated on-call handoff tool with guidance from my mentors. It had been a team pain point for a while, shipped to production for our 12-engineer team, cut the manual context-gathering before each shift, and earned internal Spotlight recognition after production adoption.",
      },
      {
        lead: "Org-wide visibility",
        body: "I also contributed to a plugin-health dashboard that became the shared place to see plugin status, ownership, and health across QuickBooks Online, cleansing and deduplicating the metadata that fed it. That work was part of contributions that earned multiple organization-wide recognition awards.",
      },
    ],
    evidence: [
      "SSR compliance for core dashboard plugins",
      "Hackathon-built on-call automation, shipped to production",
      "Org-wide plugin-health dashboard contribution",
      "Multiple org-wide recognition awards",
    ],
  },
  {
    company: "Cassidy eCare",
    role: "Frontend Developer Intern",
    dates: "Sep 2021 - Dec 2021",
    context: "Early-stage health-tracking startup.",
    url: "https://www.cassidye-care.com",
    logo: {
      src: "/assets/logo-cassidy-ecare.png",
      alt: "Cassidy eCare logo",
      variant: "wordmark",
    },
    hook: "I got a founder-level view of how product ambiguity becomes shipped frontend.",
    story: [
      {
        lead: "Founder-facing product work",
        body: "I reported directly to the founder and translated evolving requirements into React features while the MVP was still taking shape.",
      },
      {
        lead: "React ownership",
        body: "I worked across the React and Redux web frontend, including component structure, state shape, and data flow, building screens against mock data with validation, error, and empty states ready for a backend that was still taking shape.",
      },
      {
        lead: "Onboarding clarity",
        body: "I wrote documentation for the project architecture, its current state, and near-term direction so new contributors could understand the system quickly enough to ship.",
      },
    ],
    evidence: [
      "Founder-facing product work",
      "React + Redux frontend",
      "Validation, error, and empty states",
      "Contributor onboarding docs",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "dvup",
    role: "Volunteer Contributor at Nolstar Studio",
    dates: "Mar 2026 - Present",
    summary:
      "Flutter and Supabase expense-splitting app from Nolstar Studio, live on the App Store and Google Play. I contribute feature and correctness work on the launched product.",
    logo: {
      src: "/assets/logo-dvup-app-icon.svg",
      alt: "dvup logo",
      variant: "icon",
    },
    impact: [
      { label: "Problem", value: "People needed a safe way to bring existing Settle Up history into a live money app." },
      { label: "What I shipped", value: "Scoped, reviewed, and validated the CSV import plus launch-stage correctness fixes." },
      { label: "Technical depth", value: "Flutter UI, Supabase/Postgres migrations, server-side validation, currency and timezone edges." },
      { label: "Proof", value: "Merged product work on a launched app: CSV import review, validation, and launch-stage correctness fixes." },
    ],
    links: [
      { label: "Live product", href: "https://dvup.ca/" },
    ],
    tags: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Provider", "Multi-currency math", "IANA timezones"],
    hook: "I stepped into a newly launched startup product and shipped work where correctness mattered down to the cent.",
    story: [
      {
        lead: "Launched product surface",
        body: "dvup brings together a cross-platform Flutter app, a Supabase backend, and money movement where small mistakes become trust problems. My main feature work centered on importing Settle Up CSV history so people would not have to re-enter months of expenses.",
      },
      {
        lead: "End-to-end import",
        body: "The import path touched a Postgres migration, server-side validation, a multi-step Flutter flow, cross-currency confirmation, timezone-aware settlement dates, and split rounding so totals balanced to the cent.",
      },
    ],
    note: {
      title: "Engineering note: importing money history safely",
      body: [
        "Historical expense files vary by currency, participant mapping, date format, and rounding behavior, so the import runs as a staged flow: parse and preview first, validate against the ledger, and ask for explicit confirmation whenever an assumption matters.",
        "Verification focused on totals that balance to the cent after rounding, settlement dates that survive timezone conversion, and ambiguous rows being rejected before they can touch anyone's balance.",
      ],
    },
    media: [
      {
        src: "/assets/dvup-official-itemized-splits.webp",
        alt: "Official dvup product shot showing itemized receipt splits.",
        caption: "Launched app context: itemized splits",
      },
      {
        src: "/assets/dvup-official-living-balances.webp",
        alt: "Official dvup product shot showing living balances and who owes whom.",
        caption: "Launched app context: living balances",
      },
      {
        src: "/assets/dvup-official-simplified-debts.webp",
        alt: "Official dvup product shot showing simplified debts after payment reduction.",
        caption: "Launched app context: simplified debts",
      },
    ],
  },
  {
    name: "Setlio",
    role: "Solo Developer",
    dates: "Apr 2026 - Present",
    summary:
      "Offline-first Flutter fitness tracker with a Wear OS companion, local-first sync, and scripted quality gates for reliable workout logging.",
    impact: [
      { label: "Problem", value: "Workout logging breaks down when phone taps, offline sessions, and cross-device state get in the way." },
      { label: "What I shipped", value: "Workout tracker, analytics surfaces, rest timers, and a Wear OS companion." },
      { label: "Technical depth", value: "Drift SQLite local writes, Supabase sync queue, Android services, crash recovery." },
      { label: "Proof", value: "Current emulator screenshots plus 60+ local and CI quality-gate scripts." },
    ],
    links: [
      { label: "Landing page", href: "https://setlio.vercel.app/" },
      { label: "Private walkthrough available" },
      { label: "GitHub profile", href: "https://github.com/voncastro" },
    ],
    tags: ["Flutter", "Dart", "Drift SQLite", "Supabase", "Wear OS", "Android services", "PowerShell tooling"],
    hook: "Setlio is where I own a whole product loop, from training friction through sync correctness.",
    story: [
      {
        lead: "Solo product ownership",
        body: "Setlio started as the fitness tracker I wanted to use every day: offline-first, fast during a workout, and serious about cross-device state. Building it as a solo, AI-assisted project means I own product direction, architecture decisions, review, validation, and the mid-workout edge cases that only show up when I use it at the gym.",
      },
      {
        lead: "What makes it dependable",
        body: "An outbound sync queue, crash recovery, rest notifications, foreground-service lifecycle handling on Android, and a Wear OS companion for phone-free workout tracking. 60+ scripted PowerShell checks gate changes locally and in CI.",
      },
    ],
    note: {
      title: "Engineering note: logging that survives interruptions",
      body: [
        "The Wear OS companion came from a real annoyance: my phone is usually on the gym floor near the rack, so every mid-set tap adds friction. The watch flow had to be glanceable and trustworthy, not just a smaller phone screen.",
        "Everything writes locally first. Sync goes through an outbound queue that tolerates reconnects, retries, and app restarts without duplicating sets; timer state is anchored to timestamps so a delayed watch update does not make the running timer wrong.",
      ],
    },
    media: [
      {
        src: "/assets/setlio-emulator-workout-session.png",
        alt: "Setlio phone emulator screen showing an active workout session with Wear OS connection, warm-up guidance, planned sets, and rest timing.",
        caption: "Phone emulator: live workout session",
        variant: "phone",
      },
      {
        src: "/assets/setlio-current-dashboard.png",
        alt: "Current Setlio dashboard screen showing weekly training readiness, calendar activity, and consistency.",
        caption: "Current app screenshot: training dashboard",
        variant: "phone",
      },
      {
        src: "/assets/setlio-emulator-wear-live-workout.png",
        alt: "Setlio Wear OS emulator screen showing synced phone state, active workout time, current set, weight, reps, and rest status.",
        caption: "Wear OS emulator: synced workout state",
        variant: "watch",
      },
    ],
  },
];

export const qualityChecks: QualityCheck[] = [
  {
    invariant: "Money totals stay balanced",
    gate: "Compare source totals, calculated splits, and preview totals before commit.",
    catches: "Rounding drift, missing participants, ambiguous currency assumptions.",
  },
  {
    invariant: "Offline work stays recoverable",
    gate: "Exercise local write, queued sync, reconnect, and session restore paths.",
    catches: "Duplicate operations, stuck queue states, lost in-progress sessions.",
  },
  {
    invariant: "AI-assisted changes stay reviewable",
    gate: "Small scopes, written acceptance criteria, and scripted checks before merge.",
    catches: "Oversized diffs, unchecked assumptions, docs drifting from behavior.",
  },
];

export const about: string[] = [
  "I'm a software engineer in Edmonton. Most days that means sitting in front of a computer building things with code, then finding some small product friction in real life and bringing it back to the keyboard.",
  "The part that delights me is when scattered tasks from different places finally come together and just work. My first instinct is usually too many ideas, so I try to trim problems down until the core behavior is obvious enough to test.",
  "Setlio came from my own training: almost three years in, five days a week, and just enough friction in existing fitness loggers that I wanted something shaped around my sessions. It is also my sandbox for offline sync, Wear OS, mutation testing, and AI-assisted engineering workflows.",
  "I use Codex and Claude every day, but generated code is not a free pass. I scope the work, read the diffs, run the checks, and only keep changes I can explain.",
  "Outside code, I lift to eat and eat to lift; most weeks include a new recipe I found online and a healthier version I did not expect to like as much as I did.",
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    values: ["Dart", "JavaScript", "TypeScript", "SQL", "Kotlin", "Python"],
  },
  {
    label: "Frameworks",
    values: ["Flutter", "React", "Redux", "Riverpod", "GoRouter"],
  },
  {
    label: "Backend / DB",
    values: ["Supabase", "PostgreSQL", "REST APIs", "Edge Functions", "Drift SQLite", "Firebase"],
  },
  {
    label: "Tools",
    values: ["Git", "GitHub", "Android Studio", "PowerShell", "Gradle", "Sentry"],
  },
  {
    label: "AI-assisted workflow",
    values: ["Claude Code", "OpenAI Codex", "Written specs", "Scripted pre-merge checks"],
  },
];

export const education = {
  school: "MacEwan University",
  credential: "BSc Computer Science, Minor in Business Studies",
  date: "2023",
};
