import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-slate-950/70 backdrop-blur" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-[101] w-[min(92vw,860px)] rounded-2xl border border-white/10 bg-slate-900/90 p-6 text-blue-100 shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="mb-3 text-xl font-semibold text-white">{title}</div>
            <div className="prose prose-invert max-w-none">
              {children}
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={onClose} className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-white">Close</button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
