import { GraduationCap, Layers, Code2, Sparkles } from 'lucide-react'
import Section from './Section'

const info = [
  { icon: GraduationCap, label: 'Education', value: 'Bachelor of Computer Applications (BCA)' },
  { icon: Layers, label: 'Focus', value: 'Full-Stack Web Development' },
  { icon: Code2, label: 'Core Stack', value: 'MERN + Next.js' },
  { icon: Sparkles, label: 'Interest', value: 'AI-Powered Web Applications' }
]
const approach = ['Building useful, real-world applications', 'Writing maintainable and reusable code', 'Learning modern web technologies', 'Improving through problem-solving and continuous practice']

export default function About() {
  return (
    <Section id="about" title="A Little About Me">
      <div className="grid gap-12 lg:grid-cols-2">
        <div data-reveal className="space-y-4 text-zinc-400">
          <p>I completed my Bachelor of Computer Applications (BCA) from Marwari College, Ranchi, Jharkhand, India, and I'm now focused on building my career as a MERN Stack developer.</p>
          <p>I enjoy developing full-stack applications, designing responsive interfaces, working with databases, implementing authentication systems, and integrating AI APIs into web applications.</p>
          <ul className="mt-6 space-y-3 border-l border-cyan/40 pl-5 text-zinc-300">
            {approach.map((a) => <li key={a}>{a}</li>)}
          </ul>
        </div>
        <dl className="grid gap-px border border-line bg-line sm:grid-cols-2">
          {info.map(({ icon: Icon, label, value }) => (
            <div key={label} data-reveal className="bg-ink p-6 transition-colors hover:bg-panel">
              <Icon className="mb-4 text-cyan" size={20} aria-hidden="true" />
              <dt className="text-sm text-zinc-500">{label}</dt>
              <dd className="mt-1 font-medium text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
