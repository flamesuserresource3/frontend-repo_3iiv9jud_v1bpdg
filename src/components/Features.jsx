import { Rocket, Shield, Zap, Layers } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Lightning-fast performance',
    description:
      'Optimized for speed with a lean stack and elegant animations that feel effortless.',
    icon: Zap,
  },
  {
    title: 'Secure by design',
    description:
      'Best practices baked in. Ship confidently with accessibility and security in mind.',
    icon: Shield,
  },
  {
    title: 'Composable building blocks',
    description:
      'Reusable components that keep your brand cohesive and your workflow efficient.',
    icon: Layers,
  },
  {
    title: 'Launch-ready visuals',
    description:
      'Minimalist aesthetics that highlight your product and drive conversions.',
    icon: Rocket,
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

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(250,204,21,0.06),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to make a splash
          </h2>
          <p className="mt-3 text-gray-400">
            From first impression to final conversion, FluxGrid gives you a polished foundation.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map(({ title, description, icon: Icon }) => (
            <motion.div
              variants={item}
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition will-change-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-black shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-gray-300">{description}</p>
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
