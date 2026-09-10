import { ArrowDownRight } from 'lucide-react'

const values = [
  ['01', 'Curiosity', "I don't want to memorize that it works. I want to know why."],
  ['02', 'Consistency', 'Small improvements compound. Most good things are built on unremarkable Tuesdays.'],
  ['03', 'Depth', "I'd rather understand the fundamentals than speedrun another framework."],
  ['04', 'Building', 'Knowledge gets more interesting the moment you try to turn it into something.'],
  ['05', 'Resilience', "Progress isn't linear. Showing up anyway still counts."],
  ['06', 'Humility', 'Getting better mostly reveals how much more there is to learn. Good.'],
]

export function About() { return <section id="about" className="section about reveal">
  <div className="section-tag">01 / About</div>
  <div className="about-intro"><h2>I became addicted<br/>to <span>getting better.</span></h2><div><p>Not in a five-a.m.-routine kind of way. I genuinely enjoy being bad at something, finding the pieces, practicing them, and reaching the moment when the impossible starts feeling intuitive.</p><p>Programming. Mathematics. Guitar. Lifting. Cooking. Different feedback loops; same curiosity.</p><div className="academic-badge"><strong>3×</strong><span>Sexton Scholar<br/><small>Dalhousie University</small></span></div></div></div>
  <div className="values">{values.map(([n, title, copy]) => <article key={title}><span>{n}</span><ArrowDownRight/><h3>{title}</h3><p>{copy}</p></article>)}</div>
</section> }
