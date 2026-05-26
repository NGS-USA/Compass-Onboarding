"use client"

export default function SessionActions({
  session,
  completedCount,
}: {
  session: {
    id: string
    status: string
    poc_name: string
    poc_email: string
    token: string
  }
  completedCount: number
}) {
  const inviteUrl = `${window.location.origin}/onboarding/${session.token}`

  const copyLink = () => {
    navigator.clipboard.writeText(inviteUrl)
  }

  return (
    <div className="bg-white border border-compass-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-compass-border">
        <span className="text-xs font-semibold text-compass-muted uppercase tracking-wider">
          Session Actions
        </span>
      </div>

      <div className="p-4 space-y-3">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-xs text-compass-muted mb-1">
            <span>Completion</span>
            <span>{completedCount} / 9 sections</span>
          </div>
          <div className="w-full bg-compass-border rounded-full h-1.5">
            <div
              className="bg-compass-green h-1.5 rounded-full transition-all"
              style={{ width: `${(completedCount / 9) * 100}%` }}
            />
          </div>
        </div>

        <hr className="border-compass-border" />

        {/* Invite link */}
        <div>
          <div className="text-xs font-medium text-compass-text mb-1">
            Clinic Onboarding Link
          </div>
          <div className="bg-compass-bg rounded-lg px-3 py-2 text-xs text-compass-muted break-all mb-2">
            {inviteUrl}
          </div>
          <button
            onClick={copyLink}
            className="w-full text-xs border border-compass-border text-compass-muted py-1.5 rounded-lg hover:border-compass-navy hover:text-compass-navy transition-colors"
          >
            Copy Link
          </button>
        </div>

        <hr className="border-compass-border" />

        {/* Send invite email — will be wired in v0.3.02 */}
        <button
          disabled
          className="w-full bg-compass-navy text-white text-xs py-2 rounded-lg opacity-40 cursor-not-allowed"
        >
          Send Invite Email
        </button>
        <p className="text-xs text-compass-muted text-center">
          Email sending coming in next update
        </p>

        {/* Approve — only show if submitted */}
        {session.status === "submitted" && (
          <>
            <hr className="border-compass-border" />
            <button className="w-full bg-compass-green text-white text-xs py-2 rounded-lg hover:opacity-90 transition-opacity">
              Review & Approve →
            </button>
          </>
        )}
      </div>
    </div>
  )
}