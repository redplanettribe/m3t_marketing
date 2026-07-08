import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const MANAGEMENT_IMAGE = "/dashboard and organizer app.png"
const ATTENDEE_IMAGE = "/attendee app.png"

function ProductBeat({
  eyebrow,
  title,
  caption,
  imageSrc,
  imageAlt,
  className,
}: {
  eyebrow: string
  title: string
  caption: string
  imageSrc: string
  imageAlt: string
  className?: string
}) {
  return (
    <div className={className}>
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">{eyebrow}</p>
      <h3 className="mt-2 text-balance text-xl font-semibold tracking-tight text-[var(--text)] sm:text-2xl">{title}</h3>
      <div className="mt-5 overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
        <div className="relative aspect-[1200/896]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 1152px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <p className="mt-4 text-sm text-[var(--text-muted)] sm:text-base">{caption}</p>
    </div>
  )
}

export function SocialProofSection() {
  return (
    <Section className="bg-[var(--bg)]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">Trust</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Built for real conference ops.
          </h2>
          <p className="mt-4 text-base text-[var(--text-muted)] sm:text-lg">
            The fastest way to trust it is to see it.
            Watch the demo, then request access to the invite-only Dashboard.
          </p>
        </div>

        <ProductBeat
          className="mt-12 lg:mt-16"
          eyebrow="For organizers"
          title="Dashboard and organizer app"
          caption="Analytics, check-in, sessions, and day-of ops - one system."
          imageSrc={MANAGEMENT_IMAGE}
          imageAlt="m3t analytics dashboard and organizer mobile app on a desk"
        />

        <ProductBeat
          className="mt-16 lg:mt-20"
          eyebrow="For attendees"
          title="What your attendees see"
          caption="Personal agenda, live sessions, and engagement - connected to your ops."
          imageSrc={ATTENDEE_IMAGE}
          imageAlt="Attendee using the m3t mobile app at a conference"
        />
      </Container>
    </Section>
  )
}
