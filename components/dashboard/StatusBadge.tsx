const statusConfig: Record<string, { label: string; classes: string }> = {
  draft: {
    label: "Draft",
    classes: "bg-gray-100 text-gray-600",
  },
  in_progress: {
    label: "In Progress",
    classes: "bg-blue-100 text-blue-700",
  },
  submitted: {
    label: "Submitted",
    classes: "bg-yellow-100 text-yellow-700",
  },
  approved: {
    label: "Approved",
    classes: "bg-green-100 text-green-700",
  },
  archived: {
    label: "Archived",
    classes: "bg-purple-100 text-purple-700",
  },
}

export default function StatusBadge({ status }: { status: string }) {
  const config = statusConfig[status] ?? statusConfig.draft

  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${config.classes}`}
    >
      {config.label}
    </span>
  )
}