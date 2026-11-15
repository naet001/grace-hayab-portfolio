import { ArrowUp, Copyright } from "lucide-react"

export function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="editorial-footer-inner mx-auto flex flex-col gap-3 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="editorial-footer-copyright">
          <Copyright className="editorial-footer-icon" aria-hidden="true" />©
          2026 Grace Hayab. All rights reserved.
        </p>
        <a
          href="#hero"
          className="editorial-back-to-top font-semibold underline-offset-4 hover:underline"
        >
          Back to top
          <ArrowUp className="editorial-footer-icon" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
