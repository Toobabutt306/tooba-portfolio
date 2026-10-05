import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import { VideoShowcase, UGC, Construction, Gallery, Kids, Branding, VideoModal } from './components/Work.jsx'
import { PromptLab, Toolkit, Process, Projects, Resume } from './components/Lower.jsx'

import Footer from './components/Footer.jsx'

export default function App() {
  const [video, setVideo] = useState(null)
  useEffect(() => {
    if (!video) return
    const k = (e) => e.key === 'Escape' && setVideo(null)
    window.addEventListener('keydown', k)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = '' }
  }, [video])
  return (
    <div className="noise">
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <VideoShowcase onOpen={setVideo} />
        <UGC onOpen={setVideo} />
        <Construction onOpen={setVideo} />
        <Gallery />
        <Kids onOpen={setVideo} />
        <Branding />
        <PromptLab />
        <Toolkit />
        <Process />
        <Projects />
        <Resume />
        
      </main>
      <Footer />
      <VideoModal item={video} onClose={() => setVideo(null)} />
    </div>
  )
}
