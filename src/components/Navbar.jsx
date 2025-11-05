import { Rocket } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/5"
        >
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-black shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">FluxGrid</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#about" className="hover:text-white">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-gray-300 hover:text-white">Sign in</button>
            <button className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black shadow hover:bg-white/90">Get started</button>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
