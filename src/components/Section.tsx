import type { ReactNode } from "react"

type SectionProps = {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-black py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 text-2xl font-semibold text-black">{title}</h2>
        <div className="space-y-4 text-black">{children}</div>
      </div>
    </section>
  )
}
