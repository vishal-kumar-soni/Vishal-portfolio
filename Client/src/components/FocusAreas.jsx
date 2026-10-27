import { MonitorSmartphone, Network, Bot } from 'lucide-react'


const areas = [
  {
    icon: MonitorSmartphone,
    title: 'Frontend Engineering',
    text: 'Building responsive interfaces with React.js, Tailwind CSS, reusable components, and thoughtful interactions.'
  },
  {
    icon: Network,
    title: 'Full-Stack Development',
    text: 'Connecting frontend applications to backend APIs, databases, and authentication systems.'
  },
  {
    icon: Bot,
    title: 'AI Integration',
    text: 'Building AI-powered web experiences by integrating language-model APIs into modern web applications.'
  }
]
export default function FocusAreas() {
  return (
    <section id="focus" aria-labelledby="focus-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:py-28">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="focus-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">What I Focus On</h2>
      </div>
      <div className="grid gap-px border border-line bg-line md:grid-cols-3">
        {areas.map(({ icon: Icon, title, text }) => (
          <div key={title} data-reveal className="group bg-ink p-8 transition-colors hover:bg-panel">
            <Icon size={28} className="text-cyan transition-transform group-hover:-translate-y-1" aria-hidden="true" />
            <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
