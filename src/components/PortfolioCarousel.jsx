import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from './Modal'

const items = [
  {
    title: 'Fintech Dashboard',
    tag: 'Web App',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    details: 'Real-time analytics, theming, and delightful micro-interactions. Designed to surface KPIs with clarity while enabling power features without clutter.'
  },
  {
    title: 'Immersive Landing',
    tag: 'Marketing',
    image: 'https://images.unsplash.com/photo-1700845299081-b9d433e7855c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbW1lcnNpdmUlMjBMYW5kaW5nfGVufDB8MHx8fDE3NjM1NDY2ODl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    details: '3D hero with Spline, scroll-triggered animations, and conversions up 22% after launch. Built with performance budgets and a11y in mind.'
  },
  {
    title: 'Design System X',
    tag: 'System',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    details: 'Token-driven components, docs, and Figma <-> code alignment. Accelerated delivery across 4 product teams.'
  }
]

export default function PortfolioCarousel() {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)

  const next = () => setIndex((i) => (i + 1) % items.length)
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)

  const current = items[index]

  return (
    <div className="mx-auto h-full max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Portfolio</h2>
          <p className="mt-2 text-blue-200/80">Case studies with details on impact</p>
        </div>
        <div className="hidden sm:flex gap-2">
          <button onClick={prev} className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white/80">Prev</button>
          <button onClick={next} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-white">Next</button>
        </div>
      </div>

      <button onClick={() => setOpen(true)} className="group relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left">
        <div className="aspect-[16/9] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.image}
              src={current.image}
              alt={current.title}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </AnimatePresence>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-200">{current.tag}</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white/90">{current.title}</h3>
            <div className="sm:hidden flex gap-2">
              <button type="button" onClick={(e) => { e.stopPropagation(); prev() }} className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white/80">Prev</button>
              <button type="button" onClick={(e) => { e.stopPropagation(); next() }} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-white">Next</button>
            </div>
          </div>
          <p className="mt-2 text-blue-200/80">{current.details}</p>
          <div className="mt-3 text-sm text-blue-200/70">Click to open the full case study</div>
        </div>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} title={current.title}>
        <div className="grid gap-4">
          <img src={current.image} alt="Preview" className="w-full rounded-xl border border-white/10" />
          <p className="text-blue-200/90">{current.details}</p>
          <ul className="grid gap-1 text-sm text-blue-200/80">
            <li>• Role: Lead Designer</li>
            <li>• Team: PM, 2 Engineers, 1 Researcher</li>
            <li>• Outcome: KPI lift and faster delivery</li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}
