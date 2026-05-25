"use client";

export default function Section1() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Business Identity
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Legal Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Integrated Allergy Associates LLC"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              DBA Name
            </label>
            <input
              type="text"
              placeholder="Doing Business As..."
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Tax ID / EIN <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="XX-XXXXXXX"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Website
            </label>
            <input
              type="text"
              placeholder="https://..."
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Main Office Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="(XXX) XXX-XXXX"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Main Office Fax
            </label>
            <input
              type="text"
              placeholder="(XXX) XXX-XXXX"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-xs font-medium text-compass-text mb-1">
            Primary Practice Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Street address"
            className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue mb-2"
          />
          <input
            type="text"
            placeholder="City, State, ZIP"
            className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Billing Address
            </label>
            <input
              type="text"
              placeholder="If different from above"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Time Zone <span className="text-red-500">*</span>
            </label>
            <select className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue bg-white">
              <option value="">Select...</option>
              <option>Eastern (ET)</option>
              <option>Central (CT)</option>
              <option>Mountain (MT)</option>
              <option>Pacific (PT)</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Key Contacts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Primary Administrative Contact <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name, email, phone"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Billing Contact
            </label>
            <input
              type="text"
              placeholder="Name, email, phone"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Scheduling Contact
            </label>
            <input
              type="text"
              placeholder="Name, email, phone"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Clinical Contact
            </label>
            <input
              type="text"
              placeholder="Name, email, phone"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-xs font-medium text-compass-text mb-1">
              Escalation Contact
            </label>
            <input
              type="text"
              placeholder="Name, email, phone"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-compass-navy border-b border-compass-border pb-2 mb-4">
          Practice Scale
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Number of Locations
            </label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Number of Providers
            </label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Number of Clinical Staff
            </label>
            <input
              type="number"
              min="1"
              placeholder="1"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Approximate Patient Volume
            </label>
            <input
              type="text"
              placeholder="e.g. 500 active patients"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              New Patients Per Month
            </label>
            <input
              type="text"
              placeholder="e.g. 30-40"
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
}