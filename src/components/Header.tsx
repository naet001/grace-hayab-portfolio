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
  return (
    <header className="editorial-header sticky top-0 z-10">
      <div className="editorial-header-inner mx-auto flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <a href="#hero" className="editorial-brand flex items-center gap-3">
          <svg
            className="brand-mark size-7"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M2 2h20v7H9v13H2z" fill="currentColor" />
            <path d="M13 13h9v9h-9z" fill="var(--brand-blue)" />
          </svg>
          Grace Hayab
        </a>
        <nav className="editorial-nav" aria-label="Primary">
          <ul className="flex flex-wrap gap-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
