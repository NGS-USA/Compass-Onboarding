"use client"

import { useEffect, useState } from "react"
import { getAllSessions } from "@/lib/sessions"
import StatusBadge from "./StatusBadge"
import { useRouter } from "next/navigation"

type Session = {
  id: string
  clinic_name: string
  poc_name: string
  poc_email: string
  status: string
  mfa_required: boolean
  created_at: string
  submitted_at: string | null
}

export default function SessionList() {
  const [sessions, setSessions] = useState<Session[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getAllSessions()
      .then(setSessions)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="text-center py-16 text-compass-muted text-sm">
        Loading sessions...
      </div>
    )
  }

  if (sessions.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-4xl mb-3">📋</div>
        <div className="text-compass-navy font-medium mb-1">No onboardings yet</div>
        <div className="text-compass-muted text-sm">
          Click "New Onboarding" to get started.
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-compass-border">
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              Clinic
            </th>
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              Point of Contact
            </th>
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              Status
            </th>
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              MFA
            </th>
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              Started
            </th>
            <th className="text-left text-xs font-semibold text-compass-muted uppercase tracking-wider py-3 px-4">
              Submitted
            </th>
            <th className="py-3 px-4" />
          </tr>
        </thead>
        <tbody className="divide-y divide-compass-border">
          {sessions.map((session) => (
            <tr
              key={session.id}
              className="hover:bg-compass-bg transition-colors"
            >
              <td className="py-3 px-4 font-medium text-compass-navy">
                {session.clinic_name}
              </td>
              <td className="py-3 px-4 text-compass-muted">
                <div>{session.poc_name}</div>
                <div className="text-xs">{session.poc_email}</div>
              </td>
              <td className="py-3 px-4">
                <StatusBadge status={session.status} />
              </td>
              <td className="py-3 px-4">
                {session.mfa_required ? (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                    Required
                  </span>
                ) : (
                  <span className="text-xs text-compass-muted">Optional</span>
                )}
              </td>
              <td className="py-3 px-4 text-compass-muted text-xs">
                {new Date(session.created_at).toLocaleDateString()}
              </td>
              <td className="py-3 px-4 text-compass-muted text-xs">
                {session.submitted_at
                  ? new Date(session.submitted_at).toLocaleDateString()
                  : "—"}
              </td>
              <td className="py-3 px-4">
                <button
                  onClick={() => router.push(`/dashboard/session/${session.id}`)}
                  className="text-xs text-compass-blue hover:underline font-medium"
                >
                  View →
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}