import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FolderKanban, Search, Clock, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

export default function ClientProjects() {
  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      description: "Complete overhaul of company website with modern design",
      status: "in-progress",
      progress: 65,
      dueDate: "Mar 15, 2025",
      tasks: { completed: 13, total: 20 },
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "iOS and Android app for customer engagement",
      status: "in-progress",
      progress: 40,
      dueDate: "Apr 30, 2025",
      tasks: { completed: 8, total: 25 },
    },
    {
      id: 3,
      name: "Brand Identity Package",
      description: "Logo, color palette, and brand guidelines",
      status: "completed",
      progress: 100,
      dueDate: "Feb 28, 2025",
      tasks: { completed: 15, total: 15 },
    },
    {
      id: 4,
      name: "SEO Optimization",
      description: "Improve search engine rankings and organic traffic",
      status: "pending",
      progress: 0,
      dueDate: "May 15, 2025",
      tasks: { completed: 0, total: 12 },
    },
  ]

  return (
    <div className="p-6 md:p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">Track and manage all your projects in one place</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search projects..." className="pl-9" />
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FolderKanban className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription className="mt-1">{project.description}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Due {project.dueDate}</span>
                </div>
                <span className="text-muted-foreground">
                  {project.tasks.completed}/{project.tasks.total} tasks
                </span>
              </div>

              <div className="flex items-center justify-between pt-2">
                {project.status === "in-progress" && (
                  <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400">
                    <Clock className="h-3 w-3 mr-1" />
                    In Progress
                  </Badge>
                )}
                {project.status === "completed" && (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                    <CheckCircle2 className="h-3 w-3 mr-1" />
                    Completed
                  </Badge>
                )}
                {project.status === "pending" && (
                  <Badge variant="secondary" className="bg-gray-500/10 text-gray-700 dark:text-gray-400">
                    <XCircle className="h-3 w-3 mr-1" />
                    Pending
                  </Badge>
                )}
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/client/projects/${project.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
