"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { createClient } from "@/lib/supabase"
import IATopNav from "@/components/dashboard/IATopNav"
import SessionDetailHeader from "@/components/dashboard/SessionDetailHeader"
import SessionSidebar from "@/components/dashboard/SessionSidebar"
import SessionActions from "@/components/dashboard/SessionActions"
import Section1 from "@/components/sections/Section1"
import Section2 from "@/components/sections/Section2"
import Section3 from "@/components/sections/Section3"
import Section4 from "@/components/sections/Section4"
import Section5 from "@/components/sections/Section5"
import Section6 from "@/components/sections/Section6"
import Section7 from "@/components/sections/Section7"
import Section8 from "@/components/sections/Section8"
import Section9 from "@/components/sections/Section9"

const sectionTitles = [
  "Practice Information",
  "Location Information",
  "Provider Information",
  "Patient Identification",
  "Scheduling Workflow",
  "Insurance & Billing",
  "Technical & EHR",
  "User Access & Roles",
  "Documents & Uploads",
]

const sectionSources = [
  "Office Manager / Practice Administrator",
  "Office Manager / Scheduling Staff",
  "Office Manager / Clinical Staff",
  "EHR SME / Office Manager / IT Support",
  "Scheduling Staff / Office Manager",
  "Billing Department / Billing Vendor",
  "Internal IT / MSP / EHR SME",
  "Office Manager / Practice Administrator",
  "Multiple Departments",
]

type Session = {
  id: string
  clinic_name: string
  poc_name: string
  poc_email: string
  status: string
  mfa_required: boolean
  created_at: string
  token: string
}

export default function SessionDetailPage() {
  const { id } = useParams()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const [completed, setCompleted] = useState<number[]>([])

  useEffect(() => {
    const supabase = createClient()

    supabase
      .from("onboarding_sessions")
      .select("*")
      .eq("id", id)
      .single()
      .then(({ data, error }) => {
        if (error) console.error(error)
        else setSession(data)
        setLoading(false)
      })
  }, [id])

  const markComplete = () => {
    if (!completed.includes(current)) {
      setCompleted((prev) => [...prev, current])
    }
    if (current < 8) setCurrent(current + 1)
  }

  const renderSection = () => {
    switch (current) {
      case 0: return <Section1 />
      case 1: return <Section2 />
      case 2: return <Section3 />
      case 3: return <Section4 />
      case 4: return <Section5 />
      case 5: return <Section6 />
      case 6: return <Section7 />
      case 7: return <Section8 />
      case 8: return <Section9 />
      default: return null
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-compass-bg flex items-center justify-center">
        <p className="text-compass-muted text-sm">Loading session...</p>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-compass-bg flex items-center justify-center">
        <p className="text-compass-muted text-sm">Session not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-compass-bg">
      <IATopNav />
      <SessionDetailHeader session={session} />

      <div className="max-w-6xl mx-auto px-6 py-6 flex gap-6">
        <div className="flex flex-col gap-4">
          <SessionSidebar
            current={current}
            completed={completed}
            onNavigate={setCurrent}
          />
          <SessionActions
            session={{
              id: session.id,
              clinic_name: session.clinic_name,
              poc_name: session.poc_name,
              poc_email: session.poc_email,
              status: session.status,
              token: session.token,
            }}
            completedCount={completed.length}
          />
        </div>

        <div className="flex-1">
          <div className="bg-white border border-compass-border rounded-xl p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-lg font-semibold text-compass-navy">
                  {sectionTitles[current]}
                </h2>
                {completed.includes(current) && (
                  <span className="text-xs bg-green-100 text-compass-green font-medium px-2 py-0.5 rounded-full">
                    Complete
                  </span>
                )}
              </div>
              <p className="text-xs text-compass-muted">
                Source: {sectionSources[current]}
              </p>
            </div>

            {renderSection()}

            <div className="flex justify-between items-center mt-8 pt-5 border-t border-compass-border">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="text-sm text-compass-muted hover:text-compass-navy disabled:opacity-30 transition-colors"
              >
                ← Previous
              </button>
              <div className="flex items-center gap-3">
                <span className="text-xs text-compass-muted">
                  {current + 1} of 9
                </span>
                <button
                  onClick={markComplete}
                  className="bg-compass-green text-white text-sm px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {completed.includes(current)
                    ? "Next Section →"
                    : "Mark Complete & Continue →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}