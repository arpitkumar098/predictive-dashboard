import React from "react";

const Predictions = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Predictive Analysis</h2>
      <div className="bg-white p-4 rounded-xl shadow border space-y-2">
        <p className="text-gray-700">
          Machine #4 has a 78% probability of failure within 10 days.
        </p>
        <p className="text-gray-700">
          Machine #2 trending abnormal vibration — early bearing wear detected.
        </p>
      </div>
    </div>
  );
};

export default Predictions;
