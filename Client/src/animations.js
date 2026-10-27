// Plain GSAP setup (no React hooks). Called once from main.jsx after the page renders.
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const sections = ['home', 'about', 'skills', 'projects', 'contact']

function setActive(id) {
  document.querySelectorAll('[data-nav]').forEach((a) => {
    const on = a.dataset.nav === id
    a.dataset.active = on ? 'true' : 'false'
    if (on) a.setAttribute('aria-current', 'true')
    else a.removeAttribute('aria-current')
  })
}

export default function initAnimations() {
  // Navbar active-section highlight
  sections.forEach((id) =>
    ScrollTrigger.create({ trigger: `#${id}`, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => s.isActive && setActive(id) })
  )
  setActive('home')

  // Everything below is skipped if the visitor prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // Hero entrance
  gsap.from('[data-hero]', { opacity: 0, y: 28, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
  gsap.from('[data-line]', { opacity: 0, x: -12, duration: 0.35, stagger: 0.12, delay: 0.6, ease: 'power3.out' })

  // Scroll reveal for every element marked data-reveal
  gsap.set('[data-reveal]', { opacity: 0, y: 20 })
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out' })
  })
}
