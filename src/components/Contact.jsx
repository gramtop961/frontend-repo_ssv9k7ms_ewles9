import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // For now, this just simulates a send. Later we can wire to backend.
    setTimeout(() => {
      setStatus('Thanks! I’ll get back to you shortly.')
    }, 800)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 backdrop-blur">
          <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
          <p className="mt-2 text-blue-200/85">Send a note about your project, timeline, and goals.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input required type="text" placeholder="Name" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
              <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            </div>
            <input type="text" placeholder="Company / Org" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <textarea required rows="5" placeholder="Project details" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-blue-200/60 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow">Send</button>
          </form>

          {status && <p className="mt-4 text-blue-100/90">{status}</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact
