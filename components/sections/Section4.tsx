"use client";

export default function Section4() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          EHR & Identifier Setup
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Current EHR/EMR Platform <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Epic, Athena, eClinicalWorks"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Patient Identifier Terminology <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue bg-white">
              <option value="">Select...</option>
              <option>MRN</option>
              <option>Patient Record Number</option>
              <option>Client ID</option>
              <option>Chart ID</option>
              <option>Account Number</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-compass-text mb-1">
              Example Patient Identifier Format
            </label>
            <input
              type="text"
              placeholder="e.g. MRN-000001 or 6-digit numeric"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Record Structure
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: "Identifiers unique across all locations?", name: "unique" },
            { label: "Duplicate patient records possible?", name: "duplicates" },
            { label: "Can identifiers change?", name: "canChange" },
            { label: "Identifiers included in exports?", name: "inExports" },
          ].map((item) => (
            <div key={item.name}>
              <label className="block text-xs font-medium text-compass-text mb-2">
                {item.label}
              </label>
              <div className="flex gap-4">
                {["Yes", "No", "Unsure"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name={item.name}
                      value={opt}
                      className="accent-compass-blue"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Data Export Availability
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {[
            { label: "Patient Export Available?", name: "patientExport" },
            { label: "Scheduling Export Available?", name: "schedExport" },
            { label: "Insurance Export Available?", name: "insExport" },
          ].map((item) => (
            <div key={item.name}>
              <label className="block text-xs font-medium text-compass-text mb-2">
                {item.label}
              </label>
              <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name={item.name}
                      value={opt}
                      className="accent-compass-blue"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label className="block text-xs font-medium text-compass-text mb-1">
            Import/Export Process Notes
          </label>
          <textarea
            placeholder="Any notes about existing data migration, format requirements, or constraints..."
            rows={3}
            className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
          />
        </div>
      </div>
    </div>
  );
}