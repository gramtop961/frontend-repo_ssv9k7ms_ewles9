import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PortfolioCarousel from './components/PortfolioCarousel'
import About from './components/About'
import Contact from './components/Contact'
import HorizontalScroller from './components/HorizontalScroller'
import Slide from './components/Slide'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(17,24,39,0))] pointer-events-none" />

      <Navbar />

      {/* Horizontal presentation-style flow */}
      <HorizontalScroller>
        <Slide id="top" bg="from-slate-950 via-slate-950 to-slate-900">
          <Hero />
        </Slide>

        <Slide id="services" bg="from-slate-950 via-slate-900 to-slate-950">
          <Services />
        </Slide>

        <Slide id="work" bg="from-slate-950 via-slate-950 to-slate-900">
          <PortfolioCarousel />
        </Slide>

        <Slide id="about" bg="from-slate-950 via-slate-900 to-slate-950">
          <About />
        </Slide>

        <Slide id="contact" bg="from-slate-950 via-slate-950 to-slate-900">
          <Contact />
        </Slide>
      </HorizontalScroller>

      <footer className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 text-xs text-blue-200/70 backdrop-blur">
          © {new Date().getFullYear()} Designer Name
        </div>
      </footer>
    </div>
  )
}

export default App
