import { Github, Linkedin, Code2 } from 'lucide-react'
import { site } from '../data/site'
import useReveal from '../hooks/useReveal'

const items = [
  { label: 'GitHub', href: site.github, icon: Github },
  { label: 'LeetCode', href: site.leetcode, icon: Code2 },
  { label: 'LinkedIn', href: site.linkedin, icon: Linkedin }
]
export default function Profiles() {
  const ref = useReveal()
  return (
    <section ref={ref} aria-label="Coding profiles" className="mx-auto max-w-6xl px-5 py-10">
      <div data-reveal className="flex flex-col items-start justify-between gap-4 border-y border-line py-6 sm:flex-row sm:items-center">
        <h2 className="font-medium text-white">Find me on</h2>
        <div className="flex flex-wrap gap-3">
          {items.map(({ label, href, icon: Icon }) => href
            ? <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="btn btn-ghost !px-4"><Icon size={18} />{label}</a>
            : <span key={label} role="link" aria-disabled="true" aria-label={`${label} (link not set)`} title="Add this URL in src/data/site.js" className="btn btn-ghost !px-4"><Icon size={18} />{label}</span>)}
        </div>
      </div>
    </section>
  )
}
