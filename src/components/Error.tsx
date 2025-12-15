import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export interface ErrorProps {
  statusCode?: number
}

const Error = ({ statusCode }: ErrorProps) => {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  if (!hydrated) return null

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-surface text-text">
      <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary mb-4">
        {statusCode || 404}
      </h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">
        Oops! Page not found.
      </h2>
      <p className="text-sm md:text-base mb-6 max-w-md">
        Sorry, the page you are looking for doesn’t exist. Maybe it moved or you
        typed the URL incorrectly.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-surface font-medium rounded-lg hover:bg-primary/80 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default Error
