// src/components/Header.tsx
import { useState } from "react";
import { Bell } from "lucide-react";
import ScheduleMaintenanceModal from "./ScheduleMaintenanceModal";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Title + Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-sm text-gray-500">Real-time monitoring and predictive insights</p>
      </div>

      {/* Right-side: Status + Bell + Button */}
      <div className="flex items-center gap-4">
        {/* Live Data Status */}
        <span className="flex items-center rounded-md bg-green-50 px-3 py-1 text-sm font-medium text-green-800">
          <span className="mr-1 h-2 w-2 rounded-full bg-green-500" />
          Live Data
        </span>

        {/* Notification Bell */}
        <div className="relative">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            2
          </span>
        </div>

        {/* Schedule Button */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-1 rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition"
        >
          <span className="text-lg">+</span> Schedule Maintenance
        </button>
      </div>

      {/* Modal */}
      <ScheduleMaintenanceModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
