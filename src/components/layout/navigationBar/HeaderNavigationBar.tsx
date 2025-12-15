import { NavLink, useLocation } from "react-router-dom"
import { useState } from "react"
import { toggleTheme, getTheme } from "../../..//utils/theme"

/* -----------------------------
   NAV CONFIG
-------------------------------- */
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(getTheme())
  const location = useLocation()

  /* -----------------------------
     CURRENT TITLE
  -------------------------------- */
  const currentTitle =
    NAV_LINKS.find((item) => item.path === location.pathname)?.label ||
    "Abhishek.dev"

  const handleThemeToggle = () => {
    toggleTheme()
    setTheme(getTheme())
  }

  const handleMenuClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Dynamic Title (changes on mobile) */}
        <div className="font-heading text-xl font-bold text-primary md:hidden">
          {currentTitle}
        </div>

        {/* Logo (desktop only) */}
        <NavLink
          to="/"
          className="hidden md:block font-heading text-xl font-bold text-primary"
        >
          Abhishek.dev
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-medium"
                  : "text-muted hover:text-text transition"
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={handleThemeToggle}
            className="ml-4 px-3 py-1 rounded-lg border border-border"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 space-y-4">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={handleMenuClick}
              className={({ isActive }) =>
                `block text-lg ${
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted hover:text-text"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={handleThemeToggle}
            className="w-full mt-4 px-4 py-2 rounded-lg border border-border"
          >
            Toggle Theme
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
