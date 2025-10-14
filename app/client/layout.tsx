import type React from "react"
import { ClientNav } from "@/components/client-nav"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <ClientNav />
      </aside>
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
