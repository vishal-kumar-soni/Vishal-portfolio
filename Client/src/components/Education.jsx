import { GraduationCap, BookOpen, CalendarDays, Award } from 'lucide-react'

const education = [
  {
    icon: GraduationCap,
    institution: 'Marwari College, Ranchi',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Science',
    period: 'Jul 2023 – Aug 2026',
    score: 'CGPA: 8.5'
  },
  {
    icon: BookOpen,
    institution: 'Jharkhand Academic Council (JAC)',
    degree: 'Intermediate with Science (PCM)',
    field: 'Physics, Chemistry, Mathematics',
    period: 'May 2021 – Mar 2023',
    score: 'Grade: 88.4%'
  }
]

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:py-28">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="education-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">My Education</h2>
        <p className="mt-3 text-zinc-400">The academic foundation behind my work in software development.</p>
      </div>

      <ol className="relative max-w-3xl space-y-8 border-l border-line pl-8 sm:pl-10">
        {education.map(({ icon: Icon, institution, degree, field, period, score }) => (
          <li key={institution} data-reveal className="relative">
            <span className="absolute -left-[38.5px] top-8 h-3 w-3 border border-cyan bg-ink sm:-left-[46.5px]" aria-hidden="true" />
            <article className="border border-line bg-gradient-to-br from-panel to-ink p-6 transition-colors hover:border-cyan/40 sm:p-8">
              <header className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center border border-violet/40 bg-violet/10 text-violet">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{institution}</h3>
                  <p className="mt-1 text-zinc-300">{degree}</p>
                  <p className="text-sm text-zinc-500">{field}</p>
                </div>
              </header>

              <div className="my-6 h-px bg-line" aria-hidden="true" />

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 border border-line bg-ink px-3 py-2 font-mono text-xs text-zinc-300">
                  <CalendarDays size={14} className="text-cyan" aria-hidden="true" />
                  {period}
                </span>
                <span className="inline-flex items-center gap-2 border border-cyan/30 bg-cyan/10 px-3 py-2 font-mono text-xs text-cyan">
                  <Award size={14} aria-hidden="true" />
                  {score}
                </span>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}