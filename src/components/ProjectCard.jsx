import { Github, ExternalLink } from 'lucide-react'

const bar = 'bg-zinc-800'
function Mockup({ id }) {
  if (id === 'vashtra') return (
    <div className="grid h-full grid-cols-4 content-start gap-2 bg-[#0c0c0e] p-4">
      <div className="col-span-4 flex items-center justify-between border-b border-zinc-800 pb-2"><span className="font-semibold tracking-[0.3em] text-white">VASHTRA</span><span className="h-2 w-16 bg-cyan/60" /></div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col gap-1.5"><div className="aspect-[3/4] bg-gradient-to-b from-zinc-800 to-zinc-900" /><div className={`h-1.5 w-3/4 ${bar}`} /><div className="h-1.5 w-1/3 bg-cyan/60" /></div>
      ))}
    </div>
  )
  if (id === 'medilocker') return (
    <div className="grid h-full grid-cols-[56px_1fr] bg-[#0b1626]">
      <div className="space-y-3 border-r border-cyan/10 p-3">{[0, 1, 2, 3].map((i) => <div key={i} className={`h-6 w-full ${i === 0 ? 'bg-cyan/50' : 'bg-slate-700/60'}`} />)}</div>
      <div className="space-y-3 p-4">
        <div className="grid grid-cols-3 gap-2">{['Reports', 'Meds', 'Visits'].map((t) => <div key={t} className="border border-cyan/20 p-2 text-[10px] text-cyan/80">{t}<div className="mt-2 h-2 w-8 bg-slate-600" /></div>)}</div>
        <div className="flex h-16 items-end gap-1.5">{[40, 65, 50, 80, 55, 70, 45].map((h, i) => <div key={i} className="flex-1 bg-cyan/40" style={{ height: `${h}%` }} />)}</div>
        <div className="h-2 w-2/3 bg-slate-700/70" />
      </div>
    </div>
  )
  return (
    <div className="grid h-full grid-cols-[90px_1fr] bg-[#0d0d14]">
      <div className="space-y-2 border-r border-violet/20 p-3"><div className="h-5 bg-violet/40" />{[0, 1, 2].map((i) => <div key={i} className="h-3 bg-zinc-800" />)}</div>
      <div className="flex flex-col justify-end gap-2 p-4 text-[10px]">
        <div className="ml-auto max-w-[70%] bg-violet/30 p-2 text-zinc-200">How do I structure a REST API?</div>
        <div className="max-w-[80%] border border-line bg-panel p-2 text-zinc-400">Start with resources and routes...<span className="ml-1 inline-block h-2.5 w-1 animate-pulse motion-reduce:animate-none bg-cyan" /></div>
        <div className="mt-1 h-7 border border-line" />
      </div>
    </div>
  )
}

const Action = ({ href, icon: Icon, label, primary }) => href
  ? <a href={href} target="_blank" rel="noreferrer" className={`inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 ${primary ? 'border-cyan bg-cyan text-ink hover:bg-cyan/85' : 'border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan'}`}><Icon size={16} />{label}</a>
  : <span role="link" aria-disabled="true" title="Link coming soon" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan"><Icon size={16} />{label}</span>

export default function ProjectCard({ p, flip }) {
  return (
    <article data-reveal className="group grid border border-line bg-panel transition-colors hover:border-cyan/40 lg:grid-cols-2">
      <div className={`relative min-h-[260px] overflow-hidden border-b border-line lg:border-b-0 ${flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`}>
        <div className="h-full min-h-[260px] transition-transform duration-500 group-hover:scale-[1.03]">
          {p.image ? <img src={p.image} alt={`${p.name} screenshot`} className="h-full w-full object-cover" loading="lazy" /> : <Mockup id={p.id} />}
        </div>
        {!p.image && <span className="absolute bottom-2 right-2 bg-ink/80 px-2 py-1 font-mono text-[10px] text-zinc-500">UI mockup placeholder</span>}
      </div>
      <div className="flex flex-col p-6 md:p-8">
        <p className="text-xs tracking-widest text-cyan">{p.category}</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">{p.name}</h3>
        <p className="text-sm text-zinc-500">{p.subtitle}</p>
        <p className="mt-4 text-zinc-400">{p.description}</p>
        <ul className="mt-5 grid gap-x-4 gap-y-1.5 text-sm text-zinc-400 sm:grid-cols-2">
          {p.features.map((f) => <li key={f} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 bg-cyan" aria-hidden="true" />{f}</li>)}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>{p.tech.map((t) => <li key={t} className="border border-line px-2 py-1 font-mono text-xs text-zinc-400">{t}</li>)}</ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Action href={p.github} icon={Github} label="GitHub" />
          <Action href={p.live} icon={ExternalLink} label="Live Demo" primary />
        </div>
      </div>
    </article>
  )
}
