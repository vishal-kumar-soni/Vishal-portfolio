import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { navLinks, site } from '../data/site'

export default function Footer() {
  const icons = [['GitHub', site.github, Github], ['LinkedIn', site.linkedin, Linkedin], ['Email', `mailto:${site.email}`, Mail]]
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3 md:items-center">
        <div>
          <p className="text-xl font-bold text-white">VKS<span className="text-cyan">.</span></p>
          <p className="mt-1 text-sm text-zinc-500">Designed and developed by Vishal Kumar Soni.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {navLinks.map((l) => <a key={l.id} href={`#${l.id}`} className="text-zinc-400 hover:text-cyan">{l.label}</a>)}
        </nav>
        <div className="flex items-center gap-2 md:justify-end">
          {icons.map(([l, h, Icon]) => h && (
            <a key={l} href={h} aria-label={l} {...(h.startsWith('http') && { target: '_blank', rel: 'noreferrer' })} className="grid h-11 w-11 place-items-center text-zinc-400 hover:text-cyan"><Icon size={18} /></a>
          ))}
          <a href="#home" aria-label="Back to top" className="grid h-11 w-11 place-items-center border border-line text-zinc-300 hover:border-cyan/60 hover:text-cyan"><ArrowUp size={18} /></a>
        </div>
      </div>
      <p className="border-t border-line py-4 text-center text-xs text-zinc-600">© {new Date().getFullYear()} Vishal Kumar Soni. All rights reserved.</p>
    </footer>
  )
}
