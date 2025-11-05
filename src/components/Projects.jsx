import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Pulse UI Kit',
    description: 'A composable, themeable component system for React + Tailwind.',
    tags: ['React', 'Tailwind', 'Design System'],
    links: { live: '#', repo: '#' },
  },
  {
    title: 'Voyager Dashboard',
    description: 'Analytics dashboard with charts, dark mode, and smooth motion.',
    tags: ['Vite', 'Framer Motion', 'Charts'],
    links: { live: '#', repo: '#' },
  },
  {
    title: 'Nimbus Landing',
    description: 'High-converting marketing page with responsive layouts.',
    tags: ['Next.js', 'SEO', 'A/B Testing'],
    links: { live: '#', repo: '#' },
  },
]

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, duration: 0.5, ease: 'easeOut' },
  },
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="work" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(250,204,21,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-gray-400">A few recent projects that showcase my focus on performance and polish.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div
              variants={item}
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-black shadow">
                  <Folder className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-2 opacity-80 transition-opacity group-hover:opacity-100">
                  <a href={p.links.live} aria-label="Live" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                  <a href={p.links.repo} aria-label="Repo" className="rounded-lg border border-white/10 bg-white/5 p-2 hover:bg-white/10">
                    <Github className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(250, 204, 21, 0.12), transparent)' }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
