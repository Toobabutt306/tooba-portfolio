import { services } from '../data/content.js'
import { Section, Reveal, Tilt, Icon } from './ui.jsx'

export default function Services() {
  return (
    <Section id="services" eyebrow="What I Create" title="Eight ways I turn ideas into content.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 4) * 0.07}>
            <Tilt className="h-full">
              <article className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-violet/50">
                <div aria-hidden className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet/20 blur-3xl transition group-hover:bg-cyan/25" />
                <div className="relative mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet to-cyan/70 text-white shadow-lg shadow-violet/30 transition group-hover:-translate-y-1 group-hover:rotate-6" style={{ transform: 'translateZ(30px)' }}>
                  <Icon name={s.icon} />
                </div>
                <h3 className="relative font-display text-xl font-semibold leading-snug">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/60">{s.text}</p>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
