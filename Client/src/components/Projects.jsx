import { Github } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { site } from '../data/site'


export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:pt-10">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="projects-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Things I've Built</h2>
        <p className="mt-3 text-zinc-400">A selection of projects focused on solving practical problems through modern web development.</p>
      </div>
      {/* All projects */}
      <div className="space-y-8 ">
        {
          projects.map((p, i) => <ProjectCard key={p.id} project={p} flip={i % 2 === 1} />)
        }
      </div>
      <div data-reveal className="mt-10 text-center">
        <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan"><Github size={16} /> View All Projects</a>
      </div>
    </section>
  )
}
