import { useState } from 'react';
import { Bell, Plus } from 'lucide-react';
import DashboardStats from '../components/Dashboard/DashboardStats';
import SensorChart from '@/components/SensorChart';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('Temperature');

  const sensorTabs = ['Temperature', 'Vibration', 'RPM'];
  const machines = [
    { name: 'CNC-001', status: 'Critical', temp: 79, line: 'Line A' },
    { name: 'PRESS-002', status: 'Healthy', temp: 64, line: 'Line B' },
    { name: 'PUMP-003', status: 'Healthy', temp: 71, line: 'Water Treatment' },
    { name: 'FAN-004', status: 'Critical', temp: 99, line: 'Cooling System' },
    { name: 'CONV-005', status: 'Critical', temp: 104, line: 'Line C' },
  ];

  const alerts = [
    'CNC-001 temperature exceeded 100°C (100.4°C)',
    'CONV-005 temperature exceeded 100°C (100.2°C)',
    'FAN-004 temperature exceeded 110°C threshold',
  ];

  const predictions = [
    { id: 'CNC-001', msg: 'Continue normal operation, schedule routine maintenance', risk: 'LOW', confidence: 87 },
    { id: 'PRESS-002', msg: 'Schedule immediate inspection and maintenance', risk: 'HIGH', confidence: 89 },
    { id: 'PUMP-003', msg: 'Monitor closely, consider preventive maintenance', risk: 'MEDIUM', confidence: 72 },
  ];

  const maintenanceSchedule = [
    {
      label: 'Today',
      tasks: [
        { title: 'Filter Replacement', machine: 'PUMP-003', person: 'Sarah Lewis', risk: 'LOW' },
        { title: 'Emergency Check', machine: 'PRESS-002', person: 'Tom Rodriguez', risk: 'HIGH' },
      ],
    },
    { label: 'Tomorrow', tasks: [] },
    {
      label: 'This Week',
      tasks: [
        { title: 'Oil Change', machine: 'CNC-001', person: 'Mike Thompson', risk: 'MEDIUM' },
      ],
    },
    { label: 'Next Week', tasks: [] },
  ];

  const reportData = [
    {
      title: 'May Maintenance Report',
      description: 'Monthly breakdown of all maintenance tasks and risk analysis',
      date: 'June 1, 2025',
    },
    {
      title: 'Sensor Performance Report',
      description: 'Analysis of sensor readings and accuracy for all machines',
      date: 'June 3, 2025',
    },
  ];

  // ✅ Mock sensor data
  const temperatureData = [
    { time: "10:00", value: 75 },
    { time: "10:10", value: 78 },
    { time: "10:20", value: 74 },
    { time: "10:30", value: 80 },
  ];
  const vibrationData = [
    { time: "10:00", value: 0.03 },
    { time: "10:10", value: 0.05 },
    { time: "10:20", value: 0.04 },
    { time: "10:30", value: 0.06 },
  ];
  const rpmData = [
    { time: "10:00", value: 1500 },
    { time: "10:10", value: 1520 },
    { time: "10:20", value: 1480 },
    { time: "10:30", value: 1510 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Metrics */}
      <DashboardStats />

      {/* Sensor Chart + Machine Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Real-time Sensor */}
        <div className="bg-white rounded-xl shadow p-4 lg:col-span-2">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Real-time Sensor Data</h2>
            <div className="space-x-2">
              {sensorTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded ${
                    activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ Render charts dynamically */}
          <div className="h-64">
            {activeTab === 'Temperature' && (
              <SensorChart title="Temperature (°C)" data={temperatureData} color="#f97316" />
            )}
            {activeTab === 'Vibration' && (
              <SensorChart title="Vibration (mm/s)" data={vibrationData} color="#3b82f6" />
            )}
            {activeTab === 'RPM' && (
              <SensorChart title="RPM" data={rpmData} color="#10b981" />
            )}
          </div>
        </div>

        {/* Machine Status */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Machine Status</h2>
            <a href="#" className="text-sm text-blue-600 font-medium">View All</a>
          </div>
          {machines.map((m, idx) => (
            <div key={idx} className="flex justify-between items-center py-2 border-b last:border-0">
              <div>
                <p className="font-medium">{m.name}</p>
                <p className="text-xs text-gray-500">{m.line}</p>
              </div>
              <div className="text-right">
                <p className={`text-sm font-semibold ${m.status === 'Critical' ? 'text-red-500' : 'text-green-500'}`}>
                  {m.status}
                </p>
                <p className="text-xs text-gray-500">{m.temp}°C</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts + Prediction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alerts */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Recent Alerts</h2>
            <p className="text-sm text-gray-400">Updated less than a minute ago</p>
          </div>
          {alerts.map((msg, idx) => (
            <div key={idx} className="bg-red-50 border border-red-200 p-3 rounded mb-2 relative">
              <p className="text-sm font-semibold text-red-600">● High Temperature Alert</p>
              <p className="text-sm">{msg}</p>
              <p className="text-xs text-gray-500 mt-1">about 17 hours ago</p>
              <span className="absolute top-2 right-2 text-xs font-bold text-white bg-red-500 px-2 py-0.5 rounded">
                CRITICAL
              </span>
            </div>
          ))}
          <a className="text-sm text-blue-600 font-medium cursor-pointer">View All Alerts</a>
        </div>

        {/* Predictive Analysis */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Predictive Analysis</h2>
          <p className="text-sm text-gray-500 mb-4">AI-powered maintenance insights</p>
          {predictions.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 rounded mb-2 border ${
                item.risk === 'HIGH'
                  ? 'bg-red-50 border-red-300'
                  : item.risk === 'MEDIUM'
                  ? 'bg-yellow-50 border-yellow-300'
                  : 'bg-green-50 border-green-300'
              }`}
            >
              <p className="font-medium">{item.id}</p>
              <p className="text-sm">{item.msg}</p>
              <div className="flex justify-between items-center mt-2 text-sm">
                <span className="text-gray-500">Confidence: {item.confidence}%</span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${
                    item.risk === 'HIGH'
                      ? 'bg-red-500 text-white'
                      : item.risk === 'MEDIUM'
                      ? 'bg-yellow-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}
                >
                  {item.risk} RISK
                </span>
              </div>
            </div>
          ))}
          <a className="text-sm text-blue-600 font-medium cursor-pointer">View All Predictions</a>
        </div>
      </div>

      {/* Upcoming Maintenance */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-lg font-semibold">Upcoming Maintenance</h2>
            <p className="text-sm text-gray-500">Scheduled tasks and assignments</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="text-lg font-bold">+</span>
            Add Task
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {maintenanceSchedule.map((section, idx) => (
            <div key={idx}>
              <p className="font-bold mb-2">{section.label}</p>
              {section.tasks.length === 0 ? (
                <p className="text-gray-400">No tasks scheduled</p>
              ) : (
                section.tasks.map((task, tIdx) => (
                  <div key={tIdx} className="p-2 rounded border mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <p className="font-semibold">{task.title}</p>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                          task.risk === 'HIGH'
                            ? 'bg-red-500 text-white'
                            : task.risk === 'MEDIUM'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-green-500 text-white'
                        }`}
                      >
                        {task.risk}
                      </span>
                    </div>
                    <p>{task.machine}</p>
                    <p className="text-xs text-gray-500">Assigned to: {task.person}</p>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Reports Section */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Reports</h2>
        <p className="text-sm text-gray-500 mb-4">Download and review system reports</p>
        <div className="space-y-4">
          {reportData.map((report, idx) => (
            <div key={idx} className="border p-4 rounded hover:shadow transition">
              <h3 className="font-semibold">{report.title}</h3>
              <p className="text-sm text-gray-600">{report.description}</p>
              <p className="text-xs text-gray-400 mt-1">{report.date}</p>
              <button className="mt-2 text-sm text-blue-600 font-medium hover:underline">Download</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}