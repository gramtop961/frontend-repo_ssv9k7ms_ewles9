import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="fixed inset-0 bg-[radial-gradient(80%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(17,24,39,0))]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Work />
        <About />
        <Contact />

        <footer className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-blue-200/70">
              <p>© {new Date().getFullYear()} Designer Name — All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#work" className="hover:text-white">Work</a>
                <a href="#about" className="hover:text-white">About</a>
                <a href="#contact" className="hover:text-white">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
