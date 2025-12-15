import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PAGE_TITLES } from "../config/pageTitle"

export const usePageTitle = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || "Abhishek | Portfolio"
  }, [pathname])
}
