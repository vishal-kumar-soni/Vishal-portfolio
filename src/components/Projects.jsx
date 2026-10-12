import { Github } from 'lucide-react'
import Section from './Section'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { site } from '../data/site'

export default function Projects() {
  return (
    <Section id="projects" title="Things I've Built" subtitle="A selection of projects focused on solving practical problems through modern web development.">
      <div className="space-y-8">{projects.map((p, i) => <ProjectCard key={p.id} p={p} flip={i % 2 === 1} />)}</div>
      <div data-reveal className="mt-10 text-center">
        {site.github
          ? <a href={site.github} target="_blank" rel="noreferrer" className="btn btn-ghost"><Github size={16} /> View All Projects</a>
          : <span role="link" aria-disabled="true" title="Add your GitHub URL in src/data/site.js" className="btn btn-ghost"><Github size={16} /> View All Projects</span>}
      </div>
    </Section>
  )
}
