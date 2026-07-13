import Image from "next/image"
import { useTranslations } from "next-intl"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const imageSrcs = [
  "/images/product hightlights/swag without the caos.png",
  "/images/product hightlights/own agenda.png",
  "/images/product hightlights/reach everyone.png",
  "/images/product hightlights/sponsor value.png",
  "/images/product hightlights/networking actually happen.png",
  "/images/product hightlights/whole year's impact.png",
] as const

interface HighlightItem {
  heading: string
  subheading: string
  imageAlt: string
}

function ProductHighlight({
  highlight,
  imageSrc,
  learnMoreLabel,
  reversed,
}: {
  highlight: HighlightItem
  imageSrc: string
  learnMoreLabel: string
  reversed: boolean
}) {
  return (
    <div
      className={
        reversed
          ? "grid gap-8 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-16"
          : "grid gap-8 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-16"
      }
    >
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <h3 className="text-balance text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl">
          {highlight.heading}
        </h3>
        <p className="mt-3 text-base text-[var(--text-muted)] sm:text-lg">{highlight.subheading}</p>
        <a
          href="#next-step"
          className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-hover)]"
        >
          {learnMoreLabel} <span aria-hidden>→</span>
        </a>
      </div>

      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <div className="relative aspect-[1184/864] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <Image
            src={imageSrc}
            alt={highlight.imageAlt}
            fill
            sizes="(min-width: 1024px) 640px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export function ProductHighlightsSection() {
  const t = useTranslations("Home.productHighlights")
  const items = t.raw("items") as HighlightItem[]
  const learnMoreLabel = t("learnMore")

  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">{t("eyebrow")}</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            {t("headline")}
          </h2>
        </div>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {items.map((highlight, index) => (
            <ProductHighlight
              key={highlight.heading}
              highlight={highlight}
              imageSrc={imageSrcs[index]}
              learnMoreLabel={learnMoreLabel}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
