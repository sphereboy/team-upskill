import React from "react";
import Link from "next/link";
import {
  Wrench,
  Lightbulb,
  BookOpen,
  Calendar,
  Package,
  Home,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: Wrench, label: "Tools & Software", active: false },
    { icon: Lightbulb, label: "Tips & Tricks", active: true },
    { icon: BookOpen, label: "Courses", active: false },
    { icon: Calendar, label: "Training Schedule", active: false },
    { icon: Package, label: "Onboarding", active: false },
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-slate-300 p-4 flex flex-col">
      <div className="flex-1">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-150
                ${
                  item.active
                    ? "bg-slate-700/50 text-white"
                    : "hover:bg-slate-700/30 hover:text-white"
                }
                cursor-pointer
                border-l-2 ${
                  item.active ? "border-blue-500" : "border-transparent"
                }
              `}
            >
              <item.icon
                className={`w-5 h-5 ${item.active ? "text-blue-500" : ""}`}
              />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-700/50 pt-4">
          <div className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Quick Access
          </div>
          <div className="mt-4 space-y-2">
            <div className="px-4 py-2 text-sm hover:text-white cursor-pointer">
              Recent Tutorials
            </div>
            <div className="px-4 py-2 text-sm hover:text-white cursor-pointer">
              Saved Resources
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700/50 pt-4 mt-auto">
        <Link href="/">
          <div
            className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-150
              hover:bg-slate-700/30 hover:text-white cursor-pointer"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
