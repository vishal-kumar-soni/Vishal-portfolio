import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// Reveals children marked [data-reveal] once, when the section scrolls into view.
export default function useReveal() {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', { opacity: 0, y: 20, duration: 0.6, stagger: 0.07, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true } })
    }, ref)
    return () => ctx.revert()
  }, [])
  return ref
}
