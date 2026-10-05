import { useState } from 'react'
import { motion } from 'framer-motion'
import { promptFlow, promptExample, promptSkills, tools, process, projects, profile } from '../data/content.js'
import { Section, Reveal, Tilt, Icon } from './ui.jsx'

export function PromptLab() {
  const [step, setStep] = useState(0)
  const detail = [promptExample.brief, promptExample.prompt, 'The prompt is sent to an image or video model (for example Google Flow or Kling AI) to produce first drafts.', 'Review the drafts, then adjust the prompt for consistency, motion, lighting and detail.', 'Final clip or image, edited and exported for its platform.']
  return (
    <Section id="prompt" eyebrow="Prompt Engineering" title="BEHIND THE PROMPT" subtitle="IDEA → PROMPT → AI GENERATION → FINAL VISUAL">
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <ol className="space-y-2">
            {promptFlow.map((p, i) => (
              <li key={p.step}>
                <button onClick={() => setStep(i)} aria-current={step === i} className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition ${step === i ? 'border-violet bg-violet/15' : 'border-white/10 hover:border-white/30'}`}>
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-display text-sm ${step === i ? 'bg-violet' : 'bg-white/10'}`}>{i + 1}</span>
                  <span><span className="block font-display">{p.step}</span><span className="text-sm text-white/50">{p.text}</span></span>
                </button>
              </li>
            ))}
          </ol>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="glass relative h-full min-h-[320px] rounded-3xl p-6 sm:p-8">
            <div className="mb-5 flex items-center gap-2" aria-hidden>
              <i className="h-3 w-3 rounded-full bg-red-400/70" /><i className="h-3 w-3 rounded-full bg-amber-300/70" /><i className="h-3 w-3 rounded-full bg-emerald-400/70" />
              <span className="ml-3 text-xs text-white/40">prompt-studio</span>
            </div>
            <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <p className="eyebrow mb-3">{promptFlow[step].step}</p>
              <p className={`text-lg leading-relaxed ${step === 1 ? 'font-mono text-base text-cyan/90' : 'text-white/80'}`}>{detail[step]}</p>
            </motion.div>
            <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-violet to-cyan transition-all duration-500" style={{ width: `${((step + 1) / promptFlow.length) * 100}%` }} /></div>
            <p className="mt-5 text-xs text-white/40">{promptExample.note}</p>
          </div>
        </Reveal>
      </div>
      <Reveal className="mt-10">
        <ul className="flex flex-wrap gap-2">
          {promptSkills.map((s) => <li key={s} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/75 transition hover:-translate-y-0.5 hover:border-cyan hover:text-white">{s}</li>)}
        </ul>
      </Reveal>
    </Section>
  )
}

export function Toolkit() {
  return (
    <Section id="tools" eyebrow="Toolkit" title="AI TOOLKIT" subtitle="The tools I use to generate, voice, design and edit.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((g, i) => (
          <Reveal key={g.group} delay={(i % 3) * 0.07}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="eyebrow mb-5">{g.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <li key={t} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm transition hover:-translate-y-1 hover:border-violet hover:bg-violet/15 hover:shadow-lg hover:shadow-violet/20">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Process() {
  return (
    <Section id="process" eyebrow="Workflow" title="MY CREATIVE PROCESS">
      <div className="relative">
        <motion.div aria-hidden initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-violet via-cyan to-violet lg:block" />
        <motion.div aria-hidden initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: 'easeOut' }} className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-violet to-cyan lg:hidden" />
        <ol className="grid gap-10 lg:grid-cols-6 lg:gap-5">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <li className="relative pl-16 lg:pl-0 lg:pt-16">
                <span className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-full border border-violet bg-ink font-display text-sm text-violet-soft shadow-[0_0_30px_-4px_rgba(139,92,246,.7)]">{p.n}</span>
                <h3 className="font-display text-xl uppercase tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="PROJECT SHOWCASE">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.07}>
            <Tilt className="h-full" max={5}>
              <article className="glass group flex h-full flex-col overflow-hidden rounded-3xl transition hover:border-violet/50">
                <div className="relative aspect-video overflow-hidden">
                  <img src={p.thumb} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[11px] uppercase tracking-widest backdrop-blur">{p.category}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{p.text}</p>
                  {p.tools.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">{p.tools.map((t) => <li key={t} className="rounded-md bg-white/8 px-2.5 py-1 text-xs text-cyan">{t}</li>)}</ul>
                  )}
                  <a href={p.link} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-soft hover:text-white">View Project <Icon name="arrow" className="h-4 w-4" /></a>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function Resume() {
  return (
    <Section id="resume">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-14 text-center">
          <div aria-hidden className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-violet/30 blur-[100px]" />
          <p className="eyebrow relative mb-4">Resume</p>
          <h2 className="relative font-display text-4xl sm:text-5xl font-semibold">MY RESUME</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/60">Explore my experience, skills and creative capabilities.</p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn btn-primary"><Icon name="eye" className="h-4 w-4" /> View CV</a>
            <a href={profile.cv} download="Tooba-Butt-CV.pdf" className="btn btn-ghost"><Icon name="download" className="h-4 w-4" /> Download CV</a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
