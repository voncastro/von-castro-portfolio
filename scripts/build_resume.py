"""Builds public/Von-Castro-Resume.pdf from the same facts as the site copy.

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
        "Early-career software engineer with a 12-month Intuit internship and shipped product work "
        "across Flutter, React, Supabase, and offline-first mobile systems.",
        plain_style,
    ),
    Paragraph("EXPERIENCE", section_style),
    rule(),
    Paragraph("Software Developer Intern — Intuit <font color='#3d423d'>(Jan 2022 – Dec 2022)</font>", role_style),
    *bullets(
        [
            "Investigated server-side rendering for a multi-plugin page platform; measured load-time "
            "improvements of roughly 50% on tested plugins and documented the compatibility blockers a "
            "wider rollout would need to clear.",
            "Built a plugin-health dashboard adopted across the org as the shared view of plugin status, "
            "ownership, and real-time health; recognized twice by org leadership.",
            "Built an automated on-call handoff tool during a company-wide hackathon, replacing the manual "
            "context gathering engineers did before each shift.",
        ]
    ),
    Paragraph("Frontend Developer Intern — Cassidy eCare <font color='#3d423d'>(Sep 2021 – Dec 2021)</font>", role_style),
    *bullets(
        [
            "Owned the React/Redux web frontend of an early-stage health-tracking MVP, from component "
            "structure through API integration, reporting directly to the founder.",
            "Wrote architecture and onboarding documentation so new contributors could understand the "
            "system quickly enough to ship.",
        ]
    ),
    Paragraph("PROJECTS", section_style),
    rule(),
    Paragraph(
        "dvup — Volunteer Contributor, Nolstar Studio "
        "<font color='#3d423d'>(Mar 2026 – Present · expense-splitting app, live on the App Store and Google Play)</font>",
        role_style,
    ),
    *bullets(
        [
            "Shipped a Settle Up CSV import end to end: Postgres migration, server-side validation, a "
            "multi-step Flutter flow, cross-currency confirmation, timezone-aware settlement dates, and "
            "split rounding that balances to the cent.",
            "Fixed multi-currency ledger correctness issues on the launched product.",
        ]
    ),
    Paragraph(
        "Setlio — Solo Developer "
        "<font color='#3d423d'>(Apr 2026 – Present · offline-first Flutter fitness tracker with a Wear OS companion)</font>",
        role_style,
    ),
    *bullets(
        [
            "Built workout tracking and analytics on Drift SQLite with Supabase sync: an outbound sync "
            "queue, crash recovery, and Android foreground-service lifecycle handling, plus a Wear OS "
            "companion for phone-free logging.",
            "Maintains 60+ scripted PowerShell quality gates that run before every merge.",
        ]
    ),
    Paragraph("SKILLS", section_style),
    rule(),
    *[
        Paragraph(line, plain_style)
        for line in [
            "<b>Languages:</b> Dart, JavaScript, TypeScript, SQL",
            "<b>Frameworks:</b> Flutter, React, Redux, Wear OS, Provider",
            "<b>Backend / DB:</b> Supabase, PostgreSQL, Edge Functions, Drift SQLite, Firebase",
            "<b>Tools:</b> Git, Xcode, Android Studio, PowerShell, Gradle, Claude Code, OpenAI Codex",
        ]
    ],
    Paragraph("EDUCATION", section_style),
    rule(),
    Paragraph(
        "MacEwan University — BSc Computer Science, Minor in Business Studies "
        "<font color='#3d423d'>(2023)</font>",
        role_style,
    ),
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
