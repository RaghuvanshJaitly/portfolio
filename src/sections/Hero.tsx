import { ArrowDown, ArrowUpRight, Code2, ContactRound } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function Hero() { return <section className="hero" id="top">
  <div className="hero-kicker"><span className="status-dot"/> Final-year Applied Computer Science · Halifax</div>
  <h1><span>Raghuvansh</span><span>Jaitly.</span></h1>
  <div className="hero-grid">
    <div className="hero-copy">
      <h2>I like understanding how things work.<br/><em>Then I build with what I learned.</em></h2>
      <p>I’m Rag, a final-year student at Dalhousie who tends to keep pulling at a question until the machinery underneath makes sense. Right now, that means Python, SQL, text classification, and connecting data pipelines to APIs and automated tests.</p>
      <div className="hero-actions"><a className="primary-button" href="#work">Explore what I’m building <ArrowDown size={16}/></a><a aria-label="GitHub" href={portfolio.links.github}><Code2/></a><a aria-label="LinkedIn" href={portfolio.links.linkedin}><ContactRound/></a><a className="text-link" href={portfolio.links.resume}>Resume <ArrowUpRight size={15}/></a></div>
    </div>
    <div className="system-map" aria-label="Map of Rag's current interests">
      <div className="map-head"><span>direction.map</span><span className="live">LIVE</span></div>
      <svg viewBox="0 0 500 330" role="img"><path d="M70 100 C140 100 140 165 210 165 S300 105 365 105 M210 165 C280 165 290 235 370 235 M210 165 L210 275"/><circle cx="70" cy="100" r="5"/><circle cx="210" cy="165" r="6"/><circle cx="365" cy="105" r="5"/><circle cx="370" cy="235" r="5"/><circle cx="210" cy="275" r="4"/></svg>
      <span className="node n1">PYTHON</span><span className="node n2">DATA</span><span className="node n3 tip" data-tip="currently asking too many questions about why the model did that">MACHINE LEARNING</span><span className="node n4">MLOPS → CLOUD</span><span className="node n5">SOFTWARE</span>
      <span className="orbit o1">GUITAR</span><span className="orbit o2">GYM</span><span className="orbit o3">COOKING</span>
    </div>
  </div>
  <div className="hero-foot"><span>3× Sexton Scholar</span><span>Building toward ML engineering</span><span>Based in Halifax</span></div>
</section> }
