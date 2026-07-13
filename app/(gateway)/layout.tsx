import type React from "react"
import { RootHtmlShell } from "@/components/root-html-shell"

export default function GatewayLayout({ children }: { children: React.ReactNode }) {
  return <RootHtmlShell lang="en">{children}</RootHtmlShell>
}
