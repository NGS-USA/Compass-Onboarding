"use client"

export default function IATopNav() {
  return (
    <div className="bg-compass-navy text-white px-6 h-14 flex items-center gap-4 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold">
          IA
        </div>
        <div>
          <div className="text-xs font-semibold">Integrated Allergy</div>
          <div className="text-xs opacity-50">Compass EHR — Onboarding Manager</div>
        </div>
      </div>
      <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
        IA Dashboard
      </span>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-xs">
          IA
        </div>
        <span className="text-xs opacity-70">Integrated Allergy</span>
      </div>
    </div>
  )
}