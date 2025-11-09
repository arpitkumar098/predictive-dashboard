import React from "react";

const Reports = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Maintenance Reports</h2>
      <ul className="space-y-4">
        <li className="bg-white p-4 border rounded-xl shadow">
          <h4 className="font-medium">April 2025 Summary</h4>
          <p className="text-sm text-gray-500">5 incidents reported, 4 resolved</p>
        </li>
        <li className="bg-white p-4 border rounded-xl shadow">
          <h4 className="font-medium">May 2025 Summary</h4>
          <p className="text-sm text-gray-500">3 scheduled maintenances completed</p>
        </li>
      </ul>
    </div>
  );
};

export default Reports;
