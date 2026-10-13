import { Github, ExternalLink } from 'lucide-react'
import deepseek1 from '/deepseek1.png'
import deepseek2 from '/deepseek2.png'
import medilocker1 from '/medilocker1.png'
import medilocker2 from '/medilocker2.png'
import vashtra1 from '/vashtra1.png'
import vashtra2 from '/vashtra2.png'


function Mockup({ id }) {
  if (id === 'vashtra') return (
    [
      <img src={vashtra1} className='transition-transform p-2 duration-500 hover:scale-[1.02]' height={600}></img>,
      <img src={vashtra2} className='transition-transform p-2 duration-500 hover:scale-[1.02]' height={600}></img>
    ]
  )
  if (id === 'medilocker') return (
    [
      <img src={medilocker1} className='transition-transform p-2 duration-500 hover:scale-[1.02]' >
      </img>, <img src={medilocker2} className='transition-transform p-2 duration-500 hover:scale-[1.02]' ></img>
    ]
  )
  if (id === 'chat') return (
    [
      <img src={deepseek1} className='transition-transform p-2 duration-500 hover:scale-[1.02]' ></img>,
      <img src={deepseek2} className='transition-transform p-2 duration-500 hover:scale-[1.02]' ></img>
    ]
  )
}

const Action = ({ href, icon: Icon, label, primary }) => href
  ? <a href={href} target="_blank" rel="noreferrer" className={`inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 ${primary ? 'border-cyan bg-cyan text-ink hover:bg-cyan/85' : 'border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan'}`}><Icon size={16} />{label}</a>
  : <span role="link" aria-disabled="true" title="Link coming soon" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan"><Icon size={16} />{label}</span>

export default function ProjectCard({ p, flip }) {
  return (
    <article data-reveal className="group grid border border-line bg-panel transition-colors hover:border-cyan/40 lg:grid-cols-2">
      <div className={`relative min-h-[260px]  overflow-hidden border-b border-line lg:border-b-0 ${flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`}>
        <div className="h-full flex flex-col justify-between  min-h-[260px] ">
          <Mockup id={p.id} />
        </div>
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
