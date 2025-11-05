import { User, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/5"
        >
          <a href="#home" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-300 text-black shadow">
              <User className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-white">Your Name</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-white shadow-sm backdrop-blur transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              <span>Say hello</span>
            </a>
          </div>
        </motion.div>
      </div>
    </header>
  )
}
