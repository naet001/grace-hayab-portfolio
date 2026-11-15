import { Section } from "@/components/Section"
import { Mail, MapPin, Phone } from "lucide-react"

export function Contact() {
  return (
    <Section id="contact" title="Contact" tone="brand">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-base leading-relaxed">
          <p className="editorial-contact-method">
            <Mail className="editorial-contact-icon" aria-hidden="true" />
            <span>
              <span className="font-medium">Email:</span> hello@example.com
            </span>
          </p>
          <p className="editorial-contact-method">
            <Phone className="editorial-contact-icon" aria-hidden="true" />
            <span>
              <span className="font-medium">Phone:</span> +00 000 000 000
            </span>
          </p>
          <p className="editorial-contact-method">
            <MapPin className="editorial-contact-icon" aria-hidden="true" />
            <span>
              <span className="font-medium">Location:</span> City, Country
            </span>
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
