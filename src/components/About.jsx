import { lazy, Suspense, useRef } from 'react'
import { about } from '../data/content.js'
import { Section, Reveal } from './ui.jsx'
import { useInView, useReducedMotion } from '../hooks/useInView.js'

const Scene3D = lazy(() => import('./Scene3D.jsx'))

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, '100px')
  const reduce = useReducedMotion()
  return (
    <Section id="about" eyebrow="About" title="Ideas, prompted into motion.">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-white/70">
            {about.text.map((t) => <p key={t}>{t}</p>)}
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {about.chips.map((c) => <li key={c} className="glass rounded-full px-4 py-2 text-sm">{c}</li>)}
          </ul>
          <div className="glass mt-10 rounded-2xl p-5">
            <p className="eyebrow mb-2">Education</p>
            <p className="font-display text-lg">{about.education.degree}</p>
            <p className="text-white/60">{about.education.school}</p>
            <p className="text-sm text-white/40">{about.education.detail}</p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div ref={ref} className="glass relative h-[360px] sm:h-[460px] overflow-hidden rounded-3xl">
            <Suspense fallback={null}><Scene3D variant="about" active={inView && !reduce} /></Suspense>
            <span className="absolute left-5 top-5 text-[11px] tracking-[0.25em] text-white/50">CREATIVE WORKSPACE</span>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
