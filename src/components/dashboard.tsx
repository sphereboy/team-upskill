"use client"

import { useState } from "react"
import TopNav from "./top-nav"
import Sidebar from "./sidebar"
import ToolCatalog from "./tool-catalog"
import OnboardingProgress from "./onboarding-progress"
import RecentTips from "./recent-tips"
import TrainingCalendar from "./training-calendar"

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ToolCatalog />
              <OnboardingProgress />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RecentTips />
              <TrainingCalendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

