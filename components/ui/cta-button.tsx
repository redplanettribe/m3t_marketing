import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface CTAButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: "primary" | "secondary" | "outline" | "white-outline"
    size?: "default" | "sm" | "lg"
    icon?: LucideIcon
    iconPosition?: "left" | "right"
    children: React.ReactNode
}

// Reusable Tailwind CSS classes for CTA buttons
const ctaButtonVariants = {
    primary: "bg-gradient-to-r from-[var(--cta-primary)] to-[var(--cta-secondary)] hover:from-[var(--cta-primary-hover)] hover:to-[var(--cta-accent)] text-white shadow-lg hover:shadow-xl border-0",
    secondary: "bg-[var(--cta-primary)] hover:bg-[var(--cta-primary-hover)] text-white",
    outline: "bg-transparent border-2 border-[var(--cta-primary)]/30 hover:border-[var(--cta-primary)]/50 hover:bg-[var(--cta-lighter)]",
    "white-outline": "bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50",
}

const ctaButtonSizes = {
    default: "px-6 py-3 text-base",
    sm: "px-4 py-2 text-sm",
    lg: "px-8 py-4 text-lg",
}

const iconSizes = {
    default: "h-4 w-4",
    sm: "h-3.5 w-3.5",
    lg: "h-5 w-5",
}

const CTAButton = React.forwardRef<HTMLAnchorElement, CTAButtonProps>(
    ({
        className,
        variant = "primary",
        size = "default",
        icon: Icon,
        iconPosition = "left",
        children,
        ...props
    }, ref) => {
        return (
            <a
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    // Variant styles
                    ctaButtonVariants[variant],
                    // Size styles
                    ctaButtonSizes[size],
                    className,
                )}
                ref={ref}
                {...props}
            >
                {Icon && iconPosition === "left" && (
                    <Icon
                        className={cn(
                            iconSizes[size],
                            "transition-transform duration-300 group-hover:translate-x-1"
                        )}
                        aria-hidden="true"
                    />
                )}
                {children}
                {Icon && iconPosition === "right" && (
                    <Icon
                        className={cn(
                            iconSizes[size],
                            "transition-transform duration-300 group-hover:translate-x-1"
                        )}
                        aria-hidden="true"
                    />
                )}
            </a>
        )
    },
)
CTAButton.displayName = "CTAButton"

export { CTAButton, ctaButtonVariants, ctaButtonSizes }
