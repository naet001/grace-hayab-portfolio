import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  children: ReactNode
  tone?: "default" | "brand"
}

export function Section({
  id,
  title,
  children,
  tone = "default",
}: SectionProps) {
  const isBrand = tone === "brand"

  return (
    <section
      id={id}
      className={cn("editorial-section px-6", isBrand && "editorial-contact")}
    >
      <div className="editorial-section-inner mx-auto">
        <div className="editorial-section-heading">
          <h2>{title}</h2>
        </div>
        <div className={cn("editorial-copy", id === "bio" && "max-w-none")}>
          {children}
        </div>
      </div>
    </section>
  )
}
