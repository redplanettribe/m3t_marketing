import Image from "next/image"
import { Github } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "@/components/ui/container"
import { CTAButton } from "@/components/ui/cta-button"

export function MarketingHero() {
  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#1a0a12] via-[#12081a] to-[#0a0a14] text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[var(--cta-primary)]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-80 rounded-full bg-[var(--cta-accent)]/25 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo-white.svg"
              alt="Multi-Track Ticketing"
              width={140}
              height={140}
              className="size-28 shrink-0 drop-shadow-lg sm:size-32"
              priority
            />
          </div>
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">Open source · Free</p>
          <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Event management for complex, multi-track programs
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg text-white/75 sm:text-xl">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
            <CTAButton
              href={siteConfig.managerUrl}
              variant="primary"
              size="lg"
              rel="noopener noreferrer"
              target="_blank"
            >
              {siteConfig.managerCtaLabel}
            </CTAButton>
            <CTAButton
              href={siteConfig.githubOrg}
              variant="white-outline"
              size="lg"
              icon={Github}
              className="group"
              rel="noopener noreferrer"
              target="_blank"
            >
              Explore on GitHub
            </CTAButton>
          </div>
        </div>
      </Container>
    </div>
  )
}
