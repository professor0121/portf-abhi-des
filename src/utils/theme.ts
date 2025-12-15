const THEME_KEY = "theme"

export const getTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light"
  return (localStorage.getItem(THEME_KEY) as "light" | "dark") || "light"
}

export const setTheme = (theme: "light" | "dark") => {
  if (typeof window === "undefined") return

  localStorage.setItem(THEME_KEY, theme)

  document.documentElement.classList.toggle("dark", theme === "dark")
}

export const toggleTheme = () => {
  const current = getTheme()
  setTheme(current === "dark" ? "light" : "dark")
}
