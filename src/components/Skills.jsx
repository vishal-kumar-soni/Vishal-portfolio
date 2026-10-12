import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react'
import Section from './Section'
import { skills } from '../data/skills'
const icons = { Terminal, Layout, Server, Database, Wrench }

export default function Skills() {
  return (
    <Section id="skills" title="Technologies I Work With">
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
    </Section>
  )
}
