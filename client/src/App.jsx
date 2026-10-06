import Corners from './components/Corners.jsx';
import Headshot from './components/Headshot.jsx';
import Projects from './components/Projects.jsx';
import { PROFILE, STATS, EXPERIENCE, SKILLS, CERTS } from './profile.js';

export default function App() {
  return (
    <div className="page">
      <nav className="site-nav">
        <a href="#top" className="nav-name">{PROFILE.name}</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-primary blueprint nav-cv" href={PROFILE.cv} download="Mariam_Lawal_CV.pdf">
          <Corners />Download CV
        </a>
      </nav>

      <header id="top" className="hero">
        <div className="hero-text">
          <div className="eyebrow">BSc Computer Science · University of Surrey · 2027</div>
          <h1 className="hero-name">Mariam<br />Lawal</h1>
          <p className="hero-lede">
            Third-year Computer Science student passionate about technology, people, and solving problems.
            I enjoy understanding challenges and exploring how technology can offer practical solutions.
            My interests span consulting, software solutions engineering, cloud computing, AI, and networking,
            and I’m keen to keep learning, collaborate with others, and build solutions that make a meaningful difference.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary blueprint btn-lg" href="#projects"><Corners />View projects</a>
            <a className="btn btn-secondary btn-lg" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </div>
        </div>
        <div className="hero-photo">
          <div className="blueprint headshot-frame">
            <Corners />
            <Headshot src={PROFILE.headshot} alt={`Portrait of ${PROFILE.name}`} />
          </div>
        </div>
      </header>

      <section className="blueprint stats" aria-label="At a glance">
        <Corners />
        {STATS.map(([label, value]) => (
          <div key={label} className="stat">
            <span className="stat-label">{label}</span>
            <span className="stat-value">{value}</span>
          </div>
        ))}
      </section>

      <section id="education" className="section">
        <h2 className="section-title">Education</h2>
        <div className="blueprint info-box">
          <Corners />
          <div className="edu-head">
            <span className="edu-degree">BSc Computer Science</span>
            <span>University of Surrey · Predicted 2:1 · Expected June 2027</span>
          </div>
          <div className="edu-modules">
            Computer Networks, Operating Systems, Databases, Software Engineering, Cloud Computing,
            Programming, Data &amp; System
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 className="section-title">Skills</h2>
        <div className="blueprint info-box">
          <Corners />
          <div className="skills-list">
            {SKILLS.map(([k, v]) => <div key={k}><b>{k}</b> — {v}</div>)}
          </div>
        </div>
      </section>

      <section id="experience" className="section experience">
        <h2 className="section-title">Experience</h2>
        <div>
          {EXPERIENCE.map((job) => (
            <div key={job.role} className="job">
              <div className="job-meta">
                <span className="job-role">{job.role}</span>
                <span className="job-org">{job.org}</span>
                <span className="job-dates">{job.dates}</span>
              </div>
              <ul className="job-points">{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <Projects />

      <section id="certifications" className="section">
        <h2 className="section-title">Certifications</h2>
        <div className="blueprint info-box">
          <Corners />
          <div className="cert-list">
            {CERTS.map(([name, code]) => (
              <div key={name} className="cert">
                {name}{code && <span className="tag tag-outline cert-code">{code}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="footer-contact">
          <span className="footer-eyebrow">Contact</span>
          <a className="footer-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
        </div>
        <div className="footer-links">
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PROFILE.cv} download="Mariam_Lawal_CV.pdf">CV (PDF)</a>
        </div>
      </footer>
    </div>
  );
}
