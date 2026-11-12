import { Section } from "@/components/Section"

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-sm leading-relaxed">
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
        <div
          className="flex min-h-40 items-center justify-center border border-black bg-white text-sm font-medium tracking-wide text-black"
          aria-label="Contact image placeholder"
        >
          IMAGE HERE
        </div>
      </div>
    </Section>
  )
}
