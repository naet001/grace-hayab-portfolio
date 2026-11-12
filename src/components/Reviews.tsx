import { Section } from "@/components/Section"

const reviews = [
  {
    quote:
      "Placeholder review text from a participant or customer. Short and clear feedback goes here.",
    name: "Participant Name",
  },
  {
    quote: "Another placeholder testimonial highlighting a positive experience or outcome.",
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
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <figure key={review.name} className="border border-black p-4">
            <blockquote className="text-sm leading-relaxed">“{review.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-medium">— {review.name}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
