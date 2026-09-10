import { useEffect } from 'react'
import { ContactRound, Code2, FileText, Mail, UserRound, X } from 'lucide-react'
import { portfolio } from '../data/portfolio'

export function CommandMenu({ open, onClose }: { open: boolean, onClose: () => void }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', key); return () => document.removeEventListener('keydown', key)
  }, [onClose])
  if (!open) return null
  const items = [
    ['#about', 'About Rag', UserRound], ['#work', 'View projects', FileText],
    [portfolio.links.github, 'GitHub', Code2], [portfolio.links.linkedin, 'LinkedIn', ContactRound],
    [`mailto:${portfolio.email}`, 'Email', Mail],
  ] as const
  return <div className="command-backdrop" onMouseDown={onClose}><div className="command-panel" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={e => e.stopPropagation()}>
    <div className="command-head"><span>Go somewhere</span><button onClick={onClose}><X size={18}/></button></div>
    {items.map(([href, label, Icon]) => <a key={label} href={href} onClick={onClose}><Icon size={17}/><span>{label}</span><small>↗</small></a>)}
  </div></div>
}
