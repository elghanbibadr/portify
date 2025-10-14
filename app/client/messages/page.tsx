import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Paperclip } from "lucide-react"

export default function ClientMessages() {
  const messages = [
    {
      id: 1,
      sender: "Admin",
      content: "Hi John! I've uploaded the latest design mockups for your review. Please let me know your thoughts.",
      time: "10:30 AM",
      isClient: false,
    },
    {
      id: 2,
      sender: "You",
      content: "Thanks! I'll take a look and get back to you by end of day.",
      time: "10:45 AM",
      isClient: true,
    },
    {
      id: 3,
      sender: "You",
      content:
        "I've reviewed the mockups. They look great! Just a few minor adjustments needed on the homepage hero section.",
      time: "3:20 PM",
      isClient: true,
    },
    {
      id: 4,
      sender: "Admin",
      content: "Perfect! I'll make those changes and send you an updated version tomorrow.",
      time: "3:25 PM",
      isClient: false,
    },
  ]

  return (
    <div className="p-6 md:p-8 h-[calc(100vh-4rem)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with your project team</p>
      </div>

      <Card className="flex-1 flex flex-col">
        <CardHeader className="border-b border-border">
          <CardTitle>Conversation with Admin</CardTitle>
          <CardDescription>Project team communication</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.isClient ? "flex-row-reverse" : ""}`}>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className={message.isClient ? "bg-primary text-primary-foreground" : ""}>
                    {message.sender.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className={`flex flex-col ${message.isClient ? "items-end" : ""} max-w-[70%]`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">{message.sender}</span>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <div
                    className={`rounded-lg p-3 ${message.isClient ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-4">
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
