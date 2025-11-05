import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-white/10 dark:bg-white/10">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-rose-400 text-white shadow">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">FluxGrid</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600 dark:text-gray-200">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
            <a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white">Sign in</button>
            <button className="inline-flex items-center rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black/90 dark:bg-white dark:text-gray-900 dark:hover:bg-white">Get started</button>
          </div>
        </div>
      </div>
    </header>
  )
}
