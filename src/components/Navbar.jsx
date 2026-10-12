import { useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = (l) => (
    <a key={l.id} href={`#${l.id}`} data-nav={l.id} data-active="false" onClick={() => setOpen(false)}
      className="group relative py-2 text-sm text-zinc-400 transition-colors hover:text-white data-[active=true]:text-cyan">
      {l.label}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition-transform group-data-[active=true]:scale-x-100" />
    </a>
  )
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="text-xl font-bold text-white">VKS<span className="text-cyan">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(link)}
          <a href={site.resume} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan !min-h-[38px]"><FileText size={15} /> Resume</a>
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
            <a href={site.resume} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-cyan bg-cyan text-ink hover:bg-cyan/85 mt-2"><FileText size={15} /> Resume</a>
          </div>
        </div>
      </div>
    </header>
  )
}
