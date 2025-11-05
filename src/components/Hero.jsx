import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" aria-label="Hero">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient and vignette overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(255,255,255,0.7),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <div className="pointer-events-none max-w-3xl">
          <span className="inline-block rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 shadow backdrop-blur supports-[backdrop-filter]:bg-white/40">Introducing FluxGrid</span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            A modern, minimalist way to launch your SaaS
          </h1>
          <p className="mt-4 text-base text-gray-700 sm:text-lg md:text-xl">
            Beautifully simple. Blazingly fast. Designed to convert — on any device.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-black/90"
          >
            Get started
          </a>
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-gray-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition-colors hover:bg-white"
          >
            Explore features
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-600">
          <span>No credit card required</span>
          <span>•</span>
          <span>Start in under 2 minutes</span>
          <span>•</span>
          <span>Responsive by default</span>
        </div>
      </div>
    </section>
  )
}
