import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import {
  about,
  education,
  experiences,
  heroStats,
  profile,
  projects,
  skillGroups,
  workflowIntro,
  workflowMoves,
  workflowOutro,
  type Experience,
  type Project,
} from "./data/portfolio";

const sectionLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "workflow", label: "How I ship" },
  { id: "skills", label: "Skills" },
];
const sectionIds = sectionLinks.map((section) => section.id);

function App() {
  const activeSection = useActiveSection(sectionIds);
  useRevealOnScroll();

  return (
    <div className="layout">
      <IdentityRail activeSection={activeSection} />
      <main className="content" id="content">
        <StatStrip />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <WorkflowSection />
        <SkillsSection />
        <ClosingSection />
        <Footer />
      </main>
    </div>
  );
}

/* ----------------------------- hooks ----------------------------- */

function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");

  useEffect(() => {
    const update = () => {
      const marker = Math.min(320, window.innerHeight * 0.4);
      const atEnd =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6;
      const current = atEnd
        ? ids[ids.length - 1]
        : ids.reduce((active, id) => {
            const el = document.getElementById(id);
            return el && el.getBoundingClientRect().top <= marker ? id : active;
          }, ids[0] ?? "");
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return activeSection;
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* -------------------------- identity rail ------------------------ */

function IdentityRail({ activeSection }: { activeSection: string }) {
  return (
    <header className="rail">
      <div className="rail-top">
        <p className="rail-kicker">{profile.title}</p>
        <h1 className="rail-name">
          <a href="#content">{profile.name}</a>
        </h1>
        <p className="rail-tagline">{profile.tagline}</p>

        <nav className="rail-nav" aria-label="Section navigation">
          {sectionLinks.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={activeSection === section.id ? "active" : undefined}
            >
              <span className="nav-line" aria-hidden="true" />
              <span className="nav-label">{section.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="rail-bottom">
        <p className="rail-meta">
          {profile.location} · {profile.availability}
        </p>
        <div className="rail-actions">
          <a className="button primary" href={profile.links.email}>
            <Mail aria-hidden="true" size={16} />
            Email Von
          </a>
          <a
            className="button ghost"
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FileText aria-hidden="true" size={16} />
            Resume
          </a>
        </div>
        <div className="rail-social" aria-label="Profiles">
          <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github aria-hidden="true" size={20} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------------------- sections --------------------------- */

function StatStrip() {
  return (
    <section className="stat-strip" aria-label="Proof at a glance" data-reveal>
      {heroStats.map((stat) => (
        <div className="stat" key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

function SectionHeading({ id, title }: { id: string; title: string }) {
  return (
    <div className="section-heading">
      <h2 id={`${id}-heading`}>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  );
}

function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <SectionHeading id="about" title="About" />
      <div className="about-prose" data-reveal>
        <p className="lede">{profile.summary}</p>
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <SectionHeading id="experience" title="Experience" />
      <div className="entry-list">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.company} experience={experience} />
        ))}
      </div>
      <a className="section-cta" href={profile.links.resume} target="_blank" rel="noreferrer">
        View the full resume
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </section>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <article className="entry" data-reveal>
      <p className="entry-dates">{experience.dates}</p>
      <div className="entry-body">
        <h3>
          <a href={experience.url} target="_blank" rel="noreferrer">
            {experience.role} · {experience.company}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </h3>
        <p className="entry-context">{experience.context}</p>
        <ul className="entry-bullets">
          {experience.bullets.map((bullet) => (
            <li key={bullet.slice(0, 32)}>{bullet}</li>
          ))}
        </ul>
        <div className="tags" aria-label={`${experience.company} focus areas`}>
          {experience.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectsSection() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <SectionHeading id="projects" title="Projects" />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal>
      <header className="project-header">
        <div className="project-title">
          {project.logo ? (
            <span className={`logo-mark ${project.logo.variant ?? "icon"}`}>
              <img src={project.logo.src} alt={project.logo.alt} loading="lazy" />
            </span>
          ) : null}
          <div>
            <h3>{project.name}</h3>
            <p className="project-role">
              {project.role} · {project.dates}
            </p>
          </div>
        </div>
        <p className="project-status">{project.status}</p>
      </header>

      <p className="project-summary">{project.summary}</p>
      <p className="project-hook">{project.hook}</p>

      <ul className="entry-bullets">
        {project.bullets.map((bullet) => (
          <li key={bullet.slice(0, 32)}>{bullet}</li>
        ))}
      </ul>

      <div className="project-stats" aria-label={`${project.name} numbers`}>
        {project.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="project-media" aria-label={`${project.name} screenshots`}>
        {project.media.map((media) => (
          <figure
            key={media.src}
            className={`media-frame${media.variant ? ` media-frame--${media.variant}` : ""}`}
          >
            <img src={media.src} alt={media.alt} loading="lazy" />
            <figcaption>{media.caption}</figcaption>
          </figure>
        ))}
      </div>

      <footer className="project-footer">
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
              <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          ))}
        </div>
        <div className="tags" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

function WorkflowSection() {
  return (
    <section className="section" id="workflow" aria-labelledby="workflow-heading">
      <SectionHeading id="workflow" title="How I ship with AI" />
      <div className="workflow" data-reveal>
        <p className="workflow-intro">{workflowIntro}</p>
        <div className="workflow-grid">
          {workflowMoves.map((move) => (
            <div className="workflow-card" key={move.step}>
              <span className="workflow-step">{move.step}</span>
              <h3>{move.name}</h3>
              <p>{move.body}</p>
            </div>
          ))}
        </div>
        <p className="workflow-outro">{workflowOutro}</p>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-heading">
      <SectionHeading id="skills" title="Skills & education" />
      <div className="skills-grid" data-reveal>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div className="tags">
              {group.values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="education-line" data-reveal>
        <strong>{education.school}</strong> — {education.credential} · {education.date}
      </p>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="closing" aria-label="Contact" data-reveal>
      <h2>Hiring early-career engineers who ship?</h2>
      <p>
        I'm looking for a team where correctness matters and the tooling story is
        still being written. The fastest way to evaluate me is the work above —
        the second fastest is a conversation.
      </p>
      <a className="button primary large" href={profile.links.email}>
        <Mail aria-hidden="true" size={18} />
        Email {profile.name.split(" ")[0]}
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        {profile.name} · {profile.location} · Built with React + Vite. Designed and
        written the way I ship everything else: drafted with AI, verified by hand.
      </p>
    </footer>
  );
}

export default App;
