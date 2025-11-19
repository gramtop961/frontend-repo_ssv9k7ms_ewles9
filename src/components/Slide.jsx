import { motion } from 'framer-motion'

export default function Slide({ id, children, bg = 'from-slate-900 via-slate-950 to-slate-950' }) {
  return (
    <section
      id={id}
      className={`slide relative h-screen w-screen shrink-0 snap-start bg-gradient-to-br ${bg}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.4 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}
