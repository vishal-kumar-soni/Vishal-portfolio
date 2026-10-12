import { ArrowDown } from 'lucide-react'

const code = [
  ['const', ' developer ', '=', ' {'],
  ['  name', ': ', "'Vishal Kumar Soni'", ','],
  ['  stack', ': ', "['React', 'Node', 'MongoDB']", ','],
  ['  next', ': ', "'Next.js + AI APIs'", ','],
  ['  status', ': ', "'open to work'", ','],
  ['};', '', '', '']
]
const colors = ['text-violet', 'text-zinc-200', 'text-zinc-500', 'text-cyan']

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="[background-image:linear-gradient(#1f263066_1px,transparent_1px),linear-gradient(90deg,#1f263066_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_60%_30%,#000_20%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_60%_30%,#000_20%,transparent_75%)] pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p data-hero className="mb-4 text-sm tracking-widest text-cyan">HELLO, I'M</p>
          <h1 data-hero className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Vishal Kumar Soni</h1>
          <p data-hero className="mt-4 text-2xl font-medium text-cyan sm:text-3xl">MERN Stack Developer</p>
          <p data-hero className="mt-5 max-w-xl text-lg text-zinc-200">Building modern web experiences with React, Node.js, and AI-powered integrations.</p>
          <p data-hero className="mt-4 max-w-xl text-zinc-400">I'm a developer passionate about building responsive user interfaces, scalable web applications, and practical AI-powered products. I enjoy turning ideas into functional, user-friendly digital experiences.</p>
          <div data-hero className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-cyan bg-cyan text-ink hover:bg-cyan/85">Explore My Work</a>
            <a href="#contact" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan">Let's Connect</a>
          </div>
          <p data-hero className="mt-8 inline-flex items-center gap-2 border border-line px-3 py-2 text-sm text-zinc-300">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-cyan opacity-60" /><span className="h-2 w-2 rounded-full bg-cyan" /></span>
            Open to Software Development Opportunities
          </p>
        </div>

        <div data-hero className="relative" aria-hidden="true">
          <div className="absolute -inset-px bg-gradient-to-br from-cyan/30 via-transparent to-violet/25 blur-xl" />
          <div className="relative border border-line bg-panel/90 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" /><span className="h-2.5 w-2.5 rounded-full bg-zinc-700" /><span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-3 font-mono text-xs text-zinc-500">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm">
              {code.map((row, i) => (
                <div key={i} data-line>
                  <span className="mr-4 select-none text-zinc-700">{i + 1}</span>
                  {row.map((t, j) => <span key={j} className={colors[j]}>{t}</span>)}
                </div>
              ))}
              <div className="mt-3 border-t border-line pt-3 text-zinc-500">$ npm run dev<span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse motion-reduce:animate-none bg-cyan" /></div>
            </pre>
          </div>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 hover:text-cyan sm:block"><ArrowDown className="animate-bounce motion-reduce:animate-none" size={22} /></a>
    </section>
  )
}
