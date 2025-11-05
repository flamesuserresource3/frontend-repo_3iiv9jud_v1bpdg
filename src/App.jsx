import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-gray-200 py-10 text-center text-sm text-gray-600">
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
