import {
  LayoutDashboard,
  Server,
  AlertTriangle,
  Calendar,
  Brain,
  BarChart2,
  LogOut,
  User,
} from "lucide-react";
import { Link, useLocation } from "wouter";

function Sidebar() {
  const [location] = useLocation();

  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
    { name: "Machines", icon: <Server size={20} />, path: "/machines" },
    {
      name: "Alerts",
      icon: <AlertTriangle size={20} />,
      path: "/alerts",
      badge: 3,
    },
    { name: "Maintenance", icon: <Calendar size={20} />, path: "/maintenance" },
    { name: "Predictions", icon: <Brain size={20} />, path: "/predictions" },
    { name: "Reports", icon: <BarChart2 size={20} />, path: "/reports" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#f4f7fb] border-r px-4 py-6 flex flex-col justify-between">
      <div>
        <h1 className="text-xl font-bold mb-6 flex items-center gap-2 px-2">
          🛠️ Predictive Maint.
        </h1>

        <nav className="space-y-2">
          {navItems.map(({ name, icon, path, badge }) => {
            const isActive = location === path;

            return (
              <Link key={name} href={path}>
                <a
                  className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white text-blue-600 shadow"
                      : "text-gray-700 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{name}</span>
                  </div>
                  {badge && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {badge}
                    </span>
                  )}
                </a>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* 👤 User profile section */}
      <div className="mt-6 flex items-center justify-between bg-white p-3 rounded-lg shadow">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="text-gray-600" size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Arpit Kumar</p>
            <p className="text-xs text-gray-500">Student</p>
          </div>
        </div>
        <LogOut size={18} className="text-gray-400 cursor-pointer" />
      </div>
    </aside>
  );
}

export default Sidebar;
