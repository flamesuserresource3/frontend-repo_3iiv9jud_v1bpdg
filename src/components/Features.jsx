import { Rocket, Shield, Zap, Layers } from 'lucide-react'

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

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to make a splash
          </h2>
          <p className="mt-3 text-gray-600">
            From first impression to final conversion, FluxGrid gives you a polished foundation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-rose-400 text-white shadow">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{description}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(60% 60% at 50% 0%, rgba(244, 63, 94, 0.12), transparent)'}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
