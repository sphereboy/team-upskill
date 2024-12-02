import { Metadata } from "next";
import Dashboard from "@/components/dashboard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Team Learning Dashboard",
  description: "A modern learning platform dashboard for media teams",
};

export default function DashboardPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
