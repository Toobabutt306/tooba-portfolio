import { useEffect } from 'react'
import { Icon } from './ui.jsx'

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [item, onClose])
  if (!item) return null
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} onClick={onClose} className="fixed inset-0 z-[80] grid place-items-center bg-black/90 p-4 backdrop-blur-md">
      <button onClick={onClose} autoFocus aria-label="Close image" className="absolute right-5 top-5 rounded-full border border-white/20 p-3 text-white hover:bg-white/10"><Icon name="close" className="h-5 w-5" /></button>
      <figure onClick={(e) => e.stopPropagation()} className="max-h-full max-w-5xl">
        <img src={item.src} alt={item.title} className="max-h-[80vh] w-auto rounded-2xl object-contain" />
        <figcaption className="mt-3 text-center"><span className="eyebrow mr-3">{item.sub}</span><span className="font-display">{item.title}</span></figcaption>
      </figure>
    </div>
  )
}
