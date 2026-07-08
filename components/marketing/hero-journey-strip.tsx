import { cn } from "@/lib/utils"

const journey = ["Register", "Agenda", "Interact", "Feedback", "Analytics"] as const

const MOBILE_INDENTS = ["ml-0", "ml-4", "ml-8", "ml-12", "ml-16"] as const
const MOBILE_CONNECTOR_INDENTS = ["", "ml-6", "ml-10", "ml-14", "ml-[4.5rem]"] as const
const MOBILE_BAR_WIDTHS = ["w-[6.75rem]", "w-[7.25rem]", "w-[7.75rem]", "w-[8.25rem]", "w-[8.75rem]"] as const

export function HeroJourneyStrip() {
  return (
    <div className="mb-6 mt-8 lg:mb-10 lg:mt-10">
      <p className="text-left text-xs font-semibold uppercase tracking-wide text-[var(--text-subtle)] lg:text-center">
        The loop
      </p>
      <ol className="mx-auto mt-5 flex w-fit flex-col sm:mx-0 sm:w-full sm:grid sm:grid-cols-5 sm:gap-2">
        {journey.map((step, idx) => (
          <li key={step}>
            {idx > 0 ? (
              <div
                className={cn(
                  "mb-1 h-3.5 w-7 rounded-bl-sm border-b border-l border-[var(--border-strong)] sm:hidden",
                  MOBILE_CONNECTOR_INDENTS[idx],
                )}
                aria-hidden
              />
            ) : null}
            <div
              className={cn(
                "rounded-[10px] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--text)]",
                MOBILE_INDENTS[idx],
                MOBILE_BAR_WIDTHS[idx],
                "sm:ml-0 sm:w-auto sm:py-2 sm:text-center",
              )}
            >
              {step}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
