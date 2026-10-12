import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import Section from './Section'
import { site } from '../data/site'

const fields = [['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']]
const validate = (v) => {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject (3+ characters).'
  if (v.message.trim().length < 10) e.message = 'Write a message (10+ characters).'
  return e
}

export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return setStatus({ type: 'error', text: 'Please fix the highlighted fields.' })
    if (site.formEndpoint) {
      setStatus({ type: 'loading', text: 'Sending...' })
      try {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(v) })
        if (!r.ok) throw new Error()
        setStatus({ type: 'success', text: 'Message sent. Thanks for reaching out.' })
        setV({ name: '', email: '', subject: '', message: '' })
      } catch { setStatus({ type: 'error', text: 'Message could not be sent. Please email me directly.' }) }
    } else {
      const body = encodeURIComponent(`${v.message}\n\nFrom: ${v.name} (${v.email})`)
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${body}`
      setStatus({ type: 'info', text: 'Your email app should open with the message filled in. Nothing is sent until you press send there.' })
    }
  }
  const input = (k) => `w-full border bg-panel px-4 py-3 text-white placeholder-zinc-600 ${errors[k] ? 'border-red-500/70' : 'border-line'}`
  const color = { error: 'text-red-400', success: 'text-cyan', info: 'text-zinc-400', loading: 'text-zinc-400', idle: '' }

  return (
    <Section id="contact" title="Have a Project in Mind?" subtitle="I'm always interested in connecting with developers, recruiters, and people building useful products. Feel free to reach out.">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div data-reveal className="space-y-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary w-full justify-start"><Mail size={16} />{site.email}</a>
          {[['LinkedIn', site.linkedin, Linkedin], ['GitHub', site.github, Github]].map(([l, h, Icon]) => h
            ? <a key={l} href={h} target="_blank" rel="noreferrer" className="btn btn-ghost w-full justify-start"><Icon size={16} />{l}</a>
            : <span key={l} role="link" aria-disabled="true" className="btn btn-ghost w-full justify-start"><Icon size={16} />{l} (add link)</span>)}
        </div>
        <form data-reveal onSubmit={submit} noValidate className="space-y-4">
          {fields.map(([k, label, type]) => (
            <div key={k}>
              <label htmlFor={k} className="mb-1 block text-sm text-zinc-400">{label}</label>
              <input id={k} type={type} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className={input(k)} />
              {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-400">{errors[k]}</p>}
            </div>
          ))}
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-zinc-400">Message</label>
            <textarea id="message" rows={5} value={v.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={input('message')} />
            {errors.message && <p id="message-err" className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button type="submit" disabled={status.type === 'loading'} className="btn btn-primary w-full sm:w-auto">{site.formEndpoint ? 'Send message' : 'Open in email app'}</button>
          <p role="status" aria-live="polite" className={`text-sm ${color[status.type]}`}>{status.text}</p>
        </form>
      </div>
      <p data-reveal className="mt-20 text-center text-2xl font-semibold text-white md:text-4xl">Let's Build Something Meaningful.</p>
    </Section>
  )
}
