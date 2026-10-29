import { Terminal, Layout, Server, Database, Wrench } from 'lucide-react'
import { skills } from '../data/skills'
import { tech } from '../data/skills'

const categoryIcons = { Terminal, Layout, Server, Database, Wrench }


const meta = {
  'Programming Language': { tag: 'LANGUAGES', text: 'Languages I use to write logic and solve problems' },
  'Frontend Development': { tag: 'CLIENT-SIDE', text: 'Responsive, component-based interfaces and modern UI development' },
  'Backend Development': { tag: 'SERVER-SIDE', text: 'APIs, server logic and secure authentication' },
  'Database & Storage': { tag: 'DATA', text: 'Storing and modelling application data' },
  'Tools & Integration': { tag: 'WORKFLOW', text: 'Version control, auth, media, animation and AI API tooling' }
}

// Card order: Frontend gets a full-width row, the rest sit two per row
const order = ['Frontend Development', 'Backend Development', 'Tools & Integration', 'Programming Language', 'Database & Storage']
const cards = order.map((t) => skills.find((s) => s.title === t))

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:py-28">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="skills-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Skills & Technology Stack</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {cards.map(({ title, icon, items }) => {
          const CategoryIcon = categoryIcons[icon]
          const wide = title === 'Frontend Development'
          return (
            <article key={title} data-reveal className={`border border-line bg-gradient-to-br from-panel to-ink p-6 transition-colors hover:border-cyan/40 sm:p-8 ${wide ? 'lg:col-span-2' : ''}`}>
              <header className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-violet/40 bg-violet/10 text-violet">
                  <CategoryIcon size={22} aria-hidden="true" />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-white">{title}</h3>
                    <span className="border border-cyan/30 bg-cyan/10 px-2 py-0.5 font-mono text-[11px] tracking-wider text-cyan">{meta[title].tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400">{meta[title].text}</p>
                </div>
              </header>

              <div className="my-6 h-px bg-line" aria-hidden="true" />

              <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${wide ? 'lg:grid-cols-5' : ''}`}>
                {items.map((name) => {
                  const { icon: Icon, color } = tech[name]
                  return (
                    <li
                      key={name}
                      style={{ '--c': color }}
                      className="group flex min-h-[112px] flex-col items-center justify-center gap-3 border border-line bg-ink px-2 py-5 text-center text-sm text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--c)] hover:bg-panel hover:text-white hover:shadow-[0_0_24px_-6px_var(--c)]"
                    >
                      <Icon size={30} className="text-[color:var(--c)] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                      {name}
                    </li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}