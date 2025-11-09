import React from "react";

const Alerts = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Recent Alerts</h2>
      <ul className="space-y-4">
        {/* Example Alert */}
        <li className="bg-white border-l-4 border-red-500 p-4 rounded-md shadow">
          <h4 className="font-medium">Temperature Spike on Machine #3</h4>
          <p className="text-sm text-gray-600">Occurred: 20 mins ago</p>
        </li>
      </ul>
    </div>
  );
};

export default Alerts;
