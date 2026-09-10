import { ChefHat, Dumbbell, Guitar } from 'lucide-react'
const items = [
  [Guitar, 'Guitar', 'At first, your hands refuse. Then they understand. Eventually they stop asking permission.', 'Current relationship: occasionally sounds like music.'],
  [Dumbbell, 'Training', 'Show up. Do the work. Recover. Come back a little better. A beautifully uncomplicated feedback loop.', 'No inspirational LinkedIn post required.'],
  [ChefHat, 'Cooking', 'Combine things, adjust as you go, learn from the questionable version, and make the next one better.', 'Current specialty: whatever is in the fridge.'],
] as const
export function Beyond() { return <section id="beyond" className="section beyond reveal"><div className="section-tag">06 / Beyond code</div><h2>When the laptop<br/><span>closes.</span></h2><div className="beyond-grid">{items.map(([Icon,title,copy,note])=><article key={title} className={title==='Guitar'?'tip':''} data-tip={title==='Guitar'?'skill issue, actively resolving':undefined}><div><Icon/><span>0{items.findIndex(x=>x[1]===title)+1}</span></div><h3>{title}</h3><p>{copy}</p><small>{note}</small></article>)}</div></section> }
