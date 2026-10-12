import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react'
import { skills } from '../data/skills'
const icons = { Terminal, Layout, Server, Database, Wrench }

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:pt-10">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="skills-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Technologies I Work With</h2>
      </div>
      <div className="divide-y divide-line border-y border-line">
        {skills.map(({ title, icon, items }) => {
          const Icon = icons[icon]
          return (
            <div key={title} data-reveal className="grid gap-4 py-6 md:grid-cols-[260px_1fr] md:items-center">
              <h3 className="flex items-center gap-3 font-medium text-white"><Icon size={18} className="text-cyan" aria-hidden="true" />{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="border border-line bg-panel px-3 py-2 text-sm text-zinc-300 transition hover:-translate-y-0.5 hover:border-cyan/60 hover:text-cyan">{s}</li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
