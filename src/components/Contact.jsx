import { useState } from 'react'
import { Mail, Github, Linkedin, LocateIcon } from 'lucide-react'
import { site } from '../data/site'
import { LuSend } from "react-icons/lu";

const fields = [['name', 'Name', 'text'], ['email', 'Email', 'email'], ['subject', 'Subject', 'text']]

const validate = (credential) => {
  const e = {}
  if (credential.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(credential.email)) e.email = 'Enter a valid email address.'
  if (credential.subject.trim().length < 3) e.subject = 'Enter a subject (3+ characters).'
  if (credential.message.trim().length < 10) e.message = 'Write a message (10+ characters).'
  return e
}

export default function Contact() {
  const [credential, setCredential] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const set = (k) => (e) => setCredential({ ...credential, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const errs = validate(credential)
    setErrors(errs)
    if (Object.keys(errs).length) return setStatus({ type: 'error', text: 'Please fix the highlighted fields.' })
    if (site.formEndpoint) {
      setStatus({ type: 'loading', text: 'Sending...' })
      try {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(credential) })
        if (!r.ok) throw new Error()
        setStatus({ type: 'success', text: 'Message sent. Thanks for reaching out.' })
        setCredential({ name: '', email: '', subject: '', message: '' })
      } catch { setStatus({ type: 'error', text: 'Message could not be sent. Please email me directly.' }) }
    } else {
      const body = encodeURIComponent(`${credential.message}\n\nFrom: ${credential.name} (${credential.email})`)
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(credential.subject)}&body=${body}`
      setStatus({ type: 'info', text: 'Your email app should open with the message filled in. Nothing is sent until you press send there.' })
    }
  }
  const input = (k) => `w-full border bg-panel px-4 py-3 text-white placeholder-zinc-600 ${errors[k] ? 'border-red-500/70' : 'border-line'}`
  const color = { error: 'text-red-400', success: 'text-cyan', info: 'text-zinc-400', loading: 'text-zinc-400', idle: '' }

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative mx-auto max-w-6xl scroll-mt-[4.5rem] px-5 py-20 md:py-10">
      <div data-reveal className="mb-10 max-w-2xl">
        <h2 id="contact-title" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Have a Project in Mind?</h2>
        <p className="mt-3 text-zinc-400">I'm always interested in connecting with developers, recruiters, and people building useful products. Feel free to reach out.</p>
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div data-reveal className="space-y-5 ">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-[44px] items-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-cyan bg-cyan text-ink hover:bg-cyan/85 w-full justify-start"><Mail size={16} />{site.email}</a>
          {
            [['LinkedIn', site.linkedin, Linkedin], ['GitHub', site.github, Github]].map(([l, h, Icon]) => <a key={l} href={h} target="_blank" rel="noreferrer" className="inline-flex min-h-[44px] items-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan w-full justify-start"><Icon size={16} />{l}</a>
            )
          }
          <div  className="inline-flex min-h-[44px] items-center gap-2 border px-5 text-sm font-medium transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-line text-zinc-200 hover:border-cyan/60 hover:text-cyan w-full justify-start"><LocateIcon size={16} />Ranchi, Jharkhand</div>
        </div>
        <form data-reveal onSubmit={submit} noValidate className="space-y-4 -mt-1">
          {
            fields.map(([k, label, type]) => (
              <div key={k}>
                <label htmlFor={k} className="mb-1 block text-sm text-zinc-400">{label}</label>
                <input id={k} type={type} value={credential[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined} className={input(k)} />
                {errors[k] && <p id={`${k}-err`} className="mt-1 text-sm text-red-400">{errors[k]}</p>}
              </div>
            ))
          }
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-zinc-400">Message</label>
            <textarea id="message" rows={5} value={credential.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-err' : undefined} className={input('message')} />
            {errors.message && <p id="message-err" className="mt-1 text-sm text-red-400">{errors.message}</p>}
          </div>
          <button type="submit" disabled={status.type === 'loading'} className="inline-flex min-h-[44px] items-center justify-center gap-2 border px-5 text-sm font-bold transition-colors aria-disabled:pointer-events-none aria-disabled:opacity-40 border-cyan bg-cyan text-ink hover:bg-cyan/85 w-full sm:w-auto">Send Message <LuSend size={16} className='font-extrabold' /> </button>
          <p role="status" aria-live="polite" className={`text-sm ${color[status.type]}`}>{status.text}</p>
        </form>
      </div>
      <p data-reveal className="mt-20 text-center text-2xl font-semibold text-white md:text-4xl">Let's Build Something Meaningful.</p>
    </section>
  )
}
