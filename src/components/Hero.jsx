import { lazy, Suspense, useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content.js'
import { Icon } from './ui.jsx'
import { useInView, useReducedMotion } from '../hooks/useInView.js'

const Scene3D = lazy(() => import('./Scene3D.jsx'))

export default function Hero() {
  const ref = useRef(null)
  const inView = useInView(ref, '0px')
  const reduce = useReducedMotion()
  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden px-5 sm:px-8 pt-28 pb-16 flex items-center">
      <div aria-hidden className="pointer-events-none absolute -left-40 top-10 h-[600px] w-[600px] rounded-full bg-violet/20 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan/10 blur-[140px]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="eyebrow mb-6">AI Creative Studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-display text-[clamp(3.2rem,9vw,7rem)] font-bold leading-[0.95] tracking-tight text-grad">
            TOOBA<br />BUTT
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-6 font-display text-base sm:text-lg text-white/80">{profile.title}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} className="mt-4 max-w-xl text-white/60 text-lg">{profile.tagline}</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn btn-primary">View My Work <Icon name="arrow" className="h-4 w-4" /></a>
            <a href="#contact" className="btn btn-ghost">Let's Work Together</a>
            <a href={profile.cv} download className="inline-flex items-center gap-2 px-3 py-3 text-sm text-white/60 underline-offset-4 hover:text-white hover:underline">
              <Icon name="download" className="h-4 w-4" /> Download CV
            </a>
          </motion.div>
        </div>
        <div className="order-1 lg:order-2 relative h-[340px] sm:h-[460px] lg:h-[640px]">
          <Suspense fallback={null}><Scene3D active={inView && !reduce} /></Suspense>
          <span className="glass absolute bottom-4 right-2 rounded-full px-4 py-2 text-[11px] tracking-[0.25em] text-white/80">AI CREATIVE STUDIO</span>
        </div>
      </div>
      <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/40 md:block animate-bounce"><Icon name="down" /></a>
    </section>
  )
}
