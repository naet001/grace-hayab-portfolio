import { useEffect, useRef, useState } from "react"
import {
  Award,
  BriefcaseBusiness,
  ChevronDown,
  House,
  Mail,
  Menu,
  MessageSquareText,
  Play,
  Video,
  UserRound,
  WalletCards,
  X,
} from "lucide-react"

const primaryNavItems = [
  { label: "Work", href: "#content", icon: Video },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Pricing", href: "#pricing", icon: WalletCards },
  { label: "Contact", href: "#contact", icon: Mail },
]

const moreNavItems = [
  { label: "Bio", href: "#bio", icon: UserRound },
  { label: "Meet Grace", href: "#meet-grace", icon: Play },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Reviews", href: "#reviews", icon: MessageSquareText },
]

const mobileNavItems = [
  { label: "Home", href: "#hero", icon: House },
  { label: "Bio", href: "#bio", icon: UserRound },
  { label: "Work", href: "#content", icon: Video },
  { label: "Meet Grace", href: "#meet-grace", icon: Play },
  { label: "Services", href: "#services", icon: BriefcaseBusiness },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Reviews", href: "#reviews", icon: MessageSquareText },
  { label: "Pricing", href: "#pricing", icon: WalletCards },
  { label: "Contact", href: "#contact", icon: Mail },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)
  const navigationRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isMobileMenuOpen && !isMoreMenuOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target)
      ) {
        setIsMobileMenuOpen(false)
        setIsMoreMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isMoreMenuOpen) {
          setIsMoreMenuOpen(false)
          moreButtonRef.current?.focus()
        } else if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
          menuButtonRef.current?.focus()
        }
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen, isMoreMenuOpen])

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
            onClick={() => {
              setIsMoreMenuOpen(false)
              setIsMobileMenuOpen((isOpen) => !isOpen)
            }}
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
            className={
              isMobileMenuOpen ? "editorial-nav is-open" : "editorial-nav"
            }
            aria-label="Primary"
          >
            <ul className="editorial-nav-desktop">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>
                    <item.icon
                      className="editorial-nav-icon"
                      aria-hidden="true"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="editorial-more-item">
                <button
                  ref={moreButtonRef}
                  className="editorial-more-button"
                  type="button"
                  aria-expanded={isMoreMenuOpen}
                  aria-controls="more-navigation"
                  onClick={() => setIsMoreMenuOpen((isOpen) => !isOpen)}
                >
                  More
                  <ChevronDown
                    className="editorial-nav-icon editorial-more-chevron"
                    aria-hidden="true"
                  />
                </button>
                <ul
                  id="more-navigation"
                  className="editorial-more-menu"
                  hidden={!isMoreMenuOpen}
                >
                  {moreNavItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={() => setIsMoreMenuOpen(false)}
                      >
                        <item.icon
                          className="editorial-nav-icon"
                          aria-hidden="true"
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <ul className="editorial-nav-mobile">
              {mobileNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon
                      className="editorial-nav-icon"
                      aria-hidden="true"
                    />
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
