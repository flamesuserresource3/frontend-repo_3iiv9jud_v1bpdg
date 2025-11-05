import { motion } from 'framer-motion'
import { Github, FileText, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      {/* High-performance layered gradients background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#0a0b0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(250,204,21,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_20%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b0f]/40 to-[#0a0b0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 shadow backdrop-blur">
            Designer • Frontend Engineer
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Crafting sleek, performant web experiences
          </h1>
          <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl">
            I blend design systems, motion, and modern frameworks to build products that feel fast and delightful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            View work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-colors hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#resume"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-colors hover:bg-white/10"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
