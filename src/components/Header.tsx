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
    <header className="sticky top-0 z-10 border-b border-black bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-black">
          YOUR NAME
        </a>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-black">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="underline-offset-4 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
