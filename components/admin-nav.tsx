"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdminNavProps {
  onNavigate?: () => void
}

export function AdminNav({ onNavigate }: AdminNavProps) {
  const pathname = usePathname()

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/clients", label: "Clients", icon: Users },
    { href: "/admin/projects", label: "Projects", icon: FolderKanban },
    { href: "/admin/documents", label: "Documents", icon: FileText },
    { href: "/admin/invoices", label: "Invoices", icon: CreditCard },
    { href: "/admin/messages", label: "Messages", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="flex flex-col h-full bg-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">CP</span>
          </div>
          <div>
            <span className="font-semibold text-lg block">ClientPortal</span>
            <span className="text-xs text-muted-foreground">Admin Panel</span>
          </div>
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
              onClick={onNavigate}
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
