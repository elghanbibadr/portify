import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Search, Filter } from "lucide-react"

export default function ClientDocuments() {
  const documents = [
    { name: "Project Proposal.pdf", size: "2.4 MB", date: "Mar 1, 2025", category: "Proposals" },
    { name: "Contract Agreement.docx", size: "1.8 MB", date: "Feb 28, 2025", category: "Contracts" },
    { name: "Design Mockups.fig", size: "5.1 MB", date: "Feb 25, 2025", category: "Design" },
    { name: "Brand Guidelines.pdf", size: "3.2 MB", date: "Feb 20, 2025", category: "Brand" },
    { name: "Invoice #1234.pdf", size: "0.5 MB", date: "Feb 15, 2025", category: "Invoices" },
    { name: "Meeting Notes.docx", size: "0.3 MB", date: "Feb 10, 2025", category: "Notes" },
    { name: "Wireframes.pdf", size: "4.2 MB", date: "Feb 5, 2025", category: "Design" },
    { name: "Project Timeline.xlsx", size: "0.8 MB", date: "Feb 1, 2025", category: "Planning" },
  ]

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Documents</h1>
        <p className="text-muted-foreground">Access all your project files and documents</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-9" />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-48">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="proposals">Proposals</SelectItem>
            <SelectItem value="contracts">Contracts</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="invoices">Invoices</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents Grid */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>Your shared files and documents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {doc.size} • {doc.date} • {doc.category}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
