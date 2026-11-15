import { Section } from "@/components/Section"
import { Quote, UserRound } from "lucide-react"

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
            <blockquote className="editorial-review-quote">
              <Quote
                className="editorial-review-quote-icon"
                aria-hidden="true"
              />
              <span>{review.quote}</span>
            </blockquote>
            <figcaption className="editorial-reviewer">
              <UserRound
                className="editorial-reviewer-icon"
                aria-hidden="true"
              />
              {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
