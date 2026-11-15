import { Megaphone } from "lucide-react"

export function Hero() {
  return (
    <section id="hero" className="editorial-hero scroll-mt-24 px-6">
      <div className="editorial-hero-grid mx-auto">
        <div className="editorial-hero-copy">
          <h1>
            Grace <span>Hayab</span>
          </h1>
          <p className="editorial-role">
            <Megaphone className="editorial-role-icon" aria-hidden="true" />
            Social Media Manager
          </p>
          <p>
            A short introduction goes here. This is a placeholder hero section
            for a clear, minimal personal portfolio.
          </p>
        </div>
        <figure
          className="editorial-hero-art"
          aria-label="Hero image placeholder"
        >
          <div
            className="editorial-image-placeholder editorial-image-placeholder--hero"
            aria-hidden="true"
          >
            Image here
          </div>
          <figcaption className="editorial-hero-caption">
            Portfolio · Grace Hayab
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
