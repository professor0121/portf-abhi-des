import React, { ButtonHTMLAttributes } from "react"
import classNames from "classnames"

type ButtonVariant = "primary" | "secondary"
type ButtonSize = "sm" | "md" | "lg"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  // Base styles
  const baseStyles =
    "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"

  // Variant styles
  const variantStyles = {
    primary: "bg-primary text-surface hover:bg-primary/80 focus:ring-primary",
    secondary: "bg-surface text-primary border border-primary hover:bg-primary/10 focus:ring-primary",
  }

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <button
      className={classNames(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
