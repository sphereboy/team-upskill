import { Metadata } from "next"
import Dashboard from "@/components/dashboard"

export const metadata: Metadata = {
  title: "Media Team Learning Dashboard",
  description: "A modern learning platform dashboard for media teams",
}

export default function DashboardPage() {
  return <Dashboard />
}

