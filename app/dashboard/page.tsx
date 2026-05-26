"use client"

import { useState } from "react"
import IATopNav from "@/components/dashboard/IATopNav"
import SessionList from "@/components/dashboard/SessionList"
import NewOnboardingModal from "@/components/dashboard/NewOnboardingModal"

export default function DashboardPage() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen bg-compass-bg">
      <IATopNav />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-compass-navy mb-1">
              Onboarding Sessions
            </h1>
            <p className="text-sm text-compass-muted">
              Manage all active and completed clinic onboardings.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-compass-navy text-white text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-medium"
          >
            + New Onboarding
          </button>
        </div>

        <div className="bg-white border border-compass-border rounded-xl">
          <div className="px-4 py-3 border-b border-compass-border flex items-center gap-4">
            <span className="text-xs font-semibold text-compass-muted uppercase tracking-wider">
              All Sessions
            </span>
            <div className="flex gap-2 ml-auto">
              {["All", "In Progress", "Submitted", "Approved", "Archived"].map(
                (f) => (
                  <button
                    key={f}
                    className="text-xs px-3 py-1 rounded-full border border-compass-border text-compass-muted hover:border-compass-navy hover:text-compass-navy transition-colors"
                  >
                    {f}
                  </button>
                )
              )}
            </div>
          </div>
          <SessionList />
        </div>
      </div>

      {showModal && (
        <NewOnboardingModal onClose={() => setShowModal(false)} />
      )}
    </div>
  )
}