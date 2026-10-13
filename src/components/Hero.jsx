import { ArrowDown } from 'lucide-react'
import profile from '/images/profile.jpeg'


export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="[background-image:linear-gradient(#1f263066_1px,transparent_1px),linear-gradient(90deg,#1f263066_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_60%_30%,#000_20%,transparent_75%)] [-webkit-mask-image:radial-gradient(ellipse_at_60%_30%,#000_20%,transparent_75%)] pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.1fr_1fr]">

        {/* Left Part */}
        <div className=''>
          <p data-hero className="mb-4 text-sm tracking-widest text-cyan">HELLO, I'M</p>
          <h1 data-hero className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Vishal Kumar Soni</h1>
          <p data-hero className="mt-4 text-2xl font-medium text-cyan sm:text-3xl">MERN Stack Developer</p>
          <p data-hero className="mt-5 max-w-xl text-lg text-zinc-200">Building modern web experiences with React, Node.js, and AI-powered integrations.</p>
          <p data-hero className="mt-4 max-w-xl text-zinc-400">I'm a developer passionate about building responsive user interfaces, scalable web applications, and practical AI-powered products. I enjoy turning ideas into functional, user-friendly digital experiences.</p>
          <div data-hero className="mt-8 flex flex-wrap gap-3 ">
            <a href="#projects" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-cyan bg-cyan text-ink hover:bg-cyan/85">Explore My Work</a>
            <a href="#contact" className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan">Let's Connect</a>
          </div>
          <p data-hero className="mt-8 inline-flex items-center gap-2 border border-line px-3 py-2 text-sm text-zinc-300">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-cyan opacity-60" /><span className="h-2 w-2 rounded-full bg-cyan" /></span>
            Open to Software Development Opportunities
          </p>
        </div>

        {/* Right Part - Image */}
        <div data-hero className="relative mx-auto w-full -mt-5 max-w-sm lg:max-w-md">
          <div className="absolute -inset-10 -z-10 bg-cyan/15 blur-3xl" aria-hidden="true" />
          <div className="absolute inset-0 translate-x-4 translate-y-4 border border-cyan/80" aria-hidden="true" />
          <span className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-cyan" aria-hidden="true" />
          <span className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-violet" aria-hidden="true" />
          <figure className="group relative overflow-hidden border border-line bg-panel">
            <img src={profile} alt="Portrait of Vishal Kumar Soni" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-lg font-semibold text-white">Vishal Kumar Soni</p>
              <p className="text-sm text-cyan">MERN Stack Developer</p>
            </figcaption>
          </figure>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About section" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-zinc-500 hover:text-cyan sm:block"><ArrowDown className="animate-bounce motion-reduce:animate-none" size={22} /></a>
    </section>
  )
}
