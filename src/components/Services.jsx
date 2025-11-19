import { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from './Modal'

function ServiceCard({ title, desc, bullets, icon: Icon, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30">
          {Icon ? <Icon size={22} /> : null}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white/90">{title}</h3>
          <p className="mt-1 text-sm text-blue-200/80">{desc}</p>
          <ul className="mt-3 space-y-1 text-sm text-blue-200/80">
            {bullets?.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 text-sm text-blue-200/70">Click to see details, process, and deliverables</div>
    </motion.button>
  )
}

export default function Services() {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(null)

  const services = [
    {
      title: 'Product & Visual Design',
      desc: 'Crafting cohesive UI systems and polished visuals for web and mobile.',
      bullets: ['Design systems', 'UI libraries', 'Pixel-perfect delivery'],
      details: `From discovery and user flows to high-fidelity UI, I create cohesive interfaces grounded in principles and accessibility. I deliver tokenized design systems and production-ready specs.`
    },
    {
      title: 'Motion & Prototyping',
      desc: 'Expressive motion, micro-interactions, and rapid prototyping.',
      bullets: ['Framer / Principle', 'After Effects', 'Lottie / Rive'],
      details: `I use motion to clarify hierarchy and add delight. I prototype quickly to validate ideas and ship interactions that feel crisp and purposeful across platforms.`
    },
    {
      title: '3D & Creative Coding',
      desc: 'Playful, immersive visuals with Spline and WebGL experiences.',
      bullets: ['Spline scenes', 'Three.js', 'Generative art'],
      details: `I blend 3D with UI for immersive brand moments: hero scenes, product renders, and interactive canvases that stay performant and on-brand.`
    }
  ]

  return (
    <div className="mx-auto h-full max-w-6xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-blue-200/80">Ways we can work together</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} onClick={() => { setCurrent(s); setOpen(true) }} />
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={current?.title}>
        <p className="text-blue-200/90">{current?.details}</p>
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="font-medium text-white/90">Typical deliverables</div>
          <ul className="mt-2 grid gap-1 text-sm text-blue-200/80">
            {(current?.bullets || []).map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 text-sm text-blue-200/70">Timeline and pricing vary by scope. Happy to provide a quick estimate.</div>
      </Modal>
    </div>
  )
}
