import { Section } from "@/components/Section"

const services = [
  {
    title: "Service One",
    description: "Placeholder description for a core service or offering.",
  },
  {
    title: "Service Two",
    description: "Placeholder description outlining what this service includes.",
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
        {services.map((service, index) => (
          <article 
            key={service.title} 
            className={`flex gap-6 border border-black p-4 ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className="flex min-h-32 w-40 items-center justify-center border border-black bg-white text-sm font-medium tracking-wide text-black"
              aria-label="Service image placeholder"
            >
              IMAGE HERE
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-medium">{service.title}</h3>
              <p className="text-sm leading-relaxed">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
