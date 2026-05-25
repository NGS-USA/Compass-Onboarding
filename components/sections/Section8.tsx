"use client";

import { useState } from "react";

const emptyUser = {
  name: "",
  email: "",
  role: "",
  locations: "",
  accessLevel: "",
};

export default function Section8() {
  const [users, setUsers] = useState([{ ...emptyUser }]);

  const addUser = () => {
    setUsers([...users, { ...emptyUser }]);
  };

  const updateUser = (index: number, field: string, value: string) => {
    const updated = [...users];
    updated[index] = { ...updated[index], [field]: value };
    setUsers(updated);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-compass-navy">
        Add each staff member who will need access to Compass. Assign their role and location(s).
      </div>

      <div className="space-y-6">
        {users.map((user, i) => (
          <div key={i} className="border border-compass-border rounded-xl p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
              User {i + 1}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Last"
                  value={user.name}
                  onChange={(e) => updateUser(i, "name", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="user@practice.com"
                  value={user.email}
                  onChange={(e) => updateUser(i, "email", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Role <span className="text-red-500">*</span>
                </label>
                <select
                  value={user.role}
                  onChange={(e) => updateUser(i, "role", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue bg-white"
                >
                  <option value="">Select role...</option>
                  <option>Compass Admin</option>
                  <option>Clinical User</option>
                  <option>Billing User</option>
                  <option>Scheduling User</option>
                  <option>Nursing Staff</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Assigned Location(s)
                </label>
                <input
                  type="text"
                  placeholder="Location name(s)"
                  value={user.locations}
                  onChange={(e) => updateUser(i, "locations", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Required Access Level
                </label>
                <select
                  value={user.accessLevel}
                  onChange={(e) => updateUser(i, "accessLevel", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue bg-white"
                >
                  <option value="">Select...</option>
                  <option>Full Access</option>
                  <option>Read Only</option>
                  <option>Limited - Scheduling Only</option>
                  <option>Limited - Billing Only</option>
                  <option>Limited - Clinical Only</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addUser}
        className="w-full border border-dashed border-compass-blue text-compass-blue rounded-lg py-2.5 text-sm hover:bg-blue-50 transition-colors"
      >
        + Add Another User
      </button>
    </div>
  );
}