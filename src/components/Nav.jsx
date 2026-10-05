import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content.js'
import { Icon } from './ui.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5' : ''}`}>
      <nav aria-label="Main" className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 py-4">
        <a href="#home" className="font-display text-lg font-semibold tracking-wider">TOOBA<span className="text-violet-soft"> BUTT</span></a>
        <ul className="hidden lg:flex items-center gap-8 text-sm text-white/70">
          {nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-white transition">{l}</a></li>)}
        </ul>
        <a href="#contact" className="btn btn-primary hidden lg:inline-flex !py-2.5">Let's Work Together</a>
        <button className="lg:hidden p-2" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>
      {open && (
        <ul className="lg:hidden flex flex-col gap-1 px-5 pb-6">
          {nav.map(([l, h]) => (
            <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-lg text-white/80 hover:bg-white/5">{l}</a></li>
          ))}
          <li><a href={profile.cv} download className="btn btn-ghost mt-3">Download CV</a></li>
        </ul>
      )}
    </header>
  )
}
