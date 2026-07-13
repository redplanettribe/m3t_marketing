import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"

const highlights = [
  {
    heading: "Hand out swag without the chaos",
    subheading:
      "Scan a QR code to deliver anything, anytime — no lines, no duplicates, no lost track of what went out.",
    feature: "Deliverable system",
    capability: "Deliver asynchronously and keep track of it — scan a QR code and deliver stuff.",
    benefit: "No registration bottlenecks, no risk of delivering things twice, no more long queues.",
    imageSrc: "/images/product hightlights/swag without the caos.png",
    imageAlt: "Deliverable system screenshot",
  },
  {
    heading: "Let attendees build their own agenda",
    subheading:
      "Attendees book and cancel sessions in real time, so every seat fills and no one's left guessing where to go.",
    feature: "Session booking system",
    capability: "Allow attendees to book and cancel bookings of individual sessions according to capacity.",
    benefit: "Attendees know what sessions have available spots and always know where to go next.",
    imageSrc: "/images/product hightlights/own agenda.png",
    imageAlt: "Session booking system screenshot",
  },
  {
    heading: "Reach everyone, not just who you can find",
    subheading: "Chat and instant announcements keep every attendee in the loop — no staff running laps required.",
    feature: "Chat and announcements",
    capability:
      "General chat where people can interact with organizers and other attendees, plus announcements broadcasted to all attendees' notifications.",
    benefit: "Attendees stay updated, whether the update comes from organizers or other attendees.",
    imageSrc: "/images/product hightlights/reach everyone.png",
    imageAlt: "Chat and announcements screenshot",
  },
  {
    heading: "Prove sponsor value automatically",
    subheading: "Virtual booths capture every interaction, and reports build themselves — no manual compiling.",
    feature: "Sponsor interactions and reports",
    capability:
      "Virtual booths where attendees interact with sponsors and their offerings, with engagement tracking and automatic reports per sponsor.",
    benefit: "An easy way for attendees to find sponsors, and automatic reports that prove value to each sponsor.",
    imageSrc: "/images/product hightlights/sponsor value.png",
    imageAlt: "Sponsor interactions and reports screenshot",
  },
  {
    heading: "Make networking actually happen",
    subheading: "A discoverability hub connects attendees to the right people, and every interaction is tracked for you.",
    feature: "Networking and discoverability",
    capability: "A networking section to discover people and interact with them.",
    benefit: "Attendees have an easy way to discover people and interact, and every interaction is tracked.",
    imageSrc: "/images/product hightlights/networking actually happen.png",
    imageAlt: "Networking and discoverability screenshot",
  },
  {
    heading: "Your whole year's impact, one click away",
    subheading: "Automatically roll up every event into one instant org-wide impact report.",
    feature: "Automatic org impact reports",
    capability: "Allow org organizers to generate an automatic impact report.",
    benefit: "An automatic, instant report of all the impact the org has had.",
    imageSrc: "/images/product hightlights/whole year's impact.png",
    imageAlt: "Automatic org impact report screenshot",
  },
] as const

function HighlightBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">{label}</p>
      <p className="mt-1 text-sm text-[var(--text-muted)]">{value}</p>
    </div>
  )
}

function ProductHighlight({
  highlight,
  reversed,
}: {
  highlight: (typeof highlights)[number]
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
          Learn more <span aria-hidden>→</span>
        </a>
      </div>

      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <div className="relative aspect-[1184/864] overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <Image
            src={highlight.imageSrc}
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
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)]">What's inside</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">
            Everything a control tower needs.
          </h2>
        </div>

        <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
          {highlights.map((highlight, index) => (
            <ProductHighlight key={highlight.feature} highlight={highlight} reversed={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
