import { useRef } from 'react'
import { motion } from 'framer-motion'

export function Reveal({ children, delay = 0, className = '', y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ id, eyebrow, title, subtitle, children, className = '' }) {
  return (
    <section id={id} className={`relative px-5 sm:px-8 py-24 md:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(title || eyebrow) && (
          <Reveal className="mb-12 md:mb-16 max-w-3xl">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight">{title}</h2>}
            {subtitle && <p className="mt-5 text-lg text-white/60">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}

// Card that tilts toward the pointer for subtle 3D depth
export function Tilt({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`
  }
  const leave = () => { if (ref.current) ref.current.style.transform = '' }
  return (
    <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`tilt ${className}`}>
      {children}
    </div>
  )
}

export function Filters({ items, value, onChange, tone = 'violet' }) {
  return (
    <div role="tablist" className="flex flex-wrap gap-2 mb-10">
      {items.map((c) => (
        <button
          key={c}
          role="tab"
          aria-selected={value === c}
          onClick={() => onChange(c)}
          className={`px-4 py-2 rounded-full text-sm border transition ${
            value === c
              ? tone === 'kids' ? 'bg-amber-300 text-black border-amber-300' : 'bg-white text-black border-white'
              : 'border-white/15 text-white/70 hover:border-white/40 hover:text-white'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

const P = {
  video: 'M4 6h11a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zm13 4l5-3v10l-5-3',
  mic: 'M12 3a3 3 0 013 3v6a3 3 0 01-6 0V6a3 3 0 013-3zm-7 9a7 7 0 0014 0m-7 7v3',
  megaphone: 'M3 11v3a1 1 0 001 1h2l5 4V6L6 10H4a1 1 0 00-1 1zm13-3a5 5 0 010 8',
  building: 'M4 21V5l8-2v18M12 9l8 2v10M8 8h0M8 12h0M8 16h0M16 15h0M16 18h0M2 21h20',
  image: 'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm0 12l5-5 4 4 3-3 5 5M9 9.5h0',
  smile: 'M12 3a9 9 0 100 18 9 9 0 000-18zM8 14s1.5 2 4 2 4-2 4-2M9 9.5h0M15 9.5h0',
  palette: 'M12 3a9 9 0 100 18c1.3 0 2-1 1.6-2.2-.4-1.2.4-2.3 1.700-2.300H18a3 3 0 003-3c0-5-4-9-9-9zM7.500 11h0M10 7.500h0M14.500 7.500h0',
  code: 'M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14',
  play: 'M8 5v14l11-7z',
  arrow: 'M5 12h14m-6-6l6 6-6 6',
  down: 'M12 4v14m-6-6l6 6 6-6',
  mail: 'M3 6h18v12H3zM3 7l9 7 9-7',
  phone: 'M5 4h4l2 5-2.500 1.500a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',
  github: 'M9 19c-4 1.500-4-2-6-2m12 4v-3.500a3 3 0 00-.8-2.300c2.700-.3 5.500-1.300 5.500-6a4.600 4.600 0 00-1.300-3.200 4.300 4.300 0 00-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 00-6.200 0C6.100 2.800 5 3.100 5 3.100a4.300 4.300 0 00-.1 3.200A4.600 4.600 0 003.500 9.500c0 4.600 2.800 5.700 5.500 6A3 3 0 008.200 17.800V21',
  linkedin: 'M4 9h4v12H4zM6 3a2 2 0 110 4 2 2 0 010-4zm5 6h4v2c.7-1.200 2-2.200 4-2.200 3.500 0 4 2.300 4 5.200V21h-4v-6c0-1.400 0-3-2-3s-2 1.600-2 3v6h-4z',
  close: 'M6 6l12 12M18 6L6 18',
  expand: 'M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5',
  download: 'M12 3v12m-5-5l5 5 5-5M4 21h16',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zm10-3a3 3 0 100 6 3 3 0 000-6z',
  menu: 'M4 7h16M4 12h16M4 17h16',
}
export function Icon({ name, className = 'w-6 h-6', fill = false }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill={fill ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={P[name]} />
    </svg>
  )
}
