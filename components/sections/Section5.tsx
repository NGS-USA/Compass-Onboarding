"use client";

export default function Section5() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Platform & Appointment Types
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Scheduling Platform <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Compass, Klara, Phreesia"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Calendar Export Availability
            </label>
            <div className="flex gap-4 mt-1">
              {["Yes", "No"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="calExport"
                    value={opt}
                    className="accent-compass-blue"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-compass-text mb-1">
              Appointment Types Used
            </label>
            <input
              type="text"
              placeholder="e.g. New Patient, Follow-Up, Injection, Telehealth, Lab Draw"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-compass-text mb-1">
              Standard Appointment Durations
            </label>
            <input
              type="text"
              placeholder="e.g. New Patient 60min, Follow-Up 30min, Injection 15min"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Workflow Details
        </h2>
        <div className="space-y-4">
          {[
            { label: "New Patient Workflow", name: "newPatient", placeholder: "Describe the process from referral or call to scheduled appointment..." },
            { label: "Existing Patient Workflow", name: "existingPatient", placeholder: "Describe how existing patients schedule follow-ups or injections..." },
            { label: "Injection Scheduling Process", name: "injection", placeholder: "How are injection appointments scheduled and tracked?" },
            { label: "Referral Workflow", name: "referral", placeholder: "How are referrals received and processed?" },
            { label: "Appointment Reminder Workflow", name: "reminders", placeholder: "When are reminders sent, and by what method (text, email, call)?" },
          ].map((item) => (
            <div key={item.name}>
              <label className="block text-xs font-medium text-compass-text mb-1">
                {item.label}
              </label>
              <textarea
                placeholder={item.placeholder}
                rows={3}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Access & Restrictions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Shared Scheduling Access
            </label>
            <input
              type="text"
              placeholder="Who can access and edit the schedule?"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Scheduling Restrictions
            </label>
            <input
              type="text"
              placeholder="Any limits on who can book certain appointment types?"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-compass-text mb-1">
              Blackout Dates / Limited Availability Rules
            </label>
            <textarea
              placeholder="Holidays, provider vacations, or recurring blocked times..."
              rows={3}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}