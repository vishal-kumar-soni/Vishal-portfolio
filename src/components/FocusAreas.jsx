import { MonitorSmartphone, Network, Bot } from 'lucide-react'
import Section from './Section'
const areas = [
  { icon: MonitorSmartphone, title: 'Frontend Engineering', text: 'Building responsive interfaces with React.js, Tailwind CSS, reusable components, and thoughtful interactions.' },
  { icon: Network, title: 'Full-Stack Development', text: 'Connecting frontend applications to backend APIs, databases, and authentication systems.' },
  { icon: Bot, title: 'AI Integration', text: 'Building AI-powered web experiences by integrating language-model APIs into modern web applications.' }
]
export default function FocusAreas() {
  return (
    <Section id="focus" title="What I Focus On">
      <div className="grid gap-px border border-line bg-line md:grid-cols-3">
        {areas.map(({ icon: Icon, title, text }) => (
          <div key={title} data-reveal className="group bg-ink p-8 transition-colors hover:bg-panel">
            <Icon size={28} className="text-cyan transition-transform group-hover:-translate-y-1" aria-hidden="true" />
            <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
