const placeholders = ["Image placeholder 1", "Image placeholder 2", "Image placeholder 3", "Image placeholder 4"]

export function ImageCarousel() {
  return (
    <section
      aria-label="Portfolio image gallery"
      tabIndex={0}
      className="image-carousel-viewport overflow-hidden border-b border-black py-8 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-black"
    >
      <div className="image-carousel-track flex w-max motion-reduce:animate-none">
        {[false, true].map((isDuplicate) => (
          <div
            key={String(isDuplicate)}
            aria-hidden={isDuplicate || undefined}
            className="flex shrink-0 gap-4 pr-4"
          >
            {placeholders.map((placeholder) => (
              <div
                key={placeholder}
                role={isDuplicate ? undefined : "img"}
                aria-label={isDuplicate ? undefined : placeholder}
                className="flex aspect-[3/2] w-[72vw] max-w-[30rem] shrink-0 items-center justify-center border border-black bg-white text-sm font-medium tracking-wide text-black sm:w-[48vw] md:w-[36vw]"
              >
                IMAGE HERE
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
