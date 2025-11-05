export default function CTA() {
  return (
    <section id="get-started" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Ship a beautiful SaaS landing in hours — not weeks
            </h3>
            <p className="mt-3 text-gray-600">
              Start free, then upgrade when youre ready. Transparent pricing, no surprises.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-black/90"
              >
                Create your account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-gray-900/10 bg-white/70 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition-colors hover:bg-white"
              >
                View live demo
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">Free for personal projects. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
