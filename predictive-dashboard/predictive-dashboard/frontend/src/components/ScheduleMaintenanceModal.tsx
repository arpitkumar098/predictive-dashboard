// src/components/ScheduleMaintenanceModal.tsx
import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function ScheduleMaintenanceModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    machine: "",
    type: "",
    priority: "Medium",
    datetime: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scheduled Maintenance:", formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-xl font-semibold mb-4">Schedule Maintenance</Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="machine"
              placeholder="Machine ID or Name"
              required
              className="w-full border rounded p-2"
              onChange={handleChange}
            />
            <input
              name="type"
              placeholder="Maintenance Type"
              required
              className="w-full border rounded p-2"
              onChange={handleChange}
            />
            <select
              name="priority"
              className="w-full border rounded p-2"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <input
              type="datetime-local"
              name="datetime"
              required
              className="w-full border rounded p-2"
              onChange={handleChange}
            />
            <textarea
              name="notes"
              placeholder="Additional notes"
              rows={3}
              className="w-full border rounded p-2"
              onChange={handleChange}
            />

            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
                Cancel
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Schedule
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
