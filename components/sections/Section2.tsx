"use client";

import { useState } from "react";

const emptyLocation = {
  name: "",
  address: "",
  phone: "",
  fax: "",
  hours: "",
  providers: "",
  allergyTesting: false,
  injectionClinic: false,
  labDraws: false,
  telehealth: false,
  newPatientLength: "",
  followUpLength: "",
  injectionLength: "",
  schedulingPlatform: "",
  reminderSystem: "",
  cancellationPolicy: "",
  noShowPolicy: "",
};

export default function Section2() {
  const [locations, setLocations] = useState([{ ...emptyLocation }]);

  const addLocation = () => {
    setLocations([...locations, { ...emptyLocation }]);
  };

  const updateLocation = (index: number, field: string, value: string | boolean) => {
    const updated = [...locations];
    updated[index] = { ...updated[index], [field]: value };
    setLocations(updated);
  };

  return (
    <div className="space-y-8">
      {locations.map((loc, i) => (
        <div key={i} className="border border-compass-border rounded-xl p-5 space-y-5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2">
            Location {i + 1}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Location Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Fredericksburg Office"
                value={loc.name}
                onChange={(e) => updateLocation(i, "name", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="(XXX) XXX-XXXX"
                value={loc.phone}
                onChange={(e) => updateLocation(i, "phone", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-compass-text mb-1">
                Physical Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full address"
                value={loc.address}
                onChange={(e) => updateLocation(i, "address", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Fax Number
              </label>
              <input
                type="text"
                placeholder="(XXX) XXX-XXXX"
                value={loc.fax}
                onChange={(e) => updateLocation(i, "fax", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Office Hours <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Mon-Fri 8am-5pm"
                value={loc.hours}
                onChange={(e) => updateLocation(i, "hours", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-compass-text mb-1">
                Providers Assigned to Location
              </label>
              <input
                type="text"
                placeholder="Provider names or NPI numbers"
                value={loc.providers}
                onChange={(e) => updateLocation(i, "providers", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-3">
              Clinical Services
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { field: "allergyTesting", label: "Allergy Testing Performed" },
                { field: "injectionClinic", label: "Injection Clinic Offered" },
                { field: "labDraws", label: "Lab Draws Performed" },
                { field: "telehealth", label: "Telehealth Offered" },
              ].map((item) => (
                <label key={item.field} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    checked={loc[item.field as keyof typeof loc] as boolean}
                    onChange={(e) => updateLocation(i, item.field, e.target.checked)}
                    className="accent-compass-blue w-4 h-4"
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-3">
              Scheduling Workflow
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  New Patient Appt Length
                </label>
                <input
                  type="text"
                  placeholder="e.g. 60 min"
                  value={loc.newPatientLength}
                  onChange={(e) => updateLocation(i, "newPatientLength", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Follow-Up Appt Length
                </label>
                <input
                  type="text"
                  placeholder="e.g. 30 min"
                  value={loc.followUpLength}
                  onChange={(e) => updateLocation(i, "followUpLength", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Injection Appt Length
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15 min"
                  value={loc.injectionLength}
                  onChange={(e) => updateLocation(i, "injectionLength", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Scheduling Platform
                </label>
                <input
                  type="text"
                  placeholder="e.g. Compass, Phreesia"
                  value={loc.schedulingPlatform}
                  onChange={(e) => updateLocation(i, "schedulingPlatform", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Appointment Reminder System
                </label>
                <input
                  type="text"
                  placeholder="e.g. Klara, Phreesia"
                  value={loc.reminderSystem}
                  onChange={(e) => updateLocation(i, "reminderSystem", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Cancellation Policy
                </label>
                <input
                  type="text"
                  placeholder="e.g. 24 hour notice required"
                  value={loc.cancellationPolicy}
                  onChange={(e) => updateLocation(i, "cancellationPolicy", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  No Show Policy
                </label>
                <input
                  type="text"
                  placeholder="e.g. Charge after 2nd no-show"
                  value={loc.noShowPolicy}
                  onChange={(e) => updateLocation(i, "noShowPolicy", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addLocation}
        className="w-full border border-dashed border-compass-blue text-compass-blue rounded-lg py-2.5 text-sm hover:bg-blue-50 transition-colors"
      >
        + Add Another Location
      </button>
    </div>
  );
}