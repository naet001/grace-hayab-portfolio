import { Section } from "@/components/Section"
import {
  placeholderVideoPoster,
  placeholderVideoSrc,
  VideoSlot,
} from "@/components/VideoSlot"

const services = [
  {
    title: "Service One",
    description: "Placeholder description for a core service or offering.",
  },
  {
    title: "Service Two",
    description:
      "Placeholder description outlining what this service includes.",
  },
  {
    title: "Service Three",
    description: "Placeholder description for another area of work or support.",
  },
]

export function Services() {
  return (
    <Section id="services" title="What I Do / Services">
      <div className="space-y-6">
        {services.map((service) => (
          <article key={service.title} className="editorial-service">
            <div
              className="editorial-service-art"
              role="img"
              aria-label="Service image placeholder"
            >
              <span>Image here</span>
            </div>
            <div className="editorial-row-copy">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
        <article className="editorial-service">
          <div className="editorial-service-art">
            <VideoSlot
              title="Meet Grace"
              variant="content"
              src={placeholderVideoSrc}
              poster={placeholderVideoPoster}
            />
          </div>
          <div className="editorial-row-copy">
            <h3>Meet Grace</h3>
            <p>
              Three-second placeholder video. Replace with Grace&apos;s
              introduction.
            </p>
          </div>
        </article>
      </div>
    </Section>
  )
}
