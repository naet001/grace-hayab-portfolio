export function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-svh scroll-mt-24 flex-col justify-center border-b border-black py-16"
    >
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-black">Portfolio Template</p>
          <h1 className="text-4xl font-semibold leading-tight text-black sm:text-5xl">
            Your Name
          </h1>
          <p className="max-w-prose text-base leading-relaxed text-black">
            A short introduction goes here. This is a placeholder hero section for a clear,
            minimal personal portfolio.
          </p>
        </div>
        <div
          className="flex min-h-64 items-center justify-center border border-black bg-white text-sm font-medium tracking-wide text-black md:min-h-96"
          aria-label="Hero image placeholder"
        >
          IMAGE HERE
        </div>
      </div>
    </section>
  )
}
