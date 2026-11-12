import { Section } from "@/components/Section"

export function Pricing() {
  return (
    <Section id="pricing" title="Pricing">
      <div className="max-w-2xl border border-black p-6">
        <p className="text-sm uppercase tracking-[0.15em]">Starting From</p>
        <p className="mt-2 text-3xl font-semibold">$000</p>
        <p className="mt-4 text-sm leading-relaxed">
          Placeholder pricing details. Add a short description of what is included, session
          length, package scope, or other relevant information here.
        </p>
        <a
          href="#"
          className="mt-6 inline-block border border-black px-4 py-2 text-sm font-medium underline-offset-4 hover:underline"
        >
          View pricing details
        </a>
      </div>
    </Section>
  )
}
