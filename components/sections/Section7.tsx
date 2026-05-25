"use client";

export default function Section7() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Platforms
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "EHR/EMR Platform", req: true, placeholder: "Current EHR platform name" },
            { label: "Practice Management Platform", req: false, placeholder: "PM software name" },
            { label: "Billing Platform", req: false, placeholder: "Billing software name" },
            { label: "Fax Platform", req: false, placeholder: "e.g. eFax, RingCentral, Concord" },
            { label: "Secure Email Platform", req: false, placeholder: "e.g. Paubox, Zix" },
          ].map((item) => (
            <div key={item.label} className={item.label === "Secure Email Platform" ? "col-span-2 max-w-sm" : ""}>
              <label className="block text-xs font-medium text-compass-text mb-1">
                {item.label} {item.req && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                placeholder={item.placeholder}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Technical Contacts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "IT Provider Name", placeholder: "MSP or internal IT team" },
            { label: "Technical Point of Contact", placeholder: "Name, email, phone" },
            { label: "EHR Vendor Contact", placeholder: "Vendor support contact" },
            { label: "After-Hours Escalation Contact", placeholder: "Name, phone for urgent issues" },
          ].map((item) => (
            <div key={item.label}>
              <label className="block text-xs font-medium text-compass-text mb-1">
                {item.label}
              </label>
              <input
                type="text"
                placeholder={item.placeholder}
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Infrastructure
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-2">
              Hosting Type <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {["Cloud Hosted", "On-Premise", "Hybrid"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="hosting"
                    value={opt}
                    className="accent-compass-blue"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-2">
              MFA Enabled?
            </label>
            <div className="flex gap-4">
              {["Yes", "No", "Partial"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="mfa"
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
              Existing Integrations
            </label>
            <textarea
              placeholder="List any current integrations (lab systems, portals, clearinghouses, etc.)..."
              rows={3}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Data Export Capabilities
            </label>
            <textarea
              placeholder="What formats can the current EHR export? (CSV, HL7, FHIR, etc.)"
              rows={3}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Preferred Secure File Transfer Method
            </label>
            <input
              type="text"
              placeholder="e.g. SFTP, Secure email, ShareFile"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}