import { useState } from 'react'
import { videos, videoCategories, ugc, construction, images, imageCategories, kids, branding } from '../data/content.js'
import { Section, Reveal, Filters, Icon } from './ui.jsx'
import VideoCard, { VideoModal } from './VideoCard.jsx'
import Lightbox from './Lightbox.jsx'

export function VideoShowcase({ onOpen }) {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? videos : videos.filter((v) => v.category === cat)
  return (
    <Section id="work" eyebrow="Selected Work" title="AI VIDEO SHOWCASE" subtitle="Ideas transformed into moving visuals.">
      <Filters items={videoCategories} value={cat} onChange={setCat} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((v, i) => (
          <Reveal key={v.file} delay={(i % 3) * 0.06}><VideoCard item={v} onOpen={onOpen} /></Reveal>
        ))}
      </div>
      {list.length === 0 && <p className="text-white/50">No videos in this category yet.</p>}
    </Section>
  )
}

export function UGC({ onOpen }) {
  return (
    <Section id="ugc" eyebrow="UGC & Advertising" title="UGC & ADVERTISING" subtitle="AI-generated product ads, presenters, demos and short-form promos." className="bg-gradient-to-b from-transparent via-violet/[0.06] to-transparent">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ugc.items.map((v, i) => (
          <Reveal key={v.file} delay={i * 0.07}><VideoCard item={v} onOpen={onOpen} aspect="aspect-[3/4]" /></Reveal>
        ))}
      </div>
      <Reveal className="mt-14">
        <div className="glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center">
          <p className="font-display text-2xl sm:text-3xl">{ugc.cta}</p>
          <a href="#contact" className="btn btn-primary shrink-0">Start a Project <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </Reveal>
    </Section>
  )
}

export function Construction({ onOpen }) {
  return (
    <Section id="construction" eyebrow="Architecture" title="CONSTRUCTION & ARCHITECTURAL VISUALS" subtitle="Buildings, environments and property stories, visualized with AI.">
      <div className="grid gap-6 md:grid-cols-2">
        {construction.map((v, i) => (
          <Reveal key={v.file} delay={(i % 2) * 0.08} className={i === 0 ? 'md:col-span-2' : ''}>
            <VideoCard item={v} onOpen={onOpen} aspect={i === 0 ? 'aspect-[21/9]' : 'aspect-video'} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)
  const list = cat === 'All' ? images : images.filter((i) => i.category === cat)
  return (
    <Section id="visuals" eyebrow="Gallery" title="AI VISUALS" subtitle="Characters, products, cinematic frames and concepts.">
      <Filters items={imageCategories} value={cat} onChange={setCat} />
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
        {list.map((im) => (
          <button key={im.file} onClick={() => setOpen(im)} aria-label={`Open image: ${im.title}`} className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10">
            <img src={`/assets/images/${im.file}`} alt={`${im.title} (${im.category})`} loading="lazy" decoding="async" className="w-full transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4 text-left opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="text-[11px] uppercase tracking-widest text-cyan">{im.category}</span>
              <span className="font-display">{im.title}</span>
            </div>
          </button>
        ))}
      </div>
      <Lightbox item={open ? { src: `/assets/images/${open.file}`, title: open.title, sub: open.category } : null} onClose={() => setOpen(null)} />
    </Section>
  )
}

export function Kids({ onOpen }) {
  const [open, setOpen] = useState(null)
  return (
    <section id="kids" className="relative my-10 overflow-hidden bg-gradient-to-br from-[#2a1458] via-[#3b1a6e] to-[#0f3a52] px-5 py-24 sm:px-8 md:py-32">
      <div aria-hidden className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-amber-300/30 blur-3xl" />
      <div aria-hidden className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-pink-400/25 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.28em] text-amber-300">Kids Content</p>
          <h2 className="font-display text-4xl font-semibold sm:text-5xl md:text-6xl">KIDS & STORYTELLING</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {kids.concepts.map((c, i) => (
              <li key={c} className={`rounded-full px-4 py-2 text-sm font-medium text-black ${['bg-amber-300', 'bg-pink-300', 'bg-cyan-300', 'bg-lime-300', 'bg-violet-300'][i % 5]}`}>{c}</li>
            ))}
          </ul>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {kids.images.map((im, i) => (
            <Reveal key={im.file} delay={i * 0.06}>
              <button onClick={() => setOpen(im)} aria-label={`Open image: ${im.title}`} className="group relative block aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-white/20 transition hover:-rotate-2 hover:scale-[1.03]">
                <img src={`/assets/images/${im.file}`} alt={im.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-black/50 p-3 font-display text-sm backdrop-blur">{im.title}</span>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {kids.videos.map((v) => (
            <Reveal key={v.file}><VideoCard item={v} onOpen={onOpen} tone="kids" /></Reveal>
          ))}
        </div>
      </div>
      <Lightbox item={open ? { src: `/assets/images/${open.file}`, title: open.title, sub: 'Kids Content' } : null} onClose={() => setOpen(null)} />
    </section>
  )
}

export function Branding() {
  const [open, setOpen] = useState(null)
  return (
    <Section id="branding" eyebrow="Design" title="BRANDING & CREATIVE DESIGN" subtitle="Brand kits, logos, palettes, typography, brochures and social graphics.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {branding.map((b, i) => (
          <Reveal key={b.file} delay={(i % 4) * 0.05} className={i === 0 || i === 5 ? 'col-span-2' : ''}>
            <button onClick={() => setOpen(b)} aria-label={`Open design: ${b.title}`} className="group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10">
              <img src={`/assets/branding/${b.file}`} alt={b.title} loading="lazy" decoding="async" className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-left font-display">{b.title}</span>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox item={open ? { src: `/assets/branding/${open.file}`, title: open.title, sub: 'Branding' } : null} onClose={() => setOpen(null)} />
    </Section>
  )
}

export { VideoModal }
