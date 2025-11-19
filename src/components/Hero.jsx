import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-blue-200/80">Portfolio</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Crafting playful, modern interfaces that feel alive
          </h1>
          <p className="mt-4 text-lg text-blue-200/90">
            Designer & creative coder blending design systems, motion, and 3D into delightful product experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-white font-medium shadow-lg shadow-blue-600/30 pointer-events-auto">View work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-white/90 font-medium backdrop-blur pointer-events-auto">Contact</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
