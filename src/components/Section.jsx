import useReveal from '../hooks/useReveal'
export default function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useReveal()
  return (
    <section id={id} ref={ref} aria-labelledby={`${id}-title`} className={`relative mx-auto max-w-6xl px-5 py-20 md:py-28 ${className}`}>
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id={`${id}-title`} className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="mt-3 text-zinc-400">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
