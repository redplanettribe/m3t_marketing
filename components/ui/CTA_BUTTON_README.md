# CTAButton Component

A reusable Call-to-Action button component with icon support and multiple variants.

## Features

- 🎨 Four variants: `primary`, `secondary`, `outline`, `white-outline`
- 📏 Three sizes: `sm`, `default`, `lg`
- 🎯 Icon support with configurable position (`left` or `right`)
- ✨ Smooth animations and hover effects
- 🎭 Consistent styling with CSS variables
- ♿ Accessible by default

## When to Use CTAButton vs Button

### Use `CTAButton` for:
- Primary call-to-action buttons (e.g., "Apoya con tu compra", "Contactar ahora")
- Secondary action buttons (e.g., "Ver todos los eventos", "Suscribirse")
- External links with emphasis
- Navigation to important pages
- Buttons with icons that need consistent styling
- Any button on colored backgrounds (use `white-outline` variant)

### Use regular `Button` component for:
- Navigation within complex UI (tabs, filters)
- Ghost buttons for subtle actions
- Form buttons (submit, cancel)
- Buttons that need `asChild` pattern with complex children
- Secondary navigation that shouldn't draw attention

## Usage

### Basic Usage

```tsx
import { CTAButton } from "@/components/ui/cta-button"

<CTAButton href="/contact">
  Contact Us
</CTAButton>
```

### With Icon (Right Position - Default)

```tsx
import { CTAButton } from "@/components/ui/cta-button"
import { ArrowRight } from "lucide-react"

<CTAButton 
  variant="primary" 
  icon={ArrowRight} 
  iconPosition="right"
  href="/shop"
>
  Shop Now
</CTAButton>
```

### With Icon (Left Position)

```tsx
import { CTAButton } from "@/components/ui/cta-button"
import { ShoppingCart } from "lucide-react"

<CTAButton 
  variant="secondary" 
  icon={ShoppingCart} 
  iconPosition="left"
  href="/cart"
>
  View Cart
</CTAButton>
```

### Variants

#### Primary (Gradient)
```tsx
<CTAButton variant="primary" href="/action">
  Primary Action
</CTAButton>
```

#### Secondary (Solid Color)
```tsx
<CTAButton variant="secondary" href="/action">
  Secondary Action
</CTAButton>
```

#### Outline
```tsx
<CTAButton variant="outline" href="/action">
  Outline Action
</CTAButton>
```

#### White Outline (for colored backgrounds)
```tsx
<CTAButton variant="white-outline" href="/action">
  White Outline Action
</CTAButton>
```
Use this variant when the button is placed on a colored background (like gradient sections).

### Sizes

```tsx
{/* Small */}
<CTAButton size="sm" href="/action">Small Button</CTAButton>

{/* Default */}
<CTAButton size="default" href="/action">Default Button</CTAButton>

{/* Large */}
<CTAButton size="lg" href="/action">Large Button</CTAButton>
```

### External Links

```tsx
<CTAButton 
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  External Link
</CTAButton>
```

### With Custom Classes

```tsx
<CTAButton 
  variant="primary"
  className="w-full md:w-auto"
  href="/action"
>
  Custom Styled Button
</CTAButton>
```

## Props

| Prop           | Type                                        | Default     | Description                    |
| -------------- | ------------------------------------------- | ----------- | ------------------------------ |
| `variant`      | `"primary"` \| `"secondary"` \| `"outline"` | `"primary"` | Visual style variant           |
| `size`         | `"sm"` \| `"default"` \| `"lg"`             | `"default"` | Button size                    |
| `icon`         | `LucideIcon`                                | `undefined` | Optional icon component        |
| `iconPosition` | `"left"` \| `"right"`                       | `"left"`    | Position of the icon           |
| `className`    | `string`                                    | `undefined` | Additional CSS classes         |
| `children`     | `ReactNode`                                 | required    | Button content                 |
| `href`         | `string`                                    | required    | Link destination               |
| ...rest        | `AnchorHTMLAttributes`                      | -           | All standard anchor attributes |

## Reusable Tailwind Classes

The component exports reusable Tailwind class objects that can be used elsewhere:

```tsx
import { ctaButtonVariants, ctaButtonSizes } from "@/components/ui/cta-button"

// Use in your own components
const myButtonClasses = cn(
  "base-classes",
  ctaButtonVariants.primary,
  ctaButtonSizes.lg
)
```

### Available Exports

- `ctaButtonVariants`: Styling for different button variants
- `ctaButtonSizes`: Padding and text size classes for different sizes

## CSS Variables

The component uses the following CSS variables for theming:

- `--cta-primary`: Primary CTA color
- `--cta-secondary`: Secondary gradient color
- `--cta-primary-hover`: Primary hover state
- `--cta-accent`: Accent color for gradients
- `--cta-lighter`: Light background for outline variant

## Examples from the Codebase

### Hero CTA
```tsx
<CTAButton
  variant="primary"
  size="lg"
  icon={ArrowRight}
  iconPosition="right"
  href={siteConfig.ecommerce}
  target="_blank"
  rel="noopener noreferrer"
  className="group"
>
  Apoya con tu compra
</CTAButton>
```

### Footer CTA
```tsx
<CTAButton
  variant="secondary"
  size="lg"
  href={siteConfig.ecommerce}
  target="_blank"
  rel="noopener noreferrer"
>
  Ir a la tienda
</CTAButton>
```

### Event Card
```tsx
<CTAButton
  variant="secondary"
  size="default"
  href={event.ticketUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="w-full"
>
  Obtener entrada
</CTAButton>
```
