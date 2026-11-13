import { Section } from "@/components/Section"

const groups = [
  {
    title: "Achievements",
    items: [
      "Placeholder achievement one",
      "Placeholder achievement two",
      "Placeholder achievement three",
    ],
  },
  {
    title: "Programmes",
    items: [
      "Placeholder programme one",
      "Placeholder programme two",
      "Placeholder programme three",
    ],
  },
  {
    title: "Coaching",
    items: [
      "Placeholder coaching highlight one",
      "Placeholder coaching highlight two",
      "Placeholder coaching highlight three",
    ],
  },
  {
    title: "Project Management",
    items: [
      "Placeholder project management example one",
      "Placeholder project management example two",
      "Placeholder project management example three",
    ],
  },
]

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <div className="editorial-grid">
        {groups.map((group) => (
          <article key={group.title} className="editorial-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
