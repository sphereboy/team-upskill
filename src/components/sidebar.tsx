import { Book, Calendar, Lightbulb, Settings, PenToolIcon as Tool } from 'lucide-react'
import { Button } from "@/components/ui/button"

const sidebarItems = [
  { icon: Tool, label: "Tools & Software" },
  { icon: Lightbulb, label: "Tips & Tricks" },
  { icon: Book, label: "Courses" },
  { icon: Calendar, label: "Training Schedule" },
  { icon: Settings, label: "Onboarding" },
]

export default function Sidebar() {
  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="relative flex items-center py-2 px-4 w-full text-left"
          >
            <item.icon className="h-5 w-5 mr-4" />
            {item.label}
          </Button>
        ))}
      </nav>
    </div>
  )
}

