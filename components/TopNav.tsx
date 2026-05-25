export default function TopNav({ progress }: { progress: number }) {
  return (
    <div className="bg-compass-navy text-white h-13 flex items-center px-6 gap-4">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-white/10 rounded-md flex items-center justify-center text-xs font-bold">
          IA
        </div>
        <div>
          <div className="text-xs font-semibold">Integrated Allergy</div>
          <div className="text-xs opacity-50">Compass EHR — Practice Onboarding</div>
        </div>
      </div>
      <span className="text-xs bg-white/10 px-2 py-0.5 rounded">
        Onboarding Portal
      </span>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <div className="text-xs text-white/60">{progress}% complete</div>
        <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-compass-green rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}