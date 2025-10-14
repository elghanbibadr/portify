import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, MapPin, Building, FolderKanban, FileText, CreditCard } from "lucide-react"
import Link from "next/link"

export default function ClientDetail() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/clients">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Acme Corporation</h1>
          <p className="text-muted-foreground">Client since January 15, 2025</p>
        </div>
        <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
          Active
        </Badge>
      </div>

      {/* Client Info */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>contact@acme.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
              <span>
                123 Business St, Suite 100
                <br />
                San Francisco, CA 94105
              </span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Company Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Building className="h-4 w-4 text-muted-foreground" />
              <span>Technology</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Company Size:</span>
              <span className="ml-2 font-medium">50-100 employees</span>
            </div>
            <div className="text-sm">
              <span className="text-muted-foreground">Website:</span>
              <span className="ml-2 font-medium">acme.com</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground">Account Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Active Projects</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Documents</span>
              <span className="font-semibold">24</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Total Revenue</span>
              <span className="font-semibold">$12,450</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="projects" className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Projects</CardTitle>
                  <CardDescription>All projects for this client</CardDescription>
                </div>
                <Button size="sm">New Project</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Website Redesign", status: "in-progress", progress: 65, dueDate: "Mar 15, 2025" },
                  { name: "Mobile App Development", status: "in-progress", progress: 40, dueDate: "Apr 30, 2025" },
                  { name: "Brand Identity Package", status: "completed", progress: 100, dueDate: "Feb 28, 2025" },
                ].map((project, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FolderKanban className="h-5 w-5 text-primary" />
                        <div>
                          <h4 className="font-medium">{project.name}</h4>
                          <p className="text-sm text-muted-foreground">Due {project.dueDate}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2 transition-all"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium w-12 text-right">{project.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Documents</CardTitle>
                  <CardDescription>Files shared with this client</CardDescription>
                </div>
                <Button size="sm">Upload Document</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Project Proposal.pdf", size: "2.4 MB", date: "Mar 1, 2025" },
                  { name: "Contract Agreement.docx", size: "1.8 MB", date: "Feb 28, 2025" },
                  { name: "Design Mockups.fig", size: "5.1 MB", date: "Feb 25, 2025" },
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.size} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Client Invoices</CardTitle>
                  <CardDescription>Billing history for this client</CardDescription>
                </div>
                <Button size="sm">Create Invoice</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { id: "INV-1234", amount: "$1,250.00", date: "Mar 1, 2025", status: "pending" },
                  { id: "INV-1233", amount: "$1,200.00", date: "Feb 1, 2025", status: "pending" },
                  { id: "INV-1232", amount: "$2,500.00", date: "Jan 1, 2025", status: "paid" },
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">{invoice.id}</p>
                        <p className="text-sm text-muted-foreground">Issued {invoice.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
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
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest interactions with this client</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "uploaded document", item: "Project Proposal.pdf", time: "2 hours ago" },
                  { action: "sent invoice", item: "INV-1234", time: "1 day ago" },
                  { action: "sent message", item: "Project update", time: "2 days ago" },
                  { action: "created project", item: "Website Redesign", time: "1 week ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">You</span> {activity.action}{" "}
                        <span className="font-medium">{activity.item}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
