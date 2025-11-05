import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-sm sm:p-12"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Ship a beautiful SaaS landing in hours — not weeks
            </h3>
            <p className="mt-3 text-gray-400">
              Start free, then upgrade when you’re ready. Transparent pricing, no surprises.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Create your account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur transition-colors hover:bg-white/10"
              >
                View live demo
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">Free for personal projects. Cancel anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
