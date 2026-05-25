"use client";

const sections = [
  { num: 1, label: "Practice Information" },
  { num: 2, label: "Location Information" },
  { num: 3, label: "Provider Information" },
  { num: 4, label: "Patient Identification" },
  { num: 5, label: "Scheduling Workflow" },
  { num: 6, label: "Insurance & Billing" },
  { num: 7, label: "Technical & EHR" },
  { num: 8, label: "User Access & Roles" },
  { num: 9, label: "Documents & Uploads" },
];

export default function Sidebar({
  current,
  completed,
  onNavigate,
}: {
  current: number;
  completed: number[];
  onNavigate: (i: number) => void;
}) {
  return (
    <div className="w-56 min-h-screen bg-compass-navy flex-shrink-0 flex flex-col">
      <div className="px-5 pt-5 pb-2 text-xs uppercase tracking-widest text-white/40">
        Intake Sections
      </div>
      {sections.map((s, i) => {
        const isActive = current === i;
        const isDone = completed.includes(i);
        return (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`flex items-center gap-3 px-5 py-2.5 text-left border-l-4 transition-all ${
              isActive
                ? "bg-white/10 border-compass-green text-white"
                : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 border ${
                isDone
                  ? "bg-compass-green border-compass-green text-white"
                  : "border-white/30 text-white/40"
              }`}
            >
              {isDone ? "✓" : s.num}
            </div>
            <div>
              <div className="text-xs font-medium">{s.label}</div>
              <div className="text-xs opacity-50">Section {s.num}</div>
            </div>
          </button>
        );
      })}
    </div>
  );
}