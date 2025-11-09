import React from "react";

const Machines = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Machines Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Example machine card */}
        <div className="bg-white p-4 rounded-xl shadow border">
          <h3 className="text-lg font-bold">CNC Lathe #1</h3>
          <p className="text-sm text-gray-600">Status: Running</p>
          <p className="text-sm text-gray-500">Last Maintenance: 12 days ago</p>
        </div>
        {/* Add more cards dynamically */}
      </div>
    </div>
  );
};

export default Machines;
