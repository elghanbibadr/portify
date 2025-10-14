import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Upload, Search, Filter, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function AdminDocuments() {
  const documents = [
    { name: "Project Proposal.pdf", client: "Acme Corp", size: "2.4 MB", date: "Mar 1, 2025", category: "Proposals" },
    {
      name: "Contract Agreement.docx",
      client: "TechStart",
      size: "1.8 MB",
      date: "Feb 28, 2025",
      category: "Contracts",
    },
    { name: "Design Mockups.fig", client: "Design Studio", size: "5.1 MB", date: "Feb 25, 2025", category: "Design" },
    { name: "Brand Guidelines.pdf", client: "Acme Corp", size: "3.2 MB", date: "Feb 20, 2025", category: "Brand" },
    { name: "Invoice #1234.pdf", client: "Marketing Pro", size: "0.5 MB", date: "Feb 15, 2025", category: "Invoices" },
    { name: "Meeting Notes.docx", client: "TechStart", size: "0.3 MB", date: "Feb 10, 2025", category: "Notes" },
  ]

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Documents</h1>
          <p className="text-muted-foreground">Manage all client documents and files</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
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

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle>All Documents</CardTitle>
          <CardDescription>Files shared with clients</CardDescription>
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
                      {doc.client} • {doc.size} • {doc.date} • {doc.category}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
