"use client";

export default function Section6() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Insurance & Vendor Info
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Participating Insurance Carriers <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="List all accepted insurance carriers..."
              rows={3}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              In-Network Plans
            </label>
            <textarea
              placeholder="List specific in-network plans per carrier if known..."
              rows={3}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue resize-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Self-Pay Available?
              </label>
              <div className="flex gap-4 mt-1">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="selfPay"
                      value={opt}
                      className="accent-compass-blue"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Billing Company / Vendor
              </label>
              <input
                type="text"
                placeholder="Name of billing company or in-house"
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Clearinghouse Used
              </label>
              <input
                type="text"
                placeholder="e.g. Change Healthcare, Availity"
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-compass-text mb-1">
                Billing Contact Information
              </label>
              <input
                type="text"
                placeholder="Name, email, phone"
                className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Billing Workflows
        </h2>
        <div className="space-y-4">
          {[
            { label: "Insurance Verification Process", name: "verification", placeholder: "How and when is eligibility verified?" },
            { label: "Referral Requirements", name: "referral", placeholder: "Which carriers require referrals? How are they obtained?" },
            { label: "Prior Authorization Workflow", name: "priorAuth", placeholder: "Describe the prior auth process for testing and injections..." },
            { label: "Claims Submission Workflow", name: "claims", placeholder: "How and when are claims submitted?" },
            { label: "Payment Posting Workflow", name: "payment", placeholder: "How are payments and EOBs posted?" },
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
          Common Codes
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Common CPT Codes", placeholder: "e.g. 95004, 95165, 95117..." },
            { label: "Common ICD-10 Codes", placeholder: "e.g. J30.1, J30.9, L20.9..." },
            { label: "Common Allergy Testing Codes", placeholder: "Scratch, intradermal, etc." },
            { label: "Common Injection Codes", placeholder: "SCIT, SLIT codes..." },
          ].map((item) => (
            <div key={item.label}>
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
    </div>
  );
}