import { nav, profile } from '../data/content.js'
import { Icon } from './ui.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-5 py-14 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-wider">TOOBA BUTT</p>
          <p className="mt-2 max-w-sm text-sm text-white/50">{profile.footerTitle}</p>
          <div className="mt-5 flex gap-3">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border border-white/15 p-3 hover:border-violet hover:text-violet-soft"><Icon name="mail" className="h-5 w-5" /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-white/15 p-3 hover:border-violet hover:text-violet-soft"><Icon name="github" className="h-5 w-5" /></a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-white/15 p-3 hover:border-violet hover:text-violet-soft"><Icon name="linkedin" className="h-5 w-5" /></a>}
          </div>
        </div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-x-12 gap-y-3 text-sm text-white/60">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-white">{l}</a></li>)}</ul></nav>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs text-white/35">© 2026 Tooba Butt. All rights reserved.</p>
    </footer>
  )
}
