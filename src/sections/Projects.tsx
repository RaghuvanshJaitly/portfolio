import { ArrowUpRight, FlaskConical } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Projects() { return <section id="work" className="section projects reveal">
  <div className="section-tag">02 / Selected work</div>
  <div className="section-heading"><h2>Things I built to<br/><span>understand the thing.</span></h2><p>I build projects to learn, not to manufacture résumé bullet points. They start small, then grow as I learn enough to ask better questions.</p></div>
  <div className="project-list">{portfolio.projects.map((project, i) => <article className={`project project-${i + 1}`} key={project.title}>
    <div className="project-top"><span>PROJECT / {project.number}</span><span className="project-status"><i/>{project.status}</span></div>
    <div className="project-content"><div><p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p className="summary">{project.summary}</p><a href={project.url}>View GitHub <ArrowUpRight size={17}/></a></div>
      <div className="project-visual" aria-hidden="true">{i === 0 ? <><div className="chart"><i/><i/><i/><i/><i/><i/><i/></div><div className="compare"><span>regression</span><b>vs.</b><span>naive baseline</span></div></> : <><FlaskConical/><div className="meter"><span>design illustration</span><i><b/></i><small>legitimate? ← exploring → fraudulent?</small></div></>}</div></div>
    <blockquote>“{project.lesson}”</blockquote>
    <div className="project-bottom"><ul>{project.details.map(d => <li key={d}>{d}</li>)}</ul><div>{project.tech.map(t => <span key={t}>{t}</span>)}</div></div>
  </article>)}</div>
</section> }
