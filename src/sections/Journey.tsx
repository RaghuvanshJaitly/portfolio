const stops = [
  ['01', 'Dalhousie University', 'Bachelor of Applied Computer Science · Final year · Halifax, Nova Scotia'],
  ['02', '3× Sexton Scholar', 'Recognition for academic performance. It reflects my progress, not a flawless start.'],
  ['03', 'Learning by building', 'Python → data analysis → SQL → statistics → machine learning → APIs + testing + CI'],
  ['04', 'The direction', 'Becoming an engineer who understands both the model and the infrastructure that makes it reliable.'],
]
export function Journey() { return <section id="journey" className="section journey reveal"><div className="section-tag">03 / Journey</div>
  <div className="journey-layout"><div className="sticky-title"><h2>Not a<br/><span>straight line.</span></h2><p>My academic story is really about figuring out how I learn. Once I did, I became much better at it.</p></div>
  <div className="timeline">{stops.map(([n,t,d]) => <article key={t}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div>
  <div className="direction"><span>Deliberately heading toward</span>{['Machine Learning Engineering','MLOps','Cloud Infrastructure','Data Engineering','DevOps / SRE','Applied AI'].map(x => <b key={x}>{x}</b>)}</div>
</section> }
