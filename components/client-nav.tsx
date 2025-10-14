"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FolderKanban, FileText, CreditCard, MessageSquare, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/client/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/client/projects", label: "Projects", icon: FolderKanban },
    { href: "/client/documents", label: "Documents", icon: FileText },
    { href: "/client/invoices", label: "Invoices", icon: CreditCard },
    { href: "/client/messages", label: "Messages", icon: MessageSquare },
    { href: "/client/profile", label: "Profile", icon: User },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CP</span>
          </div>
          <span className="font-semibold text-lg">ClientPortal</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground" asChild>
          <Link href="/login">
            <LogOut className="h-4 w-4 mr-3" />
            Log out
          </Link>
        </Button>
      </div>
    </div>
  )
}
