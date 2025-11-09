// src/components/DashboardStats.tsx
import { useEffect, useState } from "react"
import { Server, CheckCircle, AlertTriangle, Clock } from "lucide-react"

export default function DashboardStats() {
  const [stats, setStats] = useState([
    {
      label: "Total Machines",
      value: 0,
      icon: <Server className="text-blue-600" />,
      iconBg: "bg-blue-100",
      footer: "",
      footerColor: "text-green-600",
    },
    {
      label: "Healthy Status",
      value: 0,
      subtext: "",
      icon: <CheckCircle className="text-green-600" />,
      iconBg: "bg-green-100",
    },
    {
      label: "Active Alerts",
      value: 0,
      icon: <AlertTriangle className="text-orange-500" />,
      iconBg: "bg-orange-100",
      footer: "",
      footerColor: "text-red-600",
    },
    {
      label: "Overall Uptime",
      value: "0%",
      icon: <Clock className="text-green-600" />,
      iconBg: "bg-green-100",
      footer: "",
      footerColor: "text-green-600",
    },
  ])

  // Simulate real-time updates (replace with fetch/socket later)
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulated dynamic data
      const updatedStats = [
        {
          label: "Total Machines",
          value: 5,
          icon: <Server className="text-blue-600" />,
          iconBg: "bg-blue-100",
          footer: "↗ 2 new this month",
          footerColor: "text-green-600",
        },
        {
          label: "Healthy Status",
          value: Math.floor(Math.random() * 5),
          subtext: `${Math.floor(Math.random() * 100)}% operational`,
          icon: <CheckCircle className="text-green-600" />,
          iconBg: "bg-green-100",
        },
        {
          label: "Active Alerts",
          value: Math.floor(Math.random() * 6),
          icon: <AlertTriangle className="text-orange-500" />,
          iconBg: "bg-orange-100",
          footer: "↗ random alerts",
          footerColor: "text-red-600",
        },
        {
          label: "Overall Uptime",
          value: `${Math.floor(70 + Math.random() * 20)}%`,
          icon: <Clock className="text-green-600" />,
          iconBg: "bg-green-100",
          footer: "+0.5% vs last week",
          footerColor: "text-green-600",
        },
      ]
      setStats(updatedStats)
    }, 3000) // every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-xl border bg-white px-6 py-4 shadow-sm flex justify-between items-center"
        >
          <div>
            <h3 className="text-sm text-gray-500 font-medium">{stat.label}</h3>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            {stat.subtext && (
              <p className="text-sm text-gray-500">{stat.subtext}</p>
            )}
            {stat.footer && (
              <p className={`text-sm font-medium mt-1 ${stat.footerColor}`}>
                {stat.footer}
              </p>
            )}
          </div>
          <div className={`ml-4 rounded-lg p-3 ${stat.iconBg}`}>{stat.icon}</div>
        </div>
      ))}
    </div>
  )
}