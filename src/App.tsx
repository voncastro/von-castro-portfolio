import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  UserRound,
} from "lucide-react";
import {
  about,
  education,
  experiences,
  profile,
  proofHighlights,
  projects,
  qualityChecks,
  skillGroups,
  snapshot,
  type LogoAsset,
  type Project,
  type StoryParagraph,
} from "./data/portfolio";

const sectionLinks = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];
const sectionIds = sectionLinks.map((section) => section.id);

function App() {
  const activeSection = useActiveSection(sectionIds);
  useRevealOnScroll();

  return (
    <main>
      <ScrollProgress />
      <SiteHeader activeSection={activeSection} />
      <Hero />
      <ProofStrip />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsEducationSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = Math.min(320, window.innerHeight * 0.36);
      const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6;
      const current = atPageEnd ? sectionIds[sectionIds.length - 1] : sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= marker ? id : active;
      }, "");

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

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
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />;
}

function SiteHeader({ activeSection }: { activeSection: string }) {
  return (
    <header className="site-header">
      <nav className="top-nav" aria-label="Portfolio sections">
        <a className="nav-brand" href="#page-title" aria-label="Back to top">
          <span>{profile.name}</span>
          <small>{profile.title}</small>
        </a>
        <div className="nav-links">
          {sectionLinks.map((section) => (
            <a className={activeSection === section.id ? "active" : undefined} href={`#${section.id}`} key={section.id}>
              {section.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="nav-resume" href={profile.links.resume} target="_blank" rel="noreferrer">
            <FileText aria-hidden="true" size={16} />
            <span>Resume</span>
          </a>
          <a className="nav-contact" href={profile.links.email}>
            <Mail aria-hidden="true" size={16} />
            <span>Email</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const heroMedia = projects.flatMap((project) => {
    const media = project.name === "Setlio" ? project.media[0] : project.media[1] ?? project.media[0];
    return media ? [{ projectName: project.name, media }] : [];
  });

  return (
    <header className="hero" aria-labelledby="page-title">
      <div className="hero-grid">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">{profile.title}</p>
          <h1 id="page-title">{profile.name}</h1>
          <p className="hero-summary">{profile.summary}</p>
          <p className="hero-pitch">{profile.pitch}</p>

          <dl className="hero-snapshot" aria-label="At a glance">
            {snapshot.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-actions" aria-label="Contact links">
            <a className="button primary" href={profile.links.email}>
              <Mail aria-hidden="true" size={18} />
              Email Von
            </a>
            <a className="button secondary" href={profile.links.resume} target="_blank" rel="noreferrer">
              <FileText aria-hidden="true" size={18} />
              Resume
            </a>
            <a className="button secondary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" size={18} />
              LinkedIn
            </a>
            <a className="icon-link" href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github aria-hidden="true" size={21} />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Selected work" data-reveal>
          <div className="hero-product-collage" aria-label="Selected product screenshots">
            {heroMedia.slice(0, 2).map(({ projectName, media }, index) => (
              <figure className={`collage-shot collage-shot--${index + 1}`} key={`${projectName}-${media.src}`}>
                <img src={media.src} alt={media.alt} loading="eager" />
                <figcaption>{projectName}</figcaption>
              </figure>
            ))}
          </div>

          <div className="logo-strip" aria-label="Companies and projects represented">
            {experiences.map((experience) => (
              <LogoMark key={experience.company} logo={experience.logo} label={experience.company} />
            ))}
            {projects.map((project) =>
              project.logo ? <LogoMark key={project.name} logo={project.logo} label={project.name} /> : null,
            )}
          </div>
        </aside>
      </div>
    </header>
  );
}

function ProofStrip() {
  return (
    <section className="proof-strip" aria-label="Selected proof">
      {proofHighlights.map((item) => (
        <div className="proof-item" data-reveal key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </div>
      ))}
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading">
      <SectionHeading
        headingId="experience-heading"
        kicker="Work experience"
        title="Internships with shipped product work"
        icon={<BriefcaseBusiness aria-hidden="true" size={20} />}
      />

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <article className="experience-card" data-reveal key={experience.company}>
            <span className="timeline-marker" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="entry-heading">
              <div className="identity-row">
                <LogoMark logo={experience.logo} label={experience.company} />
                <div>
                  <h3>{experience.role}</h3>
                  <p>
                    <a href={experience.url} target="_blank" rel="noreferrer">
                      {experience.company}
                    </a>
                    <span>{experience.dates}</span>
                  </p>
                </div>
              </div>
              <p className="context">{experience.context}</p>
            </div>
            <NarrativeBlock hook={experience.hook} story={experience.story} evidence={experience.evidence} />
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        headingId="projects-heading"
        kicker="Featured projects"
        title="Projects with product and systems depth"
        icon={<ArrowUpRight aria-hidden="true" size={20} />}
      />

      <div className="project-stack">
        {projects.map((project) => (
          <ProjectArticle key={project.name} project={project} />
        ))}
      </div>

      <div className="quality-panel" data-reveal>
        <div className="quality-heading">
          <span>Quality gates</span>
          <h3>What I check before a change ships</h3>
        </div>
        <div className="quality-table" role="table" aria-label="Quality checks">
          <div className="quality-row quality-row-head" role="row">
            <span role="columnheader">Invariant</span>
            <span role="columnheader">Gate</span>
            <span role="columnheader">Catches</span>
          </div>
          {qualityChecks.map((check) => (
            <div className="quality-row" role="row" key={check.invariant}>
              <strong role="cell" data-label="Invariant">{check.invariant}</strong>
              <span role="cell" data-label="Gate">{check.gate}</span>
              <span role="cell" data-label="Catches">{check.catches}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArticle({ project }: { project: Project }) {
  return (
    <article className="project-article" data-reveal>
      <div className="project-content">
        <div className="project-title-row">
          <div className="identity-row">
            {project.logo ? <LogoMark logo={project.logo} label={project.name} /> : null}
            <div>
              <p className="project-role">{project.role}</p>
              <h3>{project.name}</h3>
              <p className="project-dates">{project.dates}</p>
            </div>
          </div>
        </div>

        <p className="project-summary">{project.summary}</p>

        <div className="project-links" aria-label={`${project.name} public links and availability`}>
          {project.links.map((link) =>
            link.href ? (
              <a className="project-link" href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                {link.label}
                <ExternalLink aria-hidden="true" size={16} />
              </a>
            ) : (
              <span className="project-link project-link--note" key={link.label}>
                {link.label}
              </span>
            ),
          )}
        </div>

        <div className="impact-strip project-scan" aria-label={`${project.name} project scan`}>
          {project.impact.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="narrative-block">
          <p className="story-hook">{project.hook}</p>
          <div className="story-copy">
            {project.story.map((paragraph) => (
              <p key={paragraph.lead}>
                <strong>{paragraph.lead}</strong>
                <span>{paragraph.body}</span>
              </p>
            ))}
          </div>
        </div>

        <aside className="project-note" aria-label={`${project.name} engineering note`}>
          <h4>{project.note.title}</h4>
          {project.note.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </aside>

        <div className="tags" aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div
        className={`project-media-grid${project.media.length > 2 ? " project-media-grid--showcase" : ""}`}
        aria-label={`${project.name} screenshots`}
      >
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
    </article>
  );
}

function AboutSection() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-heading">
      <SectionHeading
        headingId="about-heading"
        kicker="About"
        title="A bit about me"
        icon={<UserRound aria-hidden="true" size={20} />}
      />
      <div className="about-prose" data-reveal>
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function NarrativeBlock({ hook, story, evidence }: { hook: string; story: StoryParagraph[]; evidence: string[] }) {
  return (
    <div className="narrative-block">
      <p className="story-hook">{hook}</p>
      <div className="story-copy">
        {story.map((paragraph) => (
          <p key={paragraph.lead}>
            <strong>{paragraph.lead}</strong>
            <span>{paragraph.body}</span>
          </p>
        ))}
      </div>
      <div className="evidence-rack" aria-label="Evidence">
        {evidence.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function LogoMark({ logo, label }: { logo: LogoAsset; label: string }) {
  return (
    <span className={`logo-mark ${logo.variant ?? "icon"}`} title={label}>
      <img src={logo.src} alt={logo.alt} loading="lazy" />
    </span>
  );
}

function SkillsEducationSection() {
  return (
    <section className="section skills-education" id="skills" aria-labelledby="skills-heading">
      <div>
        <SectionHeading
          headingId="skills-heading"
          kicker="Skills"
          title="Stack and tools"
        />
        <div className="skills-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.label}>
              <h3>{group.label}</h3>
              <div className="tags">
                {group.values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <article className="education-panel" aria-labelledby="education-heading" data-reveal>
        <div className="education-icon">
          <GraduationCap aria-hidden="true" size={24} />
        </div>
        <div>
          <p className="eyebrow">Education</p>
          <h3 id="education-heading">{education.school}</h3>
          <p>{education.credential}</p>
        </div>
        <span>{education.date}</span>
      </article>
    </section>
  );
}

function SectionHeading({
  headingId,
  kicker,
  title,
  intro,
  icon,
}: {
  headingId?: string;
  kicker: string;
  title: string;
  intro?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="heading-kicker">
        {icon}
        <span>{kicker}</span>
      </div>
      <h2 id={headingId ?? `${kicker.toLowerCase().replace(/\s+/g, "-")}-heading`}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        {profile.name} · {profile.title} · {profile.location}
      </p>
      <div>
        <a href={profile.links.resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a href={profile.links.email}>Email</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default App;
