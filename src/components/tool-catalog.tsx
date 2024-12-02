import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const tools = [
  { name: "Adobe Premiere Pro", trainingAvailable: true },
  { name: "Adobe After Effects", trainingAvailable: true },
  { name: "DaVinci Resolve", trainingAvailable: false },
  { name: "Final Cut Pro", trainingAvailable: true },
  { name: "Avid Media Composer", trainingAvailable: false },
  { name: "Adobe Audition", trainingAvailable: true },
]

export default function ToolCatalog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tool Catalog</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
              <span>{tool.name}</span>
              {tool.trainingAvailable && (
                <Badge variant="secondary">Training Available</Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

