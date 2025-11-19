function WorkCard({ title, tag, image, description }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="aspect-[16/11] w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-200">{tag}</span>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white/90">{title}</h3>
        <p className="mt-2 text-sm text-blue-200/80">{description}</p>
      </div>
    </div>
  )
}

function Work() {
  const projects = [
    {
      title: 'Interactive Brand Site',
      tag: 'Web',
      image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1600&auto=format&fit=crop',
      description: 'A responsive, motion-rich marketing site for a tech brand.'
    },
    {
      title: 'Mobile Product UI',
      tag: 'App',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop',
      description: 'Prototype exploring micro-interactions and 3D transitions.'
    },
    {
      title: 'Design System',
      tag: 'System',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      description: 'A scalable component library with tokens, docs, and examples.'
    }
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-blue-200/80">A few highlights from recent projects</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/90">Get in touch</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <WorkCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
