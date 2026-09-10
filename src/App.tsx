import { useCallback, useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { CommandMenu } from './components/CommandMenu'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Projects } from './sections/Projects'
import { Journey } from './sections/Journey'
import { Learning } from './sections/Learning'
import { Experience } from './sections/Experience'
import { Beyond } from './sections/Beyond'
import { Contact } from './sections/Contact'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  const [command, setCommand] = useState(false)
  const closeCommand = useCallback(() => setCommand(false), [])
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k' || (e.key === '/' && !['INPUT','TEXTAREA'].includes((e.target as HTMLElement).tagName))) { e.preventDefault(); setCommand(true) } }
    window.addEventListener('keydown', handler); return () => window.removeEventListener('keydown', handler)
  }, [])
  return <><div className="noise"/><Navbar openCommand={() => setCommand(true)}/><main><Hero/><About/><Projects/><Journey/><Learning/><Experience/><Beyond/><Contact/></main><CommandMenu open={command} onClose={closeCommand}/></>
}
