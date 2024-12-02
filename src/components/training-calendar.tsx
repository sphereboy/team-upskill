import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const trainingEvents = [
  {
    title: "Adobe Premiere Pro Basics",
    date: "2023-06-15",
    time: "10:00 AM - 12:00 PM",
  },
  {
    title: "Advanced Color Grading in DaVinci Resolve",
    date: "2023-06-18",
    time: "2:00 PM - 4:00 PM",
  },
  {
    title: "Audio Mixing Masterclass",
    date: "2023-06-22",
    time: "11:00 AM - 1:00 PM",
  },
]

export default function TrainingCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Training</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {trainingEvents.map((event, index) => (
            <li key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{event.title}</h3>
              <div className="text-sm text-gray-500">
                <p>{event.date}</p>
                <p>{event.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

