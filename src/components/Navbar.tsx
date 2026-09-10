import { useEffect, useState } from 'react'
import { Command, Menu, X } from 'lucide-react'

const links = [['about', 'About'], ['work', 'Work'], ['journey', 'Journey'], ['beyond', 'Beyond code'], ['contact', 'Contact']]

export function Navbar({ openCommand }: { openCommand: () => void }) {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-40% 0px -50%' })
    links.forEach(([id]) => { const node = document.getElementById(id); if (node) observer.observe(node) })
    return () => observer.disconnect()
  }, [])
  return <header className="nav-wrap"><nav className="nav" aria-label="Main navigation">
    <a className="logo" href="#top" aria-label="Back to top">RAG<span>.</span></a>
    <div className={`nav-links ${open ? 'open' : ''}`}>
      {links.map(([id, label]) => <a key={id} className={active === id ? 'active' : ''} onClick={() => setOpen(false)} href={`#${id}`}>{label}</a>)}
    </div>
    <button className="command-button" onClick={openCommand} aria-label="Open command menu"><Command size={15}/><span>⌘ K</span></button>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
  </nav></header>
}
