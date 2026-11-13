import { Section } from "@/components/Section"

const reviews = [
  {
    quote:
      "Placeholder review text from a participant or customer. Short and clear feedback goes here.",
    name: "Participant Name",
  },
  {
    quote:
      "Another placeholder testimonial highlighting a positive experience or outcome.",
    name: "Customer Name",
  },
  {
    quote:
      "A third placeholder review to show how testimonials can be presented on this page.",
    name: "Client Name",
  },
]

export function Reviews() {
  return (
    <Section id="reviews" title="Reviews">
      <div className="editorial-reviews">
        {reviews.map((review) => (
          <figure key={review.name} className="editorial-review">
            <blockquote>{review.quote}</blockquote>
            <figcaption>{review.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
