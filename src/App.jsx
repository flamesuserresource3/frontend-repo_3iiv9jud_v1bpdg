import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] text-gray-100 selection:bg-yellow-300 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} FluxGrid. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
