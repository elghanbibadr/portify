import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CreditCard, Download, Search, Eye } from "lucide-react"

export default function ClientInvoices() {
  const invoices = [
    { id: "INV-1234", amount: "$1,250.00", date: "Mar 1, 2025", dueDate: "Mar 15, 2025", status: "pending" },
    { id: "INV-1233", amount: "$1,200.00", date: "Feb 1, 2025", dueDate: "Feb 15, 2025", status: "pending" },
    { id: "INV-1232", amount: "$2,500.00", date: "Jan 1, 2025", dueDate: "Jan 15, 2025", status: "paid" },
    { id: "INV-1231", amount: "$1,800.00", date: "Dec 1, 2024", dueDate: "Dec 15, 2024", status: "paid" },
    { id: "INV-1230", amount: "$3,200.00", date: "Nov 1, 2024", dueDate: "Nov 15, 2024", status: "paid" },
  ]

  const totalPending = invoices
    .filter((inv) => inv.status === "pending")
    .reduce((sum, inv) => sum + Number.parseFloat(inv.amount.replace(/[$,]/g, "")), 0)

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Invoices</h1>
        <p className="text-muted-foreground">View and manage your billing history</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPending.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">2 invoices due</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid This Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$7,500</div>
            <p className="text-xs text-muted-foreground mt-1">3 invoices paid</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Next Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 15</div>
            <p className="text-xs text-muted-foreground mt-1">$1,250 due</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search invoices..." className="pl-9" />
      </div>

      {/* Invoices List */}
      <Card>
        <CardHeader>
          <CardTitle>All Invoices</CardTitle>
          <CardDescription>Your complete billing history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {invoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{invoice.id}</h4>
                    <p className="text-sm text-muted-foreground">
                      Issued {invoice.date} • Due {invoice.dueDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-semibold">{invoice.amount}</p>
                    {invoice.status === "pending" ? (
                      <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                        Pending
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                        Paid
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
