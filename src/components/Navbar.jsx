import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => scrollTo('top')} className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">Designer Name</span>
            </button>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <button onClick={() => scrollTo('work')} className="text-blue-100/80 hover:text-white transition-colors">Work</button>
              <button onClick={() => scrollTo('about')} className="text-blue-100/80 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollTo('contact')} className="text-blue-100/80 hover:text-white transition-colors">Contact</button>
              <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}} className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 font-medium text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow">Let’s talk</a>
            </nav>

            <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-2">
              <button onClick={() => scrollTo('work')} className="block w-full text-left text-blue-100/90 py-2">Work</button>
              <button onClick={() => scrollTo('about')} className="block w-full text-left text-blue-100/90 py-2">About</button>
              <button onClick={() => scrollTo('contact')} className="block w-full text-left text-blue-100/90 py-2">Contact</button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
