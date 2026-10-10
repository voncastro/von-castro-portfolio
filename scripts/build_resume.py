"""Builds public/Von-Castro-Resume.pdf from the same facts as the site copy.

NOTE (Oct 2026): public/Von-Castro-Resume.pdf is currently a manually
maintained resume supplied by Von (richer layout than this script produces).
Do NOT re-run this script unless you intend to overwrite that file.

Re-run after editing:  python scripts/build_resume.py
"""

from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

OUT = Path(__file__).resolve().parent.parent / "public" / "Von-Castro-Resume.pdf"

INK = HexColor("#181a1a")
MUTED = HexColor("#3d423d")
TEAL = HexColor("#045f5b")
RULE = HexColor("#c9c7bd")

name_style = ParagraphStyle(
    "name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=INK
)
contact_style = ParagraphStyle(
    "contact", fontName="Helvetica", fontSize=9.5, leading=13, textColor=MUTED
)
section_style = ParagraphStyle(
    "section",
    fontName="Helvetica-Bold",
    fontSize=11,
    leading=14,
    textColor=TEAL,
    spaceBefore=10,
    spaceAfter=2,
)
role_style = ParagraphStyle(
    "role", fontName="Helvetica-Bold", fontSize=10.5, leading=14, textColor=INK, spaceBefore=5
)
bullet_style = ParagraphStyle(
    "bullet",
    fontName="Helvetica",
    fontSize=9.8,
    leading=13.2,
    textColor=MUTED,
    leftIndent=12,
    bulletIndent=2,
    alignment=TA_LEFT,
)
plain_style = ParagraphStyle(
    "plain", fontName="Helvetica", fontSize=9.8, leading=13.6, textColor=MUTED
)


def rule():
    return HRFlowable(width="100%", thickness=0.7, color=RULE, spaceBefore=2, spaceAfter=4)


def bullets(items):
    return [Paragraph(item, bullet_style, bulletText="•") for item in items]


story = [
    Paragraph("Von Castro", name_style),
    Spacer(1, 2),
    Paragraph(
        "Software Engineer &nbsp;|&nbsp; Edmonton, AB (open to remote/relocation) &nbsp;|&nbsp; "
        "voncastro.dev@gmail.com &nbsp;|&nbsp; "
        "linkedin.com/in/voncastro &nbsp;|&nbsp; github.com/voncastro &nbsp;|&nbsp; voncastro.vercel.app",
        contact_style,
    ),
    Spacer(1, 6),
    Paragraph(
        "Software engineer shipping production Flutter + Supabase product work through AI-agent "
        "workflows — 900+ merged PRs in the last seven months as solo architect of Setlio and "
        "contributor to a launched expense app — with a 12-month Intuit platform internship behind it.",
        plain_style,
    ),
    Paragraph("EDUCATION", section_style),
    rule(),
    Paragraph(
        "MacEwan University — BSc Computer Science, Minor in Business Studies "
        "<font color='#3d423d'>(Edmonton, AB · Graduated Nov 2023)</font>",
        role_style,
    ),
    Paragraph("EXPERIENCE", section_style),
    rule(),
    Paragraph("Software Developer Intern — Intuit <font color='#3d423d'>(Jan 2022 – Dec 2022)</font>", role_style),
    *bullets(
        [
            "Led a server-side rendering performance investigation across a multi-plugin page "
            "architecture — measured up to 50% load-time improvement on targeted plugins and surfaced "
            "the compatibility blockers for general rollout.",
            "Built and shipped an automated on-call handoff system at a company-wide hackathon — "
            "eliminated the manual context-gathering engineers did before every shift; adopted in "
            "production by a 12-engineer team.",
            "Shipped a plugin-health dashboard adopted org-wide as the centralized source for plugin "
            "status, ownership, and health; earned two org-wide recognition awards, including one for "
            "related cross-team analytics-pipeline work.",
        ]
    ),
    Paragraph("Frontend Developer Intern — Cassidy eCare <font color='#3d423d'>(Sep 2021 – Dec 2021)</font>", role_style),
    *bullets(
        [
            "Reported directly to the founder; translated product requirements into shipped frontend "
            "features as the early MVP evolved.",
            "Built the React + Redux web frontend — owned component architecture, Redux store design, "
            "and backend API integration.",
            "Wrote the project's onboarding documentation (current state, architecture, near-term "
            "direction) so new contributors could ship in their first week.",
        ]
    ),
    Paragraph("PROJECTS", section_style),
    rule(),
    Paragraph(
        "Setlio — Solo Developer "
        "<font color='#3d423d'>(Apr 2026 – Present · offline-first Flutter fitness tracker with Wear OS companion)</font>",
        role_style,
    ),
    *bullets(
        [
            "Built and ship Setlio solo — workout logging, reusable templates, calendar planning, "
            "stats, and local-first sync (Drift SQLite + Supabase): 1,209 commits across 907 "
            "self-merged PRs, used daily since April 2026.",
            "Engineered the hard parts at production depth — Wear OS phone-free tracking with "
            "foreground-service lifecycle, a conflict-safe outbound sync queue, mid-workout crash "
            "recovery, and GDPR-compliant account deletion with data-export archive.",
            "Built the engineering team into the repo: formal SPEC / standards / domain-expert "
            "contracts plus a 449-script PowerShell toolkit with 76 automated check gates (doc drift, "
            "architecture health, coverage floors, Wear sync) run locally and in CI before every merge.",
        ]
    ),
    Paragraph(
        "dvup — Volunteer Contributor, Nolstar Studio "
        "<font color='#3d423d'>(Mar 2026 – Present · expense-splitting app, live on the App Store and Google Play)</font>",
        role_style,
    ),
    *bullets(
        [
            "Shipped an end-to-end Settle Up CSV import on the launched app: Postgres RPC migration, "
            "server-side validation, a multi-step Flutter flow, cross-currency confirmation, "
            "timezone-aware settlement dates, and split rounding that balances to the cent.",
            "Diagnosed and fixed multi-currency ledger correctness bugs — split-rounding bias, "
            "currency-derivation mismatch on group creation, and settlement-date timezone drift.",
            "Operated inside a 16-domain AI-agent workflow across 20+ tables and 40+ RPCs — scoped "
            "small diffs, briefed agents against formal SPEC contracts, and owned every merge.",
        ]
    ),
    Paragraph("SKILLS", section_style),
    rule(),
    *[
        Paragraph(line, plain_style)
        for line in [
            "<b>Languages:</b> Dart, TypeScript, JavaScript, SQL, Kotlin, Python",
            "<b>Frameworks:</b> Flutter, React, Redux, Riverpod, Provider",
            "<b>Backend / DB:</b> Supabase, PostgreSQL, Edge Functions, Drift (SQLite), Firebase",
            "<b>Tools:</b> Git, Xcode, Android Studio, PowerShell, Gradle, Sentry",
            "<b>AI tooling:</b> Claude Code, OpenAI Codex, AI-native PR workflow "
            "(formal SPEC contracts, doc-drift gates, autonomous quality passes)",
        ]
    ],
]

doc = SimpleDocTemplate(
    str(OUT),
    pagesize=letter,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    topMargin=0.6 * inch,
    bottomMargin=0.6 * inch,
    title="Von Castro - Software Engineer Resume",
    author="Von Castro",
)
doc.build(story)
print(f"wrote {OUT}")
