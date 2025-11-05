import { motion } from 'framer-motion'
import { Code } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About me</h2>
            <p className="mt-4 text-gray-300">
              I’m a frontend engineer with a design background, focused on creating fast, accessible, and
              visually cohesive web apps. I love crafting micro-interactions and design systems that scale.
            </p>
            <p className="mt-3 text-gray-400">
              My stack includes React, Vite, Tailwind, TypeScript, and Framer Motion. I care deeply about
              performance and thoughtful UX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-sm">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-black shadow">
                <Code className="h-5 w-5" />
              </div>
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-300">
                <li>React / Vite</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Node / API</li>
                <li>Accessibility</li>
              </ul>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(250,204,21,0.08),transparent)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
