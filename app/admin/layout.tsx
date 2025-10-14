"use client"

import type React from "react"
import { AdminNav } from "@/components/admin-nav"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-screen">
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <AdminNav />
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden border-b border-border bg-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">CP</span>
            </div>
            <div>
              <span className="font-semibold text-lg block">ClientPortal</span>
              <span className="text-xs text-muted-foreground">Admin Panel</span>
            </div>
          </div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <AdminNav onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
