import { Section } from "@/components/Section"

const plans = [
  {
    name: "Starter",
    price: "$400",
    description: "A focused design sprint for a simple, high-impact project.",
    features: ["1 landing page", "Brand direction", "2 rounds of revisions"],
    featured: false,
  },
  {
    name: "Signature",
    price: "$1,200",
    description: "A complete digital presence designed to look polished and convert.",
    features: [
      "Up to 4 custom sections",
      "Responsive build",
      "Launch support",
    ],
    featured: true,
  },
  {
    name: "Custom",
    price: "Let's talk",
    description: "Tailored strategy, development, and design for bigger product work.",
    features: ["Custom scope", "Ongoing collaboration", "Priority support"],
    featured: false,
  },
]

export function Pricing() {
  return (
    <Section id="pricing" title="Pricing">
      <div className="editorial-pricing">
        <div className="editorial-pricing-header">
          <p className="editorial-kicker">Simple packages</p>
          <p className="editorial-pricing-summary">
            Clear options for launches, refreshes, and fully tailored work.
          </p>
        </div>

        <div className="editorial-pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`editorial-pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <span className="editorial-plan-badge">Most popular</span>}
              <div className="editorial-plan-head">
                <p className="editorial-plan-name">{plan.name}</p>
                <p className="editorial-plan-price">{plan.price}</p>
              </div>
              <p className="editorial-plan-description">{plan.description}</p>
              <ul className="editorial-plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="editorial-pricing-link">
                {plan.featured ? "Book this package" : "Get started"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}
