import { useRef, useState } from 'react'
import { Icon } from './ui.jsx'

const base = '/assets/videos/'
const poster = (f) => base + f.replace(/\.mp4$/, '.webp')

// Card: poster + hover preview. Click opens the full-screen player.
export default function VideoCard({ item, onOpen, aspect = 'aspect-video', tone }) {
  const ref = useRef(null)
  const [hover, setHover] = useState(false)
  const [broken, setBroken] = useState(false)

  const start = () => {
    setHover(true)
    const v = ref.current
    if (v) { v.currentTime = 0; v.play().catch(() => {}) }
  }
  const stop = () => {
    setHover(false)
    const v = ref.current
    if (v) v.pause()
  }

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      onPointerEnter={start}
      onPointerLeave={stop}
      onFocus={start}
      onBlur={stop}
      aria-label={`Play video: ${item.title}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-panel text-left transition duration-500 hover:border-violet/60 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(139,92,246,.6)]"
    >
      <div className={`relative ${aspect} overflow-hidden`}>
        <img src={poster(item.file)} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        {!broken && (
          <video
            ref={ref}
            src={base + item.file}
            muted loop playsInline preload="none"
            onError={() => setBroken(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${hover ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur">{item.category}</span>
        <span className={`absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full text-white backdrop-blur transition group-hover:scale-110 ${tone === 'kids' ? 'bg-amber-400/90 text-black' : 'bg-violet/80'}`}>
          <Icon name="play" className="h-5 w-5 translate-x-px" fill />
        </span>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="font-display text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-sm text-white/60">{item.text}</p>
        </div>
      </div>
    </button>
  )
}

export function VideoModal({ item, onClose }) {
  const [broken, setBroken] = useState(false)
  const wrap = useRef(null)
  const full = () => {
    const v = wrap.current?.querySelector('video')
    const t = v?.requestFullscreen ? v : wrap.current
    t?.requestFullscreen?.().catch(() => {})
  }
  if (!item) return null
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur-md" onClick={onClose}>
      <div ref={wrap} className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">{item.category}</p>
            <h3 className="font-display text-xl">{item.title}</h3>
          </div>
          <div className="flex gap-2">
            <button onClick={full} aria-label="Full screen" className="rounded-full border border-white/20 p-3 hover:bg-white/10"><Icon name="expand" className="h-5 w-5" /></button>
            <button onClick={onClose} aria-label="Close video" autoFocus className="rounded-full border border-white/20 p-3 hover:bg-white/10"><Icon name="close" className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
          {broken ? (
            <div className="grid aspect-video place-items-center text-white/60">Add {item.file} to /public/assets/videos/</div>
          ) : (
            <video src={base + item.file} poster={poster(item.file)} controls autoPlay playsInline onError={() => setBroken(true)} className="aspect-video w-full" />
          )}
        </div>
      </div>
    </div>
  )
}
