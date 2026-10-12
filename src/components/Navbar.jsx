import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks, site } from '../data/site'
import useActiveSection from '../hooks/useActiveSection'

const ids = navLinks.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(ids)
  const link = (l) => (
    <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} aria-current={active === l.id ? 'true' : undefined}
      className={`relative py-2 text-sm transition-colors ${active === l.id ? 'text-cyan' : 'text-zinc-400 hover:text-white'}`}>
      {l.label}
      {active === l.id && <span className="absolute -bottom-0.5 left-0 h-px w-full bg-cyan" />}
    </a>
  )
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-xl font-bold text-white">VKS<span className="text-cyan">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(link)}
          <a href={site.resume} target="_blank" rel="noreferrer" className="btn btn-ghost !min-h-[38px]"><FileText size={15} /> Resume</a>
        </div>
        <button className="grid h-11 w-11 place-items-center text-white md:hidden" aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div id="mobile-menu" className={`grid overflow-hidden border-line bg-ink/95 transition-all duration-300 md:hidden ${open ? 'grid-rows-[1fr] border-b' : 'grid-rows-[0fr]'}`}>
        <div className={`min-h-0 ${open ? '' : 'invisible'}`}>
          <div className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map(link)}
            <a href={site.resume} target="_blank" rel="noreferrer" className="btn btn-primary mt-2"><FileText size={15} /> Resume</a>
          </div>
        </div>
      </div>
    </header>
  )
}
