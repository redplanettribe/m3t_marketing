import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  icon?: LucideIcon
  iconPosition?: "left" | "right"
  children: React.ReactNode
}

const ctaButtonVariants = {
  primary:
    "bg-[var(--brand)] text-white hover:bg-[var(--brand-hover)] border border-transparent shadow-sm",
  outline:
    "bg-transparent text-[var(--text)] border border-[var(--border-strong)] hover:bg-[var(--surface-2)]",
  ghost:
    "bg-transparent text-[var(--text-muted)] border border-transparent hover:text-[var(--text)] hover:bg-[var(--surface-2)]",
}

const ctaButtonSizes = {
  default: "h-10 px-4 text-sm",
  sm: "h-9 px-3 text-sm",
  lg: "h-12 px-6 text-base",
}

const iconSizes = {
  default: "h-4 w-4",
  sm: "h-3.5 w-3.5",
  lg: "h-5 w-5",
}

const CTAButton = React.forwardRef<HTMLAnchorElement, CTAButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      icon: Icon,
      iconPosition = "left",
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          ctaButtonVariants[variant],
          ctaButtonSizes[size],
          className,
        )}
        ref={ref}
        {...props}
      >
        {Icon && iconPosition === "left" && <Icon className={cn(iconSizes[size])} aria-hidden="true" />}
        {children}
        {Icon && iconPosition === "right" && <Icon className={cn(iconSizes[size])} aria-hidden="true" />}
      </a>
    )
  },
)
CTAButton.displayName = "CTAButton"

export { CTAButton, ctaButtonVariants, ctaButtonSizes }
