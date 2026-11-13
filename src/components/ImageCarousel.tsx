const placeholders = [
  "Image placeholder 1",
  "Image placeholder 2",
  "Image placeholder 3",
  "Image placeholder 4",
]

export function ImageCarousel() {
  return (
    <section
      aria-label="Portfolio image gallery"
      tabIndex={0}
      className="editorial-gallery image-carousel-viewport overflow-hidden py-12 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary"
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
                className="editorial-gallery-frame flex aspect-[3/2] w-[72vw] max-w-[30rem] shrink-0 items-center justify-center border text-sm font-medium tracking-wide sm:w-[48vw] md:w-[36vw]"
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
