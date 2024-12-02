import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const tasks = [
  { name: "Complete profile", completed: true },
  { name: "Watch introduction video", completed: true },
  { name: "Set up workstation", completed: false },
  { name: "Meet your team", completed: false },
  { name: "Complete first assignment", completed: false },
]

export default function OnboardingProgress() {
  const completedTasks = tasks.filter((task) => task.completed).length
  const progressPercentage = (completedTasks / tasks.length) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle>Onboarding Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progressPercentage} className="mb-4" />
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="mr-2"
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

