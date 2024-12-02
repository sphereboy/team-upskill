import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tips = [
  {
    title: "Keyboard shortcuts for faster editing",
    tool: "Adobe Premiere Pro",
    date: "2023-06-01",
  },
  {
    title: "Color grading techniques for cinematic look",
    tool: "DaVinci Resolve",
    date: "2023-05-28",
  },
  {
    title: "Advanced audio mixing tips",
    tool: "Adobe Audition",
    date: "2023-05-25",
  },
]

export default function RecentTips() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Tips & Tutorials</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{tip.title}</h3>
              <div className="flex justify-between items-center">
                <Badge>{tip.tool}</Badge>
                <span className="text-sm text-gray-500">{tip.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

