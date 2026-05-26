"use client"

const sections = [
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

export default function SessionSidebar({
  current,
  completed,
  onNavigate,
}: {
  current: number
  completed: number[]
  onNavigate: (i: number) => void
}) {
  return (
    <div className="w-56 flex-shrink-0">
      <div className="bg-white border border-compass-border rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-compass-border">
          <span className="text-xs font-semibold text-compass-muted uppercase tracking-wider">
            Sections
          </span>
        </div>
        {sections.map((label, i) => {
          const isActive = current === i
          const isDone = completed.includes(i)
          return (
            <button
              key={i}
              onClick={() => onNavigate(i)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left border-b border-compass-border last:border-0 transition-colors ${
                isActive
                  ? "bg-compass-bg border-l-2 border-l-compass-navy"
                  : "hover:bg-compass-bg"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 border ${
                  isDone
                    ? "bg-compass-green border-compass-green text-white"
                    : isActive
                    ? "border-compass-navy text-compass-navy"
                    : "border-compass-border text-compass-muted"
                }`}
              >
                {isDone ? "✓" : i + 1}
              </div>
              <span
                className={`text-xs ${
                  isActive
                    ? "font-medium text-compass-navy"
                    : "text-compass-muted"
                }`}
              >
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}