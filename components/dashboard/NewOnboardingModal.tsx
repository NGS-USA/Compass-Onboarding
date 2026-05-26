"use client"

import { useState } from "react"
import { createSession } from "@/lib/sessions"
import { useRouter } from "next/navigation"

export default function NewOnboardingModal({
  onClose,
}: {
  onClose: () => void
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    clinicName: "",
    pocName: "",
    pocEmail: "",
    mfaRequired: false,
  })

  const update = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async () => {
    if (!form.clinicName || !form.pocName || !form.pocEmail) return
    setLoading(true)

    try {
      const session = await createSession({
        clinicName: form.clinicName,
        pocName: form.pocName,
        pocEmail: form.pocEmail,
        initiatedBy: "IA Admin",
        mfaRequired: form.mfaRequired,
      })

      router.push(`/dashboard/session/${session.id}`)
      onClose()
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-base font-semibold text-compass-navy">
            New Onboarding
          </h2>
          <button
            onClick={onClose}
            className="text-compass-muted hover:text-compass-navy text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Clinic Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Blue Ridge Allergy Clinic"
              value={form.clinicName}
              onChange={(e) => update("clinicName", e.target.value)}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Point of Contact Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Last"
              value={form.pocName}
              onChange={(e) => update("pocName", e.target.value)}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-compass-text mb-1">
              Point of Contact Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="poc@clinic.com"
              value={form.pocEmail}
              onChange={(e) => update("pocEmail", e.target.value)}
              className="w-full border border-compass-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-compass-blue"
            />
          </div>

          <div className="flex items-center justify-between bg-compass-bg rounded-lg px-4 py-3">
            <div>
              <div className="text-sm font-medium text-compass-text">
                Require MFA
              </div>
              <div className="text-xs text-compass-muted">
                Force the clinic to set up multi-factor authentication
              </div>
            </div>
            <button
              onClick={() => update("mfaRequired", !form.mfaRequired)}
              className={`w-10 h-6 rounded-full transition-colors relative ${
                form.mfaRequired ? "bg-compass-green" : "bg-gray-300"
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transition-all ${
                  form.mfaRequired ? "left-4" : "left-0.5"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 border border-compass-border text-compass-muted text-sm py-2 rounded-lg hover:border-compass-navy hover:text-compass-navy transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || !form.clinicName || !form.pocName || !form.pocEmail}
            className="flex-1 bg-compass-navy text-white text-sm py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-40"
          >
            {loading ? "Creating..." : "Create Session →"}
          </button>
        </div>
      </div>
    </div>
  )
}