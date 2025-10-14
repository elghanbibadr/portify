import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Search } from "lucide-react"

export default function AdminMessages() {
  const conversations = [
    { id: 1, client: "Acme Corp", lastMessage: "Thanks for the update!", time: "10 min ago", unread: 2 },
    { id: 2, client: "TechStart", lastMessage: "When can we schedule a call?", time: "1 hour ago", unread: 1 },
    { id: 3, client: "Design Studio", lastMessage: "The mockups look great!", time: "2 hours ago", unread: 0 },
    { id: 4, client: "Marketing Pro", lastMessage: "I've reviewed the proposal", time: "1 day ago", unread: 0 },
  ]

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hi! I have a question about the project timeline.",
      time: "10:30 AM",
      isClient: true,
    },
    {
      id: 2,
      sender: "You",
      content: "Of course! What would you like to know?",
      time: "10:32 AM",
      isClient: false,
    },
    {
      id: 3,
      sender: "John Doe",
      content: "When do you expect to complete the design phase?",
      time: "10:35 AM",
      isClient: true,
    },
    {
      id: 4,
      sender: "You",
      content: "We're on track to complete it by the end of this week. I'll send you the mockups for review on Friday.",
      time: "10:37 AM",
      isClient: false,
    },
  ]

  return (
    <div className="p-6 md:p-8 h-[calc(100vh-4rem)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Messages</h1>
        <p className="text-muted-foreground">Communicate with your clients</p>
      </div>

      <div className="flex-1 grid md:grid-cols-3 gap-6">
        {/* Conversations List */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  className="w-full p-4 text-left hover:bg-muted transition-colors border-b border-border last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>{conv.client.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-medium truncate">{conv.client}</p>
                        {conv.unread > 0 && (
                          <Badge variant="secondary" className="bg-primary text-primary-foreground ml-2">
                            {conv.unread}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      <p className="text-xs text-muted-foreground mt-1">{conv.time}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Thread */}
        <Card className="md:col-span-2 flex flex-col">
          <CardHeader className="border-b border-border">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Acme Corporation</CardTitle>
                <CardDescription>John Doe</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-3 ${message.isClient ? "" : "flex-row-reverse"}`}>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className={message.isClient ? "" : "bg-primary text-primary-foreground"}>
                      {message.sender.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex flex-col ${message.isClient ? "" : "items-end"} max-w-[70%]`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">{message.sender}</span>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.isClient ? "bg-muted" : "bg-primary text-primary-foreground"
                      }`}
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
    </div>
  )
}
