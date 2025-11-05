import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden" aria-label="Hero">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Dark overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0b0f]/80 via-[#0a0b0f]/30 to-[#0a0b0f]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(250,204,21,0.08),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="pointer-events-none max-w-3xl"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-gray-200 shadow backdrop-blur">
            Introducing FluxGrid
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Launch your SaaS in elegant dark mode
          </h1>
          <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl">
            A modern, animated experience with a live Spline background. Minimal, abstract, and built to convert.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#get-started"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400"
        >
          <span>No credit card required</span>
          <span>•</span>
          <span>Start in under 2 minutes</span>
          <span>•</span>
          <span>Responsive by default</span>
        </motion.div>
      </div>
    </section>
  )
}
