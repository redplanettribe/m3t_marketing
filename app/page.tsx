import { generateSEO } from "@/lib/seo"
import { siteConfig } from "@/config/site"

export const metadata = generateSEO()

export default function HomePage() {
  return (
    <main id="main-content" className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-semibold text-foreground">{siteConfig.name}</h1>
      <p className="mt-2 text-center text-muted-foreground">{siteConfig.description}</p>
    </main>
  )
}
