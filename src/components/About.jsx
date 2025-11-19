function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-white">About</h2>
              <p className="mt-4 text-blue-200/85 leading-relaxed">
                I’m a multidisciplinary designer focused on interfaces that feel human — thoughtful layout, crisp typography, expressive motion, and a touch of play. I work across web and mobile, from early discovery and prototyping to production design systems.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm text-blue-200/90">
                <li>• Visual & Product Design</li>
                <li>• Prototyping & Motion</li>
                <li>• 3D & Creative Coding</li>
                <li>• Design Systems</li>
              </ul>
            </div>
            <div>
              <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop" alt="Portrait" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
