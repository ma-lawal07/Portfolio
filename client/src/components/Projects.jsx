import { useEffect, useMemo, useState } from 'react';
import Corners from './Corners.jsx';

function FeaturedCard({ p }) {
  return (
    <article className="card blueprint project-featured">
      <Corners />
      <div className="project-shot">
        {p.image ? <img src={p.image} alt={`${p.name} screenshot`} /> : p.shot}
        {p.award && <span className="project-award">{p.award}</span>}
      </div>
      <div className="card-kicker project-kicker">{p.cats.join(' · ')}</div>
      <h3 className="card-title project-title-lg">{p.name}</h3>
      <p className="project-desc-lg">{p.desc}</p>
      {p.bullets.length > 0 && (
        <ul className="project-bullets">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
      )}
      <div className="tag-row" style={{ marginTop: 4 }}>
        {p.tech.map((t) => <span key={t} className="tag tag-accent">{t}</span>)}
      </div>
    </article>
  );
}

function CompactCard({ p }) {
  return (
    <article className="card blueprint project-compact">
      <Corners />
      <div className="card-kicker project-kicker">{p.cats.join(' · ')}</div>
      <h3 className="card-title project-title-sm">{p.name}</h3>
      <p className="project-desc-sm">{p.desc}</p>
      <div className="tag-row" style={{ marginTop: 'auto' }}>
        {p.tech.map((t) => <span key={t} className="tag tag-neutral">{t}</span>)}
      </div>
    </article>
  );
}

export default function Projects() {
  const [data, setData] = useState({ categories: [], projects: [] });
  const [status, setStatus] = useState('loading');
  const [active, setActive] = useState('All');

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then((d) => { setData(d); setStatus('ready'); })
      .catch(() => setStatus('error'));
  }, []);

  const { categories, projects } = data;
  const chips = useMemo(() => {
    const used = categories.filter((c) => projects.some((p) => p.cats.includes(c)));
    return ['All', ...used].map((label) => ({
      label,
      count: label === 'All' ? projects.length : projects.filter((p) => p.cats.includes(label)).length,
    }));
  }, [categories, projects]);
  const visible = active === 'All' ? projects : projects.filter((p) => p.cats.includes(active));

  return (
    <section id="projects" className="projects">
      <div className="projects-head">
        <h2 className="section-title">Projects</h2>
        <div className="chips" role="group" aria-label="Filter projects by category">
          {chips.map((c) => (
            <button key={c.label} type="button"
              className={`chip${c.label === active ? ' is-active' : ''}`}
              aria-pressed={c.label === active}
              onClick={() => setActive(c.label)}>
              {c.label}<span className="chip-count">{c.count}</span>
            </button>
          ))}
        </div>
      </div>
      {status === 'loading' && <p className="text-muted">Loading projects…</p>}
      {status === 'error' && <p className="text-muted">Projects couldn’t be loaded. Is the API running?</p>}
      <div className="project-grid">
        {visible.map((p) => p.featured
          ? <FeaturedCard key={p._id || p.name} p={p} />
          : <CompactCard key={p._id || p.name} p={p} />)}
      </div>
    </section>
  );
}
