import React from "react";

const Maintenance = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Maintenance</h2>
      <table className="w-full table-auto border rounded-xl overflow-hidden">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="p-3">Machine</th>
            <th className="p-3">Date</th>
            <th className="p-3">Technician</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">CNC Lathe #2</td>
            <td className="p-3">June 15, 2025</td>
            <td className="p-3">Amit Kumar</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Maintenance;
