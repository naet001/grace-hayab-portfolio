import { Section } from "@/components/Section"

export function Pricing() {
  return (
    <Section id="pricing" title="Pricing">
      <div className="editorial-pricing">
        <p className="editorial-kicker">Starting From</p>
        <p className="editorial-price">$000</p>
        <p className="mt-6 max-w-2xl leading-relaxed">
          Placeholder pricing details. Add a short description of what is
          included, session length, package scope, or other relevant information
          here.
        </p>
        <a href="#" className="editorial-pricing-link mt-7">
          View pricing details
        </a>
      </div>
    </Section>
  )
}
