import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Clock, CheckCircle2, FileText, Calendar } from "lucide-react"
import Link from "next/link"

export default function ProjectDetail() {
  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/client/projects">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">Website Redesign</h1>
          <p className="text-muted-foreground">Complete overhaul of company website with modern design</p>
        </div>
        <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
          <Clock className="h-3 w-3 mr-1" />
          In Progress
        </Badge>
      </div>

      {/* Project Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <Progress value={65} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">13/20</div>
            <p className="text-xs text-muted-foreground mt-1">7 remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Due Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 15</div>
            <p className="text-xs text-muted-foreground mt-1">2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground mt-1">files attached</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="files">Files</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                This project involves a complete redesign of the company website to modernize the user interface,
                improve user experience, and enhance mobile responsiveness. The new design will feature a clean,
                contemporary aesthetic with improved navigation and faster load times.
              </p>
              <div className="space-y-2">
                <h4 className="font-medium">Key Deliverables:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Homepage redesign with hero section</li>
                  <li>Product/Services pages</li>
                  <li>About and Contact pages</li>
                  <li>Mobile-responsive design</li>
                  <li>SEO optimization</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-500" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Discovery & Planning</h4>
                      <span className="text-sm text-muted-foreground">Completed</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Jan 15 - Jan 30, 2025</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-500" />
                    </div>
                    <div className="w-0.5 h-full bg-border mt-2" />
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Design Phase</h4>
                      <span className="text-sm text-muted-foreground">In Progress</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Feb 1 - Feb 28, 2025</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium">Development & Launch</h4>
                      <span className="text-sm text-muted-foreground">Upcoming</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Mar 1 - Mar 15, 2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Task List</CardTitle>
              <CardDescription>Track progress on individual tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Create wireframes", status: "completed" },
                  { name: "Design homepage mockup", status: "completed" },
                  { name: "Design product pages", status: "in-progress" },
                  { name: "Mobile responsive design", status: "in-progress" },
                  { name: "Client feedback review", status: "pending" },
                  { name: "Final revisions", status: "pending" },
                ].map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      {task.status === "completed" && (
                        <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500" />
                      )}
                      {task.status === "in-progress" && (
                        <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                      )}
                      {task.status === "pending" && (
                        <div className="h-5 w-5 rounded-full border-2 border-muted-foreground" />
                      )}
                      <span className={task.status === "completed" ? "line-through text-muted-foreground" : ""}>
                        {task.name}
                      </span>
                    </div>
                    {task.status === "completed" && (
                      <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                        Done
                      </Badge>
                    )}
                    {task.status === "in-progress" && (
                      <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                        Active
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="files" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Files</CardTitle>
              <CardDescription>Documents and assets related to this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Project Brief.pdf", size: "2.4 MB", date: "Jan 20, 2025" },
                  { name: "Wireframes.fig", size: "5.1 MB", date: "Feb 1, 2025" },
                  { name: "Homepage Mockup.png", size: "3.8 MB", date: "Feb 10, 2025" },
                  { name: "Style Guide.pdf", size: "1.2 MB", date: "Feb 12, 2025" },
                ].map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {file.size} • {file.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
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
              <CardDescription>Latest updates and changes to this project</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: "uploaded a file", item: "Homepage Mockup.png", time: "2 hours ago" },
                  { action: "completed task", item: "Design homepage mockup", time: "5 hours ago" },
                  { action: "added a comment", item: "Feedback on wireframes", time: "1 day ago" },
                  { action: "updated status", item: "Changed to In Progress", time: "2 days ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-sm">
                        <span className="font-medium">Admin</span> {activity.action}{" "}
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
