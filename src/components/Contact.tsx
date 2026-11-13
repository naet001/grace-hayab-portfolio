import { Section } from "@/components/Section"

export function Contact() {
  return (
    <Section id="contact" title="Contact" tone="brand">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-base leading-relaxed">
          <p>
            <span className="font-medium">Email:</span> hello@example.com
          </p>
          <p>
            <span className="font-medium">Phone:</span> +00 000 000 000
          </p>
          <p>
            <span className="font-medium">Location:</span> City, Country
          </p>
        </div>
        <figure
          className="editorial-hero-art min-h-64"
          aria-label="Contact image placeholder"
        >
          <div
            className="editorial-image-placeholder editorial-image-placeholder--hero"
            aria-hidden="true"
          >
            Image here
          </div>
          <figcaption className="editorial-hero-caption">
            Get in touch
          </figcaption>
        </figure>
      </div>
    </Section>
  )
}
