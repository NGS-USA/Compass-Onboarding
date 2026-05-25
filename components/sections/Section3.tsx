"use client";

import { useState } from "react";

const emptyProvider = {
  name: "",
  credentials: "",
  npi: "",
  specialty: "",
  email: "",
  phone: "",
  locations: "",
  supervisingPhysician: "",
  telehealth: "",
  injectionOversight: "",
  schedulingRestrictions: "",
};

export default function Section3() {
  const [providers, setProviders] = useState([{ ...emptyProvider }]);

  const addProvider = () => {
    setProviders([...providers, { ...emptyProvider }]);
  };

  const updateProvider = (index: number, field: string, value: string) => {
    const updated = [...providers];
    updated[index] = { ...updated[index], [field]: value };
    setProviders(updated);
  };

  return (
    <div className="space-y-8">
      {providers.map((prov, i) => (
        <div key={i} className="border border-compass-border rounded-xl p-5 space-y-5">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2">
            Provider {i + 1}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Provider Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="First Last"
                value={prov.name}
                onChange={(e) => updateProvider(i, "name", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Credentials <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. MD, DO, NP, PA"
                value={prov.credentials}
                onChange={(e) => updateProvider(i, "credentials", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                NPI <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="10-digit NPI"
                value={prov.npi}
                onChange={(e) => updateProvider(i, "npi", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Specialty
              </label>
              <input
                type="text"
                placeholder="e.g. Allergy & Immunology"
                value={prov.specialty}
                onChange={(e) => updateProvider(i, "specialty", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Provider Email
              </label>
              <input
                type="email"
                placeholder="provider@practice.com"
                value={prov.email}
                onChange={(e) => updateProvider(i, "email", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Provider Phone
              </label>
              <input
                type="text"
                placeholder="(XXX) XXX-XXXX"
                value={prov.phone}
                onChange={(e) => updateProvider(i, "phone", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Assigned Locations
              </label>
              <input
                type="text"
                placeholder="Location names"
                value={prov.locations}
                onChange={(e) => updateProvider(i, "locations", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Supervising Physician
              </label>
              <input
                type="text"
                placeholder="Name, NPI (if applicable)"
                value={prov.supervisingPhysician}
                onChange={(e) => updateProvider(i, "supervisingPhysician", e.target.value)}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-3">
              Operational Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Telehealth Participation
                </label>
                <div className="flex gap-4 mt-1">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input
                        type="radio"
                        name={`telehealth-${i}`}
                        value={opt}
                        checked={prov.telehealth === opt}
                        onChange={(e) => updateProvider(i, "telehealth", e.target.value)}
                        className="accent-compass-blue"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Injection Oversight Responsibilities
                </label>
                <input
                  type="text"
                  placeholder="Describe role"
                  value={prov.injectionOversight}
                  onChange={(e) => updateProvider(i, "injectionOversight", e.target.value)}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-medium text-compass-text mb-1">
                  Scheduling Restrictions / Notes
                </label>
                <textarea
                  placeholder="Any scheduling limits, blackout periods, or workflow exceptions..."
                  value={prov.schedulingRestrictions}
                  onChange={(e) => updateProvider(i, "schedulingRestrictions", e.target.value)}
                  rows={3}
                  className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={addProvider}
        className="w-full border border-dashed border-compass-blue text-compass-blue rounded-lg py-2.5 text-sm hover:bg-blue-50 transition-colors"
      >
        + Add Another Provider
      </button>
    </div>
  );
}
