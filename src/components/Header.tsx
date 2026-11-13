import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Bio", href: "#bio" },
  { label: "Services", href: "#services" },
  { label: "Achievements", href: "#achievements" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigationRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="editorial-header sticky top-0 z-10">
      <div className="editorial-header-inner mx-auto flex items-center justify-between gap-4 px-6 py-2 sm:gap-8">
        <a href="#hero" className="editorial-brand flex items-center gap-3">
          <svg
            className="brand-mark size-6"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M2 2h20v7H9v13H2z" fill="currentColor" />
            <path d="M13 13h9v9h-9z" fill="var(--brand-blue)" />
          </svg>
          Grace Hayab
        </a>
        <div className="editorial-navigation" ref={navigationRef}>
          <button
            ref={menuButtonRef}
            className="editorial-menu-button"
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
          >
            {isMobileMenuOpen ? (
              <X aria-hidden="true" size={18} />
            ) : (
              <Menu aria-hidden="true" size={18} />
            )}
            <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
          </button>
          <nav
            id="primary-navigation"
            className={`editorial-nav${isMobileMenuOpen ? " is-open" : ""}`}
            aria-label="Primary"
          >
            <ul className="flex flex-wrap gap-x-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
