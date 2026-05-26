"use client"

import { useRouter } from "next/navigation"
import StatusBadge from "./StatusBadge"

type Session = {
  id: string
  clinic_name: string
  poc_name: string
  poc_email: string
  status: string
  mfa_required: boolean
  created_at: string
}

export default function SessionDetailHeader({
  session,
}: {
  session: Session
}) {
  const router = useRouter()

  return (
    <div className="bg-white border-b border-compass-border px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => router.push("/dashboard")}
          className="text-xs text-compass-muted hover:text-compass-navy mb-3 flex items-center gap-1 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-semibold text-compass-navy">
                {session.clinic_name}
              </h1>
              <StatusBadge status={session.status} />
              {session.mfa_required && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                  MFA Required
                </span>
              )}
            </div>
            <div className="flex items-center gap-4 text-xs text-compass-muted">
              <span>POC: {session.poc_name}</span>
              <span>·</span>
              <span>{session.poc_email}</span>
              <span>·</span>
              <span>
                Started {new Date(session.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}